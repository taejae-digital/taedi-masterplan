import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

type EconRow = { label: string; industrial: string; digital: string; issue: string };
type PolRow = { dim: string; industrial: string; digital: string; state: string };

const meansRows = [
  { age: "농업시대", means: "토지", logic: "땅의 소유가 생산과 권력을 좌우" },
  { age: "산업시대", means: "자본·기계", logic: "공장·설비·분업이 대중시장을 전제" },
  { age: "AI시대", means: "AI·데이터·컴퓨팅", logic: "실행비용 하락이 작은 수요의 경제성을 만듦" },
];

const econRows: EconRow[] = [
  {
    label: "생산 조건",
    industrial: "공장·인력·유통망이 비싸 큰 자본과 규모가 필요",
    digital: "AI가 기획·코딩·디자인·영상·운영 비용을 낮춤",
    issue: "아이디어가 있어도 AI·데이터·컴퓨팅 접근이 막히면 진입 불가",
  },
  {
    label: "시장 조건",
    industrial: "100만 명 이상 대중시장을 겨냥해야 수익이 성립",
    digital: "1천 명·100명 단위의 작지만 선명한 수요도 성립 가능",
    issue: "작은 수요가 플랫폼 추천·노출·가격 정책에 종속될 위험",
  },
  {
    label: "개인의 위치",
    industrial: "기업이 만든 표준 직무에 들어가 노동시간과 숙련을 제공",
    digital: "자기 문제의식·도메인 감각으로 생산영역을 직접 창출",
    issue: "정체성을 발견하지 못한 개인은 표준 일자리도 자기 시장도 잃을 수 있음",
  },
  {
    label: "경쟁력",
    industrial: "자본·설비·효율·표준 기술이 경쟁력",
    digital: "무엇을 만들지 정하는 기준, 도메인 감각, AI 지휘력이 경쟁력",
    issue: "생산비 하락만으로 다양성은 보장되지 않으며 독점 질서로 재흡수 가능",
  },
];

const polRows: PolRow[] = [
  {
    dim: "국가 독점",
    industrial: "국가가 법·예산·정보·행정 집행을 중심적으로 보유",
    digital: "정보·전문성·집행 능력이 개인·도시·플랫폼·AI로 분산",
    state: "국가는 모든 권한을 회수하지 않고 분산 권력의 기준을 설계",
  },
  {
    dim: "개인 권력",
    industrial: "약한 개인은 대표·정당·관료제에 장기 위임",
    digital: "AI로 정책 이해·데이터 분석·의제 제안·권력 검증 능력 확보",
    state: "사안별 참여·위임·회수와 시민 검증 절차를 보장",
  },
  {
    dim: "데이터 권력",
    industrial: "국가는 표준 행정 데이터로 평균 국민을 파악",
    digital: "건강·학습·이동·관계·관심 데이터가 선택지·기회·평판을 배열",
    state: "데이터 소유·접근·이동·활용 동의와 공적 검증 기준을 설정",
  },
  {
    dim: "플랫폼 권력",
    industrial: "기업은 상품·서비스를 팔고 국가는 사후 규율",
    digital: "플랫폼은 검색·추천·가격·신용·평판·AI 접근으로 생활 규칙을 만듦",
    state: "알고리즘 감사, 설명·거부권, 플랫폼 책임과 공정 접근을 보장",
  },
];

