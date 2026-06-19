import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
const root=process.cwd();
const outHtml=path.join(root,'drafts/scholar-pack-fable.html');
const outPdf=path.join(root,'archive/pdf/scholar-learning-pack-v0.11.5-fable.pdf');
const imgDirs=[path.join(root,'drafts/scholar-images-parallel'), path.join(root,'drafts/scholar-images')];
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function findImg(en){for(const d of imgDirs){if(!fs.existsSync(d))continue;for(const ext of ['.jpg','.jpeg','.png','.webp']){const p=path.join(d,slug(en)+ext);if(fs.existsSync(p))return 'file://'+p;}}return ''}

const cited=[
{ko:'에릭 브린욜프슨',en:'Erik Brynjolfsson',axis:'경제질서',axisNo:'O1',place:'미국 · Stanford HAI / Digital Economy Lab',field:'디지털 경제 · AI 생산성 · 인간-AI 보완',
concepts:[['AI augmentation','AI는 인간을 대체만 하지 않고 판단·기획·분석을 증폭한다.'],['Task redesign','직업이 아니라 과업 단위로 재설계해야 생산성이 난다.'],['Intangible assets','데이터·소프트웨어·조직역량 같은 무형자산이 경쟁력의 중심이 된다.']],
readings:[['The Second Machine Age','기계가 인지 과업까지 확장하며 경제·고용 구조를 바꾼다는 큰 그림.'],['Machine, Platform, Crowd','기계지능·플랫폼·대중 협업이 조직의 경계를 다시 정한다.'],['Digital Economy Lab briefs','AI 생산성 역설과 업무 재설계에 대한 최신 실증.']],
know:['출발점은 “AI가 사람을 없앤다”가 아니라 “표준 과업의 비용이 내려가 개인이 더 큰 생산단위를 다룬다”이다.','정체성은 감성어가 아니라 AI가 낮춘 생산비 위에서 무엇을 만들지 정하는 차별화 기준이다.','정책 질문은 일자리 개수보다 AI·데이터·컴퓨팅을 개인이 쓸 수 있는가로 옮겨야 한다.'],
debate:['생산성 역설 — AI 투자만으로 생산성이 오르지 않는 이유는?','어떤 과업은 대체되고, 어떤 과업은 인간의 목적 설정을 더 중요하게 만드는가?'],
ask:'한국형 공공 AI 인프라는 개인 생산자의 과업 재설계를 어떻게 지원해야 하는가?'},
{ko:'다니엘 서스킨드',en:'Daniel Susskind',axis:'경제질서',axisNo:'O1',place:'영국 · King’s College London / Oxford Ethics in AI',field:'기술실업 · 일의 미래 · 분배와 의미',
concepts:[['Technological unemployment','기술이 새 일자리보다 기존 노동 수요를 더 빠르게 줄일 수 있다.'],['Work as distribution','산업사회는 노동을 통해 소득·지위·인정을 배분했다.'],['Meaning after work','일의 축소는 생계뿐 아니라 사회적 의미의 공백을 만든다.']],
readings:[['A World Without Work','자동화가 일자리·분배·삶의 의미를 어떻게 흔드는지 다룬 핵심서.'],['Growth: A History and a Reckoning','성장의 번영과 부작용을 함께 보고 다음 경제질서의 기준을 묻는다.'],['일의 미래 강연·기고','기술실업을 복지가 아니라 사회계약 재설계 문제로 설명.']],
know:['“일자리 보장”은 산업사회 해법이고, AI 시대에는 생산수단 접근·기여 경로·인정 구조가 함께 필요하다.','정체성 기반 생산자 경제는 취미 예찬이 아니라 노동 중심 배분 질서 이후의 대안이다.','새 사회계약은 소득 안전망과 생산 기회 접근을 동시에 다뤄야 한다.'],
debate:['일이 줄어도 인간은 어떻게 사회적 인정을 얻는가?','기본소득은 충분한가, 생산수단 접근권까지 가야 하는가?'],
ask:'노동 중심 사회계약이 약해질 때 한국은 소득·기여·인정을 어떤 구조로 다시 묶어야 하는가?'},
{ko:'마리아나 마추카토',en:'Mariana Mazzucato',axis:'경제질서',axisNo:'O1',place:'영국 · UCL Institute for Innovation and Public Purpose',field:'미션경제 · 공공가치 · 시장 형성 국가',
concepts:[['Market shaping','국가는 시장 실패를 보정하는 데 그치지 않고 새 시장을 만든다.'],['Public value','공공투자는 비용이 아니라 사회가 원하는 가치를 조직하는 방식이다.'],['Mission economy','달 착륙형 미션처럼 공공·민간 역량을 하나의 목표에 맞춘다.']],
readings:[['The Entrepreneurial State','인터넷·GPS·바이오 등 핵심 혁신에서 국가의 선도적 역할.'],['Mission Economy','공공목표 중심으로 조달·규제·투자·민간 협력을 조직하는 프레임.'],['IIPP Public Value papers','공공가치·미션지향 정책 설계의 실제 도구.']],
know:['AI·데이터·컴퓨팅 접근권은 복지 항목이 아니라 미래 생산정책의 기반이다.','국가는 플랫폼 뒤처리자가 아니라 공공 AI 생산수단의 설계자가 되어야 한다.','“여건 보장”은 결과 보장이 아니라 생산 조건의 개방이다.'],
debate:['국가가 시장을 만들 때 관료주의와 포획을 어떻게 피하는가?','공공 AI 인프라의 성과는 어떤 공공가치로 측정하는가?'],
ask:'태재가 제안할 공공 AI 인프라 미션은 교육·도시·산업 중 어디서 먼저 실험해야 하는가?'},
{ko:'대런 아세모글루',en:'Daron Acemoglu',axis:'정치질서',axisNo:'O2',place:'미국 · MIT Institute Professor',field:'제도경제학 · 정치경제 · 기술과 권력',
concepts:[['Inclusive institutions','번영은 기술보다 권력과 기회가 열린 제도에서 나온다.'],['Directed technological change','기술의 방향은 자연현상이 아니라 인센티브와 권력이 정한다.'],['Power and progress','기술 진보가 모두의 진보가 되려면 제도적 통제가 필요하다.']],
readings:[['Why Nations Fail','포용적 제도와 착취적 제도가 국가의 장기 성과를 가른다.'],['Power and Progress','기술이 시민에게 이익이 되도록 방향 설정과 권력 조정이 필요하다.'],['AI·자동화 논문','자동화 편향과 인간 보완형 기술의 차이를 실증적으로 논의.']],
know:['AI 시대 정치는 규제 세부가 아니라 “누가 기술 방향과 이익 배분을 정하는가”의 문제다.','플랫폼·알고리즘은 경제 인프라이면서 시민의 선택지를 정하는 정치 권력이다.','국가는 독점 통치자가 아니라 분산 권력의 오케스트레이터가 되어야 한다.'],
debate:['AI는 민주주의를 강화하는가, 권력 집중을 키우는가? 차이를 만드는 조건은?','인간 보완형 AI는 시장만으로 충분히 공급되는가?'],
ask:'한국은 AI 기술 방향을 민주적으로 조정할 제도 실험을 도시 단위에서 어떻게 만들 수 있는가?'},
{ko:'요슈아 벤지오',en:'Yoshua Bengio',axis:'정치질서',axisNo:'O2',place:'캐나다 · Université de Montréal / Mila',field:'딥러닝 · AI 안전 · 프런티어 거버넌스',
concepts:[['Frontier AI risk','고도 AI는 생산성 기술이면서 권력 집중·안보 위험·통제 실패를 낳을 수 있다.'],['Independent evaluation','기업 자체평가만으로는 고위험 AI를 검증할 수 없다.'],['Public-interest AI','고도 AI 연구는 공공성과 안전 기준을 가져야 한다.']],
readings:[['AI safety 공개서한·인터뷰','프런티어 AI가 일반 소프트웨어 규제와 다른 위험을 갖는 이유.'],['Mila governance 자료','안전성 연구·독립 검증·국제 협력의 제도 필요성.'],['딥러닝 강연','현대 AI 능력 확장의 기술적 배경.']],
know:['미·중 AI 경쟁은 산업정책이면서 동시에 안보·안전 질서 문제다.','한국의 포지션은 중립 구호가 아니라 검증 가능한 테스트베드와 사회계약 실험장이다.','접근권 보장과 고위험 통제는 충돌이 아니라 같이 설계할 문제다.'],
debate:['오픈소스 AI와 안전 통제는 어디까지 양립 가능한가?','국제 AI 안전기구는 권고 수준인가, 감사·제재 권한까지 가져야 하는가?'],
ask:'한국이 제안할 AI 안전 검증 도시·산업 테스트베드는 어떤 권한과 데이터를 가져야 하는가?'},
{ko:'리처드 플로리다',en:'Richard Florida',axis:'도시·정치질서',axisNo:'O2',place:'캐나다 · University of Toronto Rotman School',field:'도시경제 · 창조계급 · 지역혁신',
concepts:[['Creative class','창의적 인재와 문화적 다양성이 도시 경쟁력의 핵심이다.'],['3T: Talent·Tolerance·Technology','인재·관용·기술이 혁신 도시의 조건이다.'],['New urban crisis','창조도시는 혁신과 동시에 주거·불평등 위기를 낳는다.']],
readings:[['The Rise of the Creative Class','도시가 창의적 인재를 끌어들이는 조건과 경제 효과.'],['The New Urban Crisis','창조도시 모델의 불평등·배제 문제를 비판적으로 보완.'],['도시혁신 강연','도시 밀도와 다양성이 혁신 네트워크를 만드는 방식.']],
know:['AI 시대에도 도시는 사라지지 않는다. 정체성·산업·교육·생활이 가까이 붙는 실험장이 된다.','강소도시는 작은 대도시가 아니라 정체성 훈련과 산업 연결이 가능한 생활권 단위다.','도시 다양성은 문화 구호가 아니라 생산성 조건이다.'],
debate:['창조계급 전략은 젠트리피케이션을 키우는가?','강소도시는 대도시 집중을 어떻게 보완할 수 있는가?'],
ask:'한국의 강소도시는 어떤 산업·문화·교육 조합으로 정체성 기반 생산자를 길러야 하는가?'},
{ko:'쇼샤나 주보프',en:'Shoshana Zuboff',axis:'사회계약',axisNo:'O3',place:'미국 · Harvard Business School 명예교수',field:'감시자본주의 · 플랫폼 권력 · 행동 데이터',
concepts:[['Behavioral surplus','플랫폼은 행동 데이터를 추출해 예측·개입 자산으로 만든다.'],['Instrumentarian power','명령보다 환경 설계를 통해 행동을 유도하는 권력.'],['Surveillance capitalism','인간 경험이 데이터 원료가 되는 경제질서.']],
readings:[['The Age of Surveillance Capitalism','데이터 추출과 행동 예측 시장이 민주주의와 자유를 침식하는 구조.'],['강연·인터뷰','감시자본주의의 핵심 개념과 정책적 함의 요약.'],['플랫폼 책임성 논쟁','추천·노출·평판 권력의 공적 통제 논쟁.']],
know:['플랫폼 문제는 개인정보 보호에 그치지 않는다. 선택지·노출·인정 구조를 누가 배열하는가의 문제다.','새 사회계약에는 설명권·거부권·조정권이 들어가야 한다.','정체성 기반 생산자는 플랫폼 노출과 평판 구조 없이는 시장에 도달하기 어렵다.'],
debate:['감시자본주의 비판은 너무 포괄적인가, 플랫폼 권력의 본질을 찌르는가?','데이터 소유권만으로 플랫폼 권력을 통제할 수 있는가?'],
ask:'마스터플랜의 권리 UI는 추천·노출·평판 권력을 어디까지 설명·거부·조정하게 해야 하는가?'},
{ko:'루치아노 플로리디',en:'Luciano Floridi',axis:'사회계약',axisNo:'O3',place:'미국/이탈리아 · Yale Digital Ethics Center / Bologna',field:'정보윤리 · 디지털 거버넌스 · Infosphere',
concepts:[['Infosphere','인간은 정보환경 안에서 정체성과 행위를 구성한다.'],['Onlife','온라인과 오프라인의 구분이 사라진 생활 조건.'],['Digital ethics','데이터 보호를 넘어 정보환경 설계 윤리로 확장된다.']],
readings:[['The Fourth Revolution','인간 이해가 정보기술에 의해 어떻게 바뀌는가.'],['The Ethics of Information','정보를 윤리의 기본 단위로 보는 디지털 사회 규범론.'],['AI4People papers','AI 윤리 원칙과 거버넌스 설계를 정책 언어로 연결.']],
know:['디지털 사회계약은 권리 목록이 아니라 정보환경을 어떻게 설계할지의 원칙이다.','정체성은 디지털 정보환경 속에서 형성·발현·인정된다.','AI 윤리는 금지 목록보다 공동체가 어떤 정보환경을 보장할지로 읽어야 한다.'],
debate:['윤리 원칙은 실제 플랫폼 권력 조정으로 이어질 수 있는가?','Infosphere 관점은 국가·도시·가정 경영으로 어떻게 번역되는가?'],
ask:'정체성의 형성·발현·인정을 보장하는 정보환경의 최소 조건은 무엇인가?'}
];
const candidates=[
['데이비드 오터','David Autor','AI·노동','미국 · MIT','과업 기반 노동시장 분석. AI가 직업 전체보다 과업 묶음을 바꾸며 중간숙련 노동을 재편한다.','3.1 노동 재편 실증 보강'],
['요하이 벤클러','Yochai Benkler','네트워크 생산','미국 · Harvard','commons-based peer production. 분산 협업·공유지식이 기업 밖 생산을 가능하게 한다.','생산자 경제의 협업 구조'],
['캐시 오닐','Cathy O’Neil','알고리즘 책임','미국','Weapons of Math Destruction. 점수화·예측모델이 불평등을 자동화하는 위험.','권리 UI · 설명·거부권'],
['케이트 크로퍼드','Kate Crawford','AI 권력','미국/호주 · USC / MSR','AI는 데이터·노동·광물·전력 인프라 위에 선 물질적 권력 체계라는 비판.','AI 인프라 접근권 분석'],
['버지니아 유뱅크스','Virginia Eubanks','복지 알고리즘','미국 · Univ. at Albany','자동화된 복지 행정이 빈곤층을 감시·처벌하는 구조를 분석.','안전망의 알고리즘화 위험'],
['메러디스 휘터커','Meredith Whittaker','AI 거버넌스','미국 · Signal / AI Now','빅테크 집중, 데이터 권력, AI 산업 구조의 민주적 통제 문제.','플랫폼 권력 조정·공공 AI'],
['사피야 우모자 노블','Safiya Umoja Noble','검색·권력','미국 · UCLA','검색엔진과 알고리즘이 인종·성별 편견을 재생산한다는 분석.','노출·추천 구조의 정치성'],
['루하 벤저민','Ruha Benjamin','기술과 차별','미국 · Princeton','New Jim Code. 기술이 중립을 가장해 차별을 재생산하는 방식.','사회계약의 차별 방지 기준'],
['제프리 힌턴','Geoffrey Hinton','AI 위험','캐나다/영국 · Toronto','딥러닝 개척자. 고도 AI의 통제 실패와 사회적 위험을 경고.','4.1 AI 안전·안보 논지'],
['스튜어트 러셀','Stuart Russell','AI 안전','미국 · UC Berkeley','Human Compatible. 인간 선호와 불확실성을 중심에 둔 안전한 AI 설계.','프런티어 거버넌스 철학'],
['아제이 아그라왈','Ajay Agrawal','AI 경제학','캐나다 · Toronto','AI를 예측 비용 하락으로 해석해 의사결정 구조 변화를 설명.','AI 경제질서의 비용 구조'],
['카를로타 페레스','Carlota Perez','기술혁명','영국/베네수엘라','기술혁명과 금융자본, 제도 전환의 장기 파동 분석.','디지털 전환의 역사 프레임'],
['사스키아 사센','Saskia Sassen','글로벌 도시','미국 · Columbia','글로벌 도시가 금융·정보·이주 네트워크의 결절점이 되는 방식.','도시경영과 세계질서 연결'],
['에드워드 글레이저','Edward Glaeser','도시경제','미국 · Harvard','도시는 사람을 연결해 학습과 혁신을 증폭하는 장치.','4.3 강소도시·학습밀도'],
['앨리슨 고프닉','Alison Gopnik','아동발달','미국 · UC Berkeley','아이들은 지시된 수행보다 탐색·놀이 속에서 세계 모델을 만든다.','4.4 가정경영·정체성 발견'],
['아마르티아 센','Amartya Sen','역량접근','미국/인도 · Harvard','발전은 소득이 아니라 사람이 실제로 할 수 있는 역량과 자유의 확장.','사회계약의 자유·역량 기준']
];

