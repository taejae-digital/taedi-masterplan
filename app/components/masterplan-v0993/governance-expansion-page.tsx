import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const premiseRows = [
  ["최종 목표", "디지털 인프라 접근권, 직접 거버넌스 참여권, 정체성 실현권을 세계 시민이 공유할 수 있는 새 사회계약으로 세운다."],
  ["왜 한반도인가", "한반도는 강대국 갈등의 압력을 가장 크게 받는 공간이지만, 동시에 기술·산업·문화·제도 역량을 묶어 새 질서의 실험장이 될 수 있다."],
  ["발언권의 조건", "좋은 주장만으로는 세계 질서를 바꿀 수 없다. 한반도가 미래 산업, 핵심 제도, 선출직 인재를 갖출 때 협력 구조를 제안할 힘이 생긴다."],
  ["전략 명제", "한반도는 미래 산업을 산업 기반으로, 7대 분야를 제도 역량으로, 선출직 인재를 실행 권한으로 묶어 미·중 갈등을 협력 의제로 전환한다."],
];

const managementRows = [
  {
    area: "세계 경영",
    question: "디지털 시대의 새 사회계약을 세계가 받아들일 의제로 만들 수 있는가.",
    role: "세계 시민의 의견을 모으고, AI·데이터·플랫폼·공급망 규칙을 안전하고 건강한 디지털 질서로 제안한다.",
    focus: "미·중 갈등을 이념 대결로만 보지 않고, 양쪽이 함께 풀어야 하는 산업·안전·지속가능성 의제로 바꾼다.",
  },
  {
    area: "국가 경영",
    question: "한국은 갈등의 하위 선택지가 아니라 협력 구조를 제안하는 주체가 될 수 있는가.",
    role: "산업·인프라·인재·외교를 하나의 목표 아래 배치한다. 15대 한반도 미래산업은 사업 목록이 아니라 국가 발언권의 산업 기반이다.",
    focus: "반도체·AI·데이터·배터리·문화·도시·교육·보건 역량을 새 사회계약의 실행 카드로 묶어 협상력을 만든다.",
  },
  {
    area: "도시 경영",
    question: "도시는 산업과 개인의 정체성 발견·훈련·실현을 연결하는 실험장이 될 수 있는가.",
    role: "시산학 생태계가 미래 산업의 일감, 대학의 훈련, 기업의 실증, 시민의 참여를 한 생활권 안에서 연결한다.",
    focus: "도시는 개발사업이 아니라 새 사회계약이 실제 생활·학습·일·돌봄으로 검증되는 운영 단위다.",
  },
  {
    area: "가정 경영",
    question: "개인은 AI와 데이터를 자기 판단과 성장의 도구로 통제할 수 있는가.",
    role: "가정은 강화된 개인이 태어나는 최소 생활권이다. AI는 학습·건강·돌봄·관계 속에서 정체성 발견과 전문성 훈련을 도와야 한다.",
    focus: "기기 자동화가 아니라 개인의 판단 주도성, 설명·거부·조정권, 가족 안의 성장 기록과 돌봄 기준이 핵심이다.",
  },
];

const executionRows = [
  [
    "15대 한반도 미래산업",
    "산업 기반",
    "미래도시 개발+경영·미래주택·디지털공공재·로봇·드론·바이오·디지털미디어·디지털금융·인공위성이용·핵에너지·융합디자인·신가치 엔터테인먼트·건강/관광·미래교육·국토활용",
    "세부 산업을 많이 안다는 것이 핵심이 아니다. 이 산업들이 한반도의 기술·문화·도시·교육·보건 역량을 묶어 세계가 필요로 하는 협력 카드가 되어야 한다.",
  ],
  [
    "7대분야 초일류",
    "제도 역량",
    "싱크탱크·대학·기업·미디어·정부·정당·군대",
    "미래 산업만으로는 새 질서가 되지 않는다. 7대 분야가 산업을 이해하고, 권리체계와 연결하고, 세계·국가·도시·가정의 운영 방식으로 바꿀 때 초일류 역량이 된다.",
  ],
  [
    "선출직 인재",
    "실행 권한",
    "지방정부·국회·정부·정당에서 권한과 예산을 움직이는 인재",
    "정책을 이해한 선출직 인재가 나와야 산업과 제도가 실제 권한 구조로 이동한다. 이들이 장기 국가전략을 선거·법·예산·도시 운영으로 실행한다.",
  ],
];

