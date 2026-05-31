import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const logic = [
  ["개인 변화", "AI가 정보·지능을 대중화한다", "개인은 정해진 직업보다 자기 정체성을 먼저 발견한다"],
  ["질서 붕괴", "노동가치설·국가 단위 통제·표준 소비가 흔들린다", "경제·정치 질서는 개인화와 연결을 감당해야 한다"],
  ["새 사회계약", "세 권리와 시민 직접 위임 거버넌스가 필요하다", "권리 없는 기술 전환은 격차와 플랫폼 지배로 끝난다"],
  ["팀별 전략", "각 경영팀은 이 사회계약을 자기 영역의 운영 원리로 번역한다", "디지털팀은 실행 과제가 아니라 상위 기조를 제공한다"],
];

const strategies = [
  {
    area: "세계 경영 전략",
    team: "미·중 관계팀",
    start: "디지털 권력은 국경을 넘어 플랫폼·AI 인프라·데이터 체계로 작동한다. 미국 선택 또는 중국 거부만으로는 한국의 미래 위치가 생기지 않는다.",
    contract: "AI 인프라 평등 접근권과 AI 개인화권을 국제 규범으로 제안해야 한다. AI 접근과 개인화 통제권이 강대국·빅테크의 독점물이 되면 새 사회계약은 국내 제도 안에 갇힌다.",
    strategy: "한국은 반도체·배터리·디스플레이·AI 인프라를 협상 자산으로 묶고, 양쪽 모두가 거부하기 어려운 중간자 규범을 설계한다.",
    standard: "미·중 중 어느 편에 섰는가가 아니라, 한국의 새 사회계약을 국제 질서의 필수 조건으로 만들었는가.",
  },
  {
    area: "국가 경영 전략",
    team: "국가 경영팀",
    start: "정체성 사회에서는 산업정책, 교육정책, 복지정책, 외교정책이 따로 움직이면 개인의 전환 경로가 끊긴다.",
    contract: "정체성 실현권은 국가가 개인의 발견·훈련·실현 과정을 제도적으로 보장해야 한다는 뜻이다. AI 인프라 평등 접근권은 공공 AI·데이터·컴퓨팅을 국가 기본 인프라로 둔다는 뜻이다.",
    strategy: "산업·인프라·인재·외교를 하나의 목표 아래 배치한다. 목표는 성장률 자체가 아니라 정체성 기반 생산, AI 접근 보장, 데이터 주권, 안전망을 함께 만드는 것이다.",
    standard: "정책 묶음이 부처별 사업 나열로 끝나는가, 아니면 개인이 정체성을 발견하고 AI로 실현하는 국가 운영 체계가 되는가.",
  },
  {
    area: "도시 경영 전략",
    team: "도시 경영팀",
    start: "새 사회계약은 생활 단위에서 검증된다. 국가가 권리를 선언해도 도시 안에서 교육·일·주거·문화·돌봄이 연결되지 않으면 개인은 실제로 전환하지 못한다.",
    contract: "정체성 실현권은 도시에서 시산학 매칭 생태계로 구현된다. 시민 직접 위임 거버넌스는 도시 규칙과 플랫폼 운영을 시민이 검증하는 구조로 내려와야 한다.",
    strategy: "강소도시를 정체성 실현 환경으로 설계한다. 도시마다 다른 산업·문화·대학·커뮤니티를 묶어 개인이 자기 경로를 선택하고 훈련하고 기여하게 한다.",
    standard: "도시가 개발 프로젝트인가, 아니면 정체성 발견·훈련·실현이 반복되는 생활 운영체계인가.",
  },
  {
    area: "스마트 휴먼 전략",
    team: "스마트 휴먼팀",
    start: "AI가 능력을 확장하면 사람의 경쟁력은 지식 보유량이 아니라 질문·판단·위임·통합 능력으로 이동한다.",
    contract: "AI 개인화권은 개인이 AI의 추천과 판단을 설명받고 조정할 수 있어야 한다는 뜻이다. AI 인프라 평등 접근권은 강화된 개인이 일부 엘리트만의 특권이 되지 않게 한다는 뜻이다.",
    strategy: "AI 교육, 조직 혁신, 인재 개발을 하나로 묶어 개인이 AI를 도구로 쓰는 수준을 넘어 자기 정체성을 실현하는 능력을 갖게 한다.",
    standard: "AI 활용 교육인가, 아니면 강화된 개인을 만드는 사회 전환 장치인가.",
  },
];

