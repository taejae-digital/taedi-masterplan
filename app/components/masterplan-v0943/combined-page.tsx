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
    prev: "노동 + 자본이 가치를 만든다",
    why: "AI가 노동의 희소가치를 잠식. 시장 거래된 노동만 GDP에 잡힘",
    shift: "노동가치설의 붕괴 — AI가 같은 결과를 1/100 시간에 만든다. 사람의 시간이 더는 가치의 주된 원천이 아니다",
    next: "정체성이 가치를 만든다 — 시장이 측정 못했던 활동도 생산으로 인정",
  },
  {
    dim: "분배",
    prev: "임금이 주된 분배 (노동소득세 + 복지)",
    why: "노동소득 축소로 세원·복지 와해. AI 인프라 보유자에 가치 집중",
    shift: "노동시간 ≠ 가치 기여 — AI 인프라 보유자가 압도적 가치를 가져감. 임금이라는 분배 메커니즘 자체가 무력화",
    next: "자본·데이터 과세 + 디지털 배당 — AI 이익 환수해 정체성 기여에 분배",
  },
  {
    dim: "지출",
    prev: "표준화된 대량소비 (중산층 중심)",
    why: "양극화로 중산층 축소. 표준 제품·서비스 수요 붕괴",
    shift: "한계비용 0 + 1인 맞춤 — 디지털 재화는 한계비용이 0이고 AI는 1인 맞춤 생산을 가능케 한다. 표준 가격이 가치를 못 잡음",
    next: "정체성 실현 지출 — 도시 구독, 평생학습, 정체성별 다양한 경로",
  },
];

const polRows: Row[] = [
  {
    dim: "입법",
    prev: "국회가 사회 규칙을 정한다",
    why: "빅테크 약관·플랫폼 규칙이 사실상 입법. 국가 입법권 침식",
    shift: "규칙 제정자 다원화 — 코드·약관·알고리즘이 법보다 빠르게 사회를 규율",
    next: "시민·도시·세계가 빅테크 규칙을 공동 검증·통제",
  },
  {
    dim: "행정",
    prev: "관료제가 정책을 집행한다",
    why: "AI 자율 시스템이 행정 일부 대체. 책임 귀속 공백",
    shift: "집행 주체 이동 — 사람 관료에서 AI 에이전트·플랫폼 자동화로",
    next: "전자인 법인격 + 다층 집행 체계 (시민·도시·국가·세계)",
  },
  {
    dim: "사법",
    prev: "법원이 분쟁을 판단한다",
    why: "알고리즘 판단·AI 책임 귀속 문제. 사법 적용 한계",
    shift: "판단 주체 분산 — 알고리즘이 일상 분쟁(콘텐츠·신용·매칭)을 자동 판단",
    next: "알고리즘 결정 설명·거부권 + AI 보조 시민 직접 검증",
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
            <strong style={{ color: C.navy }}>산업시대 경제는 노동가치설 위에 섰다.</strong> 디지털시대는 AI가 노동의 가치 원천 지위를 흔든다. 가치는 노동 시간에서 정체성 기여로 옮겨간다.
          </div>
          <CausalTable rows={econRows} />
        </div>

        {/* 3.2 정치 질서 */}
        <div>
          <div style={h3s}>3.2 정치 질서 — 국가가 독점하던 권한을 강화된 개인과 도시·세계가 나눠 쥔다</div>
          <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55, padding: "6px 10px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginBottom: 6 }}>
            <strong style={{ color: C.navy }}>산업시대 정치는 개인이 약해서 국가에 권한을 위임했다.</strong> 디지털시대는 강화된 개인이 권한을 직접 행사할 능력을 갖춘다. 국가가 독점하던 입법·행정·사법이 빅테크·시민·도시·세계로 분산된다.
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