const sevenFieldRows = [
  ["싱크탱크", "세계 변화와 한반도 미래산업을 읽고 새 사회계약의 국가전략으로 번역", "산업·외교·안보·권리체계를 하나의 협상안으로 묶는 전략 두뇌"],
  ["대학", "직업 교육을 넘어 정체성 발견, 전문성 훈련, 미래산업 프로젝트를 연결", "도시별 산업학교와 평생학습으로 사람을 계속 재훈련"],
  ["기업", "기술과 시장을 새 사회계약형 제품·서비스·공급망으로 구현", "세계가 신뢰할 수 있는 산업 실행력과 테스트베드 제공"],
  ["미디어", "혐오와 진영논리를 넘어 세계 시민의 의견과 한국의 제안을 연결", "문화 영향력과 사회적 신뢰를 새 디지털 질서의 공론장으로 전환"],
  ["정부", "공공 AI, 데이터 주권, 디지털 배당, 규제·조달·인프라를 설계", "부처 사업을 넘어 국가 역량을 한 목표 아래 배치"],
  ["정당", "새 권리를 선거 의제와 입법 과제로 만들고 장기 전략을 책임", "지역 이익과 세계 전략을 연결하는 정치 플랫폼"],
  ["군대", "디지털 인프라·공급망·사이버·우주·재난안전을 보호", "국민이 새 권리를 실제로 행사할 수 있도록 안전 기반을 지키는 전략 조직"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "10px 30px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 6 }}>
        <div style={{ fontSize: 14.2, color: "#222", lineHeight: 1.38, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새 사회계약은 권리 선언만으로 실현되지 않는다.</strong> 한반도가 세계가 필요로 하는 산업 기반, 사회 핵심 제도의 초일류 역량, 정책을 실행할 선출직 인재를 갖출 때 세계 경영·국가 경영·도시 경영·가정 경영의 일관된 전략이 된다.
        </div>
      </div>

      <div style={{ padding: "0 30px 9px", display: "flex", flexDirection: "column", flex: 1, gap: 9 }}>
        <div>
          <div style={h3s}>4.1 한반도가 새 사회계약의 중심이 되어야 하는 이유</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 9 }}>
            {premiseRows.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "6px 8px", fontSize: 12.2, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "8px 8px", fontSize: 10.9, lineHeight: 1.3, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 일관된 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "34%" }} />
              <col style={{ width: "30%" }} />
            </colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>영역</th><th style={th}>핵심 질문</th><th style={th}>경영전략</th><th style={th}>초점</th></tr></thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900 }}>{r.area}</td>
                  <td style={{ ...td, fontWeight: 650 }}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.role}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800 }}>{r.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={{ ...h3s, marginBottom: 2 }}>4.3 국가경영 전략의 세 축 — 산업 기반, 제도 역량, 실행 권한</div>
          <div style={{ fontSize: 11.3, color: "#444", lineHeight: 1.28, marginBottom: 6, fontWeight: 650 }}>한반도가 세계의 지속가능성 문제와 미·중 갈등을 협력 의제로 바꾸려면 산업만으로는 부족하다. 미래산업은 기반이고, 7대 분야는 운영 역량이며, 선출직 인재는 권한 구조를 움직이는 실행 조건이다.</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: 3 }}>
            <colgroup><col style={{ width: "14%" }} /><col style={{ width: "10%" }} /><col style={{ width: "38%" }} /><col style={{ width: "38%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>축</th><th style={th}>역할</th><th style={th}>내용</th><th style={th}>전략 의미</th></tr></thead>
            <tbody>
              {executionRows.map(([axis, role, content, meaning], i) => (
                <tr key={axis} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 900 }}>{axis}</td>
                  <td style={{ ...tdTiny, color: C.accent, fontWeight: 900 }}>{role}</td>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 650 }}>{content}</td>
                  <td style={tdTiny}>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={{ ...h3s, marginBottom: 2 }}>4.4 7대분야 초일류의 방향 — 새 권리체계를 실행하는 사회 핵심 제도</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "12%" }} /><col style={{ width: "43%" }} /><col style={{ width: "45%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>7대분야</th><th style={th}>디지털시대 전환 방향</th><th style={th}>새 사회계약에서의 역할</th></tr></thead>
            <tbody>
              {sevenFieldRows.map(([field, direction, role], i) => (
                <tr key={field} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 900 }}>{field}</td>
                  <td style={tdTiny}>{direction}</td>
                  <td style={{ ...tdTiny, color: C.accent, fontWeight: 800 }}>{role}</td>
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

const th: React.CSSProperties = { padding: "5.2px 6px", textAlign: "left", fontSize: 10.15, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "5.8px 6px", borderBottom: "1px solid #eee", fontSize: 10.05, lineHeight: 1.28, color: "#333", verticalAlign: "top" };
const tdTiny: React.CSSProperties = { padding: "4.7px 5.5px", borderBottom: "1px solid #eee", fontSize: 9.25, lineHeight: 1.22, color: "#333", verticalAlign: "top" };
