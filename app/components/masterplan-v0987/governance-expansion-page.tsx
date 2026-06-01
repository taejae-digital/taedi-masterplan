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
    area: "세계 경영",
    first: "AI 안전·데이터 주권·플랫폼 책임을 국제 의제로 묶고, 공동검증할 국가·연구기관·시민 대표를 선별한다.",
    system: "모델 위험평가, 데이터 이동 원칙, 알고리즘 설명 기준, 플랫폼 책임 조항을 하나의 검증 프로토콜로 만든다.",
    operator: "외교관만이 아니라 AI 연구자, 법제 전문가, 시민 위임 대표가 함께 협상단을 구성한다.",
    output: "AI 안전 공동검증 프로토콜, 데이터 주권 원칙 초안, 플랫폼 책임 조항 제안서",
  },
  {
    area: "국가 경영",
    first: "한국의 전략 산업·공공 AI 인프라·데이터 자산을 새 사회계약의 국가 운영 자산으로 재배치한다.",
    system: "15대 한반도 미래산업은 협상력의 물적 기반으로, 7대분야 초일류 역량은 사회 운영 제도 역량으로 분리해 설계한다.",
    operator: "선출직·정책가·기업·대학·싱크탱크가 법·예산·권한 구조를 함께 바꾸는 실행 연합을 만든다.",
    output: "공공 AI 인프라 구축안, 데이터 주권 법제, 디지털 배당 재원 구조, 7대분야 혁신 로드맵",
  },
  {
    area: "도시 경영",
    first: "도시별 산업·대학·생활권 자산을 조사하고, 개인이 정체성을 실험할 수 있는 일·학습·주거·돌봄 경로를 연결한다.",
    system: "도시 구독, 시산학 매칭, 시민 참여 플랫폼, 생활권 돌봄을 하나의 도시 운영체계로 묶는다.",
    operator: "시장·대학·기업·시민조직·돌봄기관이 지역별 정체성 실험을 운영하고 성과를 데이터로 검증한다.",
    output: "강소도시 실험 후보지, 도시별 정체성 경로 지도, 시민 참여 플랫폼 MVP, 생활권 돌봄 모델",
  },
  {
    area: "가정 경영",
    first: "가정의 학습·건강·관계·돌봄 데이터를 개인이 통제하는 방식으로 모으고, AI가 판단을 대체하지 않도록 기준을 세운다.",
    system: "AI 개인화권을 설명권·거부권·조정권·기록권으로 풀어 생활 AI 기준에 반영한다.",
    operator: "교육·돌봄·건강 전문가가 가족 AI 코치를 검증하고, 개인의 판단 주도권을 지키는 사용 규칙을 만든다.",
    output: "가족 AI 코치 원칙, 개인 성장 기록 체계, 돌봄 경보 기준, 생활 AI 설명·거부 UI",
  },
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "9px 32px 6px", borderBottom: `2px solid ${C.navy}`, marginBottom: 7 }}>
        <div style={{ fontSize: 12.8, color: "#222", lineHeight: 1.38, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 선언이 아니라 경영 전략이다.</strong> 디지털 전환이 바꾼 개인·공동체·질서의 문제를 세계·국가·도시·가정의 경영전략으로 옮기고, 각 전략을 하나의 사회계약으로 정렬한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 디지털 전환이 바꾸는 경영의 전제</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {premiseRows.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.45, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "7px 8px", fontSize: 10.55, lineHeight: 1.28, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
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
          <div style={h3s}>4.3 실행 과제 — 무엇을 할 것인가</div>
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
                <th style={th}>당장 할 일</th>
                <th style={th}>설계할 체계</th>
                <th style={th}>움직일 주체</th>
                <th style={th}>1차 산출물</th>
              </tr>
            </thead>
            <tbody>
              {executionRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 10.35 }}>{r.area}</td>
                  <td style={td}>{r.first}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.system}</td>
                  <td style={td}>{r.operator}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 8.85, lineHeight: 1.16 }}>{r.output}</td>
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

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 9.8, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.1, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "4.1px 6px", borderBottom: "1px solid #eee", fontSize: 9.55, lineHeight: 1.2, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "4.6px 7px", borderBottom: "1px solid #eee", fontSize: 9.75, lineHeight: 1.22, color: "#333", verticalAlign: "top" };
