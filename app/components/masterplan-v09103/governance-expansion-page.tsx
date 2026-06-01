import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const limitRows = [
  {
    title: "미·중 패권 경쟁",
    limit: "미국과 중국은 AI를 군사·금융·제조·플랫폼·데이터·표준·동맹질서의 권력으로 본다. 이 경쟁은 AI 인프라 접근권을 진영별 플랫폼 의존으로, 데이터 주권을 안보 통제로, 시민 권리를 패권 비용 뒤로 밀어낸다.",
    strategy: "경쟁 중단을 요구하지 않는다. 안전 사고, 시장 분열, 정당성 위기, 동맹 피로, 국내 불안이라는 패권 비용이 커지는 지점에 공멸선을 긋고, 시민강화 표준을 공동 시장의 기준으로 제안한다.",
  },
  {
    title: "한국의 위치",
    limit: "한국은 세계 규칙을 단독으로 강제할 규모가 부족하다. 산업·제도·인재가 따로 움직이면 디지털 인프라 접근권은 복지정책, 직접 거버넌스 참여권은 참여 행사, 정체성 실현권은 교육 구호로 흩어진다.",
    strategy: "한국은 AI 시민강화 표준을 선점하는 중심 국가가 되어야 한다. 패권경쟁의 비용을 줄이는 안전장치와, 시민의 능력·권리·정체성 실현을 강화하는 사회계약을 함께 제안한다.",
  },
  {
    title: "디지털 시대의 산업 구조",
    limit: "AI 인프라, 도시·주거, 공공재, 로봇·드론, 미디어·금융, 교육·건강·국토가 분리되어 있으면 세 권리가 생활에서 작동하지 않는다. 접근권은 장비 보급에, 참여권은 앱 기능에, 정체성 실현권은 진로 상담에 갇힌다.",
    strategy: "15대 산업을 미래창조형, 세계정상필수, 동북아·한반도 정체성기반 산업으로 묶는다. 산업은 먹거리 목록이 아니라 시민강화 AI 표준을 도시·가정·공공서비스·시장에 실증하는 물적 기반이다.",
  },
  {
    title: "디지털 시대의 거버넌스",
    limit: "기존 거버넌스는 부처·전문가·선거 주기·기업 이해관계로 쪼개져 있다. AI 안전, 데이터 주권, 디지털 배당, 시민 직접 참여를 한 제도 안에서 다루지 못하면 세 권리는 선언에 그치고 예산·법·감사 권한을 갖지 못한다.",
    strategy: "싱크탱크·대학·기업·미디어·정부·정당·군대의 7대 분야를 초일류화한다. 이 제도들이 산업 실증을 규칙·신뢰·서사·권한으로 바꿀 때 한국의 표준 권력이 만들어진다.",
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
          <div style={h3s}>4.1 새로운 사회계약에 이르기 어려운 현실의 한계</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {limitRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 245, display: "flex", flexDirection: "column", border: `1px solid #d8d2ca`, background: i % 2 ? C.bg : "#fff" }}>
                <div style={{ background: "#f5f1ea", color: C.navy, borderBottom: `1px solid #d8d2ca`, padding: "8px 10px", fontSize: 14, fontWeight: 730 }}>{row.title}</div>
                <div style={{ padding: "8px 10px 6px", fontSize: 11.15, lineHeight: 1.26, color: "#333", fontWeight: 520 }}>
                  <span style={{ color: C.navy, fontWeight: 750 }}>한계</span> — {row.limit}
                </div>
                <div style={{ padding: "8px 10px 10px", borderTop: "1px solid #e5ddd2", fontSize: 10.9, lineHeight: 1.25, color: "#333", fontWeight: 520, flex: 1 }}>
                  <div style={{ color: "#555", fontWeight: 620, marginBottom: 3 }}>사회계약 전략</div>
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
