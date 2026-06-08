import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

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
    industrial: { headline: "일자리 배제 집단", detail: "교육·숙련·일자리 접근에서 밀리거나, 기계화가 생계와 숙련의 존엄을 훼손한다고 보고 저항" },
    digital: { headline: "자기 생산영역 미형성 집단", detail: "정체성 발견·AI 생산수단·시장 연결에서 배제되거나, AI가 판단·창작·자율성·인정을 대체한다고 보고 거부" },
  },
];

const polTransitionRows: PolTransitionRow[] = [
 {
   label: "개인",
   industrial: "표준 국민·조직 구성원으로 노동·납세·투표를 수행",
   change: "AI·데이터·컴퓨팅으로 판단·생산·참여 능력이 개인에게 이전",
   newOrder: "정책 수혜자가 아니라 정체성 기반 필요를 제기하는 의제 형성자",
 },
 {
   label: "도시",
   industrial: "국가 정책을 집행하는 행정 단위, 서울 중심의 표준 경로",
   change: "정체성·산업·규제·교육·문화가 도시별로 달라질 필요 확대",
   newOrder: "다양한 생산·생활 방식을 실험하는 정치의 실행 단위",
 },
 {
   label: "플랫폼/데이터",
   industrial: "시장 보조 인프라 또는 민간 서비스로 취급",
   change: "알고리즘이 노출·평판·가격·기회와 인정 가능성을 배열",
   newOrder: "설명·감사·수정 대상이 되는 새로운 정치 권력",
 },
 {
   label: "국가",
   industrial: "법·세금·교육·산업정책을 중앙에서 설계하고 배분",
   change: "개인·도시·플랫폼 권력이 커지며 국가 독점 통치가 한계에 도달",
   newOrder: "도시 간 격차, 플랫폼 권력, 기본 안전망을 조정하는 오케스트레이터",
 },
 {
   label: "세계",
   industrial: "국가 간 조약과 외교로 국경 밖 문제를 사후 조정",
   change: "AI·데이터·플랫폼·안보·환경 권력이 국경을 넘어 작동",
   newOrder: "초국가 권력의 공통 규칙을 설정하는 상위 조정 질서",
 },
 {
   label: "정치 방식",
   industrial: "대표·정당·관료제에 장기 위임하고 사후 평가",
   change: "개인이 AI로 정책 이해·제안·검증·이의제기 능력 확보",
   newOrder: "개인-도시-국가-세계가 함께 작동하는 다층 거버넌스",
 },
];

const contractExchangeRows = [
  { era: "농업시대", human: "위험 앞의 약한 개인", give: "복종·세금·무력 위임", receive: "생존 보호", freedom: "살아남을 자유" },
  { era: "산업시대", human: "교육·노동·참정권을 얻은 개인", give: "법·세금·표준 제도 수용", receive: "인간다운 삶", freedom: "평등하게 살 자유" },
  { era: "디지털/AI 시대", human: "AI로 강화된 목적 가진 개인", give: "데이터·참여·책임의 일부 위임", receive: "정체성 기반 생산 조건", freedom: "자기 생산 방향을 정할 자유" },
];

