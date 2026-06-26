import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const h3s: React.CSSProperties = { fontSize: 16.5, fontWeight: 800, color: C.ink, margin: "4px 0 7px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

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
    label: "정치 표현",
    industrial: "정당과 대표자가 개인의 이해를 포괄적으로 대변",
    change: "에이전트가 개인 의사를 왜곡하거나 일부 집단을 배제하지 않게 함",
    newOrder: "개인 의사의 정확한 대리 보장",
  },
  {
    label: "공동체 연결",
    industrial: "학교·회사·복지 제도에 개인을 배치",
    change: "생애 요구를 어느 공동체가 맡을지 정하고 연결 경로를 만듦",
    newOrder: "개인 요구와 공동체 역할 연결",
  },
  {
    label: "접근 보장",
    industrial: "표준 교육·고용·복지를 평균 기준으로 제공",
    change: "지역·소득·기술 격차로 필요한 기능에서 배제되지 않게 함",
    newOrder: "필요한 공동체 기능 접근 보장",
  },
  {
    label: "역할 조정",
    industrial: "중앙정부가 법·예산·제도로 일괄 조정",
    change: "기능이 겹치거나 비는 영역을 도시·국가가 조정",
    newOrder: "역할 배분과 책임 공백 조정",
  },
  {
    label: "균형 형성",
    industrial: "다수결·대표성·절차적 합법성 중심",
    change: "서로 다른 이해관계가 한쪽으로 쏠리지 않도록 합의 절차를 설계",
    newOrder: "조정·합의·균형을 만드는 의사결정",
  },
];

const contractResponsibilities = [
  { title: "생활 조건의 보장", detail: "가정·이웃·마을의 발견·실험·훈련 기능을 누구나 이용할 수 있도록 건강·돌봄·학습·주거의 기본 조건을 보장한다." },
  { title: "생산 인프라의 공정한 이용 보장", detail: "AI·데이터·컴퓨팅·시장 연결을 공정하게 이용해 정체성이 일·소득·기여로 이어질 조건을 보장한다." },
  { title: "조정 질서의 공정성 보장", detail: "개인의 생애 요구와 공동체 역할의 연결, 접근 보장, 역할 배분이 일방적으로 왜곡되지 않게 한다." },
];

