#!/usr/bin/env python3
"""누락 학자 사진 — 순차 + 딜레이로 429 회피"""
import json, re, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path('/Users/taejae-agent/workspace/taedi-masterplan')
OUT = ROOT/'drafts/scholar-images-parallel'
OUT.mkdir(parents=True, exist_ok=True)
UA={'User-Agent':'TaejaeResearchBot/1.0 (academic learning material; contact: digital@taejae.org)'}

NAMES = ['Daniel Susskind','Mariana Mazzucato','Richard Florida','Luciano Floridi',
'David Autor','Cathy O\u2019Neil','Kate Crawford','Virginia Eubanks','Meredith Whittaker',
'Safiya Umoja Noble','Ruha Benjamin','Geoffrey Hinton','Stuart Russell','Ajay Agrawal',
'Carlota Perez','Saskia Sassen','Edward Glaeser','Alison Gopnik','Amartya Sen']

def slug(n): return re.sub(r'[^a-z0-9]+','-',n.lower()).strip('-')

def fetch_json(url, timeout=15):
    req=urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8','ignore'))

def download(url, path, timeout=25):
    req=urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data=r.read()
    if len(data)<3000: raise RuntimeError('too small')
    path.write_bytes(data)
    return len(data)

def has_img(n):
    for ext in ('.jpg','.jpeg','.png','.webp'):
        if (OUT/(slug(n)+ext)).exists(): return True
    return False

ok=fail=0
for n in NAMES:
    if has_img(n):
        print('SKIP (exists)', n); continue
    got=False
    for attempt in range(3):
        try:
            title=urllib.parse.quote(n.replace(' ','_'))
            j=fetch_json(f'https://en.wikipedia.org/api/rest_v1/page/summary/{title}')
            src=(j.get('thumbnail') or {}).get('source','')
            if src:
                # thumbnail size is polite (small); bump to 500px variant
                src=re.sub(r'/(\d+)px-', '/500px-', src)
                ext='.png' if '.png' in src.lower() else '.jpg'
                size=download(src, OUT/(slug(n)+ext))
                print('OK', n, size, 'bytes'); ok+=1; got=True; break
            else:
                print('NOIMG', n); break
        except Exception as e:
            print('RETRY' if attempt<2 else 'FAIL', n, str(e)[:80])
            time.sleep(4*(attempt+1))
    if not got: fail+=1
    time.sleep(2.5)
print(f'done ok={ok} fail={fail}')
