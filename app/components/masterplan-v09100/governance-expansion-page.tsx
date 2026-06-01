import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "AI 패권경쟁",
    limit: "미국과 중국은 모두 AI 패권국가다. AI를 산업이 아니라 군사·금융·제조·플랫폼·데이터·표준·동맹질서를 재편하는 핵심 권력으로 본다.",
    strategy: "경쟁 중단을 요구하지 않는다. 안전 사고, 시장 분열, 정당성 위기, 동맹 피로, 국내 불안이라는 패권 비용이 커지는 지점을 잡아 공멸선을 설정한다.",
  },
  {
    title: "한국의 위치",
    limit: "한국의 목표는 약한 조정자가 아니라 규칙을 선점하는 패권국가다. 다만 미국식 빅테크 패권도, 중국식 국가감시 패권도 그대로 따를 수 없다.",
    strategy: "검증 가능한 제3표준을 선점한다. 고위험 AI는 상호 검증하고, AI 인프라는 시민의 능력과 권리로 확장하며, 정책과 권력은 시민에게 설명되고 검증되게 한다.",
  },
  {
    title: "도시의 비효율성",
    limit: "도시는 주거·일자리·교육·돌봄·문화가 분리되어 시민 강화 모델을 실제 생활에서 검증하지 못한다.",
    strategy: "강소도시를 실험장으로 삼아 대학·기업·공공조달·시민참여를 연결한다. 교육·의료·행정·중소기업 생산성에서 시민강화 AI 시장을 먼저 만든다.",
  },
  {
    title: "산업화적 몰개인화",
    limit: "산업시대에는 직업 선택에서 정체성이 최우선 기준이 아니었다. 생계·안정성·학력·시장 수요가 개인의 선택을 이끌었다.",
    strategy: "디지털 인프라 접근권, 정체성 발견, 전문성 훈련, 직접 거버넌스 참여를 하나로 묶어 AI가 시민을 대체하지 않고 시민을 강화하는 사회계약으로 전환한다.",
  },
];

const strategyRows = [
  {
    area: "세계 경영",
    goal: "AI 상호절제·시민강화 협정을 제안한다.",
    bullets: [
      "전제: 미국과 중국은 AI 패권경쟁을 멈추지 않음. 경쟁 중단이 아니라 공멸선 설정이 목표",
      "안전장치: 고위험 AI 상호평가, 군사·생물·사이버 악용 금지선, 공공 AI 감사 로그, 국제 사고 조사 절차",
      "시민강화 시장: 안전한 AI, 설명되는 AI, 행정·교육·의료·산업에 적용 가능한 AI를 공동 인증·공동 시장으로 전환",
      "미국의 이익: 민주주의형 AI 시장, 동맹국 시장 확대, 빅테크 반발 완화, 안전 규범 주도권 확보",
      "중국의 이익: 배제 완화, 글로벌 사우스 신뢰, 제조·로봇·도시 AI 수출 명분, 사회 안정형 AI의 국제 검증",
    ],
    effect: "AI 패권경쟁은 막을 수 없다. 그러나 공멸선은 그을 수 있고, 그 위에 시민을 강화하는 새 사회계약을 얹을 수 있다.",
  },
  {
    area: "국가 경영",
    goal: "한반도를 AI 시민강화 표준의 패권국가로 세운다.",
    bullets: [
      "15대 산업의 의미: 삶의 전 영역을 덮는 산업 세트라서 시민강화 AI를 도시·가정·교육·보건·문화·인프라에 실제 적용 가능",
      "하이레벨 산업군: ① 도시·주거·국토 ② 디지털공공재·금융·미디어 ③ 로봇·드론·위성 ④ 바이오·건강관광 ⑤ 에너지 ⑥ 디자인·콘텐츠 ⑦ 미래교육",
      "미국에 주는 가치: 시민 자유를 강화하는 민주주의형 AI의 실증 시장과 동맹국 확산 경로",
      "중국에 주는 가치: 배제되지 않되 감시 모델을 표준으로 인정받지 않는 사회 안정형 AI의 검증 경로",
      "왜 7대분야 초일류인가: 싱크탱크·대학·기업·미디어·정부·정당·군대가 일류가 아니면 산업은 사업 목록에 그치고, 세계가 따를 규칙·신뢰·실행 권한을 만들 수 없음",
    ],
    effect: "산업은 실증 시장을 만들고, 7대분야는 규칙과 신뢰를 만들며, 선출직 인재는 법·예산·외교로 실행해 한반도의 표준 권력을 키운다.",
  },
  {
    area: "도시 경영",
    goal: "시민강화 AI를 생활권에서 검증한다.",
    bullets: [
      "대학·기업·연구기관·공공조달·시민참여를 시산학 생태계로 묶음",
      "도시별 산업학교, 생활 데이터, 돌봄 모델, 시민 참여 플랫폼 운영",
      "교육·행정·의료·중소기업 생산성에서 시민이 AI로 강화되는 증거 축적",
    ],
    effect: "강소도시가 새 사회계약을 생활·학습·일·돌봄으로 검증한다.",
  },
  {
    area: "가정 경영",
    goal: "강화된 시민이 태어나는 최소 생활권을 설계한다.",
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
          AI 패권경쟁은 막을 수 없다. 한국은 제3표준을 선점해야 한다.
        </div>
        <div style={{ marginTop: 8, fontSize: 13.8, color: "#333", lineHeight: 1.34, fontWeight: 560 }}>
          새 사회계약은 패권경쟁을 부정하지 않는다. 경쟁이 시민과 공동체를 파괴하지 않도록 안전장치를 만들고, AI를 시민의 능력과 권리로 전환하는 공동 시장을 설계한다.
        </div>
      </div>

      <div style={{ padding: "0 36px 16px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 어려운 현실의 한계</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 11 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 246, display: "flex", flexDirection: "column", border: `1px solid #d8d2ca`, background: i % 2 ? C.bg : "#fff" }}>
                <div style={{ background: "#f5f1ea", color: C.navy, borderBottom: `1px solid #d8d2ca`, padding: "8px 11px", fontSize: 14.2, fontWeight: 700 }}>{row.title}</div>
                <div style={{ padding: "9px 11px 6px", fontSize: 11.35, lineHeight: 1.28, color: "#333", fontWeight: 520 }}>
                  <span style={{ color: C.navy, fontWeight: 750 }}>한계</span> — {row.limit}
                </div>
                <div style={{ padding: "8px 11px 10px", borderTop: "1px solid #e5ddd2", fontSize: 11.05, lineHeight: 1.27, color: C.accent, fontWeight: 700, flex: 1 }}>
                  <div style={{ color: C.accent, fontWeight: 850, marginBottom: 3 }}>사회계약 전략</div>
                  {row.strategy}
                </div>
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
const td: React.CSSProperties = { padding: "8.5px 9px", borderBottom: "1px solid #eee", fontSize: 10.85, lineHeight: 1.24, color: "#333", verticalAlign: "top" };
