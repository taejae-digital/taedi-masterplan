import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const logicRows = [
  [
    "왜 한반도인가",
    "강대국 갈등의 압력을 가장 크게 받는 공간이면서, 기술·산업·문화·제도 역량을 한 방향으로 묶을 수 있는 실험장이다.",
  ],
  [
    "무엇을 해야 하나",
    "새 사회계약을 권리 선언에 머물게 하지 않고, 세계·국가·도시·가정이 같은 방향으로 움직이는 경영전략으로 바꾼다.",
  ],
  [
    "어떻게 발언권을 얻나",
    "세계가 필요로 하는 미래 산업, 이를 운영할 7대 핵심 제도, 정책을 실행할 선출직 인재를 함께 만든다.",
  ],
  [
    "무엇이 달라지나",
    "한반도는 미·중 갈등의 피해자가 아니라 협력 의제를 제안하고, 세계 시민의 의견을 모아 안전하고 건강한 디지털 질서를 여는 주체가 된다.",
  ],
];

const strategyRows = [
  [
    "세계 경영",
    "AI·데이터·플랫폼·공급망 규칙을 세계 시민의 권리와 연결한다.",
    "미·중 갈등을 산업·안전·지속가능성의 공동 의제로 전환한다.",
  ],
  [
    "국가 경영",
    "한반도의 산업·인프라·인재·외교를 하나의 목표 아래 배치한다.",
    "15대 미래산업은 사업 목록이 아니라 국가 발언권의 산업 기반이다.",
  ],
  [
    "도시 경영",
    "도시는 정체성 발견·훈련·실현이 산업 일감과 만나는 생활 실험장이다.",
    "시산학 생태계가 대학·기업·시민참여·공공조달을 연결한다.",
  ],
  [
    "가정 경영",
    "가정은 강화된 개인이 태어나는 최소 생활권이다.",
    "AI는 학습·건강·돌봄·관계 속에서 판단 주도성과 정체성 발견을 도와야 한다.",
  ],
];

const axisRows = [
  [
    "산업 기반",
    "15대 한반도 미래산업",
    "세계가 필요로 하는 기술·문화·도시·교육·보건 협력 카드",
  ],
  [
    "제도 역량",
    "싱크탱크·대학·기업·미디어·정부·정당·군대",
    "새 권리체계를 이해하고 산업·도시·국가 운영으로 바꾸는 초일류 사회 핵심 제도",
  ],
  [
    "실행 권한",
    "선출직 인재",
    "장기 전략을 선거·법·예산·도시 운영으로 실현하는 정치적 실행력",
  ],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "22px 36px 18px", borderBottom: `3px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 22, color: C.navy, lineHeight: 1.32, fontWeight: 900, letterSpacing: -0.4 }}>
          새 사회계약은 선언이 아니라 실행 질서다.
        </div>
        <div style={{ marginTop: 8, fontSize: 15.5, color: "#333", lineHeight: 1.45, fontWeight: 650 }}>
          한반도가 중심이 되려면 산업 기반, 사회 핵심 제도, 선출직 인재가 하나의 방향으로 움직여야 한다. 그때 한국은 미·중 갈등을 협력 의제로 바꾸고, 세계 시민이 참여하는 안전하고 건강한 디지털 질서를 제안할 수 있다.
        </div>
      </div>

      <div style={{ padding: "0 36px 16px", display: "flex", flexDirection: "column", flex: 1, gap: 18 }}>
        <div>
          <div style={h3s}>4.1 핵심 논리</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {logicRows.map(([k, v], i) => (
              <div key={k} style={{ border: `2px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "8px 10px", fontSize: 13.5, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "11px 10px", fontSize: 12.2, lineHeight: 1.42, color: "#333", fontWeight: i === 3 ? 750 : 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 한 방향</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "14%" }} /><col style={{ width: "43%" }} /><col style={{ width: "43%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>영역</th><th style={th}>경영전략</th><th style={th}>핵심 초점</th></tr></thead>
            <tbody>
              {strategyRows.map(([area, strategy, focus], i) => (
                <tr key={area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900 }}>{area}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 700 }}>{strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800 }}>{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={h3s}>4.3 실행의 세 축</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "17%" }} /><col style={{ width: "31%" }} /><col style={{ width: "52%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>축</th><th style={th}>핵심 자산</th><th style={th}>왜 필요한가</th></tr></thead>
            <tbody>
              {axisRows.map(([axis, asset, reason], i) => (
                <tr key={axis} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdLarge, color: C.accent, fontWeight: 900 }}>{axis}</td>
                  <td style={{ ...tdLarge, color: C.navy, fontWeight: 900 }}>{asset}</td>
                  <td style={tdLarge}>{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ border: `2.5px solid ${C.navy}`, borderLeft: `9px solid ${C.accent}`, background: "#fff", padding: "16px 20px" }}>
          <div style={{ fontSize: 15.5, color: C.accent, fontWeight: 900, marginBottom: 6 }}>P4의 결론</div>
          <div style={{ fontSize: 17.2, lineHeight: 1.48, fontWeight: 800, color: "#222" }}>
            미래산업이 협상력을 만들고, 7대분야 초일류가 운영 역량을 만들며, 선출직 인재가 실행 권한을 만든다. 이 세 축이 맞물릴 때 새 사회계약은 세계·국가·도시·가정의 실제 경영전략이 된다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "8px 10px", textAlign: "left", fontSize: 11.5, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "9px 10px", borderBottom: "1px solid #eee", fontSize: 11.2, lineHeight: 1.34, color: "#333", verticalAlign: "top" };
const tdLarge: React.CSSProperties = { padding: "12px 11px", borderBottom: "1px solid #eee", fontSize: 13.1, lineHeight: 1.38, color: "#333", verticalAlign: "top" };
