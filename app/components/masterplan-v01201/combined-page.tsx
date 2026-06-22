import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const h3s: React.CSSProperties = { fontSize: 16.5, fontWeight: 800, color: C.ink, margin: "4px 0 7px", paddingBottom: 4, borderBottom: `2px solid ${C.ink}` };

type EconCell = { headline: string; detail: string };
type EconClassRow = { label: string; industrial: EconCell; digital: EconCell };
type PolTransitionRow = { label: string; industrial: string; change: string; newOrder: string };

const econClassRows: EconClassRow[] = [
  {
    label: "리더",
    industrial: { headline: "정체성 기반 생산 주도자", detail: "자본·공장·조직·유통망을 통제하며 대량생산 체계와 표준 시장을 설계" },
    digital: { headline: "생태계 조정자", detail: "AI·데이터·플랫폼·시장 규칙을 설계하며 개인 생산자들이 연결되는 생태계의 규칙과 연결 구조를 설계" },
  },
  {
    label: "프로",
    industrial: { headline: "숙련된 핵심 인력", detail: "표준 직무 안에서 숙련도·전문성·관리 권한으로 경쟁" },
    digital: { headline: "정체성 기반 생산 주도자", detail: "고유 생산영역을 만들고 AI로 기획·제작·분석·유통을 수행" },
  },
  {
    label: "아마추어",
    industrial: { headline: "대체 가능한 단순 노동자", detail: "조직 주변부의 단순·반복 업무에 머무르며 대체 가능한 노동력으로 분류" },
    digital: { headline: "플랫폼 의존 생산자", detail: "AI와 플랫폼은 활용하지만 차별성이 약해 템플릿·추천·유통망에 의존" },
  },
  {
    label: "소외계층",
    industrial: { headline: "일자리에서 밀려난 사람들", detail: "교육·숙련·일자리 접근에서 밀리거나, 기계화가 생계와 숙련의 존엄을 훼손한다고 보고 저항" },
    digital: { headline: "자기 일을 만들지 못한 사람들", detail: "정체성 발견·AI 생산수단·시장 연결에서 배제되거나, AI가 판단·창작·자율성·인정을 대체한다고 보고 거부" },
  },
];

const polTransitionRows: PolTransitionRow[] = [
  {
    label: "개인의 지위",
    industrial: "국민·노동자·투표자로 국가 규칙을 수용",
    change: "정체성 실현에는 발견·실험·훈련·발휘·안전망·위험 관리가 단계별로 필요",
    newOrder: "생애 단계와 필요에 따라 여러 공동체에 권한을 위임하는 주체",
  },
  {
    label: "권한 위임",
    industrial: "선거를 통해 국가에 포괄 위임",
    change: "국가 하나가 개인의 세분화된 필요를 모두 대표하거나 처리하기 어려움",
    newOrder: "가정·이웃·마을·도시·국가·세계에 필요별·기능별로 권한을 나누어 위임",
  },
  {
    label: "조정 단위",
    industrial: "국민국가가 교육·고용·복지를 중앙 기준으로 조정",
    change: "공동체 기능이 생활권·도시·국가·세계로 분산",
    newOrder: "도시·국가·세계가 공동체 기능의 연결과 책임 배분을 조정",
  },
  {
    label: "핵심 기능",
    industrial: "표준 교육·고용·복지로 평균 필요를 처리",
    change: "단서 발견·실험·훈련·발휘·안전망·위험 관리가 새 정치 의제가 됨",
    newOrder: "여섯 공동체 기능이 끊기지 않도록 제도·시장·플랫폼을 연결",
  },
  {
    label: "권력 감시",
    industrial: "국가 권력 견제와 대표성 확보가 중심",
    change: "플랫폼·도시·국가·세계 규칙이 개인의 기회를 동시에 좌우",
    newOrder: "국가·플랫폼·도시·세계 규칙을 함께 감시하고 이의제기할 수 있는 구조",
  },
];

const contractResponsibilities = [
  { title: "생활 조건의 보장", detail: "가정·이웃·마을의 발견·실험·훈련 기능을 누구나 이용할 수 있도록 건강·돌봄·학습·주거의 기본 조건을 보장한다." },
  { title: "생산 인프라의 공정한 이용 보장", detail: "AI·데이터·컴퓨팅·시장 연결을 공정하게 이용해 정체성이 일·소득·기여로 이어질 조건을 보장한다." },
  { title: "조정 질서의 공정성 보장", detail: "공동체 간 권한 위임, 플랫폼 규칙, 국가·세계 조정이 개인의 기회를 일방적으로 막지 못하게 한다." },
];