const rights = [
  ["정체성 실현권", "개인 변화의 결론", "국가·도시는 개인의 발견·훈련·실현 경로를 실제 제도와 생활 환경으로 보장해야 한다"],
  ["AI 인프라 평등 접근권", "격차 방지의 조건", "AI·데이터·컴퓨팅 접근권이 없으면 새 4계층은 신분 질서로 굳어진다"],
  ["AI 개인화권", "강화된 개인의 통제권", "개인은 AI의 추천·판단·설계를 설명받고 거부하고 자기 목적에 맞게 조정해야 한다"],
  ["시민 직접 위임 거버넌스", "권력 분산의 운영 방식", "국가·도시·플랫폼·세계 규칙을 시민이 직접 검증하고 위임하는 구조가 필요하다"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 팀별 경영 전략 — 새 사회계약의 적용" version={VERSION} />

      <div style={{ padding: "9px 32px 6px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 12.2, color: "#222", lineHeight: 1.42, fontWeight: 600 }}>
          <strong style={{ color: C.navy }}>디지털팀은 다른 팀의 실행을 대신하지 않는다.</strong> 디지털팀은 개인 변화, 질서 붕괴, 새 사회계약을 하나의 논리로 묶고, 그 논리를 세계 경영·국가 경영·도시 경영·스마트 휴먼 전략의 상위 기준으로 제공한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 왜 팀별 전략이 이렇게 나와야 하는가</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {logic.map(([k, a, b], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.5, fontWeight: 900 }}>{i + 1}. {k}</div>
                <div style={{ padding: "6px 8px" }}>
                  <div style={{ fontSize: 11.1, lineHeight: 1.28, color: C.navy, fontWeight: 800, marginBottom: 3 }}>{a}</div>
                  <div style={{ fontSize: 10.4, lineHeight: 1.3, color: "#333" }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 팀별 경영 전략 — 새 사회계약의 번역</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "13%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "27%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>전략 축</th>
                <th style={th}>출발 논리</th>
                <th style={th}>새 사회계약과의 연결</th>
                <th style={th}>그래서 해야 할 전략</th>
                <th style={th}>판단 기준</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900 }}>
                    <div style={{ fontSize: 11.7 }}>{r.area}</div>
                    <div style={{ fontSize: 9.6, color: "#666", marginTop: 2, fontWeight: 700 }}>{r.team}</div>
                  </td>
                  <td style={td}>{r.start}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.contract}</td>
                  <td style={td}>{r.strategy}</td>
                  <td style={{ ...td, fontSize: 10.2, lineHeight: 1.28 }}>{r.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>4.3 권리 언어가 전략 언어로 바뀌는 방식</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "27%" }} />
                <col style={{ width: "24%" }} />
                <col style={{ width: "49%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={thSmall}>권리·거버넌스</th>
                  <th style={thSmall}>논리상 위치</th>
                  <th style={thSmall}>전략으로 바뀌면</th>
                </tr>
              </thead>
              <tbody>
                {rights.map(([a, b, c], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 900 }}>{a}</td>
                    <td style={tdSmall}>{b}</td>
                    <td style={tdSmall}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>4.4 디지털팀의 검수 질문</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                ["세계", "이 전략은 한국을 미·중 중 하나의 하위 파트너로 두는가, 아니면 양쪽 모두에게 필요한 규범·기술 중간자로 두는가."],
                ["국가", "이 전략은 산업·교육·복지·외교를 따로 나열하는가, 아니면 정체성 실현과 AI 접근 보장을 하나의 국가 운영 원리로 묶는가."],
                ["도시", "이 전략은 개발사업인가, 아니면 개인의 정체성 발견·훈련·실현이 반복되는 생활 단위인가."],
                ["인간", "이 전략은 AI 도구 교육인가, 아니면 개인이 AI를 통제하고 자기 목적에 맞게 쓰는 강화 체계인가."],
              ].map(([a, b], i) => (
                <div key={a} style={{ display: "grid", gridTemplateColumns: "64px 1fr", border: `1px solid ${i === 0 ? C.accent : C.line}` }}>
                  <div style={{ background: i === 0 ? C.accent : C.navy, color: "#fff", padding: "7px 8px", fontSize: 11.6, fontWeight: 900, display: "flex", alignItems: "center" }}>{a}</div>
                  <div style={{ padding: "7px 9px", fontSize: 10.9, lineHeight: 1.32, color: "#222", fontWeight: i === 0 ? 700 : 500 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "9px 15px", display: "flex", alignItems: "center", gap: 13 }}>
          <div style={{ fontSize: 10.2, color: C.accent, fontWeight: 900, letterSpacing: 1.6, minWidth: 70 }}>핵심 명제</div>
          <div style={{ fontSize: 15.3, lineHeight: 1.38, color: "#222", fontWeight: 700 }}>
            개인 변화가 질서 붕괴를 만들고, 질서 붕괴가 새 사회계약을 요구한다. <span style={{ color: C.accent, fontWeight: 900 }}>팀별 경영 전략은 이 사회계약을 세계·국가·도시·인간 강화의 운영 원리로 번역한 결과</span>여야 한다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 10.4, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.6, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "5px 6px", borderBottom: "1px solid #eee", fontSize: 10.25, lineHeight: 1.27, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.25, lineHeight: 1.28, color: "#333", verticalAlign: "top" };
