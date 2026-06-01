import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const premiseRows = [
  ["기술 변화", "AI가 인지노동을 대체하고, 데이터와 알고리즘이 판단·매칭·생산의 기본 인프라가 된다."],
  ["개인 변화", "산업시대에는 직업 선택에서 정체성이 최우선 기준이 아니었다. 생계·안정성·학력·시장 수요가 선택을 이끌었다."],
  ["전환 과제", "디지털시대에는 가정·도시·국가·세계가 개인의 정체성을 발견하고 훈련하고 실현할 수 있는 환경을 조성해야 한다."],
  ["질서 변화", "새 사회계약은 정체성 실현을 개인의 문제가 아니라 가정·도시·국가·세계의 운영 원리로 확장한다."],
];

const managementRows = [
  {
    area: "세계 경영",
    question: "디지털 시대의 새 권리를 세계 규범으로 만들 수 있는가.",
    connection: "시민 직접 위임 거버넌스를 국가 밖의 플랫폼·AI 규칙까지 확장한다.",
    strategy: "AI 안전, 데이터 주권, 알고리즘 검증, 시민 위임 구조를 연결해 새 사회계약의 국제 언어를 만든다.",
    solution: "국제 연구 네트워크, AI 안전 공동검증, 데이터·플랫폼 규칙 제안",
  },
  {
    area: "국가 경영",
    question: "국가는 개인의 정체성 실현을 가능하게 하는 운영체계가 될 수 있는가.",
    connection: "정체성 실현권과 AI 인프라 평등 접근권을 교육·산업·복지·정치의 기준으로 둔다.",
    strategy: "산업 기반, 공공 AI 인프라, 데이터 주권, 디지털 배당, 새 권리 법제화를 하나의 국가 운영 체계로 묶는다.",
    solution: "15대 한반도 미래산업, 7대분야 초일류 역량, 선출직 인재 양성",
  },
  {
    area: "도시 경영",
    question: "도시는 정체성 발견·훈련·실현이 일어나는 생활 단위가 될 수 있는가.",
    connection: "정체성 실현권을 일·학습·주거·문화·돌봄이 연결된 생활권에서 검증한다.",
    strategy: "시산학 매칭 생태계와 강소도시 네트워크를 통해 개인이 자기 경로를 실험하고 기여하게 한다.",
    solution: "도시 구독, 시민 참여 플랫폼, 도시별 정체성 실험, 생활권 기반 돌봄",
  },
  {
    area: "가정 경영",
    question: "가정은 개인의 전문성과 정체성 발견, 판단의 주도성을 어떻게 키우는가.",
    connection: "AI 개인화권을 돌봄·학습·건강·관계가 이루어지는 최소 생활 단위에서 구현한다.",
    strategy: "AI가 개인의 관심·강점·학습 이력을 읽고, 전문성 훈련과 정체성 발견을 돕는 생활 환경을 설계한다.",
    solution: "개인 맞춤 학습, 전문성 훈련, 정체성 기록·피드백, 생활 AI 코치",
  },
];

