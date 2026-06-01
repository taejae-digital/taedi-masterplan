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
    next: "세분화된 니즈 충족이 가치를 만든다 — 정체성 실현인이 새 생산 주체",
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
    desc: "소유자 → 오케스트레이터 · 2→7%",
    industrial: {
      production: "자본으로 지휘",
      distribution: "이윤 독점",
      consumption: "자산 축적",
    },
    digital: {
      production: "AI 오케스트레이션",
      distribution: "플랫폼 이익 집중",
      consumption: "시간·능력 구매",
    },
  },
  {
    label: "프로",
    desc: "숙련자 → 증강 전문가 · 53→28%",
    industrial: {
      production: "숙련으로 생산",
      distribution: "임금 중산층",
      consumption: "표준 중산층 소비",
    },
    digital: {
      production: "AI로 전문성 확장",
      distribution: "세분화된 니즈 충족으로 차별화",
      consumption: "도구·서비스 구독",
    },
  },
  {
    label: "아마추어",
    desc: "주변부 → 생산 참여자 · 35→60%",
    industrial: {
      production: "시장 밖 취미",
      distribution: "보조 소득",
      consumption: "생계형 소비",
    },
    digital: {
      production: "AI로 생산 진입",
      distribution: "롱테일 수익",
      consumption: "정체성별 소비",
    },
  },
  {
    label: "소외",
    desc: "배제층 → 접근 보장 대상 · 10→5%",
    industrial: {
      production: "분업 밖 노동",
      distribution: "최소 안전망",
      consumption: "최소 생존",
    },
    digital: {
      production: "AI 접근 배제",
      distribution: "공공 접근 보장",
      consumption: "기본권 + 훈련 지원",
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
          <div style={{ fontSize: 11.2, color: "#222", lineHeight: 1.35, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 경제는 노동가치설 위에 섰다.</strong> 디지털시대는 <strong>AI가 능력을 확장</strong>한다 — 디자인·코딩·회계·번역을 비전문가가 직접 한다. 가치는 오래 일한 시간이 아니라 <strong>세분화된 니즈를 발견하고 여러 기능을 조합해 특정한 필요를 충족시키는 능력</strong>에서 나온다. 그래서 같은 4계층(리더·프로·아마추어·소외)도 산업시대와 디지털시대에 <strong>역할과 비중이 달라진다</strong>.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "17%" }} />
              <col style={{ width: "13.83%" }} />
              <col style={{ width: "13.83%" }} />
              <col style={{ width: "13.84%" }} />
              <col style={{ width: "13.83%" }} />
              <col style={{ width: "13.83%" }} />
              <col style={{ width: "13.84%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th rowSpan={2} style={{ padding: "4px 7px", textAlign: "left", fontSize: 10.8, borderRight: "1px solid rgba(255,255,255,0.2)", verticalAlign: "middle" }}>계층</th>
                <th colSpan={3} style={{ padding: "4px 7px", textAlign: "center", fontSize: 11.5, borderBottom: "1px solid rgba(255,255,255,0.3)", borderRight: "1px solid rgba(255,255,255,0.2)" }}>산업시대: 자본주의</th>
                <th colSpan={3} style={{ padding: "4px 7px", textAlign: "center", fontSize: 11.5, borderBottom: "1px solid rgba(255,255,255,0.3)", background: C.accent }}>디지털시대: 개인화와 연결의 경제 질서</th>
              </tr>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11 }}>생산</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11 }}>분배</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11, borderRight: "1px solid rgba(255,255,255,0.2)" }}>지출</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11, background: C.accent }}>생산</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11, background: C.accent }}>분배</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11, background: C.accent }}>지출</th>
              </tr>
            </thead>
            <tbody>
              {classRows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11.2, verticalAlign: "top", lineHeight: 1.3 }}>
                    <div style={{ fontWeight: 800, color: C.navy }}>{r.label}</div>
                    <div style={{ fontSize: 10.4, color: "#666", marginTop: 1 }}>{r.desc}</div>
                  </td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: "#444" }}>{r.industrial.production}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: "#444" }}>{r.industrial.distribution}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: "#444", borderRight: `2px solid ${C.navy}` }}>{r.industrial.consumption}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: C.navy, fontWeight: 500 }}>{r.digital.production}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: C.navy, fontWeight: 500 }}>{r.digital.distribution}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.28, color: C.navy, fontWeight: 500 }}>{r.digital.consumption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3.2 정치 질서 */}
        <div>
          <div style={h3s}>3.2 정치 질서 — 국가가 독점하던 권한을 강화된 개인과 도시·세계가 나눠 쥔다</div>
          <div style={{ fontSize: 11.2, color: "#222", lineHeight: 1.35, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 정치는 개인이 약해서 국가에 권한을 위임했다.</strong> 디지털시대는 <strong>정보·지능의 대중화</strong>로 강화된 개인이 입법·행정·사법 권한을 직접 행사할 능력을 갖춘다. 국가가 독점하던 권한이 강화된 개인·빅테크·도시·세계로 분산되어 <strong>정체성 기반 세계 거버넌스</strong>로 간다.
          </div>
          <CausalTable rows={polRows} />
        </div>

        {/* 3.3 새로운 사회계약 — 디지털 인프라에서 정체성 실현까지 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 디지털 인프라로 정체성을 실현하는 권리 체계</div>
          <div style={{ fontSize: 11.2, color: "#222", lineHeight: 1.35, padding: "4px 8px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>개인 능력의 확장</strong>은 사람을 분업의 부품이 아니라 각자의 미션을 이루는 <strong>전문적 주체</strong>로 만든다. 강화된 개인은 서로 협력하면서도 다방면으로 경쟁하므로, 이를 지원하고 규율할 새 질서가 필요하다. <strong style={{ color: C.navy }}>새로운 사회계약</strong>은 개인이 AI·데이터·네트워크에 접근해 전문가 수준의 생산성을 갖추고, 공동체 의사결정에 직접 참여하며, 그 과정에서 정체성을 사회적 역할과 기여로 실현하도록 보장하는 <strong>최상위 권리 체계</strong>다.
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "19%" }} />
              <col style={{ width: "23%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "18%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11.2 }}>권리 구조</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11.2 }}>핵심 정의</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11.2 }}>생산성의 변화</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11.2 }}>거버넌스의 변화</th>
                <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 11.2 }}>사회계약의 구현</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "A. 디지털 인프라 접근권",
                  def: "AI·연산·데이터·네트워크·학습 자원에 접근할 권리. 접근 격차가 계층 격차가 되지 않도록 공공재화와 데이터 주권을 보장",
                  productivity: "비전문가도 분석·창작·기획·실행을 전문가 수준으로 수행. AI가 개인의 생산 역량을 확장",
                  governance: "정책 이해·의견 형성·검증에 필요한 정보와 도구를 모두에게 제공",
                  contract: "능력의 기반 — 강화된 개인이 등장할 최소 조건",
                },
                {
                  label: "B. 직접 거버넌스 참여권",
                  def: "대표에게 전부 위임하지 않고, AI와 데이터 인프라를 활용해 의제 설정·정책 설계·감시·집행 검증에 직접 참여할 권리",
                  productivity: "개인의 전문성이 공공 문제 해결 능력으로 전환. 직업 밖 지식과 경험도 사회적 기여가 됨",
                  governance: "가정·마을·도시·국가·세계가 사안별로 권한을 나누고, 한시 위임 뒤 자동 환수",
                  contract: "운영의 방식 — 공동체를 직접 고치는 시민의 권리",
                },
                {
                  label: "C. 정체성 실현권",
                  def: "직업·소속에 묶이지 않고 자신의 정체성을 발견·훈련·실현하며, 그 기여를 경제·정치 질서 안에서 인정받을 권리",
                  productivity: "생산의 기준이 노동시간에서 세분화된 니즈 충족으로 이동. 개인은 자기 정체성을 기준으로 특정한 필요를 발견하고 해결함",
                  governance: "정책과 제도는 평균적 국민이 아니라 다양한 정체성이 실현되는 경로를 설계",
                  contract: "최종 목적 — 디지털 인프라와 직접 참여가 정체성 실현으로 귀결",
                },
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11.6, verticalAlign: "top", lineHeight: 1.3, fontWeight: 800, color: C.navy }}>{r.label}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11, verticalAlign: "top", lineHeight: 1.3, color: "#222" }}>{r.def}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11, verticalAlign: "top", lineHeight: 1.3, color: "#333", fontWeight: 600 }}>{r.productivity}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 11, verticalAlign: "top", lineHeight: 1.3, color: "#333" }}>{r.governance}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontSize: 10.9, verticalAlign: "top", lineHeight: 1.3, color: C.navy, fontWeight: 700 }}>{r.contract}</td>
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
