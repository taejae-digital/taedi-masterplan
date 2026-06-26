import { C } from "./constants";
import { Header, Footer, PageLead } from "./shared";
import { VERSION } from "./version";

const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 13.4, lineHeight: 1.8, color: C.body, textAlign: "justify" };
const em: React.CSSProperties = { color: C.accent, fontWeight: 800 };

function H3({ no, title }: { no: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "0 0 9px", paddingBottom: 6, borderBottom: `2px solid ${C.ink}` }}>
      <span style={{ fontSize: 17, fontWeight: 900, color: C.ink, letterSpacing: -0.5 }}>{no}</span>
      <span style={{ fontSize: 15.5, fontWeight: 800, color: C.ink, letterSpacing: -0.4 }}>{title}</span>
    </div>
  );
}

const flow = [
  {
    k: "1.1", label: "디지털 전환",
    t: "디지털 기술이 강화시키는 개인",
    industrial: "산업화: 생산 효율을 위해 업무를 분업화하고 개인을 기능 단위로 배치",
    digital: "디지털: AI·데이터·컴퓨팅으로 개인의 자율 생산 능력을 확장",
    c: "#555555", soft: "#ffffff",
  },
  {
    k: "1.2", label: "개인의 필요와 공동체",
    t: "생존·표준을 넘어 정체성과 다양성을 살리는 공동체로 간다",
    industrial: "산업화: 표준 교육·직장·복지로 개인을 줄 세움",
    digital: "디지털: 정체성의 발견·실험·훈련·발휘를 이어 줌",
    c: "#555555", soft: "#ffffff",
  },
  {
    k: "1.3", label: "경제·정치질서의 변화와 새 사회계약",
    t: "정체성을 고유한 기여로 발휘할 기본 여건을 보장한다",
    industrial: "산업화: 효율을 위해 개인의 역할·시간·성과를 표준화",
    digital: "디지털: 개인이 자기 정체성을 고유한 기여로 발휘하도록 공동체가 여건을 보장",
    c: "#555555", soft: "#ffffff",
  },
  {
    k: "1.4", label: "경영 전략",
    t: "정체성 생태계를 세계·국가·도시·가정에서 경영",
    industrial: "산업화: 중앙정부·대기업이 표준화된 성장·복지 질서를 설계",
    digital: "디지털: 세계·국가·도시·가정이 다양한 정체성 생태계를 경영",
    c: "#555555", soft: "#ffffff",
  },
];

function FlowCard({ f, last }: { f: (typeof flow)[number]; last: boolean }) {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "stretch" }}>
      <div style={{ flex: 1, background: f.soft, border: `1px solid ${C.cardBorder}`, borderTop: `4px solid ${C.ink}`, borderRadius: 3, padding: "14px 15px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginBottom: 6 }}>
          <span style={{ fontSize: 15, fontWeight: 900, color: f.c, letterSpacing: -0.5 }}>{f.k}</span>
          <span style={{ fontSize: 11, fontWeight: 800, color: f.c, letterSpacing: 1, opacity: 0.8 }}>{f.label}</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 800, color: C.ink, lineHeight: 1.32, marginBottom: 10, letterSpacing: -0.3 }}>{f.t}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11.3, color: C.body, lineHeight: 1.4, marginTop: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "12px 1fr", gap: 5 }}><span style={{ color: C.faint }}>—</span><span>{f.industrial}</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "12px 1fr", gap: 5 }}><span style={{ color: f.c, fontWeight: 900 }}>—</span><span style={{ fontWeight: 700, color: f.c }}>{f.digital}</span></div>
        </div>
      </div>
      {!last && <div style={{ display: "flex", alignItems: "center", padding: "0 10px", fontSize: 22, color: C.faint, fontWeight: 300 }}>→</div>}
    </div>
  );
}