const executionRows = [
  {
    area: "가정·개인",
    principle: "정체성 실현권·AI 개인화권 — 개인이 데이터와 AI를 통제하며 학습·건강·관계·돌봄의 선택권을 갖는다.",
    axes: "도시 산업축의 일감·학습 경로가 개인의 성장 기록으로 연결된다. AI 튜터, 건강 모니터링, 돌봄 로봇, 개인 금융·자산관리, 콘텐츠 창작 도구가 생활 단위 인프라가 된다.",
    fields: "대학=평생학습 모듈, 기업=실전 프로젝트와 직무 전환, 미디어=정체성 탐색 콘텐츠, 정부=개인 데이터 권리, 싱크탱크=미래 직업 지도.",
    action: "개인 성장 기록, 가족 AI 코치, 설명·거부·조정 UI, 도시별 학습·일감 매칭, 건강·돌봄 경보 기준을 만든다.",
  },
  {
    area: "도시 경영",
    principle: "정체성 실현권·직접 거버넌스 참여권 — 도시는 개인이 일·학습·주거·문화·돌봄을 묶어 자기 경로를 실험하는 생활권이다.",
    axes: "서해축 도시=AI·반도체·배터리·디스플레이, 동남축 도시=조선·해양물류·로봇·수소, 동해축 도시=에너지·기후·바이오, 남부축 도시=문화콘텐츠·교육·관광, 북방축 도시=철도·물류·자원 연결.",
    fields: "대학·기업은 도시별 산업학교를 만들고, 정부는 규제·데이터·공공조달을 열며, 미디어는 도시 브랜드를 만들고, 정당은 도시 의제를 정책화한다.",
    action: "강소도시별 산업 테마, 정체성 경로 지도, 도시 구독, 시산학 매칭, 시민참여 MVP, 생활권 돌봄 모델을 설계한다.",
  },
  {
    area: "국가 경영",
    principle: "AI 인프라 접근권·데이터 주권·디지털 배당 — 국가는 산업 배치를 개인 능력 접근권과 국가 협상력으로 연결한다.",
    axes: "서해 AI·첨단제조 벨트, 동남 해양제조·물류 벨트, 동해 에너지·기후·바이오 벨트, 남부 문화·교육·관광 벨트, 북방 대륙연결 벨트로 15대 미래산업을 묶는다.",
    fields: "싱크탱크=산업축 전략, 대학=축별 인재, 기업=공급망 실행, 정부=공공 AI·데이터 법제, 정당=권한 구조, 군대=안보·재난·전략기술 보호.",
    action: "산업군 분류표, 한반도 산업·도시 축 지도, 축별 거점도시, 공공 AI 인프라, 데이터 주권 법제, 디지털 배당 재원 구조를 만든다.",
  },
  {
    area: "세계 경영",
    principle: "직접 거버넌스 참여권 — 세계 질서는 빅테크와 강대국만의 규칙이 아니라 시민이 검증하고 위임·환수할 수 있는 규범이어야 한다.",
    axes: "세계 산업축은 AI·반도체·배터리·에너지·바이오·해양물류·문화 플랫폼의 규칙 경쟁이다. 한반도 축은 제조·연산·문화·규범을 잇는 필수 연결점이 된다.",
    fields: "싱크탱크·대학·미디어는 국제 규범 언어를 만들고, 기업·정부·정당·군대는 공급망·표준·안보·협상력을 제도화한다.",
    action: "AI 안전 공동검증, 데이터 이동 원칙, 플랫폼 책임 조항, 산업축별 국제 협력 네트워크, 전략산업 공급망 협상안을 제안한다.",
  },
];

