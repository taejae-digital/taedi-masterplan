import fs from 'fs';
import path from 'path';
import vm from 'vm';
import puppeteer from 'puppeteer';

const root = process.cwd();
const baseScript = path.join(root, 'scripts/render-scholar-pack-fable-easy.mjs');
const src = fs.readFileSync(baseScript, 'utf8');
const citedSrc = src.match(/const cited=([\s\S]*?);\n\n\/\/ ============ 후보/)[1];
const candidatesSrc = src.match(/const candidates=([\s\S]*?);\n\nconst G=/)[1];
const baseCited = vm.runInNewContext('(' + citedSrc + ')');
const baseCandidates = vm.runInNewContext('(' + candidatesSrc + ')');

const outHtml = path.join(root, 'drafts/scholar-pack-book-50p.html');
const outPdf = path.join(root, 'archive/pdf/scholar-learning-pack-v0.11.5-book.pdf');
const imgDirs = [path.join(root, 'drafts/scholar-images-parallel'), path.join(root, 'drafts/scholar-images')];
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function findImg(en) {
  for (const d of imgDirs) {
    if (!fs.existsSync(d)) continue;
    for (const ext of ['.jpg', '.jpeg', '.png', '.webp']) {
      const p = path.join(d, slug(en) + ext);
      if (fs.existsSync(p)) return 'file://' + p;
    }
  }
  return '';
}

const G = '#b58a1e';
const INK = '#15171c';
const PAPER = '#fbfaf7';
const axisColor = { O1: '#0d7d72', O2: '#2f5fa8', O3: '#a56f19' };
const ORG = 'TAEJAE FUTURE CONSENSUS INSTITUTE';