const G='#c9a227'; // champagne gold
const T='#0d7d72';
const INK='#101216';

function photoEl(s){
  const u=findImg(s.en);
  if(u) return `<div class="pwrap"><img class="photo" src="${u}"/></div>`;
  return `<div class="pwrap"><div class="photo ph">${s.ko.slice(0,2)}</div></div>`;
}
const axisColor={O1:'#0d7d72',O2:'#2f5fa8',O3:'#b08322'};

const scholarPages=cited.map((s,i)=>{
const ac=axisColor[s.axisNo];
return `<section class="sheet scholar">
  <div class="bigno">${String(i+1).padStart(2,'0')}</div>
  <div class="shead">
    ${photoEl(s)}
    <div class="sid">
      <div class="axisline"><span class="axchip" style="background:${ac}">${s.axisNo}</span><span class="axname">${s.axis}</span></div>
      <h1>${s.ko}</h1>
      <div class="en">${s.en}</div>
      <div class="meta"><span class="mlab">활동</span>${s.place}</div>
      <div class="meta"><span class="mlab">분야</span>${s.field}</div>
    </div>
  </div>
  <div class="rule"><span style="background:${ac}"></span></div>
  <div class="body3">
    <div class="col">
      <h2>핵심 개념</h2>
      ${s.concepts.map(c=>`<div class="concept"><b>${c[0]}</b><p>${c[1]}</p></div>`).join('')}
    </div>
    <div class="col">
      <h2>읽을 자료</h2>
      ${s.readings.map(r=>`<div class="reading"><b>${r[0]}</b><p>${r[1]}</p></div>`).join('')}
      <h2 style="margin-top:5mm">논쟁점</h2>
      ${s.debate.map(d=>`<div class="deb"><p>${d}</p></div>`).join('')}
    </div>
    <div class="col">
      <h2>태재팀이 알아야 할 것</h2>
      ${s.know.map(k=>`<div class="know"><p>${k}</p></div>`).join('')}
    </div>
  </div>
  <div class="askband" style="border-color:${ac}">
    <div class="asklab" style="color:${ac}">자문 질문</div>
    <div class="askq">${s.ask}</div>
  </div>
  <div class="pfoot"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>${String(i+3).padStart(2,'0')}</span></div>
</section>`}).join('\n');

