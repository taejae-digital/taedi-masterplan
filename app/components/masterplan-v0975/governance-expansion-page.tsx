import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const chain = [
  ["P3의 결론", "디지털 시대 새 사회계약은 정체성 실현의 자유를 보장해야 한다."],
  ["권리의 언어", "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권, 시민 직접 위임 거버넌스가 필요하다."],
  ["경영의 언어", "권리는 선언으로 끝나지 않고 국가·도시·세계공동체의 운영 원칙으로 번역되어야 한다."],
  ["판단 기준", "각 영역은 개인의 발견·훈련·실현을 실제로 가능하게 하는가로 평가한다."],
];

const managementRows = [
  {
    area: "국가 경영",
    p3: "국가는 산업시대처럼 통제와 표준화의 중심이 아니라 다양성·안전망·공공 인프라의 큰 틀을 맡는다.",
    principle: "정체성 실현을 국가 운영의 기준으로 둔다. 교육·산업·복지·데이터·AI 인프라를 개인의 발견·훈련·실현 경로로 연결한다.",
    action: "공공 AI 인프라, 데이터 주권, 디지털 배당, 새 권리의 법제화를 묶어 격차가 계층으로 굳어지지 않게 한다.",
    test: "부처별 사업인가, 아니면 개인의 전환 경로를 보장하는 국가 운영 체계인가.",
  },
  {
    area: "도시 경영",
    p3: "정체성 실현권은 생활 단위에서 검증된다. 가정·이웃·마을·도시가 발견·훈련·실현의 순환을 만들어야 한다.",
    principle: "도시는 개발 프로젝트가 아니라 정체성 실현 환경이어야 한다. 일·학습·주거·문화·돌봄을 한 생활권 안에서 연결한다.",
    action: "시산학 매칭 생태계, 강소도시 네트워크, 도시 구독, 시민 참여 플랫폼을 통해 개인이 자기 경로를 실험하고 기여하게 한다.",
    test: "건물과 인프라를 늘리는가, 아니면 정체성 발견·훈련·실현이 반복되는 생활 운영체계를 만드는가.",
  },
  {
    area: "세계공동체 경영",
    p3: "빅테크·플랫폼·AI 규칙은 국경 밖에서 작동한다. 시민 직접 위임 거버넌스는 도시와 국가를 넘어 세계공동체로 확장되어야 한다.",
    principle: "세계공동체는 강대국 질서의 보조 장치가 아니라 디지털 권리와 AI 안전을 공동 검증하는 다층 거버넌스여야 한다.",
    action: "국제 연구 표준, AI 안전 네트워크, 데이터·알고리즘 검증 규칙, 시민 직접 위임 구조를 연결해 새 사회계약의 국제 언어를 만든다.",
    test: "외교 이벤트인가, 아니면 정체성 실현권과 AI 인프라 접근권을 세계 규범으로 확장하는가.",
  },
];

const rights = [
  ["정체성 실현권", "국가", "교육·산업·복지를 개인의 발견·훈련·실현 경로로 재설계"],
  ["정체성 실현권", "도시", "일·학습·주거·문화·돌봄이 연결된 생활 운영체계 구축"],
  ["AI 인프라 평등 접근권", "국가", "공공 AI·데이터·컴퓨팅을 기본 인프라로 보장"],
  ["AI 개인화권", "도시·가정", "추천·판단·매칭을 설명받고 거부하고 조정할 수 있는 생활권 설계"],
  ["시민 직접 위임 거버넌스", "세계공동체", "플랫폼·AI 규칙을 시민·도시·국가가 공동 검증하는 구조"],
];

const questions = [
  ["국가", "이 정책은 성장률이나 산업 육성만 말하는가, 아니면 정체성 실현의 자유를 보장하는가."],
  ["도시", "이 도시는 개발사업인가, 아니면 개인이 자기 경로를 발견하고 훈련하고 실현하는가."],
  ["세계공동체", "이 국제협력은 외교 행사인가, 아니면 디지털 권리와 AI 안전의 공동 규칙을 만드는가."],
  ["공통", "권리가 선언에 머무는가, 아니면 데이터·AI·제도·생활환경으로 작동하는가."],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 원칙" version={VERSION} />

      <div style={{ padding: "9px 32px 6px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 12.4, color: "#222", lineHeight: 1.42, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>P3의 결론은 새 권리의 선언이 아니라 운영 원칙의 출발점이다.</strong> 정체성 실현의 자유를 보장하려면 국가·도시·세계공동체 경영은 통제·개발·외교 행사를 넘어 개인의 발견·훈련·실현을 가능하게 하는 구조로 재편되어야 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <div>
          <div style={h3s}>4.1 P3 결론이 P4 경영 원칙으로 바뀌는 흐름</div>
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
          <div style={h3s}>4.2 국가·도시·세계공동체 경영 원칙</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "13%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "26%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "14%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={th}>영역</th>
                <th style={th}>P3에서 온 결론</th>
                <th style={th}>경영 원칙</th>
                <th style={th}>해야 할 일</th>
                <th style={th}>판단 기준</th>
              </tr>
            </thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 11.4 }}>{r.area}</td>
                  <td style={td}>{r.p3}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.principle}</td>
                  <td style={td}>{r.action}</td>
                  <td style={{ ...td, fontSize: 10.05, lineHeight: 1.25 }}>{r.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 10, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>4.3 권리별 운영 원칙</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "29%" }} />
                <col style={{ width: "17%" }} />
                <col style={{ width: "54%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={thSmall}>새 권리</th>
                  <th style={thSmall}>작동 영역</th>
                  <th style={thSmall}>운영 원칙</th>
                </tr>
              </thead>
              <tbody>
                {rights.map(([a, b, c], i) => (
                  <tr key={`${a}-${b}`} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ ...tdSmall, color: C.navy, fontWeight: 900 }}>{a}</td>
                    <td style={{ ...tdSmall, color: C.accent, fontWeight: 900 }}>{b}</td>
                    <td style={tdSmall}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>4.4 적용 질문</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {questions.map(([a, b], i) => (
                <div key={a} style={{ display: "grid", gridTemplateColumns: "74px 1fr", border: `1px solid ${i === 3 ? C.accent : C.line}` }}>
                  <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "7px 8px", fontSize: 11.2, fontWeight: 900, display: "flex", alignItems: "center" }}>{a}</div>
                  <div style={{ padding: "7px 9px", fontSize: 10.55, lineHeight: 1.3, color: "#222", fontWeight: i === 3 ? 700 : 500 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "9px 15px", display: "flex", alignItems: "center", gap: 13 }}>
          <div style={{ fontSize: 10.2, color: C.accent, fontWeight: 900, letterSpacing: 1.6, minWidth: 70 }}>핵심 명제</div>
          <div style={{ fontSize: 15.2, lineHeight: 1.35, color: "#222", fontWeight: 700 }}>
            디지털 시대의 경영은 더 많이 통제하는 일이 아니다. <span style={{ color: C.accent, fontWeight: 900 }}>국가·도시·세계공동체가 개인의 정체성 실현을 가능하게 만드는 운영 원칙을 갖추는 것</span>이다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 10.25, borderRight: "1px solid rgba(255,255,255,0.18)" };
const thSmall: React.CSSProperties = { padding: "4px 7px", textAlign: "left", fontSize: 10.6, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "5px 6px", borderBottom: "1px solid #eee", fontSize: 10.1, lineHeight: 1.25, color: "#333", verticalAlign: "top" };
const tdSmall: React.CSSProperties = { padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.25, lineHeight: 1.28, color: "#333", verticalAlign: "top" };
