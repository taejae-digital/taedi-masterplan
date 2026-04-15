/* p.2 — 개인의 변화: 삶, 역량, 생애주기 (narrative v0.3.10 2장) */
import { C } from "./constants";
import { Header, Footer, Banner, SectionTitle, body } from "./shared";

export function IndividualChangePage() {
  const label: React.CSSProperties = { fontSize: 10.5, fontWeight: 700, color: "#888", marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="2. 개인의 변화 — 삶, 역량, 생애주기" />

      <Banner>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          전환의 출발점은 거시적 질서가 아니라 한 사람의 삶이다.
        </div>
        <div style={{ fontSize: 12.5, color: "#444", marginTop: 3 }}>
          AI가 개인의 일상을 어떻게 바꾸는지를 먼저 이해하지 않으면, 그 이후의 모든 분석은 추상에 머문다.
        </div>
      </Banner>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* 왼쪽: 5대 변화 */}
        <div>
          <SectionTitle>AI 시대 개인의 5대 변화</SectionTitle>

          {[
            {
              title: "역량의 변화 — 진입장벽의 구조적 하락",
              desc: "마케터 1명이 데이터 분석·카피·시장 조사를 하루 만에 완성한다. 10년 전이면 3명이 일주일 걸릴 작업. 신입 변호사가 5년 차 작업을 반나절에 끝낸다. 특정 역량에 도달하기 위한 시간·비용·제도적 경로가 근본적으로 짧아진다.",
              color: C.navy,
            },
            {
              title: "자율성의 변화 — 판단 권한의 이동",
              desc: "AI로 팀장보다 정밀한 분석을 완성한 팀원은 묻는다 — \"내가 직접 판단하면 안 되는가?\" 이것은 불만이 아니라 역량 확장의 논리적 귀결이다. 자유와 책임은 분리할 수 없다.",
              color: C.accent,
            },
            {
              title: "삶의 구조 변화 — 생애주기의 재설계",
              desc: "교육→노동→은퇴의 3단계 모델은 산업화 시대 노동 시장에 최적화된 것이었다. AI 시대에 10년간 축적한 전문성이 모델 하나로 범용화되면, 학습→노동→재학습이 반복 순환하는 구조가 된다.",
              color: C.green,
            },
            {
              title: "건강과 수명의 변화 — 자기 관리 역량 확장",
              desc: "AI 기반 진단·맞춤 치료·유전체 분석이 개인의 건강 관리 역량을 확장. 의사에게 전적으로 위임했던 건강 판단이 개인에게 돌아온다. 100세 시대에 20대 직업 선택이 80년을 규정하는 것은 불합리하다.",
              color: C.blue,
            },
            {
              title: "정체성의 변화 — 직업에서 목적으로",
              desc: "\"무슨 일 하세요?\" = \"당신은 누구입니까?\"였다. AI가 직업 구조를 재편하면, 재능·관계·가치관에 기반해 정체성을 구성할 자유를 얻는다. 동시에 스스로 구성해야 하는 부담도 안게 된다.",
              color: C.amber,
            },
          ].map(({ title, desc, color }) => (
            <div key={title} style={{ padding: "8px 12px", borderLeft: `4px solid ${color}`, marginBottom: 8, background: "#fff" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 4 }}>{title}</div>
              <div style={{ ...body, fontSize: 12 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* 오른쪽: 시대 비교 + 관통하는 핵심 */}
        <div>
          <SectionTitle>기술 → 개인 변화 → 시대 변화</SectionTitle>

          {[
            {
              era: "농업사회", tech: "필사·구전", color: "#999",
              individual: "신분에 종속. 지식은 왕족·귀족 독점.",
              community: "왕정 99%. 복종·충성이 최고 가치.",
            },
            {
              era: "산업사회", tech: "인쇄술 + 증기기관", color: C.accent,
              individual: "지식 개방 → 스스로 생각하는 시민. 자유·평등 요구.",
              community: "자본주의/공산주의. 교육→노동→은퇴 3단계 생애.",
            },
            {
              era: "정보화사회", tech: "AI + 인터넷", color: C.navy,
              individual: "판단 역량 증강. 전문가급 능력 누구나 접근. 생애주기 순환.",
              community: "??? 새로운 질서. 지금 설계해야 한다.",
              highlight: true,
            },
          ].map(({ era, tech, color, individual, community, highlight }) => (
            <div key={era} style={{
              display: "grid", gridTemplateColumns: "80px 1fr 1fr",
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
              <div style={{ padding: "8px 10px" }}>
                <div style={label}>공동체 변화</div>
                <div style={body}>{community}</div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 14 }}>
            <SectionTitle>관통하는 핵심</SectionTitle>
          </div>

          <div style={{ padding: "12px 16px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}`, marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>외부 위임의 축소</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#222" }}>
              개인의 삶에서 외부 기관에 위임했던 판단의 범위가 축소되고 있다.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
              {[
                { from: "교육 기관", to: "자율 학습 경로", icon: "학습" },
                { from: "의료 기관", to: "개인 건강 판단", icon: "건강" },
                { from: "기업 조직", to: "자기 경력 설계", icon: "경력" },
              ].map(({ from, to, icon }) => (
                <div key={icon} style={{ padding: "8px", background: "#fff", border: `1px solid ${C.line}`, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: C.light, marginBottom: 2 }}>{from} 독점</div>
                  <div style={{ fontSize: 14, color: C.navy, fontWeight: 700, margin: "4px 0" }}>&darr;</div>
                  <div style={{ fontSize: 11.5, color: C.navy, fontWeight: 700 }}>{to}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.amber, marginBottom: 5 }}>정체성 실현권 — AI 시대의 새 자유</div>
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
                생애주기 유연, 다중 역할
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