const rightsRows = [
  {
    label: "정체성 발견권",
    def: "다양한 세계를 접하고 자기 강점·관심·문제의식·도메인 감각을 발견할 기회",
    econ: "표준 직업 밖에서 자기 생산영역을 찾는 출발점",
    pol: "가정 자원에 따른 세계 노출·해석 격차를 공적으로 완화",
    contract: "교육 — 정답 전달보다 노출·해석·동반·연결 인프라",
  },
  {
    label: "AI·데이터 접근권",
    def: "AI 도구·공공 데이터·컴퓨팅·학습 자원에 접근하고 이동·활용할 권리",
    econ: "아이디어를 제품·콘텐츠·서비스로 실험할 최소 생산수단",
    pol: "데이터와 알고리즘 권력을 시민이 이해·검증할 수 있는 조건",
    contract: "도구 — 개인이 플랫폼 하청이 아니라 생산 주체가 되게 함",
  },
  {
    label: "시장·플랫폼 접근권",
    def: "검색·추천·유통·수익배분·생산물 권리에서 공정하게 수요자와 연결될 권리",
    econ: "작은 수요가 경제성을 갖고 고유 생산영역으로 지속",
    pol: "플랫폼의 노출·가격·평판 권력을 공적 규율 대상으로 편입",
    contract: "시장 — 다양성이 독점 질서에 재흡수되지 않게 함",
  },
  {
    label: "협업공동체 접근권",
    def: "정체성·신뢰·목표가 맞는 사람과 프로젝트를 구성하고 함께 일할 기회",
    econ: "AI가 실행을 맡을수록 사람은 문제 발견·설득·연결·공동 목표에 집중",
    pol: "도시·마을 단위 프로젝트와 시민 직접 참여를 결합",
    contract: "공동체 — 고립된 1인 에이전트가 아니라 함께 만드는 생산망",
  },
  {
    label: "필수 기술 접근권",
    def: "의료·교육·돌봄처럼 생존을 좌우하는 고도 기술이 계층 특권이 되지 않을 권리",
    econ: "기술 가능성이 소득에 따라 닫히면 생산조건의 격차가 생존 격차로 확대",
    pol: "국가가 공공 급여·가격·우선순위·안전성 검증을 조정",
    contract: "안전망 — 가능성의 기술을 일부 계층의 특권으로 두지 않음",
  },
];

