import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "국제 질서",
    condition: "AI 경쟁이 시민 권리를 파괴하지 않도록 국제 공동 검증 규칙이 필요하다.",
    rights: "디지털 인프라 접근권과 직접 거버넌스 참여권을 국제 검증·인증 기준에 올린다.",
    strategy: "한국은 경쟁 중단 요구가 아니라 공공 AI 감사, 사고 조사, 악용 금지선을 제안한다.",
  },
  {
    title: "국가 전략",
    condition: "세 권리는 복지·교육·참여 사업이 아니라 국가 운영체계로 묶여야 한다.",
    rights: "디지털 인프라 접근권, 직접 거버넌스 참여권, 정체성 실현권을 법·예산·외교의 기준으로 세운다.",
    strategy: "15대 산업, 7대 분야 초일류, 선출직 인재를 하나의 사회계약 실행 체계로 결합한다.",
  },
  {
    title: "산업 기반",
    condition: "권리는 생활·산업·공공서비스에서 실제 성과로 증명될 때 작동한다.",
    rights: "디지털 인프라 접근권이 일·학습·돌봄·행정과 연결되어 정체성 실현권으로 이어져야 한다.",
    strategy: "15대 산업을 시민강화 AI 운영 모델의 실증 기반으로 배치한다.",
  },
  {
    title: "제도 운영",
    condition: "실증 모델은 법·예산·감사·행정 권한으로 들어와야 사회계약이 된다.",
    rights: "직접 거버넌스 참여권은 정책 설계·예산 배분·감사 절차 안에서 작동해야 한다.",
    strategy: "싱크탱크·대학·기업·미디어·정부·정당·군대가 사회계약의 운영 기관이 된다.",
  },
];

const strategyRows = [
  {
    area: "세계 경영",
    goal: "AI와 플랫폼이 사회를 재편할 때 시민의 권리와 국가 운영이 무너지지 않도록 공동 검증 질서를 만든다.",
    bullets: [
      "출발점: 미국과 중국은 AI 경쟁을 멈추지 않는다. 한국의 역할은 경쟁 중단 요구가 아니라 교육·의료·행정·노동·정치 참여가 AI로 재편될 때 시민 권리가 무너지지 않게 하는 공동 검증 질서 제안",
      "1차 의제: 고위험 AI 사전검증, 공공 AI 감사 로그, 국제 사고 조사 절차, 군사·생물·사이버 악용 금지선",
      "거래 구조: 미국에는 신뢰 가능한 민주주의형 AI 시장을, 중국에는 배제 완화와 사회 안정형 AI 검증 참여 통로를 제공",
      "현실 경로: 의약품 FDA처럼 단계별 심사·실증·사후감시를 두고, 먼저 행정·교육·의료·산업 적용 AI에서 공동 인증 시장을 만든다",
      "확장 의제: AI 안전 검증을 데이터 주권, 플랫폼 책임, 디지털 사회계약의 국제 운영 원칙과 연결",
    ],
    effect: "세계 경영은 AI 패권경쟁을 시민 권리와 사회 안정의 공동 검증 질서로 묶는 거래 구조가 된다.",
  },
  {
    area: "국가 경영",
    goal: "산업 강점을 새 사회계약의 거래 조건으로 바꾼다.",
    bullets: [
      
      "핵심 질문: 이 산업이 어떤 문제를 풀어주기 때문에 상대가 한국과 거래해야 하는가",
      "15대 산업: 미래도시·미래주택·디지털공공재 / 로봇·드론·바이오·디지털미디어·디지털금융·인공위성·핵에너지 / 융합디자인·신가치 엔터테인먼트·건강·관광·미래교육·국토활용을 협상 카드로 재배치",
      "7대 분야: 싱크탱크·대학·기업·미디어·정부·정당·군대가 산업 실증을 규칙·신뢰·서사·권한으로 전환",
      "선출직 인재: AI 인프라 접근권, 데이터 주권, 디지털 배당, 시민 직접 위임 거버넌스를 법·예산·외교로 실행",
      "공급망 안정: 반도체·배터리·로봇·드론·핵에너지·인공위성은 AI 시대 연산·전력·제조·안보의 병목을 줄인다",
      "생활 실증: 미래도시·미래주택·디지털공공재·바이오·건강·미래교육은 시민강화 사회계약이 실제 생활에서 작동하는지 검증한다",
      "신뢰와 확산: 디지털미디어·디지털금융·융합디자인·엔터테인먼트·관광은 한국식 운영 모델을 사람들이 이해하고 따라오게 만든다",
      "협상 구조: 한국은 산업 접근과 실증 시장을 제공하되, 그 조건으로 데이터 주권·AI 검증·시민강화 원칙을 붙인다",
    ],
    effect: "국가 경영은 산업 육성이 아니라 사회계약을 거래 조건으로 만드는 일이다.",
  },
  {
    area: "도시 경영",
    goal: "시민강화가 숫자로 보이는 생활 실험장을 만든다.",
    bullets: [
      "강소도시를 시민강화 AI 실험장으로 설계",
      "대학·기업·연구기관·공공조달·시민참여를 시산학 생태계로 연결",
      "도시별 산업학교, 생활 데이터, 돌봄 모델, 시민 참여 플랫폼 운영",
      "교육·행정·의료·중소기업 생산성에서 시민이 AI로 강화되는 증거 축적",
    ],
    effect: "도시는 사회계약이 실제 성과를 냈는지 보여주는 증거 생산지가 된다.",
  },
  {
    area: "가정 경영",
    goal: "강화된 시민이 태어나는 최소 생활권을 설계한다.",
    bullets: [
      "가정은 기기 자동화가 아니라 정체성 발견·전문성 훈련·판단 주도성의 기반",
      "가족 AI 코치와 개인 성장 기록으로 학습·건강·돌봄·관계 피드백 지원",
      "설명·거부·조정 UI로 AI 개인화권 보장",
      "아이·청년·중년·노년이 각자의 필요에 맞게 AI를 능력과 권리로 사용하는 생활 표준 수립",
    ],
    effect: "가정은 사회계약이 개인의 성장과 돌봄으로 검증되는 최소 단위다.",
  },
];

