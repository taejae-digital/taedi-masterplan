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
          <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>① 산업시대 질서</th>
          <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>② 디지털시대 변화</th>
          <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>③ 산업 질서의 균열</th>
          <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>④ 디지털시대 새 질서</th>
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

      <div style={{ padding: "8px 32px 16px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>

        {/* 3.1 경제 질서 */}
        <div>
          <div style={h3s}>3.1 경제 질서 — 노동이 만들던 가치를 정체성이 만든다</div>
          <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55, padding: "6px 10px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 경제는 노동가치설 위에 섰다.</strong> 디지털시대는 <strong>정보·지능의 대중화</strong>가 노동의 가치 원천 지위를 흔든다. 가치는 노동 시간에서 <strong>정체성 기여</strong>로 옮겨간다.
          </div>
          <CausalTable rows={econRows} />
        </div>

        {/* 3.2 정치 질서 */}
        <div>
          <div style={h3s}>3.2 정치 질서 — 국가가 독점하던 권한을 강화된 개인과 도시·세계가 나눠 쥔다</div>
          <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55, padding: "6px 10px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 정치는 개인이 약해서 국가에 권한을 위임했다.</strong> 디지털시대는 <strong>정보·지능의 대중화</strong>로 강화된 개인이 입법·행정·사법 권한을 직접 행사할 능력을 갖춘다. 국가가 독점하던 권한이 강화된 개인·빅테크·도시·세계로 분산되어 <strong>정체성 기반 세계 거버넌스</strong>로 간다.
          </div>
          <CausalTable rows={polRows} />
        </div>

        {/* 3.3 새로운 사회계약 — 5컬럼 권리 매트릭스 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 정체성 실현이 가능한 다층 사회</div>
          <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55, padding: "6px 10px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 사회계약</strong>(인권·참정권·사유재산권)이 <strong>사람답게 존중받을 자유</strong>를 보장했다면, <strong style={{ color: C.navy }}>디지털시대 사회계약</strong>은 <strong>정체성 실현의 자유</strong>를 보장한다. 세 권리가 P2·P3 전 차원에 동시에 작동한다.
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
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>새 권리</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>핵심 정의</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>작동하는 공동체 (P2)</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>경제·정치 차원 (P3)</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>국제 협력</th>
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
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 800, color: C.navy }}>{r.label}</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.55, color: "#222" }}>{r.def}</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.55, color: "#333", fontWeight: 600 }}>{r.community}</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.55, color: "#333" }}>{r.econPol}</td>
                  <td style={{ padding: "10px 8px", borderBottom: "1px solid #eee", fontSize: 11, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{r.intl}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 태재의 역할 — 한 줄 박스 */}
          <div style={{ marginTop: 10, padding: "8px 12px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
            <strong style={{ color: C.navy }}>태재의 역할</strong> — 단행본 『디지털 위협 통제』(Q4 2026)로 한국발 이론을 더하고, <strong>Bengio·Hinton·Acemoglu</strong> 등 국제 학자 네트워크와 공동 연구, <strong>미·중 양극화 속 중견국 가교</strong> 역할.
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
