import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function IndividualCommunityPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="2. 개인의 확장과 공동체와의 재균형" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          산업화가 분업으로 개인을 조직 안에 끌어들였다면,
          AI 시대의 자동화는 그 분업을 해체해 개인을 조직 밖으로 밀어낸다.
        </div>
      </div>

      <div style={{ padding: "0 32px 14px" }}>
        <p style={ps}>
          산업화의 핵심이 분업이었다면, AI 시대의 핵심은 자동화다. 200년간 분업은 개인을 조직 안에 묶어두었다 — 직업·직급·소속이 정체성을 대체했고, 한 사람이 혼자 할 수 없는 일이 조직 안에서만 가능했다. 그러나 분업의 각 조각을 기계가 수행하게 되면서 그 접착제가 풀린다. 한 명이 AI와 결합해 과거 부서 하나의 일을 해낼 수 있을 때, 개인은 조직 밖에서 자신의 역량·관심·기여를 중심으로 삶을 재편할 수 있게 된다. 분업의 시대에 조직이 개인을 조립했다면, 자동화의 시대에 개인은 스스로 조립된다.
        </p>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        {/* 왼쪽: 시대별 자유 + 4축 확장 */}
        <div>
          <div style={h3s}>시대별로 새로 주어진 자유</div>
          <p style={ps}>
            자유는 주어진 것이 아니라 획득된 것이다. 새 기술이 개인의 역량을 확장할 때마다, 사회는 그 역량에 맞는 새로운 자유를 제도로 흡수했다. 그 자유가 흡수되지 못한 시대는 혁명과 전쟁으로 기울었다. AI 시대의 자유도 같은 경로를 밟고 있다.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "18%" }}>시대</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>개인의 강화</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>공동체와의 갈등</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>새로 주어진 자유</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["농업사회", "정주·축적·가족 단위 자립", "유목 부족과 충돌, 토지 분쟁", "토지 소유·상속권"],
                ["인쇄술 이후", "성서·지식의 직접 해석·복제", "교회 교리 독점 도전, 종교전쟁", "신앙·학문의 자유"],
                ["산업혁명", "노동자 조직력·공장 생산력", "자본-노동 계급 갈등, 러다이트", "직업 선택·계약·참정권"],
                ["대중 민주주의", "대중 소통·여론 형성", "국가 검열과 충돌, 선전 투쟁", "표현·결사·노동·소수자 권리"],
                ["인터넷", "생산자·네트워크 주체", "플랫폼 독점 vs 사용자, 저작권 분쟁", "정보 접근·플랫폼 참여"],
                ["디지털·AI", "판단·창작·생산의 개인화", "빅테크 독점·전문가 권위 해체·국가 주권 약화", "자율·의미·기여·인정 (미정립)"],
              ].map(([age, power, conflict, freedom], i) => (
                <tr key={i} style={{ background: i === 5 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: i === 5 ? 800 : 700, color: i === 5 ? C.navy : "#333" }}>{age}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{power}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: i === 5 ? C.red : "#555", fontWeight: i === 5 ? 700 : 400 }}>{conflict}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: i === 5 ? C.navy : "#333", fontWeight: i === 5 ? 800 : 500 }}>{freedom}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={h3s}>개인 역량 확장의 4가지 축</div>
          <p style={ps}>
            AI가 인간을 대체할지 확장할지는 기술의 내재적 속성이 아니라 <strong>제도의 설계가 결정하는 문제</strong>다. 접근·분배·규제의 조건이 갖춰질 때 한 사람이 과거 여러 직업군과 조직이 나누어 맡던 역할을 동시에 겸하는 일이 가능해진다.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { n: "①", t: "전문성", d: "의료·법률·재무·번역·코딩의 진입 장벽이 낮아진다. 전문가도 AI와 결합하여 과거 다수가 하던 일을 처리한다.", color: C.navy },
              { n: "②", t: "정보", d: "기관이 독점하던 지식이 AI 기반 지식 시스템을 통해 개인에게 개방된다. 정보 비대칭이 구조적으로 축소된다.", color: C.accent },
              { n: "③", t: "네트워크", d: "소셜미디어·메시징은 기관의 중개 없이 전 세계와 즉시 연결한다. 조직에 속하지 않고도 공동 작업이 가능해진다.", color: C.green },
              { n: "④", t: "생산수단", d: "클라우드·3D 프린팅·AI 에이전트가 과거 대규모 자본이 필요했던 생산 인프라를 개인에게 서비스로 제공한다.", color: C.amber },
            ].map(({ n, t, d, color }) => (
              <div key={t} style={{ padding: "8px 10px", borderLeft: `4px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 12, fontWeight: 800, color, marginBottom: 3 }}>{n} {t}의 이전</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 갈망 + 공동체 재균형 */}
        <div>
          <div style={h3s}>그래서 개인은 무엇을 갈망하는가</div>
          <p style={ps}>
            할 수 있는 것이 달라지면 원하는 것도 달라진다. 확장된 개인은 더 많이 갖고 싶어하는 것이 아니라, 다르게 살고 싶어한다. 이 갈망이 기존 질서를 취약하게 만드는 에너지이며, 새로운 질서가 수용해야 할 수요다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
            {[
              { t: "자율", d: "타인이 정한 틀이 아닌 스스로 설계하는 삶. 거주·시간·관계의 자기결정.", color: C.navy },
              { t: "의미", d: "생존 이상의 삶. 시장 가치가 아닌 자기가 납득하는 활동.", color: C.accent },
              { t: "기여", d: "조직 종속 없이 공동의 목표에 참여. 중앙 지휘 없이 조율되는 협력.", color: C.green },
              { t: "인정", d: "소속이 아닌 기여로 증명되는 정체성. 실제 역량이 직접 평가되는 구조.", color: C.amber },
            ].map(({ t, d, color }) => (
              <div key={t} style={{ padding: "8px 10px", borderTop: `3px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 3 }}>{t}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>

          <div style={h3s}>공동체와의 재균형</div>
          <p style={ps}>
            모든 공동체는 개인의 역량과 권한을 위임받는 구조 위에 세워졌다. 위임의 정당성은 역량의 비대칭에 기초한다. 역량이 개인에게로 분산되면 위임의 정당성이 흔들린다. 이제 필요한 것은 위임의 폐지가 아니라 <strong>위임의 재설계</strong>다 — 꼭 필요한 만큼만, 투명하게, 목적이 달성되면 자동으로 환수되는 구조로.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12, fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.accent, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11.5, width: "20%" }}>공동체</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11.5, width: "38%" }}>산업시대 역할</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11.5 }}>AI시대 재균형</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["가정", "노동력 재생산 · 미성년 보호", "정체성 허브 · 창작·생산 단위"],
                ["이웃", "일상적 신뢰 · 비공식 돌봄", "위기 대응 · 의식적 생활 연대"],
                ["마을", "복지·교육·생활 인프라", "직접 조정 단위 · 실험의 규모"],
                ["도시", "일자리·집적 경제", "삶의 질·창조 플랫폼 · 데이터 주권"],
                ["국가", "안보·법치·복지 독점", "조건 설계자 · 도시·민간 실행 위임"],
                ["글로벌", "UN·국제기구 중개", "AI·팬데믹·기후의 목적 한정 거버넌스"],
              ].map(([c, old, next], i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy }}>{c}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#555" }}>{old}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#222", fontWeight: 600 }}>{next}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>재균형의 원칙</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "#222" }}>
              개인이 혼자 못 하는 일에만 위임 · 위임된 권력은 투명하게 감시 · 목적을 달성하면 자동 환수 · 개인·공동체의 이익이 충돌할 때는 공공선이 기준.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
