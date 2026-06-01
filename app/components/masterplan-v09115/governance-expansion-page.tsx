import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "세계 정세",
    problem: "AI 패권경쟁은 새 사회계약을 안보 의제 뒤로 밀어낸다.",
    problemBullets: [
      "디지털 인프라 접근권이 진영별 클라우드·칩·플랫폼 의존으로 갈라진다.",
      "직접 거버넌스 참여권이 시민 참여보다 국가 안보와 기업 통제 논리로 흡수된다.",
      "정체성 실현권은 개인 성장의 권리가 아니라 플랫폼이 관리하는 사용자 경험으로 축소된다.",
    ],
    strategy: "한국은 미·중이 경쟁하면서도 함께 써야 하는 AI 시민강화 검증 규칙을 제안한다.",
    strategyBullets: [
      "미국에는 민주주의형 AI 검증 시장과 신뢰 가능한 산업 실증을 제공한다.",
      "중국에는 배제 완화와 사회 안정형 AI 검증 참여 통로를 제공한다.",
      "그 대가로 데이터 주권·공공 감사 로그·고위험 AI 검증을 공동 운영 규칙으로 묶는다.",
    ],
  },
  {
    title: "한국의 위치",
    problem: "산업 목록만으로는 한국이 세계가 필요로 하는 사회계약 모델이 되지 못한다.",
    problemBullets: [
      "디지털 인프라 접근권이 반도체·배터리·AI 인프라 같은 공급 자산과 연결되지 못한다.",
      "직접 거버넌스 참여권이 법·예산·외교·산업정책의 거래 조건으로 올라서지 못한다.",
      "정체성 실현권이 문화·교육·도시 실증과 분리되면 한국 모델의 설득력이 약해진다.",
    ],
    strategy: "한국은 산업 접근과 도시 실증을 내주고 새 사회계약의 조건을 받아내는 협상 국가가 된다.",
    strategyBullets: [
      "미국에는 신뢰 공급망과 민주주의형 실증 시장을 제공한다.",
      "중국과 신흥국에는 공급망 단절 완화와 고령화·도시 문제 공동 실증 기회를 제공한다.",
      "그 대가로 데이터 주권, AI 검증, 시민강화 원칙을 산업·시장 접근의 조건으로 붙인다.",
    ],
  },
  {
    title: "거대도시의 비효율성",
    problem: "거대도시는 AI가 시민을 실제로 강하게 만들었다는 증거를 만들기 어렵다.",
    problemBullets: [
      "집은 비싸고, 일터는 멀고, 학교·병원·돌봄·행정은 서로 따로 움직인다.",
      "디지털 인프라 접근권이 장비 보급에 머물고 학습·건강·일자리 기록으로 이어지지 않는다.",
      "직접 거버넌스 참여권과 정체성 실현권이 생활권 안에서 함께 검증되지 않는다.",
    ],
    strategy: "강소도시는 생활 데이터를 시민 성장 기록으로 묶는 사회계약의 실증 장치가 된다.",
    strategyBullets: [
      "도시는 기업·대학·연구기관에 생활권 실증 시장과 공공조달을 제공한다.",
      "그 대가로 검증 가능한 AI 서비스, 지역 일자리, 교육·돌봄 성과를 돌려받는다.",
      "시민이 더 배우고, 더 건강해지고, 더 좋은 일을 하게 됐다는 증거를 축적한다.",
    ],
  },
  {
    title: "몰개인화",
    problem: "평균적 개인을 전제로 한 제도는 정체성 실현권을 생활 속 권리로 만들 수 없다.",
    problemBullets: [
      "교육·일·복지·돌봄이 평균 기준으로 설계되어 개인의 강점과 필요를 계속 놓친다.",
      "디지털 인프라 접근권이 개인 성장 도구가 아니라 플랫폼 추천 기능으로 축소된다.",
      "직접 거버넌스 참여권이 없으면 개인은 자신의 데이터와 AI 판단을 조정하지 못한다.",
    ],
    strategy: "가정은 생활 데이터를 내주되 성장 서비스와 데이터 권리를 돌려받는 최소 사회계약 단위가 된다.",
    strategyBullets: [
      "가족 AI 코치와 개인 성장 기록으로 학습·건강·돌봄·관계 데이터를 연결한다.",
      "플랫폼과 공공기관은 데이터를 활용할 수 있지만 설명·거부·조정권을 보장해야 한다.",
      "개인은 데이터 환수권을 갖고 AI를 판단 주체가 아니라 정체성 실현의 도구로 사용한다.",
    ],
  },
];