function promotedScholars() {
  return [
    {
      ko: '크리스 앤더슨', en: 'Chris Anderson', axis: '경제질서', axisNo: 'O1',
      place: '미국 · 前 와이어드 편집장 / 기술·미디어 저술가', field: '롱테일 경제 · 니치 생산 · 디지털 유통',
      bio: '크리스 앤더슨은 전통적 의미의 대학 교수라기보다, 디지털 경제의 현장을 가장 먼저 언어화한 편집자형 사상가다. 《와이어드》 편집장으로 일하며 인터넷 산업의 변화를 가까이 관찰했고, 2004년 「롱테일」 글과 2006년 동명의 책으로 “소수 히트 상품이 아니라 수많은 작은 취향의 총합이 시장을 만든다”는 명제를 대중화했다. 그의 장점은 통계 모델을 정교하게 세우는 데 있지 않다. 산업 현장에서 이미 벌어지고 있지만 아직 이름이 없던 변화를 포착해 정책과 기업이 쓸 수 있는 언어로 바꾸는 데 있다. 마스터플랜의 “개인의 정체성이 생산 단위가 된다”는 문장은 앤더슨의 롱테일 경제를 AI 시대까지 확장한 것이다.',
      school: '앤더슨의 계보는 미시경제학의 수요곡선과 인터넷 플랫폼 연구 사이에 있다. 산업사회 대중시장은 재고·진열·광고 비용 때문에 상위 몇 개 상품만 살아남는 구조였다. 서점은 책장 면적이 한정되어 있고, 방송국은 편성 시간이 한정되어 있으며, 음반 매장은 진열대가 한정되어 있다. 그래서 평균 취향에 맞는 히트 상품이 시장을 지배했다. 인터넷은 이 병목을 풀었다. 저장과 검색 비용이 거의 0에 가까워지면, 아주 작은 수요를 가진 상품도 전 세계에서 구매자를 찾을 수 있다. 앤더슨은 이 변화를 “희소한 진열 공간의 경제”에서 “풍부한 선택지의 경제”로의 이동으로 설명한다. 학문적으로는 플랫폼 경제학, 정보재 경제학, 문화산업 연구와 닿아 있다.',
      claim1: '그의 첫 번째 주장은 “꼬리가 길어지면 중심이 약해진다”는 것이다. 과거에는 상위 20%의 상품이 대부분의 매출을 만들었다. 그러나 온라인에서는 하위 80%의 작은 상품들이 모두 합쳐 상당한 시장을 형성한다. 이때 중요한 것은 단순히 상품 수가 많아지는 것이 아니다. 검색, 추천, 리뷰, 커뮤니티가 붙어야 긴 꼬리가 실제 수요와 연결된다. 아무리 많은 책과 음악과 강좌가 있어도 사람들이 발견하지 못하면 시장은 생기지 않는다. 그래서 롱테일 경제의 핵심 인프라는 물류보다 발견(discovery)이다. 마스터플랜에서 플랫폼 권력의 조정을 말하는 이유도 여기에 있다. 정체성 기반 생산자가 많아질수록, 그들을 누가 어떻게 발견하게 하느냐가 생산의 조건이 된다.',
      claim2: '두 번째 주장은 “생산자와 소비자의 경계가 흐려진다”는 것이다. 앤더슨은 후속작 《프리》와 《메이커스》에서 디지털 도구가 개인을 소규모 생산자로 만든다고 보았다. 3D 프린터, 오픈소스 하드웨어, 크라우드펀딩, 온라인 유통은 대기업이 독점하던 설계·제조·판매의 일부를 개인에게 열었다. 오늘의 AI는 이 논리를 더 급진화한다. 글쓰기, 디자인, 코딩, 영상 제작, 조사와 분석이 모두 개인의 작업대 위로 내려온다. 따라서 문제는 “개인이 생산할 수 있는가”가 아니라 “개인의 고유한 취향과 경험이 시장과 연결될 수 있는가”가 된다. 앤더슨은 이 질문을 경제적 직관으로 열어 준다.',
      glossary: [['롱테일', '히트 상품 뒤에 길게 늘어선 작은 수요들의 합. 각각은 작지만 전체로는 큰 시장이 된다.'], ['발견 비용', '상품이 존재한다는 사실을 소비자가 알아차리는 데 드는 비용. 검색·추천·리뷰가 낮춘다.'], ['니치 시장', '대중 전체가 아니라 특정 취향·문제·정체성을 가진 작은 집단의 시장.'], ['메이커 운동', '개인이 디지털 도구와 오픈소스 지식을 활용해 직접 설계·제작하는 흐름.']],
      position: '앤더슨의 롱테일론은 강력한 직관을 제공했지만 비판도 받았다. 실제 플랫폼에서는 긴 꼬리가 열린 뒤에도 슈퍼스타 집중이 더 강해졌다는 연구가 많다. 넷플릭스와 스포티파이는 선택지를 늘렸지만, 추천 알고리즘은 다시 상위 콘텐츠를 밀어준다. 또 롱테일 시장에서 생산자는 많아지지만 수익은 플랫폼과 상위 소수에게 몰리는 문제가 있다. 이 비판은 마스터플랜에 중요하다. 정체성 기반 생산자 경제는 “누구나 올릴 수 있다”만으로 성립하지 않는다. 발견 구조, 수익 배분, 평판 시스템을 함께 설계해야 한다.',
      connect: '마스터플랜 P1의 “다품종 소량생산”과 “개인 정체성의 생산 단위화”는 앤더슨의 롱테일 없이는 설명력이 약해진다. AI가 생산비를 낮추면 긴 꼬리는 더 길어진다. 그러나 긴 꼬리가 길어진 만큼 발견 권력도 커진다. 그래서 P3의 사회계약은 플랫폼 추천·노출·평판의 공정성을 포함해야 한다. 앤더슨은 “개인의 다양성이 경제적으로 말이 되는가”를 설명하고, 주보프와 플로리디는 “그 다양성이 플랫폼 권력에 종속되지 않으려면 무엇을 보장해야 하는가”를 설명한다.',
      concepts: [['롱테일 경제', '저장·검색·유통 비용 하락이 작은 취향의 시장을 가능하게 한다.'], ['히트 중심 시장의 약화', '평균 취향보다 분화된 취향의 총합이 중요해진다.'], ['발견 인프라', '검색·추천·리뷰·커뮤니티가 생산자와 소비자를 연결한다.'], ['개인 메이커', 'AI와 디지털 도구로 개인이 기획·제작·유통 일부를 수행한다.']],
      readings: [['The Long Tail (2006)', '디지털 유통이 문화시장 구조를 바꾸는 과정을 설명한 대표작.'], ['Free (2009)', '정보재의 가격과 무료 모델을 설명한다.'], ['Makers (2012)', '개인 제작과 소규모 제조의 가능성을 다룬다.']],
      debates: ['롱테일은 실제로 수익 분산을 만들었나, 아니면 플랫폼 집중을 강화했나', '선택지가 많아질수록 소비자는 다양해지는가, 추천 알고리즘에 더 종속되는가'],
      ask: 'AI 시대의 긴 꼬리가 플랫폼 독점이 아니라 개인 생산자 경제로 이어지려면 어떤 발견·배분 규칙이 필요한가?'
    },
    {
      ko: '요차이 벤클러', en: 'Yochai Benkler', axis: '경제질서', axisNo: 'O1',
      place: '미국 · 하버드 로스쿨', field: '네트워크 경제 · 동료생산 · 디지털 공공재',
      bio: '벤클러는 인터넷이 시장과 기업 말고도 제3의 생산 방식을 만들 수 있다는 점을 가장 체계적으로 설명한 법학자다. 『네트워크의 부』(2006)는 위키피디아, 리눅스, 오픈소스 소프트웨어, 크리에이티브 커먼즈 같은 현상을 하나의 이론으로 묶었다. 핵심은 단순하다. 정보 생산의 비용이 낮아지고 사람들이 느슨하게 연결되면, 임금이나 명령이 없어도 복잡한 결과물이 만들어질 수 있다. 그는 이것을 “공유지 기반 동료생산”이라고 불렀다. 마스터플랜의 개인 생산자 경제가 고립된 개인들의 경쟁이 아니라 협업 질서가 되려면 벤클러가 필수다.',
      school: '그의 학문적 배경은 법경제학과 정보정책이다. 1990년대 인터넷 정책 논쟁의 핵심은 저작권과 통신 인프라였다. 강한 지식재산권이 창작을 촉진한다는 입장과, 과도한 권리가 오히려 지식의 재조합을 막는다는 입장이 맞섰다. 벤클러는 후자에 섰다. 그는 정보가 물건과 다르다고 보았다. 내가 사과를 먹으면 남은 먹을 수 없지만, 내가 코드를 복사해도 원본은 사라지지 않는다. 이런 비경합적 재화에서는 배타적 소유보다 개방과 협업이 더 큰 가치를 만들 수 있다. 엘리너 오스트롬의 공유지 이론과도 닿아 있지만, 벤클러의 공유지는 숲이나 어장이 아니라 코드·지식·문화다.',
      claim1: '첫 번째 주장은 “생산의 조정 방식이 늘어난다”는 것이다. 산업경제는 시장(가격)과 기업(명령)이라는 두 조정 방식으로 설명됐다. 시장은 가격 신호로 사람들을 움직이고, 기업은 고용계약과 위계로 움직인다. 인터넷은 세 번째 방식을 만들었다. 사람들은 각자 할 수 있는 작은 기여를 올리고, 전체 시스템은 그 기여를 모아 큰 산출물로 만든다. 리눅스 커널, 위키피디아 문서, 오픈스트리트맵 같은 것이 그런 예다. 이 방식은 참여자의 동기가 돈 하나로 환원되지 않는다는 점에서 중요하다. 평판, 흥미, 공동체, 문제 해결의 즐거움이 생산 동기가 된다.',
      claim2: '두 번째 주장은 “개방이 혁신의 조건”이라는 것이다. 정보 생산은 기존 지식의 재조합에서 나온다. 그러므로 입력 자원이 닫히면 혁신도 느려진다. 벤클러는 스펙트럼, 소프트웨어, 문화 콘텐츠, 과학 데이터 같은 영역에서 개방형 제도가 더 많은 실험을 가능하게 한다고 주장했다. 그러나 그는 무정부주의자가 아니다. 완전한 무규칙이 아니라, 참여와 품질을 조정하는 규칙이 필요하다고 본다. 위키피디아에도 편집 규칙과 관리자와 토론 절차가 있다. 열린 생산은 질서를 거부하는 것이 아니라, 다른 종류의 질서를 요구한다.',
      glossary: [['동료생산', '동등한 참여자들이 작은 기여를 모아 큰 산출물을 만드는 생산 방식.'], ['비경합재', '한 사람이 써도 다른 사람의 사용 가능성이 줄지 않는 재화. 정보와 코드가 대표적이다.'], ['공유지 기반 생산', '사적 소유나 기업 위계가 아니라 공동 자원과 규칙 위에서 이루어지는 생산.'], ['개방형 혁신', '외부 기여와 재조합을 허용해 혁신 속도를 높이는 방식.']],
      position: '벤클러의 낙관은 플랫폼 자본주의가 강해지며 시험대에 올랐다. 초기 인터넷은 분산과 자율의 공간처럼 보였지만, 지금은 구글·메타·아마존 같은 초대형 플랫폼이 연결 구조를 장악한다. 동료생산도 무임승차, 품질 관리, 참여자 소진의 문제를 겪는다. 그래도 그의 이론은 사라지지 않았다. 오픈소스 AI, 위키형 지식 생산, 시민 과학, 공공 데이터 협업은 여전히 벤클러의 언어로 가장 잘 설명된다. 쟁점은 “개방이 가능한가”가 아니라 “개방을 어떤 제도와 인프라로 지킬 것인가”다.',
      connect: '마스터플랜은 개인을 생산자로 세우지만, 그 개인이 혼자 모든 것을 하는 세계를 그리지 않는다. 정체성 기반 생산자는 서로 다른 능력과 경험을 연결해야 한다. 벤클러는 이 연결의 운영 원리를 제공한다. P3의 생산수단 개방은 단지 AI 도구를 무료로 쓰게 하자는 정책이 아니라, 사람들이 지식과 데이터와 모델을 재조합해 공동 생산할 수 있는 공유지의 설계다. P4의 도시경영도 강소도시들이 각자 고립되지 않고 동료생산 네트워크로 연결될 때 설득력이 생긴다.',
      concepts: [['공유지 기반 동료생산', '시장·기업 외의 제3 조정 방식.'], ['정보재의 비경합성', '복제가 비용을 거의 만들지 않는 재화는 소유보다 접근이 중요하다.'], ['참여 동기의 다원성', '돈뿐 아니라 평판·흥미·공동체가 생산을 움직인다.'], ['개방과 규칙의 결합', '열린 시스템도 품질과 책임을 위한 규칙을 필요로 한다.']],
      readings: [['The Wealth of Networks (2006)', '네트워크 정보경제의 고전.'], ['Coase’s Penguin (2002)', '동료생산을 경제학적으로 설명한 핵심 논문.'], ['Benkler 외, Network Propaganda (2018)', '네트워크 공론장의 취약성까지 다룬 후속 작업.']],
      debates: ['동료생산은 플랫폼 독점 아래에서도 가능한가', '개방형 생산은 품질과 책임을 어떻게 보장하는가'],
      ask: '한국형 공공 AI 공유지는 어떤 데이터·모델·규칙을 열고, 어떤 책임 구조를 붙여야 하는가?'
    },
    {
      ko: '엘리너 오스트롬', en: 'Elinor Ostrom', axis: '사회계약', axisNo: 'O3',
      place: '미국 · 인디애나대 · 2009 노벨경제학상', field: '공유지 거버넌스 · 제도분석 · 다층 질서',
      bio: '오스트롬은 “공유지는 반드시 망가진다”는 오래된 통념을 깨고 노벨경제학상을 받은 정치경제학자다. 그는 숲, 관개시설, 어장, 목초지 같은 공동 자원이 실제로 어떻게 관리되는지 수십 년 동안 현장 연구로 추적했다. 결론은 정부 소유냐 사유화냐의 이분법이 틀렸다는 것이다. 공동체는 적절한 규칙과 감시와 제재와 분쟁 해결 절차를 갖추면 공유 자원을 오래 관리할 수 있다. 디지털 시대의 AI·데이터·컴퓨팅도 새로운 공유지라면, 오스트롬은 사회계약 설계의 가장 단단한 기초다.',
      school: '그의 학문은 합리적 선택 제도주의와 현장 사회과학의 결합이다. 당시 경제학의 표준 모델은 개인을 자기 이익만 좇는 행위자로 가정했고, 그래서 공유지는 필연적으로 과잉 사용된다고 봤다. 유명한 “공유지의 비극”이다. 오스트롬은 이 모델이 현실을 너무 단순화한다고 보았다. 사람들은 반복적으로 만나고, 평판을 신경 쓰고, 규칙을 만들고, 어긴 사람에게 제재를 가한다. 그는 게임이론의 엄밀함을 알았지만, 책상 위 모델만 믿지 않고 현장을 봤다. 그래서 그의 제도분석은 추상 이론이면서 동시에 매우 실무적이다.',
      claim1: '첫 번째 주장은 “공동체는 스스로 규칙을 만들 수 있다”는 것이다. 오스트롬이 발견한 성공적 공유지에는 반복되는 설계 원리가 있었다. 누가 자원을 쓸 권리가 있는지 경계가 분명하고, 사용 규칙이 지역 조건에 맞으며, 이용자들이 규칙 변경에 참여하고, 감시자가 있으며, 위반에 대한 제재가 단계적으로 작동하고, 빠른 분쟁 해결 장치가 있다. 또한 외부 정부가 공동체의 자율적 규칙을 인정해야 한다. 이것은 낭만적 공동체론이 아니다. 자유에는 규칙이 필요하고, 규칙은 참여와 집행을 필요로 한다는 현실주의다.',
      claim2: '두 번째 주장은 “다층 거버넌스”다. 큰 문제일수록 한 중심에서 모두 통제하기보다 여러 층위의 제도가 중첩되어야 한다. 물 관리는 마을 단위의 관개 규칙, 지역 단위의 조정, 국가 단위의 법이 함께 작동한다. 기후변화 같은 문제도 세계정부 하나를 기다리는 대신 도시·지역·국가·국제기구의 다중 실험이 필요하다. 디지털 사회계약도 마찬가지다. 개인 데이터, 도시 데이터, 국가 AI 인프라, 글로벌 모델 안전은 서로 다른 층위에서 다른 규칙을 요구한다. 오스트롬은 “하나의 완벽한 설계”보다 “서로 배우는 다중 설계”를 지지한다.',
      glossary: [['공유지의 비극', '공동 자원을 각자 마음대로 쓰면 결국 고갈된다는 가설. 오스트롬은 조건부로 반박했다.'], ['설계 원리', '성공적 공유지에서 반복되는 규칙 묶음. 경계·참여·감시·제재 등이 포함된다.'], ['다층 거버넌스', '마을·도시·국가·국제 층위가 중첩되어 문제를 관리하는 구조.'], ['제도분석', '규칙이 행위와 결과를 어떻게 바꾸는지 분석하는 연구 전통.']],
      position: '오스트롬은 시장 대 국가의 낡은 논쟁을 넘어섰지만, 그의 이론도 오해되기 쉽다. 그는 “공동체가 알아서 잘한다”고 말하지 않았다. 실패한 공유지도 많고, 규칙이 불공정하면 공동체 내부의 약자가 배제될 수 있다. 또 디지털 공유지는 전통 공유지와 다르다. 데이터는 고갈되지 않지만, 프라이버시와 권력 집중이라는 다른 문제가 생긴다. 따라서 오스트롬을 디지털에 적용하려면 자원 고갈보다 접근권, 책임, 감시 권력, 분쟁 해결을 중심으로 다시 번역해야 한다.',
      connect: '마스터플랜의 사회계약은 오스트롬식으로 읽을 때 가장 선명해진다. “생산수단의 개방”은 모두에게 무제한 개방하자는 말이 아니라, AI·데이터·컴퓨팅이라는 공유지에 대한 접근 규칙을 공동으로 정하자는 말이다. “플랫폼 권력의 조정”은 중앙정부 규제 하나로 끝나지 않고, 도시 실험·시민 감시·국가 법제·국제 표준이 겹쳐야 한다. P4의 도시경영과 세계경영이 P3 사회계약의 실행 장치로 이어지는 이유도 오스트롬의 다층 거버넌스로 설명된다.',
      concepts: [['자치적 규칙', '이용자가 규칙 형성에 참여할 때 집행 가능성이 높아진다.'], ['단계적 제재', '위반에 즉시 최대 처벌을 하지 않고 반복과 정도에 따라 조정한다.'], ['분쟁 해결', '규칙이 살아 있으려면 빠르고 저렴한 갈등 조정 장치가 필요하다.'], ['다중심성', '하나의 중심 대신 여러 중심이 실험하고 조정하는 질서.']],
      readings: [['Governing the Commons (1990)', '공유지 이론의 원전.'], ['Understanding Institutional Diversity (2005)', '제도분석의 체계화.'], ['Polycentric Systems for Coping with Climate Change (2010)', '다층 거버넌스를 기후 문제에 적용한 글.']],
      debates: ['디지털 데이터는 전통 공유지처럼 관리될 수 있는가', '공동체 규칙은 내부 배제와 권력 불균형을 어떻게 막는가'],
      ask: 'AI·데이터 공유지를 열면서도 프라이버시와 안전을 지키는 오스트롬식 설계 원리는 무엇인가?'
    },
    {
      ko: '에드워드 글레이저', en: 'Edward Glaeser', axis: '도시·정치질서', axisNo: 'O2',
      place: '미국 · 하버드대 경제학과', field: '도시경제학 · 인적자본 · 근접성',
      bio: '글레이저는 도시를 낭만이 아니라 경제학으로 설명하는 대표 학자다. 『도시의 승리』(2011)에서 그는 도시의 본질을 건물이나 랜드마크가 아니라 “사람 사이의 근접성”으로 보았다. 사람은 가까이 있을 때 서로를 관찰하고 배우고, 우연히 만나 아이디어를 섞고, 더 빠르게 직업을 바꾸며, 기업은 깊은 노동시장을 얻는다. 그래서 도시는 비싸고 복잡하고 불편해도 생산성이 높다. 마스터플랜의 강소도시가 “정체성의 실험장”이 되려면 글레이저의 학습 밀도 논리가 필요하다.',
      school: '그의 학문적 뿌리는 신고전파 도시경제학과 인적자본 이론이다. 도시경제학은 왜 사람과 기업이 비싼 땅값을 감수하고 모이는지 묻는다. 답은 집적경제다. 같은 곳에 모이면 공급자와 고객을 찾기 쉽고, 전문 인력을 구하기 쉽고, 지식이 빨리 퍼진다. 글레이저는 특히 교육받은 사람들의 밀도, 즉 인적자본을 강조한다. 플로리다가 창조계급과 관용을 말할 때, 글레이저는 더 차갑게 묻는다. “그 도시에는 교육받은 사람이 얼마나 많은가? 주택 공급은 충분한가? 규제 때문에 성장이 막히지 않는가?”',
      claim1: '첫 번째 주장은 “도시는 학습 기계”라는 것이다. 젊은 사람들은 도시에서 더 빨리 배운다. 같은 업계 사람을 만나고, 직장을 옮기고, 실패한 창업자에게서도 배운다. 이 지식은 교과서처럼 정리되어 전달되는 지식이 아니라, 말투·취향·작업 방식·문제 해결 습관 같은 암묵지다. 그래서 화상회의가 있어도 도시는 사라지지 않는다. 원격으로 정보를 주고받을 수는 있지만, 신뢰와 모방과 우연한 결합은 여전히 밀도에서 나온다. AI 시대에도 이 논리는 중요하다. AI는 정보를 제공하지만, 사람의 정체성이 생산으로 전환되는 사회적 맥락은 도시가 만든다.',
      claim2: '두 번째 주장은 “도시의 성공은 주택과 규제에 달려 있다”는 것이다. 글레이저는 도시가 성장하지 못하는 가장 큰 이유 중 하나로 토지이용 규제를 든다. 좋은 도시일수록 사람들이 들어오고 싶어 하는데, 주택 공급을 막으면 집값만 오르고 신규 진입자는 밀려난다. 그러면 도시는 생산성의 장소가 아니라 특권의 장소가 된다. 이 지점에서 그는 플로리다와 닿는다. 창조도시가 성공할수록 배제가 생긴다는 문제를, 글레이저는 주택 공급과 인적자본 투자의 언어로 푼다.',
      glossary: [['집적경제', '사람과 기업이 가까이 모일 때 생기는 생산성 이득.'], ['인적자본', '교육·기술·경험처럼 사람 안에 축적된 생산 능력.'], ['암묵지', '문서로 적기 어렵지만 함께 일하며 배우는 지식.'], ['토지이용 규제', '건축 높이·용도·밀도 제한 등 도시 성장을 좌우하는 규칙.']],
      position: '글레이저는 플로리다의 대표적 비판자다. 그는 창조계급 지표가 사실상 교육 수준의 다른 이름이라고 본다. 또 아세모글루의 제도론에도 “교육과 인적자본이 제도보다 앞선 원인일 수 있다”고 반박했다. 그의 약점은 도시의 문화·정체성·정치 갈등을 지나치게 경제 변수로 환원한다는 점이다. 하지만 강점도 바로 거기 있다. 도시 전략이 감성적 슬로건으로 흐를 때, 그는 주택·교육·밀도·이동성이라는 실행 변수를 요구한다.',
      connect: '마스터플랜 4.3의 강소도시는 “작지만 촘촘한 학습 도시”여야 한다. 단순한 지방 균형발전이 아니라, 사람을 연결해 학습과 혁신을 증폭하는 장치여야 한다. 글레이저는 이 설계의 하드웨어를 묻는다. 어느 규모에서 암묵지 교환이 일어나는가? 주거와 일자리와 교육기관이 얼마나 가까워야 하는가? 규제는 진입을 열고 있는가? 플로리다가 도시의 정체성과 매력을 말한다면, 글레이저는 그 매력이 실제 생산성으로 바뀌는 물리적 조건을 말한다.',
      concepts: [['도시=학습 기계', '근접성이 관찰·모방·우연한 만남을 통해 학습을 만든다.'], ['집적의 이득', '깊은 노동시장, 공급자 연결, 지식 확산이 도시 생산성을 높인다.'], ['주택 공급', '성공한 도시가 배제의 도시가 되지 않으려면 진입 가능한 주거가 필요하다.'], ['인적자본의 밀도', '교육받은 사람의 밀도가 도시 성장의 핵심 변수다.']],
      readings: [['Triumph of the City (2011)', '도시경제학의 대중적 고전.'], ['Glaeser, Scheinkman, Shleifer (1995)', '도시 성장과 인적자본 연구의 핵심 논문.'], ['Survival of the City (2021)', '팬데믹 이후 도시의 지속성을 논한 책.']],
      debates: ['창조계급인가 인적자본인가 — 플로리다와의 논쟁', '원격근무 시대에도 도시 밀도는 생산성의 핵심인가'],
      ask: '한국의 강소도시는 몇 명 규모, 어떤 주거·교육·산업 밀도에서 학습 기계로 작동하는가?'
    },
    {
      ko: '앨리슨 고프닉', en: 'Alison Gopnik', axis: '사회계약', axisNo: 'O3',
      place: '미국 · UC버클리 심리학과', field: '발달심리학 · 학습 · 탐색과 놀이',
      bio: '고프닉은 아기를 무능한 미완성 인간이 아니라 “요람 속의 과학자”로 본 발달심리학자다. 그는 아이들이 어른에게 지시받은 대로만 배우는 것이 아니라, 스스로 가설을 세우고 놀면서 세계의 원리를 추론한다는 것을 실험으로 보여 주었다. 양육을 목수처럼 아이를 설계도대로 깎는 일이 아니라, 정원사처럼 자랄 환경을 만드는 일로 비유한 것으로 유명하다. 마스터플랜 4.4가 가정을 정체성 발견의 첫 장소로 보는 근거가 여기에 있다.',
      school: '그의 배경은 인지과학과 발달심리학이다. 20세기 중반 이후 피아제는 아이가 단계적으로 사고 능력을 발달시킨다고 보았고, 이후 인지과학은 아이의 마음을 더 능동적인 추론 시스템으로 보기 시작했다. 고프닉은 여기에 베이지안 학습 이론을 접목했다. 아이는 무작위로 노는 것이 아니라, 제한된 증거를 바탕으로 “세상이 이렇게 작동할 것이다”라는 모델을 계속 갱신한다. 장난감을 떨어뜨리고, 같은 말을 반복하고, 어른의 반응을 실험하는 행동은 모두 작은 과학 실험에 가깝다. 그래서 놀이와 탐색은 여가가 아니라 학습의 핵심 메커니즘이다.',
      claim1: '첫 번째 주장은 “아이의 탐색은 비효율이 아니라 지능의 조건”이라는 것이다. 어른의 지능은 목표를 정하고 빠르게 수행하는 데 강하다. 반면 아이의 지능은 목표가 아직 고정되지 않은 상태에서 가능한 세계를 넓게 탐색하는 데 강하다. 인공지능 연구에서도 탐색과 활용의 균형(exploration vs exploitation)은 핵심 문제다. 너무 빨리 목표를 고정하면 새로운 가능성을 놓친다. 아이의 놀이는 바로 목표를 고정하기 전의 탐색이다. 이 관점은 교육과 가정의 목표를 바꾼다. 좋은 가정은 아이에게 정답을 빨리 주입하는 곳이 아니라, 안전하게 실험하고 실패하고 다시 시도할 수 있는 환경이다.',
      claim2: '두 번째 주장은 “돌봄은 통제가 아니라 환경 설계”라는 것이다. 고프닉은 현대 부모가 아이를 프로젝트처럼 관리하려는 경향을 비판한다. 좋은 부모는 아이를 원하는 모양으로 조각하는 목수가 아니라, 다양한 식물이 자랄 수 있는 토양과 햇빛과 물을 마련하는 정원사다. 이것은 방임이 아니다. 정원사는 매우 많은 일을 한다. 다만 식물의 최종 모양을 직접 명령하지 않는다. 마스터플랜의 언어로 바꾸면, 정체성은 주입되는 것이 아니라 발견되는 것이고, 가정과 학교와 도시는 그 발견이 일어나는 여건을 설계해야 한다.',
      glossary: [['요람 속의 과학자', '아이가 가설을 세우고 실험하듯 세계를 배운다는 비유.'], ['베이지안 학습', '새 증거가 들어올 때 기존 믿음을 갱신하는 확률적 학습 방식.'], ['탐색 vs 활용', '새 가능성을 찾아보는 것과 이미 아는 방법을 실행하는 것 사이의 균형.'], ['정원사 모델', '아이를 설계도대로 만들기보다 자랄 환경을 조성하는 양육관.']],
      position: '고프닉의 연구는 교육열이 강한 사회에 불편한 질문을 던진다. 조기 훈련과 성취 관리가 정말 창의성과 정체성 형성에 도움이 되는가? 물론 그의 입장을 “아무것도 가르치지 말라”로 읽으면 틀린다. 그는 풍부한 환경, 안정적 애착, 어른의 언어와 문화가 중요하다고 본다. 다만 학습의 주체가 아이 자신이라는 점을 강조한다. AI 시대에는 이 메시지가 더 중요하다. 지식 암기는 AI가 대체하지만, 무엇을 궁금해하고 어떤 세계를 만들고 싶은지는 탐색 경험에서 나온다.',
      connect: '마스터플랜 4.4의 가정경영은 가족주의 회귀가 아니다. 디지털 생태계에서 개인이 자기 정체성을 발견하고 발현하는 첫 환경을 어떻게 설계할 것인가의 문제다. 고프닉은 그 설계 원칙을 제공한다. 가정은 성과를 조기 최적화하는 공장이 아니라, 아이가 다양한 가능성을 안전하게 실험하는 정원이어야 한다. 이 원리는 교육·도시·AI 도구 설계로 이어진다. 개인화 AI도 정답을 빨리 주는 튜터가 아니라, 탐색을 넓히는 동반자가 되어야 한다.',
      concepts: [['탐색형 지능', '목표가 고정되기 전 가능한 세계를 넓게 시험하는 능력.'], ['놀이의 인지과학', '놀이는 휴식이 아니라 가설 검증과 모델 형성의 과정이다.'], ['환경으로서의 돌봄', '돌봄은 통제가 아니라 가능성을 열어 주는 조건 설계다.'], ['정체성 발견', '정체성은 주입보다 탐색과 관계 속에서 형성된다.']],
      readings: [['The Scientist in the Crib (1999)', '아동을 능동적 학습자로 보는 대표작.'], ['The Philosophical Baby (2009)', '아이의 마음을 철학과 인지과학으로 풀어낸 책.'], ['The Gardener and the Carpenter (2016)', '양육관의 전환을 설명하는 대중적 저작.']],
      debates: ['자유로운 탐색과 구조화된 교육은 어떻게 균형을 잡는가', '개인화 AI는 아이의 탐색을 넓히는가, 조기 최적화를 강화하는가'],
      ask: '정체성 발견을 돕는 가정·학교·AI 도구는 어떤 실패와 놀이를 허용해야 하는가?'
    }
  ];
}

