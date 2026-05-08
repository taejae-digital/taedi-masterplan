import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";

const urgColor = (urg: string) =>
  urg === "진행 중" ? "#991b1b" : urg === "임박" ? "#b91c1c" : urg === "중기" ? "#ef4444" : urg === "장기" ? "#f87171" : C.red;

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version="v0.8.1" />

      <div style={{ padding: "4px 32px 0", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 3.1 + 3.2 좌우 2컬럼 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 10 }}>

        {/* 표 ① — 3.1 디지털 시대 정치질서 */}
        <div>
          <div style={h3s}>3.1 디지털 시대 정치질서</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "42%" }} />
              <col style={{ width: "38%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>산업화 시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>AI 시대의 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prev: "국가의 폭력 독점",
                  impact: "무기 설계·해킹·자율무기 능력의 개인 이전. 국가가 갖던 폭력 독점이 깨진다.",
                  threats: [
                    { urg: "임박", text: "AI 무기 개인화·국가 통제 우회" },
                    { urg: "진행 중", text: "AI 사이버 공격 능력 보편화" },
                  ],
                },
                {
                  prev: "전문가·관료 위임제",
                  impact: "엘리트에 의한 정치 와해. 전문가 권위 붕괴, 위임 정당성 약화.",
                  threats: [
                    { urg: "진행 중", text: "AI 허위정보로 전문가 신뢰 붕괴" },
                    { urg: "진행 중", text: "포퓰리즘·반엘리트 정서 심화" },
                  ],
                },
                {
                  prev: "공론장과 여론 형성",
                  impact: "가짜뉴스·알고리즘에 의한 공론장 왜곡. 선동과 포퓰리즘 가속.",
                  threats: [
                    { urg: "진행 중", text: "AI 딥페이크·선거 개입" },
                    { urg: "진행 중", text: "에코챔버 심화·공론장 분열" },
                  ],
                },
                {
                  prev: "선출된 대표제",
                  impact: "빅테크 등 선출되지 않은 권력의 대표성 문제. 시민 위임 없이 사회적 결정을 좌우.",
                  threats: [
                    { urg: "진행 중", text: "빅테크 정책 독점·사실상 입법" },
                    { urg: "임박", text: "민주적 통제 밖 AI 거버넌스" },
                  ],
                },
              ].map(({ prev, impact, threats }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    {threats.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: urgColor(t.urg), borderRadius: 2, padding: "1px 4px", flexShrink: 0, lineHeight: 1.4 }}>{t.urg}</span>
                        <span style={{ fontSize: 11.5, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 4, fontSize: 10, color: "#888", fontStyle: "italic" }}>
            — 루소, 『사회계약론』(1762) · 롤스, 『정의론』(1971) · 하버마스, 『공론장의 구조변동』(1962)
          </div>
        </div>

        {/* 표 ② — 3.2 디지털 시대 경제질서 */}
        <div>
          <div style={h3s}>3.2 디지털 시대 경제질서</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "42%" }} />
              <col style={{ width: "38%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>산업화 시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>AI 시대의 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prev: "노동=소득 원리",
                  impact: "노동의 희소가치 감소. 자동화 이익이 데이터 독점자에 집중.",
                  threats: [
                    { urg: "임박", text: "대규모 직업 재편·실업 충격" },
                    { urg: "진행 중", text: "플랫폼 노동·1인 묶음직업 확산" },
                  ],
                },
                {
                  prev: "소득 기반 조세 구조",
                  impact: "노동소득 축소로 소득세·사회보험 기반 와해. 자동화 자본이 조세 망 밖에 위치.",
                  threats: [
                    { urg: "임박", text: "조세 징수 어려움·재정 기반 약화" },
                    { urg: "진행 중", text: "빅테크의 조세 우회·역외 이전" },
                  ],
                },
                {
                  prev: "중간계층 임금 구조",
                  impact: "AI 인프라 보유자와 노동자 간 극단적 양극화 가속.",
                  threats: [
                    { urg: "진행 중", text: "AI 플랫폼 독점 → 새 디지털 봉건제" },
                    { urg: "진행 중", text: "전문직 소득 급감·중간계층 축소" },
                  ],
                },
                {
                  prev: "복지국가 모델",
                  impact: "임금노동 전제 복지 체계의 한계. 복지 재편 필요.",
                  threats: [
                    { urg: "임박", text: "노동법·복지가 플랫폼·긱 노동에 뒤처짐" },
                    { urg: "진행 중", text: "직업 소멸 속도가 재훈련 속도를 초과" },
                  ],
                },
              ].map(({ prev, impact, threats }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    {threats.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: urgColor(t.urg), borderRadius: 2, padding: "1px 4px", flexShrink: 0, lineHeight: 1.4 }}>{t.urg}</span>
                        <span style={{ fontSize: 11.5, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 4, fontSize: 10, color: "#888", fontStyle: "italic" }}>
            — 아담 스미스, 『국부론』(1776) · 카를 마르크스, 『자본론』(1867)
          </div>
        </div>

        </div>{/* end grid */}

        {/* 3.3 새로운 사회계약 — 4블록 카드 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>

            <div style={{ padding: "8px 12px", background: "#fff5f5", borderLeft: `3px solid ${C.red}`, borderRadius: 2 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.red, marginBottom: 4 }}>자본주의 & 민주주의의 위기</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                정치질서에서 예견되는 위협(폭력 독점 와해, 공론장 왜곡, 대표성 붕괴)과 경제질서에서 예견되는 위협(양극화, 조세 와해, 복지 재편)이 결합되어 산업시대 양대 질서 자체가 한계에 도달한다.
              </div>
            </div>

            <div style={{ padding: "8px 12px", background: C.bg, borderLeft: `3px solid ${C.navy}`, borderRadius: 2 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 4 }}>새로운 사회계약의 마련</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                산업시대 사회계약을 보완하는 것이 아니라, 강화된 개인을 품을 새 질서를 처음부터 다시 설계하는 작업. <strong style={{ color: C.navy }}>정체성 실현권</strong>, <strong style={{ color: C.navy }}>알고리즘 자기결정권</strong>, <strong style={{ color: C.navy }}>AI 인프라 평등 접근권</strong> 등 새 권리와 거버넌스가 필요하다.
              </div>
            </div>

            <div style={{ padding: "8px 12px", background: "#f0fff4", borderLeft: `3px solid #16a34a`, borderRadius: 2 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: "#16a34a", marginBottom: 4 }}>진행 중인 노력의 사례</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                <strong>Law Zero</strong> — Yoshua Bengio가 주도한 AI 안전성을 위한 국제 규범 설계 시도. <strong>ARIA(영국)</strong> — 사회 위협을 사전에 차단하는 첨단 연구 거버넌스. 두 사례 모두 단일 국가를 넘는 집단 행동을 모색한다.
              </div>
            </div>

            <div style={{ padding: "8px 12px", background: "#f0f5ff", borderLeft: `3px solid #3b82f6`, borderRadius: 2 }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: "#3b82f6", marginBottom: 4 }}>세계정부 수준의 규율</div>
              <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
                기업이 세계정부 역할을 대체하면 <strong>동인도회사형 제국</strong>이 가능해진다. 빅테크가 규제해야 할 국가보다 강한 현실에서, 새 사회계약의 <span style={{ color: C.red, fontWeight: 800 }}>주체는 단일 국가가 아닌 민주국가 연합의 집단 행동</span>이어야 한다. 건강하고 안전한 세계정부 수준의 규율이 필요하다.
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
