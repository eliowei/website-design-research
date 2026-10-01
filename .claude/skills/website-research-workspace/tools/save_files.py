"""從子代理執行紀錄抽出最後回傳的訊息，存下其中 `===== FILE: <路徑> =====` 格式的檔案。
用法：python save_files.py <transcript.jsonl> <outputs_dir>"""
import json, os, re, sys

def handback(path):
    last = None
    for line in open(path):
        try:
            o = json.loads(line)
        except Exception:
            continue
        m = o.get('message') or {}
        if m.get('role') != 'assistant' or not isinstance(m.get('content'), list):
            continue
        for b in m['content']:
            if b.get('type') == 'tool_use' and b.get('name') in ('SubagentHandback', 'SendMessage'):
                last = b['input'].get('message', last)
    return last or ''

text = handback(sys.argv[1])
parts = re.split(r'^\s*===== FILE: (.+?) =====\s*$', text, flags=re.M)
for i in range(1, len(parts), 2):
    rel, body = parts[i].strip(), parts[i + 1].strip('\n') + '\n'
    dest = os.path.join(sys.argv[2], rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, 'w').write(body)
    print('saved', dest, len(body))
if len(parts) == 1:
    print('沒有找到 FILE 區塊')
