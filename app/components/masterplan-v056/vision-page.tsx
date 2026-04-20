import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function VisionPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 비전 v0.5.6 — 개인의 시대와 새로운 질서의 설계" />

      <div style={{ padding: "18px 32px 14px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          디지털 기술은 개인이 기관을 대체하는 역량 이전을 촉발하며,<br />
          우리는 이제 강화된 개인이 공공선으로 흐를 수 있는 새로운 질서의 조건을 설계한다.
        </div>
      </div>

      <div style={{ padding: "0 32px" }}>
        <div style={h3s}>1. 우리가 서 있는 지점</div>
        <p style={ps}>
          핵 기술은 인류에게 전례 없는 파괴력을 안겨주었다. 그 위험을 제어할 국제 거버넌스는 기술의 속도를 따라가지 못했고, 세계는 여전히 핵 위협의 그림자 아래 머문다. 디지털 기술, 특히 AI는 그보다 더 빠르게, 더 광범위하게 개인과 공동체와 국제 질서를 바꾸고 있다. 핵 개발을 막지 못했던 역사를 되풀이하지 않으려면, 전환이 완성된 후가 아니라 지금 설계해야 한다. 기술은 스스로 좋은 사회를 만들지 않는다. 기술이 바꾸는 인간과 관계의 구조를 먼저 읽고, 그에 맞는 질서를 의식적으로 설계해야만 황금기가 도래한다.
        </p>

        <p style={ps}>
          이 연구의 핵심 질문은 하나다. <strong style={{ color: C.navy }}>정보화 사회에서 자본주의도 공산주의도 아닌, 새로운 경제질서와 정치질서는 무엇인가.</strong> 이 질문이 중요한 이유는 디지털 기술이 개인을 근본적으로 바꾸기 때문이다. 디지털 기술은 인쇄술이 지식의 수신 능력을 대중화했던 것을 넘어, 지식의 생산·유통·적용 능력까지 대중화하며 개인이 기관 수준의 콘텐츠를 제작하고 글로벌 네트워크에 직접 닿게 한다. 인쇄술이 300년에 걸쳐 만든 변화를 디지털 기술은 30년 이내에 압축적으로 재현하고 있으며, 그 깊이는 인쇄술을 초과한다.
        </p>

        <p style={ps}>
          디지털 기술은 이전의 어떤 기술과도 다른 지점에서 인간을 바꾼다. 바퀴와 증기기관이 물리적 능력을 확장했다면, 문자와 인쇄술은 기억과 소통을 확장했다. 그러나 판단과 추론 — 전문가의 권위, 관리자의 존재 이유, 의사결정자의 지위가 세워져 있던 인지 영역 — 은 마지막까지 인간의 몫으로 남아 있었다. AI는 바로 그 마지막 영역에 진입한다. 기관에 집중돼 있던 전문성, 정보, 네트워크, 생산수단이 동시에 개인에게 이전되면서, 개인이 기관을 대체하거나 기관을 통하지 않고도 복잡한 과업을 해결하는 '강화된 개인'이 탄생한다.
        </p>

        <p style={ps}>
          이러한 개인의 등장은 기존 질서에 대한 정당성 질문으로 이어진다. 스스로 정보를 취득하고, 전문적 판단을 내리며, 자원을 조달할 수 있는 개인은 왜 국가와 기관이 자신을 대신해 결정하는 구조에 복종해야 하는지 묻기 시작한다. 이는 단순한 기술 변화가 아니라 정치철학적 전환이다. 강화된 개인이 자율, 의미, 기여, 인정이라는 새로운 갈망을 가질 때, 공동체는 이를 억압하는 대신 새로운 위임 계약을 통해 개인의 역량이 공공선으로 흐를 수 있는 질서의 조건을 제공해야 한다.
        </p>

        <p style={ps}>
          그러나 이 재분배는 자동으로 긍정적 결과를 낳지 않는다. 한 명이 만들 수 있는 가치의 규모가 커진 만큼 피해의 규모도 커진다. 한 명의 해커가 시스템을 마비시키고, AI가 대량살상 수단의 진입장벽을 허무는 '폭력의 민주화'가 발생한다. 디지털 기술이 만드는 권력 재분배는 방향이 정해지지 않은 재분배이다. 해방의 방향으로 흐를 수도 있고, 디지털 봉건제의 방향으로 굳을 수도 있다. 그 방향을 결정하는 것이 지금 우리가 수행하는 새로운 질서 설계의 본질이다.
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
          {[
            { label: "역량 이전", desc: "전문성, 정보, 생산수단이 기관에서 개인으로 이전.", color: C.navy },
            { label: "실질적 자율권", desc: "자신의 삶을 주체적으로 기획하고 기여를 인정받는 권리.", color: C.accent },
            { label: "폭력의 민주화", desc: "가치 창출과 마찬가지로 파괴의 진입장벽도 낮아짐.", color: C.red },
            { label: "조건 설계", desc: "질서 자체가 아닌, 질서가 작동할 건강한 조건을 미리.", color: C.amber },
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
