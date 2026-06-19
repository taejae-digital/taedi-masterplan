import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
const root=process.cwd();
const outHtml=path.join(root,'drafts/scholar-pack-fable-deep.html');
const outPdf=path.join(root,'archive/pdf/scholar-learning-pack-v0.11.5-fable.pdf');
const imgDirs=[path.join(root,'drafts/scholar-images-parallel'), path.join(root,'drafts/scholar-images')];
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function findImg(en){for(const d of imgDirs){if(!fs.existsSync(d))continue;for(const ext of ['.jpg','.jpeg','.png','.webp']){const p=path.join(d,slug(en)+ext);if(fs.existsSync(p))return 'file://'+p;}}return ''}

// ================= 인용 학자 8명 =================
// pageA: bio(누구인가·지적 계보) / school(학파·학문적 배경) / argument(핵심 주장의 전개)
// pageB: position(학계 내 위치와 논쟁) / connect(마스터플랜과의 연결) + concepts/readings/debates/ask
const cited=[
{ko:'에릭 브린욜프슨',en:'Erik Brynjolfsson',axis:'경제질서',axisNo:'O1',place:'미국 · Stanford HAI / Digital Economy Lab',field:'정보시스템 경제학 · AI와 생산성',
bio:'브린욜프슨은 하버드에서 응용수학과 의사결정과학을 공부하고 MIT 슬론에서 박사를 받은 뒤, 30년 가까이 “정보기술은 경제 어디에서 어떻게 가치를 만드는가”라는 하나의 질문을 파 온 경제학자다. MIT 디지털경제 이니셔티브를 만들었고 2020년 스탠퍼드로 옮겨 인간중심 AI 연구소(HAI)의 디지털경제연구소를 이끈다. 학술 논문과 베스트셀러, 정부·기업 자문을 모두 가진, 디지털 경제학의 사실상 대변인이다.',
school:'학문적 계보로 그는 경영정보시스템(IS) 경제학과 신성장 이론의 교차점에 서 있다. 출발점은 솔로우의 1987년 농담 — “컴퓨터 시대는 어디에나 있는데 생산성 통계에만 없다” — 으로 알려진 생산성 역설이다. 브린욜프슨은 1990년대에 이 역설을 정면으로 다뤄 이름을 얻었고, 답을 보완재 이론에서 찾았다. 기술의 가치는 단독으로 실현되지 않고 조직 변화·인적자본·업무 프로세스라는 보완 투자와 결합할 때 나타난다는 것이다. 이는 밀그롬-로버츠의 보완성(complementarity) 경제학을 IT에 적용한 것으로, 이후 그의 모든 작업 — 무형자산 측정, GDP가 놓치는 디지털 잉여, 과업 수준 AI 노출 측정 — 을 관통한다. 방법론적으로 그는 기업 단위 미시 데이터와 실험을 선호하는 실증주의자이며, 거대 서사보다 측정을 앞세운다.',
argument:'핵심 주장은 세 층이다. 첫째, 디지털 기술은 범용기술(GPT)이라 도입과 효과 사이에 긴 시차가 있고, 그 시차의 정체는 조직 재설계다. 그는 이를 “J-커브”라 부른다 — 무형자산 투자가 회계에 잡히지 않아 생산성이 처음엔 떨어져 보이다가 나중에 폭발한다. 둘째, AI의 단위는 직업이 아니라 과업이다. 방사선과 의사의 일 중 영상 판독은 기계가 잘하지만 환자 소통과 시술 결정은 아니다. 따라서 “AI가 직업을 없앤다”는 문장은 분석적으로 틀렸고, “AI가 직업을 구성하는 과업 묶음을 재편한다”가 맞다. 셋째 — 가장 최근의 강조점 — 같은 기술이라도 인간을 모방해 대체하는 방향과 인간 능력을 확장하는 방향이 있으며, 그는 전자를 “튜링 트랩”이라 부른다. 대체형 AI는 임금과 협상력을 자본으로 옮기지만, 증강형 AI는 평범한 사람의 생산 가능 범위를 넓힌다. 어느 쪽으로 가는가는 기술이 아니라 기업의 설계 선택과 정책 인센티브가 정한다.',
position:'학계에서 그는 “측정된 낙관론자”의 자리에 있다. 아세모글루가 과도한 자동화와 권력 집중을 경고하는 비관 축이라면, 브린욜프슨은 증강 설계와 보완 투자가 따라오면 AI가 광범위한 생산성 향상을 만든다는 낙관 축이다. 두 사람은 2025년을 전후해 AI의 거시 생산성 효과를 두고 공개적으로 부딪쳤다 — 아세모글루는 “향후 10년 GDP 효과는 1% 안팎”이라 추정했고, 브린욜프슨 진영은 과업 재설계가 진행되면 훨씬 크다고 반박한다. 이 논쟁은 숫자 싸움이 아니라 “기술의 효과는 제도와 조직이 결정한다”는 공통 전제 위에서 무게중심을 어디 두느냐의 차이라는 점을 알아야 두 사람 모두와 대화할 수 있다.',
connect:'마스터플랜 3.1 — “AI·데이터·컴퓨팅이 생산비를 낮춰 개인이 기획·제작·분석·유통을 다루는 생산자가 된다” — 는 사실상 브린욜프슨의 과업 경제학을 개인 단위로 밀어붙인 명제다. 그의 튜링 트랩 개념은 마스터플랜의 “생산수단의 개방”이 왜 증강형 설계의 전제 조건인지 설명해 주고, J-커브는 공공 AI 인프라 투자가 단기 성과 없이 비판받을 때의 방어 논리가 된다. 그에게 정체성 개념을 설명한다면 “무형자산의 개인 버전 — 무엇을 만들지 정하는 축적된 판단 기준”이라는 번역이 통할 것이다.',
concepts:[['생산성 역설 / J-커브','IT·AI 투자와 생산성 통계 사이의 시차. 무형자산(조직·교육·프로세스) 투자가 회계에 안 잡혀 효과가 늦게 폭발한다.'],['과업 기반 분석','직업(job)이 아니라 과업(task) 단위로 기계화 가능성을 측정. AI 노출도는 직업 내부에서 갈린다.'],['튜링 트랩','인간 모방형(대체) AI 설계는 임금·권력을 자본에 집중시킨다. 증강형 설계가 분배적으로 우월하다.'],['보완성 경제학','기술 가치는 조직 변화·인적자본과 결합해야 실현된다. 밀그롬-로버츠 전통의 IT 적용.']],
readings:[['The Second Machine Age (2014)','기계가 인지 과업으로 확장될 때의 풍요와 격차. 디지털 경제학 입문 표준.'],['Machine, Platform, Crowd (2017)','기계지능·플랫폼·대중이 기업·시장·전문가의 경계를 다시 긋는 구조.'],['“The Turing Trap” (2022, 논문)','대체 vs 증강의 정책적 갈림길. 최근 그의 입장을 가장 압축한 텍스트.']],
debates:['AI 거시 생산성 효과 — 아세모글루의 1% 추정 vs 과업 재설계 낙관론','증강형 설계는 시장이 자발적으로 선택하는가, 정책 개입이 필요한가'],
ask:'한국형 공공 AI 인프라는 개인 생산자의 과업 재설계를 어떻게 지원해야 하는가?'},

{ko:'다니엘 서스킨드',en:'Daniel Susskind',axis:'경제질서',axisNo:'O1',place:'영국 · King’s College London / Oxford Ethics in AI',field:'노동경제학 · 일의 미래 · 분배',
bio:'서스킨드는 옥스퍼드에서 경제학을 공부하고 가르쳤으며, 지금은 킹스칼리지 런던 교수이자 옥스퍼드 AI 윤리연구소 선임연구원이다. 영국 총리실 정책 유닛과 내각부에서 일한 경력이 있어 학술 언어와 정책 언어를 모두 구사한다. 법률가이자 기술 사상가인 아버지 리처드 서스킨드와 함께 『전문직의 미래』(2015)를 쓰며 출발했고 — 의사·변호사·회계사의 업무가 시스템으로 분해·재배분되는 과정을 다뤘다 — 이후 시야를 전문직에서 노동 전체로 넓혔다.',
school:'그의 학문적 좌표는 노동경제학의 과업 모델 전통, 구체적으로는 오터-레비-머네인(ALM)의 루틴화 가설 위에 있다. ALM 모델은 “기계는 명시적 규칙으로 코드화할 수 있는 루틴 과업만 대체한다”고 봤고, 이것이 2000년대 “기계가 못 하는 일이 항상 남는다”는 위안의 근거였다. 서스킨드의 독창성은 이 전통 안에서 자라나 그 전제를 깬 데 있다. 머신러닝은 규칙의 코드화가 아니라 데이터로부터의 학습이므로, “인간이 어떻게 하는지 설명 못 하는 일은 기계도 못 한다”는 한계가 사라졌다는 것이다. 그는 이를 기계의 “비인간적 능력(unhuman capability)”이라 부른다 — 기계는 인간을 흉내 내지 않고 다른 방식으로 같은 결과를 낸다. 따라서 보완이 대체를 항상 이긴다는 보장이 무너지고, 기술실업은 논리적 가능성이 아니라 구조적 추세가 된다.',
argument:'『일 없는 세계』의 논증은 세 단계다. 첫째, 자동화의 역사에서 “대체 효과”와 “보완 효과”는 늘 경쟁했고 지금까지는 보완이 이겼지만, 학습 기계의 능력 확장 속도는 그 균형을 대체 쪽으로 기울인다. 둘째, 일자리가 천천히 줄더라도 더 빨리 오는 것은 “구조적 기술실업” — 남은 일자리와 사람들의 기능·지역·의향이 안 맞는 미스매치다. 셋째 — 그가 가장 공들이는 부분 — 일은 산업사회에서 소득 분배 장치이자 의미와 지위의 분배 장치였다. 그래서 해법도 둘로 나뉜다. 소득 쪽은 “큰 국가(Big State)”의 조건부 기본소득과 자본 공유로, 의미 쪽은 일 바깥에서 목적을 형성하는 사회 — 여가 정책, 시민적 기여, 교육의 재정의 — 로 가야 한다. 『성장』(2024)에서는 한 발 더 나가 성장 지상주의 자체를 심문한다. 성장은 역사상 가장 강력한 빈곤 해소 장치였지만 기후·불평등 비용을 치렀으므로, 성장의 “방향”을 고르는 것이 다음 시대의 과제라는 것이다.',
position:'학계에서 그는 오터와 가장 생산적으로 충돌한다. 오터는 같은 과업 전통에서 “새 과업의 탄생”과 노동 수요의 회복력을 강조하고, 최근에는 AI가 중간층의 전문성 접근을 넓힐 수 있다는 신중한 낙관까지 내놓았다. 서스킨드는 이를 “과거 패턴의 외삽”이라 본다. 또 하나의 전선은 의미론이다 — “일이 없어도 인간은 의미를 찾는다”는 그의 낙관에 대해, 노동사회학 쪽은 실업의 심리적 파괴력(자존·시간 구조·사회적 접촉의 상실)을 들어 회의한다. 그가 케인스의 1930년 에세이 「손주 세대의 경제적 가능성」을 자주 인용하는 것도 알아 둘 것 — 그는 자신을 케인스의 미완성 예언을 잇는 사람으로 자리매김한다.',
connect:'마스터플랜이 과제를 “표준 직업 편입”에서 “자기 기여 영역 창출”로 옮긴 것은 서스킨드의 진단에 대한 응답이지만, 처방은 다르다. 그는 일 이후의 의미를 여가와 시민적 기여에서 찾는 반면, 마스터플랜은 생산 자체가 정체성 기반으로 재조직된다고 본다 — 일이 사라지는 것이 아니라 표준 고용 형태가 사라지고, 기여는 남는다는 것이다. 이 차이가 그와의 대화에서 가장 생산적인 지점이다. 기본소득(소득 보장)과 생산수단 접근권(기여 여건 보장)의 차이를 그에게 직접 따져 물어야 한다.',
concepts:[['비인간적 능력','학습 기계는 인간의 방식을 흉내 내지 않고 다른 경로로 같은 과업을 수행한다. ALM 루틴화 가설의 한계 돌파.'],['구조적 기술실업','총량보다 미스매치 — 남은 일과 사람의 기능·지역·의향이 어긋나는 마찰이 먼저 온다.'],['일 = 이중 분배 장치','일은 소득과 함께 의미·지위·인정을 배분해 왔다. 일의 축소는 두 장치의 동시 고장이다.'],['조건부 기본소득 / 큰 국가','시장 임금이 분배 장치 기능을 잃을 때 국가가 소득·자본 분배를 재설계해야 한다.']],
readings:[['A World Without Work (2020)','기술실업 논쟁의 역사와 학습 기계 이후의 분배·의미 설계. 그의 본체.'],['The Future of the Professions (2015, 공저)','전문직 업무의 분해·재배분. 과업 분석의 직업별 적용 사례집.'],['Growth: A History and a Reckoning (2024)','성장의 도덕적 회계. 성장 방향 선택이라는 다음 질문.']],
debates:['오터의 “새 과업 낙관론” vs 서스킨드의 “외삽 불가론”','일 없는 사회에서 의미·지위는 정말 재설계 가능한가 — 노동사회학의 회의'],
ask:'노동 중심 사회계약이 약해질 때 한국은 소득·기여·인정을 어떤 구조로 다시 묶어야 하는가?'},

{ko:'마리아나 마추카토',en:'Mariana Mazzucato',axis:'경제질서',axisNo:'O1',place:'영국 · UCL Institute for Innovation and Public Purpose',field:'혁신경제학 · 공공가치 · 산업정책',
bio:'마추카토는 이탈리아에서 태어나 미국에서 자랐고, 뉴스쿨에서 경제학 박사를 받았다. 서식스대 과학정책연구소(SPRU)를 거쳐 2017년 UCL에 혁신·공공목적연구소(IIPP)를 직접 설립해 이끈다. EU 집행위원회의 미션 자문(호라이즌 유럽의 “미션” 설계가 그의 작품이다), WHO·UN 패널, 남아공·브라질 등 각국 정부 자문을 맡아, 현존 경제학자 중 정부의 언어를 가장 많이 바꾼 인물로 꼽힌다.',
school:'그를 주류 신고전파로 읽으면 모든 것이 어긋난다. 마추카토의 뿌리는 슘페터리언 혁신경제학 — 혁신을 균형의 교란이 아니라 자본주의의 엔진으로 보는 전통 — 이며, 직접적으로는 크리스 프리먼과 카를로타 페레스의 네오슘페터리언 계보(기술혁명과 제도 공진화)에 닿아 있다. 여기에 칼 폴라니의 “시장은 만들어진다(embedded markets)”는 통찰과, 가치가 어디서 생산되는가를 묻는 고전파적 가치론을 결합했다. 그래서 그의 국가론은 케인스적 수요 관리가 아니다 — 케인스가 침체기의 수요를 메우는 국가를 말했다면, 마추카토는 호황·침체와 무관하게 신기술의 가장 불확실한 초기 단계에 먼저 들어가는 “기업가형 국가”를 말한다. 시장 실패 교정(피구·새뮤얼슨 전통)이 아니라 시장 형성(market shaping)이 국가의 본업이라는 것이다.',
argument:'『기업가형 국가』의 논증은 역사적이다. 아이폰을 분해하면 인터넷(DARPA), GPS(국방부), 터치스크린(CIA·NSF 지원), 음성인식(DARPA)까지 핵심 기술이 모두 공공투자에서 나왔다. 제약 산업의 신약도 NIH의 기초연구 위에 서 있다. 그런데 위험은 사회화되고 보상은 사유화된다 — 국가는 가장 불확실한 투자를 하고도 지분·로열티 없이 물러나고, 민간은 마지막 단계에 올라타 가치를 가져간다. 『미션 이코노미』는 처방이다. 아폴로 계획처럼 명확한 미션을 정하고, 부처·조달·금융·민간을 그 미션에 정렬시키되, 방법은 상향식 실험에 맡기는 것. 『가치의 모든 것』은 이 모두의 이론적 기초로, 가치 “창출”과 가치 “추출”을 구분하지 못하게 된 현대 경제학 — 가격이 곧 가치라는 한계효용 혁명 이후의 동어반복 — 을 비판한다. 금융과 플랫폼의 이윤이 창출인지 추출인지 물을 언어를 되찾자는 것이다.',
position:'그만큼 비판도 표준화되어 있다. 첫째, 선택 편향 — 성공한 공공투자(인터넷)만 세고 실패(수많은 죽은 프로젝트)는 안 센다는 것. 둘째, 정부 실패 — 미션 국가는 관료의 무능과 이익집단 포획에 어떻게 대응하는가. 셋째, 컨설팅 국가 비판의 부메랑 — 그는 『빅콘』에서 컨설팅 의존을 비판했지만, 그의 미션 프레임 자체가 정부의 새 유행어가 되어 알맹이 없이 소비된다는 지적도 있다. 그는 첫째에 “포트폴리오로 평가하라”(벤처캐피털도 대부분 실패한다), 둘째에 “동적 역량을 정부 안에 다시 길러야 한다”(아웃소싱이 무능의 원인이지 결과가 아니다)로 답한다. 이 공방까지 알아야 대화가 된다.',
connect:'마스터플랜 3.3의 “생산수단의 개방”은 마추카토 없이는 복지로 오독된다. 그의 언어로 읽으면 공공 AI 인프라는 시혜가 아니라 정체성 기반 생산자 경제라는 새 시장을 형성하는 미션 투자이고, 위험을 사회화한 만큼 보상 구조(지분·데이터 환류·접근 조건)를 처음부터 설계해야 한다는 요구가 따라온다. 4.2의 學·産·政·媒 운영체계는 그의 미션 정렬 개념의 한국적 번역으로 설명할 수 있다. 그에게 물을 것은 미션의 선정 기준 — 교육·도시·산업 중 어디가 한국의 아폴로인가 — 와 포획 방지 설계다.',
concepts:[['기업가형 국가','국가는 신기술의 가장 불확실한 단계에 먼저 투자해 온 위험 감수자다. 시장 교정자가 아니라 시장 형성자.'],['미션 이코노미','명확한 사회적 미션에 조달·금융·규제·민간을 정렬. 방향은 하향식, 방법은 상향식 실험.'],['가치 창출 vs 추출','가격=가치 동어반복을 깨고, 금융·플랫폼 이윤이 창출인지 추출인지 다시 묻는 가치론.'],['공공가치 / 동적 역량','공공가치는 사후 재분배가 아니라 공동 창출. 정부는 아웃소싱 대신 내부 역량을 길러야 한다.']],
readings:[['The Entrepreneurial State (2013)','아이폰 분해로 보여주는 공공투자의 계보. 그의 출세작.'],['Mission Economy (2021)','아폴로를 모델로 한 미션 정부 조직론. 정책 설계에 바로 쓰는 책.'],['The Value of Everything (2018)','가치론의 복원. 이론적 기초가 필요하면 이 책부터.']],
debates:['선택 편향 — 공공투자 성공 사례만 세는가','미션 국가의 관료 무능·포획 방지 설계는 무엇인가'],
ask:'태재가 제안할 공공 AI 인프라 미션은 교육·도시·산업 중 어디서 먼저 실험해야 하는가?'},

{ko:'대런 아세모글루',en:'Daron Acemoglu',axis:'정치질서',axisNo:'O2',place:'미국 · MIT Institute Professor · 2024 노벨경제학상',field:'제도경제학 · 정치경제학 · 기술과 권력',
bio:'아세모글루는 이스탄불의 아르메니아계 가정에서 태어나 LSE에서 박사를 받고, 스물여섯에 MIT에 부임해 지금까지 있다. MIT가 주는 최고 직함인 인스티튜트 프로페서이고, 40대 이전 최고 경제학자에게 주는 존 베이츠 클라크 메달(2005)을 받았으며, 2024년 사이먼 존슨·제임스 로빈슨과 함께 노벨경제학상을 받았다. 경제학 전 분야를 통틀어 가장 많이 인용되는 현존 학자군에 속하고, 노동·성장·정치경제·네트워크·AI까지 손대는 범위가 비정상적으로 넓다.',
school:'그의 좌표는 신제도주의 경제학의 정치경제학적 급진화다. 더글러스 노스가 “제도가 성과를 결정한다”는 명제를 세웠다면, 아세모글루-로빈슨은 “그 제도는 누가 정하는가”를 물어 권력을 모델 안으로 끌고 들어왔다. 제도는 효율을 위해 진화하는 것이 아니라 정치권력을 쥔 집단의 이해에 맞게 설계되며(사회적 갈등 이론), 따라서 나쁜 제도는 무지가 아니라 의도의 산물이다. 식민지 정착민 사망률을 도구변수로 써서 제도→성장의 인과를 식별한 2001년 논문(AJR)은 실증 정치경제학의 방법론적 전환점이었다 — 노벨상도 이 작업에 주어졌다. 기술 쪽에서는 “유도된 기술변화(directed technical change)” 이론을 세워, 기술의 방향(노동 절약형이냐 노동 보완형이냐)이 상대가격과 제도에 의해 내생적으로 결정됨을 보였고, 파스쿠알 레스트레포와 함께 자동화의 과업 모델을 만들어 “대체 효과 vs 새 과업 창출”을 형식화했다.',
argument:'『국가는 왜 실패하는가』의 답은 포용적 제도 — 권력이 분산되고 재산권과 기회가 넓게 열린 질서 — 와 착취적 제도의 구분이다. 착취적 제도도 한동안 성장할 수 있지만(소련, 그리고 그가 지속 불가능하다고 보는 중국 모델), 창조적 파괴를 허용하지 못해 결국 막힌다. 『권력과 진보』는 이 틀을 천 년의 기술사에 적용한다. 중세 농업 혁신의 이익은 교회와 영주가 가져갔고, 산업혁명 초기 100년의 생산성 향상은 임금으로 가지 않았다. 기술의 이익이 공유된 시기는 — 19세기 말 이후처럼 — 노동의 대항권력과 민주적 제도가 기술의 방향을 강제로 틀었을 때뿐이다. 결론: 지금의 AI는 “그저 그런 자동화(so-so automation)” — 생산성 이득은 작으면서 노동 대체와 감시·권력 집중 효과는 큰 방향 — 으로 쏠려 있으며, 이 방향은 시장이 아니라 사회가 바꿔야 한다. 그가 AI의 10년 GDP 기여를 1% 안팎으로 추정해 논쟁을 일으킨 것도 이 맥락이다.',
position:'그는 현재 AI 담론의 비관 축 좌표다. 브린욜프슨의 증강 낙관론과 정면으로 맞서고, 실리콘밸리의 AGI 서사를 “권력 이동을 가리는 이데올로기”로 본다. 그에 대한 비판도 정리돼 있다. AJR 논문의 데이터·식별 전략 시비(글레이저 등이 “제도가 아니라 인적자본”이라 반박), 중국의 지속 성장이 그의 예측을 반증하는 것 아니냐는 문제, 그리고 『권력과 진보』가 정책 처방(노조 강화, 기술 방향 규제, 디지털 광고세)에서 갑자기 거칠어진다는 지적. 그래도 “기술의 방향은 선택이다”라는 명제 자체는 이제 AI 정책 논의의 공유 전제가 됐다 — 그 전제를 만든 사람이 그다.',
connect:'마스터플랜 3.2의 핵심 문장들 — 플랫폼·알고리즘은 경제 인프라이자 정치 권력이다, 국가는 분산 권력의 오케스트레이터로 재편된다 — 은 아세모글루의 사회적 갈등 이론을 디지털로 옮긴 것이다. 정체성 기반 생산자 경제는 그의 언어로 “포용적 제도의 디지털 버전”이고, AI·데이터·컴퓨팅 접근의 개방은 착취적 집중을 막는 제도 설계다. 그에게 물을 것은 구체성이다. 기술 방향의 민주적 조정이 입법 차원이 아니라 도시 단위 실험으로 가능한가 — 마스터플랜 4.3의 강소도시 테스트베드가 그 답안지가 될 수 있는가.',
concepts:[['포용적 vs 착취적 제도','권력·기회의 분산 여부가 장기 성과를 가른다. 제도는 효율이 아니라 권력 투쟁의 산물.'],['유도된 기술변화','기술의 방향(대체형/보완형)은 가격·제도에 의해 내생적으로 결정된다. 방향은 선택이다.'],['그저 그런 자동화','생산성 이득은 작고 대체·집중 효과만 큰 자동화. 현재 AI의 기본 방향이라는 진단.'],['과업 모델 (w/ 레스트레포)','자동화의 대체 효과와 새 과업 창출 효과를 형식화한 표준 프레임.']],
readings:[['Why Nations Fail (2012)','제도 정치경제학의 대중적 완성판. 포용/착취 구분의 원전.'],['Power and Progress (2023)','천 년 기술사로 논증하는 “진보는 방향 설정의 문제”. AI 장이 핵심.'],['“The Simple Macroeconomics of AI” (2024)','AI GDP 효과 1% 추정 논문. 브린욜프슨 진영과의 논쟁 지점.']],
debates:['AJR 식별 논쟁 — 제도인가 인적자본인가(글레이저의 반박)','AI 비관론은 적정한가 — 브린욜프슨과의 생산성 공방'],
ask:'한국은 AI 기술 방향을 민주적으로 조정할 제도 실험을 도시 단위에서 어떻게 만들 수 있는가?'},

{ko:'요슈아 벤지오',en:'Yoshua Bengio',axis:'정치질서',axisNo:'O2',place:'캐나다 · Université de Montréal / Mila · 2018 튜링상',field:'딥러닝 · AI 안전 · 프런티어 거버넌스',
bio:'벤지오는 파리에서 태어나 몬트리올에서 자랐고, 맥길에서 컴퓨터과학 박사를 받았다. 몬트리올대 교수로 세계 최대 학술 AI 연구소인 Mila를 세웠고, 힌턴·르쿤과 함께 2018년 튜링상을 받았다 — 셋을 “딥러닝의 대부들”이라 부른다. 컴퓨터과학 전체에서 인용 수 최상위권이며, 빅테크 이직을 거부하고 학계와 공공 영역에 남은 것으로도 유명하다. 2023년 이후로는 연구 정체성을 사실상 AI 안전으로 옮겼고, 각국 정부가 합의한 국제 AI 안전성 보고서의 의장을 맡고 있으며, 2025년에는 안전한 설계의 AI를 개발하는 비영리 LawZero를 세웠다.',
school:'그의 학문적 뿌리는 연결주의(connectionism)다. 1980~90년대 AI의 주류는 기호주의 — 지능을 규칙과 논리의 조작으로 보는 전통 — 였고, 신경망 연구는 “AI 겨울” 동안 주변부로 밀려나 있었다. 벤지오는 그 겨울에 신경망의 학습 이론(분산 표상, 시퀀스 학습, 어텐션의 전신이 되는 신경 언어모델)을 붙들고 버틴 소수파였다. 2000년 그의 신경 확률 언어모델 논문은 단어를 벡터로 표상하는 아이디어로 오늘날 LLM의 직계 조상이 됐다. 요점은 이것이다 — 지금의 생성형 AI는 그의 학파가 옳았음의 증명이며, 그래서 그 학파의 창시자가 “우리가 만든 것이 통제를 벗어날 수 있다”고 말할 때의 무게는 외부 비평가의 경고와 다르다. 안전 전향 이후의 그는 인지과학적 영감(시스템 2 추론, 인과 표상)과 베이지언 불확실성 정량화를 결합해, 행위자성 없이 세계를 설명만 하는 “과학자 AI(Scientist AI)”라는 설계 프로그램을 밀고 있다.',
argument:'그의 안전론은 세 단계로 전개된다. 첫째, 능력의 외삽 — 스케일링이 계속되는 한 계획·설득·코드 작성 능력은 인간 수준을 넘어설 수 있고, 그 시점은 불확실하지만 “늦게 온다”에 베팅할 근거가 없다. 둘째, 유인의 구조 — 더 능력 있는 AI는 더 큰 경제·군사적 보상을 주므로 기업과 강대국은 안전 검증 전에 속도를 선택할 구조적 유인을 갖는다(그가 “위험한 경쟁”이라 부르는 것). 행위자성(agency)을 가진 AI가 자기보존 목표를 형성하면 기만·통제 회피가 도구적으로 유리해진다는 것이 그의 핵심 우려다. 셋째, 제도적 응답 — 자율규제는 답이 아니며 독립적 안전 평가, 프런티어 모델 등록·감사, 항공·원자력 수준의 국제 안전 체제가 필요하다. 그가 의장인 국제 안전성 보고서는 “과학이 합의한 위험 지도”를 정부들에게 제공하는 장치이고, LawZero의 과학자 AI는 “능력은 높이되 행위자성은 주지 않는” 기술적 우회로의 실증이다.',
position:'AI 안전 논쟁의 지형에서 그는 힌턴과 함께 “창시자의 경고” 축을 이룬다. 반대편에는 두 전선이 있다. 하나는 같은 튜링상 동료 르쿤 — 현재 아키텍처는 고양이만큼도 세계를 모르며 실존 위험론은 공상이라는 입장. 또 하나는 크로퍼드·휘터커·게브루 계열 — 실존 위험 서사가 차별·감시·노동 착취라는 현재의 해악과 빅테크 권력 집중에서 시선을 빼앗는다는 비판이다. 벤지오의 응답은 “둘 다”다. 현재 해악과 장기 위험은 같은 원인 — 검증되지 않은 권력의 집중 — 의 두 얼굴이므로 독립 검증·공적 거버넌스라는 처방을 공유한다는 것. 오픈소스 공개 문제에서도 그는 개방 일반이 아니라 “최전선 모델의 무조건 공개”에 반대하는 중간 입장이다.',
connect:'마스터플랜 4.1의 실행 장치들 — 공동위원회, 기술 감사단, 군사 AI 핫라인, 사고 공동조사 — 은 벤지오가 요구해 온 독립 검증 체제와 정확히 겹친다. 한국이 “검증 가능한 AI 사회계약 실험장”을 제안할 때, 그 검증의 과학적 기준을 보증해 줄 수 있는 국제적 인물이 그다. 또 하나, 마스터플랜 3.3의 “생산수단 개방”과 그의 “프런티어 통제”는 긴장 관계처럼 보이지만, 그의 중간 입장(개방 일반 찬성 + 최전선 무조건 공개 반대)은 접근권 보장과 고위험 통제를 한 설계 안에 담는 마스터플랜의 구도와 양립한다. 물을 것은 경계선이다 — 어디까지가 개방해야 할 생산수단이고 어디부터가 검증해야 할 프런티어인가.',
concepts:[['연결주의 / 분산 표상','지능을 규칙 조작이 아니라 학습된 벡터 표상으로 보는 전통. 오늘날 LLM의 이론적 모태.'],['위험한 경쟁','능력↑=보상↑ 구조에서 기업·국가는 검증 전 속도를 선택할 유인을 갖는다. 자율규제 불가능론.'],['행위자성 위험','목표를 가진 AI는 자기보존·기만이 도구적으로 유리해진다. 능력 자체보다 agency가 위험의 핵.'],['과학자 AI (LawZero)','세계를 설명하되 행동하지 않는 비행위자적 설계. 능력과 안전의 기술적 분리 시도.']],
readings:[['International AI Safety Report (2025, 의장)','각국 정부 합의의 위험 지도. 정책 대화의 공통 기준선.'],['“Managing extreme AI risks amid rapid progress” (Science, 2024)','힌턴·러셀 등과 쓴 안전 의제 선언문.'],['신경 확률 언어모델 (2000) + 딥러닝 리뷰 (Nature, 2015)','그의 과학적 기여의 원전. 기술 배경이 필요하면.']],
debates:['르쿤 — “실존 위험은 공상” vs 벤지오 — “외삽을 무시할 근거 없음”','크로퍼드·휘터커 — 실존 위험 서사가 현재 해악을 가리는가'],
ask:'한국이 제안할 AI 안전 검증 도시·산업 테스트베드는 어떤 권한과 데이터를 가져야 하는가?'},

{ko:'리처드 플로리다',en:'Richard Florida',axis:'도시·정치질서',axisNo:'O2',place:'캐나다 · University of Toronto Rotman School',field:'도시경제 · 창조계급 · 지역혁신',
bio:'플로리다는 뉴어크의 이탈리아계 노동자 가정에서 자랐고 — 공장 노동자였던 아버지의 이야기를 평생 강연 소재로 쓴다 — 컬럼비아에서 도시계획 박사를 받았다. 카네기멜런 교수 시절 『창조계급의 부상』(2002)으로 일약 스타가 됐고, 지금은 토론토대 로트먼 경영대학원과 도시연구소에 있다. 학자이면서 컨설턴트·칼럼니스트로 활동 반경이 넓어, “시장(市長)들이 가장 많이 부른 학자”라는 말과 “도시정책을 컨설팅 상품으로 만든 장본인”이라는 말을 동시에 듣는다.',
school:'그의 지적 계보는 제인 제이콥스로 시작한다. 제이콥스는 도시의 가치를 계획이 아니라 거리의 다양성과 우연한 마주침에서 찾았고, 경제학 쪽에서는 루카스가 이를 “인적자본의 외부효과” — 사람들이 모여 있을 때 서로에게서 배우는 효과 — 로 형식화했다. 도시경제학의 표준 모델(인적자본 이론)은 “교육받은 사람이 많은 도시가 성장한다”고 말한다. 플로리다의 변주는 측정 단위를 바꾼 것이다 — 학위가 아니라 직업으로. 무엇을 공부했느냐가 아니라 실제로 새로움을 만드는 일(과학·기술·예술·디자인·미디어)을 하느냐로 “창조계급”을 정의하고, 여기에 문화사회학적 변수 — 관용, 보헤미안 지수, 게이 지수 — 를 결합해 “3T(인재·기술·관용)” 모델을 만들었다. 방법론적으로는 상관관계 기반 지수 연구라는 점이 두고두고 공격의 표적이 된다.',
argument:'핵심 주장은 인과의 역전이다. 산업시대에는 사람이 일자리를 따라갔지만, 창조경제에서는 기업이 인재를 따라간다. 따라서 도시 발전 전략의 단위는 산업 유치(스타디움·세금 감면)가 아니라 인재가 살고 싶은 장소의 질 — 다양성, 문화적 밀도, 진입 장벽 낮은 신(scene) — 이다. 관용이 3T의 핵심인 이유도 경제적이다. 다양한 정체성이 환영받는 도시는 인재 풀의 진입 장벽이 낮고, 이질적 결합에서 혁신이 나온다는 것. 그러나 2017년 『새로운 도시 위기』에서 그는 자기 이론의 어두운 결말을 직접 정산한다. 창조도시의 성공은 주거비 폭등과 “승자독식 도시화”를 낳았고, 혜택은 창조계급에게, 비용은 서비스 노동자에게 갔다. 그가 내놓은 수정안은 서비스 일자리의 중산층화, 주거 공급, 그리고 성장의 지리적 분산 — 즉 후기 플로리다는 초기 플로리다의 비판자다.',
position:'학계 내 위치는 “가장 영향력 있고 가장 공격받는 도시학자”다. 글레이저와의 논쟁이 표준 교재다 — 글레이저는 창조계급 지수에서 학력 변수를 빼면 설명력이 사라진다며 “그냥 인적자본”이라 반박했고, 좌파 도시학(피터 마르쿠제 등)은 창조도시 전략이 젠트리피케이션의 알리바이가 됐다고 비판했다. “쿨한 도시 만들기”가 카페와 자전거도로로 부유층을 모으는 정책으로 소비된 책임을 그에게 묻는 것이다. 그는 『새로운 도시 위기』로 상당 부분을 인정했다. 대화에서는 이 자기 정정 이후의 플로리다 — 분산, 교외의 재발견, 원격근무 이후 “장소의 재배열” — 를 상대해야 한다.',
connect:'마스터플랜 4.3의 강소도시는 플로리다의 질문에 대한 한국의 답안이다. 그의 모델은 대도시 중심이었고 그 비용(주거·배제)을 스스로 인정했다. 마스터플랜은 같은 원리 — 정체성 다양성이 생산성의 조건이다 — 를 3~5만 강소도시+서버시티 벨트라는 분산 구조로 옮겨, 창조도시의 혜택을 승자독식 없이 구현할 수 있는가를 실험하자는 것이다. 도시 구독(도시마다 다른 특색을 시민이 선택)은 그의 “장소의 질” 개념의 제도화다. 물을 것은 임계 질량이다 — 창조 생태계가 작동하는 최소 규모는 얼마이며, 강소도시는 그 임계를 벨트 연결로 넘을 수 있는가.',
concepts:[['창조계급','학력이 아니라 직업 기준 — 새로움을 만드는 일을 하는 계층이 도시 성장의 동력.'],['3T 모델','인재·기술·관용. 관용은 인재 풀의 진입 장벽을 낮추는 경제 변수다.'],['인과의 역전','기업이 인재를 따라간다. 전략 단위는 산업 유치가 아니라 장소의 질.'],['새로운 도시 위기','창조도시의 성공이 낳은 주거 폭등·승자독식. 그의 자기 정정.']],
readings:[['The Rise of the Creative Class (2002)','창조경제 담론의 원전. 3T 모델과 측정.'],['The New Urban Crisis (2017)','자기 이론의 비용 정산. 반드시 세트로 읽을 것.'],['글레이저의 서평·반박 논문','“창조계급 = 인적자본 재포장” 논쟁의 반대편 자료.']],
debates:['글레이저 — 학력 빼면 설명력 없음 vs 직업 기반 측정의 옹호','창조도시 전략은 젠트리피케이션의 알리바이인가'],
ask:'한국의 강소도시는 어떤 산업·문화·교육 조합으로 정체성 기반 생산자를 길러야 하는가?'},

{ko:'쇼샤나 주보프',en:'Shoshana Zuboff',axis:'사회계약',axisNo:'O3',place:'미국 · Harvard Business School 명예교수',field:'정보자본주의 비판 · 조직사회학',
bio:'주보프는 시카고대에서 사회심리학 박사를 받고 1981년 하버드 경영대학원에 부임해, 그곳 종신교수직을 받은 최초의 여성 중 한 명이 됐다. 출발은 조직사회학이었다 — 1988년 『스마트 머신의 시대』는 공장과 사무실의 전산화를 현장 연구해, 정보기술이 자동화(automate)와 정보화(informate)라는 두 능력을 갖는다는 고전적 구분을 남겼다. 정보화는 작업을 수행하면서 동시에 작업에 관한 데이터를 생산한다는 뜻이고 — 30년 뒤 감시자본주의 개념은 이 통찰의 직계 후손이다. 은퇴 무렵인 2019년, 칠십을 앞두고 낸 『감시자본주의 시대』가 빅테크 비판의 표준 어휘가 됐다.',
school:'그를 어느 학파에 놓을지가 곧 그를 읽는 방법이다. 첫째, 비판이론의 자장 — 그는 마르크스주의자가 아니지만, 자본주의의 새 축적 양식을 명명하고 그 논리를 해부하는 방식은 프랑크푸르트학파적이다. 둘째, 폴라니 — 『거대한 전환』이 노동·토지·화폐의 상품화를 “허구적 상품”이라 불렀듯, 주보프는 인간 경험의 상품화를 네 번째 허구적 상품으로 놓는다. 셋째, 아렌트와 B.F. 스키너의 대결 — 그의 “도구주의 권력” 개념은 스키너의 행동주의(자유의지를 환상으로 보고 행동을 환경 설계로 조형하려는 기획)가 디지털 인프라로 실현된 것이라는 고발이며, 이에 맞서는 규범적 기둥은 아렌트적 인간 — 시작할 수 있는 존재, 미래 시제를 가진 존재 — 이다. 그가 “미래 시제에 대한 권리”라는 표현을 쓰는 이유가 여기 있다. 즉 주보프는 경제학자가 아니라, 조직사회학의 현장 감각과 정치철학의 규범을 결합한 이론가다.',
argument:'논증의 뼈대는 이렇다. 구글은 검색 개선에 쓰고 남는 행동 데이터 — 행동잉여 — 가 사용자의 미래 행동을 예측하는 원료가 됨을 발견했고, 그 예측을 광고주에게 파는 행동선물시장을 만들었다. 이것이 새 축적 논리, 감시자본주의의 탄생이다(그는 정확한 발명 시점과 장소를 특정한다 — 2001년 전후의 구글). 논리는 확장 명령을 갖는다. 더 좋은 예측은 더 많은 추출(규모), 더 다양한 원천(범위), 그리고 결국 개입 — 추천·기본값·넛지로 행동 자체를 조형하는 것(행동수정 수단의 경제) — 을 요구한다. 이 권력은 전체주의처럼 영혼을 요구하지 않는다. 행동만 요구한다. 그래서 그는 이를 도구주의(instrumentarianism)라 명명한다 — 보이지 않고, 동의를 구하지 않고, 저항할 계기를 주지 않는 권력. 결론적으로 문제의 본질은 프라이버시 침해가 아니라 인식의 비대칭(그들은 우리를 알지만 우리는 그들을 모른다)과 미래 시제의 침탈이며, 따라서 처방도 개인의 동의 관리가 아니라 추출 자체의 불법화 — 시장의 경계 설정 — 여야 한다.',
position:'『감시자본주의 시대』는 출간 즉시 고전 반열에 올랐지만 비판도 첨예하다. 좌파(모로조프가 대표적)는 “감시는 자본주의의 변종이 아니라 본질”이라며, 주보프가 감시 없는 좋은 자본주의를 상상하게 만들어 자본주의 비판을 무디게 한다고 공격한다 — 그의 답은 명명이 정치를 가능하게 한다는 것이다. 경험 연구 쪽은 광고의 실제 효과가 과장됐다고, 즉 빅테크가 파는 예측력 자체가 절반은 신화라고 지적한다. 법학 쪽(코헨 등)은 그의 처방이 소유권·동의 프레임을 벗어나지 못한다고 본다. 이 비판 지형까지 알아야 그를 인용할 때 과대 해석을 피할 수 있다.',
connect:'마스터플랜 3.3이 “플랫폼 권력의 조정”을 3대 핵심 합의에 넣고, 권리 설계를 설명권·거부권·조정권으로 구체화한 것은 주보프의 진단에 대한 제도적 응답이다. 정체성 기반 생산자는 추천·노출·평판 구조를 통해서만 시장에 도달하므로, 그 구조가 불투명하면 “정체성이 기여로 전환될 여건” 자체가 사적 권력에 저당잡힌다. 다만 마스터플랜은 그의 추출 금지론보다 한 발 실용적이다 — 금지가 아니라 공적 조정(감사·설명·거부)으로 간다. 그에게 물을 것은 바로 그 간극이다. 조정으로 충분한가, 금지가 필요한가.',
concepts:[['자동화 vs 정보화','정보기술은 일을 수행하며 동시에 일에 관한 데이터를 낳는다(1988). 감시자본주의의 씨앗 개념.'],['행동잉여 → 예측상품','서비스 개선에 쓰고 남는 행동 데이터가 미래 행동 예측 상품의 원료가 된다.'],['도구주의 권력','영혼이 아니라 행동을 요구하는 권력. 환경 설계로 행동을 조형하며 저항의 계기를 주지 않는다.'],['미래 시제에 대한 권리','예측·조형당하지 않고 스스로 시작할 권리. 아렌트적 규범 기둥.']],
readings:[['The Age of Surveillance Capitalism (2019)','본체. 1·2부와 결론 우선, 700쪽이 부담이면 강연으로 보완.'],['In the Age of the Smart Machine (1988)','정보화 개념의 원전. 그의 사유의 연속성을 보려면.'],['모로조프의 서평 “Capitalism’s New Clothes”','좌파 쪽 표준 반박. 세트로 읽어야 균형.']],
debates:['감시자본주의는 변종인가 본질인가 — 모로조프 논쟁','행동 예측력은 실재인가 과장인가 — 광고 효과의 경험적 시비'],
ask:'마스터플랜의 권리 UI는 추천·노출·평판 권력을 어디까지 설명·거부·조정하게 해야 하는가?'},

{ko:'루치아노 플로리디',en:'Luciano Floridi',axis:'사회계약',axisNo:'O3',place:'미국/이탈리아 · Yale Digital Ethics Center / Bologna',field:'정보철학 · 디지털 윤리 · 거버넌스',
bio:'플로리디는 로마에서 태어나 로마 라 사피엔차에서 철학을 공부하고 워릭에서 박사를 받았다. 옥스퍼드 인터넷 연구소에서 오래 가르치며 “정보철학(Philosophy of Information)”이라는 분야를 사실상 혼자 창설했고, 2023년 예일로 옮겨 디지털윤리센터를 이끈다. 철학자로는 드물게 정책 현장 깊숙이 들어가 있다 — EU AI 윤리 가이드라인의 모태가 된 AI4People 프레임을 설계했고, 이탈리아·영국 정부와 EU 기관들의 자문을 맡아 왔다. “추상적 윤리학을 입법 언어로 번역할 수 있는 거의 유일한 철학자”라는 평가와, 바로 그래서 “빅테크와 너무 가깝다”는 비판을 함께 받는다.',
school:'그의 자리는 분석철학 전통 안에서의 건설 작업이다. 영미 분석철학이 언어를 철학의 제1주제로 삼았듯(언어적 전회), 플로리디는 정보를 그 자리에 놓자고 제안한다 — 정보적 전회다. 인식론(지식이란 무엇인가)을 정보의 의미론으로, 존재론(무엇이 있는가)을 정보 구조의 수준 — 그의 방법론 용어로 추상화 수준(Levels of Abstraction, 컴퓨터과학의 인터페이스 개념을 철학 방법으로 가져온 것) — 으로 다시 쓴다. 윤리학에서는 정보윤리를 환경윤리의 확장으로 설계한다. 생명 중심 윤리가 “살아 있는 것”에 도덕적 지위를 줬다면, 그는 “존재하는 정보적 실체” 일반에 최소한의 도덕적 가치를 부여하고, 정보권(infosphere)의 엔트로피 — 의미 구조의 파괴 — 를 악으로 정의한다. 거시윤리(macroethics)라는 그의 표현은, 개별 행위 판정이 아니라 정보환경 전체의 설계를 윤리의 단위로 삼겠다는 선언이다.',
argument:'『네 번째 혁명』의 서사는 이렇다. 코페르니쿠스는 인간을 우주의 중심에서, 다윈은 생명의 중심에서, 프로이트는 의식의 중심에서 끌어내렸다. 튜링이 연 네 번째 혁명은 인간이 정보권의 유일한 지적 행위자라는 특권을 끝냈다 — 우리는 이제 알고리즘과 정보 공간을 공유하는 “인포그(inforg)”다. 온라인과 오프라인의 구분도 무너졌다. 그가 만든 “온라이프(onlife)”는 접속/비접속의 경계가 사라진 생활 조건을 가리키는 말로, EU의 정책 문서에까지 들어갔다. 이 존재론 위에서 정체성론이 나온다. 자아는 고정된 실체가 아니라 정보 흐름 속에서 구성되는 서사이며, 따라서 프라이버시 침해는 “내 소유물을 가져가는 것”이 아니라 “나를 구성하는 정보를 변형해 나의 정체성을 다시 쓰는 것” — 소유권 침해가 아니라 인격 침해다. 거버넌스론에서는 디지털 주권 논의와 “시프트(설계의 정치)” — 통치는 점점 법이 아니라 인프라 설계를 통해 작동한다 — 를 다루며, 윤리가 규제의 사후 보완이 아니라 설계의 사전 원리가 되어야 한다고 주장한다.',
position:'정보철학은 이제 표준 교과 분야가 됐지만, 그의 위치는 양쪽에서 사격받는 중간이다. 비판적 데이터 연구 진영(주보프·크로퍼드 쪽과 겹치는)은 그의 윤리 프레임이 권력 분석 없이 원칙 목록을 만들어 빅테크의 “윤리 세탁”에 알리바이를 준다고 비판한다 — 실제로 그는 구글 자문위원회에 참여했고 그 위원회가 해체되는 소동을 겪었다. 반대편 강성 분석철학 쪽은 정보 존재론이 은유의 과잉이라 본다. 그의 응답은 일관된다 — 원칙 없는 비판은 입법이 되지 못하고, 윤리는 참여를 통해서만 설계에 들어간다는 것. 이 “참여 vs 포획” 논쟁이 그를 읽는 핵심 긴장이다.',
connect:'마스터플랜 3.3이 사회계약을 권리 목록이 아니라 “정체성이 형성·발현·인정되는 여건의 보장”으로 정의한 것은 플로리디의 존재론과 정확히 공명한다 — 형성·발현·인정은 모두 정보환경 안의 과정이고, 그렇다면 사회계약은 그 환경의 설계 원칙에 대한 합의다. 프라이버시를 인격 구성의 문제로 보는 그의 관점은 마스터플랜의 “권리 UI”(설명·거부·조정)에 소유권 프레임보다 깊은 정당화를 제공한다. 물을 것은 측정이다 — 정보환경의 “최소 품질”을 정책이 집행 가능한 지표로 번역하면 무엇이 되는가.',
concepts:[['정보적 전회 / 추상화 수준','정보를 철학의 제1주제로. 분석 단위는 관찰 목적에 따라 선택되는 인터페이스(LoA)다.'],['네 번째 혁명 / 인포그','튜링 이후 인간은 정보권을 알고리즘과 공유하는 정보적 유기체가 됐다.'],['온라이프','온/오프라인 구분이 소멸한 생활 조건. EU 정책 언어로 수출된 개념.'],['프라이버시 = 인격','정보 프라이버시 침해는 소유권이 아니라 정체성 구성의 침해다.']],
readings:[['The Fourth Revolution (2014)','가장 접근하기 좋은 입문. 인포그·온라이프·정보권의 서사.'],['The Ethics of Information (2013)','정보윤리의 이론 본체. 거시윤리와 정보 엔트로피.'],['AI4People 프레임 논문 (2018)','EU AI 윤리 가이드라인의 모태. 정책 번역의 실례.']],
debates:['윤리 원칙은 권력을 움직이는가, 윤리 세탁의 알리바이인가','정보 존재론은 철학적 혁신인가 은유의 과잉인가'],
ask:'정체성의 형성·발현·인정을 보장하는 정보환경의 최소 조건은 무엇인가?'}
];