function CausalSpine({ rows }: { rows: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
      {rows.map((r, i) => {
        const isLast = i === rows.length - 1;
        return (
          <div key={r.k} style={{ display: "grid", gridTemplateColumns: "88px 1fr", gap: 10, alignItems: "stretch", flex: 1 }}>
            {/* 번호 + 레이블 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* 번호 박스 */}
                <div style={{
                  minWidth: 32, height: 32, borderRadius: 4,
                  background: isLast ? C.ink : "#fff",
                  border: `1.5px solid ${C.ink}`,
                  color: isLast ? "#fff" : C.ink,
                  fontSize: 16, fontWeight: 950,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  letterSpacing: -0.5,
                }}>{i + 1}</div>
                {/* 레이블 */}
                <div style={{ fontSize: 11.4, color: isLast ? C.navy : C.muted, fontWeight: isLast ? 900 : 700, lineHeight: 1.15, letterSpacing: 0.2 }}>{r.k}</div>
              </div>
              {/* 연결선 */}
              {!isLast && (
                <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", paddingLeft: 15, marginTop: 2 }}>
                  <div style={{ width: 2, height: "100%", minHeight: 18, background: C.line, opacity: 1 }} />
                </div>
              )}
            </div>
            {/* 내용 카드 */}
            <div style={{ padding: "8px 11px", background: isLast ? `${C.navy}06` : "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 3 }}>
              <div style={{ fontSize: 13.2, color: isLast ? C.navy : C.ink, fontWeight: 850, lineHeight: 1.22, marginBottom: 3 }}>{r.t}</div>
              <div style={{ fontSize: 11.4, color: C.body, lineHeight: 1.36, fontWeight: 500 }}>{r.d}</div>
            </div>
          </div>
        );
      })}
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
  const th: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 10, fontWeight: 800, letterSpacing: 0.5, padding: "5px 9px", textAlign: "left", lineHeight: 1.2, borderBottom: `1px solid ${C.cardBorder}` };
  const tdLabel: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 12, fontWeight: 900, padding: "6px 9px", textAlign: "center", whiteSpace: "nowrap", verticalAlign: "middle", borderRight: `1px solid ${C.cardBorder}` };
  const KEY_ROLE = "정체성 기반 생산 주도자";
  const keyHeadline: React.CSSProperties = {
    color: C.accent,
    display: "inline",
  };
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
          return (
            <tr key={row.label} style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
              <td style={tdLabel}>{row.label}</td>
              <td style={{ padding: "6px 9px", verticalAlign: "top", borderRight: `1px solid ${C.cardBorder}` }}>
                <div style={{ fontSize: 12.3, fontWeight: 800, color: C.navySoft, lineHeight: 1.18, marginBottom: 2 }}>{row.industrial.headline === KEY_ROLE ? <span style={keyHeadline}>{row.industrial.headline}</span> : row.industrial.headline}</div>
                <div style={{ fontSize: 10.5, fontWeight: 500, color: C.muted, lineHeight: 1.28 }}>{row.industrial.detail}</div>
              </td>
              <td style={{ padding: "6px 9px", verticalAlign: "top", borderLeft: `1px solid ${C.cardBorder}` }}>
                <div style={{ fontSize: 12.3, fontWeight: 800, color: C.navy, lineHeight: 1.18, marginBottom: 2 }}>{row.digital.headline === KEY_ROLE ? <span style={keyHeadline}>{row.digital.headline}</span> : row.digital.headline}</div>
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
  const th: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 10, fontWeight: 800, letterSpacing: 0.5, padding: "5px 8px", textAlign: "left", lineHeight: 1.2, borderBottom: `1px solid ${C.cardBorder}` };
  const tdLabel: React.CSSProperties = { background: "#fff", color: C.navy, fontSize: 12, fontWeight: 900, padding: "6px 9px", textAlign: "center", whiteSpace: "normal", wordBreak: "keep-all", verticalAlign: "middle", lineHeight: 1.15, borderRight: `1px solid ${C.cardBorder}` };
  return (
    <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
      <colgroup><col style={{ width: 104 }} /><col style={{ width: "46%" }} /><col style={{ width: "46%" }} /></colgroup>
      <thead>
        <tr>
          <th style={th}>기능</th>
          <th style={th}>산업화 시대</th>
          <th style={th}>디지털 시대</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
            <td style={tdLabel}>{row.label}</td>
            <td style={{ padding: "6px 9px", verticalAlign: "top", borderRight: `1px solid ${C.cardBorder}` }}>
              <div style={{ fontSize: 12.3, fontWeight: 700, color: C.navySoft, lineHeight: 1.2 }}>{row.industrial}</div>
            </td>
            <td style={{ padding: "6px 9px", verticalAlign: "top", borderLeft: `1px solid ${C.cardBorder}` }}>
              <div style={{ fontSize: 12.3, fontWeight: 800, color: C.navy, lineHeight: 1.18, marginBottom: 2 }}>{row.newOrder}</div>
              <div style={{ fontSize: 10.5, fontWeight: 500, color: C.muted, lineHeight: 1.28 }}>{row.change}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CombinedPage() {
  const econSpine = [
    { k: "이전 질서", t: "분업의 경제", d: "자본·공장·조직·유통망을 가진 주체가 생산을 설계하고, 개인은 표준 직무에 배치" },
    { k: "변화", t: "AI가 실행비용을 낮춤", d: "개인은 기획·제작·분석·유통 능력을 얻고, 표준 직무 밖에서도 생산자가 될 수 있음" },
    { k: "새 질서", t: "정체성이 일·소득·기여로 전환", d: "4계층의 위치가 재배치되고, 고유 기여를 만드는 사람이 생산질서의 중심이 됨" },
  ];
  const polSpine = [
    { k: "이전 질서", t: "대의 민주주의", d: "정당과 대표자가 개인의 이해를 포괄적으로 대변하고, 국가는 표준 제도에 배치" },
    { k: "변화", t: "정체성·이해관계의 분화", d: "개인 에이전트가 정체성·생애 요구·이해관계를 지속적으로 표현" },
    { k: "필요한 체계", t: "연결·보장·조정", d: "생애 요구와 공동체 역할을 연결하고, 접근을 보장하며, 충돌을 조정" },
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
              <div style={{ padding: "7px 12px", background: "#fff", borderRadius: 2, fontSize: 12.0, lineHeight: 1.38, color: C.ink, fontWeight: 600 }}>
                도시는 정체성이 실제 기여로 발휘되는 장이다. 경제질서는 발견·실험·훈련을 거친 정체성이 도시·시장·플랫폼과 연결되어 일·소득·기여로 전환되는 구조를 만든다. <span style={{ color: C.muted, fontWeight: 600 }}>에릭 브린욜프슨은 AI가 개인 생산성을 끌어올린다고 보고, 다니엘 서스킨드는 AI가 일·소득·삶의 의미를 재설계하게 만든다고 본다.</span>
              </div>
              <div style={{ flex: 1 }}>
                <EconTable rows={econClassRows} />
              </div>
            </div>
          </SectionGrid>
        </div>

        <div style={{ marginTop: 4 }}>
          <div style={h3s}>3.2 정치질서 — 사회계약을 구현하는 연결·보장·조정 체계</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
              <div style={{ padding: "7px 12px", background: "#fff", borderRadius: 2, fontSize: 12.0, lineHeight: 1.38, color: C.ink, fontWeight: 600 }}>
                산업화 시대에는 정당과 대표자가 개인의 이해를 포괄적으로 대변하고, 국가는 표준 교육·고용·복지를 제공했다. 디지털 시대에는 개인 에이전트가 정체성·생애 요구·이해관계를 지속적으로 표현하고, 정치는 개인의 요구를 공동체 역할과 연결하며 접근을 보장하고 충돌을 조정해야 한다. <span style={{ color: C.muted, fontWeight: 600 }}>엘리너 오스트롬은 공동체가 지속적으로 작동하려면 명확한 규칙, 참여, 감시, 분쟁 해결 절차가 함께 설계되어야 한다고 보았다.</span>
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
