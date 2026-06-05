import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const ps: React.CSSProperties = { margin: "0 0 8px", fontSize: 12.4, lineHeight: 1.7, color: "#222", textAlign: "justify" };
const h3: React.CSSProperties = { ...h3s, fontSize: 16.2, marginBottom: 6 };

const flow = [
  {
    k: "1.1 디지털 전환",
    t: "정보와 지능이 대중화된다",
    d: "AI는 전문가와 거대 조직이 독점하던 판단·분석·창작·조율 능력을 개인에게 이전한다.",
    bg: C.bg,
    c: C.accent,
  },
  {
    k: "1.2 개인 강화",
    t: "능력 확장이 정체성의 질문을 연다",
    d: "AI가 직무 기능을 개인에게 넘기면 한 사람이 여러 직업의 일을 섞어 할 수 있다. 그래서 직업명보다 ‘나는 누구의 어떤 필요를 풀 것인가’가 핵심 질문이 된다.",
    bg: "#fff8f4",
    c: C.red,
  },
  {
    k: "1.3 새 사회계약",
    t: "작고 구체적인 필요를 새 가치로 연결한다",
    d: "가치의 기준이 오래 일한 시간이 아니라 작고 구체적인 필요를 발견하고 해결하는 능력으로 이동하므로, 정체성 실현권을 중심 권리로 두고 디지털 인프라 접근과 직접 참여를 그 실현 조건으로 보장한다.",
    bg: "#f0f5ff",
    c: "#2563eb",
  },
  {
    k: "1.4 경영전략",
    t: "권리를 운영 원리로 바꾼다",
    d: "새 사회계약은 세계·국가·도시·가정의 경영전략으로 구체화되어 생활과 제도 속에서 검증되어야 한다.",
    bg: "#f0fff4",
    c: "#16a34a",
  },
];