function BulletList({ items, fontSize = 9.55 }: { items: string[]; fontSize?: number }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2.2 }}>
      {items.map((item) => (
        <li key={item} style={{ margin: 0, paddingLeft: 1, fontSize, lineHeight: 1.2 }}>{item}</li>
      ))}
    </ul>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "11px 36px 7px", borderBottom: `3px solid ${C.navy}`, marginBottom: 6 }}>
        <div style={{ fontSize: 18.8, color: C.navy, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.4 }}>
          한국은 AI 시대의 상호의존을 설계하는 중심 국가가 되어야 한다.
        </div>
        <div style={{ marginTop: 5, fontSize: 13.15, color: "#333", lineHeight: 1.28, fontWeight: 560 }}>
          한국이 할 일은 새로운 패권 이름을 만드는 것이 아니다. 15대 산업을 물적 기반으로, 7대 분야 초일류를 제도 권력으로, 선출직 인재를 실행 권한으로 묶어 세계·국가·도시·가정에서 새 사회계약이 작동하는 거래 조건을 만드는 일이다.
        </div>
      </div>

      <div style={{ padding: "0 36px 9px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약의 작동 조건</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 236, display: "flex", flexDirection: "column", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderBottom: `1px solid #d7d0c7`, padding: "7px 9px" }}>
                  <div style={{ color: C.navy, fontSize: 13.2, fontWeight: 760, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "8px 10px 8px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                  <div>
                    <div style={{ fontSize: 8.7, color: C.accent, fontWeight: 850, letterSpacing: 1.2, marginBottom: 2 }}>작동 조건</div>
                    <div style={{ fontSize: 11.6, lineHeight: 1.26, color: C.navy, fontWeight: 720, letterSpacing: -0.28 }}>{row.condition}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 8.7, color: C.accent, fontWeight: 850, letterSpacing: 1.2, marginBottom: 2 }}>권리 연결</div>
                    <div style={{ fontSize: 10.85, lineHeight: 1.28, color: "#333", fontWeight: 560, letterSpacing: -0.24 }}>{row.rights}</div>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 6, borderTop: "2px solid #d9b46f" }}>
                    <div style={{ fontSize: 8.7, color: "#8a5f12", fontWeight: 850, letterSpacing: 1.2, marginBottom: 2 }}>사회계약 전략</div>
                    <div style={{ fontSize: 10.8, lineHeight: 1.28, color: "#2f2f2f", fontWeight: 650, letterSpacing: -0.24 }}>{row.strategy}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={h3s}>4.2 디지털 시대 사회계약 정립 후의 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "19%" }} />
              <col style={{ width: "53%" }} />
              <col style={{ width: "18%" }} />
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
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 11.8 }}>{row.area}</td>
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

const th: React.CSSProperties = { padding: "5.3px 8px", textAlign: "left", fontSize: 10.7, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "4.6px 8px", borderBottom: "1px solid #eee", fontSize: 9.35, lineHeight: 1.1, color: "#333", verticalAlign: "top" };
