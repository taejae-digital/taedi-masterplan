import { C } from "./constants";
import { Header, Footer, PageLead } from "./shared";
import { VERSION } from "./version";

const ps: React.CSSProperties = { margin: "0 0 13px", fontSize: 14, lineHeight: 1.92, color: C.body, textAlign: "justify" };

function H3({ no, title }: { no: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "0 0 11px", paddingBottom: 7, borderBottom: `2px solid ${C.navy}` }}>
      <span style={{ fontSize: 18.5, fontWeight: 900, color: C.accent }}>{no}</span>
      <span style={{ fontSize: 18.5, fontWeight: 800, color: C.navy, letterSpacing: -0.3 }}>{title}</span>
    </div>
  );
}

const flow = [
  {
    k: "1.1",
    label: "디지털 전환",
    t: "디지털 기술이 강화시키는 개인",
    industrial: "산업화: 생산 효율을 위해 업무를 분업화하고 개인을 기능 단위로 배치",
    digital: "디지털: AI·데이터·컴퓨팅으로 개인의 자율 생산 능력을 확장",
    c: C.accent,
  },
  {
    k: "1.2",
    label: "개인의 강화",
    t: "강화된 개인이 필요로 하는 자유와 권리",
    industrial: "산업화: 공동체는 목적 달성을 위해 분업화된 개인의 기능을 결합",
    digital: "디지털: 공동체는 방향을 공유한 개인들의 시너지를 조직",
    c: C.teal,
  },
  {
    k: "1.3",
    label: "새로운 사회계약",
    t: "정체성이 고유한 기여로 전환될 여건을 보장",
    industrial: "산업화: 효율을 위해 개인의 역할·시간·성과를 표준화",
    digital: "디지털: 정체성이 고유한 기여로 전환될 여건을 공동체가 보장",
    c: C.amber,
  },
  {
    k: "1.4",
    label: "경영 전략",
    t: "정체성 생태계를 세계·국가·도시·가정에서 경영",
    industrial: "산업화: 중앙정부·대기업이 표준화된 성장·복지 질서를 설계",
    digital: "디지털: 세계·국가·도시·가정이 다양한 정체성 생태계를 경영",
    c: C.rose,
  },
];

