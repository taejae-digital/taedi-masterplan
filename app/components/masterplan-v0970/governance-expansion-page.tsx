import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const chain = [
  ["개인 변화", "AI가 정보·지능을 대중화하며 개인은 정해진 직업보다 자기 정체성을 먼저 발견한다."],
  ["질서 붕괴", "노동시간·국가 통제·표준 소비에 기대어 있던 산업시대 질서가 흔들린다."],
  ["새 사회계약", "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권, 시민 직접 위임 거버넌스가 필요해진다."],
  ["경영 전략", "세계·국가·도시·가정은 이 권리를 실제 운영 원리로 바꾸는 층위가 된다."],
];

const strategies = [
  {
    area: "세계 경영",
    question: "미국 일극 패권이 끝나고 중국의 기술·경제·군사·문화 영향력이 커지는 세계에서 한국은 어디에 서야 하는가.",
    contract: "새 사회계약은 한 국가 안의 권리 선언으로 끝나지 않는다. AI 인프라, 데이터, 플랫폼, 공급망의 접근권과 통제권을 국제 질서의 규범으로 만들어야 한다.",
    strategy: "한국은 미국에 완전히 종속되거나 중국에 항복하지 않는다. 반도체·배터리·디스플레이·AI 인프라를 협상 자산으로 묶고, 문화 영향력과 지역 연대를 결합해 양쪽 모두에게 필수불가결한 중간자가 된다.",
    standard: "강대국 중 하나의 하위 파트너인가, 아니면 양쪽 모두가 받아들일 수밖에 없는 기술·문화·규범의 연결점인가.",
  },
  {
    area: "국가 경영",
    question: "특히 한국은 미·중 경쟁 안에서 어떤 산업·인재·외교 배치를 해야 하는가.",
    contract: "정체성 실현권은 교육·직업·복지·산업정책을 개인의 발견·훈련·실현 경로로 묶으라는 요구다. AI 인프라 평등 접근권은 공공 AI·데이터·컴퓨팅을 국가 기본 인프라로 두라는 요구다.",
    strategy: "한반도의 산업, 인프라, 인재, 외교를 하나의 목표 아래 배치한다. 미래 산업 분야는 별도 확정안을 기준으로 두고, 각 분야를 기술 우위·데이터 주권·AI 개인화권·안전망과 연결한다.",
    standard: "산업 육성 목록인가, 아니면 한반도를 미래 질서의 필수 산업 거점으로 만드는 종합 운영 전략인가.",
  },
  {
    area: "도시 경영",
    question: "새 권리가 실제 생활에서 작동하려면 도시는 어떤 단위가 되어야 하는가.",
    contract: "도시는 정체성 실현권의 검증 장소다. 교육·일·주거·문화·돌봄이 도시 안에서 연결되지 않으면 권리는 선언으로 남는다. 시민 직접 위임 거버넌스도 도시 규칙과 플랫폼 운영에서 먼저 시험된다.",
    strategy: "도시는 개발사업이 아니라 정체성 실현 환경이어야 한다. 지역 산업, 대학, 기업, 문화, 커뮤니티를 시산학 매칭 생태계로 묶고, 시민이 자기 경로를 발견하고 훈련하고 기여하는 강소도시 네트워크를 만든다.",
    standard: "건물과 인프라를 늘리는 도시인가, 개인의 전환 경로가 반복되는 생활 운영체계인가.",
  },
  {
    area: "가정·스마트 홈",
    question: "AI가 개인의 가장 가까운 생활권에 들어올 때 가정은 어떤 운영 원리를 가져야 하는가.",
    contract: "AI 개인화권은 가정에서 가장 구체적으로 드러난다. 개인은 돌봄, 학습, 건강, 소비, 관계를 돕는 AI의 추천과 판단을 설명받고 거부하고 자기 목적에 맞게 조정할 수 있어야 한다.",
    strategy: "스마트 홈은 기기 자동화가 아니라 개인 성장과 돌봄의 운영체계가 되어야 한다. 가족 구성원의 정체성, 건강, 학습, 일상 리듬을 보호하면서 공공 AI 인프라와 연결해 격차 없는 강화 환경을 만든다.",
    standard: "편리한 집인가, 아니면 개인의 정체성 발견·건강·학습·돌봄을 지키는 생활권의 새 사회계약인가.",
  },
];