const contractRows = [
  { label: "형성", problem: "정체성이 가정 자원·지역·초기 노출 격차로 조기 분화", setting: "가정·교육·도시가 발견·훈련·전환 기회를 보완" },
  { label: "생산", problem: "AI·데이터·컴퓨팅이 플랫폼과 자본에 집중", setting: "디지털 생산수단 접근·이동·활용 조건을 보장" },
  { label: "시장", problem: "고유 생산물이 플랫폼 노출·가격·수익배분 규칙에 종속", setting: "작은 수요와 개인 생산물을 공정하게 연결" },
  { label: "인정", problem: "직함·학력·시장성과만 인정하면 돌봄·학습·지역 기여가 배제", setting: "시장 밖 기여까지 사회적 기여로 인정" },
  { label: "조정", problem: "알고리즘·공공규칙이 선택지를 배열하고 실패가 배제로 연결", setting: "설명·이의제기·수정·재진입 절차를 둔다" },
];function CausalSpine({ rows }: { rows: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {rows.map((r, i) => (
        <div key={r.k} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 8, alignItems: "stretch" }}>
          <div style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 6, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
              <div style={{ width: 25, height: 25, borderRadius: 14, background: i === rows.length - 1 ? C.navy : "#fff", border: `2px solid ${C.navy}`, color: i === rows.length - 1 ? "#fff" : C.navy, fontSize: 13, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
              {i < rows.length - 1 && <div style={{ flex: 1, width: 2, background: C.navy, opacity: 0.45, marginTop: 3 }} />}
            </div>
            <div style={{ paddingTop: 4, fontSize: 11.7, color: C.accent, fontWeight: 900, lineHeight: 1.12 }}>{r.k}</div>
          </div>
          <div style={{ padding: "8px 9px", background: i === rows.length - 1 ? "#e9efff" : i === 1 ? "#f1f5fb" : "#fff", border: "1px solid #d8deec" }}>
            <div style={{ fontSize: 13.4, color: C.navy, fontWeight: 850, lineHeight: 1.12, marginBottom: 4 }}>{r.t}</div>
            <div style={{ fontSize: 11.9, color: "#333", lineHeight: 1.22, fontWeight: 560 }}>{r.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionGrid({ children, spine }: { children: React.ReactNode; spine: Array<{ k: string; t: string; d: string }> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "28% 72%", gap: 13, alignItems: "start" }}>
      <CausalSpine rows={spine} />
      <div>{children}</div>
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
    { k: "새 질서", t: "정체성 기반 생산자 경제", d: "일자리 중심 질서는 약해지고, 각자는 정체성에 근접한 고유 생산영역으로 경쟁" },
  ];
  const polSpine = [
    { k: "기존 질서", t: "국가 독점 정치", d: "산업시대 국가는 평균 국민을 전제로 법·교육·세금·산업정책을 중앙에서 설계" },
    { k: "디지털 변화", t: "정체성 다양화와 플랫폼 권력", d: "개인의 필요는 세분화되고, 도시는 다른 규칙을 요구하며, 플랫폼은 생산·노출·인정을 좌우" },
    { k: "새 질서", t: "개인-도시-국가-세계 다층 거버넌스", d: "도시는 실행 단위, 국가는 오케스트레이터, 세계는 초국가 권력의 규칙 설정자가 됨" },
  ];

  return (
    <div style={{ pageBreakBefore: "always", minHeight: "270mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version={VERSION} />

      <div style={{ padding: "9px 38px 9px", display: "flex", flexDirection: "column", flex: 1, gap: 9 }}>
        <div style={{ padding: "8px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, fontSize: 13.2, lineHeight: 1.28, color: "#222", fontWeight: 610 }}>
          AI·데이터·컴퓨팅은 개인을 표준 조직의 부품에서 목적을 가진 생산자로 바꾼다. 새 사회계약은 국가 권력을 더 정당화하는 계약이 아니라, 강화된 개인에게 더 넓은 자유를 돌려주고 도시·세계·플랫폼 권력을 새로 배치하는 합의다.
        </div>

        <div>
          <div style={h3s}>3.1 경제 질서 — 규모의 경제에서 정체성 기반 생산자 경제로</div>
          <SectionGrid spine={econSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{ padding: "4px 8px", background: "#f3f6fb", borderLeft: `3px solid ${C.navy}`, fontSize: 10.7, lineHeight: 1.18, color: "#2b3342", fontWeight: 650 }}>
                산업시대에는 목적 설정과 생산 주도권이 리더에게 집중되었지만, 디지털/AI 시대에는 프로가 정체성을 바탕으로 직접 생산을 주도하고 리더는 생산자 생태계를 조정한다.
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "13%" }} /><col style={{ width: "40%" }} /><col style={{ width: "47%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>구분</th><th style={th}>산업시대: 일자리 중심 분화</th><th style={thMid}>디지털/AI 시대: 정체성 기반 생산자 분화</th></tr></thead>
                <tbody>{econClassRows.map((r, i) => <tr key={r.label} style={{ background: i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.label}</td><EconTableCell cell={r.industrial} /><EconTableCell cell={r.digital} blue /></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div>
          <div style={h3s}>3.2 정치 질서 — 국가 독점에서 다층 거버넌스로</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ padding: "4px 8px", background: "#f3f6fb", borderLeft: `3px solid ${C.navy}`, fontSize: 10.7, lineHeight: 1.18, color: "#2b3342", fontWeight: 650 }}>
                디지털 시대의 정치질서는 표준 국민 관리에서 벗어나, 정체성 기반 필요를 개인이 제기하고 도시가 실험하며 국가가 조정하고 세계가 공통 규칙을 세우는 다층 거버넌스로 전환된다.
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "13%" }} /><col style={{ width: "26%" }} /><col style={{ width: "28%" }} /><col style={{ width: "33%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th32}>구분</th><th style={th32}>산업시대 정치질서</th><th style={th32Mid}>디지털시대 변화</th><th style={th32Mid}>정체성 기반 정치질서</th></tr></thead>
                <tbody>{polTransitionRows.map((r, i) => <tr key={r.label} style={{ background: i % 2 ? C.bg : "#fff" }}><td style={td32Label}>{r.label}</td><td style={td32}>{r.industrial}</td><td style={td32Blue}>{r.change}</td><td style={td32Strong}>{r.newOrder}</td></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 강화된 개인에게 돌려줄 자유</div>
          <div style={{ display: "grid", gridTemplateColumns: "34% 66%", gap: 10 }}>
            <div style={{ border: `1.5px solid ${C.navy}`, background: "#fff" }}>
              <div style={{ background: C.navy, color: "#fff", padding: "6px 9px", fontSize: 11.5, fontWeight: 850 }}>사회계약의 교환</div>
              <div style={{ padding: 9, display: "flex", flexDirection: "column", gap: 7 }}>
                {contractExchangeRows.map((r, i) => (
                  <div key={r.era} style={{ borderLeft: `4px solid ${i === 2 ? C.accent : "#9aa5b8"}`, paddingLeft: 8 }}>
                    <div style={{ fontSize: 12.4, color: C.navy, fontWeight: 900 }}>{r.era}</div>
                    <div style={{ fontSize: 10.2, color: "#333", lineHeight: 1.22, marginTop: 2 }}><b>개인</b> {r.human}</div>
                    <div style={{ fontSize: 10.2, color: "#333", lineHeight: 1.22 }}><b>맡김</b> {r.give}</div>
                    <div style={{ fontSize: 10.2, color: "#333", lineHeight: 1.22 }}><b>보장</b> {r.receive}</div>
                    <div style={{ fontSize: 10.7, color: i === 2 ? C.accent : C.navy, lineHeight: 1.22, fontWeight: 850 }}>{r.freedom}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ padding: "7px 10px", background: "#eef3ff", borderLeft: `4px solid ${C.accent}`, color: C.navy, fontSize: 12.7, lineHeight: 1.25, fontWeight: 850 }}>
                새 사회계약은 “국가가 더 통제할 권리”가 아니라 “강화된 개인이 자기 정체성대로 생산하고 참여할 자유”를 정당화한다. 국가는 표준 경로를 배분하는 통치자에서 도시·세계·플랫폼·개인의 권력을 조정하는 오케스트레이터가 된다.
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "13%" }} /><col style={{ width: "42%" }} /><col style={{ width: "45%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th33}>구조</th><th style={th33}>방치하면 생기는 문제</th><th style={th33}>사회계약의 보장</th></tr></thead>
                <tbody>{contractRows.map((r, i) => <tr key={r.label} style={{ height: 34, background: i % 2 ? C.bg : "#fff", borderTop: i === 0 ? `2px solid ${C.navy}` : undefined }}><td style={td33Label}>{r.label}</td><td style={td33}>{r.problem}</td><td style={td33Blue}>{r.setting}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer omitted on dense P3 to avoid spilling into an extra blank page. */}
    </div>
  );
}

const th: React.CSSProperties = { padding: "5px 7px", textAlign: "left", fontSize: 11.3, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.18 };
const thMid: React.CSSProperties = { ...th, background: "#24395f" };
const td: React.CSSProperties = { padding: "5.8px 7px", borderBottom: "1px solid #eee", fontSize: 10.8, verticalAlign: "top", lineHeight: 1.24, color: "#333" };
const tdEcon: React.CSSProperties = { ...td, padding: "5px 7px", fontSize: 10.6, lineHeight: 1.2 };
const tdEconBlue: React.CSSProperties = { ...tdEcon, color: C.navy, fontWeight: 620 };
const tdEconTransfer: React.CSSProperties = { ...tdEcon, background: "#e6edff", borderTop: `1.5px solid ${C.accent}`, borderBottom: `1.5px solid ${C.accent}` };
const econHeadline: React.CSSProperties = { fontSize: 11.4, lineHeight: 1.12, fontWeight: 900, color: C.navy, marginBottom: 3 };
const econDetail: React.CSSProperties = { fontSize: 9.85, lineHeight: 1.18, fontWeight: 560, color: "#333" };
const tdBlue: React.CSSProperties = { ...td, color: C.navy, fontWeight: 620 };
const tdClass: React.CSSProperties = { ...td, fontWeight: 850, color: C.navy };

const th32: React.CSSProperties = { padding: "5px 6px", textAlign: "left", fontSize: 11.2, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.12 };
const th32Mid: React.CSSProperties = { ...th32, background: "#24395f" };
const td32: React.CSSProperties = { padding: "6px 6px", borderBottom: "1px solid #eee", fontSize: 10.55, verticalAlign: "middle", lineHeight: 1.2, color: "#333" };
const td32Blue: React.CSSProperties = { ...td32, color: C.navy, fontWeight: 620 };
const td32Strong: React.CSSProperties = { ...td32, color: C.navy, fontWeight: 720 };
const td32Label: React.CSSProperties = { ...td32, fontWeight: 850, color: C.navy, fontSize: 10.8 };

const th33: React.CSSProperties = { padding: "4px 6px", textAlign: "left", fontSize: 10.8, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.12 };
const td33: React.CSSProperties = { padding: "2px 6px", borderBottom: "1px solid #eee", fontSize: 9.9, verticalAlign: "middle", lineHeight: 1.18, color: "#333", height: 40 };
const td33Inner: React.CSSProperties = { height: "3.54em", lineHeight: 1.18, overflow: "hidden", display: "flex", alignItems: "center" };
const td33Blue: React.CSSProperties = { ...td33, color: C.navy, fontWeight: 620 };
const td33Label: React.CSSProperties = { ...td33, fontWeight: 850, color: C.navy, fontSize: 10.8, textAlign: "left", paddingLeft: 5, paddingRight: 5 };
