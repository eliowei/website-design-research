#!/bin/bash
# 雲端 session 啟動時，讓 website-research skill 需要的工具可以直接用：
# - Pillow：capture_tools.py 切圖、取樣色碼、偵測空白
# - 瀏覽器憑證：把環境的代理 CA 加進 NSS 憑證庫，Playwright 才能開 HTTPS 網站
#   （不關閉憑證檢查，只是讓瀏覽器信任環境本來就提供的 CA）
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

python3 -c "import PIL" 2>/dev/null || pip install -q pillow

CA=/root/.ccr/agent-proxy-ca.crt
if [ -f "$CA" ]; then
  if ! command -v certutil >/dev/null 2>&1; then
    apt-get install -y -q libnss3-tools >/dev/null 2>&1 \
      || { apt-get update -q >/dev/null 2>&1 && apt-get install -y -q libnss3-tools >/dev/null 2>&1; }
  fi
  NSSDB="$HOME/.pki/nssdb"
  mkdir -p "$NSSDB"
  [ -f "$NSSDB/cert9.db" ] || certutil -N -d "sql:$NSSDB" --empty-password
  certutil -L -d "sql:$NSSDB" -n agent-proxy-ca >/dev/null 2>&1 \
    || certutil -A -d "sql:$NSSDB" -t "C,," -n agent-proxy-ca -i "$CA"
fi