const industryAxisRows = [
  ["AI·반도체·연산 축", "AI 모델·반도체·데이터센터·전력망 경쟁에서 한반도는 제조·메모리·전력·데이터 운영의 안정 거점이 된다.", "미국에는 신뢰 가능한 첨단 제조·메모리·AI 인프라 파트너, 중국에는 공급망 단절을 막는 제조·소재 협력 창구가 된다.", "서해 AI·첨단제조 벨트: 수도권–충청–새만금–호남. 도시는 AI·반도체 학교, 기업 실습라인, 데이터센터·전력·주거를 묶는다.", "싱크탱크=협상맵, 대학=AI·반도체 인재, 기업=공급망, 정부=전력·데이터 법제"],
  ["배터리·소재·첨단제조 축", "세계 공급망이 소재·부품·장비와 제조 신뢰성을 요구할수록 한반도는 배터리·디스플레이·정밀제조의 대체불가 생산기지가 된다.", "미국에는 전기차·국방·에너지 전환 공급망, 중국에는 소재·부품 상호의존 조정 장치로 작동한다.", "서해–동남 첨단제조 연결축: 충청–전북–울산–창원–포항. 도시는 실험실, 테스트베드, 직무전환 학교를 운영한다.", "기업=제조 실행, 대학=소재 인재, 정부=공공조달, 정당=지역산업 권한 구조"],
  ["해양물류·로봇·수소 축", "세계 교역과 에너지 전환이 항만·선박·물류 자동화를 요구할 때 한반도 동남권은 해양 제조와 스마트항만의 실험장이 된다.", "미국에는 해양안보·조선·에너지 수송 파트너, 중국에는 동북아 물류 안정과 항만 규칙 협상 카드가 된다.", "동남 해양제조·물류 벨트: 부산–울산–창원–거제–포항. 항만도시는 조선·로봇·물류 데이터와 안전 규칙을 공동검증한다.", "군대=해양안보·재난, 기업=항만 자동화, 대학=로봇·해양공학, 정부=항만 규칙"],
  ["에너지·기후·바이오 축", "기후위기와 고령화가 에너지 안정성·건강 데이터·돌봄 산업을 키울 때 한반도는 에너지·바이오·기후 적응의 생활 실험장이 된다.", "미국에는 바이오·기후기술 검증 시장, 중국에는 고령화·보건·탄소감축 협력 의제로 제시한다.", "동해 에너지·기후·바이오 벨트: 강원–동해안–경북 내륙. 도시는 병원·대학·에너지 시설·돌봄기관을 연결한다.", "대학=바이오·기후 연구, 정부=환경 데이터, 미디어=기후 리터러시, 기업=헬스케어"],
  ["문화·교육·관광 플랫폼 축", "세계 문화 플랫폼 경쟁에서 한반도는 콘텐츠·교육·관광·지역 커뮤니티를 묶어 정체성 발견 산업을 수출하는 거점이 된다.", "미국에는 민주주의·창작·교육 플랫폼 파트너, 중국에는 문화 교류와 청년·관광 협력의 완충 의제가 된다.", "남부 문화·교육·관광 벨트와 북방 연결축: 광주–전주–남해안–제주–수도권 북부. 도시는 창작·교육·관광 생활권을 묶는다.", "미디어=콘텐츠 확산, 대학=교육모듈, 기업=플랫폼, 싱크탱크=문화·북방전략"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "7px 30px 5px", borderBottom: `2px solid ${C.navy}`, marginBottom: 7 }}>
        <div style={{ fontSize: 12.2, color: "#222", lineHeight: 1.38, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 선언이 아니라 경영 전략이다.</strong> 디지털 전환이 바꾼 개인·공동체·질서의 문제를 세계·국가·도시·가정의 경영전략으로 옮기고, 각 전략을 하나의 사회계약으로 정렬한다.
        </div>
      </div>

      <div style={{ padding: "0 30px 7px", display: "flex", flexDirection: "column", flex: 1, gap: 5 }}>
        <div>
          <div style={h3s}>4.1 디지털 전환이 바꾸는 경영의 전제</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>
            {premiseRows.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.45, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "6px 7px", fontSize: 10.25, lineHeight: 1.22, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "26%" }} />
              <col style={{ width: "17%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>영역</th>
                <th style={th}>핵심 질문</th>
                <th style={th}>새 사회계약과의 연결</th>
                <th style={th}>경영전략</th>
                <th style={th}>고민할 해결책</th>
              </tr>
            </thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 10.95 }}>{r.area}</td>
                  <td style={{ ...td, fontWeight: 650 }}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.connection}</td>
                  <td style={td}>{r.strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 9.65, lineHeight: 1.22 }}>{r.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={h3s}>4.3 새 사회계약의 산업·도시 실행축</div>
          <div style={{ fontSize: 10.4, color: "#444", lineHeight: 1.25, marginBottom: 3, fontWeight: 650 }}>새 권리는 추상 원칙에 머물지 않는다. 가정의 생활 AI, 도시의 산업 테마, 국가의 한반도 산업축, 세계의 규칙 경쟁 속에서 실행되고, 국제 정세와 미·중 협상에서 한국의 협상력 지렛대가 되어야 한다.</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "27%" }} />
              <col style={{ width: "17%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>영역</th>
                <th style={th}>핵심 원리</th>
                <th style={th}>구체적 산업축</th>
                <th style={th}>7대분야 연결</th>
                <th style={th}>해야 하는 것</th>
              </tr>
            </thead>
            <tbody>
              {executionRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 9.65 }}>{r.area}</td>
                  <td style={td}>{r.principle}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.axes}</td>
                  <td style={td}>{r.fields}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 8.25, lineHeight: 1.1 }}>{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={{ ...h3s, fontSize: 15.2, marginBottom: 2 }}>4.3-1 세계 산업축 → 한반도 역할 → 미·중 협상 지렛대 → 도시 시산학 구현</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "13%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "21%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "22%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>세계 산업축</th>
                <th style={th}>한반도의 역할</th>
                <th style={th}>미·중 협상 지렛대</th>
                <th style={th}>한반도 산업축·도시 구현</th>
                <th style={th}>7대분야 실행</th>
              </tr>
            </thead>
            <tbody>
              {industryAxisRows.map(([axis, role, leverage, koreaCity, fields], i) => (
                <tr key={axis} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 8.45 }}>{axis}</td>
                  <td style={td}>{role}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{leverage}</td>
                  <td style={td}>{koreaCity}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 7.85, lineHeight: 1.04 }}>{fields}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "2.6px 4px", textAlign: "left", fontSize: 8.8, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.1, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "2.6px 4px", borderBottom: "1px solid #eee", fontSize: 7.95, lineHeight: 1.05, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "4.6px 7px", borderBottom: "1px solid #eee", fontSize: 9.75, lineHeight: 1.22, color: "#333", verticalAlign: "top" };