const strategyRows = [
  {
    area: "세계 경영",
    goal: "패권경쟁을 멈추게 하는 것이 아니라, 경쟁 비용을 줄이는 공동 운영 규칙을 만든다.",
    bullets: [
      "출발점: 미국과 중국은 AI 경쟁을 멈추지 않는다. 한국의 역할은 경쟁 중단 요구가 아니라 사고·불신·시장 분열 비용을 낮추는 규칙 제안",
      "1차 의제: 고위험 AI 사전검증, 공공 AI 감사 로그, 국제 사고 조사 절차, 군사·생물·사이버 악용 금지선",
      "거래 구조: 미국에는 신뢰 가능한 민주주의형 AI 시장을, 중국에는 배제 완화와 사회 안정형 AI 검증 참여 통로를 제공",
      "현실 경로: 의약품 FDA처럼 단계별 심사·실증·사후감시를 두고, 먼저 행정·교육·의료·산업 적용 AI에서 공동 인증 시장을 만든다",
      "확장 의제: AI 안전 검증을 WMD 감축, 사이버 사고 조사, 플랫폼 책임 규칙과 연결",
    ],
    effect: "세계 경영은 구호가 아니라 양쪽 모두 비용을 줄이는 거래 구조가 된다.",
  },
  {
    area: "국가 경영",
    goal: "산업 강점을 새 사회계약의 거래 조건으로 바꾼다.",
    bullets: [
      "핵심 질문: 이 산업이 어떤 문제를 풀어주기 때문에 상대가 한국과 거래해야 하는가",
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2.2 }}>
      {items.map((item) => (
        <li key={item} style={{ margin: 0, paddingLeft: 1, fontSize: 9.55, lineHeight: 1.18 }}>{item}</li>
      ))}
    </ul>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "13px 36px 9px", borderBottom: `3px solid ${C.navy}`, marginBottom: 9 }}>
        <div style={{ fontSize: 19.2, color: C.navy, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.4 }}>
          한국은 AI 시대의 상호의존을 설계하는 중심 국가가 되어야 한다.
        </div>
        <div style={{ marginTop: 7, fontSize: 13.5, color: "#333", lineHeight: 1.34, fontWeight: 560 }}>
          한국이 할 일은 새로운 패권 이름을 만드는 것이 아니다. 산업·도시·문화·제도를 묶어 미국과 중국, 선진국과 신흥국이 서로 필요로 하되 시민을 파괴하지 않는 공동 운영 규칙을 만드는 일이다.
        </div>
      </div>

      <div style={{ padding: "0 36px 14px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 위한 전략</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 186, display: "grid", gridTemplateColumns: "98px 1fr", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderRight: `1px solid #d7d0c7`, padding: "10px 11px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ color: C.navy, fontSize: 14.3, fontWeight: 820, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "8px 11px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ fontSize: 12.55, lineHeight: 1.18, color: C.navy, fontWeight: 820, letterSpacing: -0.28 }}>{row.problem}</div>
                    <BulletList items={row.problemBullets} />
                  </div>
                  <div style={{ borderLeft: "5px solid #d9b46f", paddingLeft: 12, display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ fontSize: 12.35, lineHeight: 1.2, color: "#2f2f2f", fontWeight: 720, letterSpacing: -0.22 }}>{row.strategy}</div>
                    <BulletList items={row.strategyBullets} />
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

const th: React.CSSProperties = { padding: "7px 8px", textAlign: "left", fontSize: 11.1, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "6.4px 8px", borderBottom: "1px solid #eee", fontSize: 10.05, lineHeight: 1.16, color: "#333", verticalAlign: "top" };
