import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  [
    "세계 정세",
    "미·중 갈등은 AI·반도체·데이터·플랫폼·공급망 규칙을 둘러싼 질서 경쟁으로 굳어지고 있다.",
    "태재는 편을 고르는 전략이 아니라 미래사회가 요구하는 협력 의제를 선견·선점해야 한다.",
  ],
  [
    "한국의 위치",
    "한반도는 규모만으로 세계 규칙을 주도하기 어렵지만, 기술·문화·산업·제도 역량을 묶을 수 있는 압축된 실험장이다.",
    "성장동력과 국제 리더십은 산업 기반, 7대 핵심 제도, 실행 인재가 하나의 전략으로 결합할 때 생긴다.",
  ],
  [
    "도시의 비효율성",
    "도시는 주거·일자리·교육·돌봄·문화가 분리된 채 운영되어 개인의 성장 경로와 산업 생태계를 연결하지 못한다.",
    "미래사회 선점은 도시를 정체성 발견·훈련·실현과 미래산업 실험이 만나는 생활 운영체계로 바꾸는 데서 시작된다.",
  ],
  [
    "산업화적 몰개인화",
    "산업시대에는 직업 선택에서 정체성이 최우선 기준이 아니었다. 생계·안정성·학력·시장 수요가 개인의 선택을 이끌었다.",
    "디지털 전환은 지식을 쌍방향·맞춤형으로 소통하게 하며, 개인이 자신의 정체성을 발견하고 실현할 조건을 요구한다.",
  ],
];

const strategyRows = [
  [
    "세계 경영",
    "새 사회계약을 세계 규칙의 의제로 만든다.",
    "AI 안전 공동검증, 데이터 이동 원칙, 플랫폼 책임 기준, 공급망 신뢰 규칙을 제안하고 미국·중국·유럽·동아시아가 함께 검증할 장을 만든다.",
    "미·중 갈등을 산업·안전·지속가능성의 공동 의제로 전환한다.",
  ],
  [
    "국가 경영",
    "한국이 협력 구조를 제안하는 주체가 되게 한다.",
    "15대 한반도 미래산업을 전략 산업 기반으로 배치하고, 공공 AI 인프라·데이터 주권·디지털 배당·7대분야 초일류·선출직 인재를 법·예산·외교와 연결한다.",
    "산업 기반·제도 역량·실행 권한을 묶어 국가 발언권을 만든다.",
  ],
  [
    "도시 경영",
    "도시를 정체성 실현과 미래산업 실험의 현장으로 바꾼다.",
    "대학·기업·연구기관·공공조달·시민참여를 시산학 생태계로 묶고, 도시별 산업학교·생활 데이터·돌봄 모델·시민 참여 플랫폼을 운영한다.",
    "강소도시가 새 사회계약을 생활·학습·일·돌봄으로 검증한다.",
  ],
  [
    "가정 경영",
    "강화된 개인이 태어나는 최소 생활권을 설계한다.",
    "가족 AI 코치, 개인 성장 기록, 맞춤 학습, 건강·돌봄 경보, 설명·거부·조정 UI를 통해 AI 개인화권을 생활 속 권리로 구현한다.",
    "가정은 기기 자동화가 아니라 판단 주도성과 성장 기록의 기반이다.",
  ],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "18px 36px 14px", borderBottom: `3px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 21, color: C.navy, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.4 }}>
          태재의 비전은 미래사회를 선견하고 선점하는 데서 출발한다.
        </div>
        <div style={{ marginTop: 8, fontSize: 15.3, color: "#333", lineHeight: 1.42, fontWeight: 560 }}>
          미·중 갈등, 한국의 제한된 위치, 도시의 비효율성, 산업화적 몰개인화가 새 사회계약의 실현을 막는다. 이 한계를 넘는 경영전략이 한반도의 성장동력과 국제 리더십을 만든다.
        </div>
      </div>

      <div style={{ padding: "0 36px 16px", display: "flex", flexDirection: "column", flex: 1, gap: 26 }}>
        <section style={{ flex: 1 }}>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 어려운 현실의 한계</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 11 }}>
            {limitRows.map(([title, reality, implication], i) => (
              <div key={title} style={{ minHeight: 265, display: "flex", flexDirection: "column", border: `1px solid #d8d2ca`, background: i % 2 ? C.bg : "#fff" }}>
                <div style={{ background: "#f5f1ea", color: C.navy, borderBottom: `1px solid #d8d2ca`, padding: "12px 14px", fontSize: 16, fontWeight: 750 }}>{title}</div>
                <div style={{ padding: "18px 14px 10px", fontSize: 14.0, lineHeight: 1.48, color: "#333", fontWeight: 520, flex: 1 }}>{reality}</div>
                <div style={{ padding: "14px 14px 16px", borderTop: "1px solid #e5ddd2", fontSize: 13.8, lineHeight: 1.45, color: C.accent, fontWeight: 700 }}>{implication}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ flex: 1 }}>
          <div style={h3s}>4.2 새로운 사회계약을 위한 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "41%" }} />
              <col style={{ width: "23%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>영역</th>
                <th style={th}>목표</th>
                <th style={th}>경영전략</th>
                <th style={th}>핵심 효과</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map(([area, goal, strategy, effect], i) => (
                <tr key={area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 13.8 }}>{area}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 750 }}>{goal}</td>
                  <td style={td}>{strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 850 }}>{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "12px 12px", textAlign: "left", fontSize: 12.8, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "17px 12px", borderBottom: "1px solid #eee", fontSize: 12.8, lineHeight: 1.48, color: "#333", verticalAlign: "top" };
