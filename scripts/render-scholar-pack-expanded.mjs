import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const outHtml = path.join(root, 'drafts/scholar-profiles-learning-materials-v0.11.5-expanded.html');
const outPdf = path.join(root, 'archive/pdf/scholar-profiles-learning-materials-v0.11.5-expanded.pdf');
const imgDir = path.join(root, 'drafts/scholar-images');

const cited = [
  {ko:'에릭 브린욜프슨', en:'Erik Brynjolfsson', axis:'O1 경제질서', place:'미국 · Stanford HAI / Digital Economy Lab', key:'AI 생산성, 과업 재설계, 인간-AI 보완', works:['The Second Machine Age','Machine, Platform, Crowd'], know:['AI는 직업 전체보다 과업 단위를 먼저 바꾼다.','생산성은 도구 도입이 아니라 조직·업무 재설계에서 나온다.','정체성은 AI 시대 개인 생산자의 차별화 자산이 된다.'], ask:'AI가 개인 생산성을 키우려면 어떤 공공 인프라와 업무 재설계가 먼저 필요한가?', img:''},
  {ko:'다니엘 서스킨드', en:'Daniel Susskind', axis:'O1 경제질서', place:'영국 · King’s College London / Oxford Ethics in AI', key:'기술실업, 일의 의미, 분배', works:['A World Without Work','Growth: A History and a Reckoning'], know:['AI는 일자리 수만이 아니라 소득·인정·삶의 의미 배분 방식을 흔든다.','일자리 보장보다 생산수단·기회 접근 보장이 중요해진다.','정체성 기반 기여 영역은 “일 없는 미래” 논의를 생산질서 논의로 바꾼다.'], ask:'노동 중심 사회계약이 약해질 때 소득·인정·기여는 무엇으로 재조직되는가?', img:''},
  {ko:'마리아나 마추카토', en:'Mariana Mazzucato', axis:'O1 경제질서', place:'영국 · UCL Institute for Innovation and Public Purpose', key:'미션경제, 공공가치, 시장 형성 국가', works:['The Entrepreneurial State','Mission Economy'], know:['국가는 시장 실패 보정자가 아니라 시장 형성자다.','AI·데이터·컴퓨팅 접근권은 복지보다 생산정책에 가깝다.','공공조달·공공 AI 인프라가 정체성 기반 생산자 경제의 기반이 된다.'], ask:'한국형 공공 AI 인프라는 어떤 미션과 조달 구조로 설계해야 하는가?', img:''},
  {ko:'대런 아세모글루', en:'Daron Acemoglu', axis:'O2 정치질서', place:'미국 · MIT Institute Professor', key:'제도, 권력, 기술 방향, 민주주의', works:['Why Nations Fail','Power and Progress'], know:['기술 진보의 이익은 자동 배분되지 않고 제도와 권력이 결정한다.','AI 자동화가 인간 보완 기술이 되려면 민주적 방향 설정이 필요하다.','플랫폼·알고리즘은 경제 인프라이자 정치 권력이다.'], ask:'AI의 방향을 시장·국가·도시·시민 중 누가 어떻게 통제해야 하는가?', img:'daron-acemoglu.png'},
  {ko:'요슈아 벤지오', en:'Yoshua Bengio', axis:'O2 정치질서', place:'캐나다 · Université de Montréal / Mila', key:'딥러닝, AI 안전, 프런티어 AI 거버넌스', works:['AI safety 공개서한·인터뷰','Mila frontier AI governance 자료'], know:['고도 AI는 생산성 기술이면서 권력 집중과 안보 위험을 키우는 범용 기술이다.','프런티어 AI는 기업·강대국 속도경쟁만으로 다룰 수 없다.','독립 검증, 공공 연구기반, 국제 규칙이 함께 필요하다.'], ask:'한국이 제공할 수 있는 AI 안전 검증·도시 테스트베드는 무엇인가?', img:'yoshua-bengio.jpg'},
  {ko:'리처드 플로리다', en:'Richard Florida', axis:'O2 도시·정치질서', place:'캐나다 · University of Toronto Rotman School', key:'창조계급, 도시 다양성, 지역혁신', works:['The Rise of the Creative Class','The New Urban Crisis'], know:['도시는 물리 인프라가 아니라 인재·관용·문화밀도·다양성으로 혁신한다.','AI 시대에도 도시는 사라지지 않고 정체성 실험장으로 재정의된다.','강소도시는 대도시 축소판이 아니라 훈련·산업·생활이 가까운 실행 단위다.'], ask:'정체성 기반 생산자에게 필요한 도시 조건은 무엇인가?', img:''},
  {ko:'쇼샤나 주보프', en:'Shoshana Zuboff', axis:'O3 사회계약', place:'미국 · Harvard Business School 명예교수', key:'감시자본주의, 행동잉여, 플랫폼 권력', works:['The Age of Surveillance Capitalism'], know:['플랫폼은 행동 데이터를 추출해 예측·조작 가능한 권력으로 바꾼다.','문제는 개인정보 보호만이 아니라 선택지·노출·인정 구조의 통제다.','새 사회계약은 플랫폼 권력의 설명·거부·조정권을 포함해야 한다.'], ask:'플랫폼의 추천·노출·평판 권력은 어떤 공적 규칙으로 조정해야 하는가?', img:''},
  {ko:'루치아노 플로리디', en:'Luciano Floridi', axis:'O3 사회계약', place:'미국/이탈리아 · Yale Digital Ethics Center / Bologna', key:'정보윤리, infosphere, 디지털 거버넌스', works:['The Fourth Revolution','The Ethics of Information'], know:['인간은 디지털 정보환경 속에서 정체성과 행위를 구성한다.','디지털 권리는 데이터 보호를 넘어 정보환경 설계 윤리로 확장된다.','AI 시대 사회계약은 개인·공동체·플랫폼이 공유하는 정보환경의 규칙이다.'], ask:'디지털 사회계약은 권리 목록인가, 정보환경 설계 원칙인가?', img:''},
];
const candidates = [
 ['데이비드 오터','David Autor','AI·노동','미국 · MIT','과업 기반 노동시장, 자동화와 보완'],
 ['요하이 벤클러','Yochai Benkler','네트워크 생산','미국 · Harvard','commons-based peer production'],
 ['캐시 오닐','Cathy O’Neil','알고리즘 책임','미국','Weapons of Math Destruction'],
 ['케이트 크로퍼드','Kate Crawford','AI 권력','미국/호주 · USC / MSR','AI의 물질성·권력 구조'],
 ['버지니아 유뱅크스','Virginia Eubanks','복지 알고리즘','미국 · University at Albany','자동화된 불평등'],
 ['메러디스 휘터커','Meredith Whittaker','AI 거버넌스','미국 · Signal / AI Now','빅테크 권력과 책임성'],
 ['사피야 우모자 노블','Safiya Umoja Noble','검색·권력','미국 · UCLA','Algorithms of Oppression'],
 ['루하 벤저민','Ruha Benjamin','기술과 차별','미국 · Princeton','New Jim Code'],
 ['제프리 힌턴','Geoffrey Hinton','AI 위험','캐나다/영국 · Toronto','딥러닝과 고도 AI 위험'],
 ['스튜어트 러셀','Stuart Russell','AI 안전','미국 · UC Berkeley','Human Compatible'],
 ['아제이 아그라왈','Ajay Agrawal','AI 경제학','캐나다 · University of Toronto','prediction machines'],
 ['카를로타 페레스','Carlota Perez','기술혁명','영국/베네수엘라','기술-금융 패러다임'],
 ['사스키아 사센','Saskia Sassen','글로벌 도시','미국 · Columbia','global city'],
 ['에드워드 글레이저','Edward Glaeser','도시경제','미국 · Harvard','도시의 학습·혁신 효과'],
 ['앨리슨 고프닉','Alison Gopnik','아동발달','미국 · UC Berkeley','탐색·놀이·학습'],
 ['아마르티아 센','Amartya Sen','역량접근','미국/인도 · Harvard','자유와 역량 중심 발전'],
];
function imgTag(s){
  if(!s.img) return `<div class="avatar noimg">${s.ko.slice(0,2)}</div>`;
  const file=path.join(imgDir,s.img);
  if(!fs.existsSync(file)) return `<div class="avatar noimg">${s.ko.slice(0,2)}</div>`;
  return `<img class="avatar" src="file://${file}" />`;
}
const cards=cited.map((s,i)=>`<section class="scholar">
  <div class="head"><div>${imgTag(s)}</div><div><div class="axis">${s.axis}</div><h2>${i+1}. ${s.ko}</h2><div class="en">${s.en}</div><div class="place">${s.place}</div></div></div>
  <div class="key">${s.key}</div>
  <div class="cols"><div><h3>읽을 자료</h3><ul>${s.works.map(w=>`<li>${w}</li>`).join('')}</ul></div><div><h3>우리가 알아야 할 것</h3><ul>${s.know.map(w=>`<li>${w}</li>`).join('')}</ul></div></div>
  <div class="q"><b>대화 질문</b> ${s.ask}</div>
</section>`).join('\n');
const cand=candidates.map((c,i)=>`<div class="cand"><b>${i+1}. ${c[0]}</b><span>${c[1]}</span><em>${c[2]} · ${c[3]}</em><p>${c[4]}</p></div>`).join('');
const html=`<!doctype html><html lang="ko"><head><meta charset="utf-8"/><title>v0.11.5 Scholar Pack Expanded</title><style>
@page{size:A4;margin:12mm 12mm 14mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{font-family:Pretendard,-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif;margin:0;color:#111;word-break:keep-all}.bar{height:4px;background:#111;margin-bottom:10mm}.cover{min-height:250mm;position:relative;padding:18mm 6mm}.cover:before{content:"0.11.5";position:absolute;right:0;top:0;font-size:78pt;font-weight:950;color:#c4c9d1;letter-spacing:-5px;z-index:-1}.kicker{font-size:10pt;font-weight:900;letter-spacing:.18em;color:#0d7d72}.cover h1{font-size:31pt;line-height:1.05;letter-spacing:-1.8px;margin:12mm 0 6mm}.sub{font-size:13pt;line-height:1.55;color:#4b5563;font-weight:650;max-width:155mm}.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm;margin-top:18mm}.tile{border:1.3px solid #111;border-top:5px solid #0d7d72;padding:5mm;background:#fff;min-height:38mm}.tile b{font-size:14pt}.tile p{font-size:10pt;line-height:1.45;color:#4b5563;font-weight:650}.page{break-before:page}.intro{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin:5mm 0 7mm}.box{border:1px solid #d4d4d4;padding:4mm}.box h2{margin:0 0 2mm;font-size:15pt}.box li{font-size:9.8pt;line-height:1.45;margin-bottom:1.5mm}.scholar{break-inside:avoid;border:1px solid #d4d4d4;border-top:4px solid #111;padding:4.2mm;margin:0 0 4.2mm;background:#fff}.head{display:grid;grid-template-columns:26mm 1fr;gap:4mm;align-items:center}.avatar{width:24mm;height:24mm;object-fit:cover;border:1px solid #111;filter:grayscale(100%)}.noimg{display:flex;align-items:center;justify-content:center;background:#f1f1f1;font-size:16pt;font-weight:900}.axis{font-size:8.5pt;font-weight:900;letter-spacing:.14em;color:#0d7d72}h2{font-size:16pt;line-height:1.15;margin:1mm 0 0}.en{font-size:9.2pt;color:#6b7280;font-weight:700}.place{font-size:9.3pt;color:#333;font-weight:750;margin-top:1mm}.key{margin:3mm 0;padding:2mm 3mm;background:#f2f2f2;border-left:4px solid #0d7d72;font-size:10pt;font-weight:800}.cols{display:grid;grid-template-columns:34% 1fr;gap:4mm}.scholar h3{font-size:9pt;letter-spacing:.08em;color:#111;margin:0 0 1.5mm}.scholar ul{margin:0;padding-left:4mm}.scholar li{font-size:9.2pt;line-height:1.36;margin-bottom:1.2mm;color:#30343a}.q{margin-top:2.5mm;border-top:1px solid #d4d4d4;padding-top:2mm;font-size:9.4pt;line-height:1.42;color:#111}.q b{color:#0d7d72;margin-right:2mm}.candgrid{display:grid;grid-template-columns:1fr 1fr;gap:3mm}.cand{border:1px solid #d4d4d4;padding:3mm;break-inside:avoid}.cand b{display:block;font-size:10.3pt}.cand span{display:block;color:#6b7280;font-size:8.8pt;font-weight:700}.cand em{display:block;font-style:normal;color:#0d7d72;font-size:8.6pt;font-weight:800;margin:1mm 0}.cand p{margin:0;font-size:8.9pt;line-height:1.34}.footer{position:fixed;bottom:5mm;left:12mm;right:12mm;border-top:1px solid #d4d4d4;padding-top:1.8mm;display:flex;justify-content:space-between;color:#6b7280;font-size:8pt;font-weight:650}
</style></head><body><div class="footer"><span>태재미래전략연구원 · 디지털팀</span><span>Scholar Learning Pack v0.11.5 expanded</span></div><section class="cover"><div class="bar"></div><div class="kicker">SCHOLAR LEARNING PACK</div><h1>마스터플랜 v0.11.5<br/>학자 학습자료 확장판</h1><div class="sub">석학·기관 인용의 정확한 출처를 확인하고, 학자의 어떤 대목을 마스터플랜 어느 논지에 응용했는지 남기는 팀 내부 스터디 자료.</div><div class="summary"><div class="tile"><b>출처 확인</b><p>저자·자료명·연도·쪽수/장/URL을 확인해 인용 팩트를 잠근다.</p></div><div class="tile"><b>응용 경로</b><p>발언·기고·논문·책의 어떤 대목을 우리 문장에 반영했는지 연결한다.</p></div><div class="tile"><b>논지 검증</b><p>경제질서·정치질서·사회계약 축에서 과잉해석과 빈 근거를 가른다.</p></div></div></section><section class="page"><h1>읽는 법</h1><div class="intro"><div class="box"><h2>스터디 자료 목적</h2><ul><li>우리 자료에 인용한 내용의 정확한 출처를 확인한다.</li><li>학자 발언·기고·학술 산출물의 어떤 대목을 응용했는지 기록한다.</li><li>샘플: 250708 요하이 벤클러, 250804 카스텔·주보프 스터디 자료.</li></ul></div><div class="box"><h2>카드 필수 항목</h2><ul><li>원출처: 저자·자료명·연도·쪽수/장/URL.</li><li>핵심 대목: 직접 인용 또는 충실한 요지.</li><li>우리 자료 반영: 어느 논지에 어떻게 들어갔는지.</li><li>검증 메모: 번역상 주의점과 과잉해석 금지선.</li></ul></div><div class="box"><h2>핵심 질문</h2><ul><li>AI는 노동을 대체하는가, 생산수단 접근권을 재분배하는가?</li><li>플랫폼·알고리즘 권력은 시장권력인가, 정치권력인가?</li><li>한국은 미·중 AI 경쟁에서 어떤 실험장을 제공할 수 있는가?</li></ul></div><div class="box"><h2>대화 준비 기준</h2><ul><li>학자의 대표 개념을 한 문장으로 말할 수 있어야 한다.</li><li>마스터플랜의 어느 절을 보강하는지 연결해야 한다.</li><li>자문 때 던질 질문을 하나 이상 가져가야 한다.</li></ul></div></div>${cards}</section><section class="page"><h1>추가 후보 학자 16명</h1><div class="candgrid">${cand}</div></section></body></html>`;
fs.writeFileSync(outHtml,html);
const browser=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const page=await browser.newPage();
await page.goto('file://'+outHtml,{waitUntil:'networkidle0'});
await page.pdf({path:outPdf,format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false});
await browser.close();
console.log('HTML written:', outHtml);
console.log('PDF written:', outPdf);
