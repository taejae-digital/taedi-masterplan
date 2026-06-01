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
  {
    area: "세계 경영",
    goal: "미·중이 거부하기 어려운 공동검증 딜을 제안한다.",
    bullets: [
      "AI 안전: 양국 연구기관·기업이 함께 검증하고 결과를 공개",
      "데이터: 주권은 인정하되 보건·기후·재난·교육 데이터는 안전하게 이동",
      "공급망: 반도체·배터리·소재·에너지·바이오·문화 플랫폼을 단절보다 상호 검증과 책임 규칙으로 관리",
      "한국의 역할: 산업 현장, 도시 실험장, 규칙 설계 역량을 함께 제공",
    ],
    effect: "미션이 달성되면 대립을 키우는 권력은 소멸하고, 미·중 갈등은 공동검증과 상호책임의 규칙 안에서 소거된다.",
  },
  {
    area: "국가 경영",
    goal: "미·중 모두가 필요로 하는 협력 구조를 한반도가 설계한다.",
    bullets: [
      "15대 산업의 의미: 삶의 전 영역을 덮는 산업 세트라서 도시·가정·교육·보건·문화·인프라를 한 전략으로 묶을 수 있음",
      "하이레벨 산업군: ① 도시·주거·국토 ② 디지털공공재·금융·미디어 ③ 로봇·드론·위성 ④ 바이오·건강관광 ⑤ 에너지 ⑥ 디자인·콘텐츠 ⑦ 미래교육",
      "미국에 주는 가치: 신뢰 가능한 첨단 제조·AI 인프라·문화·교육 파트너",
      "중국에 주는 가치: 공급망 단절을 막는 제조·소재·보건·관광 협력 창구",
      "왜 7대분야 초일류인가: 싱크탱크·대학·기업·미디어·정부·정당·군대가 일류가 아니면 산업은 사업 목록에 그치고, 세계가 따를 규칙·신뢰·실행 권한을 만들 수 없음",
    ],
    effect: "산업은 협상 카드를 만들고, 7대분야는 규칙과 신뢰를 만들며, 선출직 인재는 법·예산·외교로 실행해 한반도의 발언권과 파워를 현재보다 훨씬 크게 만든다.",
  },
  {
    area: "도시 경영",
    goal: "도시를 정체성 실현과 미래산업 실험의 현장으로 바꾼다.",
    bullets: [
      "대학·기업·연구기관·공공조달·시민참여를 시산학 생태계로 묶음",
      "도시별 산업학교, 생활 데이터, 돌봄 모델, 시민 참여 플랫폼 운영",
      "개인의 성장 경로와 지역 산업 일감을 연결",
    ],
    effect: "강소도시가 새 사회계약을 생활·학습·일·돌봄으로 검증한다.",
  },
  {
    area: "가정 경영",
    goal: "강화된 개인이 태어나는 최소 생활권을 설계한다.",
    bullets: [
      "가족 AI 코치와 개인 성장 기록으로 정체성 발견을 지원",
      "맞춤 학습, 건강·돌봄 경보, 관계 피드백을 생활 속 권리로 구현",
      "설명·거부·조정 UI로 AI 개인화권을 보장",
    ],
    effect: "가정은 기기 자동화가 아니라 판단 주도성과 성장 기록의 기반이다.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 3 }}>
      {items.map((item) => (
        <li key={item} style={{ margin: 0, paddingLeft: 1 }}>{item}</li>
      ))}
    </ul>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "14px 36px 10px", borderBottom: `3px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 19.5, color: C.navy, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.4 }}>
          태재의 비전은 미래사회를 선견하고 선점하는 데서 출발한다.
        </div>
        <div style={{ marginTop: 8, fontSize: 13.8, color: "#333", lineHeight: 1.34, fontWeight: 560 }}>
          미·중 갈등, 한국의 제한된 위치, 도시의 비효율성, 산업화적 몰개인화가 새 사회계약의 실현을 막는다. 이 한계를 넘는 경영전략이 한반도의 성장동력과 국제 리더십을 만든다.
        </div>
      </div>

      <div style={{ padding: "0 36px 16px", display: "flex", flexDirection: "column", flex: 1, gap: 15 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 어려운 현실의 한계</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 11 }}>
            {limitRows.map(([title, reality, implication], i) => (
              <div key={title} style={{ minHeight: 214, display: "flex", flexDirection: "column", border: `1px solid #d8d2ca`, background: i % 2 ? C.bg : "#fff" }}>
                <div style={{ background: "#f5f1ea", color: C.navy, borderBottom: `1px solid #d8d2ca`, padding: "8px 11px", fontSize: 14.2, fontWeight: 700 }}>{title}</div>
                <div style={{ padding: "10px 11px 6px", fontSize: 12.0, lineHeight: 1.33, color: "#333", fontWeight: 520, flex: 1 }}>{reality}</div>
                <div style={{ padding: "8px 11px 10px", borderTop: "1px solid #e5ddd2", fontSize: 11.8, lineHeight: 1.32, color: C.accent, fontWeight: 700 }}>{implication}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={h3s}>4.2 새로운 사회계약을 위한 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "21%" }} />
              <col style={{ width: "48%" }} />
              <col style={{ width: "20%" }} />
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
              {strategyRows.map((row, i) => (
                <tr key={row.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 12.1 }}>{row.area}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 750 }}>{row.goal}</td>
                  <td style={td}><BulletList items={row.bullets} /></td>
                  <td style={{ ...td, color: C.accent, fontWeight: 830 }}>{row.effect}</td>
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

const th: React.CSSProperties = { padding: "8px 9px", textAlign: "left", fontSize: 11.3, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "8.5px 9px", borderBottom: "1px solid #eee", fontSize: 11.0, lineHeight: 1.28, color: "#333", verticalAlign: "top" };
