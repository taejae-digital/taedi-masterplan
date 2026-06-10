import fs from 'fs';
import path from 'path';
import https from 'https';

const root = process.cwd();
const logPath = path.join(root, 'drafts/scholar-pack-expanded-progress.log');
const outMd = path.join(root, 'drafts/scholar-profiles-learning-materials-v0.11.5-expanded.md');
const imgDir = path.join(root, 'drafts/scholar-images');
fs.mkdirSync(imgDir, { recursive: true });

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(logPath, line);
  console.log(line.trim());
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'taedi-scholar-pack/0.11.5' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function download(url, file) {
  return new Promise((resolve) => {
    if (!url) return resolve(false);
    const f = fs.createWriteStream(file);
    https.get(url, { headers: { 'User-Agent': 'taedi-scholar-pack/0.11.5' } }, res => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        f.close(); fs.rmSync(file, { force: true });
        download(res.headers.location, file).then(resolve);
        return;
      }
      if (res.statusCode !== 200) { f.close(); fs.rmSync(file, { force: true }); resolve(false); return; }
      res.pipe(f);
      f.on('finish', () => { f.close(); resolve(true); });
    }).on('error', () => { try { f.close(); fs.rmSync(file, { force: true }); } catch {} resolve(false); });
  });
}

const cited = [
  ['Erik Brynjolfsson','경제질서','미국·Stanford','AI 생산성·디지털경제'],
  ['Daniel Susskind','경제질서','영국·King’s College London / Oxford','노동의 미래·기술실업'],
  ['Mariana Mazzucato','경제질서','영국·UCL IIPP','공공가치·미션경제'],
  ['Daron Acemoglu','정치질서','미국·MIT','제도·권력·기술방향'],
  ['Yoshua Bengio','정치질서','캐나다·Université de Montréal / Mila','AI 안전·프런티어 거버넌스'],
  ['Richard Florida','정치질서/도시','캐나다·University of Toronto','창조계급·도시혁신'],
  ['Shoshana Zuboff','사회계약','미국·Harvard Business School','감시자본주의·플랫폼 권력'],
  ['Luciano Floridi','사회계약','미국/이탈리아·Yale / Bologna','정보윤리·디지털 거버넌스'],
];

const candidates = [
  ['David Autor','AI·노동','미국·MIT','노동시장 양극화와 과업 기반 분석'],
  ['Yochai Benkler','네트워크 생산','미국·Harvard','commons-based peer production'],
  ['Cathy O’Neil','알고리즘 책임','미국','Weapons of Math Destruction'],
  ['Kate Crawford','AI 권력','미국/호주·USC / Microsoft Research','AI의 물질성·권력 구조'],
  ['Virginia Eubanks','복지 알고리즘','미국·University at Albany','자동화된 불평등'],
  ['Meredith Whittaker','AI 거버넌스','미국·Signal Foundation / AI Now','빅테크 권력과 AI 책임성'],
  ['Safiya Umoja Noble','검색·인종·권력','미국·UCLA','Algorithms of Oppression'],
  ['Ruha Benjamin','기술과 차별','미국·Princeton','New Jim Code'],
  ['Geoffrey Hinton','AI 위험','캐나다/영국·University of Toronto','딥러닝·AI 위험 경고'],
  ['Stuart Russell','AI 안전','미국·UC Berkeley','Human Compatible'],
  ['Ajay Agrawal','AI 경제학','캐나다·University of Toronto','prediction machines'],
  ['Carlota Perez','기술혁명','영국/베네수엘라','기술-금융 패러다임 전환'],
  ['Saskia Sassen','글로벌 도시','미국·Columbia','global city'],
  ['Edward Glaeser','도시경제','미국·Harvard','도시의 학습·혁신 효과'],
  ['Alison Gopnik','아동발달','미국·UC Berkeley','탐색·놀이·학습'],
  ['Amartya Sen','역량접근','미국/인도·Harvard','자유와 역량 중심 발전'],
];

const all = [...cited.map(x => ({type:'인용', x})), ...candidates.map(x => ({type:'후보', x}))];

