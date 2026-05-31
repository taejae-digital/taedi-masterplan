import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const teamGuides = [
  {
    team: "미·중 관계",
    question: "미·중 관계를 어떤 질서로 재편할 것인가",
    guide: "강대국 선택이 아니라 한국이 양쪽 모두에게 필요한 전략 자산과 규범 제안자가 되는 관계를 설계한다.",
    contract: "AI 개인화권과 AI 인프라 평등 접근권을 국제 협상 의제로 올린다.",
  },
  {
    team: "국가 경영",
    question: "국가 역량을 어떤 목표 아래 배치할 것인가",
    guide: "산업·인프라·인재·외교를 정체성 사회 전환이라는 하나의 목표 아래 재배치한다.",
    contract: "정체성 발견·훈련·실현을 국가 운영의 기본 권리와 안전망으로 만든다.",
  },
  {
    team: "도시 경영",
    question: "도시는 어떤 생활 단위가 되어야 하는가",
    guide: "도시를 정체성 실현이 실제로 작동하는 시산학 매칭 생태계로 설계한다.",
    contract: "교육·일·주거·문화·돌봄을 개인의 정체성 경로와 연결한다.",
  },
  {
    team: "스마트 휴먼",
    question: "강화된 개인을 어떻게 만들 것인가",
    guide: "AI 교육, 조직 혁신, 인재 개발을 개인의 능력 강화와 판단력 훈련으로 묶는다.",
    contract: "AI가 사람을 대체하는 체계가 아니라 사람이 자기 정체성을 실현하도록 돕는 체계를 만든다.",
  },
];

const contractRows = [
  ["정체성 실현권", "개인이 자기 정체성을 발견·훈련·실현할 제도와 생활 환경을 보장한다.", "국가 경영·도시 경영·스마트 휴먼"],
  ["AI 인프라 평등 접근권", "AI·데이터·컴퓨팅 접근 격차가 새로운 신분 질서가 되지 않도록 공공 인프라를 보장한다.", "미·중 관계·국가 경영"],
  ["AI 개인화권", "개인이 AI의 추천·판단·설계를 설명받고 거부하며 자기 목적에 맞게 조정할 권리를 갖는다.", "미·중 관계·스마트 휴먼"],
  ["시민 직접 위임 거버넌스", "국가·도시·플랫폼·세계 규칙을 시민이 직접 검증하고 위임하는 구조를 만든다.", "미·중 관계·도시 경영"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 새 사회계약의 실행 기조" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 12.6, color: "#222", lineHeight: 1.45, fontWeight: 600 }}>
          <strong style={{ color: C.navy }}>디지털팀의 초점은 다른 팀의 일을 대신하는 것이 아니라, 모든 팀이 따라야 할 기본 기조를 정하는 것이다.</strong> 지금까지 만든 새 사회계약을 기준으로 미·중 관계, 국가 경영, 도시 경영, 스마트 휴먼이 같은 방향으로 움직이게 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
        <div>
          <div style={h3s}>5.1 디지털팀의 역할 — 실행 부서가 아니라 기조 편집장</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              ["① 기준", "새 사회계약", "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권, 시민 직접 위임 거버넌스"],
              ["② 번역", "팀별 기조", "미·중 관계, 국가 경영, 도시 경영, 스마트 휴먼이 각자 무엇을 해야 하는지 방향 제시"],
              ["③ 정렬", "하나의 미래상", "각 팀 산출물이 따로 놀지 않고 같은 사회계약을 향해 축적되도록 조율"],
            ].map(([n, t, d], i) => (
              <div key={n} style={{ border: `2px solid ${i === 0 ? C.accent : C.navy}`, background: i === 0 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 0 ? C.accent : C.navy, color: "#fff", padding: "7px 10px", fontSize: 13.5, fontWeight: 900 }}>{n}</div>
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 15.5, fontWeight: 900, color: C.navy, marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 11.6, lineHeight: 1.38, color: "#333" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>5.2 다른 팀에 주는 기본 기조</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "36%" }} />
              <col style={{ width: "28%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>팀</th>
                <th style={th}>핵심 질문</th>
                <th style={th}>디지털팀이 정해주는 기조</th>
                <th style={th}>새 사회계약과의 연결</th>
              </tr>
            </thead>
            <tbody>
              {teamGuides.map((r, i) => (
                <tr key={r.team} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, fontSize: 12.2, fontWeight: 900, color: C.navy }}>{r.team}</td>
                  <td style={td}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.guide}</td>
                  <td style={td}>{r.contract}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>5.3 새 사회계약의 실행 언어</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "26%" }} />
                <col style={{ width: "49%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={th}>권리·거버넌스</th>
                  <th style={th}>실행 의미</th>
                  <th style={th}>주요 연결</th>
                </tr>
              </thead>
              <tbody>
                {contractRows.map(([a, b, c], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, fontWeight: 900, color: C.navy }}>{a}</td>
                    <td style={tdSmall}>{b}</td>
                    <td style={tdSmall}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>5.4 한 페이지 운영 원칙</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                ["일관성", "모든 팀의 전략은 새 사회계약의 권리 언어로 다시 써야 한다."],
                ["상위 기조", "디지털팀은 각 팀의 세부 정책을 대신하지 않는다. 방향, 기준, 금지선, 핵심 질문을 정한다."],
                ["한국의 위치", "한국은 미·중 경쟁의 하청이 아니라 정체성 사회 전환을 먼저 설계하는 중간자다."],
                ["실행 단위", "세계 질서는 국가 전략으로, 국가 전략은 도시 운영으로, 도시 운영은 개인의 정체성 실현으로 검증된다."],
              ].map(([a, b], i) => (
                <div key={a} style={{ display: "grid", gridTemplateColumns: "86px 1fr", border: `1px solid ${i === 0 ? C.accent : C.line}` }}>
                  <div style={{ background: i === 0 ? C.accent : C.navy, color: "#fff", padding: "8px 9px", fontSize: 12.5, fontWeight: 900, display: "flex", alignItems: "center" }}>{a}</div>
                  <div style={{ padding: "8px 10px", fontSize: 12, lineHeight: 1.38, color: "#222", fontWeight: i === 0 ? 700 : 500 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 10.5, color: C.accent, fontWeight: 900, letterSpacing: 1.8, minWidth: 74 }}>핵심 명제</div>
          <div style={{ fontSize: 15.8, lineHeight: 1.42, color: "#222", fontWeight: 700 }}>
            디지털팀은 미래 사업을 하나 더 만드는 팀이 아니다. <span style={{ color: C.accent, fontWeight: 900 }}>새 사회계약을 기준으로 다른 모든 팀의 세계 경영·국가 경영·도시 경영·인간 강화 전략을 정렬하는 팀</span>이다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "5px 8px", textAlign: "left", fontSize: 11.3, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "7px 8px", borderBottom: "1px solid #eee", fontSize: 11.4, lineHeight: 1.36, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 10.8, lineHeight: 1.3, color: "#333", verticalAlign: "top" };
