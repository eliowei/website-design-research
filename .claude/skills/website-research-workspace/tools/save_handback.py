"""從子代理執行紀錄抽出最後回傳的訊息，依標記切出內嵌的檔案並存檔。
用法：python save_handback.py <transcript.jsonl> <outputs_dir> <marker=相對路徑> ...
marker 是回傳訊息中檔案內容開頭那一行包含的關鍵字；內容到下一個 ===== 標記行或訊息結尾為止。"""
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
    return last

path, out = sys.argv[1], sys.argv[2]
text = handback(path)
lines = text.split('\n')
heads = [i for i, l in enumerate(lines) if re.match(r'^\s*=====', l)]
for spec in sys.argv[3:]:
    marker, rel = spec.split('=', 1)
    start = next(i for i in heads if marker in lines[i])
    end = next((i for i in heads if i > start), len(lines))
    body = '\n'.join(lines[start + 1:end]).strip('\n') + '\n'
    dest = os.path.join(out, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, 'w').write(body)
    print('saved', dest, len(body))
