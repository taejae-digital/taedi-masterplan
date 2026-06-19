#!/usr/bin/env python3
import concurrent.futures as cf
import json, re, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path('/Users/taejae-agent/workspace/taedi-masterplan')
OUT = ROOT/'drafts/scholar-images-parallel'
LOG = ROOT/'drafts/scholar-images-parallel.log'
OUT.mkdir(parents=True, exist_ok=True)

NAMES = [
'Erik Brynjolfsson','Daniel Susskind','Mariana Mazzucato','Daron Acemoglu','Yoshua Bengio','Richard Florida','Shoshana Zuboff','Luciano Floridi',
'David Autor','Yochai Benkler','Cathy O’Neil','Kate Crawford','Virginia Eubanks','Meredith Whittaker','Safiya Umoja Noble','Ruha Benjamin','Geoffrey Hinton','Stuart Russell','Ajay Agrawal','Carlota Perez','Saskia Sassen','Edward Glaeser','Alison Gopnik','Amartya Sen'
]
UA={'User-Agent':'taedi-scholar-pack/0.11.5 (research material image lookup)'}

def log(s):
    line=f"[{time.strftime('%H:%M:%S')}] {s}\n"
    print(line, end='')
    with LOG.open('a') as f: f.write(line)

def fetch_json(url, timeout=12):
    req=urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8','ignore'))

def download(url, path, timeout=20):
    req=urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data=r.read()
        ctype=r.headers.get('content-type','')
    if len(data) < 2000:
        raise RuntimeError(f'too small {len(data)}')
    path.write_bytes(data)
    return len(data), ctype

def slug(name): return re.sub(r'[^a-z0-9]+','-', name.lower()).strip('-')

def wikidata_p18(name):
    search='https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&type=item&search='+urllib.parse.quote(name)
    sj=fetch_json(search)
    for item in sj.get('search',[])[:3]:
        qid=item.get('id')
        if not qid: continue
        ent=fetch_json(f'https://www.wikidata.org/wiki/Special:EntityData/{qid}.json')
        claims=ent.get('entities',{}).get(qid,{}).get('claims',{})
        p18=claims.get('P18')
        if p18:
            fn=p18[0]['mainsnak']['datavalue']['value']
            return 'https://commons.wikimedia.org/wiki/Special:FilePath/'+urllib.parse.quote(fn), f'wikidata:{qid}:P18:{fn}'
    return None, None

def wikipedia_summary(name):
    variants=[name, name.replace('’',"'"), name.replace(' ','_')]
    for v in variants:
        url='https://en.wikipedia.org/api/rest_v1/page/summary/'+urllib.parse.quote(v.replace(' ','_'))
        try:
            j=fetch_json(url)
            thumb=(j.get('originalimage') or j.get('thumbnail') or {}).get('source')
            if thumb: return thumb, 'wikipedia-summary'
        except Exception:
            pass
    return None, None

def commons_search(name):
    q=urllib.parse.quote(name+' portrait')
    url=f'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={q}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=500'
    try:
        j=fetch_json(url)
        pages=j.get('query',{}).get('pages',{})
        best=[]
        for p in pages.values():
            ii=(p.get('imageinfo') or [{}])[0]
            u=ii.get('thumburl') or ii.get('url')
            if u: best.append((u, p.get('title','')))
        if best: return best[0][0], 'commons-search:'+best[0][1]
    except Exception:
        pass
    return None, None

def find_one(name):
    errors=[]
    for method in (wikipedia_summary, wikidata_p18, commons_search):
        try:
            url, source=method(name)
            if not url: continue
            ext='.jpg'
            low=url.lower()
            if '.png' in low: ext='.png'
            elif '.webp' in low: ext='.webp'
            elif '.jpeg' in low: ext='.jpg'
            path=OUT/(slug(name)+ext)
            size, ctype=download(url, path)
            return {'name':name,'ok':True,'path':str(path),'url':url,'source':source,'bytes':size,'ctype':ctype}
        except Exception as e:
            errors.append(f'{method.__name__}:{e}')
    return {'name':name,'ok':False,'errors':errors[-3:]}

def main():
    LOG.write_text('')
    log(f'parallel image search start: {len(NAMES)} scholars')
    results=[]
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        futs={ex.submit(find_one,n):n for n in NAMES}
        for fut in cf.as_completed(futs):
            r=fut.result(); results.append(r)
            if r['ok']: log(f"OK {r['name']} -> {Path(r['path']).name} {r['bytes']} bytes via {r['source']}")
            else: log(f"FAIL {r['name']} -> {r.get('errors')}")
    (ROOT/'drafts/scholar-images-parallel.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
    ok=sum(1 for r in results if r['ok'])
    log(f'done: {ok}/{len(results)} images')

if __name__=='__main__': main()
