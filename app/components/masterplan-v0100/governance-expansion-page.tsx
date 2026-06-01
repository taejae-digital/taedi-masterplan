import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "국제 질서",
    problem: "AI 패권경쟁은 시민 권리를 진영 논리와 안보 통제 안에 가둔다.",
    problemBullets: [
      "디지털 인프라 접근권이 어느 진영의 클라우드·칩·플랫폼을 쓰느냐의 문제로 축소된다.",
      "직접 거버넌스 참여권은 시민 참여보다 국가 안보와 기업 통제 논리 뒤로 밀린다.",
      "정체성 실현권은 개인 성장의 권리가 아니라 플랫폼이 관리하는 사용자 경험으로 좁아진다.",
    ],
    strategy: "새로운 사회계약이 작동하려면 패권국도 받아들일 수밖에 없는 공동 검증 규칙이 필요하다.",
    strategyBullets: [
      "경쟁 중단을 요구하지 않고 군사·생물·사이버 악용 금지선을 먼저 긋는다.",
      "공공 AI 감사 로그와 국제 사고 조사 절차를 공동 운영 규칙으로 제안한다.",
      "디지털 인프라 접근권과 직접 거버넌스 참여권을 국제 검증·인증의 대상에 올린다.",
    ],
  },
  {
    title: "국가 전략",
    problem: "세 권리는 복지·참여·교육 사업으로 흩어지면 사회계약이 되지 못한다.",
    problemBullets: [
      "디지털 인프라 접근권은 장비 보급이나 취약계층 지원 사업으로 축소된다.",
      "직접 거버넌스 참여권은 행사성 시민 참여와 의견 수렴에 머문다.",
      "정체성 실현권은 교육·진로 구호로 흩어지고 법·예산·외교의 기준이 되지 못한다.",
    ],
    strategy: "국가는 AI·데이터·산업·복지·정치 개혁을 하나의 운영 원리로 묶어야 한다.",
    strategyBullets: [
      "15대 산업을 시민강화 사회계약의 물적 기반으로 둔다.",
      "7대 분야 초일류를 산업 실증을 규칙·신뢰·서사·권한으로 바꾸는 제도 권력으로 둔다.",
      "선출직 인재가 세 권리를 법·예산·외교가 함께 움직이는 국가 전략으로 실행한다.",
    ],
  },
  {
    title: "산업 기반",
    problem: "권리는 생활 속에서 작동해야 한다.",
    problemBullets: [
      "AI 인프라, 도시·주거, 공공재, 로봇·드론, 미디어·금융, 교육·건강·국토가 분리되어 있다.",
      "디지털 인프라 접근권이 일·학습·돌봄·공공서비스와 연결되지 않으면 생산성 향상으로 이어지지 않는다.",
      "정체성 실현권은 시민이 실제로 더 배우고, 더 건강해지고, 더 좋은 일을 하게 됐다는 증거를 필요로 한다.",
    ],
    strategy: "15대 산업은 먹거리 목록이 아니라 사회계약의 실증 기반이다.",
    strategyBullets: [
      "미래창조형 산업은 도시·가정·공공서비스에서 시민강화 AI 운영 모델을 실험한다.",
      "세계정상필수 산업은 연산·전력·제조·안보의 병목을 줄이는 협상 카드가 된다.",
      "동북아·한반도 정체성기반 산업은 정체성 실현권이 생활과 시장에서 작동하는 증거를 만든다.",
    ],
  },
  {
    title: "제도 운영",
    problem: "실증된 모델은 제도 권한으로 이어져야 한다.",
    problemBullets: [
      "AI 안전, 데이터 주권, 디지털 배당, 시민 직접 참여가 법·예산·감사·행정 안에 들어오지 못하면 세 권리는 선언에 머문다.",
      "직접 거버넌스 참여권이 권한을 갖지 못하면 시민 참여는 의견 수렴으로 축소된다.",
      "정체성 실현권이 교육·복지·산업 정책의 기준이 되지 못하면 제도 밖 자기계발 구호로 남는다.",
    ],
    strategy: "싱크탱크·대학·기업·미디어·정부·정당·군대가 사회계약을 실제 운영해야 한다.",
    strategyBullets: [
      "7대 분야 초일류는 기술 목록이 아니라 사회 운영 제도의 최정상화다.",
      "산업 실증을 규칙·신뢰·서사·권한으로 바꿀 때 한국의 규칙 형성 권한이 만들어진다.",
      "법·예산·감사·행정이 세 권리를 운영 기준으로 받아들일 때 사회계약이 실제 작동한다.",
    ],
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 184, display: "grid", gridTemplateColumns: "98px 1fr", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderRight: `1px solid #d7d0c7`, padding: "10px 11px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ color: C.navy, fontSize: 14.1, fontWeight: 730, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "8px 11px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ fontSize: 12.35, lineHeight: 1.22, color: C.navy, fontWeight: 700, letterSpacing: -0.28 }}>{row.problem}</div>
                    <BulletList items={row.problemBullets} fontSize={10.55} />
                  </div>
                  <div style={{ borderLeft: "3px solid #d9b46f", paddingLeft: 12, display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ fontSize: 12.35, lineHeight: 1.22, color: "#2f2f2f", fontWeight: 700, letterSpacing: -0.22 }}>{row.strategy}</div>
                    <BulletList items={row.strategyBullets} fontSize={10.55} />
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
