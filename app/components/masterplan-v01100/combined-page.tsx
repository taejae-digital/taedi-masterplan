import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const h3s: React.CSSProperties = { fontSize: 16.5, fontWeight: 800, color: C.navy, margin: "8px 0 7px", paddingBottom: 4, borderBottom: `2px solid ${C.navy}` };

type EconCell = { headline: string; detail: string };
type EconClassRow = { label: string; industrial: EconCell; digital: EconCell };
type PolTransitionRow = { label: string; industrial: string; change: string; newOrder: string };

const econClassRows: EconClassRow[] = [
  {
    label: "리더",
    industrial: { headline: "정체성 기반 생산 주도자", detail: "자본·공장·조직·유통망을 통제하며 대량생산 체계와 표준 시장을 설계" },
    digital: { headline: "생태계 조정자", detail: "AI·데이터·플랫폼·시장 규칙을 설계하며 개인 생산자들이 연결되는 생태계를 장악" },
  },
  {
    label: "프로",
    industrial: { headline: "숙련된 핵심 인력", detail: "표준 직무 안에서 숙련도·전문성·관리 권한으로 경쟁" },
    digital: { headline: "정체성 기반 생산 주도자", detail: "고유 생산영역을 만들고 AI로 기획·제작·분석·유통을 수행" },
  },
  {
    label: "아마",
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
    label: "개인",
    industrial: "표준 국민·투표자·노동자로 평균 규칙을 수용",
    change: "AI로 정책 이해·제안·검증 능력이 커지고 필요가 세분화",
    newOrder: "필요를 의제로 만들고 사안별 권한을 위임·회수",
  },
  {
    label: "도시",
    industrial: "국가 정책 집행 단위, 서울 중심 표준 경로",
    change: "산업·교육·돌봄·규제 수요가 지역마다 달라짐",
    newOrder: "생활정치와 생산 조건을 실험·조정",
  },
  {
    label: "국가",
    industrial: "법·세금·교육·산업정책을 중앙에서 설계",
    change: "지역 문제와 초국가 문제를 혼자 처리하기 어려워짐",
    newOrder: "도시 격차를 조정하고 세계 규칙을 국내 질서와 연결",
  },
  {
    label: "세계정부",
    industrial: "국가 간 외교·조약으로 국경 밖 문제를 사후 조정",
    change: "AI·데이터·플랫폼·안보가 국경을 넘어 작동",
    newOrder: "국가 밖 권력에 공통 규칙을 설정",
  },
  {
    label: "플랫폼·데이터",
    industrial: "민간 서비스나 시장 보조 인프라로 취급",
    change: "알고리즘이 노출·평판·가격·기회·인정을 배열",
    newOrder: "도시와 세계정부가 감시·조정할 권력 인프라",
  },
];

const contractResponsibilities = [
  { title: "생활 조건의 보장", detail: "학습·건강·돌봄·주거의 기본 조건이 개인의 정체성 기반 생산을 뒷받침하게 한다." },
  { title: "생산 인프라의 공정한 이용 보장", detail: "AI·데이터·컴퓨팅의 이용 조건이 소수 플랫폼과 조직의 가격·허락·통제에 종속되지 않게 한다." },
  { title: "조정 질서의 공정성 보장", detail: "플랫폼·조직·국가가 개인의 생산 가능성과 참여 조건을 일방적으로 제한하지 못하게 한다." },
];

