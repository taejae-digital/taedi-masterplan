import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const layers = [
  {
    title: "세계 경영",
    subtitle: "미·중 사이의 필수불가결한 중간자",
    problem: "미국 일극 패권은 약해지고 중국의 기술·경제·군사·문화 영향력은 확대된다. 한국은 일방 종속도, 항복도 아닌 제3의 위치를 만들어야 한다.",
    strategy: "반도체·배터리·디스플레이·AI 인프라를 양쪽 모두가 필요로 하는 전략 자산으로 배치한다.",
    output: "한국 주도의 기술 표준, 공급망 협상력, 디지털 권리 규범",
  },
  {
    title: "국가 경영",
    subtitle: "산업·인프라·인재·외교의 단일 배치",
    problem: "기술 자립만으로는 부족하다. 국가 역량이 부처·산업·지역별로 흩어지면 미·중 경쟁의 하청 위치에 머문다.",
    strategy: "한반도의 산업, 인프라, 인재, 외교를 정체성 사회 전환이라는 목표 아래 재배치한다.",
    output: "AI 인프라 접근권, 데이터 주권, 미래 인재 체계, 전략 산업 포트폴리오",
  },
  {
    title: "도시 경영",
    subtitle: "정체성 실현이 작동하는 생활 단위",
    problem: "국가 전략은 시민의 삶에서 작동해야 한다. 개인이 자기 정체성을 발견·훈련·실현할 무대가 없으면 전략은 구호에 그친다.",
    strategy: "시산학 강소도시를 정체성 실현의 기본 단위로 삼고, 교육·일·주거·문화·돌봄을 연결한다.",
    output: "도시별 특화 정체성, 지역 연대, 문화 주도권, 시민 참여 거버넌스",
  },
];

const chain = [
  { k: "개인", v: "정체성 발견·훈련·실현" },
  { k: "조직", v: "AI 기반 업무 재설계와 인재 성장" },
  { k: "도시", v: "시산학 매칭 생태계와 생활 인프라" },
  { k: "국가", v: "산업·외교·인재·안전망의 통합 전략" },
  { k: "세계", v: "양쪽 모두에게 필요한 전략 자산과 규범 제안" },
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 세계·국가·도시 경영으로의 확장" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 11 }}>
        <div style={{ fontSize: 12.5, color: "#222", lineHeight: 1.45, fontWeight: 600 }}>
          <strong style={{ color: C.navy }}>디지털 마스터플랜은 개인의 정체성 실현에서 출발해 도시 운영, 국가 전략, 세계 질서로 확장된다.</strong> 한국의 과제는 미국에 종속되거나 중국에 흡수되지 않는 것이다. 한국이 가진 기술·문화·지역 연대 역량을 묶어 양쪽 모두에게 필요한 위치를 만든다.
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {layers.map((l, i) => (
            <div key={l.title} style={{ border: `2px solid ${i === 0 ? C.accent : C.navy}`, background: i === 0 ? "#fff8f4" : "#fff", minHeight: 246, display: "flex", flexDirection: "column" }}>
              <div style={{ background: i === 0 ? C.accent : C.navy, color: "#fff", padding: "8px 11px" }}>
                <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: 0.2 }}>{l.title}</div>
                <div style={{ fontSize: 11.2, opacity: 0.88, marginTop: 2 }}>{l.subtitle}</div>
              </div>
              <div style={{ padding: "9px 11px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <Block label="문제" text={l.problem} />
                <Block label="전략" text={l.strategy} emph />
                <Block label="산출" text={l.output} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 13, alignItems: "stretch" }}>
          <div>
            <div style={h3s}>5.1 확장 인과 — 미시 실행이 거시 전략을 만든다</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {chain.map((c, i) => (
                <div key={c.k} style={{ display: "grid", gridTemplateColumns: "82px 1fr", alignItems: "stretch" }}>
                  <div style={{ background: i >= 3 ? C.accent : C.navy, color: "#fff", padding: "7px 10px", fontSize: 13, fontWeight: 900, display: "flex", alignItems: "center" }}>{c.k}</div>
                  <div style={{ border: `1px solid ${i >= 3 ? C.accent : C.line}`, borderLeft: "none", padding: "7px 10px", fontSize: 12.2, lineHeight: 1.35, color: "#222", fontWeight: i >= 3 ? 700 : 500 }}>{c.v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, padding: "8px 10px", background: C.bg, borderLeft: `4px solid ${C.navy}`, fontSize: 11.8, lineHeight: 1.45, color: "#222" }}>
              AI 교육, 조직 혁신, 인재 개발은 작은 실행이 아니다. 개인을 강화하는 방법론이 도시·국가·세계 전략의 하부 구조가 된다.
            </div>
          </div>

          <div>
            <div style={h3s}>5.2 한국의 위치 전략</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "26%" }}>축</th>
                  <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>방향</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["기술", "핵심 소재·제조·AI 인프라에서 대체 불가능한 전략 자산 확보"],
                  ["문화", "혐오가 아니라 매력과 표준으로 영향력 유지 — K-콘텐츠를 정체성 사회의 문화 문법으로 확장"],
                  ["지역", "동아시아·글로벌 사우스와 연결되는 중견국 연대"],
                  ["규범", "정체성 실현권·AI 인프라 평등 접근권·AI 개인화권을 국제 규율로 제안"],
                  ["협상", "미국과 중국이 모두 거부하기 어려운 딜 구조 설계"],
                ].map(([a, b], i) => (
                  <tr key={a} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", fontSize: 12, fontWeight: 900, color: C.navy, verticalAlign: "top" }}>{a}</td>
                    <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", fontSize: 11.7, lineHeight: 1.38, color: "#333", verticalAlign: "top" }}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ border: `1px solid ${C.navy}`, borderLeft: `6px solid ${C.accent}`, padding: "11px 16px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 10.5, color: C.accent, fontWeight: 900, letterSpacing: 1.8, minWidth: 74 }}>핵심 명제</div>
          <div style={{ fontSize: 16.4, lineHeight: 1.45, color: "#222", fontWeight: 700 }}>
            한국의 미래 전략은 강대국 선택지가 아니다. <span style={{ color: C.accent, fontWeight: 900 }}>개인을 강화하고, 도시를 작동시키고, 국가 역량을 배치해 세계 질서의 필수 연결점이 되는 것</span>이다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

function Block({ label, text, emph = false }: { label: string; text: string; emph?: boolean }) {
  return (
    <div>
      <div style={{ fontSize: 10.2, fontWeight: 900, color: emph ? C.accent : C.navy, letterSpacing: 1.5, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 11.4, lineHeight: 1.38, color: emph ? C.navy : "#333", fontWeight: emph ? 700 : 500 }}>{text}</div>
    </div>
  );
}