const promoted = promotedScholars();
const promotedNames = new Set(promoted.map(s => s.ko));
const allCited = [...baseCited, ...promoted];
const remainingCandidates = baseCandidates.filter(c => !['요하이 벤클러', '에드워드 글레이저', '앨리슨 고프닉'].includes(c[0]));

function photoEl(s) {
  const u = findImg(s.en);
  if (u) return `<div class="pwrap"><img class="photo" src="${u}"/></div>`;
  return `<div class="pwrap"><div class="photo ph">${s.ko.slice(0, 2)}</div></div>`;
}
const foot = n => `<div class="pfoot"><span>${ORG}</span><span>SCHOLAR LEARNING PACK · BOOK EDITION</span><span>${n}</span></div>`;
let pageCounter = 7;

const frontPages = () => `
<section class="sheet cover"><div class="frame"></div><div class="cv"><div class="edition">MASTERPLAN v0.11.5<br/>BOOK EDITION · 2026.06</div><div class="org">${ORG}</div><div class="gold-rule"></div><h1>학자 학습자료<br/><em>Scholar Learning Pack</em></h1><div class="sub">마스터플랜의 문장 뒤에 놓인 학문적 계보를 책처럼 읽기 위한 50페이지 에디션. 인용 학자 13명을 중심으로, “누구인가 — 어느 학파에서 왔는가 — 무엇을 주장했는가 — 어떤 비판을 받는가 — 마스터플랜과 어떻게 연결되는가”를 줄글로 이어 읽는다.</div><div class="stats"><div class="stat"><b>13</b><span>마스터플랜 실제 인용·자문 학자</span></div><div class="stat"><b>3</b><span>경제질서 · 정치질서 · 사회계약</span></div><div class="stat"><b>50p</b><span>정독용 북 에디션</span></div></div></div></section>
<section class="sheet guide"><div class="gk">PREFACE</div><h1>왜 학자 학습자료를 책처럼 읽어야 하는가</h1><p class="bookp">마스터플랜은 단순한 정책 아이디어 모음이 아니라 하나의 인과 구조다. AI·데이터·컴퓨팅이 생산비를 낮추고, 생산의 단위가 조직에서 개인으로 내려오며, 개인은 더 이상 평균적 시민·평균적 노동자로만 설명되지 않는다. 이 변화는 경제질서의 전환이고, 동시에 정치질서의 전환이며, 끝내 사회계약의 전환이다. 이 구조를 설득하려면 한두 명의 유명 학자를 인용하는 것으로는 부족하다. 각 주장이 어느 학문 전통에서 나왔는지, 어떤 비판을 받는지, 서로 어디서 충돌하는지까지 알아야 한다.</p><p class="bookp">그래서 이 자료는 요약 카드가 아니라 독서용 책의 형식으로 다시 짰다. 브린욜프슨을 읽을 때는 생산성 역설과 보완재 경제학을 알아야 하고, 서스킨드를 읽을 때는 노동경제학의 루틴화 가설을 알아야 한다. 마추카토는 슘페터와 폴라니의 계보 위에 있고, 아세모글루는 노스의 제도경제학을 권력 이론으로 급진화했다. 주보프는 빅테크 비판가이기 전에 일터의 컴퓨터화를 연구한 조직사회학자였고, 플로리디는 윤리학자가 아니라 정보철학 전체를 새로 세우려 한 사람이다.</p>${foot('02')}</section>
<section class="sheet guide"><div class="gk">READING MAP</div><h1>세 축으로 읽는 법</h1><div class="axes"><div class="axis-card"><div class="top" style="background:${axisColor.O1}"></div><div class="no" style="color:${axisColor.O1}">O1 · 경제질서</div><b>생산의 주인이 바뀐다</b><div class="who">브린욜프슨 · 서스킨드 · 마추카토 · 앤더슨 · 벤클러</div><p>AI가 생산비를 낮출 때 개인과 공동체가 생산자가 되는 조건, 공공 인프라와 개방형 협업의 설계.</p></div><div class="axis-card"><div class="top" style="background:${axisColor.O2}"></div><div class="no" style="color:${axisColor.O2}">O2 · 정치질서</div><b>권력의 자리가 바뀐다</b><div class="who">아세모글루 · 벤지오 · 플로리다 · 글레이저</div><p>기술 방향의 민주적 조정, AI 안전 검증, 도시의 학습 밀도와 권력 재배치.</p></div><div class="axis-card"><div class="top" style="background:${axisColor.O3}"></div><div class="no" style="color:${axisColor.O3}">O3 · 사회계약</div><b>보장의 내용이 바뀐다</b><div class="who">주보프 · 플로리디 · 오스트롬 · 고프닉</div><p>플랫폼 권력, 정보환경, 공유지 규칙, 정체성 발견의 생활 기반.</p></div></div><p class="bookp smalltop">읽는 순서는 축별로 해도 되고, 논쟁별로 해도 된다. 브린욜프슨과 아세모글루는 AI 생산성 논쟁으로, 플로리다와 글레이저는 도시 전략 논쟁으로, 벤지오와 크로퍼드는 AI 위험의 시간 지평 논쟁으로 묶인다. 중요한 것은 각 학자를 “근거”로만 쓰지 않고, 그가 놓인 논쟁의 구조까지 읽는 것이다.</p>${foot('03')}</section>
<section class="sheet guide"><div class="gk">CAUSAL SPINE</div><h1>마스터플랜의 인과 사슬</h1><p class="bookp">첫째, 기술은 생산비를 낮춘다. 그러나 브린욜프슨이 말하듯 기술은 혼자 작동하지 않는다. 조직 재설계, 데이터, 인재, 제도가 함께 바뀌어야 생산성이 오른다. 둘째, 일의 의미가 바뀐다. 서스킨드는 일자리가 단지 소득 장치가 아니라 의미와 지위를 배분해 왔다고 본다. AI가 고용의 형태를 흔들면, 사회는 소득과 의미를 다시 묶어야 한다. 셋째, 국가는 시장을 보정하는 데서 멈출 수 없다. 마추카토가 말하듯 공공 투자는 아직 없는 시장의 방향을 만든다.</p><p class="bookp">넷째, 권력은 기술 안에 들어간다. 아세모글루는 기술의 이익이 자동으로 공유되지 않으며, 권력과 제도가 방향을 정한다고 말한다. 벤지오는 최첨단 AI의 안전이 기업 자율에 맡겨질 수 없다고 경고한다. 다섯째, 개인의 정체성은 정보환경 안에서 형성된다. 주보프와 플로리디는 데이터와 추천과 인터페이스가 인간의 선택지를 배열하는 권력임을 보여 준다. 마지막으로 오스트롬과 고프닉은 보장의 단위를 생활 세계로 끌어내린다. 공유지는 규칙이 있어야 지속되고, 정체성은 지시가 아니라 탐색의 환경 속에서 자란다.</p>${foot('04')}</section>
<section class="sheet guide"><div class="gk">HOW TO USE</div><h1>회의 전에 읽는 방식</h1><p class="bookp">각 장은 세 페이지다. 첫 페이지는 사람과 계보다. 이 학자가 누구이고 어느 전통에서 나왔는지를 먼저 읽는다. 두 번째 페이지는 주장이다. 핵심 주장을 두 덩어리로 나누어, 처음 읽는 사람도 따라갈 수 있도록 전문용어를 풀었다. 세 번째 페이지는 논쟁과 활용이다. 학계에서 어떤 반박을 받는지, 마스터플랜의 어느 문장을 강화하거나 위험하게 만드는지, 자문 자리에서 무엇을 물어야 하는지를 정리했다.</p><p class="bookp">회의 직전에는 각 장의 마지막 페이지에 있는 개념·읽을 자료·논쟁·자문 질문만 다시 보면 된다. 단, 처음 읽을 때는 앞의 줄글을 건너뛰지 않는 것이 좋다. 핵심 주장만 외우면 오해가 생긴다. 예컨대 마추카토는 “정부가 다 하자”는 사람이 아니고, 오스트롬은 “공동체가 알아서 한다”는 사람이 아니다. 벤지오는 “AI를 닫자”는 사람이 아니고, 플로리디는 “윤리 원칙만 만들자”는 사람이 아니다. 이런 오해를 막기 위해 줄글을 다시 넣었다.</p>${foot('05')}</section>
<section class="sheet guide"><div class="gk">CAST</div><h1>인용 학자 13명</h1><div class="castgrid">${allCited.map((s,i)=>`<div class="cast"><span style="color:${axisColor[s.axisNo]}">${String(i+1).padStart(2,'0')} · ${s.axisNo}</span><b>${s.ko}</b><em>${s.en}</em><p>${s.field}</p></div>`).join('')}</div>${foot('06')}</section>`;

