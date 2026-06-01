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
      "경쟁 중단이 아니라 공멸선을 제안한다.",
      "AI 상호절제·시민강화 협정, AI-FDA식 국제 검증 체계, WMD 감축 의제를 묶어 세계 표준으로 만든다.",
    ],
  },
  {
    title: "한국의 위치",
    key: "한국 패권은 산업 목록이 아니라 협상력에서 나온다.",
    blocked: [
      "산업을 나열만 하면 먹거리 목록에 머문다.",
      "각 산업이 어떤 대체불가 강점과 협상 카드를 만드는지 보여야 한다.",
      "그 협상력이 시민강화 사회계약의 규칙·검증·시장 기준으로 이어져야 한다.",
    ],
    strategy: [
      "표준 패권은 영토·군사력으로 강제하는 힘이 아니라, 다른 나라가 쓰지 않을 수 없는 규칙·검증·인증·시장 기준을 먼저 만드는 힘이다.",
      "산업은 표준을 강제할 협상력이다. 공급망·도시 실증·문화 신뢰·제도 역량을 묶어 미국과 중국이 모두 받아들일 새 사회계약의 조건을 만든다.",
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
      "강소도시를 시민강화 AI 실험장으로 만든다.",
      "학습·건강·돌봄·행정 경험, 개인 성장 기록, 대학·기업·공공조달·시민참여를 연결해 세계가 따라올 도시 모델을 증명한다.",
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
      "가정은 가장 작은 사회계약 단위다.",
      "정체성 발견, 전문성 훈련, 재교육, 노년의 판단 주도권, 건강·학습·돌봄 데이터 주권이 매일 작동해야 시민강화가 현실이 된다.",
    ],
  },
];

const strategyRows = [
  {
    area: "세계 경영",
    goal: "AI 패권경쟁의 공멸선을 한국 표준으로 설정한다.",
    bullets: [
      "협정명: AI 상호절제·시민강화 협정",
      "전제: 미국과 중국은 AI 패권경쟁을 멈추지 않음. 목표는 경쟁 중단이 아니라 통제 불가능한 비용의 관리",
      "검증 모델: 의약품 FDA처럼 고위험 AI를 사전 심사·임상 실증·시판 후 감시로 관리하는 AI-FDA식 국제 검증 체계 구축",
      "안전장치: 군사·생물·사이버 악용 금지선, 공공 AI 감사 로그, 국제 사고 조사 절차, WMD 감축 의제와 연결",
      "공동 시장: 안전한 AI, 설명되는 AI, 행정·교육·의료·산업 적용 AI를 공동 인증·공동 시장으로 전환",
      "한국의 위치: 패권국가들이 경쟁해도 시민이 파괴되지 않게 하는 안전한 경합 규칙의 설계자",
    ],
    effect: "한국은 AI 패권경쟁의 다음 질서를 설계하는 중심 국가가 된다.",
  },
  {
    area: "국가 경영",
    goal: "산업 강점을 새 사회계약의 협상력으로 바꾼다.",
    bullets: [
      "핵심 질문: 이 산업들이 한국에 어떤 대체불가 강점과 협상 카드를 주는가",
      "공급망 협상력: 반도체·배터리·로봇·드론·핵에너지·인공위성은 AI 시대의 연산·에너지·제조·안보 안정성을 좌우한다",
      "생활 실증력: 미래도시·미래주택·디지털공공재·바이오·건강·미래교육은 시민강화 사회계약을 실제 생활에서 검증하게 한다",
      "문화 신뢰력: 디지털미디어·디지털금융·융합디자인·신가치 엔터테인먼트·관광은 한국 표준을 사람들이 받아들이게 하는 신뢰와 서사를 만든다",
      "협상 카드: 미국에는 신뢰 가능한 민주주의형 AI 시장과 공급망 실증을, 중국에는 배제 완화와 사회 안정형 AI 검증의 참여 통로를 제안한다",
    ],
    effect: "산업은 나열 목록이 아니라 새 사회계약을 받아들이게 만드는 협상 지렛대가 된다.",
  },
  {
    area: "도시 경영",
    goal: "시민강화 AI 표준을 생활권에서 증명한다.",
    bullets: [
      "강소도시를 시민강화 AI 실험장으로 설계",
      "대학·기업·연구기관·공공조달·시민참여를 시산학 생태계로 연결",
      "도시별 산업학교, 생활 데이터, 돌봄 모델, 시민 참여 플랫폼 운영",
      "교육·행정·의료·중소기업 생산성에서 시민이 AI로 강화되는 증거 축적",
    ],
    effect: "도시는 세계가 따라올 수 있는 한국식 사회계약의 실증 모델이 된다.",
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
    effect: "가정은 시민강화 사회계약이 매일 작동하는 가장 작은 단위다.",
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
          한국은 AI 시민강화 표준을 선점하는 중심 국가가 되어야 한다.
        </div>
        <div style={{ marginTop: 7, fontSize: 13.5, color: "#333", lineHeight: 1.34, fontWeight: 560 }}>
          미국식 빅테크 패권도, 중국식 국가감시 패권도 아니다. 핵심은 산업과 제도를 나열하는 것이 아니라, 그것들이 한국에 주는 대체불가 강점과 협상력을 새 사회계약의 규칙·검증·시장 기준으로 바꾸는 일이다.
        </div>
      </div>

      <div style={{ padding: "0 36px 14px", display: "flex", flexDirection: "column", flex: 1, gap: 11 }}>
        <section>
          <div style={h3s}>4.1 새로운 사회계약에 이르기 위한 전략</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 147, display: "grid", gridTemplateColumns: "108px 1fr", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderRight: `1px solid #d7d0c7`, padding: "10px 11px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ color: C.navy, fontSize: 15.2, fontWeight: 820, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "9px 12px 9px", display: "grid", gridTemplateColumns: "1fr 0.78fr", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14.1, lineHeight: 1.22, color: C.navy, fontWeight: 780, letterSpacing: -0.25, marginBottom: 6 }}>{row.key}</div>
                    <ul style={{ margin: 0, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2.5, fontSize: 10.75, lineHeight: 1.22, color: "#333", fontWeight: 510 }}>
                      {row.blocked.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div style={{ borderLeft: "3px solid #d9b46f", paddingLeft: 10, fontSize: 10.55, lineHeight: 1.22, color: "#2f2f2f", fontWeight: 520 }}>
                    <div style={{ color: C.accent, fontWeight: 780, fontSize: 10.4, marginBottom: 3, letterSpacing: 0.2 }}>사회계약 전략</div>
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
