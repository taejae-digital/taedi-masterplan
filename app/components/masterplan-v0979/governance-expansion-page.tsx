import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const chain = [
  ["개인 변화", "AI가 인지노동을 대체하면서 개인은 정해진 직업이 아니라 자기 정체성을 발견·훈련·실현해야 한다."],
  ["질서 균열", "산업시대의 교육·고용·복지·정치 제도는 표준 직업과 평균 시민을 전제로 설계되어 더 이상 충분하지 않다."],
  ["새 사회계약", "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권, 시민 직접 위임 거버넌스가 새 권리 체계가 된다."],
  ["경영 전략", "새 권리는 선언으로 끝나지 않고 세계·국가·도시·가정의 운영 원리로 번역되어야 한다."],
];

const managementRows = [
  {
    area: "세계 경영",
    question: "AI와 플랫폼의 규칙을 누가 정할 것인가.",
    strategy: "디지털 시대 새 사회계약을 국제 규범으로 제안하고, AI 안전·데이터 주권·알고리즘 검증을 시민이 위임하고 감시하는 다층 거버넌스로 확장한다.",
    right: "시민 직접 위임 거버넌스",
    test: "외교 이벤트인가, 새 권리를 세계 규칙으로 만드는가.",
  },
  {
    area: "국가 경영",
    question: "국가는 개인의 정체성 실현을 어떻게 보장할 것인가.",
    strategy: "교육·산업·복지·데이터·AI 인프라를 개인의 발견·훈련·실현 경로로 연결하고, 격차가 계층으로 굳어지지 않게 큰 틀을 설계한다.",
    right: "정체성 실현권 / AI 인프라 평등 접근권",
    test: "부처별 사업인가, 개인 전환 경로를 보장하는 운영 체계인가.",
  },
  {
    area: "도시 경영",
    question: "권리는 어디에서 생활의 경험으로 검증되는가.",
    strategy: "일·학습·주거·문화·돌봄을 한 생활권 안에서 연결하고, 시산학 매칭 생태계와 강소도시 네트워크로 정체성 실현 환경을 만든다.",
    right: "정체성 실현권",
    test: "개발사업인가, 발견·훈련·실현이 반복되는 생활 운영체계인가.",
  },
  {
    area: "가정 경영",
    question: "AI 개인화는 삶을 돕는가, 판단을 빼앗는가.",
    strategy: "돌봄·학습·건강·관계에서 AI가 개인을 대신 결정하지 않고, 설명받고 거부하고 조정할 수 있는 최소 생활 환경을 설계한다.",
    right: "AI 개인화권",
    test: "편리한 자동화인가, 개인의 판단 주도권을 지키는 생활권인가.",
  },
];

const conditions = [
  ["산업 기반", "15대 한반도 미래산업", "세계 질서 속 협상력과 경제 기반을 만드는 산업 자산. 세부 산업 설명이 아니라 경영전략을 현실화할 물적 기반으로 배치한다."],
  ["제도 역량", "7대 초일류 역량", "싱크탱크·대학·기업·미디어·정부·정당·군대의 최정상화. 산업을 사회 운영 능력으로 바꾸는 제도 인프라다."],
  ["정치 인재", "선출직 인재 양성", "새 사회계약을 법·예산·권한 구조로 실행할 사람. 권리가 실제 의사결정으로 이어지는 통로다."],
];

const implementationUnits = [
  ["세계", "시민 직접 위임 거버넌스", "AI 안전·데이터·플랫폼 규칙을 공동 검증하는 국제 규범"],
  ["국가", "정체성 실현권 / AI 인프라 평등 접근권", "교육·산업·복지·데이터 인프라를 하나의 전환 경로로 연결하는 운영 체계"],
  ["도시", "정체성 실현권", "일·학습·주거·문화·돌봄이 연결된 생활권과 시산학 매칭 생태계"],
  ["가정", "AI 개인화권", "돌봄·학습·건강·관계에서 설명·거부·조정권이 작동하는 최소 생활 단위"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 13, color: "#222", lineHeight: 1.42, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 선언이 아니라 경영 전략이다.</strong> 정체성 실현의 자유를 보장하려면 새 권리는 구호가 아니라 세계·국가·도시·가정의 운영 원리, 실행 조건, 검증 단위로 내려와야 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 개인 변화에서 경영전략까지</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {chain.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.6, fontWeight: 900 }}>{i + 1}. {k}</div>
                <div style={{ padding: "7px 8px", fontSize: 10.75, lineHeight: 1.3, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "32%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "18%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>층위</th>
                <th style={th}>핵심 질문</th>
                <th style={th}>경영 전략</th>
                <th style={th}>받는 권리</th>
                <th style={th}>판단 기준</th>
              </tr>
            </thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 11.25 }}>{r.area}</td>
                  <td style={{ ...td, fontWeight: 650 }}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800 }}>{r.right}</td>
                  <td style={{ ...td, fontSize: 9.9, lineHeight: 1.24 }}>{r.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>4.3 경영전략의 실행 조건 — 산업·제도·인재</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "21%" }} />
                <col style={{ width: "27%" }} />
                <col style={{ width: "52%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={thSmall}>조건</th>
                  <th style={thSmall}>전략 자산</th>
                  <th style={thSmall}>역할</th>
                </tr>
              </thead>
              <tbody>
                {conditions.map(([a, b, c], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 900 }}>{a}</td>
                    <td style={{ ...tdSmall, color: C.accent, fontWeight: 900 }}>{b}</td>
                    <td style={tdSmall}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>4.4 권리의 구현 단위 — 세계·국가·도시·가정</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "16%" }} />
                <col style={{ width: "31%" }} />
                <col style={{ width: "53%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={thSmall}>단위</th>
                  <th style={thSmall}>구현 권리</th>
                  <th style={thSmall}>검증 방식</th>
                </tr>
              </thead>
              <tbody>
                {implementationUnits.map(([a, b, c], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 900 }}>{a}</td>
                    <td style={{ ...tdSmall, color: C.accent, fontWeight: 900 }}>{b}</td>
                    <td style={tdSmall}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "9px 15px", display: "flex", alignItems: "center", gap: 13 }}>
          <div style={{ fontSize: 10.2, color: C.accent, fontWeight: 900, letterSpacing: 1.6, minWidth: 70 }}>핵심 명제</div>
          <div style={{ fontSize: 15.1, lineHeight: 1.34, color: "#222", fontWeight: 700 }}>
            새 사회계약은 권리 선언에서 끝나지 않는다. <span style={{ color: C.accent, fontWeight: 900 }}>세계·국가·도시·가정의 경영전략으로 번역되고, 산업·제도·인재를 통해 실행되며, 다시 생활 단위에서 검증된다.</span>
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 10.1, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.45, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "4.5px 6px", borderBottom: "1px solid #eee", fontSize: 9.95, lineHeight: 1.23, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.05, lineHeight: 1.26, color: "#333", verticalAlign: "top" };