function scholarPages(s, i) {
  const ac = axisColor[s.axisNo];
  const pA = String(pageCounter++).padStart(2, '0');
  const pB = String(pageCounter++).padStart(2, '0');
  const pC = String(pageCounter++).padStart(2, '0');
  return `<section class="sheet scholar"><div class="bigno">${String(i + 1).padStart(2, '0')}</div><div class="shead">${photoEl(s)}<div><div class="axisline"><span class="axchip" style="background:${ac}">${s.axisNo}</span><span class="axname">${s.axis}</span></div><h1>${s.ko}</h1><div class="en">${s.en}</div><div class="meta">${s.place} — ${s.field}</div></div></div><div class="rule"><span style="background:${ac}"></span></div><div class="pblock"><div class="plab" style="color:${ac}">누구인가</div><p>${s.bio}</p></div><div class="pblock"><div class="plab" style="color:${ac}">학파 — 학문적 배경</div><p>${s.school}</p></div>${foot(pA)}</section>
  <section class="sheet scholar contpage"><div class="conthead"><span class="contname">${String(i + 1).padStart(2, '0')} · ${s.ko} <em>${s.en}</em></span><span class="contax" style="color:${ac}">${s.axisNo} ${s.axis}</span></div><div class="pblock"><div class="plab" style="color:${ac}">핵심 주장의 전개 ①</div><p>${s.claim1}</p></div><div class="pblock"><div class="plab" style="color:${ac}">핵심 주장의 전개 ②</div><p>${s.claim2}</p></div><div class="glossary"><div class="glab" style="color:${ac}">처음 읽는 사람을 위한 용어 풀이</div><div class="ggrid">${s.glossary.map(g=>`<div class="gitem"><b>${g[0]}</b><p>${g[1]}</p></div>`).join('')}</div></div>${foot(pB)}</section>
  <section class="sheet scholar contpage"><div class="conthead"><span class="contname">${String(i + 1).padStart(2, '0')} · ${s.ko} — 논쟁과 활용</span><span class="contax" style="color:${ac}">${s.axisNo} ${s.axis}</span></div><div class="pblock"><div class="plab" style="color:${ac}">학계 내 위치와 논쟁</div><p>${s.position}</p></div><div class="pblock"><div class="plab" style="color:${ac}">마스터플랜과의 연결</div><p>${s.connect}</p></div><div class="sumgrid"><div class="sumcol"><h2 style="border-color:${ac}">핵심 개념</h2>${s.concepts.map(c=>`<div class="concept"><b>${c[0]}</b><p>${c[1]}</p></div>`).join('')}</div><div class="sumcol"><h2 style="border-color:${ac}">읽을 자료</h2>${s.readings.map(r=>`<div class="reading"><b>${r[0]}</b><p>${r[1]}</p></div>`).join('')}<h2 style="border-color:${ac};margin-top:3mm">논쟁</h2>${(Array.isArray(s.debates)?s.debates:[s.debates]).map(d=>`<div class="deb"><p>${d}</p></div>`).join('')}</div></div><div class="askband" style="border-color:${ac}"><div class="asklab" style="color:${ac}">자문 질문</div><div class="askq">${s.ask}</div></div>${foot(pC)}</section>`;
}