const fields = [
  ["분야 확정", "확정된 분야를 기준으로 한반도 미래 산업의 범위를 정한다"],
  ["기술 우위", "미·중 모두가 필요로 하는 대체 불가능한 기술 지점을 만든다"],
  ["공급망 위치", "소재·부품·장비·데이터 흐름에서 한국의 전략적 배치를 설계한다"],
  ["AI 인프라", "공공 AI·데이터·컴퓨팅 접근권의 물적 조건을 산업 전략과 연결한다"],
  ["인재 체계", "정체성 발견·훈련·실현 경로를 미래 산업 인재 전략으로 묶는다"],
  ["문화 영향력", "기술 우위가 생활양식과 문화 패권으로 확장되게 한다"],
  ["지역 연대", "한반도 산업 전략을 동아시아·글로벌 협상력으로 확장한다"],
];

const layers = [
  ["세계", "미·중 모두가 필요로 하는 위치적 독점과 규범 협상력"],
  ["국가", "산업·인프라·인재·외교를 하나의 목표로 묶는 종합 전략"],
  ["도시", "정체성 발견·훈련·실현이 반복되는 생활 운영체계"],
  ["가정", "AI 개인화권이 돌봄·학습·건강·관계에서 구현되는 최소 단위"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "9px 32px 6px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 12.4, color: "#222", lineHeight: 1.42, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 선언이 아니라 경영 전략이다.</strong> 세계는 한국을 필수불가결한 중간자로 배치해야 하고, 국가는 한반도 미래 산업을 하나의 목표로 묶어야 하며, 도시는 정체성 실현 환경이 되어야 하고, 가정은 AI 개인화권이 작동하는 생활 운영체계가 되어야 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 개인 변화에서 경영 전략까지</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {chain.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "5px 8px", fontSize: 11.5, fontWeight: 900 }}>{i + 1}. {k}</div>
                <div style={{ padding: "7px 8px", fontSize: 10.9, lineHeight: 1.3, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 경영 전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "19%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "29%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>층위</th>
                <th style={th}>핵심 질문</th>
                <th style={th}>새 사회계약과의 연결</th>
                <th style={th}>경영 전략</th>
                <th style={th}>판단 기준</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 11.4 }}>{r.area}</td>
                  <td style={td}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.contract}</td>
                  <td style={td}>{r.strategy}</td>
                  <td style={{ ...td, fontSize: 10.05, lineHeight: 1.25 }}>{r.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 10, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>4.3 한반도 미래 산업 — 위치적 독점의 재료</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", border: `1px solid ${C.navy}` }}>
              {fields.map(([a, b], i) => (
                <div key={a} style={{ borderRight: i === fields.length - 1 ? "none" : "1px solid #ddd", background: i % 2 ? C.bg : "#fff" }}>
                  <div style={{ background: i < 3 ? C.accent : C.navy, color: "#fff", padding: "5px 5px", fontSize: 10.2, fontWeight: 900, textAlign: "center" }}>{a}</div>
                  <div style={{ padding: "6px 6px", fontSize: 9.6, lineHeight: 1.25, color: "#333" }}>{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.4 운영 단위 — 권리가 구현되는 자리</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {layers.map(([a, b], i) => (
                <div key={a} style={{ display: "grid", gridTemplateColumns: "58px 1fr", border: `1px solid ${i === 0 ? C.accent : C.line}` }}>
                  <div style={{ background: i === 0 ? C.accent : C.navy, color: "#fff", padding: "6px 8px", fontSize: 11.2, fontWeight: 900, display: "flex", alignItems: "center" }}>{a}</div>
                  <div style={{ padding: "6px 8px", fontSize: 10.4, lineHeight: 1.27, color: "#222", fontWeight: i === 0 ? 700 : 500 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "9px 15px", display: "flex", alignItems: "center", gap: 13 }}>
          <div style={{ fontSize: 10.2, color: C.accent, fontWeight: 900, letterSpacing: 1.6, minWidth: 70 }}>핵심 명제</div>
          <div style={{ fontSize: 15.2, lineHeight: 1.35, color: "#222", fontWeight: 700 }}>
            한국의 전략은 미국 선택과 중국 항복 사이의 선택지가 아니다. <span style={{ color: C.accent, fontWeight: 900 }}>새 사회계약을 세계·국가·도시·가정의 운영 원리로 만들고, 한반도 미래 산업을 그 질서의 필수 연결점으로 세우는 것</span>이다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 10.25, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "5px 6px", borderBottom: "1px solid #eee", fontSize: 10.1, lineHeight: 1.25, color: "#333", verticalAlign: "top" };
