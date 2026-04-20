import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function VisionPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 비전 — 개인의 시대와 새로운 질서의 설계" />

      <div style={{ padding: "18px 32px 14px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          기술이 개인을 바꾸고, 개인이 공동체를 바꾸고, 공동체가 질서를 바꾼다.<br />
          이 순서는 한 번도 역전된 적이 없다. 지금, 설계해야 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px" }}>
        <div style={h3s}>1. 우리가 서 있는 지점</div>
        <p style={ps}>
          핵 기술은 인류에게 전례 없는 파괴력을 안겨주었다. 그 위험을 제어할 국제 거버넌스는 기술의 속도를 따라가지 못했고, 세계는 여전히 핵 위협의 그림자 아래 머문다. 디지털 기술, 특히 AI는 그보다 더 빠르게, 더 광범위하게 개인과 공동체와 국제 질서를 바꾸고 있다. 핵 개발을 막지 못했던 역사를 되풀이하지 않으려면, 전환이 완성된 후가 아니라 지금 설계해야 한다. 기술은 스스로 좋은 사회를 만들지 않는다. 기술이 바꾸는 인간과 관계의 구조를 먼저 읽고, 그에 맞는 질서를 의식적으로 설계해야만 황금기가 도래한다.
        </p>

        <p style={ps}>
          이 연구의 핵심 질문은 하나다. <strong style={{ color: C.navy }}>정보화 사회에서 자본주의도 공산주의도 아닌, 새로운 경제질서와 정치질서는 무엇인가.</strong> 이 질문이 중요한 이유는 디지털 기술이 개인을 근본적으로 바꾸기 때문이다. 개인이 바뀌면 공동체가 바뀌고, 공동체가 바뀌면 질서가 바뀐다. 농업 기술은 정주와 축적을, 인쇄술은 신앙과 지식의 자율을, 산업 기계는 직업과 이동의 자유를 가능하게 했다. 그리고 매번 새로운 개인이 먼저 등장한 뒤에야 비로소 그에 맞는 경제·정치 질서가 뒤따랐다. 이 순서는 지금까지 단 한 번도 거꾸로 간 적이 없다.
        </p>

        <p style={ps}>
          디지털 기술은 이전의 어떤 기술과도 다른 지점에서 인간을 바꾼다. 바퀴와 증기기관이 물리적 능력을 확장했다면, 문자와 인쇄술은 기억과 소통을 확장했다. 그러나 판단과 추론 — 전문가의 권위, 관리자의 존재 이유, 의사결정자의 지위가 세워져 있던 인지 영역 — 은 마지막까지 인간의 몫으로 남아 있었다. AI는 바로 그 마지막 영역에 진입한다. 기관에 집중돼 있던 전문성, 정보, 네트워크, 생산수단이 동시에 개인에게 이전되면서, 기관의 존재 이유 자체가 재질문된다. 한 사람이 예전에는 기관 전체가 해내던 일을 수행할 수 있게 되면, 그 사람이 왜 기관에 자신의 결정권을 넘겨야 하는지에 대한 답도 달라진다.
        </p>

        <p style={ps}>
          그러나 역량이 강화된 개인이 자동으로 현명한 개인이 되지는 않는다. 한 명이 만들 수 있는 가치의 규모가 커진 만큼, 한 명이 야기할 수 있는 피해의 규모도 커진다. 한 명의 해커가 수백만 명의 개인정보를 유출하고, 한 명의 영향력자가 수천만 명의 판단을 왜곡하며, 작은 집단이 과거 국가급 자원이 필요했던 무기를 만들 수 있다. 디지털 기술이 만드는 권력 재분배는 방향이 정해지지 않은 재분배이다. 해방의 방향으로 흐를 수도 있고, 디지털 봉건제의 방향으로 굳을 수도 있다. 그 방향을 결정하는 것이 새로운 질서 설계의 과제다.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "14px 0 14px" }}>
          <div style={{ padding: "12px 16px", borderTop: `3px solid ${C.navy}`, background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>개인 수준 — 우리가 목표하는 미래</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.75, color: "#222" }}>
              누구나 재능과 목적에 맞게 삶을 설계할 수 있는 구조. 직업이 사라져도 정체성이 무너지지 않는 구조. 시장의 교환가치로 환원되지 않는 돌봄·학습·창작의 기여가 인정받는 구조. 50대에 배움을 새로 시작하고, 30대에 쉼을 선택할 수 있는 유연성이 특권이 아니라 기본값이 되는 사회.
            </div>
          </div>
          <div style={{ padding: "12px 16px", borderTop: `3px solid ${C.green}`, background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.green, marginBottom: 6 }}>세계 수준 — 우리가 목표하는 미래</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.75, color: "#222" }}>
              전쟁을 걱정하지 않아도 되는 삶. 개인의 안전이 확보될 때 과도한 권한 위임이 줄고, 국가가 전쟁 기계로 전환될 유인도 줄어든다. 개인의 안전과 세계 평화는 같은 구조의 양면이며, 미중 대결을 합의로 전환시킬 수 있는 경로가 곧 개인의 자유를 지키는 경로다.
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 16px", background: "#fff8e1", borderLeft: `5px solid ${C.amber}`, marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.amber, marginBottom: 5 }}>지금이 마지막 설계의 창이다</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.75, color: "#222" }}>
            산업시대에는 먼저 돌려보고 나중에 고쳐도 늦지 않았다. AI는 스스로 판단하고 행동하기 때문에 사후 교정 비용이 질적으로 다르다. 질서 자체를 위에서 설계하려는 시도는 실패하지만, 질서가 건강하게 작동할 조건 — 경쟁의 틀, 책임의 구조, 권력이 스스로 해체되는 장치 — 은 지금만 설계할 수 있다. 전환이 완성된 뒤에는 이미 늦다.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "순서의 법칙", desc: "개인 → 공동체 → 질서. 역전된 적 없음.", color: C.navy },
            { label: "판단의 이전", desc: "AI는 마지막까지 남아 있던 인지 영역에 진입.", color: C.accent },
            { label: "방향 없는 재분배", desc: "해방이 될 수도, 디지털 봉건제가 될 수도.", color: C.red },
            { label: "조건 설계", desc: "질서가 아닌, 질서가 작동할 조건을 미리.", color: C.amber },
          ].map(({ label, desc, color }) => (
            <div key={label} style={{ padding: "10px 12px", borderLeft: `4px solid ${color}`, background: "#fff", border: `1px solid ${C.line}` }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
