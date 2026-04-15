/* p.4 — 경제 질서의 전환 (narrative v0.3.10 4장+5장, Polanyi 중심) */
import { C } from "./constants";
import { Header, Footer, Banner, SectionTitle, body } from "./shared";

export function EconomicOrderPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="4. 경제 질서의 전환 — 시장은 자연이 아니다" />

      <Banner>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          현재의 시장 경제 질서는 영속적이지 않다. 역사적으로 구성된 질서이며, 조건이 바뀌면 질서도 바뀐다.
        </div>
        <div style={{ fontSize: 12.5, color: "#444", marginTop: 3 }}>
          Karl Polanyi, <em>The Great Transformation</em> (1944)의 핵심 논증을 AI 시대에 재해석한다.
        </div>
      </Banner>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* 왼쪽: Polanyi + 노동·가치·규모 */}
        <div>
          <SectionTitle>Polanyi의 세 가지 논증</SectionTitle>
          {[
            {
              num: "1", title: "자기조절 시장은 역사적 예외",
              desc: "인류 역사 대부분에서 경제는 사회적 관계에 '배태(embedded)'되어 있었다. 호혜, 재분배, 가계 경영이 기본 원리. 시장이 분리된 것은 19세기 영국의 특수한 사건 — 국가의 입법과 강제로 인위적으로 만들어진 것.",
              color: C.navy,
            },
            {
              num: "2", title: "시장 분리 시 필연적 파괴",
              desc: "토지·노동·화폐는 '허구적 상품'. 본래 판매를 위해 생산된 것이 아니다. 이것들을 시장 논리에 종속시키면 인간과 자연이 파괴된다. 노동 운동·사회보험·환경 규제는 이 파괴에 대한 사회의 자기보호 운동.",
              color: C.red,
            },
            {
              num: "3", title: "이중 운동 — 근대사의 동력",
              desc: "시장 확장 ↔ 사회의 자기보호 사이의 긴장. 저항이 과격해지면 파시즘이나 사회주의로 귀결. 두 차례 세계대전은 이 긴장의 폭발적 귀결이었다.",
              color: C.amber,
            },
          ].map(({ num, title, desc, color }) => (
            <div key={num} style={{ padding: "8px 12px", borderLeft: `4px solid ${color}`, marginBottom: 8, background: "#fff" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 3 }}>{num}. {title}</div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: "#222" }}>{desc}</div>
            </div>
          ))}

          <SectionTitle>AI가 바꾸는 경제의 세 축</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
            {[
              {
                title: "노동의 변형", color: C.red,
                items: ["반복 작업의 시장가치 하락", "노동 = 유일한 시장 참여 통로", "이 통로가 좁아짐", "단순 실업이 아닌 참여 방식의 변화"],
              },
              {
                title: "가치의 재편", color: C.green,
                items: ["관계·신뢰·맥락적 판단 상승", "코드는 AI가, '무엇을 왜'는 사람", "시장 가격 환원 불가능한 가치", "경제 중심으로 이동"],
              },
              {
                title: "규모의 해체", color: C.navy,
                items: ["소규모 = 대규모 생산성", "1인 기업 ≈ 100인 기업 산출", "니치 마켓의 구조적 확장", "대량 생산 → 맞춤형 다변화"],
              },
            ].map(({ title, color, items }) => (
              <div key={title} style={{ padding: "8px 10px", borderTop: `3px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 12, fontWeight: 800, color, marginBottom: 5 }}>{title}</div>
                {items.map((t, i) => (
                  <div key={i} style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333", marginBottom: 2, paddingLeft: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color }}>—</span>{t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ padding: "10px 14px", background: "#f0fdf4", borderLeft: `4px solid ${C.green}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.green, marginBottom: 3 }}>배태의 회복 가능성</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#111" }}>
              관계와 맥락이 가치의 기준, 소규모 공동체가 경제 단위 — 시장 분리 이전의 원리와 유사한 방향. 동일한 회귀가 아니라 기술적 조건이 전혀 다른 새 구성.
            </div>
          </div>
        </div>

        {/* 오른쪽: 경제→정치 + 저항 */}
        <div>
          <SectionTitle>경제 질서 → 정치 질서 (5장)</SectionTitle>
          <div style={{ ...body, marginBottom: 10 }}>
            경제 질서가 바뀌면 그 위의 정치 질서도 바뀐다. 자본주의가 먼저 나왔고 민주주의가 뒤따랐다.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.accent}`, background: C.bg }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.accent, marginBottom: 5 }}>산업혁명 → 민주주의</div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: "#333" }}>
                시장 경제가 봉건 경제를 대체 → 부르주아지가 정치적 발언권 요구 → 1832년 영국 선거법, 프랑스 혁명, 미국 건국
              </div>
            </div>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 5 }}>AI 시대 → ???</div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: "#333" }}>
                경제적 역량의 개인 이동 → 대의민주주의 전제에 의문 → "왜 4년에 한 번 투표로 끝나야 하는가?" → 투명성 요구 확대
              </div>
            </div>
          </div>

          <SectionTitle>기존 질서의 저항</SectionTitle>
          <div style={{ ...body, marginBottom: 10, padding: "8px 12px", background: "#fff5f5", borderLeft: `4px solid ${C.red}` }}>
            전환은 기존 질서의 수혜자에게 위협이다. 기업·교육 기관·금융 시스템·노동 시장 중개자들의 존재 기반이 흔들린다. 역사가 반복적으로 보여주듯, <strong>저항이 얼마나 격렬하고 오래 지속되느냐가 전환이 진화로 끝나느냐 혁명으로 끝나느냐를 결정한다.</strong>
          </div>

          <SectionTitle>경제·정치 질서 비교</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 12 }}>
            <thead>
              <tr>
                <th style={{ padding: "5px 6px", background: "#444", color: "#fff", textAlign: "left", fontSize: 11 }}>구분</th>
                <th style={{ padding: "5px 6px", background: "#92400e", color: "#fff", textAlign: "center", fontSize: 11 }}>산업화 시대</th>
                <th style={{ padding: "5px 6px", background: C.navy, color: "#fff", textAlign: "center", fontSize: 11 }}>AI 시대</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["경제 원리", "시장 가격 배분, 노동 = 상품", "관계·맥락 기반, 배태 회복"],
                ["생산 단위", "대규모 조직, 규모의 경제", "소규모 고역량, 니치 생태계"],
                ["가치 척도", "교환가치 (시장 가격)", "기여·관계·돌봄"],
                ["정치 참여", "4년 주기 투표, 대의민주주의", "상시 참여, 투명성 기반"],
                ["권력 구조", "선출직 + 자본 권력", "과업 한정, 완성 시 소멸"],
                ["국제 질서", "패권 경쟁, 군비 확장", "합의 기반, 과업별 협력"],
              ].map(([cat, old, next], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : C.bg }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#555", fontSize: 11.5 }}>{cat}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", textAlign: "center", color: "#555" }}>{old}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", textAlign: "center", fontWeight: 700, color: C.navy, background: "#f0f4ff" }}>{next}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>핵심 과제</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#111" }}>
              <strong>경제 질서의 논리와 전개를 먼저 탄탄히 세우는 것이 거버넌스보다 선행한다.</strong> 무엇을 왜 규제해야 하는지에 대한 합의 없이 만들어진 제도는 현실을 반영하지 못한다.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