export function VisionPage() {
  return (
    <div style={{ minHeight: "281mm", display: "flex", flexDirection: "column", background: "#fff" }}>
      <Header subtitle="1. 비전" version={VERSION} />

      <PageLead
        thesis="디지털 시대는 생산능력의 개인화로 경제를 다양화하고, 강화된 개인에게 더 큰 자유를 요구한다."
        summary="새 사회계약은 그 자유가 공동체 안에서 충돌하지 않고 조화되도록 설계하며, 이를 세계·국가·도시·가정 경영으로 실행한다. 경제는 취업한 개인을 표준 직무에 배치하는 방식에서, 강화된 개인들이 정체성에 기반해 생산하고 서로의 관점과 기여를 연결해 시너지를 만드는 방식으로 이동한다."
      />

      {/* 인과 흐름 4박스 */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "14px 40px 14px", gap: 0 }}>
        {flow.map((f, i) => (
          <div key={f.k} style={{ display: "flex", flex: 1, alignItems: "stretch" }}>
            <div style={{ flex: 1, background: C.cardBg, border: `1px solid ${C.cardBorder}`, borderTop: `3px solid ${f.c}`, borderRadius: 8, padding: "11px 13px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 900, color: f.c }}>{f.k}</span>
                <span style={{ fontSize: 11.5, fontWeight: 800, color: C.muted, letterSpacing: 0.3 }}>{f.label}</span>
              </div>
              <div style={{ fontSize: 13.8, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 8 }}>{f.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 11.3, color: C.body, lineHeight: 1.36, marginTop: "auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 5 }}><span style={{ color: C.muted }}>·</span><span>{f.industrial}</span></div>
                <div style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 5 }}><span style={{ color: f.c, fontWeight: 800 }}>·</span><span style={{ fontWeight: 600, color: C.ink }}>{f.digital}</span></div>
              </div>
            </div>
            {i < flow.length - 1 && <div style={{ display: "flex", alignItems: "center", padding: "0 9px", fontSize: 20, color: C.cardBorder, fontWeight: 300 }}>→</div>}
          </div>
        ))}
      </div>

      {/* 본문 2x2 */}
      <div style={{ padding: "4px 40px 0", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 36, rowGap: 18, flex: 1 }}>
        <div>
          <H3 no="1.1" title="디지털 전환 — 개인의 자율 생산 능력이 확장된다" />
          <p style={ps}>
            <strong>산업화의 기본 원리는 분업이었다.</strong> 일을 나누고 개인을 기능 단위로 배치해 대량생산의 효율을 만들었다. 한 사람은 전체 목적을 설계하기보다 정해진 직무를 수행했고, 기업과 국가는 그 기능들을 결합해 표준 상품과 표준 성장을 만들었다. 이 질서에서 개인의 경제적 위치는 주로 <strong>어떤 조직에 취업해 어떤 기능을 맡는가</strong>로 결정되었다.
          </p>
          <p style={ps}>
            <strong>디지털 시대의 기본 원리는 생산 능력의 개인화다.</strong> AI·데이터·컴퓨팅은 분석·기획·제작·유통·조율의 비용을 낮추고 과거 조직 내부에 묶여 있던 생산 능력을 개인에게 내려준다. 생산 능력이 개인화되면 작고 구체적인 필요도 경제성을 갖는다. 대기업이 보기에는 너무 작았던 수요, 표준 상품으로는 포착되지 않던 니치마켓이 개인 생산자의 시장이 되고, 그 결과 시장과 공동체는 다양화된다.
          </p>
        </div>

        <div>
          <H3 no="1.3" title="새로운 사회계약 — 정체성이 고유한 기여로 전환될 여건을 보장한다" />
          <p style={ps}>
            취업 중심 경제에서는 공동체가 개인의 역할·시간·성과를 표준화했다. 표준화는 대량생산에는 적합했지만, 강화된 개인들의 다양한 문제의식과 고유한 기여를 충분히 살리지 못한다. 디지털 경제는 반대로 개인의 차이를 생산성의 원천으로 삼는다. 각자가 다른 문제를 발견하고 다른 방식으로 해결할수록 더 작은 수요, 더 구체적인 시장, 더 다양한 공동체 기여가 생긴다.
          </p>
          <p style={ps}>
            문제는 이 다양성이 그냥 두면 협업이 아니라 파편화와 격차로 흩어진다는 점이다. AI·데이터·컴퓨팅 접근이 없거나, 플랫폼 추천에만 노출되거나, 시장과 연결되지 않으면 정체성은 고유한 기여로 이어지지 못한다. 새 사회계약은 개인의 자유를 줄이는 장치가 아니라, <strong>정체성이 고유한 기여로 전환될 여건</strong>을 공동체가 보장하는 약속이다.
          </p>
        </div>

        <div>
          <H3 no="1.2" title="개인의 강화 — 정체성은 고유한 기여의 기준이 된다" />
          <p style={ps}>
            개인이 강화되면 경제의 질문도 바뀐다. 산업화 시대의 핵심 질문은 “어디에 취업할 것인가”였다. 개인은 기업과 공동체가 정한 목적 안에서 자신의 기능을 제공했고, 공동체는 분업화된 개인들을 결합해 효율을 만들었다. 그러나 AI가 평균적 수행을 빠르게 대체하면 단순히 주어진 일을 잘하는 능력의 가치는 급격히 줄어든다.
          </p>
          <p style={ps}>
            앞으로 중요한 것은 어떤 기능을 수행하느냐가 아니라 <strong>무엇을 중요하게 보고, 누구의 어떤 필요를 풀 것인가</strong>다. 산업화 시대에 리더와 사업가가 하던 질문을, 디지털 시대에는 강화된 개인들이 직접 하게 된다. 그러려면 개인은 표준 직무·경로에 묶이지 않고 자기 문제의식과 고유한 기여를 실험할 <strong>더 큰 자유</strong>를 가져야 한다. 정체성은 취향이나 자기표현이 아니라, 개인화된 생산에서 고유한 기여를 만드는 기준이다.
          </p>
        </div>

        <div>
          <H3 no="1.4" title="경영 전략 — 정체성 생태계를 세계·국가·도시·가정에서 운영한다" />
          <p style={ps}>
            정체성 기반 생산은 개인의 의지만으로 작동하지 않는다. 세계는 AI와 데이터가 전쟁·감시·독점으로 흐르지 않도록 공통 규칙을 만들고, 국가는 AI·데이터·컴퓨팅 접근과 안전망을 보장해야 한다. 도시는 산업·교육·문화·규제 실험이 연결되는 생활권이 되어야 하며, 가정은 개인의 관심·재능·건강·관계가 처음 발견되는 기반이 되어야 한다.
          </p>
          <p style={ps}>
            세계 경영은 미·중 패권경쟁이 WMD 확산·자율살상무기·군사 오판·시장 분열로 번지지 않도록 레드라인과 교환물을 설계하고, 한국을 AI 사회계약 실험장·규칙 설계자로 세운다. 국가 경영은 學·産·市·媒가 함께 움직이는 운영체계를 만들고, 15대 산업을 수도권·중부·동남권·서남권 벨트로 배치한다. 도시 경영은 도시별 산업·규제·세금·교육·문화 규칙을 달리해 생활권 실험장을 만들고, 가정 경영은 관심·재능·건강·관계 기록과 스마트홈을 학습·멘토·도시 기회로 연결한다.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 14 }}><Footer version={VERSION} /></div>
    </div>
  );
}