function CausalSpine({ rows }: { rows: Array<{ k: string; t: string; d: string }> }) {
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

export function CombinedPage() {
  const econSpine = [
    { k: "기존 질서", t: "규모의 경제", d: "생산비가 높아 큰 자본·큰 조직·큰 시장이 필요" },
    { k: "디지털 변화", t: "AI가 실행비용을 낮춤", d: "기획·제작·운영 비용이 낮아져 작은 수요도 경제성을 가짐" },
    { k: "새 질서", t: "고유 생산영역의 경제", d: "정체성은 꿈이 아니라 무엇을 만들지 정하는 기준" },
  ];
  const polSpine = [
    { k: "기존 권력", t: "강한 국가와 약한 개인", d: "정보·전문성·집행 능력의 부족 때문에 시민은 장기 위임" },
    { k: "디지털 변화", t: "강화된 개인과 데이터 권력", d: "AI가 개인 능력을 키우고 데이터가 선택지·기회·평판을 배열" },
    { k: "새 질서", t: "분산 권력의 조정", d: "국가는 독점자가 아니라 권한·책임·검증의 설계자로 이동" },
  ];

  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version={VERSION} />

      <div style={{ padding: "11px 38px 13px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
        <div style={{ padding: "8px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, fontSize: 13.2, lineHeight: 1.28, color: "#222", fontWeight: 610 }}>
          AI는 실행비용을 낮춰 개인이 고유한 생산영역을 만들 가능성을 연다. 그러나 그 가능성은 자동으로 다양성의 경제가 되지 않는다. 데이터·컴퓨팅·플랫폼 권력이 집중되면 개인의 생산영역은 다시 독점 질서에 흡수된다. 새 사회계약의 쟁점은 일자리 보장이 아니라, 발견·도구·시장·공동체·필수 기술에 접근할 기본 세팅이다.
        </div>

        <div>
          <div style={h3s}>3.1 경제 질서 — 생산비 하락과 고유 생산영역의 경제</div>
          <SectionGrid spine={econSpine}>
            <div style={{ display: "grid", gridTemplateColumns: "32% 68%", gap: 9 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>시대</th><th style={th}>생산수단</th></tr></thead>
                <tbody>{meansRows.map((r, i) => <tr key={r.age} style={{ background: i === 2 ? "#e9efff" : i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.age}</td><td style={tdBlue}><b>{r.means}</b><br/><span style={{ color: "#333", fontWeight: 520 }}>{r.logic}</span></td></tr>)}</tbody>
              </table>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "16%" }} /><col style={{ width: "27%" }} /><col style={{ width: "31%" }} /><col style={{ width: "26%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>쟁점</th><th style={th}>산업시대</th><th style={thMid}>디지털시대</th><th style={thMid}>위험과 조건</th></tr></thead>
                <tbody>{econRows.map((r, i) => <tr key={r.label} style={{ background: i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.label}</td><td style={td}>{r.industrial}</td><td style={tdBlue}>{r.digital}</td><td style={td}>{r.issue}</td></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div>
          <div style={h3s}>3.2 정치 질서 — 국가 독점에서 분산 권력의 조정으로</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                {[
                  { k: "국가 독점", t: "약화", d: "법·예산·정보·집행 권한이 국가 밖으로 분산" },
                  { k: "개인 권력", t: "강화", d: "AI로 이해·분석·참여·검증 능력 확보" },
                  { k: "데이터 권력", t: "부상", d: "플랫폼·AI가 선택지·기회·평판을 배열" },
                ].map((r) => (
                  <div key={r.k} style={{ padding: "5px 7px", background: "#f3f6fb", borderLeft: `3px solid ${C.navy}` }}>
                    <div style={{ fontSize: 10, color: C.accent, fontWeight: 900, letterSpacing: "0.02em", marginBottom: 1 }}>{r.k}</div>
                    <div style={{ fontSize: 12.3, color: C.navy, fontWeight: 900, lineHeight: 1.05, marginBottom: 2 }}>{r.t}</div>
                    <div style={{ fontSize: 10.5, color: "#333", lineHeight: 1.15, fontWeight: 600 }}>{r.d}</div>
                  </div>
                ))}
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup><col style={{ width: "14%" }} /><col style={{ width: "27%" }} /><col style={{ width: "30%" }} /><col style={{ width: "29%" }} /></colgroup>
                <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>차원</th><th style={th}>산업시대 권력</th><th style={thMid}>디지털시대 권력 이동</th><th style={thMid}>국가가 조정할 것</th></tr></thead>
                <tbody>{polRows.map((r, i) => <tr key={r.dim} style={{ background: i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.dim}</td><td style={td}>{r.industrial}</td><td style={tdBlue}>{r.digital}</td><td style={td}>{r.state}</td></tr>)}</tbody>
              </table>
            </div>
          </SectionGrid>
        </div>

        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 표준 일자리 이후의 기본 세팅</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "17%" }} /><col style={{ width: "25%" }} /><col style={{ width: "20%" }} /><col style={{ width: "20%" }} /><col style={{ width: "18%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>권리 구조</th><th style={th}>핵심 정의</th><th style={th}>경제 질서</th><th style={th}>정치 질서</th><th style={th}>사회계약의 구현</th></tr></thead>
            <tbody>{rightsRows.map((r, i) => <tr key={r.label} style={{ background: i === 0 ? "#e9efff" : i % 2 ? C.bg : "#fff", borderTop: i === 0 ? `2px solid ${C.navy}` : undefined }}><td style={{ ...tdClass, fontSize: 12.2 }}>{r.label}</td><td style={td}>{r.def}</td><td style={{ ...td, fontWeight: 650 }}>{r.econ}</td><td style={td}>{r.pol}</td><td style={tdBlue}>{r.contract}</td></tr>)}</tbody>
          </table>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "6px 8px", textAlign: "left", fontSize: 11.9, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.18 };
const thMid: React.CSSProperties = { ...th, background: "#24395f" };
const td: React.CSSProperties = { padding: "6px 8px", borderBottom: "1px solid #eee", fontSize: 11.45, verticalAlign: "top", lineHeight: 1.24, color: "#333" };
const tdBlue: React.CSSProperties = { ...td, color: C.navy, fontWeight: 620 };
const tdClass: React.CSSProperties = { ...td, fontWeight: 850, color: C.navy };
