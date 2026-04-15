/* p.2 — 개인의 변화 */
import { C } from "./constants";
import { Header, Footer } from "./shared";

export function IndividualChangePage() {
  const label: React.CSSProperties = { fontSize: 10.5, fontWeight: 700, color: "#888", marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 };
  const body: React.CSSProperties = { fontSize: 12.5, lineHeight: 1.6, color: "#222" };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="2. 개인의 변화 — 모든 변화의 출발점" />

      <div style={{ margin: "12px 32px 10px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          변화는 개인에서 시작된다. 공동체가 개인을 바꾸는 법은 없다.
        </div>
        <div style={{ fontSize: 12.5, color: "#444", marginTop: 3 }}>
          정보화 사회에서 개인이 어떻게 달라지는가를 모르면, 공동체도 국가도 세계도 예측할 수 없다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 24 }}>

        {/* 왼쪽 */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>기술 → 개인 변화 → 시대 변화</div>

          {/* 타임라인 */}
          {[
            {
              era: "농업사회", tech: "필사·구전", color: "#999",
              individual: "신분에 종속. 지식은 왕족·귀족 독점.",
              community: "왕정 99%. 복종·충성이 최고 가치.",
              value: "충성·복종",
            },
            {
              era: "산업사회", tech: "인쇄술 + 증기기관", color: C.accent,
              individual: "지식 개방 → 스스로 생각하는 시민. 자유·평등 요구.",
              community: "자본주의 or 공산주의. 선출직 민주주의 탄생.",
              value: "자유·평등·사회권",
            },
            {
              era: "정보화사회", tech: "AI + 인터넷", color: C.navy,
              individual: "지적·창의 능력 증강. 전문가급 역량을 누구나 접근.",
              community: "???  새로운 질서. 지금 설계해야 한다.",
              value: "정체성 실현권",
              highlight: true,
            },
          ].map(({ era, tech, color, individual, community, value, highlight }) => (
            <div key={era} style={{
              display: "grid", gridTemplateColumns: "80px 1fr 1fr 72px",
              marginBottom: 6,
              border: highlight ? `2px solid ${C.navy}` : `1px solid ${C.line}`,
              background: highlight ? "#f0f4ff" : "#fff",
            }}>
              <div style={{ padding: "10px 8px", background: color, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: "#fff", textAlign: "center" }}>{era}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", textAlign: "center", marginTop: 3 }}>{tech}</div>
              </div>
              <div style={{ padding: "8px 10px", borderRight: `1px solid ${C.line}` }}>
                <div style={label}>개인의 변화</div>
                <div style={body}>{individual}</div>
              </div>
              <div style={{ padding: "8px 10px", borderRight: `1px solid ${C.line}` }}>
                <div style={label}>공동체 변화</div>
                <div style={body}>{community}</div>
              </div>
              <div style={{ padding: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: highlight ? "#dbeafe" : C.bg }}>
                <div style={{ fontSize: 11, fontWeight: 800, color, textAlign: "center", lineHeight: 1.4 }}>{value}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 10, padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.amber, marginBottom: 3 }}>인쇄술의 교훈</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
              왕족·귀족만 책을 읽던 시대에 인쇄술이 지식을 개방하자, 평민이 스스로 생각하기 시작했다. 자유와 평등은 그 개인들에게서 먼저 싹텄다. <strong>프랑스 혁명은 원인이 아니라 결과였다.</strong>
            </div>
          </div>
        </div>

        {/* 오른쪽 */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>정보화 사회의 개인 — 두 갈래 변화</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[
              {
                title: "자유의 확장", color: C.navy,
                items: ["의대 없이 의료 지식 활용", "법대 없이 법률 지식 접근", "혼자서 팀 수준의 성과", "창작·연구 진입 장벽 소멸"],
              },
              {
                title: "위험의 확장", color: C.red,
                items: ["비전문가도 생물무기 설계", "개인이 핵 공격 기획 가능", "딥페이크로 여론 조작", "사이버 인프라 공격 민주화"],
              },
            ].map(({ title, color, items }) => (
              <div key={title} style={{ padding: "10px 12px", borderTop: `3px solid ${color}`, background: color === C.red ? "#fff5f5" : C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 7 }}>{title}</div>
                {items.map((t, i) => (
                  <div key={i} style={{ fontSize: 12, lineHeight: 1.6, color: "#222", marginBottom: 2, paddingLeft: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color }}>—</span>{t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>개인 계층 재편</div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11 }}>계층</th>
                <th style={{ padding: "5px 8px", textAlign: "center", fontSize: 11 }}>현재</th>
                <th style={{ padding: "5px 8px", textAlign: "center", fontSize: 11 }}>AI 시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11 }}>특징</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["리더 (AI 설계)", "2%", "5%", "AI 방향을 결정하는 소수", C.navy],
                ["프로 (AI 활용)", "53%", "25%", "AI로 성과를 내는 전문가", C.accent],
                ["아마추어 (AI 의존)", "35%", "65%", "AI 없이는 경쟁 불가", "#888"],
                ["소외 (AI 미접근)", "10%", "5%", "디지털 격차 피해", "#bbb"],
              ].map(([label, now, future, desc, color], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : C.bg }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: color as string, fontSize: 12 }}>{label}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", textAlign: "center" }}>{now}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", textAlign: "center", fontWeight: 700, color: color as string }}>{future}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#555" }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 5 }}>정체성 실현권 — AI 시대의 새 자유</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                <div style={{ fontWeight: 700, marginBottom: 2, color: "#555" }}>산업 시대</div>
                "무슨 일 하세요?" = 직장·직급<br />
                노동 생산성 = 인간의 가치<br />
                직업 잃으면 정체성 상실
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                <div style={{ fontWeight: 700, marginBottom: 2, color: C.navy }}>정보화 시대</div>
                "어떤 사람이에요?" = 목적·기여<br />
                기여와 목적 = 인간의 가치<br />
                "돌봄 길드 기여자"가 명함
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