function CausalSpine({ rows }: { rows: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, height: "100%" }}> 
      {rows.map((r, i) => (
        <div key={r.k} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 10, alignItems: "stretch", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 7, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
              <div style={{ width: 25, height: 25, borderRadius: 3, background: i === rows.length - 1 ? C.navy : "#fff", border: `2px solid ${C.navy}`, color: i === rows.length - 1 ? "#fff" : C.navy, fontSize: 13, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
              {i < rows.length - 1 && <div style={{ flex: 1, width: 2, background: C.navy, opacity: 0.45, marginTop: 3 }} />}
            </div>
            <div style={{ paddingTop: 4, fontSize: 12.0, color: C.ink, fontWeight: 900, lineHeight: 1.14 }}>{r.k}</div>
          </div>
          <div style={{ padding: "9px 11px", background: "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 2 }}>
            <div style={{ fontSize: 13.5, color: C.navy, fontWeight: 800, lineHeight: 1.25, marginBottom: 4 }}>{r.t}</div>
            <div style={{ fontSize: 11.8, color: C.body, lineHeight: 1.38, fontWeight: 500 }}>{r.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionGrid({ children, spine }: { children: React.ReactNode; spine: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "27.5% 72.5%", gap: 17, alignItems: "stretch" }}>
      <CausalSpine rows={spine} />
      <div style={{ height: "100%" }}>{children}</div>
    </div>
  );
}

function Arrow({ small = false }: { small?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.ink, fontSize: small ? 15 : 17, fontWeight: 900, lineHeight: 1, padding: "0 1px" }}>→</div>
  );
}

// 3.1 경제: 표 — [계층 | 산업시대 | 디지털시대]
function EconTable({ rows }: { rows: EconClassRow[] }) {
  const th: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 10, fontWeight: 800, letterSpacing: 0.5, padding: "5px 9px", textAlign: "left", lineHeight: 1.2, borderBottom: `2px solid ${C.ink}` };
  const tdLabel: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 12, fontWeight: 900, padding: "6px 9px", textAlign: "center", whiteSpace: "nowrap", verticalAlign: "middle", borderRight: `1px solid ${C.cardBorder}` };
  return (
    <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
      <colgroup><col style={{ width: 66 }} /><col style={{ width: "47%" }} /><col style={{ width: "47%" }} /></colgroup>
      <thead>
        <tr>
          <th style={th}>계층</th>
          <th style={th}>산업화 시대</th>
          <th style={th}>디지털 시대</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const isTransfer = row.digital.headline === "정체성 기반 생산 주도자";
          return (
            <tr key={row.label} style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
              <td style={tdLabel}>{row.label}</td>
              <td style={{ padding: "6px 9px", verticalAlign: "top", borderRight: `1px solid ${C.cardBorder}`, borderLeft: row.label === "리더" ? `3px solid ${C.ink}` : "none" }}>
                <div style={{ fontSize: 12.3, fontWeight: 800, color: C.navySoft, lineHeight: 1.18, marginBottom: 2 }}>{row.industrial.headline}</div>
                <div style={{ fontSize: 10.5, fontWeight: 500, color: C.muted, lineHeight: 1.28 }}>{row.industrial.detail}</div>
              </td>
              <td style={{ padding: "6px 9px", verticalAlign: "top", borderLeft: isTransfer ? `3px solid ${C.ink}` : "none" }}>
                <div style={{ fontSize: 12.3, fontWeight: 800, color: C.navy, lineHeight: 1.18, marginBottom: 2 }}>{row.digital.headline}</div>
                <div style={{ fontSize: 10.5, fontWeight: 500, color: C.body, lineHeight: 1.28 }}>{row.digital.detail}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// 3.2 정치: 표 — [주체 | 산업시대 | 디지털시대]
function PolTable({ rows }: { rows: PolTransitionRow[] }) {
  const th: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 10, fontWeight: 800, letterSpacing: 0.5, padding: "5px 8px", textAlign: "left", lineHeight: 1.2, borderBottom: `2px solid ${C.ink}` };
  const tdLabel: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 11, fontWeight: 900, padding: "5px 7px", textAlign: "center", whiteSpace: "normal", wordBreak: "keep-all", verticalAlign: "middle", lineHeight: 1.15, borderRight: `1px solid ${C.cardBorder}` };
  return (
    <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
      <colgroup><col style={{ width: 104 }} /><col style={{ width: "46%" }} /><col style={{ width: "46%" }} /></colgroup>
      <thead>
        <tr>
          <th style={th}>주체</th>
          <th style={th}>산업화 시대</th>
          <th style={th}>디지털 시대</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
            <td style={tdLabel}>{row.label}</td>
            <td style={{ padding: "5px 8px", verticalAlign: "top", borderRight: `1px solid ${C.cardBorder}` }}>
              <div style={{ fontSize: 10.8, fontWeight: 600, color: C.navySoft, lineHeight: 1.26 }}>{row.industrial}</div>
            </td>
            <td style={{ padding: "5px 8px", verticalAlign: "top", borderLeft: `3px solid ${C.ink}` }}>
              <div style={{ fontSize: 10.8, fontWeight: 700, color: C.navy, lineHeight: 1.26 }}>{row.newOrder}</div>
              <div style={{ fontSize: 9.3, fontWeight: 500, color: C.muted, lineHeight: 1.22, marginTop: 1 }}>{row.change}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CombinedPage() {
  const econSpine = [
    { k: "생활 기반", t: "정체성은 생활 속에서 형성", d: "가정·이웃·마을에서 발견·실험·훈련된 정체성이 도시에서 실제 기여로 전환" },
    { k: "경제 변화", t: "AI가 실행비용을 낮춤", d: "개인은 기획·제작·분석·유통 능력을 얻고, 표준 직무 밖에서도 생산자가 될 수 있음" },
    { k: "새 질서", t: "정체성이 일·소득·기여로 전환", d: "4계층의 위치가 재배치되고, 고유 기여를 만드는 사람이 생산질서의 중심이 됨" },
  ];
  const polSpine = [
    { k: "생활 기반", t: "필요가 여러 공동체로 분화", d: "단서 발견·실험·훈련·발휘·안전망·위험 관리를 국가 하나가 처리할 수 없음" },
    { k: "정치 변화", t: "국민국가 민주주의의 한계", d: "산업화 민주주의는 개인을 국민으로 묶어 국가에 포괄 위임하는 질서" },
    { k: "새 질서", t: "다층 공동체 거버넌스", d: "개인이 필요별로 권한을 나누어 위임하고, 도시·국가·세계가 기능과 책임을 조정" },
  ];


  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" chapterNo="03" version={VERSION} />

      <div style={{ padding: "8px 48px 2px", display: "flex", flexDirection: "column", flex: 1, gap: 5 }}> 
        <div style={{ paddingBottom: 6, borderBottom: `1px solid ${C.line}`, marginBottom: 0 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: C.ink, fontWeight: 800, marginBottom: 5 }}>질서의 전환</div>
          <div style={{ fontSize: 19, color: C.ink, lineHeight: 1.3, fontWeight: 900, letterSpacing: -0.5 }}>
            정체성 실현은 생활 공동체의 기능 변화가 생산과 권한의 질서로 이어질 때 가능하다.
          </div>
          <div style={{ marginTop: 6, fontSize: 12.8, color: C.body, lineHeight: 1.5, fontWeight: 500 }}>
            개인의 정체성은 가정에서 단서로 드러나고, 이웃에서 실험되며, 마을에서 훈련되고, 도시에서 실제 기여로 발휘된다. 국가는 그 과정의 안전망을 보장하고, 세계는 개인의 삶까지 흔드는 위험을 공동으로 관리한다. 경제질서는 이 흐름을 일·소득·기여로 연결하고, 정치질서는 여러 공동체에 나뉜 권한과 책임을 조정한다.
          </div>
        </div>
        <div>
          <div style={h3s}>3.1 경제질서 — 분업의 경제에서 다양성의 경제로</div>
          <SectionGrid spine={econSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}> 
              <div style={{ padding: "7px 12px", background: "#fff", borderLeft: `3px solid ${C.ink}`, borderRadius: 2, fontSize: 12.0, lineHeight: 1.38, color: C.ink, fontWeight: 600 }}>
                도시는 정체성이 실제 기여로 발휘되는 장이다. 경제질서는 발견·실험·훈련을 거친 정체성이 도시·시장·플랫폼과 연결되어 일·소득·기여로 전환되는 구조를 만든다. <span style={{ color: C.muted, fontWeight: 600 }}>에릭 브린욜프슨은 AI가 개인 생산성을 끌어올린다고 보고, 다니엘 서스킨드는 AI가 일·소득·삶의 의미를 재설계하게 만든다고 본다.</span>
              </div>
              <div style={{ flex: 1 }}>
                <EconTable rows={econClassRows} />
              </div>
            </div>
          </SectionGrid>
        </div>

        <div style={{ marginTop: 4 }}>
          <div style={h3s}>3.2 정치질서 — 국민국가 민주주의에서 다층 공동체 거버넌스로</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
              <div style={{ padding: "7px 12px", background: "#fff", borderLeft: `3px solid ${C.ink}`, borderRadius: 2, fontSize: 11.6, lineHeight: 1.36, color: C.ink, fontWeight: 600 }}>
                산업화 시대 민주주의가 개인을 국민으로 묶고 국가에 권한을 집중해 표준 필요를 처리했다면, 디지털 시대 정치질서는 개인이 생애 단계와 필요에 따라 여러 공동체에 권한을 나누어 위임하고, 각 공동체가 맡은 기능을 도시·국가·세계가 조정하는 다층 공동체 거버넌스가 되어야 한다. <span style={{ color: C.muted, fontWeight: 600 }}>대런 아세모글루는 기술의 향방은 정해진 운명이 아니라 권력과 제도가 결정한다고 본다.</span>
              </div>
              <div style={{ flex: 1 }}>
                <PolTable rows={polTransitionRows} />
              </div>
            </div>
          </SectionGrid>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
          <div style={h3s}>3.3 사회계약 — 경제질서와 정치질서를 작동시키는 기본 합의</div>
          <div style={{ display: "grid", gridTemplateColumns: "39% 61%", gap: 12, alignItems: "stretch" }}>
            <div style={{ background: C.teal, color: "#fff", padding: "14px 18px", borderRadius: 3, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.8, marginBottom: 8, letterSpacing: 1 }}>핵심 선언</div>
              <div style={{ fontSize: 22, lineHeight: 1.28, fontWeight: 850, color: "#fff" }}>
                개인이 정체성을 발휘할 기본 여건을 보장한다.
              </div>
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.25)" }}>
                <div style={{ fontSize: 10.5, fontWeight: 800, opacity: 0.8, letterSpacing: 1, marginBottom: 6 }}>핵심 가치</div>
                <div style={{ display: "flex", flexWrap: "nowrap", gap: 6 }}>
                  {[
                    { v: "정체성", d: "직업이 아니라 고유한 기여로 본다" },
                    { v: "개방", d: "AI·데이터·컴퓨팅을 소수가 가두지 않는다" },
                    { v: "균형", d: "욕망의 극대화가 아니라 지속가능한 조정을 택한다" },
                  ].map((c) => (
                    <div key={c.v} style={{ display: "flex", flexDirection: "column", flex: "1 1 0", minWidth: 0, background: "rgba(255,255,255,0.12)", borderRadius: 2, padding: "6px 8px" }}>
                      <span style={{ fontSize: 12.5, fontWeight: 900, letterSpacing: 0.5, color: "#fff" }}>{c.v}</span>
                      <span style={{ fontSize: 9, lineHeight: 1.28, color: "#fff", opacity: 0.85, marginTop: 1 }}>{c.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 7, justifyContent: "center" }}>
              <div style={{ fontSize: 13, lineHeight: 1.2, color: C.ink, fontWeight: 800, marginBottom: 3, letterSpacing: 0.5 }}>핵심 합의</div>
              {contractResponsibilities.map((r) => (
                <div key={r.title} style={{ display: "grid", gridTemplateColumns: "186px 1fr", alignItems: "stretch", border: `1px solid ${C.cardBorder}`, borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ background: "#fff", color: C.navy, padding: "10px 12px", fontSize: 12.8, lineHeight: 1.22, fontWeight: 800, display: "flex", alignItems: "center", borderRight: `1px solid ${C.cardBorder}` }}>{r.title}</div>
                  <div style={{ padding: "10px 14px", fontSize: 13.5, lineHeight: 1.32, color: C.ink, fontWeight: 600 }}>{r.detail}</div>
                </div>
              ))}
              <div style={{ fontSize: 11, lineHeight: 1.4, color: C.muted, fontWeight: 600, marginTop: 1 }}>
                루치아노 플로리디(예일대)는 디지털 시대의 윤리는 정보 환경 속에서 개인의 자기결정 여건을 지키는 데 있다고 본다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
