import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

// 4컬럼 인과 표: ①산업시대 질서 → ②왜 안 되는가 → ③무슨 변화 → ④필요한 새 질서
type Row = {
  dim: string;        // "생산" / "분배" / "지출" or "입법" / "행정" / "사법"
  prev: string;       // ① 산업시대 질서
  why: string;        // ② 왜 디지털시대에 안 되는가
  shift: string;      // ③ 무슨 변화가 있었나
  next: string;       // ④ 그래서 필요한 새 질서
};

function CausalTable({ rows }: { rows: Row[] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
      <colgroup>
        <col style={{ width: "22%" }} />
        <col style={{ width: "24%" }} />
        <col style={{ width: "26%" }} />
        <col style={{ width: "28%" }} />
      </colgroup>
      <thead>
        <tr style={{ background: C.navy, color: "#fff" }}>
          <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>① 산업시대 질서</th>
          <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>② 디지털시대 변화</th>
          <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>③ 산업 질서의 균열</th>
          <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>④ 디지털시대 새 질서</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>
              <div style={{ fontWeight: 800, color: C.navy, marginBottom: 2 }}>{r.dim}</div>
              <div style={{ color: "#333" }}>{r.prev}</div>
            </td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{r.shift}</td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{r.why}</td>
            <td style={{ padding: "8px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: C.navy, fontWeight: 600 }}>{r.next}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const econRows: Row[] = [
  {
    dim: "생산",
    prev: "분업·관리 위에 노동가치설",
    why: "노동가치설 붕괴. 정형화된 분업 기술이 더는 가치를 만들지 못함",
    shift: "정보·지능의 대중화 — 인지노동 영역까지 대중화 도달. 노동시간이 가치 원천 지위를 상실",
    next: "정체성 기여가 가치를 만든다 — 정체성 실현인이 새 생산 주체",
  },
  {
    dim: "분배",
    prev: "임금 + 노동소득세 + 복지",
    why: "임금 분배 메커니즘 와해. 숙련공·관리자·직업인이 보장받던 사회적 자리 사라짐",
    shift: "노동시간 ≠ 가치 기여 — AI 인프라 보유자에 가치 집중. 참정권·사유재산권·인권 위에 짠 분배 체계 무력화",
    next: "자본·데이터 과세 + 디지털 배당 — 정체성 발견·훈련·실현 단계별 기여를 분배 근거로 인정",
  },
  {
    dim: "지출",
    prev: "표준화 대량소비 (중산층)",
    why: "표준 가격이 가치를 못 잡음. 양극화로 중산층 축소",
    shift: "한계비용 0 + 1인 맞춤 — 정체성대로 사는 삶이 표준 수요를 깨뜨림",
    next: "정체성 실현 지출 — 시산학 매칭 생태계의 강소도시 구독, 정체성별 다양한 경로",
  },
];

// 3.1 4계층 표: 4계층(리더·프로·아마추어·소외) × 시대(산업·디지털) × 차원(생산·분배·지출)
type ClassRow = {
  label: string;
  desc: string;
  industrial: { production: string; distribution: string; consumption: string };
  digital: { production: string; distribution: string; consumption: string };
};

const classRows: ClassRow[] = [
  {
    label: "리더",
    desc: "AI 오케스트레이션 · 2→7%",
    industrial: {
      production: "자본 투자·기업 설립으로 분업 체계 지휘",
      distribution: "이윤·배당 독점, 경영자 보수",
      consumption: "차별적 고급 소비, 자산 축적",
    },
    digital: {
      production: "여러 AI에 동시 위임 — 인간 협력자와 AI 도구를 묶어 팀처럼 운영",
      distribution: "AI 인프라·데이터·권한 설계권 보유로 이익 집중 (과세 대상)",
      consumption: "AI가 대신 비교·계약·관리 — 시간을 사고 능력을 빌리는 소비",
    },
  },
  {
    label: "프로",
    desc: "전문성 + AI 확장 · 53→28%",
    industrial: {
      production: "분업 숙련·관리 — 산업의 다수 중추",
      distribution: "임금 + 전문성 프리미엄, 안정 중산층",
      consumption: "표준화 대량소비 — 주택·교육·내구재",
    },
    digital: {
      production: "자기 전문 영역 + AI로 확장 영역 동시 수행 — 변호사가 회계도, 의사가 데이터 분석도",
      distribution: "전문성 프리미엄 축소(AI로 비전문가도 진입), 정체성 기여로 차별화",
      consumption: "AI 구독·도구 투자, 강소도시 맞춤 서비스",
    },
  },
  {
    label: "아마추어",
    desc: "AI로 능력 확장 · 35→60%",
    industrial: {
      production: "부업·취미 — 시장 밖 주변부",
      distribution: "보조 소득, 비공식 경제",
      consumption: "주변부·생계형 소비",
    },
    digital: {
      production: "AI로 못 하던 일을 함 — 디자인·코딩·회계·번역을 비전문가가 직접, 1인이 회사 하나 수준의 산출",
      distribution: "디지털 배당 + AI 활용 수익 (롱테일 상위만 큰 수익)",
      consumption: "AI 도구 구독, 정체성별 다양한 경로",
    },
  },
  {
    label: "소외",
    desc: "AI 접근권 부재 · 10→5%",
    industrial: {
      production: "비공식 노동·실업 — 분업 체계 밖",
      distribution: "안전망 밖, 최소 임금",
      consumption: "최소 생존 소비",
    },
    digital: {
      production: "AI 접근권 부재로 능력 확장에서 배제 — 격차 절대화",
      distribution: "안전망 + 공공 AI 접근권 보장으로 격차 차단",
      consumption: "기본 생존 + 정체성 발견·AI 활용 훈련 지원",
    },
  },
];

const polRows: Row[] = [
  {
    dim: "입법",
    prev: "국회 위임 입법 (민주주의 위에)",
    why: "국가 입법권 침식. 사람답게 존중받을 자유(인권) 위에 짠 산업시대 입법 틀로 정체성 위협 못 막음",
    shift: "정보·지능의 대중화 — 빅테크 약관·알고리즘이 사실상 입법. 강화된 개인이 직접 의제 설정 가능",
    next: "시민 직접 위임의 세계 거버넌스 — 시민·도시·세계가 빅테크 규칙을 공동 검증",
  },
  {
    dim: "행정",
    prev: "관료제 집행 (대도시·국가 단위)",
    why: "책임 귀속 공백. 국가·대도시가 집행을 독점하던 구조 깨짐",
    shift: "집행 주체의 분산 — AI 자율 시스템·플랫폼 자동화가 관료 대체. 강화된 개인이 직접 집행 능력 보유",
    next: "다양성·안전망 큰 틀의 국가 + 다층 집행 (가정·마을·도시·국가·세계) — 전자인 법인격 신설",
  },
  {
    dim: "사법",
    prev: "법원 판단 (인권·재산권 보호)",
    why: "사법 적용 한계. 알고리즘 판단·AI 책임 귀속 사각지대",
    shift: "판단 주체의 자동화 — 알고리즘이 일상 분쟁(콘텐츠·신용·매칭)을 자동 판단. 정체성 차원 분쟁 새로 발생",
    next: "알고리즘 결정 설명·거부권 + AI 보조 시민 직접 검증 — 정체성 실현권 보호의 사법 인프라",
  },
];

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version={VERSION} />

      <div style={{ padding: "6px 32px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>

        {/* 3.1 경제 질서 */}
        <div>
          <div style={h3s}>3.1 경제 질서 — 노동이 만들던 가치를 정체성이 만든다</div>
          <div style={{ fontSize: 10.8, color: "#222", lineHeight: 1.38, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 경제는 노동가치설 위에 섰다.</strong> 디지털시대는 <strong>AI가 능력을 확장</strong>한다 — 디자인·코딩·회계·번역을 비전문가가 직접 한다. 가치는 노동 시간에서 <strong>정체성 기여</strong>로 옮겨가고, 같은 4계층(리더·프로·아마추어·소외)이 산업시대와 디지털시대에 <strong>역할과 비중이 달라진다</strong>.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "14.83%" }} />
              <col style={{ width: "14.83%" }} />
              <col style={{ width: "14.84%" }} />
              <col style={{ width: "14.83%" }} />
              <col style={{ width: "14.83%" }} />
              <col style={{ width: "14.84%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th rowSpan={2} style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8, borderRight: "1px solid rgba(255,255,255,0.2)", verticalAlign: "middle" }}>계층</th>
                <th colSpan={3} style={{ padding: "4px 7px", textAlign: "center", fontSize: 11.2, borderBottom: "1px solid rgba(255,255,255,0.3)", borderRight: "1px solid rgba(255,255,255,0.2)" }}>산업시대</th>
                <th colSpan={3} style={{ padding: "4px 7px", textAlign: "center", fontSize: 11.2, borderBottom: "1px solid rgba(255,255,255,0.3)", background: C.accent }}>디지털시대</th>
              </tr>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5 }}>생산</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5 }}>분배</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5, borderRight: "1px solid rgba(255,255,255,0.2)" }}>지출</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5, background: C.accent }}>생산</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5, background: C.accent }}>분배</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.5, background: C.accent }}>지출</th>
              </tr>
            </thead>
            <tbody>
              {classRows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11.2, verticalAlign: "top", lineHeight: 1.3 }}>
                    <div style={{ fontWeight: 800, color: C.navy }}>{r.label}</div>
                    <div style={{ fontSize: 9.8, color: "#666", marginTop: 1 }}>{r.desc}</div>
                  </td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: "#444" }}>{r.industrial.production}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: "#444" }}>{r.industrial.distribution}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: "#444", borderRight: `2px solid ${C.navy}` }}>{r.industrial.consumption}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: C.navy, fontWeight: 500 }}>{r.digital.production}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: C.navy, fontWeight: 500 }}>{r.digital.distribution}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.2, verticalAlign: "top", lineHeight: 1.32, color: C.navy, fontWeight: 500 }}>{r.digital.consumption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3.2 정치 질서 */}
        <div>
          <div style={h3s}>3.2 정치 질서 — 국가가 독점하던 권한을 강화된 개인과 도시·세계가 나눠 쥔다</div>
          <div style={{ fontSize: 10.8, color: "#222", lineHeight: 1.38, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 정치는 개인이 약해서 국가에 권한을 위임했다.</strong> 디지털시대는 <strong>정보·지능의 대중화</strong>로 강화된 개인이 입법·행정·사법 권한을 직접 행사할 능력을 갖춘다. 국가가 독점하던 권한이 강화된 개인·빅테크·도시·세계로 분산되어 <strong>정체성 기반 세계 거버넌스</strong>로 간다.
          </div>
          <CausalTable rows={polRows} />
        </div>

        {/* 3.3 새로운 사회계약 — 5컬럼 권리 매트릭스 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 정체성 실현이 가능한 다층 사회</div>
          <div style={{ fontSize: 10.8, color: "#222", lineHeight: 1.38, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 사회계약</strong>(인권·참정권·사유재산권)이 <strong>사람답게 존중받을 자유</strong>를 보장했다면, <strong style={{ color: C.navy }}>디지털시대 사회계약</strong>은 <strong>정체성 실현의 자유</strong>를 보장한다.
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "18%" }} />
              <col style={{ width: "26%" }} />
              <col style={{ width: "16%" }} />
              <col style={{ width: "26%" }} />
              <col style={{ width: "14%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>새 권리</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>핵심 정의</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>작동하는 공동체 (P2)</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>경제·정치 차원 (P3)</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8 }}>국제 협력</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "A. 정체성 실현권",
                  def: "직업·소속에 묶이지 않을 권리. 정체성을 스스로 설계하고 발견·훈련·실현 단계별 기여를 인정받을 권리. 알고리즘 결정 설명·거부권 포함",
                  community: "가정 (발견) → 이웃·마을 (훈련) → 강소도시 (실현)",
                  econPol: "정체성 기여를 분배 근거로 인정 (디지털 배당) · 알고리즘 결정 설명·거부권",
                  intl: "LawZero — 정체성·AI 안전 국제 연구 표준",
                },
                {
                  label: "B. AI 인프라 평등 접근권",
                  def: "AI·연산·데이터의 공공재화. 데이터 주권·이동권. 인프라 접근 격차가 곧 계층 격차가 되지 않도록 보장",
                  community: "강소도시 (인프라 제공) + 국가 (다양성·안전망 큰 틀)",
                  econPol: "자본·데이터 과세로 공공재화 · AI 인프라 다층 통제",
                  intl: "EU AI Act / International AI Safety Network",
                },
                {
                  label: "C. 시민 직접 위임 거버넌스권",
                  def: "산업시대 위임제(국가 독점)를 넘어 가정~세계 6단계가 단계별로 권한을 행사하고 한시적으로 위임하는 권리. 해소되면 자동 환수",
                  community: "가정~세계 6단계 전체 (단계별 위임)",
                  econPol: "디지털 배당의 다층 분담 · 전자인 법인격 + 다층 입법·행정·사법",
                  intl: "민주국가 연합 집단 행동 · 핵 레짐 비핵 중견국형 균형추",
                },
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 11.2, verticalAlign: "top", lineHeight: 1.35, fontWeight: 800, color: C.navy }}>{r.label}</td>
                  <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 10.6, verticalAlign: "top", lineHeight: 1.36, color: "#222" }}>{r.def}</td>
                  <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 10.6, verticalAlign: "top", lineHeight: 1.36, color: "#333", fontWeight: 600 }}>{r.community}</td>
                  <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 10.6, verticalAlign: "top", lineHeight: 1.36, color: "#333" }}>{r.econPol}</td>
                  <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontSize: 10.4, verticalAlign: "top", lineHeight: 1.35, color: "#333" }}>{r.intl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
