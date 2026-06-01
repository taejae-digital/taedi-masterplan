import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "세계 정세",
    key: "AI 패권경쟁은 시민 권리를 뒤로 밀고 있다.",
    blocked: [
      "AI 인프라는 진영별 플랫폼 의존으로 갈라진다.",
      "데이터 주권은 시민 권리보다 안보 통제로 흡수된다.",
      "직접 거버넌스 참여권은 패권 경쟁의 비용 뒤로 밀린다.",
    ],
    strategy: [
      "1단계: 행정·의료·교육·산업 현장에서 고위험 AI 사고 기준, 감사 로그, 사후 책임 규칙을 공동검증한다.",
      "2단계: 검증을 통과한 AI만 공공조달·보험·국제 거래에 들어오게 해 참여국의 시장 이익을 만든다.",
      "3단계: 이 규칙을 군사·생물·사이버 악용 금지선과 WMD 감축 의제로 확장해 공멸 비용을 낮춘다.",
    ],
  },
  {
    title: "한국의 위치",
    key: "한국의 힘은 상호의존을 설계하는 능력에서 나온다.",
    blocked: [
      "산업을 나열만 하면 먹거리 목록에 머문다.",
      "미국·중국·신흥국이 왜 한국 모델을 필요로 하는지 보여야 한다.",
      "그 필요가 시민강화 사회계약의 검증·시장·운영 규칙으로 이어져야 한다.",
    ],
    strategy: [
      "1단계: 반도체·배터리·로봇·바이오·콘텐츠를 공급망 안정, 생활 실증, 문화 신뢰라는 협상 카드로 재분류한다.",
      "2단계: 산업 접근과 실증 시장을 열어주되 데이터 주권, AI 검증, 시민강화 원칙을 거래 조건으로 붙인다.",
      "3단계: 7대 분야는 이 거래 조건을 연구·교육·기업·미디어·정부·정당·안보의 운영 규칙으로 바꾼다.",
    ],
  },
  {
    title: "거대도시의 비효율성",
    key: "도시는 시민이 실제로 강해졌다는 증거를 만드는 곳이다.",
    blocked: [
      "집은 비싸고, 일터는 멀고, 학교·병원·돌봄·행정은 서로 따로 움직인다.",
      "AI를 보급해도 개인의 학습·건강·일자리·참여 기록이 하나의 성장 경로로 이어지지 않는다.",
      "그래서 시민이 AI로 실제로 더 배우고, 더 건강해지고, 더 좋은 일을 하게 됐다는 증거를 만들기 어렵다.",
    ],
    strategy: [
      "1단계: 강소도시마다 학습·건강·돌봄·일자리·행정 데이터를 한 사람의 성장 기록으로 연결한다.",
      "2단계: 대학·기업·공공조달·시민참여를 붙여 AI가 실제로 생산성·건강·참여를 높였는지 측정한다.",
      "3단계: 성과가 난 도시 모델을 교육·의료·중소기업·돌봄 패키지로 만들어 해외 도시가 구매하게 한다.",
    ],
  },
  {
    title: "몰개인화",
    key: "평균적 개인을 전제로 한 제도는 정체성 실현권을 만들 수 없다.",
    blocked: [
      "산업시대에는 직업 선택에서 정체성이 최우선 기준이 아니었다.",
      "교육·일·돌봄·복지는 평균적 개인을 기준으로 설계되었다.",
      "AI 개인화는 시민 권리가 아니라 플랫폼 추천 기능으로 축소된다.",
    ],
    strategy: [
      "1단계: 가족 AI 코치가 학습·건강·돌봄·관계 데이터를 개인이 이해할 수 있는 성장 기록으로 정리한다.",
      "2단계: 아이·청년·중년·노년별로 추천이 아니라 설명·거부·조정 가능한 선택지를 제공한다.",
      "3단계: 개인 데이터는 가족과 개인의 판단 주도권 아래 두고, 플랫폼은 서비스 제공자에 머물게 한다.",
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

      <div style={{ padding: "13px 36px 9px", borderBottom: `3px solid ${C.navy}`, marginBottom: 9 }}>
        <div style={{ fontSize: 19.2, color: C.navy, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.4 }}>
          한국은 AI 시대의 상호의존을 설계하는 중심 국가가 되어야 한다.
        </div>
        <div style={{ marginTop: 7, fontSize: 13.5, color: "#333", lineHeight: 1.34, fontWeight: 560 }}>
          한국이 할 일은 새로운 패권 이름을 만드는 것이 아니다. 산업·도시·문화·제도를 묶어 미국과 중국, 선진국과 신흥국이 서로 필요로 하되 시민을 파괴하지 않는 공동 운영 규칙을 만드는 일이다.
        </div>
      </div>

      <div style={{ padding: "0 36px 14px", display: "flex", flexDirection: "column", flex: 1, gap: 11 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 위한 전략</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 166, display: "grid", gridTemplateColumns: "108px 1fr", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderRight: `1px solid #d7d0c7`, padding: "10px 11px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ color: C.navy, fontSize: 15.2, fontWeight: 820, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "9px 12px 9px", display: "grid", gridTemplateColumns: "0.72fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 12.9, lineHeight: 1.2, color: C.navy, fontWeight: 780, letterSpacing: -0.25, marginBottom: 6 }}>{row.key}</div>
                    <ul style={{ margin: 0, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2, fontSize: 9.85, lineHeight: 1.16, color: "#333", fontWeight: 510 }}>
                      {row.blocked.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div style={{ borderLeft: "5px solid #d9b46f", paddingLeft: 12, fontSize: 10.85, lineHeight: 1.2, color: "#2f2f2f", fontWeight: 520 }}>
                    <div style={{ color: C.accent, fontWeight: 850, fontSize: 11.2, marginBottom: 3, letterSpacing: 0.2 }}>사회계약 전략</div>
                    <ul style={{ margin: 0, paddingLeft: 13, display: "flex", flexDirection: "column", gap: 2.5 }}>
                      {row.strategy.map((item) => <li key={item}>{item}</li>)}
                    </ul>
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
const td: React.CSSProperties = { padding: "7.2px 8px", borderBottom: "1px solid #eee", fontSize: 10.35, lineHeight: 1.2, color: "#333", verticalAlign: "top" };
