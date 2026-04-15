/* p.3 — 새로운 질서 */
import { C } from "./constants";
import { Header, Footer } from "./shared";

export function NewOrderPage() {
  const body: React.CSSProperties = { fontSize: 12.5, lineHeight: 1.65, color: "#222" };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="3. 새로운 질서 — 자본주의도 공산주의도 아닌 것" />

      <div style={{ margin: "12px 32px 10px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          자본주의는 말기 현상. 공산주의는 초기 현상. 정보화 시대의 새 경제·정치 질서를 찾는 것이 핵심 과제다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

        {/* 왼쪽 */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>경제·정치 질서 비교</div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 12 }}>
            <thead>
              <tr>
                <th style={{ padding: "6px 8px", background: "#444", color: "#fff", textAlign: "left", fontSize: 11 }}>구분</th>
                <th style={{ padding: "6px 8px", background: "#92400e", color: "#fff", textAlign: "center", fontSize: 11 }}>자본주의 (말기)</th>
                <th style={{ padding: "6px 8px", background: "#1e40af", color: "#fff", textAlign: "center", fontSize: 11 }}>공산주의 (초기)</th>
                <th style={{ padding: "6px 8px", background: C.navy, color: "#fff", textAlign: "center", fontSize: 11 }}>정보화 질서 (?)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["핵심 가치", "자유 > 평등", "평등 > 자유", "정체성 실현"],
                ["생산수단", "자본 (부동산·공장)", "국가 소유", "AI 인프라·데이터 (?)"],
                ["유통 방식", "자유 시장", "국가 계획", "프로토콜 기반 (?)"],
                ["권력 구조", "선출직 + 자본 권력", "당 독재", "과업 완성 시 소멸"],
                ["개인 위치", "노동자·소비자", "프롤레타리아트", "정체성 실현 주체"],
                ["현재 증상", "양극화·포퓰리즘", "효율 정체", "???  지금 설계 중"],
              ].map(([cat, cap, com, info], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : C.bg }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#555", fontSize: 11.5 }}>{cat}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", textAlign: "center", color: "#555" }}>{cap}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", textAlign: "center", color: "#555" }}>{com}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", textAlign: "center", fontWeight: 700, color: C.navy, background: "#f0f4ff" }}>{info}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}`, marginBottom: 12 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.amber, marginBottom: 5 }}>덩샤오핑의 교훈</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 16px 1fr", gap: 0, alignItems: "center" }}>
              <div style={{ padding: "8px 10px", background: "#fff", border: "1px solid #fde68a", fontSize: 12, lineHeight: 1.6 }}>
                <div style={{ fontWeight: 700, marginBottom: 2, fontSize: 11, color: "#888" }}>마오쩌둥 모델</div>
                시장 = 공산주의<br />권력 = 공산당<br /><span style={{ color: C.red, fontSize: 11 }}>→ 성장 한계</span>
              </div>
              <div style={{ textAlign: "center", fontSize: 14, color: C.amber }}>→</div>
              <div style={{ padding: "8px 10px", background: "#fff", border: "1px solid #fde68a", fontSize: 12, lineHeight: 1.6 }}>
                <div style={{ fontWeight: 700, marginBottom: 2, fontSize: 11, color: "#888" }}>덩샤오핑 모델</div>
                시장 = 자본주의<br />권력 = 공산당<br /><span style={{ color: C.green, fontSize: 11 }}>→ G2 달성</span>
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: "#666", marginTop: 7 }}>
              그러나 이 모델도 산업화 시대의 해법. 다음 단계에서는 새 질서가 필요하다.
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: C.bg, borderLeft: `4px solid ${C.green}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.green, marginBottom: 5 }}>왜 제로섬이 끝나는가</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={body}>
                <div style={{ fontWeight: 700, color: C.red, marginBottom: 2, fontSize: 11 }}>산업화 시대</div>
                효율 극대화 = 생존<br />누가 이기면 다른 쪽이 짐<br />무한 경쟁이 합리적
              </div>
              <div style={body}>
                <div style={{ fontWeight: 700, color: C.green, marginBottom: 2, fontSize: 11 }}>AI 시대</div>
                효율 극대화가 쉬워짐<br />모두가 풍족할 물적 조건<br />절제·협력이 생존의 논리
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>니치마켓 생태계 — 새로운 경제 질서의 실체</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 0, alignItems: "center", marginBottom: 10 }}>
            <div style={{ padding: "10px 12px", borderTop: `3px solid #92400e`, background: "#fff8e1" }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>산업화 시대</div>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: "#92400e", marginBottom: 5 }}>KBS·MBC 메가마켓</div>
              {["소수 대기업이 시장 지배", "규모의 경제 = 자본 권력", "100만 명 이상 고용이 기준", "노동이 가치의 시대"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#555", marginBottom: 2, paddingLeft: 10, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>—</span>{t}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" as const, fontSize: 20, color: C.navy, fontWeight: 800 }}>&rarr;</div>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>AI 시대</div>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 5 }}>수만 개 니치마켓 생태계</div>
              {["소규모 팀이 개인화된 가치 실현", "슈카(10명)·MK 크리에이티브(11명)", "롱테일 경제: 니치의 합산 > 히트", "더 많은 사람이 더 다양하게 참여"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: C.navy, marginBottom: 2, paddingLeft: 10, position: "relative", fontWeight: i === 3 ? 700 : 400 }}>
                  <span style={{ position: "absolute", left: 0 }}>—</span>{t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "8px 12px", background: "#f0fdf4", borderLeft: `4px solid ${C.green}`, marginBottom: 12, fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>
            <strong>Long Tail Economy (Chris Anderson, 2004):</strong> 온라인 플랫폼이 물리적 제약을 없애면서 니치 상품의 합산이 소수 히트를 능가한다. AI는 이 구조를 개인 수준으로 확장한다.
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>소멸하는 권력 — 정보화 시대의 정치 질서</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
            {[
              { era: "농업사회", label: "왕정", desc: "혈통으로 영구 소유\n99%가 왕정\n복종이 질서", color: "#999", bg: "#f5f5f5" },
              { era: "산업사회", label: "임기 제한", desc: "선출·임기로 제한\n그러나 임기 후에도\n권력 유지 시도", color: C.accent, bg: "#f0f4ff" },
              { era: "정보화사회", label: "과업 완성 시 소멸", desc: "목표 달성 → 해체\n개인 위임 최소화\n공공 목적만 한정", color: C.navy, bg: "#dbeafe" },
            ].map(({ era, label, desc, color, bg }) => (
              <div key={era} style={{ padding: "10px", background: bg, borderTop: `3px solid ${color}` }}>
                <div style={{ fontSize: 10.5, color: "#888", marginBottom: 2 }}>{era}</div>
                <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333", whiteSpace: "pre-line" }}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: "10px 14px", background: "#f0fdf4", borderLeft: `4px solid ${C.green}`, marginBottom: 12 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.green, marginBottom: 5 }}>WHO 사례 — 과업 완성 시 소멸의 원리</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                <div style={{ fontWeight: 700, marginBottom: 2 }}>천연두 퇴치 사업</div>
                1967년 시작 → 1980년 박멸<br />
                <span style={{ color: C.green }}>→ 사업 종결, 권력 소멸</span>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#555" }}>
                목표를 달성하면 사라지는 권력. 그렇지 않으면 권력자의 탐욕이 반드시 그것을 지속시키려 한다.
              </div>
            </div>
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>정보화 시대 새 질서의 윤곽</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.green}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.green, marginBottom: 7 }}>경제 질서</div>
              {["AI 인프라 → 공공재", "데이터 주권 → 개인 귀속", "AI 초과이윤 → 사회 환류", "돌봄·기여 → 경제적 인정", "직업 대신 목적 기반 경제"].map((t, i) => (
                <div key={i} style={{ fontSize: 12, lineHeight: 1.6, color: "#222", marginBottom: 2, paddingLeft: 10, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: C.green }}>—</span>{t}
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 7 }}>정치 질서</div>
              {["과업 완성 시 소멸하는 권력", "개인 위임 최소화", "국방·외교·재난만 국가에", "세계 정부 = 과업 한정 기구", "공공 프로토콜이 질서 유지"].map((t, i) => (
                <div key={i} style={{ fontSize: 12, lineHeight: 1.6, color: "#222", marginBottom: 2, paddingLeft: 10, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: C.navy }}>—</span>{t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>핵심 연구 과제</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#111" }}>
              <strong>자본주의도 공산주의도 아닌 정보화 시대의 경제·정치 질서는 무엇인가?</strong><br />
              이 질문에 답하지 않으면 거버넌스를 설계할 수 없다.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
