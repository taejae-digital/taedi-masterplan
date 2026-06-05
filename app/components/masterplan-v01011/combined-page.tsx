import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

type EconEraRow = { label: string; agri: string; industrial: string; digital: string };
type PolRow = { dim: string; industrial: string; digital: string; state: string };

const econEraRows: EconEraRow[] = [
  {
    label: "생산수단",
    agri: "토지 — 토지 소유가 생산과 생존을 좌우",
    industrial: "자본·기계·공장 — 공장·설비·분업이 대량생산을 가능하게 함",
    digital: "AI·데이터·컴퓨팅·정체성 — 기술 인프라와 무엇을 만들지 정하는 정체성이 결합",
  },
  {
    label: "시장 조건",
    agri: "지역 공동체 안의 생존·자급 중심 생산",
    industrial: "높은 생산비를 회수할 대중시장과 표준 수요 필요",
    digital: "작은 수요와 고유한 취향도 생산비 하락으로 경제성을 획득",
  },
  {
    label: "노동 형태",
    agri: "토지와 가족 단위 생산에 묶인 생계 노동",
    industrial: "조직 안의 일자리로 생산에 참여하는 임금노동·표준 직무",
    digital: "AI로 기획·제작·분석·유통을 수행하는 생산자·창작자형 노동",
  },
  {
    label: "경쟁력",
    agri: "토지 소유·노동력·기후와 지역 조건 적응",
    industrial: "자본·설비·효율·표준화·대량 유통 능력",
    digital: "정체성(잘하는 것·좋아하는 것·사회가 원하는 것)의 조기 발견과 훈련, AI 주도력",
  },
  {
    label: "위험과 조건",
    agri: "토지 소유 격차와 흉작·기후에 따른 생존 불안",
    industrial: "생산수단을 소유한 자본과 일자리에 의존하는 노동자의 격차",
    digital: "AI·데이터·컴퓨팅·플랫폼 접근이 집중되면 고유 생산영역도 독점 질서에 흡수",
  },
  {
    label: "개인 분화",
    agri: "토지 소유와 신분·가족 노동 조건에 따라 지주·자작농·소작농으로 분화",
    industrial: "자본 소유 여부, 노동 숙련도, 조직 내 권한에 따라 자본가·전문/관리 노동자·표준 노동자·주변부로 분화",
    digital: "리더: 시장 생태계 조성 / 프로: 정체성 기반 시장 주도 / 아마: 플랫폼 의존 생산 / 소외계층: 시대 적응 실패·거부에 따른 배제",
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

const contractRows = [
  {
    label: "형성 구조",
    problem: "가정이 정체성 형성의 출발선이지만 가정 자원·지역 환경에 따라 기회가 조기 분화될 위험",
    econ: "고유 생산영역으로 진입하기 전 문제의식·도메인 감각·AI 주도력을 형성",
    pol: "가정의 발견 역할을 존중하되, 교육·도시·공공 프로젝트가 부족한 노출과 해석을 보완",
    setting: "출발선은 가정이다. 교육은 가정이 놓치기 쉬운 세계 노출과 재탐색 기회를 보완한다",
  },
  {
    label: "생산 구조",
    problem: "정체성 기반 생산에 필요한 데이터·AI 모델·컴퓨팅이 플랫폼과 자본에 집중",
    econ: "AI·데이터·컴퓨팅을 토지·공장 이후의 생산수단으로 보고 접근·이동·가치배분을 설계",
    pol: "국가는 데이터 소유·활용 동의, 모델 보유자와 비보유자 간 책임·접근 기준을 설정",
    setting: "개인이 만든 데이터와 공공 연산을 새 생산수단으로 보고, 소유·접근·가치배분을 플랫폼 독점에서 분리한다",
  },
  {
    label: "시장 구조",
    problem: "고유 생산영역이 플랫폼 노출·추천·가격·수익배분 규칙에 종속",
    econ: "작은 수요와 고유 생산영역이 지속되도록 수요자와 공정하게 연결",
    pol: "플랫폼의 검색·추천·평판·AI 접근 권력을 공적 규율 대상으로 편입",
    setting: "플랫폼을 사적 장터가 아니라 사회적 연결 인프라로 규율해 작은 생산자도 수요와 만날 수 있게 한다",
  },
  {
    label: "인정 구조",
    problem: "정체성 실현이 시장 성과로만 측정되면 돌봄·학습·관계·지역 기여가 배제",
    econ: "시장 판매물뿐 아니라 돌봄, 양육, 학습 동반, 창작 공유, 공공문제 해결을 기여로 인정",
    pol: "돌봄·학습·지역 기여를 시민의 공동체 운영 참여로 인정하고 제도 안에 편입",
    setting: "가치는 판매 가능한 산출물에 한정하지 않는다. 공동체를 유지하는 돌봄·학습·관계 기여까지 인정한다",
  },
  {
    label: "조정 구조",
    problem: "데이터·플랫폼·AI 권력이 선택지를 배열하고, 실패·지연·취약성이 배제로 이어질 위험",
    econ: "생산 실패가 생존 실패로 이어지지 않도록 재탐색과 전환 비용을 사회가 분담",
    pol: "강화된 개인이 권력을 검증하고, 국가는 필수 생활 기반과 재진입 경로를 조정",
    setting: "AI 권력의 결정은 설명·이의제기·참여로 교정하고, 실패한 개인은 재진입 가능한 생활 기반을 갖는다",
  },
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

export function CombinedPage() {
  const econSpine = [
    { k: "기존 질서", t: "높은 생산비와 규모의 경제", d: "높은 생산비는 대량생산·표준화·대중시장을 요구했고, 노동자는 일자리로 생산에 참여" },
    { k: "디지털 변화", t: "표준 노동의 대체와 생산능력의 개인화", d: "AI는 실행비용을 낮추고 표준 노동을 대체하며, 개인도 기획·제작·분석·유통 능력을 확보" },
    { k: "새 질서", t: "정체성 기반 생산자 경제", d: "일자리 중심 질서는 약해지고, 각자는 정체성에 근접한 고유 생산영역으로 경쟁" },
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
          AI·데이터·컴퓨팅·플랫폼은 새 생산수단이 되고, 정체성은 무엇을 생산할지뿐 아니라 공동체에 어떻게 기여할지를 정하는 기준이 된다. 새 사회계약은 시장에서 팔리는 생산물만이 아니라 돌봄·학습·관계·지역 문제 해결 같은 비시장 기여를 인정해야 한다. 그래야 리더·프로·아마·소외계층의 분화가 새로운 계급으로 굳어지지 않는다.
        </div>

        <div>
          <div style={h3s}>3.1 경제 질서 — 규모의 경제에서 정체성 기반 생산자 경제로</div>
          <SectionGrid spine={econSpine}>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup><col style={{ width: "11%" }} /><col style={{ width: "22%" }} /><col style={{ width: "28%" }} /><col style={{ width: "39%" }} /></colgroup>
              <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>구분</th><th style={th}>농업시대</th><th style={th}>산업시대</th><th style={thMid}>디지털/AI 시대</th></tr></thead>
              <tbody>{econEraRows.map((r, i) => <tr key={r.label} style={{ background: i % 2 ? C.bg : "#fff" }}><td style={tdClass}>{r.label}</td><td style={td}>{r.agri}</td><td style={td}>{r.industrial}</td><td style={tdBlue}>{r.digital}</td></tr>)}</tbody>
            </table>
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
          <div style={h3s}>3.3 새로운 사회계약 — 정체성 실현 사회의 운영 구조</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "16%" }} /><col style={{ width: "24%" }} /><col style={{ width: "20%" }} /><col style={{ width: "20%" }} /><col style={{ width: "20%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>구조</th><th style={th}>핵심 문제</th><th style={th}>경제 질서</th><th style={th}>정치 질서</th><th style={th}>사회계약의 핵심 합의</th></tr></thead>
            <tbody>{contractRows.map((r, i) => <tr key={r.label} style={{ background: i % 2 ? C.bg : "#fff", borderTop: i === 0 ? `2px solid ${C.navy}` : undefined }}><td style={{ ...tdClass, fontSize: 11.2 }}>{r.label}</td><td style={td}>{r.problem}</td><td style={{ ...td, fontWeight: 650 }}>{r.econ}</td><td style={td}>{r.pol}</td><td style={tdBlue}>{r.setting}</td></tr>)}</tbody>
          </table>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "5px 7px", textAlign: "left", fontSize: 11.3, borderRight: "1px solid rgba(255,255,255,0.18)", verticalAlign: "middle", lineHeight: 1.18 };
const thMid: React.CSSProperties = { ...th, background: "#24395f" };
const td: React.CSSProperties = { padding: "5.8px 7px", borderBottom: "1px solid #eee", fontSize: 10.8, verticalAlign: "top", lineHeight: 1.24, color: "#333" };
const tdBlue: React.CSSProperties = { ...td, color: C.navy, fontWeight: 620 };
const tdClass: React.CSSProperties = { ...td, fontWeight: 850, color: C.navy };