// ================= 후보 16명 (줄글 유지) =================
const candidates=[
['데이비드 오터','David Autor','미국 · MIT · 노동경제학','오터는 “기술이 일자리를 없앤다”는 거친 문장을 과업(task) 단위로 분해해 측정 가능하게 만든 노동경제학의 기둥이다. 레비·머네인과 함께 만든 ALM 루틴화 가설 — 기계는 규칙으로 코드화되는 루틴 과업만 대체한다 — 은 이후 20년 노동시장 양극화 연구의 표준 프레임이 됐다. 서스킨드가 깨려는 전제가 바로 이 모델이라는 점에서, 두 사람은 같은 전통의 안과 밖이다. 최근 오터는 AI가 오히려 중간층의 전문성 접근을 넓힐 수 있다는 신중한 낙관(“AI could rebuild the middle class”)을 내놓아 다시 논쟁의 중심에 있다.','3.1 노동 재편 — 서스킨드와 반드시 짝으로'],
['요하이 벤클러','Yochai Benkler','미국 · Harvard Law School','벤클러는 위키피디아와 오픈소스가 보여준 “시장도 기업도 아닌 생산” — 공유지 기반 동료생산 — 을 이론화한 법학자다. 『네트워크의 부』는 코즈의 기업 이론에 제3의 답을 추가했다. 거래비용이 낮아지면 위계(기업)도 가격(시장)도 아닌 자발적 협업이 생산을 조직할 수 있다는 것. 정체성 기반 생산자들이 조직 없이 협업하는 구조에 대한 가장 오래되고 깊은 이론이다.','정체성 기반 생산자 경제의 협업 구조 이론'],
['캐시 오닐','Cathy O’Neil','미국 · 수학자·데이터과학자','하버드 수학 박사 출신으로 월가 헤지펀드 퀀트로 일하다 2008년 금융위기를 내부에서 본 뒤 전향했다. 『대량살상수학무기』는 신용·채용·보험·치안의 점수화 모델이 불투명성·규모·피해의 삼박자로 불평등을 자동화한다고 고발한다. 알고리즘 감사 회사 ORCAA를 직접 차려 비판을 실무로 옮겼다. 마스터플랜 권리 UI의 설명권 설계에 가장 구체적인 사례집을 제공한다.','권리 UI — 알고리즘 설명·거부권의 사례 기반'],
['케이트 크로퍼드','Kate Crawford','미국/호주 · USC / Microsoft Research','크로퍼드는 AI를 알고리즘이 아니라 추출 산업으로 그린다. 『AI의 지도』는 리튬 광산, 데이터 라벨링 노동, 데이터센터 전력, 군사 계약까지 — AI가 지구적 자원과 노동을 추출하는 물질적 권력 체계임을 보인다. AI Now 연구소 공동 설립자로, 벤지오식 실존 위험론이 현재의 해악에서 시선을 빼앗는다는 비판 진영의 이론적 중심이기도 하다.','AI 인프라 접근권 논의의 물질적 토대'],
['버지니아 유뱅크스','Virginia Eubanks','미국 · University at Albany','유뱅크스는 『자동화된 불평등』에서 복지 자동화 시스템 세 곳 — 인디애나의 수급 자동 거부, LA의 노숙인 점수화, 피츠버그의 아동학대 예측 — 을 현장 추적했다. “디지털 구빈원”이라는 그의 개념은 알고리즘 행정이 가장 약한 곳에서 가장 가혹하게 작동함을 보여준다. 마스터플랜의 안전망 설계가 “효율화된 배제”로 변질되지 않기 위한 필수 경고다.','국가 안전망의 알고리즘화 위험 점검'],
['메러디스 휘터커','Meredith Whittaker','미국 · Signal Foundation','구글에서 13년 일하며 2018년 2만 명 워크아웃을 조직했고, 나와서 AI Now를 공동 설립했으며, 지금은 시그널 재단 회장이다. 그의 핵심 논지는 현대 AI가 과학의 진보가 아니라 소수 빅테크의 컴퓨팅·데이터 독점의 산물이라는 것 — “AI는 권력의 파생물”이다. 감시 없는 통신 인프라(시그널)를 실제로 운영한다는 점에서, 공공적 대안의 실존 증명이기도 하다.','플랫폼 권력 조정과 공공 AI의 실천 사례'],
['사피야 우모자 노블','Safiya Umoja Noble','미국 · UCLA','노블의 『억압의 알고리즘』은 “black girls” 검색 결과가 포르노로 채워지던 시절의 구글을 증거로, 검색엔진이 중립적 도서관이 아니라 광고 수익에 최적화된 상업 미디어임을 보였다. 노출과 검색이 집단의 사회적 인정을 좌우한다는 논지는 마스터플랜의 “인정 조건” 설계와 직결된다. 맥아더 펠로우십(2021)을 받았다.','노출·추천 구조의 정치성 — 인정 조건 보강'],
['루하 벤저민','Ruha Benjamin','미국 · Princeton','벤저민은 기술이 “중립”을 가장할 때 차별이 더 깊게 코드화된다는 New Jim Code 개념을 만들었다 — 짐 크로우 법의 디지털 후계라는 뜻이다. 의료사회학에서 출발해 기술 연구로 넘어온 이력답게, 설계 단계에 정의를 넣는 design justice를 요구한다. 기술 비관도 낙관도 아닌 “상상력의 재분배”를 말하는 점이 독특하다.','AI 사회계약의 차별 방지 기준'],
['제프리 힌턴','Geoffrey Hinton','캐나다/영국 · University of Toronto','딥러닝의 아버지. 역전파 알고리즘의 보급자이자 AI 겨울을 버틴 연결주의의 수장으로, 2018 튜링상과 2024 노벨물리학상을 받았다. 2023년 구글을 떠나며 “내가 만든 것이 위험해질 수 있다”고 경고하는 쪽으로 돌아섰다. 벤지오와 함께 “창시자의 경고” 축을 이루지만, 벤지오보다 비관의 농도가 짙다 — 그는 통제 가능성 자체에 회의적이다.','4.1 AI 안전·안보 논지의 무게 보강'],
['스튜어트 러셀','Stuart Russell','미국 · UC Berkeley','세계 1,500개 대학이 쓰는 표준 AI 교과서(러셀-노빅)의 저자. 『Human Compatible』에서 “목표를 고정한 AI” 패러다임 자체를 바꾸자고 제안한다 — AI는 인간 선호를 불확실하게 추정하며, 인간이 끌 수 있는 여지를 스스로 보존해야 한다는 설계론(CIRL)이다. 자율살상무기 금지 캠페인의 학계 간판이기도 하다. 벤지오의 거버넌스론에 기술철학적 기초를 제공한다.','프런티어 거버넌스의 기술철학적 기초'],
['아제이 아그라왈','Ajay Agrawal','캐나다 · University of Toronto','아그라왈은 AI를 신비화하지 않고 경제학 한 줄로 환원한다 — “AI는 예측 비용의 하락이다.” 『예측 기계』의 프레임에 따르면, 예측이 싸지면 보완재인 판단·데이터·행동의 가치가 오른다. AI 시대에 인간의 어떤 역량이 비싸지는가 — 곧 목적 설정과 판단, 마스터플랜의 언어로는 정체성 — 를 설명하는 가장 깔끔한 도구다. 토론토 창조파괴랩(CDL) 설립자.','AI 경제질서의 비용 구조 프레임'],
['카를로타 페레스','Carlota Perez','영국/베네수엘라 · 기술혁명 연구','페레스는 네오슘페터리언 학파의 살아 있는 고전이다. 『기술혁명과 금융자본』은 증기기관부터 정보기술까지 다섯 번의 기술혁명이 모두 “도입기 거품 → 붕괴 → 제도 재편 → 전개기 황금기”의 파동을 그렸음을 보였다. 지금이 정보기술 혁명의 제도 재편기라면, 마스터플랜의 새 사회계약은 황금기를 여는 제도 설계에 해당한다 — 전체 기획을 역사적 시간축 위에 놓아 주는 학자. 마추카토의 직접적 스승 격이다.','디지털 전환의 장기 역사 프레임'],
['사스키아 사센','Saskia Sassen','미국 · Columbia','사센의 『글로벌 시티』(1991)는 세계화가 공간을 해체하는 것이 아니라 금융·정보·전문서비스의 결절점 도시(뉴욕·런던·도쿄)로 권력을 재집중시킴을 보였다. 국가 아래가 아니라 국가를 가로지르는 도시 네트워크라는 시각, 그리고 후기작의 “축출(expulsions)” 개념 — 글로벌 경제가 사람과 장소를 체계적으로 밀어내는 논리 — 은 4.3 도시경영과 4.1 세계질서를 잇는 다리다.','도시경영과 세계질서의 연결 이론'],
['에드워드 글레이저','Edward Glaeser','미국 · Harvard','글레이저는 도시경제학의 시카고학파적 기둥이다 — 가격 이론과 인적자본으로 도시를 설명한다. 『도시의 승리』는 도시의 본질이 건물이 아니라 근접성이 만드는 학습·혁신의 증폭임을 논증했다. 플로리다의 창조계급론에 “학력 변수를 빼면 설명력이 없다”고 반박한 당사자이고, 아세모글루의 제도론에도 “제도가 아니라 인적자본”이라 맞선 논쟁의 단골이다. 강소도시의 학습 밀도 설계에 직접 쓰인다.','4.3 강소도시 — 학습·혁신 밀도의 근거'],
['앨리슨 고프닉','Alison Gopnik','미국 · UC Berkeley','고프닉은 아동을 “요람 속의 과학자”로 보는 발달심리학의 대표 주자다. 아이는 지시된 수행이 아니라 탐색과 놀이 속에서 베이지언 추론하듯 세계 모델을 만든다는 것을 실험으로 보였다. 양육을 목수(설계)가 아니라 정원사(환경 조성)로 비유한 것이 유명하다. DeepMind 등 AI 연구자들이 아동 학습에서 탐색·호기심 알고리즘을 배우려 할 만큼 AI와의 접점도 깊다. 4.4 가정경영 — 정체성 발견의 첫 현장 — 의 과학적 토대.','4.4 가정경영 — 정체성 발견의 발달과학'],
['아마르티아 센','Amartya Sen','미국/인도 · Harvard · 1998 노벨경제학상','센의 역량 접근(capability approach)은 발전을 소득이 아니라 “사람이 실제로 할 수 있고 될 수 있는 것의 확장”으로 재정의했다 — UN 인간개발지수(HDI)의 이론적 아버지다. 후생경제학과 사회선택이론(애로우의 후계)에서 출발해 기근 연구·정의론까지, 자유를 발전의 수단이자 목적으로 놓는 일관된 기획. 마스터플랜의 “여건 보장” — 결과가 아니라 정체성이 기여로 전환될 조건의 보장 — 은 역량 개념의 디지털 시대 번역이다.','새 사회계약의 자유·역량 규범 기초'],
];