function candEntry(c, i) { return `<div class="centry"><div class="chead"><span class="cno">${String(i+1).padStart(2,'0')}</span><h3>${c[0]}</h3><span class="cen">${c[1]}</span><span class="cpl">${c[2]}</span></div><p>${c[3]}</p><div class="cuse">${c[4]}</div></div>`; }
function candPage(k, title, arr, startIndex) { const n=String(pageCounter++).padStart(2,'0'); return `<section class="sheet candpage"><div class="gk">${k}</div><h1>${title}</h1><div class="clist">${arr.map((c,i)=>candEntry(c,startIndex+i)).join('')}</div>${foot(n)}</section>`; }

const scholarHtml = allCited.map((s,i)=>scholarPages(s,i)).join('\n');
const candidatePages = [
  candPage('APPENDIX · 1/5', '확장 독서 후보 — 노동·알고리즘', remainingCandidates.slice(0,3), 0),
  candPage('APPENDIX · 2/5', '확장 독서 후보 — AI 권력과 안전', remainingCandidates.slice(3,6), 3),
  candPage('APPENDIX · 3/5', '확장 독서 후보 — AI 안전과 예측 경제', remainingCandidates.slice(6,9), 6),
  candPage('APPENDIX · 4/5', '확장 독서 후보 — 기술혁명과 도시', remainingCandidates.slice(9,11), 9),
  candPage('APPENDIX · 5/5', '확장 독서 후보 — 자유와 역량', remainingCandidates.slice(11), 11),
].join('\n');