export function VisionPage() {
  return (
    <div style={{ height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column", background: "#fff" }}>
      <Header subtitle="1. 비전" chapterNo="01" version={VERSION} />

      <PageLead
        kicker="VISION"
        thesis="디지털 전환은 개인을 자유롭게 하는 데 그치지 않고, 표준화된 능력의 가치를 낮추고 고유한 정체성을 생산의 원천으로 밀어 올리는 구조 변화다."
        summary="AI와 로봇이 표준화된 일·단순 분석·반복 생산을 대체하면 남과 비슷하게 잘하는 능력의 가치는 떨어지고, 남과 다른 문제를 자기 방식으로 푸는 고유한 기여가 가치의 중심이 된다. 정체성은 감성적 자기표현이 아니라 AI 시대 생산성의 원천이며, 새 사회계약은 개인이 태어나고 배우고 일하고 늙어가는 과정에서 필요한 공동체를 다시 배치하는 일이다."
      />

      {/* 인과 흐름 4스텝 (화살표 체인) */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "22px 48px 22px", gap: 0 }}>
        {flow.map((f, i) => (
          <FlowCard key={f.k} f={f} last={i === flow.length - 1} />
        ))}
      </div>

      {/* 본문 2x2 — 줄글 */}
      <div style={{ padding: "6px 48px 0", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 42, rowGap: 18, flex: 1 }}>
        <div>
          <H3 no="1.1" title="디지털 전환 — 개인의 자율 생산 능력이 확장된다" />
          <p style={ps}>
            <strong style={em}>농업사회에서 일은 생업이었고, 그 방식은 협동이었다. 산업사회에서 일은 직무였고, 그 방식은 분업이었다.</strong> 일을 나누고 개인을 기능 단위로 배치해 대량생산의 효율을 만들었다. 한 사람은 전체 목적을 설계하기보다 정해진 직무를 수행했고, 기업과 국가는 그 기능들을 결합해 표준 상품과 표준 성장을 만들었다. 이 질서에서 개인의 경제적 위치는 주로 <strong style={em}>어떤 조직에 취업해 어떤 기능을 맡는가</strong>로 결정되었다.
          </p>
          <p style={ps}>
            AI를 비롯한 디지털 기술이 표준화된 스킬을 대신하면서, 남과 비슷하게 잘하는 능력의 값은 빠르게 떨어진다. 이제 가치는 <strong style={em}>무엇을 문제로 보고, 어떤 관점으로 풀 것인가</strong>에서 나오며, 그 차이를 만드는 것이 곧 정체성이다.
          </p>
          <p style={ps}>
            <strong style={em}>디지털사회에서 일은 정체성의 발휘가 되고, 그 방식은 정체성 기반 협업이 된다.</strong> AI·데이터·컴퓨팅은 분석·기획·제작·유통·조율의 비용을 낮추고 과거 조직 내부에 묶여 있던 생산 능력을 개인에게 내려준다. 생산 능력이 개인화되면 작고 구체적인 필요도 경제성을 갖는다. 대기업이 보기에는 너무 작았던 수요, 표준 상품으로는 포착되지 않던 니치마켓이 개인 생산자의 시장이 되고, 그 결과 시장과 공동체는 다양화된다. 크리스 앤더슨(前 『와이어드』 편집장)은 <em style={{ fontStyle: "normal", color: C.muted, fontWeight: 600 }}>『롱테일』(2006)에서 생산·유통 비용이 낮아질수록 무수한 틈새 수요가 합쳐져 거대한 시장이 된다고 본다.</em>
          </p>
        </div>

        <div>
          <H3 no="1.3" title="경제·정치질서의 변화와 새로운 사회계약 — 정체성을 고유한 기여로 발휘할 기본 여건을 보장한다" />
          <p style={ps}>
            개인의 강화는 질서 자체를 바꾼다. 경제는 규모의 경제에서 <strong style={em}>정체성 기반 생산자 경제</strong>로, 정치는 국가 독점에서 <strong style={em}>도시와 세계정부</strong>로 권한이 재배치된다. 취업 중심 경제에서는 공동체가 개인의 역할·시간·성과를 표준화했다. 표준화는 대량생산에는 적합했지만, 강화된 개인들의 다양한 문제의식과 고유한 기여를 충분히 살리지 못한다. 디지털 경제는 반대로 개인의 차이를 생산성의 원천으로 삼는다. 각자가 다른 문제를 발견하고 다른 방식으로 해결할수록 더 작은 수요, 더 구체적인 시장, 더 다양한 공동체 기여가 생긴다.
          </p>
          <p style={ps}>
            <strong style={em}>산업화는 분업의 시대였다.</strong> 기획·디자인·개발·실행을 나누고 각자가 맡은 기능을 수행했다. AI가 스킬을 대신하기 시작하면 협업의 기준도 바뀐다. <strong style={em}>디지털은 정체성 기반 협업의 시대다.</strong> 같은 미션을 보며 각자의 경험·관점·문제의식을 AI에 함께 넣을 때, 한 사람이 보지 못한 가능성이 열린다. 새 사회계약은 이 정체성 기반 협업이 파편화와 격차로 흩어지지 않도록, <strong style={em}>정체성을 고유한 기여로 발휘할 여건</strong>을 공동체가 보장하는 약속이다.
          </p>
        </div>

        <div>
          <H3 no="1.2" title="개인의 필요와 공동체 — 시대마다 필요한 몫이 달라진다" />
          <p style={ps}>
            농업 시대의 핵심은 <span style={{ color: C.teal, fontWeight: 900 }}>생존</span>이었다. 출생부터 노년까지 삶의 대부분을 집안과 마을이 맡았다. 아이는 가족과 이웃의 손에서 자라고, 일은 집안과 마을 안에서 배우며, 노년은 가족의 봉양에 기대었다. 산업화 시대의 핵심은 <span style={{ color: C.teal, fontWeight: 900 }}>표준</span>이었다. 아이는 표준 교육을 받고, 청년은 좋은 직장에 들어가고, 노년은 연금과 복지에 기대었다.
          </p>
          <p style={ps}>
            선택지는 넓어진 것처럼 보였지만, 실제로는 학교·회사·국가가 정해 놓은 길 안에서 움직였다. 표준은 곧 줄세우기였다. 디지털 시대의 핵심은 <span style={{ color: C.teal, fontWeight: 900 }}>정체성</span>이다. 개인마다 다른 기질·강점·관심이 먼저 보이고, 그 다양성이 낭비되지 않아야 한다. 타고난 단서를 일찍 발견하고, 관심을 실험하고, 강점을 훈련하고, 정체성을 실제 기여로 발휘할 무대가 필요하다.
          </p>
          <p style={ps}>
            그래서 공동체의 역할도 더 세밀해질 것이다. 가정은 아이의 단서를 가장 먼저 보고, 이웃은 안전한 실험의 기회를 만들고, 마을은 관심을 훈련으로 이어 준다. 도시는 주거·일·의료·학습이 이어지는 생활권이 되고, 국가는 어디에 살든 최소 권리선과 위험 규칙을 보장해야 한다. 공동체는 개인을 정해진 길에 넣는 틀이 아니라, 그 사람이 발견되고 훈련되고 발휘되도록 이어주는 기반이 되어야 한다.
          </p>
        </div>

        <div>
          <H3 no="1.4" title="경영 전략 — 정체성 생태계를 세계·국가·도시·가정에서 운영한다" />
          <p style={ps}>
            정체성 기반 생산은 개인의 의지만으로 작동하지 않는다. 세계는 AI와 데이터가 전쟁·감시·독점으로 흐르지 않도록 공통 규칙을 만들고, 국가는 AI·데이터·컴퓨팅 접근과 안전망을 보장해야 한다. 도시는 산업·교육·문화·규제 실험이 연결되는 생활권이 되어야 하며, 가정은 개인의 관심·재능·건강·관계가 처음 발견되는 기반이 되어야 한다.
          </p>
          <p style={ps}>
            세계 경영은 <strong style={em}>미·중 패권경쟁을 협력으로 변화</strong>시키고, <strong style={em}>한국을 AI 사회계약 실험장·규칙 설계자</strong>로 세운다. 국가 경영은 전략·산업·정치·미디어가 함께 움직이는 운영체계를 만들고, 핵심 산업을 수도권·중부·동남권·서남권 벨트로 배치한다. 도시 경영은 시산학(市·産·學) 생태계의 실현장으로서 도시별 산업·규제·세금·교육·문화 규칙을 달리해 생활권 실험장을 만들고, 가정 경영은 관심·재능·건강·관계 기록과 스마트홈을 학습·멘토·도시 기회로 연결한다. 엘리너 오스트롬(인디애나대 교수·2009 노벨경제학상)은 <em style={{ fontStyle: "normal", color: C.muted, fontWeight: 600 }}>『공유의 비극을 넘어』(1990)에서 공유자원은 단일 중앙권력보다 여러 층위가 겹치는 다층 거버넌스에서 더 잘 관리된다고 입증했다.</em>
          </p>
        </div>
      </div>

      <div style={{ marginTop: 16 }}><Footer version={VERSION} /></div>
    </div>
  );
}
