import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const premiseRows = [
  ["기술 변화", "AI가 인지노동을 대체하고, 데이터와 알고리즘이 판단·매칭·생산의 기본 인프라가 된다."],
  ["개인 변화", "개인은 정해진 직업에 맞춰 사는 존재가 아니라, 자기 정체성을 발견·훈련·실현해야 하는 주체가 된다."],
  ["공동체 변화", "가정·도시·국가는 표준화된 구성원을 관리하는 체계에서 개인의 전환 경로를 돕는 환경으로 바뀌어야 한다."],
  ["질서 변화", "세계 질서는 산업·군사·외교 경쟁만이 아니라 AI 규칙, 데이터 주권, 시민 위임 구조를 둘러싼 경쟁으로 재편된다."],
];

const managementRows = [
  {
    area: "세계 경영",
    question: "디지털 시대의 새 권리를 세계 규범으로 만들 수 있는가.",
    connection: "시민 직접 위임 거버넌스를 국가 밖의 플랫폼·AI 규칙까지 확장한다.",
    strategy: "AI 안전, 데이터 주권, 알고리즘 검증, 시민 위임 구조를 연결해 새 사회계약의 국제 언어를 만든다.",
    solution: "국제 연구 네트워크, AI 안전 공동검증, 데이터·플랫폼 규칙 제안",
  },
  {
    area: "국가 경영",
    question: "국가는 개인의 정체성 실현을 가능하게 하는 운영체계가 될 수 있는가.",
    connection: "정체성 실현권과 AI 인프라 평등 접근권을 교육·산업·복지·정치의 기준으로 둔다.",
    strategy: "산업 기반, 공공 AI 인프라, 데이터 주권, 디지털 배당, 새 권리 법제화를 하나의 국가 운영 체계로 묶는다.",
    solution: "15대 한반도 미래산업, 7대 초일류 역량, 선출직 인재 양성",
  },
  {
    area: "도시 경영",
    question: "도시는 정체성 발견·훈련·실현이 일어나는 생활 단위가 될 수 있는가.",
    connection: "정체성 실현권을 일·학습·주거·문화·돌봄이 연결된 생활권에서 검증한다.",
    strategy: "시산학 매칭 생태계와 강소도시 네트워크를 통해 개인이 자기 경로를 실험하고 기여하게 한다.",
    solution: "도시 구독, 시민 참여 플랫폼, 도시별 정체성 실험, 생활권 기반 돌봄",
  },
  {
    area: "가정 경영",
    question: "AI 개인화는 개인의 판단 주도권을 강화하는가.",
    connection: "AI 개인화권을 돌봄·학습·건강·관계가 이루어지는 최소 생활 단위에서 구현한다.",
    strategy: "추천·판단·매칭을 설명받고 거부하고 조정할 수 있는 개인화 환경을 설계한다.",
    solution: "설명 가능한 추천, 거부권·조정권, 개인 데이터 통제, 생활 AI 기준",
  },
];

const conditions = [
  ["산업 기반", "15대 한반도 미래산업", "국가의 협상력과 경제 기반을 만드는 산업 자산. 세부 산업 설명이 아니라 경영전략을 현실화할 물적 기반으로 배치한다."],
  ["제도 역량", "7대 초일류 역량", "싱크탱크·대학·기업·미디어·정부·정당·군대의 최정상화. 산업을 사회 운영 능력으로 바꾸는 제도 인프라다."],
  ["정치 인재", "선출직 인재 양성", "새 사회계약을 법·예산·권한 구조로 실행할 사람. 권리가 실제 의사결정으로 이어지는 통로다."],
];

const integrationRows = [
  ["세계 경영", "외교·국제협력 사업으로 분리됨", "새 권리를 세계 규범으로 확장", "디지털 시대 시민 권리를 세계 규칙으로 만들 수 있는가."],
  ["국가 경영", "산업·복지·교육·정치가 따로 감", "개인의 전환 경로를 보장하는 국가 운영체계", "국가는 개인의 정체성 실현을 가능하게 하는가."],
  ["도시 경영", "개발사업·공간계획으로 축소됨", "정체성 발견·훈련·실현이 반복되는 생활권", "도시는 개인의 정체성 실현 환경인가."],
  ["가정 경영", "스마트홈·편의기술로 축소됨", "AI 개인화권이 작동하는 최소 생활 단위", "AI는 개인의 판단 주도권을 강화하는가."],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "9px 32px 6px", borderBottom: `2px solid ${C.navy}`, marginBottom: 7 }}>
        <div style={{ fontSize: 12.8, color: "#222", lineHeight: 1.38, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 선언이 아니라 경영 전략이다.</strong> 디지털 전환이 바꾼 개인·공동체·질서의 문제를 세계·국가·도시·가정의 경영전략으로 옮기고, 각 전략을 하나의 사회계약으로 정렬한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 디지털 전환이 바꾸는 경영의 전제</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {premiseRows.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.45, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "7px 8px", fontSize: 10.55, lineHeight: 1.28, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "26%" }} />
              <col style={{ width: "17%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>층위</th>
                <th style={th}>핵심 질문</th>
                <th style={th}>새 사회계약과의 연결</th>
                <th style={th}>경영전략</th>
                <th style={th}>고민할 해결책</th>
              </tr>
            </thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 10.95 }}>{r.area}</td>
                  <td style={{ ...td, fontWeight: 650 }}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.connection}</td>
                  <td style={td}>{r.strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 9.65, lineHeight: 1.22 }}>{r.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 10, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>4.3 경영전략의 실행 조건 — 산업·제도·인재</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "48%" }} />
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
            <div style={h3s}>4.4 팀별 전략의 통합 원칙 — 하나의 사회계약으로 묶기</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "16%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "29%" }} />
                <col style={{ width: "30%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={thSmall}>전략 영역</th>
                  <th style={thSmall}>따로 가면</th>
                  <th style={thSmall}>통합 원칙</th>
                  <th style={thSmall}>하나의 질문</th>
                </tr>
              </thead>
              <tbody>
                {integrationRows.map(([a, b, c, d], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 900 }}>{a}</td>
                    <td style={tdSmall}>{b}</td>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 700 }}>{c}</td>
                    <td style={{ ...tdSmall, color: C.accent, fontWeight: 800 }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "9px 15px", display: "flex", alignItems: "center", gap: 13 }}>
          <div style={{ fontSize: 10.2, color: C.accent, fontWeight: 900, letterSpacing: 1.6, minWidth: 70 }}>핵심 명제</div>
          <div style={{ fontSize: 14.9, lineHeight: 1.33, color: "#222", fontWeight: 700 }}>
            각 팀의 전략은 서로 다른 사업 목록이 아니다. <span style={{ color: C.accent, fontWeight: 900 }}>디지털 전환으로 등장한 새 사회계약을 세계·국가·도시·가정의 언어로 구현하는 하나의 경영 전략</span>이다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 9.8, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.1, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "4.1px 6px", borderBottom: "1px solid #eee", fontSize: 9.55, lineHeight: 1.2, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "4.6px 7px", borderBottom: "1px solid #eee", fontSize: 9.75, lineHeight: 1.22, color: "#333", verticalAlign: "top" };