async function wikiImage(name) {
  const title = encodeURIComponent(name);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|extracts&pithumbsize=420&exintro=1&explaintext=1&titles=${title}`;
  const json = await getJson(url);
  const page = Object.values(json.query?.pages || {})[0];
  return { image: page?.thumbnail?.source || '', extract: (page?.extract || '').split('\n')[0] || '' };
}

function koName(en) {
  const m = {
    'Erik Brynjolfsson':'에릭 브린욜프슨','Daniel Susskind':'다니엘 서스킨드','Mariana Mazzucato':'마리아나 마추카토','Daron Acemoglu':'대런 아세모글루','Yoshua Bengio':'요슈아 벤지오','Richard Florida':'리처드 플로리다','Shoshana Zuboff':'쇼샤나 주보프','Luciano Floridi':'루치아노 플로리디','David Autor':'데이비드 오터','Yochai Benkler':'요하이 벤클러','Cathy O’Neil':'캐시 오닐','Kate Crawford':'케이트 크로퍼드','Virginia Eubanks':'버지니아 유뱅크스','Meredith Whittaker':'메러디스 휘터커','Safiya Umoja Noble':'사피야 우모자 노블','Ruha Benjamin':'루하 벤저민','Geoffrey Hinton':'제프리 힌턴','Stuart Russell':'스튜어트 러셀','Ajay Agrawal':'아제이 아그라왈','Carlota Perez':'카를로타 페레스','Saskia Sassen':'사스키아 사센','Edward Glaeser':'에드워드 글레이저','Alison Gopnik':'앨리슨 고프닉','Amartya Sen':'아마르티아 센'
  };
  return m[en] || en;
}

function expertBrief(en, area, place, key) {
  return `### ${koName(en)} (${en})\n- 구분: ${area}\n- 활동 지역·소속: ${place}\n- 핵심 키워드: ${key}\n- 우리가 알아야 할 것: 이 학자는 마스터플랜의 ‘정체성 기반 생산자 경제—권력 재배치—새 사회계약’ 중 ${area} 축을 검증하는 데 쓴다. 핵심은 이론명 암기가 아니라, AI가 생산수단·권력·인정 구조를 어떻게 바꾸는지 묻는 질문으로 전환하는 것이다.\n- 대화용 질문: 한국은 이 관점을 공공 AI 인프라, 도시 실험장, 플랫폼 조정권 중 어디에 먼저 적용해야 하는가?\n`;
}

async function main() {
  fs.writeFileSync(logPath, '');
  log('확장판 작업 시작: 인용 8명 + 후보 16명');
  const records = [];
  for (const item of all) {
    const [en, area, place, key] = item.x;
    log(`이미지/요약 조회: ${en}`);
    const w = await wikiImage(en).catch(e => ({image:'', extract:''}));
    let imgFile = '';
    if (w.image) {
      const ext = path.extname(new URL(w.image).pathname).split('?')[0] || '.jpg';
      imgFile = path.join(imgDir, en.toLowerCase().replace(/[^a-z0-9]+/g,'-') + ext);
      const ok = await download(w.image, imgFile);
      log(`${en} 이미지 ${ok ? '다운로드 완료' : '다운로드 실패'}`);
      if (!ok) imgFile = '';
    } else {
      log(`${en} 이미지 없음: 텍스트 카드로 대체 예정`);
    }
    records.push({ type:item.type, en, ko:koName(en), area, place, key, imgFile, wiki:w.extract });
  }

  const citedMd = records.filter(r=>r.type==='인용').map(r => `${expertBrief(r.en, r.area, r.place, r.key)}- 사진: ${r.imgFile ? path.relative(root, r.imgFile) : '없음'}\n- 공개 요약: ${r.wiki || '추가 확인 필요'}\n`).join('\n');
  const candMd = records.filter(r=>r.type==='후보').map(r => `- ${r.ko} (${r.en}) — ${r.area}; ${r.place}; ${r.key}`).join('\n');
  const md = `# 마스터플랜 v0.11.5 학자 학습자료 확장판\n\n목표: 이 자료만 읽으면 경제질서·정치질서·사회계약 분야의 전문 학자와 대화할 수 있도록 핵심 개념, 논쟁점, 질문을 압축한다.\n\n## 0. 스터디 자료 운영 기준\n\n석학·기관 인용 자료는 소개문이 아니라 팩트체크와 응용 경로 기록이다.\n\n1. 출처 확인: 우리 자료에 인용한 주장·개념·문장의 정확한 출처를 확인한다. 저자, 자료명, 발행연도, 가능하면 쪽수·장·강연명·URL까지 남긴다.\n2. 응용 경로: 학자의 어떤 발언, 기고, 논문, 책의 어떤 대목을 응용해 우리 자료의 어느 문장·논지에 반영했는지 자료 안에 명시한다.\n3. 샘플 기준: \`250708_네트워크 효과에 따른 분배 솔루션 기존 논의 분석 — 요하이 벤클러 중심으로\`, \`250804_플랫폼독점 스터디자료 — 카스텔·주보프\`.\n\n필수 카드 항목: 원출처 / 핵심 대목 / 우리 자료 반영 / 검증 메모.\n\n## 1. 인용 학자 8명 핵심 브리핑\n\n${citedMd}\n## 2. 추가 후보 학자 16명\n\n${candMd}\n\n## 3. 팀 공통 질문\n- AI는 노동을 대체하는가, 아니면 생산수단 접근권을 재분배하는가?\n- 플랫폼·알고리즘 권력은 시장권력인가, 정치권력인가?\n- 한국은 미·중 AI 경쟁에서 규제 수입국이 아니라 어떤 실험장을 제공할 수 있는가?\n- 정체성 기반 생산자 경제가 복지 담론으로 축소되지 않으려면 어떤 생산 인프라가 필요한가?\n`;
  fs.writeFileSync(outMd, md);
  log(`확장판 초안 작성 완료: ${outMd}`);
  log('다음 단계: HTML/PDF 디자인 렌더링');
}

main().catch(e => { log('ERROR ' + e.stack); process.exit(1); });
