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

        {/* 3.3 새로운 사회계약 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약 — 필요한 새 질서를 어떻게 구현하는가</div>

          {/* 1) 새로운 권리의 정립 — 3카드 (1×3) */}
          <div style={{ marginBottom: 4, marginTop: 4 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>새로운 권리의 정립</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>정체성 실현권</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                직업·소속에 묶이지 않을 권리. 농업시대 토지소유권, 산업시대 직업선택권에 이어 디지털시대는 정체성을 스스로 설계할 권리를 요구한다. 돌봄·창작·학습 기여를 소득·사회보험과 연결.
              </div>
              <div style={{ fontSize: 11, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 도시·협동조합·디지털 공동체</div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>AI 인프라 평등 접근권</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                AI·연산·데이터의 공공재화. 데이터 주권·이동권. 플랫폼 독점의 구조적 해체. AI 인프라 접근 격차가 곧 역량 격차, 곧 계층 격차가 된다. 전기·통신망처럼 공공재로 다뤄야 한다.
              </div>
              <div style={{ fontSize: 11, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 국가·공공 AI 인프라·국제 표준</div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>AI 개인화권</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                AI의 행동 양식을 개인의 정체성·스타일·목적에 맞춰 스스로 설계할 권리. 빅테크 기본 설정에 종속되지 않고, AI를 자기 정체성 실현 도구로 만들 수 있어야 한다. 알고리즘 결정 설명·거부권 포함.
              </div>
              <div style={{ fontSize: 11, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 민주국가 연합·세계시민 거버넌스</div>
            </div>

          </div>

          {/* 2) 새 거버넌스 (권리의 작동) — 3카드 (1×3) */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>새 거버넌스 (권리의 작동)</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>사전승인 거버넌스</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                의약품처럼 AI도 개발자가 안정성을 입증한 후 출시. 플랫폼 공공성 보장. 위기 대응 권한은 한시적이며 해소 시 자동 소멸.
              </div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>재정 거버넌스</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                전환 인프라로 재편기 소외 계층을 지원. AI 이익을 환수해 디지털 배당·공공인프라로 환류. 가정/도시/국가/글로벌 다층 분담.
              </div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>공론장 보호 거버넌스</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                AI 콘텐츠 출처 표시, 마이크로 타게팅 규제로 공론장 중립성 보호. 국경을 넘는 패권 경쟁은 한시적 협력으로 대응.
              </div>
            </div>

          </div>

          {/* 3) 국제 규율의 필요와 진행 중인 노력 — 3카드 (1×3) */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>국제 규율의 필요와 진행 중인 노력</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>세계정부 수준의 규율</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                빅테크가 규제 대상 국가보다 강해진 현실. 단일 국가 규제는 플랫폼 이전 한 번에 무력화. 17세기 동인도회사형 제국이 빅테크의 궤도. 핵·생화학무기 통제처럼 <strong>민주국가 연합의 집단 행동</strong> 필요.
              </div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>진행 중인 노력의 사례</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                <strong>LawZero</strong>(Bengio) — AI 안전 비영리 연구·국제 조약 촉구. <strong>International AI Safety Network</strong> — 영·미·한 등 10여 개국 정부 주도 협력. <strong>EU AI Act</strong> — 고위험 AI 사전 등록·감사. 공통 교훈: 기술 배치 후 규제는 너무 늦다.
              </div>
            </div>

            <div style={{ padding: "6px 10px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>태재의 역할과 공조</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                <strong>이론 토대</strong> — 단행본 『디지털 위협 통제』(Q4 2026)로 한국발 이론을 더한다. <strong>국제 학자 네트워크</strong> — Bengio·Hinton·Acemoglu 등과 자문·공동 연구. <strong>중견국 가교</strong> — 미·중 양극화 속 협력적 거버넌스 의제 설정자. 핵 레짐의 비핵 중견국처럼 균형추 역할.
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