function CausalSpine({ rows }: { rows: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, height: "100%" }}> 
      {rows.map((r, i) => (
        <div key={r.k} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 10, alignItems: "stretch", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 7, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
              <div style={{ width: 25, height: 25, borderRadius: 14, background: i === rows.length - 1 ? C.navy : "#fff", border: `2px solid ${C.navy}`, color: i === rows.length - 1 ? "#fff" : C.navy, fontSize: 13, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
              {i < rows.length - 1 && <div style={{ flex: 1, width: 2, background: C.navy, opacity: 0.45, marginTop: 3 }} />}
            </div>
            <div style={{ paddingTop: 4, fontSize: 12.0, color: C.accent, fontWeight: 900, lineHeight: 1.14 }}>{r.k}</div>
          </div>
          <div style={{ padding: "9px 11px", background: i === rows.length - 1 ? C.accentSoft : i === 1 ? C.leadBlue : "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 6 }}>
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

function EconTableCell({ cell, blue = false }: { cell: EconCell; blue?: boolean }) {
  const isTransferredRole = cell.headline === "정체성 기반 생산 주도자";
  return (
    <td style={isTransferredRole ? tdEconTransfer : blue ? tdEconBlue : tdEcon}>
      <div style={econHeadline}>{cell.headline}</div>
      <div style={econDetail}>- {cell.detail}</div>
    </td>
  );
}

export function CombinedPage() {
  const econSpine = [
    { k: "기존 질서", t: "높은 생산비와 규모의 경제", d: "높은 생산비는 대량생산·표준화·대중시장을 요구했고, 노동자는 일자리로 생산에 참여" },
    { k: "디지털 변화", t: "표준 노동의 대체와 생산능력의 개인화", d: "AI는 실행비용을 낮추고 표준 노동을 대체하며, 개인도 기획·제작·분석·유통 능력을 확보" },
    { k: "새 질서", t: "정체성 기반 생산자 경제", d: "일자리 중심 질서는 약해지고, 각자는 정체성에 근접한 고유한 기여 영역으로 경쟁" },
  ];
  const polSpine = [
    { k: "기존 질서", t: "국가가 하나의 기준으로 관리", d: "개인은 국민·투표자·노동자로 묶이고, 교육·산업·복지는 중앙 기준에 맞춰 설계" },
    { k: "디지털 변화", t: "개인의 필요와 도시 조건이 다양해짐", d: "AI로 정책을 이해·검증하는 개인이 늘고, 도시마다 교육·돌봄·산업·규제 조건이 달라짐" },
    { k: "새 질서", t: "도시는 실행, 세계정부는 공통 규칙", d: "도시는 생활정치를 실험하고, 세계정부는 AI·데이터·플랫폼 규칙을 세우며, 국가는 연결·조정" },
  ];


  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version={VERSION} />

      <div style={{ padding: "8px 40px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 8 }}> 
        <div style={{ padding: "10px 18px 9px", borderBottom: `3px solid ${C.navy}`, marginBottom: 2 }}>
          <div style={{ fontSize: 19.5, color: C.navy, lineHeight: 1.26, fontWeight: 900, letterSpacing: -0.4 }}>
            디지털 시대에는 경제의 생산 주체가 개인으로 내려오고, 정치의 조정 권한은 도시와 세계정부로 재배치된다.
          </div>
          <div style={{ marginTop: 6, fontSize: 13.2, color: C.body, lineHeight: 1.5, fontWeight: 540 }}>
            AI·데이터·컴퓨팅은 표준 노동을 대체하고 개인의 생산능력을 키운다. 동시에 플랫폼과 알고리즘 권력은 국가 안팎으로 확장된다. 새 사회계약은 이 전환 속에서 개인의 정체성이 고유한 기여로 인정될 기본 여건을 보장한다.
          </div>
        </div>
        <div>
          <div style={h3s}>3.1 경제 질서 — 규모의 경제에서 정체성 기반 생산자 경제로</div>
          <SectionGrid spine={econSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}> 
              <div style={{ padding: "8px 12px", background: C.leadBlue, borderLeft: `3px solid ${C.accent}`, borderRadius: 5, fontSize: 12.3, lineHeight: 1.42, color: C.ink, fontWeight: 600 }}>
                산업시대에는 목적 설정과 생산 주도권이 리더에게 집중되었지만, 디지털 시대에는 프로가 정체성을 바탕으로 직접 생산을 주도하고 리더는 생산자 생태계를 조정한다.
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "13%" }} /><col style={{ width: "40%" }} /><col style={{ width: "47%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>구분</th><th style={th}>산업시대: 일자리 중심 분화</th><th style={thMid}>디지털 시대: 정체성 기반 생산자 분화</th></tr></thead>
                <tbody>{econClassRows.map((r, i) => <tr key={r.label} style={{ height: 42, background: i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.label}</td><EconTableCell cell={r.industrial} /><EconTableCell cell={r.digital} blue /></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div style={{ marginTop: 4 }}>
          <div style={h3s}>3.2 정치 질서 — 국가 독점에서 도시와 세계정부로</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
              <div style={{ padding: "8px 12px", background: C.leadBlue, borderLeft: `3px solid ${C.accent}`, borderRadius: 5, fontSize: 12.3, lineHeight: 1.42, color: C.ink, fontWeight: 600 }}>
                산업시대 정치는 국가가 하나의 기준으로 국민을 대표·관리하는 구조였다. 디지털 시대에는 개인의 필요가 다양해지고, 교육·돌봄·산업·규제의 조건도 도시마다 달라진다. 그래서 생활정치와 실행은 도시가 맡고, AI·데이터·플랫폼처럼 국경을 넘는 권력에는 세계정부가 공통 규칙을 세운다.
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "13%" }} /><col style={{ width: "26%" }} /><col style={{ width: "28%" }} /><col style={{ width: "33%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th32}>구분</th><th style={th32}>산업시대 정치질서</th><th style={th32Mid}>디지털시대 변화</th><th style={th32Mid}>새 정치질서의 역할</th></tr></thead>
                <tbody>{polTransitionRows.map((r, i) => <tr key={r.label} style={{ height: 37, background: i % 2 ? C.bg : "#fff" }}><td style={td32Label}>{r.label}</td><td style={td32}>{r.industrial}</td><td style={td32Blue}>{r.change}</td><td style={td32Strong}>{r.newOrder}</td></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 생산자 경제와 새 정치질서의 작동 조건</div>
          <div style={{ display: "grid", gridTemplateColumns: "39% 61%", gap: 12, alignItems: "stretch" }}>
            <div style={{ background: C.navy, color: "#fff", padding: "14px 18px", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.75, marginBottom: 8, letterSpacing: 1 }}>핵심 선언</div>
              <div style={{ fontSize: 22, lineHeight: 1.28, fontWeight: 850 }}>
                개인이 정체성을 발휘할 기본 여건을 보장한다.
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 7, justifyContent: "center" }}>
              <div style={{ fontSize: 13, lineHeight: 1.2, color: C.accent, fontWeight: 800, marginBottom: 3, letterSpacing: 0.5 }}>핵심 합의</div>
              {contractResponsibilities.map((r) => (
                <div key={r.title} style={{ display: "grid", gridTemplateColumns: "186px 1fr", alignItems: "stretch", border: `1px solid ${C.cardBorder}`, borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ background: C.accentSoft, color: C.navy, padding: "10px 12px", fontSize: 12.8, lineHeight: 1.22, fontWeight: 800, display: "flex", alignItems: "center", borderRight: `1px solid ${C.cardBorder}` }}>{r.title}</div>
                  <div style={{ padding: "10px 14px", fontSize: 13.5, lineHeight: 1.32, color: C.ink, fontWeight: 600 }}>{r.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer omitted on dense P3 to avoid spilling into an extra blank page. */}
    </div>
  );
}

const th: React.CSSProperties = { padding: "8px 10px", textAlign: "left", fontSize: 13, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.2 };
const thMid: React.CSSProperties = { ...th, background: "#1e3154" };
const td: React.CSSProperties = { padding: "8px 10px", borderBottom: `1px solid ${C.hairline}`, fontSize: 12, verticalAlign: "top", lineHeight: 1.35, color: C.body };
const tdEcon: React.CSSProperties = { ...td, padding: "8px 10px", fontSize: 12, lineHeight: 1.32 };
const tdEconBlue: React.CSSProperties = { ...tdEcon, color: C.navy, fontWeight: 620 };
const tdEconTransfer: React.CSSProperties = { ...tdEcon, background: "#e6edff" };
const econHeadline: React.CSSProperties = { fontSize: 13, lineHeight: 1.2, fontWeight: 800, color: C.navy, marginBottom: 4 };
const econDetail: React.CSSProperties = { fontSize: 11.3, lineHeight: 1.32, fontWeight: 500, color: C.body };
const tdBlue: React.CSSProperties = { ...td, color: C.navy, fontWeight: 620 };
const tdClass: React.CSSProperties = { ...td, fontWeight: 850, color: C.navy };

const th32: React.CSSProperties = { padding: "8px 10px", textAlign: "left", fontSize: 13, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.2 };
const th32Mid: React.CSSProperties = { ...th32, background: "#1e3154" };
const td32: React.CSSProperties = { padding: "8px 10px", borderBottom: `1px solid ${C.hairline}`, fontSize: 12, verticalAlign: "middle", lineHeight: 1.32, color: C.body };
const td32Blue: React.CSSProperties = { ...td32, color: C.navy, fontWeight: 620 };
const td32Strong: React.CSSProperties = { ...td32, color: C.navy, fontWeight: 720 };
const td32Label: React.CSSProperties = { ...td32, fontWeight: 800, color: C.navy, fontSize: 12.5 };

const th33: React.CSSProperties = { padding: "3px 6px", textAlign: "left", fontSize: 11.7, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.08 };
const td33: React.CSSProperties = { padding: "2px 6px", borderBottom: "1px solid #eee", fontSize: 10.85, verticalAlign: "middle", lineHeight: 1.12, color: "#333", height: 31 };
const td33Inner: React.CSSProperties = { height: "3.54em", lineHeight: 1.18, overflow: "hidden", display: "flex", alignItems: "center" };
const td33Blue: React.CSSProperties = { ...td33, color: C.navy, fontWeight: 620 };
const td33Strong: React.CSSProperties = { ...td33, color: C.navy, fontWeight: 780 };
const td33Label: React.CSSProperties = { ...td33, fontWeight: 850, color: C.navy, fontSize: 11.2, textAlign: "left", paddingLeft: 5, paddingRight: 5 };