const G='#c9a227';
const INK='#101216';
const axisColor={O1:'#0d7d72',O2:'#2f5fa8',O3:'#b08322'};

function photoEl(s){
  const u=findImg(s.en);
  if(u) return `<div class="pwrap"><img class="photo" src="${u}"/></div>`;
  return `<div class="pwrap"><div class="photo ph">${s.ko.slice(0,2)}</div></div>`;
}

const scholarPages=cited.map((s,i)=>{
const ac=axisColor[s.axisNo];
const pageA=`<section class="sheet scholar">
  <div class="bigno">${String(i+1).padStart(2,'0')}</div>
  <div class="shead">
    ${photoEl(s)}
    <div class="sid">
      <div class="axisline"><span class="axchip" style="background:${ac}">${s.axisNo}</span><span class="axname">${s.axis}</span></div>
      <h1>${s.ko}</h1>
      <div class="en">${s.en}</div>
      <div class="meta">${s.place} — ${s.field}</div>
    </div>
  </div>
  <div class="rule"><span style="background:${ac}"></span></div>
  <div class="prose">
    <div class="pblock"><div class="plab" style="color:${ac}">누구인가</div><p>${s.bio}</p></div>
    <div class="pblock"><div class="plab" style="color:${ac}">학파 — 학문적 배경</div><p>${s.school}</p></div>
    <div class="pblock"><div class="plab" style="color:${ac}">핵심 주장의 전개</div><p>${s.argument}</p></div>
  </div>
  <div class="pfoot"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>${String(i*2+3).padStart(2,'0')}</span></div>
</section>`;
const pageB=`<section class="sheet scholar contpage">
  <div class="conthead"><span class="contname">${String(i+1).padStart(2,'0')} · ${s.ko} <em>${s.en}</em></span><span class="contax" style="color:${ac}">${s.axisNo} ${s.axis}</span></div>
  <div class="prose">
    <div class="pblock"><div class="plab" style="color:${ac}">학계 내 위치와 논쟁</div><p>${s.position}</p></div>
    <div class="pblock"><div class="plab" style="color:${ac}">마스터플랜과의 연결</div><p>${s.connect}</p></div>
  </div>
  <div class="sumgrid">
    <div class="sumcol">
      <h2 style="border-color:${ac}">핵심 개념 요약</h2>
      ${s.concepts.map(c=>`<div class="concept"><b>${c[0]}</b><p>${c[1]}</p></div>`).join('')}
    </div>
    <div class="sumcol">
      <h2 style="border-color:${ac}">읽을 자료</h2>
      ${s.readings.map(r=>`<div class="reading" style="border-color:${G}"><b>${r[0]}</b><p>${r[1]}</p></div>`).join('')}
      <h2 style="border-color:${ac};margin-top:4mm">논쟁 지점</h2>
      ${s.debates.map(d=>`<div class="deb"><p>${d}</p></div>`).join('')}
    </div>
  </div>
  <div class="askband" style="border-color:${ac}">
    <div class="asklab" style="color:${ac}">자문 질문</div>
    <div class="askq">${s.ask}</div>
  </div>
  <div class="pfoot"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>${String(i*2+4).padStart(2,'0')}</span></div>
</section>`;
return pageA+pageB;}).join('\n');

