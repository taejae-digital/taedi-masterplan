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
    key: "한국 패권은 규모가 아니라 표준에서 나온다.",
    blocked: [
      "미국식 빅테크·금융·군사 패권을 만들 수 없다.",
      "중국식 국가동원·제조망·감시 플랫폼 패권도 답이 아니다.",
      "산업·제도·인재가 분리되면 좋은 기술을 가진 나라에 머문다.",
    ],
    strategy: [
      "표준 패권은 영토·군사력으로 강제하는 힘이 아니라, 다른 나라가 쓰지 않을 수 없는 규칙·검증·인증·시장 기준을 먼저 만드는 힘이다.",
      "15대 산업은 물적 기반, 7대 분야 초일류는 제도 권력, 선출직 인재는 실행 권한이 된다.",
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
    goal: "15대 산업·7대 분야·선출직 인재를 하나의 패권 전략으로 묶는다.",
    bullets: [
      "15대 산업: 미래창조형 ①미래도시 개발+경영 ②미래주택 ③디지털공공재 / 세계정상필수 ④로봇 ⑤드론 ⑥바이오 ⑦디지털미디어 ⑧디지털금융 ⑨인공위성이용 ⑩핵에너지 / 동북아·한반도 정체성기반 ⑪융합디자인 ⑫신가치 엔터테인먼트 ⑬건강·관광 ⑭미래교육 ⑮국토활용",
      "7대 분야: 싱크탱크·대학·기업·미디어·정부·정당·군대가 산업 실증을 규칙·신뢰·서사·권한으로 전환",
      "선출직 인재: AI 인프라 접근권, 데이터 주권, 디지털 배당, 시민 직접 위임 거버넌스를 법·예산·외교로 실행",
      "미국에 주는 가치: 민주주의형 AI 시장과 규범 우위의 실증",
      "중국에 주는 가치: 배제 완화와 사회 안정형 AI의 국제 검증. 단, 감시 모델의 표준화는 허용하지 않음",
    ],
    effect: "산업은 물적 기반, 7대 분야는 제도 권력, 선출직 인재는 실행 권한이 된다.",
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
          미국식 빅테크 패권도, 중국식 국가감시 패권도 아니다. 15대 산업을 물적 기반으로, 7대 분야 초일류를 제도 권력으로, 선출직 인재를 실행 권한으로 묶어 AI 시대 시민강화 사회계약을 세계 표준으로 만든다.
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
