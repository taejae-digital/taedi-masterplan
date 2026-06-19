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
    industrial: "국민·투표자·노동자로 중앙 규칙을 수용",
    change: "AI로 판단·생산·표현 능력이 커지고 정체성 기반 필요가 세분화",
    newOrder: "자기 필요를 의제로 만들고 정책·플랫폼 결정에 참여·이의제기",
  },
  {
    label: "도시",
    industrial: "국가 정책의 집행 단위, 중앙 기준의 지역 적용",
    change: "학습·생산·관계·돌봄·규제 조건이 도시마다 달라짐",
    newOrder: "정체성 기반 삶과 생산을 실험하는 생활정치 단위",
  },
  {
    label: "국가",
    industrial: "법·세금·교육·산업정책을 중앙에서 설계",
    change: "평균 규칙만으로 개인 필요와 도시 분화를 담기 어려워짐",
    newOrder: "기본권·안전망·도시 격차와 세계규칙의 국내 적용을 조정",
  },
  {
    label: "세계정부",
    industrial: "국가 간 외교·조약으로 국경 밖 문제를 사후 조정",
    change: "AI·데이터·플랫폼·안보 위험이 국경을 넘어 작동",
    newOrder: "승인·감사·제재 권한을 가진 공통 규칙으로 기술 권력을 조정",
  },
  {
    label: "플랫폼·알고리즘",
    industrial: "민간 서비스나 시장 보조 인프라로 취급",
    change: "알고리즘이 노출·평판·가격·기회·인정을 배열",
    newOrder: "도시 현장에서 검증되고 국가·세계정부가 감사·제재할 권력 인프라",
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
          <th style={th}>산업시대</th>
          <th style={th}>디지털시대</th>
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
          <th style={th}>산업시대</th>
          <th style={th}>디지털시대</th>
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
    { k: "기존 질서", t: "높은 생산비와 규모의 경제", d: "높은 생산비는 대량생산·표준화·대중시장을 요구했고, 노동자는 일자리로 생산에 참여" },
    { k: "디지털 변화", t: "표준 노동의 대체와 생산능력의 개인화", d: "AI는 실행비용을 낮추고 표준 노동을 대체하며, 개인도 기획·제작·분석·유통 능력을 확보" },
    { k: "새 질서", t: "정체성 기반 생산자 경제", d: "일자리 중심 질서는 약해지고, 각자는 정체성에 근접한 고유한 기여 영역으로 경쟁" },
  ];
  const polSpine = [
    { k: "기존 질서", t: "국가가 하나의 기준으로 관리", d: "개인은 국민·투표자·노동자로 묶이고, 교육·산업·복지는 중앙 기준에 맞춰 설계" },
    { k: "디지털 변화", t: "강화된 개인의 필요가 생활권마다 달라짐", d: "AI·데이터·컴퓨팅은 판단·생산·표현 능력을 키우고, 개인은 정체성에 맞는 학습·생산·생활 조건을 요구" },
    { k: "새 질서", t: "도시는 생활정치를 실험하고, 세계정부는 기술 권력을 규칙화", d: "도시는 정체성 기반 삶과 생산을 실험하고, 세계정부는 승인·감사·제재 규칙을 세우며, 국가는 기본권·안전망·격차를 조정" },
  ];


  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" chapterNo="03" version={VERSION} />

      <div style={{ padding: "8px 48px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 6 }}> 
        <div style={{ paddingBottom: 6, borderBottom: `1px solid ${C.line}`, marginBottom: 0 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: C.ink, fontWeight: 800, marginBottom: 5 }}>질서의 전환</div>
          <div style={{ fontSize: 19, color: C.ink, lineHeight: 1.3, fontWeight: 900, letterSpacing: -0.5 }}>
            디지털 시대에는 경제의 생산 주체가 개인으로 내려오고, 정치의 조정 권한은 도시와 세계정부로 재배치된다.
          </div>
          <div style={{ marginTop: 6, fontSize: 12.8, color: C.body, lineHeight: 1.5, fontWeight: 500 }}>
            AI·데이터·컴퓨팅은 표준 노동을 대체하고 개인의 생산능력을 키운다. 동시에 플랫폼과 알고리즘 권력은 국가 안팎으로 확장된다. 새 사회계약은 이 전환 속에서 개인의 정체성이 고유한 기여로 인정될 기본 여건을 보장한다.
          </div>
        </div>
        <div>
          <div style={h3s}>3.1 경제 질서 — 규모의 경제에서 정체성 기반 생산자 경제로</div>
          <SectionGrid spine={econSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}> 
              <div style={{ padding: "7px 12px", background: "#fff", borderLeft: `3px solid ${C.ink}`, borderRadius: 2, fontSize: 12.0, lineHeight: 1.38, color: C.ink, fontWeight: 600 }}>
                산업시대에는 목적 설정과 생산 주도권이 리더에게 집중되었지만, 디지털 시대에는 프로가 정체성을 바탕으로 직접 생산을 주도하고 리더는 생산자 생태계를 조정한다. <span style={{ color: C.muted, fontWeight: 600 }}>에릭 브린욜프슨(스탠퍼드대)은 AI가 표준 업무를 대체하는 동시에 개인의 생산성을 끌어올린다고 분석한다.</span>
              </div>
              <div style={{ flex: 1 }}>
                <EconTable rows={econClassRows} />
              </div>
            </div>
          </SectionGrid>
        </div>

        <div style={{ marginTop: 4 }}>
          <div style={h3s}>3.2 정치 질서 — 국가 독점에서 도시와 세계정부로</div>
          <SectionGrid spine={polSpine}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, height: "100%" }}>
              <div style={{ padding: "7px 12px", background: "#fff", borderLeft: `3px solid ${C.ink}`, borderRadius: 2, fontSize: 11.6, lineHeight: 1.36, color: C.ink, fontWeight: 600 }}>
                디지털 시대에는 강화된 개인이 자기 정체성에 맞는 생산·학습·생활 조건을 요구하면서, 국가의 평균 규칙만으로는 정치적 필요를 담기 어려워진다. 생활정치·정책 실험은 도시로 내려가고, 국경을 넘는 기술 권력은 세계정부의 강제력 있는 공통 규칙으로 올라가며, 국가는 두 질서를 연결해 기본권·안전망·도시 간 격차를 조정한다. <span style={{ color: C.muted, fontWeight: 600 }}>대런 아세모글루(MIT)는 기술의 향방은 정해진 운명이 아니라 권력과 제도가 결정한다고 본다.</span>
              </div>
              <div style={{ flex: 1 }}>
                <PolTable rows={polTransitionRows} />
              </div>
            </div>
          </SectionGrid>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 생산자 경제와 새 정치질서의 작동 조건</div>
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

      {/* Footer omitted on dense P3 to avoid spilling into an extra blank page. */}
    </div>
  );
}