const candEntry=(c,i)=>`<div class="centry">
  <div class="chead"><span class="cno">${String(i+1).padStart(2,'0')}</span><h3>${c[0]}</h3><span class="cen">${c[1]}</span><span class="cpl">${c[2]}</span></div>
  <p>${c[3]}</p>
  <div class="cuse">${c[4]}</div>
</div>`;
const candA=candidates.slice(0,5).map((c,i)=>candEntry(c,i)).join('');
const candB=candidates.slice(5,10).map((c,i)=>candEntry(c,i+5)).join('');
const candC=candidates.slice(10,13).map((c,i)=>candEntry(c,i+10)).join('');
const candD=candidates.slice(13).map((c,i)=>candEntry(c,i+13)).join('');

function candPage(kicker,title,lead,body,pageNo){
return `<section class="sheet candpage">
  <div class="gk">${kicker}</div>
  <h1>${title}</h1>
  ${lead?`<div class="lead">${lead}</div>`:''}
  <div class="clist">${body}</div>
  <div class="pfoot"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>${pageNo}</span></div>
</section>`}

const html=`<!doctype html><html lang="ko"><head><meta charset="utf-8"/><style>
@page{size:A4;margin:0}
*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact;margin:0;padding:0}
body{font-family:Pretendard,-apple-system,BlinkMacSystemFont,"Noto Sans KR","Apple SD Gothic Neo",sans-serif;color:${INK};word-break:keep-all}
.sheet{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;background:#fbfaf7}
.cover{background:${INK};color:#f5f2ea;padding:24mm 20mm}
.cover .frame{position:absolute;inset:9mm;border:0.4mm solid rgba(201,162,39,.55)}
.cover .frame:after{content:"";position:absolute;inset:1.6mm;border:0.15mm solid rgba(201,162,39,.3)}
.cv{position:relative;height:100%;display:flex;flex-direction:column;padding:8mm 6mm}
.cv .org{font-size:9.5pt;letter-spacing:.42em;color:rgba(245,242,234,.75);font-weight:700}
.cv .gold-rule{width:34mm;height:0.8mm;background:${G};margin:9mm 0 12mm}
.cv h1{font-size:42pt;line-height:1.12;font-weight:850;letter-spacing:-1.2px}
.cv h1 em{font-style:normal;color:${G}}
.cv .sub{margin-top:9mm;font-size:12.5pt;line-height:1.78;color:rgba(245,242,234,.78);max-width:150mm;font-weight:450}
.cv .stats{margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:6mm}
.cv .stat{border-top:0.5mm solid rgba(201,162,39,.65);padding-top:4mm}
.cv .stat b{font-size:23pt;font-weight:850;color:${G};display:block}
.cv .stat span{font-size:9.5pt;color:rgba(245,242,234,.72);line-height:1.5;display:block;margin-top:1.5mm}
.cv .edition{position:absolute;right:6mm;top:7mm;text-align:right;font-size:8.5pt;letter-spacing:.28em;color:rgba(245,242,234,.55);line-height:2}
.guide{padding:19mm 19mm 16mm}
.gk{font-size:9pt;font-weight:800;letter-spacing:.34em;color:${G}}
.guide h1,.candpage h1{font-size:24pt;font-weight:850;letter-spacing:-0.8px;margin:4mm 0 4mm}
.guide .gp{font-size:10.6pt;line-height:1.84;color:#33373f;margin-bottom:4.2mm;max-width:172mm;text-align:justify}
.guide .gp b{font-weight:850;color:${INK}}
.axes{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin:6mm 0 0}
.axis-card{border:0.3mm solid #d9d5ca;background:#fff;padding:5mm;position:relative}
.axis-card .top{height:1.1mm;position:absolute;left:0;right:0;top:0}
.axis-card .no{font-size:9pt;font-weight:900;letter-spacing:.2em;margin-bottom:2mm}
.axis-card b{font-size:13.5pt;font-weight:850;display:block;margin-bottom:2mm}
.axis-card .who{font-size:9.5pt;font-weight:700;color:#30343a;margin-bottom:2mm;line-height:1.5}
.axis-card p{font-size:9.4pt;line-height:1.58;color:#5a5f68}
.scholar{padding:15mm 17mm 13mm}
.bigno{position:absolute;right:10mm;top:5mm;font-size:58pt;font-weight:950;color:#e9e5d8;letter-spacing:-3px;line-height:1}
.shead{display:grid;grid-template-columns:30mm 1fr;gap:6mm;align-items:center;position:relative}
.pwrap{width:28mm;height:28mm;position:relative}
.pwrap:after{content:"";position:absolute;inset:-1.6mm;border:0.35mm solid ${G};border-radius:50%}
.photo{width:28mm;height:28mm;border-radius:50%;object-fit:cover;filter:grayscale(100%) contrast(1.04)}
.ph{display:flex;align-items:center;justify-content:center;background:#ece8dd;font-size:15pt;font-weight:900;color:#9b9483;border-radius:50%}
.axisline{display:flex;align-items:center;gap:2.5mm;margin-bottom:1.6mm}
.axchip{color:#fff;font-size:8pt;font-weight:900;letter-spacing:.12em;padding:0.8mm 2.4mm;border-radius:0.8mm}
.axname{font-size:9.5pt;font-weight:800;letter-spacing:.14em;color:#6a6f78}
.scholar h1{font-size:22pt;font-weight:880;letter-spacing:-0.7px;line-height:1.05;display:inline}
.en{font-size:10pt;color:#8a8576;font-weight:650;letter-spacing:.05em;margin:1mm 0 1.6mm}
.meta{font-size:9.4pt;color:#30343a;font-weight:600;line-height:1.55}
.rule{height:0.5mm;background:#e2ddd0;margin:5mm 0 5.5mm;position:relative}
.rule span{position:absolute;left:0;top:0;bottom:0;width:34mm}
.pblock{margin-bottom:4.6mm}
.plab{font-size:8.5pt;font-weight:900;letter-spacing:.22em;margin-bottom:1.8mm}
.pblock p{font-size:10.2pt;line-height:1.82;color:#2c3038;text-align:justify}
.contpage{padding-top:13mm}
.conthead{display:flex;justify-content:space-between;align-items:baseline;border-bottom:0.5mm solid ${INK};padding-bottom:2.6mm;margin-bottom:6mm}
.contname{font-size:13pt;font-weight:880}
.contname em{font-style:normal;font-size:9.5pt;color:#8a8576;font-weight:650;margin-left:2mm}
.contax{font-size:9pt;font-weight:900;letter-spacing:.18em}
.sumgrid{display:grid;grid-template-columns:1fr 1fr;gap:6mm;margin-top:1mm}
.sumcol h2{font-size:9.5pt;font-weight:900;letter-spacing:.2em;margin-bottom:3.4mm;padding-bottom:1.8mm;border-bottom:0.5mm solid}
.concept{margin-bottom:3.8mm}
.concept b{font-size:10.4pt;font-weight:850;display:block;margin-bottom:1mm}
.concept p{font-size:9.4pt;line-height:1.6;color:#494e57}
.reading{margin-bottom:3.2mm;padding-left:3mm;border-left:0.6mm solid}
.reading b{font-size:9.9pt;font-weight:800;display:block;margin-bottom:0.7mm}
.reading p{font-size:9.2pt;line-height:1.52;color:#494e57}
.deb{margin-bottom:2.4mm}
.deb p{font-size:9.4pt;line-height:1.56;color:#494e57;padding-left:3.4mm;position:relative}
.deb p:before{content:"—";position:absolute;left:0;color:${G};font-weight:900}
.askband{margin-top:4.5mm;background:${INK};padding:6mm 7mm;display:grid;grid-template-columns:22mm 1fr;gap:5mm;align-items:center;border-left:1.6mm solid}
.asklab{font-size:8.5pt;font-weight:900;letter-spacing:.24em}
.askq{color:#f5f2ea;font-size:12.5pt;line-height:1.5;font-weight:750}
.pfoot{position:absolute;left:17mm;right:17mm;bottom:7mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:.22em;color:#a59f8e;font-weight:700;border-top:0.25mm solid #e0dbce;padding-top:2.2mm}
.candpage{padding:16mm 19mm 14mm}
.candpage .lead{font-size:10.5pt;line-height:1.7;color:#4a4f58;margin-bottom:5mm;max-width:165mm}
.centry{margin-bottom:4.6mm;padding-bottom:4.2mm;border-bottom:0.2mm solid #e2ddd0}
.centry:last-child{border-bottom:none}
.chead{display:flex;align-items:baseline;gap:2.6mm;margin-bottom:1.6mm}
.cno{font-size:10pt;font-weight:950;color:${G}}
.chead h3{font-size:12.5pt;font-weight:850}
.cen{font-size:8.8pt;color:#8a8576;font-weight:650}
.cpl{font-size:8.8pt;color:#5a5f68;font-weight:700;margin-left:auto}
.centry p{font-size:9.7pt;line-height:1.7;color:#33373f;text-align:justify}
.cuse{margin-top:1.6mm;font-size:8.6pt;font-weight:850;color:#8a8576}
.cuse:before{content:"▸ 마스터플랜 활용 — ";color:${G}}
</style></head><body>

<section class="sheet cover">
  <div class="frame"></div>
  <div class="cv">
    <div class="edition">MASTERPLAN v0.11.5<br/>GRADUATE EDITION · 2026.06</div>
    <div class="org">TAEJAE FUTURE STRATEGY INSTITUTE</div>
    <div class="gold-rule"></div>
    <h1>학자 학습자료<br/><em>Scholar Learning Pack</em></h1>
    <div class="sub">마스터플랜의 세 축 — 경제질서·정치질서·사회계약 — 을 검증하기 위한 대화 준비 자료. 인용 학자 8명을 한 사람당 두 페이지로 깊게 읽는다. 줄글로 학문적 계보와 주장의 전개를 따라가고, 요약 페이지로 개념·자료·논쟁을 정리한다. 목표는 해당 분야 대학원생이 아는 수준 — 학자의 주장만이 아니라 그가 속한 학파, 그가 받는 비판까지.</div>
    <div class="stats">
      <div class="stat"><b>8</b><span>인용 학자 — 계보·학파·주장·논쟁·연결 + 요약의 2페이지 정독</span></div>
      <div class="stat"><b>16</b><span>후보 학자 — 인용 학자의 2배수, 한 단락 정밀 요약</span></div>
      <div class="stat"><b>3</b><span>마스터플랜 축 — 경제질서 · 정치질서 · 사회계약</span></div>
    </div>
  </div>
</section>

<section class="sheet guide">
  <div class="gk">HOW TO READ</div>
  <h1>왜 이 24명인가</h1>
  <div class="gp">마스터플랜은 하나의 인과 사슬 위에 서 있다. <b>AI·데이터·컴퓨팅이 생산비를 떨어뜨려 개인이 생산자가 되고(경제질서), 강화된 개인은 국가 평균 규칙에 맞지 않아 권력이 도시와 세계로 재배치되며(정치질서), 그 전환이 작동하려면 정체성이 고유한 기여로 전환될 여건을 공동체가 보장해야 한다(사회계약).</b> 이 사슬의 고리 하나하나는 우리가 발명한 것이 아니라 지난 20년의 학문적 논쟁 위에 서 있다. 이 자료는 그 논쟁의 원래 주인들을 만나기 위한 준비다.</div>
  <div class="gp">각 학자는 두 페이지다. 첫 페이지에서 <b>누구인가 — 학파 — 핵심 주장의 전개</b>를 줄글로 읽는다. 학파를 아는 것이 중요하다 — 브린욜프슨의 낙관은 보완성 경제학에서, 아세모글루의 비관은 권력의 정치경제학에서, 주보프의 분노는 폴라니와 아렌트에서 나온다. 같은 “AI”를 말해도 서 있는 전통이 다르면 단어의 뜻이 다르다. 둘째 페이지는 <b>학계 내 위치와 논쟁 — 마스터플랜과의 연결</b>에 이어 <b>핵심 개념·읽을 자료·논쟁 지점 요약</b>이 붙는다. 정독은 줄글로, 회의 직전 복습은 요약으로.</div>
  <div class="gp">세 축의 학자들은 서로 충돌한다. 브린욜프슨의 증강 낙관과 아세모글루의 1% 비관, 벤지오의 실존 위험론과 크로퍼드·휘터커의 현재 해악론, 플로리다의 창조도시와 글레이저의 인적자본 반박. <b>이 충돌이 마스터플랜의 진짜 시험대다.</b> 우리는 어느 한쪽을 편들기 위해서가 아니라, 충돌 지점 위에 한국의 실험을 놓기 위해 이들을 읽는다.</div>
  <div class="axes">
    <div class="axis-card"><div class="top" style="background:${axisColor.O1}"></div><div class="no" style="color:${axisColor.O1}">O1 · 경제질서</div><b>생산의 주인이 바뀐다</b><div class="who">브린욜프슨 · 서스킨드 · 마추카토</div><p>보완성 경제학, 과업 모델, 슘페터리언 산업정책 — AI 이후 개인 생산자 경제의 성립 조건.</p></div>
    <div class="axis-card"><div class="top" style="background:${axisColor.O2}"></div><div class="no" style="color:${axisColor.O2}">O2 · 정치질서</div><b>권력의 자리가 바뀐다</b><div class="who">아세모글루 · 벤지오 · 플로리다</div><p>제도의 정치경제학, 연결주의와 AI 안전, 창조도시론 — 기술 방향의 민주적 조정과 도시 실험.</p></div>
    <div class="axis-card"><div class="top" style="background:${axisColor.O3}"></div><div class="no" style="color:${axisColor.O3}">O3 · 사회계약</div><b>계약의 내용이 바뀐다</b><div class="who">주보프 · 플로리디</div><p>정보자본주의 비판과 정보철학 — 플랫폼 권력의 조정과 정보환경 설계 원칙으로서의 사회계약.</p></div>
  </div>
  <div class="pfoot"><span>TAEJAE FUTURE STRATEGY INSTITUTE</span><span>SCHOLAR LEARNING PACK · v0.11.5</span><span>02</span></div>
</section>

${scholarPages}

${candPage('CANDIDATES · 1/4','후보 학자 16명 — 확장 독서','인용 학자 8명의 2배수 후보군이다. 한 사람당 한 단락으로 누구이고, 어느 전통에 서 있고, 왜 우리 논의에 필요한지를 적었다. 자문·세미나 초청 후보이자 인용 학자들이 받는 비판의 출처이기도 하다.',candA,'27')}
${candPage('CANDIDATES · 2/4','후보 학자 — 계속','',candB,'28')}
${candPage('CANDIDATES · 3/4','후보 학자 — 계속','',candC,'29')}
${candPage('CANDIDATES · 4/4','후보 학자 — 계속','',candD,'30')}

</body></html>`;
fs.writeFileSync(outHtml,html);
const browser=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const page=await browser.newPage();
await page.goto('file://'+outHtml,{waitUntil:'networkidle0'});
await page.pdf({path:outPdf,width:'210mm',height:'297mm',printBackground:true,preferCSSPageSize:true});
await browser.close();
console.log('PDF written:',outPdf);
