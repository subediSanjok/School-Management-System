import re
from pathlib import Path
import glob

root = Path('..') / 'frontend' / 'src' / 'data' / 'smsData.js'
text = root.read_text(encoding='utf-8')
endpoints = re.findall(r"endpoint:\s*'(\/api[^']*)'", text)
print('FRONTEND', len(endpoints))
for e in endpoints:
    print(e)

paths = set()
for p in glob.glob('src/main/java/com/School/Sms/controller/*.java'):
    txt = Path(p).read_text(encoding='utf-8')
    m = re.search(r'@RequestMapping\("([^\"]*)"\)', txt)
    base = m.group(1) if m else ''
    for mm in re.finditer(r'@(GetMapping|PostMapping|PutMapping|DeleteMapping)\s*(?:\(\s*\"([^\"]*)\"\s*\))?', txt):
        path = base + (mm.group(2) or '')
        if path.endswith('/'):
            path = path[:-1]
        paths.add(path)
print('\nBACKEND', len(paths))
for p in sorted(paths):
    print(p)
missing = set(endpoints) - paths
print('\nMISSING', len(missing))
for m in sorted(missing):
    print(m)