const candCard=(c,i)=>`<div class="cand">
  <div class="cno">${String(i+1).padStart(2,'0')}</div>
  <h3>${c[0]}</h3><div class="cen">${c[1]}</div>
  <div class="ctag">${c[2]} — ${c[3]}</div>
  <p>${c[4]}</p>
  <div class="cuse">${c[5]}</div>
</div>`;
const candA=candidates.slice(0,8).map((c,i)=>candCard(c,i)).join('');
const candB=candidates.slice(8).map((c,i)=>candCard(c,i+8)).join('');

const html=`<!doctype html><html lang="ko"><head><meta charset="utf-8"/><style>
@page{size:A4;margin:0}
*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact;margin:0;padding:0}
body{font-family:Pretendard,-apple-system,BlinkMacSystemFont,"Noto Sans KR","Apple SD Gothic Neo",sans-serif;color:${INK};word-break:keep-all}
.sheet{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;background:#fbfaf7}
/* ---------- COVER ---------- */
.cover{background:${INK};color:#f5f2ea;padding:24mm 20mm}
.cover .frame{position:absolute;inset:9mm;border:0.4mm solid rgba(201,162,39,.55)}
.cover .frame:after{content:"";position:absolute;inset:1.6mm;border:0.15mm solid rgba(201,162,39,.3)}
.cv{position:relative;height:100%;display:flex;flex-direction:column;padding:8mm 6mm}
.cv .org{font-size:9.5pt;letter-spacing:.42em;color:rgba(245,242,234,.75);font-weight:700}
.cv .gold-rule{width:34mm;height:0.8mm;background:${G};margin:9mm 0 12mm}
.cv h1{font-size:42pt;line-height:1.12;font-weight:850;letter-spacing:-1.2px}
.cv h1 em{font-style:normal;color:${G}}
.cv .sub{margin-top:9mm;font-size:12.5pt;line-height:1.75;color:rgba(245,242,234,.78);max-width:142mm;font-weight:450}
.cv .stats{margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:6mm}
.cv .stat{border-top:0.5mm solid rgba(201,162,39,.65);padding-top:4mm}
.cv .stat b{font-size:23pt;font-weight:850;color:${G};display:block;letter-spacing:-0.5px}
.cv .stat span{font-size:9.5pt;color:rgba(245,242,234,.72);line-height:1.5;display:block;margin-top:1.5mm}
.cv .edition{position:absolute;right:6mm;top:7mm;text-align:right;font-size:8.5pt;letter-spacing:.28em;color:rgba(245,242,234,.55);line-height:2}
/* ---------- INDEX / GUIDE ---------- */
.guide{padding:20mm 18mm 16mm}
.gk{font-size:9pt;font-weight:800;letter-spacing:.34em;color:${G}}
.guide h1{font-size:26pt;font-weight:850;letter-spacing:-0.8px;margin:4mm 0 3mm}
.guide .lead{font-size:11pt;line-height:1.7;color:#4a4f58;max-width:165mm;margin-bottom:9mm}
.axes{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-bottom:9mm}
.axis-card{border:0.3mm solid #d9d5ca;background:#fff;padding:5.5mm;position:relative}
.axis-card .top{height:1.1mm;position:absolute;left:0;right:0;top:0}
.axis-card .no{font-size:9pt;font-weight:900;letter-spacing:.2em;margin-bottom:2mm}
.axis-card b{font-size:14.5pt;font-weight:850;display:block;margin-bottom:2mm}
.axis-card .who{font-size:9.5pt;font-weight:700;color:#30343a;margin-bottom:2mm;line-height:1.5}
.axis-card p{font-size:9.5pt;line-height:1.55;color:#5a5f68}
.qa{display:grid;grid-template-columns:1fr 1fr;gap:5mm}
.qbox{background:#fff;border:0.3mm solid #d9d5ca;padding:5.5mm}
.qbox h2{font-size:11pt;font-weight:850;letter-spacing:.06em;margin-bottom:3.5mm;padding-bottom:2mm;border-bottom:0.5mm solid ${INK}}
.qbox li{font-size:10pt;line-height:1.62;margin:0 0 2.5mm 4.5mm;color:#30343a}
.matrix{margin-top:9mm}
.matrix h2{font-size:11pt;font-weight:850;letter-spacing:.06em;margin-bottom:3mm}
table{width:100%;border-collapse:collapse;background:#fff}
th{font-size:9pt;text-align:left;padding:2.6mm 3mm;border-top:0.6mm solid ${INK};border-bottom:0.3mm solid ${INK};font-weight:850;letter-spacing:.04em}
td{font-size:9.2pt;line-height:1.5;padding:2.8mm 3mm;border-bottom:0.2mm solid #ddd9cf;vertical-align:top;color:#30343a}
td:first-child{font-weight:800;color:${INK};white-space:nowrap}
/* ---------- SCHOLAR ---------- */
.scholar{padding:17mm 16mm 14mm}
.bigno{position:absolute;right:10mm;top:6mm;font-size:64pt;font-weight:950;color:#e9e5d8;letter-spacing:-3px;line-height:1}
.shead{display:grid;grid-template-columns:34mm 1fr;gap:7mm;align-items:center;position:relative}
.pwrap{width:32mm;height:32mm;position:relative}
.pwrap:after{content:"";position:absolute;inset:-1.8mm;border:0.35mm solid ${G};border-radius:50%}
.photo{width:32mm;height:32mm;border-radius:50%;object-fit:cover;filter:grayscale(100%) contrast(1.04)}
.ph{display:flex;align-items:center;justify-content:center;background:#ece8dd;font-size:17pt;font-weight:900;color:#9b9483;border-radius:50%}
.axisline{display:flex;align-items:center;gap:2.5mm;margin-bottom:2mm}
.axchip{color:#fff;font-size:8pt;font-weight:900;letter-spacing:.12em;padding:0.9mm 2.6mm;border-radius:0.8mm}
.axname{font-size:9.5pt;font-weight:800;letter-spacing:.14em;color:#6a6f78}
.scholar h1{font-size:25pt;font-weight:880;letter-spacing:-0.8px;line-height:1.05}
.en{font-size:10.5pt;color:#8a8576;font-weight:650;letter-spacing:.05em;margin:1.2mm 0 2.6mm}
.meta{font-size:9.8pt;color:#30343a;font-weight:600;line-height:1.6}
.mlab{display:inline-block;width:11mm;font-size:8pt;font-weight:900;letter-spacing:.16em;color:#a59f8e}
.rule{height:0.5mm;background:#e2ddd0;margin:6mm 0 6mm;position:relative}
.rule span{position:absolute;left:0;top:0;bottom:0;width:34mm}
.body3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6mm}
.scholar h2{font-size:9.5pt;font-weight:900;letter-spacing:.2em;color:${INK};margin-bottom:3.4mm;padding-bottom:1.6mm;border-bottom:0.4mm solid ${INK}}
.concept{margin-bottom:4mm}
.concept b{font-size:10.2pt;font-weight:850;display:block;margin-bottom:0.8mm}
.concept p{font-size:9.4pt;line-height:1.56;color:#494e57}
.reading{margin-bottom:3.4mm;padding-left:3mm;border-left:0.6mm solid ${G}}
.reading b{font-size:9.8pt;font-weight:800;display:block;margin-bottom:0.6mm}
.reading p{font-size:9.1pt;line-height:1.5;color:#494e57}
.deb{margin-bottom:2.6mm}
.deb p{font-size:9.3pt;line-height:1.55;color:#494e57;padding-left:3.4mm;position:relative}
.deb p:before{content:"—";position:absolute;left:0;color:${G};font-weight:900}
.know{margin-bottom:3.2mm;background:#fff;border:0.25mm solid #e0dbce;padding:3mm 3.2mm}
.know p{font-size:9.3pt;line-height:1.58;color:#30343a}
.askband{margin-top:6mm;background:${INK};padding:6mm 7mm;display:grid;grid-template-columns:24mm 1fr;gap:5mm;align-items:center;border-left:1.6mm solid}
.asklab{font-size:8.5pt;font-weight:900;letter-spacing:.24em}
.askq{color:#f5f2ea;font-size:13.5pt;line-height:1.5;font-weight:750;letter-spacing:-0.2px}
.pfoot{position:absolute;left:16mm;right:16mm;bottom:8mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:.22em;color:#a59f8e;font-weight:700;border-top:0.25mm solid #e0dbce;padding-top:2.4mm}
/* ---------- CANDIDATES ---------- */
.candpage{padding:18mm 16mm 14mm}
.candpage h1{font-size:24pt;font-weight:880;letter-spacing:-0.7px;margin:3mm 0 2.5mm}
.candpage .lead{font-size:10.5pt;line-height:1.65;color:#4a4f58;margin-bottom:8mm;max-width:160mm}
.cgrid{display:grid;grid-template-columns:1fr 1fr;gap:4.5mm}
.cand{background:#fff;border:0.3mm solid #ddd8cb;padding:4.5mm 5mm;position:relative;min-height:33mm}
.cand .cno{position:absolute;right:4mm;top:3mm;font-size:15pt;font-weight:950;color:#e9e5d8}
.cand h3{font-size:12.5pt;font-weight:850;letter-spacing:-0.3px}
.cen{font-size:8.6pt;color:#8a8576;font-weight:650;letter-spacing:.04em;margin:0.6mm 0 1.6mm}
.ctag{font-size:8.6pt;font-weight:850;color:${T};margin-bottom:1.8mm}
.cand p{font-size:9.2pt;line-height:1.5;color:#494e57;margin-bottom:2mm}
.cuse{font-size:8.4pt;font-weight:800;color:#8a8576;letter-spacing:.02em;border-top:0.2mm solid #e7e2d4;padding-top:1.6mm}
</style></head><body>

<section class="sheet cover">
  <div class="frame"></div>
  <div class="cv">
    <div class="edition">MASTERPLAN v0.11.5<br/>DEEP EDITION · 2026.06</div>
    <div class="org">TAEJAE FUTURE STRATEGY INSTITUTE</div>
    <div class="gold-rule"></div>
    <h1>학자 학습자료<br/><em>Scholar Learning Pack</em></h1>
    <div class="sub">마스터플랜의 세 축 — 경제질서·정치질서·사회계약 — 을 검증하기 위한 대화 준비 자료. 인용 학자 8명을 1명 1페이지로 깊게, 후보 학자 16명을 확장 카드로 정리했다. 목표는 이름의 암기가 아니라, 이 분야의 전문 학자와 마주 앉아 바로 토론할 수 있는 수준이다.</div>
    <div class="stats">
      <div class="stat"><b>8</b><span>인용 학자 — 핵심 개념·읽을 자료·논쟁점·자문 질문</span></div>
      <div class="stat"><b>16</b><span>후보 학자 — 인용 학자의 2배수 확장 학습 카드</span></div>
      <div class="stat"><b>3</b><span>마스터플랜 축 — 경제질서 · 정치질서 · 사회계약</span></div>
    </div>
  </div>
</section>

<section class="sheet guide">
  <div class="gk">HOW TO READ</div>
  <h1>읽는 법과 공통 질문</h1>
  <div class="lead">먼저 8명의 ‘자문 질문’만 훑어 전체 논점을 잡는다. 그 다음 학자별 핵심 개념과 읽을 자료를 연결하고, 후보 학자 16명으로 빠진 논쟁을 보강한다.</div>
  <div class="axes">
    <div class="axis-card"><div class="top" style="background:${axisColor.O1}"></div><div class="no" style="color:${axisColor.O1}">O1</div><b>경제질서</b><div class="who">브린욜프슨 · 서스킨드 · 마추카토</div><p>AI 생산성, 노동 이후의 분배, 공공 AI 인프라. 표준 노동 이후 개인 생산자 경제가 성립하는 조건.</p></div>
    <div class="axis-card"><div class="top" style="background:${axisColor.O2}"></div><div class="no" style="color:${axisColor.O2}">O2</div><b>정치질서</b><div class="who">아세모글루 · 벤지오 · 플로리다</div><p>제도와 권력, AI 안전, 도시 다양성. 플랫폼 권력의 통제와 개인-도시-국가-세계의 권력 재배치.</p></div>
    <div class="axis-card"><div class="top" style="background:${axisColor.O3}"></div><div class="no" style="color:${axisColor.O3}">O3</div><b>사회계약</b><div class="who">주보프 · 플로리디</div><p>감시자본주의와 정보윤리. 선택지·노출·인정 구조를 조정하는 새 사회계약의 규칙.</p></div>
  </div>
  <div class="qa">
    <div class="qbox"><h2>대화 준비 기준</h2><ul><li>학자의 대표 개념을 한 문장으로 말할 수 있어야 한다.</li><li>마스터플랜의 어느 절을 보강하는지 연결해야 한다.</li><li>자문 때 던질 질문을 하나 이상 가져가야 한다.</li></ul></div>
    <div class="qbox"><h2>공통 질문</h2><ul><li>AI는 노동을 대체하는가, 생산수단 접근권을 재분배하는가?</li><li>플랫폼·알고리즘 권력은 시장권력인가, 정치권력인가?</li><li>한국은 미·중 AI 경쟁에서 어떤 사회계약 실험장을 제공할 수 있는가?</li></ul></div>
  </div>
  <div class="matrix">
    <h2>마스터플랜 축 — 학자 매핑</h2>
    <table>
      <thead><tr><th>마스터플랜 축</th><th>핵심 학자</th><th>주요 논점</th><th>팀 산출물로 번역</th></tr></thead>
      <tbody>
        <tr><td>3.1 경제질서</td><td>브린욜프슨 · 서스킨드 · 마추카토</td><td>AI 생산성, 노동 이후 분배, 공공 AI 인프라</td><td>정체성 기반 생산자 경제의 조건과 접근권 설계</td></tr>
        <tr><td>3.2 정치질서</td><td>아세모글루 · 벤지오 · 플로리다</td><td>제도와 권력, AI 안전, 도시 다양성</td><td>개인-도시-국가-세계 권력 재배치와 테스트베드</td></tr>
        <tr><td>3.3 사회계약</td><td>주보프 · 플로리디</td><td>플랫폼 권력, 정보환경, 권리 UI</td><td>형성·발현·인정 조건과 설명·거부·조정권</td></tr>
      </tbody>
    </table>
  </div>
  <div class="pfoot" style="position:absolute;left:18mm;right:18mm;bottom:8mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:.22em;color:#a59f8e;font-weight:700;border-top:0.25mm solid #e0dbce;padding-top:2.4mm"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>02</span></div>
</section>

<section class="sheet" style="background:#101216;color:#f5f2ea;padding:0;position:relative;overflow:hidden">
  <div class="frame"></div>
  <div style="position:relative;height:100%;display:flex;flex-direction:column;padding:20mm 18mm 16mm">
    <div style="font-size:9pt;font-weight:800;letter-spacing:.38em;color:${G};margin-bottom:5mm">TABLE OF CONTENTS</div>
    <h1 style="font-size:30pt;font-weight:850;letter-spacing:-1px;margin:0 0 8mm;padding-bottom:4mm;border-bottom:0.5mm solid rgba(201,162,39,.5);color:#f5f2ea">목차</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6mm 10mm;flex:1">
      <div>
        <div style="font-size:8pt;font-weight:900;letter-spacing:.3em;color:${axisColor.O1};margin-bottom:3mm">O1 · 경제질서</div>
        ${cited.filter(s=>s.axisNo==='O1').map((s,i)=>`<div style="display:flex;align-items:baseline;gap:3mm;padding:2.2mm 0;border-bottom:0.2mm solid rgba(255,255,255,.1)"><span style="font-size:9pt;font-weight:800;color:${G};min-width:6mm">${String(cited.indexOf(s)+1).padStart(2,'0')}</span><span style="font-size:10.5pt;font-weight:700;color:#f5f2ea">${s.ko}</span><span style="font-size:8.5pt;color:rgba(245,242,234,.5);margin-left:auto">${s.en.split(' ').pop()}</span></div>`).join('')}
      </div>
      <div>
        <div style="font-size:8pt;font-weight:900;letter-spacing:.3em;color:${axisColor.O2};margin-bottom:3mm">O2 · 정치질서</div>
        ${cited.filter(s=>s.axisNo==='O2').map((s,i)=>`<div style="display:flex;align-items:baseline;gap:3mm;padding:2.2mm 0;border-bottom:0.2mm solid rgba(255,255,255,.1)"><span style="font-size:9pt;font-weight:800;color:${G};min-width:6mm">${String(cited.indexOf(s)+1).padStart(2,'0')}</span><span style="font-size:10.5pt;font-weight:700;color:#f5f2ea">${s.ko}</span><span style="font-size:8.5pt;color:rgba(245,242,234,.5);margin-left:auto">${s.en.split(' ').pop()}</span></div>`).join('')}
      </div>
      <div style="grid-column:span 2">
        <div style="font-size:8pt;font-weight:900;letter-spacing:.3em;color:${axisColor.O3};margin-bottom:3mm;margin-top:4mm">O3 · 사회계약</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10mm">
          ${cited.filter(s=>s.axisNo==='O3').map((s,i)=>`<div style="display:flex;align-items:baseline;gap:3mm;padding:2.2mm 0;border-bottom:0.2mm solid rgba(255,255,255,.1)"><span style="font-size:9pt;font-weight:800;color:${G};min-width:6mm">${String(cited.indexOf(s)+1).padStart(2,'0')}</span><span style="font-size:10.5pt;font-weight:700;color:#f5f2ea">${s.ko}</span><span style="font-size:8.5pt;color:rgba(245,242,234,.5);margin-left:auto">${s.en.split(' ').pop()}</span></div>`).join('')}
        </div>
      </div>
    </div>
    <div style="border-top:0.3mm solid rgba(201,162,39,.4);padding-top:4mm;font-size:8.5pt;letter-spacing:.06em;color:rgba(245,242,234,.45);display:flex;justify-content:space-between">
      <span>각 학자 1페이지 — 핵심 개념 · 읽을 자료 · 논쟁점 · 자문 질문</span>
      <span>후보 학자 16명 별도 수록</span>
    </div>
  </div>
  <div class="pfoot" style="color:rgba(245,242,234,.4);border-top:0.25mm solid rgba(255,255,255,.1)"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>TOC</span></div>
</section>

${scholarPages}

<section class="sheet candpage">
  <div class="gk">CANDIDATES · 1/2</div>
  <h1>후보 학자 16명 — 확장 학습 카드</h1>
  <div class="lead">인용 학자 8명의 2배수 후보군. 빠진 논쟁을 보강하고 자문·세미나 초청 후보로 쓴다.</div>
  <div class="cgrid">${candA}</div>
  <div class="pfoot" style="position:absolute;left:16mm;right:16mm;bottom:8mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:.22em;color:#a59f8e;font-weight:700;border-top:0.25mm solid #e0dbce;padding-top:2.4mm"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>11</span></div>
</section>

<section class="sheet candpage">
  <div class="gk">CANDIDATES · 2/2</div>
  <h1>후보 학자 — 계속</h1>
  <div class="lead">정치·도시·가정 축을 보강하는 후속 카드.</div>
  <div class="cgrid">${candB}</div>
  <div class="pfoot" style="position:absolute;left:16mm;right:16mm;bottom:8mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:.22em;color:#a59f8e;font-weight:700;border-top:0.25mm solid #e0dbce;padding-top:2.4mm"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>12</span></div>
</section>

</body></html>`;
fs.writeFileSync(outHtml,html);
const browser=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const page=await browser.newPage();
await page.goto('file://'+outHtml,{waitUntil:'networkidle0'});
await page.pdf({path:outPdf,width:'210mm',height:'297mm',printBackground:true,preferCSSPageSize:true});
await browser.close();
console.log('PDF written:',outPdf);
