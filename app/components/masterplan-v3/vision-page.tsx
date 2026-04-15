/* p.1 — 비전: 개인의 시대 (narrative v0.3.10 프롤로그 + 1장 + 7장) */
import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function VisionPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 비전 — 개인의 시대" />

      <div style={{ padding: "18px 32px 14px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          개인 역량 확장이 초래하는 사회 구조 전환을 해석하고,<br />
          전환이 전쟁이 아닌 진화로 끝나는 경로를 설계한다.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, padding: "0 32px" }}>
        {/* 왼쪽: 역사의 패턴 */}
        <div>
          <div style={h3s}>1. 역사의 패턴 — 개인이 먼저 바뀐다</div>
          <p style={ps}>
            사회가 바뀔 때, 무엇이 먼저 바뀌는가? 역사를 보면 답이 있다. 언제나 개인이 먼저 바뀌었다. 기술이 개인의 역량을 확장하면, 개인이 달라지고, 관계가 달라지고, 공동체의 질서가 달라졌다. 경제 질서가 바뀌고, 정치 질서가 바뀌고, 마지막으로 제도와 거버넌스가 뒤따랐다. 이 순서는 한 번도 바뀐 적이 없다.
          </p>

          <div style={{ fontSize: 12, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `1px solid ${C.line}` }}>핵심 공식</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4, marginBottom: 14 }}>
            {["기술", "개인 역량\n확장", "자유·책임\n범위 확장", "공동체 질서\n재편", "경제 질서\n재형성", "정치 질서\n재형성"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ flex: 1, padding: "6px 4px", background: i === 0 ? C.navy : i < 3 ? "#2a3f6b" : "#3d5a8a", color: "#fff", fontSize: 10.5, fontWeight: 700, textAlign: "center", lineHeight: 1.35, whiteSpace: "pre-line", borderRadius: 2 }}>{t}</div>
                {i < 5 && <div style={{ color: C.light, fontSize: 12, fontWeight: 700 }}>&rarr;</div>}
              </div>
            ))}
          </div>

          {/* 역사 사례 */}
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 11 }}>기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 11 }}>확장된 역량</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 11 }}>결과</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["농업 기술", "식량 생산", "잉여 → 축적 → 분업 → 계급"],
                ["인쇄술", "지식 접근", "종교개혁 → 정보 독점 해체 → 근대"],
                ["산업 기계", "물적 생산", "공장 자본 → 경제 질서 선행 변화 → 선거권 확대"],
                ["인터넷", "정보 유통", "개인 = 생산자 → 아랍의 봄, 소셜 미디어"],
                ["AI", "판단과 추론", "위계의 핵심 정당성 해소 → ???"],
              ].map(([tech, cap, result], i) => (
                <tr key={i} style={{ background: i === 4 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: i === 4 ? 800 : 600, color: i === 4 ? C.navy : "#333" }}>{tech}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#555" }}>{cap}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: i === 4 ? C.navy : "#555", fontWeight: i === 4 ? 700 : 400 }}>{result}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.amber, marginBottom: 3 }}>AI가 결정적으로 다른 이유</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
              이전 기술이 확장한 것은 신체적 노동력, 정보 접근성, 소통 범위였다. <strong>판단 능력은 건드리지 못했다.</strong> 전문가의 권위, 관리자의 존재 이유, 의사결정자의 지위 — 모든 위계의 정당성은 판단의 비대칭 위에 세워져 있었다. AI는 바로 그 비대칭을 해소한다.
            </div>
          </div>
        </div>

        {/* 오른쪽: 이 글의 경로 + 목표 */}
        <div>
          <div style={h3s}>2. 이 마스터플랜의 경로</div>
          <p style={ps}>
            현재 AI 논의 대부분은 "어떻게 규제할 것인가"로 직행한다. 경제 질서의 해석 없이 거버넌스를 논하면, 그 거버넌스는 공중에 뜬다. 결론을 먼저 말하는 것이 아니라, 결론에 이르는 사고의 경로를 함께 걷는다.
          </p>

          <div style={{ display: "grid", gridTemplateRows: "repeat(6, auto)", gap: 5, marginBottom: 14 }}>
            {[
              { num: "p.2", label: "개인의 변화", desc: "역량·자율성·생애주기·정체성", color: C.navy },
              { num: "p.3", label: "개인과 공동체", desc: "위임 구조의 재편, 관계의 본질", color: C.accent },
              { num: "p.4", label: "경제 질서의 전환", desc: "Polanyi, 노동·가치·규모의 변형", color: C.green },
              { num: "p.5", label: "위험의 지형", desc: "개인→공동체→국가→세계, 선별 기준", color: C.red },
              { num: "p.6", label: "거버넌스와 실행", desc: "왜 지금인가, 태재가 하는 일", color: C.amber },
            ].map(({ num, label, desc, color }) => (
              <div key={num} style={{ display: "grid", gridTemplateColumns: "50px 1fr", border: `1px solid ${C.line}`, borderLeft: `4px solid ${color}` }}>
                <div style={{ padding: "6px", background: color, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
                <div style={{ padding: "6px 10px" }}>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color }}>{label}</div>
                  <div style={{ fontSize: 11, color: C.light }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={h3s}>3. 우리가 목표하는 미래</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 5 }}>개인 수준</div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                재능과 목적에 맞게 삶을 꾸릴 수 있는 구조. 시장 교환가치로 환원되지 않는 삶. 50대에 배움을 시작하고 30대에 쉼을 선택할 수 있는 유연성.
              </div>
            </div>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.green}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.green, marginBottom: 5 }}>세계 수준</div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                전쟁을 걱정하지 않아도 되는 삶. 개인이 안전할 때 과도한 권한 위임이 줄고, 국가가 전쟁 기계로 전환될 위험도 줄어든다. 개인의 안전과 세계의 평화는 같은 구조의 양면.
              </div>
            </div>
          </div>

          {/* 핵심 메시지 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "패권→합의", desc: "한반도에서 대결을 협력으로 전환시킬 모델", color: C.navy },
              { label: "경제의 재배태", desc: "시장이 사회를 지배하는 것이 아니라 사회가 시장을 활용", color: C.green },
              { label: "사전 설계", desc: "전환이 완성된 후에는 이미 늦다 — 지금이 마지막 창", color: C.red },
              { label: "사고의 경로", desc: "결론이 아니라 결론에 이르는 추론 과정을 함께 걷는다", color: C.amber },
            ].map(({ label, desc, color }) => (
              <div key={label} style={{ padding: "8px 10px", borderLeft: `4px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