const styles = `@page{size:A4;margin:0}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact;margin:0;padding:0}body{font-family:Pretendard,-apple-system,BlinkMacSystemFont,"Noto Sans KR","Apple SD Gothic Neo",sans-serif;color:${INK};word-break:keep-all}.sheet{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;background:${PAPER}}.cover{background:${INK};color:#f5f2ea;padding:24mm 20mm}.cover .frame{position:absolute;inset:9mm;border:.4mm solid rgba(181,138,30,.55)}.cover .frame:after{content:"";position:absolute;inset:1.6mm;border:.15mm solid rgba(181,138,30,.3)}.cv{position:relative;height:100%;display:flex;flex-direction:column;padding:8mm 6mm}.org{font-size:9.2pt;letter-spacing:.34em;color:rgba(245,242,234,.75);font-weight:750}.gold-rule{width:34mm;height:.8mm;background:${G};margin:9mm 0 12mm}.cv h1{font-size:40pt;line-height:1.12;font-weight:850;letter-spacing:-1.1px}.cv h1 em{font-style:normal;color:${G}}.sub{margin-top:9mm;font-size:12.3pt;line-height:1.78;color:rgba(245,242,234,.80);max-width:155mm}.stats{margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:6mm}.stat{border-top:.5mm solid rgba(181,138,30,.65);padding-top:4mm}.stat b{font-size:23pt;font-weight:850;color:${G};display:block}.stat span{font-size:9.4pt;color:rgba(245,242,234,.72);line-height:1.5;display:block;margin-top:1.5mm}.edition{position:absolute;right:6mm;top:7mm;text-align:right;font-size:8.4pt;letter-spacing:.26em;color:rgba(245,242,234,.55);line-height:2}.guide{padding:17mm 19mm 14mm}.gk{font-size:8.8pt;font-weight:850;letter-spacing:.32em;color:${G}}.guide h1,.candpage h1{font-size:23pt;font-weight:850;letter-spacing:-.8px;margin:4mm 0 5mm}.bookp{font-size:11.1pt;line-height:1.88;color:#30343a;margin-bottom:5mm;text-align:justify}.smalltop{margin-top:6mm}.axes{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin:6mm 0}.axis-card{border:.28mm solid #d9d5ca;background:#fff;padding:5mm;position:relative}.axis-card .top{height:1.1mm;position:absolute;left:0;right:0;top:0}.axis-card .no{font-size:8.8pt;font-weight:900;letter-spacing:.18em;margin-bottom:2mm}.axis-card b{font-size:12.3pt;font-weight:850;display:block;margin-bottom:2mm}.axis-card .who{font-size:8.7pt;font-weight:750;color:#30343a;margin-bottom:2mm;line-height:1.45}.axis-card p{font-size:8.9pt;line-height:1.55;color:#5a5f68}.castgrid{display:grid;grid-template-columns:1fr 1fr;gap:4mm 5mm;margin-top:5mm}.cast{background:#fff;border:.25mm solid #ded8ca;padding:3.5mm}.cast span{font-size:8pt;font-weight:900;letter-spacing:.16em}.cast b{font-size:12.2pt;display:block;margin:1mm 0 .5mm}.cast em{font-size:8.5pt;color:#8a8576;font-style:normal}.cast p{font-size:8.7pt;line-height:1.45;color:#555b64;margin-top:1mm}.scholar{padding:15mm 17mm 13mm}.bigno{position:absolute;right:10mm;top:5mm;font-size:58pt;font-weight:950;color:#e9e5d8;letter-spacing:-3px;line-height:1}.shead{display:grid;grid-template-columns:30mm 1fr;gap:6mm;align-items:center;position:relative}.pwrap{width:28mm;height:28mm;position:relative}.pwrap:after{content:"";position:absolute;inset:-1.6mm;border:.35mm solid ${G};border-radius:50%}.photo{width:28mm;height:28mm;border-radius:50%;object-fit:cover;filter:grayscale(100%) contrast(1.04)}.ph{display:flex;align-items:center;justify-content:center;background:#ece8dd;font-size:15pt;font-weight:900;color:#9b9483;border-radius:50%}.axisline{display:flex;align-items:center;gap:2.5mm;margin-bottom:1.6mm}.axchip{color:#fff;font-size:8pt;font-weight:900;letter-spacing:.12em;padding:.8mm 2.4mm;border-radius:.8mm}.axname{font-size:9.4pt;font-weight:800;letter-spacing:.14em;color:#6a6f78}.scholar h1{font-size:22pt;font-weight:880;letter-spacing:-.7px;line-height:1.05}.en{font-size:10pt;color:#8a8576;font-weight:650;letter-spacing:.05em;margin:1mm 0 1.6mm}.meta{font-size:9.2pt;color:#30343a;font-weight:600;line-height:1.5}.rule{height:.5mm;background:#e2ddd0;margin:5mm 0 5.4mm;position:relative}.rule span{position:absolute;left:0;top:0;bottom:0;width:34mm}.pblock{margin-bottom:4mm}.plab{font-size:8.4pt;font-weight:900;letter-spacing:.22em;margin-bottom:1.7mm}.pblock p{font-size:9.85pt;line-height:1.72;color:#2c3038;text-align:justify}.contpage{padding-top:13mm}.conthead{display:flex;justify-content:space-between;align-items:baseline;border-bottom:.5mm solid ${INK};padding-bottom:2.6mm;margin-bottom:5.3mm}.contname{font-size:13pt;font-weight:880}.contname em{font-style:normal;font-size:9.5pt;color:#8a8576;font-weight:650;margin-left:2mm}.contax{font-size:8.8pt;font-weight:900;letter-spacing:.18em}.glossary{margin-top:4mm;background:#fff;border:.28mm solid #ddd8cb;padding:4.2mm 4.8mm}.glab{font-size:8.3pt;font-weight:900;letter-spacing:.2em;margin-bottom:2.8mm}.ggrid{display:grid;grid-template-columns:1fr 1fr;gap:2.8mm 5mm}.gitem b{font-size:9.5pt;font-weight:850;display:block;margin-bottom:.6mm}.gitem p{font-size:8.8pt;line-height:1.46;color:#494e57}.sumgrid{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:1mm}.sumcol h2{font-size:9.3pt;font-weight:900;letter-spacing:.2em;margin-bottom:2.5mm;padding-bottom:1.6mm;border-bottom:.45mm solid}.concept{margin-bottom:2.6mm}.concept b{font-size:9.5pt;font-weight:850;display:block;margin-bottom:.6mm}.concept p{font-size:8.75pt;line-height:1.45;color:#494e57}.reading{margin-bottom:2.4mm;padding-left:2.5mm;border-left:.5mm solid ${G}}.reading b{font-size:9.2pt;font-weight:800;display:block;margin-bottom:.5mm}.reading p{font-size:8.7pt;line-height:1.42;color:#494e57}.deb{margin-bottom:1.8mm}.deb p{font-size:8.8pt;line-height:1.42;color:#494e57;padding-left:3.2mm;position:relative}.deb p:before{content:"—";position:absolute;left:0;color:${G};font-weight:900}.askband{margin-top:3.8mm;background:${INK};padding:4.8mm 6mm;display:grid;grid-template-columns:21mm 1fr;gap:5mm;align-items:center;border-left:1.4mm solid}.asklab{font-size:8.2pt;font-weight:900;letter-spacing:.22em}.askq{color:#f5f2ea;font-size:11pt;line-height:1.45;font-weight:750}.pfoot{position:absolute;left:17mm;right:17mm;bottom:7mm;display:flex;justify-content:space-between;font-size:7.2pt;letter-spacing:.18em;color:#a59f8e;font-weight:700;border-top:.22mm solid #e0dbce;padding-top:2.1mm}.candpage{padding:16mm 19mm 14mm}.centry{margin-bottom:5mm;padding-bottom:4.5mm;border-bottom:.2mm solid #e2ddd0}.centry:last-child{border-bottom:none}.chead{display:flex;align-items:baseline;gap:2.4mm;margin-bottom:1.5mm}.cno{font-size:10pt;font-weight:950;color:${G}}.chead h3{font-size:12.4pt;font-weight:850}.cen{font-size:8.7pt;color:#8a8576;font-weight:650}.cpl{font-size:8.7pt;color:#5a5f68;font-weight:700;margin-left:auto}.centry p{font-size:10.1pt;line-height:1.72;color:#33373f;text-align:justify}.cuse{margin-top:1.5mm;font-size:8.5pt;font-weight:850;color:#8a8576}.cuse:before{content:"▸ 마스터플랜 활용 — ";color:${G}}`;

const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8"/><style>${styles}</style></head><body>${frontPages()}${scholarHtml}${candidatePages}</body></html>`;
fs.writeFileSync(outHtml, html);
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto('file://' + outHtml, { waitUntil: 'networkidle0' });
await page.pdf({ path: outPdf, width: '210mm', height: '297mm', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log('PDF written:', outPdf);
console.log('HTML written:', outHtml);
console.log('Pages planned:', 6 + allCited.length * 3 + 5);
console.log('Scholars:', allCited.map(s => s.ko).join(', '));