export function VisionPage() {
  return (
    <div style={{ height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="1. 비전" version={VERSION} />

      <div style={{ padding: "13px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 11.5, letterSpacing: 4, color: C.light, fontWeight: 700, marginBottom: 6 }}>VISION</div>
        <div style={{ fontSize: 19.2, fontWeight: 850, color: C.navy, lineHeight: 1.36 }}>
          디지털 전환이 확장한 개인의 능력을 정체성 실현의 자유로 연결하고,
          이를 새 사회계약과 세계·국가·도시·가정의 경영전략으로 제도화한다.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "stretch", padding: "7px 32px 8px", borderBottom: `1px solid ${C.line}`, marginBottom: 8, gap: 0 }}>
        {flow.map((f, i) => (
          <div key={f.k} style={{ display: "flex", flex: 1, alignItems: "stretch" }}>
            <div style={{ flex: 1, padding: "8px 11px", background: f.bg }}>
              <div style={{ fontSize: 10, fontWeight: 850, color: f.c, marginBottom: 2, letterSpacing: 0.4 }}>{f.k}</div>
              <div style={{ fontSize: 12.7, fontWeight: 850, color: C.navy, lineHeight: 1.28, marginBottom: 3 }}>{f.t}</div>
              <div style={{ fontSize: 11.7, color: "#444", lineHeight: 1.42 }}>{f.d}</div>
            </div>
            {i < flow.length - 1 && <div style={{ display: "flex", alignItems: "center", padding: "0 7px", fontSize: 18, color: C.navy, fontWeight: 300 }}>→</div>}
          </div>
        ))}
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
        <div>
          <div style={h3}>1.1 디지털 전환 — 정보와 지능의 대중화</div>
          <p style={ps}>
            디지털 전환은 인류가 스스로의 한계를 넘어서는 또 하나의 문명 전환이다. 농업은 인간을 자연의 불확실성에서 벗어나게 했고, 산업화는 신체노동의 한계를 넘어 대량생산과 대중사회를 만들었다. 디지털 전환은 <strong>정보와 지능을 대중화</strong>함으로써 인간의 인지적 한계를 넘어선다. AI는 소수 전문가와 거대 조직이 독점하던 판단·분석·창작·조율의 능력을 개인에게 이전하고 있다.
          </p>
          <p style={ps}>
            이 변화의 중심에는 기술이 아니라 <strong>능력이 확장된 개인</strong>이 있다. 과거에는 조직과 제도가 개인에게 필요한 지식과 판단을 배분했지만, 디지털시대에는 개인이 직접 지식에 접근하고, AI와 함께 판단하며, 자신의 생각을 생산과 실행으로 연결할 수 있다.
          </p>

          <div style={h3}>1.2 개인 강화 — 능력 확장이 정체성의 질문을 연다</div>
          <p style={ps}>
            산업시대의 개인은 직업, 조직, 국가, 시장 안에서 역할을 수행하는 존재였다. 직업 선택에서 정체성은 최우선 기준이 아니었다. 생계, 안정성, 학력, 시장 수요, 제도적 경로가 개인의 선택을 이끌었다. 직업은 개인이 무엇을 할 수 있는지, 어디에 속하는지, 어떤 소득과 지위를 갖는지를 설명하는 가장 강한 틀이었다.
          </p>
          <p style={ps}>
            디지털시대에는 이 틀이 약해진다. AI가 분석·창작·기획·실행 능력을 개인에게 넘기면, 한 사람이 여러 직업의 기능을 섞어 과거 조직 단위의 산출에 도달할 수 있다. 동시에 디지털 시장은 평균적인 대중 상품보다 작고 구체적인 필요를 더 많이 드러낸다. 이때 직업명은 개인이 누구의 어떤 필요를 이해하고 해결할 수 있는지 설명하지 못한다. 중요한 것은 어떤 직업에 속했는지가 아니라 <strong>누구의 어떤 필요를 발견하고, 어떤 조합의 능력으로 풀어낼 것인가</strong>다. 그래서 개인에게 남는 질문은 “무슨 직업을 가질 것인가”가 아니라 <strong>“어떤 정체성으로 누구의 필요를 풀 것인가”</strong>다.
          </p>

          <div style={h3}>1.3 질서의 균열 — 산업시대 경제와 정치의 한계</div>
          <p style={ps}>
            강화된 개인은 기존 질서 안에 그대로 수용될 수 없다. 산업시대 경제는 노동시간과 임금, 자본과 시장, 대량생산과 표준소비 위에 세워졌다. 산업시대 정치는 영토국가와 대표 위임, 관료제와 법원 판단 위에 세워졌다. 이 질서는 직업을 가진 개인, 국가에 속한 시민, 조직에 소속된 구성원을 기본 단위로 삼았다.
          </p>
        </div>

        <div>
          <p style={ps}>
            디지털시대에는 이 전제가 흔들린다. 산업시대에는 같은 시간, 같은 공정, 같은 직무를 수행하는 노동이 가치 측정의 중심이었다. 그러나 AI가 정형화된 인지노동을 대체하면, 단순히 오래 일하는 것보다 작고 구체적인 필요를 발견하고, 여러 기능을 조합해, 특정한 사람과 상황에 맞는 결과를 만들어내는지가 더 중요해진다. 여기서 정체성은 취향이나 자기표현이 아니라 <strong>어떤 필요를 중요하게 보고 어떤 방식으로 해결할지를 결정하는 기준</strong>이다. 그래서 가치는 노동시간이 아니라 작고 구체적인 필요를 해결하는 정체성 기반의 기여에서 나온다.
          </p>
          <p style={ps}>
            정보와 지능이 대중화되면 시민은 대표에게 모든 권한을 위임하는 존재가 아니라 의제 설정, 정책 설계, 감시, 검증에 직접 참여할 수 있는 주체가 된다. 경제와 정치의 기본 단위가 다시 정의되어야 한다.
          </p>

          <div style={h3}>1.4 새로운 사회계약 — 정체성 실현을 위한 권리 체계</div>
          <p style={ps}>
            디지털시대에는 강화된 개인의 자유를 공동체의 지속 가능성과 연결할 새로운 사회계약이 필요하다. 새로운 사회계약은 정체성 실현권을 중심 권리로 두고, 디지털 인프라 접근권과 직접 거버넌스 참여권을 그 실현을 가능하게 하는 하위 조건으로 배치하는 권리 구조다.
          </p>
          <p style={ps}>
            첫째, <strong>정체성 실현권</strong>이다. 개인은 직업과 소속에 자신을 맞추는 것이 아니라, 자신의 정체성을 발견하고 훈련하고 실현하며, 그 기여를 경제와 정치 질서 안에서 인정받아야 한다. 둘째, <strong>디지털 인프라 접근권</strong>이다. AI, 데이터, 연산 자원, 네트워크, 학습 자원에 접근할 수 있어야 개인은 정체성을 실현할 생산성과 판단 능력을 갖는다. 셋째, <strong>직접 거버넌스 참여권</strong>이다. 시민은 AI와 데이터 인프라를 활용해 공동체 의사결정에 직접 참여하고, 자신의 정체성을 공동체 규칙과 제도 변화로 연결할 수 있어야 한다.
          </p>

          <div style={h3}>1.5 경영전략 — 새 사회계약을 운영 원리로</div>
          <p style={ps}>
            새로운 사회계약은 선언으로 끝나지 않는다. 권리 체계는 세계·국가·도시·가정의 경영전략으로 구체화되어야 한다. 세계는 AI 안전, 데이터 주권, 플랫폼 규칙, 알고리즘 검증을 다루는 새로운 디지털 규범을 만들어야 한다. 국가는 교육·산업·복지·데이터·AI 인프라를 개인의 정체성 발견과 훈련, 실현 경로로 연결해야 한다. 도시는 일, 학습, 주거, 문화, 돌봄이 한 생활권 안에서 연결되는 정체성 실현의 현장이 되어야 한다. 가정은 AI가 개인의 판단을 대체하는 공간이 아니라, 개인의 성장과 관계, 건강과 학습을 돕는 최소 생활 기반이 되어야 한다.
          </p>
          <p style={ps}>
            태재의 과제는 이 전환을 먼저 읽고, 먼저 이름 붙이고, 먼저 설계하는 것이다. 디지털 기술을 따라가는 것이 아니라, 디지털 전환이 만들어낼 다음 사회를 선견하고 선점하는 것이다. 개인과 공동체의 변화에서 시작해, 경제와 정치 질서의 붕괴를 진단하고, 새로운 사회계약의 권리 체계를 세우며, 이를 세계·국가·도시·가정의 경영전략으로 확장한다.
          </p>

        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
