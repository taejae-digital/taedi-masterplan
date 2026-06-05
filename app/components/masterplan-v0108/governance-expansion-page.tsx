import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const conditionRows = [
  {
    title: "세계의 규칙",
    text: "AI·데이터·플랫폼·바이오 기술은 국경을 넘어 작동한다. 한 국가의 법과 윤리만으로는 기술 위험과 권력 집중을 통제하기 어렵다.",
    point: "검증, 설명, 책임, 통제의 세계공동체 규칙이 필요하다.",
  },
  {
    title: "국가의 제도",
    text: "권리는 선언만으로 보장되지 않는다. 공공 AI 인프라, 데이터 주권, 교육·복지, 산업정책, 법과 예산이 연결되어야 한다.",
    point: "정체성 실현이 출생 배경·지역·소득·플랫폼 접근성에 따라 갈리지 않게 해야 한다.",
  },
  {
    title: "도시의 생활권",
    text: "개인은 추상적 제도 속에서 사는 것이 아니라 일, 학습, 주거, 돌봄, 문화가 연결된 생활권 속에서 성장한다.",
    point: "도시는 새 사회계약이 실제로 작동하는지 검증하는 현장이다.",
  },
  {
    title: "가정의 관계 구조",
    text: "정체성 발견, 성장 기록, 감정 조절, 건강한 관계, 판단력 형성은 가장 가까운 생활권에서 시작된다.",
    point: "가정은 개인이 사회와 세계로 나아가기 전 자신과 타인을 이해하는 첫 환경이다.",
  },
];

const strategyRows = [
  {
    no: "4.2",
    title: "세계경영",
    subtitle: "패권 경쟁을 책임과 협력의 질서로 전환",
    goal: "미·중 패권 충돌을 관리 가능한 규칙 안으로 끌어들이고, 양국이 함께 책임질 수밖에 없는 의제를 만든다.",
    items: [
      "AI 안전 공동검증: 고위험 AI 시스템을 기업·국가의 자율 판단에만 맡기지 않고 공동 평가와 공개 검증 체계를 둔다.",
      "데이터 책임 규칙: 보건·기후·재난·교육 데이터는 주권을 인정하되 목적·범위·보안·삭제 기준 위에서 안전하게 이동시킨다.",
      "플랫폼·알고리즘 책임: 추천 알고리즘과 자동화 판단에 설명, 검증, 이의제기 절차를 붙인다.",
      "디지털·바이오 통제: 오남용 위험 기술은 사전 검증, 접근 통제, 책임 귀속, 국제 감시 체계를 갖춘다.",
    ],
    effect: "이익과 갈등의 질서를 책임과 협력의 질서로 전환한다.",
  },
  {
    no: "4.3",
    title: "국가경영",
    subtitle: "한반도를 미래형 창조사회로 전환",
    goal: "한반도를 모방 사회에서 미래형 창조사회로 전환하고, 세계가 필요로 하는 산업·제도·리더 역량을 만든다.",
    items: [
      "15대 미래산업: 미래도시·디지털공공재·로봇·드론·바이오·디지털금융·미래교육 등 삶의 전 영역을 실행 기반으로 바꾼다.",
      "7대 핵심 분야 초일류화: 싱크탱크·대학·기업·미디어·정부·정당·군대가 지식, 인재, 생산, 여론, 행정, 정치, 안보를 연결한다.",
      "선출직 리더: 도시·국가·세계경영을 법, 예산, 외교, 공공조달, 규제 설계로 구현한다.",
      "국가 기반: AI 인프라 접근권, 데이터 주권, AI 개인화권, 직접 거버넌스 참여권을 제도화한다.",
    ],
    effect: "미래산업은 실행 기반, 7대 분야는 제도 역량, 리더는 정책과 외교의 실행 권한을 만든다.",
  },
  {
    no: "4.4",
    title: "도시경영",
    subtitle: "정체성 실현과 미래산업 실험의 생활권",
    goal: "도시를 대도시 산업문명의 한계를 넘는 정체성 실현과 미래산업 실험의 생활권으로 전환한다.",
    items: [
      "강소도시 모델: 대학, 기업, 연구기관, 공공조달, 시민참여를 하나의 운영체계로 묶는다.",
      "시산학 생태계: 교육과 일, 연구와 생산, 돌봄과 문화가 분리되지 않게 연결한다.",
      "정체성 훈련 경로: 예술·연구·돌봄·창업·기술·공공문제 해결 등 다양한 성장 경로를 도시 안에 둔다.",
      "시민 직접 참여: AI와 데이터를 활용해 정책 설계, 예산 감시, 공공서비스 평가에 참여한다.",
    ],
    effect: "새 사회계약을 생활 속에서 검증하고, 지속가능한 생활권 모델을 만든다.",
  },
  {
    no: "4.5",
    title: "가정경영",
    subtitle: "새로운 리더가 자라는 최소 생활권",
    goal: "가정을 정체성 발견, 성장 기록, 판단력 형성, 건강한 관계가 시작되는 최소 생활권으로 설계한다.",
    items: [
      "정체성 발견: 아이를 조기 분류하지 않고 가족 구성원의 관심, 감각, 관계, 몰입, 문제의식을 관찰한다.",
      "성장 기록: AI는 성적·스펙 관리가 아니라 학습, 건강, 관계, 감정, 관심사, 기여 경험을 해석하는 보조자가 된다.",
      "AI 개인화권: 개인은 AI 분석과 추천을 설명받고, 거부하고, 조정할 수 있어야 한다.",
      "건강한 관계: 돌봄과 책임을 나누며 책임감, 공감, 판단력, 협력 능력, 세계적 안목을 기른다.",
    ],
    effect: "개인은 가정에서 자신을 발견하고, 도시에서 훈련하며, 국가의 제도와 세계의 규칙 속에서 정체성을 실현한다.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 15, display: "flex", flexDirection: "column", gap: 4.6 }}>
      {items.map((item) => (
        <li key={item} style={{ margin: 0, paddingLeft: 1, fontSize: 10.85, lineHeight: 1.26, letterSpacing: -0.28 }}>{item}</li>
      ))}
    </ul>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영전략" version={VERSION} />

      <div style={{ padding: "12px 36px 9px", borderBottom: `3px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 18.3, fontWeight: 850, color: C.navy, lineHeight: 1.34 }}>
          새 사회계약은 권리 선언이 아니라 세계·국가·도시·가정의 운영 구조다.
        </div>
        <div style={{ marginTop: 6, fontSize: 14.7, color: "#333", lineHeight: 1.33, fontWeight: 610, letterSpacing: -0.25 }}>
          디지털 전환은 개인의 능력을 확장하지만 자동으로 좋은 사회를 만들지는 않는다. 개인의 정체성 실현이 실제 삶에서 가능하려면 세계의 규칙, 국가의 제도, 도시의 생활권, 가정의 관계 구조가 함께 바뀌어야 한다.
        </div>
      </div>

      <div style={{ padding: "0 36px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 9 }}>
        <section>
          <div style={h3s}>4.1 디지털 사회계약의 작동 조건</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {conditionRows.map((row, i) => (
              <div key={row.title} style={{ minHeight: 143, display: "flex", flexDirection: "column", border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.03)" }}>
                <div style={{ background: "#f2eee6", borderBottom: `1px solid #d7d0c7`, padding: "7px 10px" }}>
                  <div style={{ color: C.navy, fontSize: 14.3, fontWeight: 850, letterSpacing: -0.3 }}>{row.title}</div>
                </div>
                <div style={{ padding: "8px 10px 9px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                  <div style={{ fontSize: 11.8, lineHeight: 1.27, color: "#333", fontWeight: 590, letterSpacing: -0.25 }}>{row.text}</div>
                  <div style={{ marginTop: "auto", paddingTop: 6, borderTop: "2px solid #d9b46f", fontSize: 11.9, lineHeight: 1.26, color: C.navy, fontWeight: 760, letterSpacing: -0.25 }}>{row.point}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={h3s}>4.2–4.5 세계·국가·도시·가정의 경영전략</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {strategyRows.map((row, i) => (
              <div key={row.title} style={{ border: `1px solid #d7d0c7`, background: i % 2 ? C.bg : "#fff", minHeight: 274, display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "8px 11px", background: C.navy, color: "#fff", display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: 12.2, fontWeight: 860, opacity: 0.9 }}>{row.no}</span>
                  <span style={{ fontSize: 15.2, fontWeight: 900, letterSpacing: -0.35 }}>{row.title}</span>
                  <span style={{ fontSize: 12.4, fontWeight: 720, opacity: 0.9 }}>— {row.subtitle}</span>
                </div>
                <div style={{ padding: "8px 11px 9px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  <div>
                    <div style={label}>목표</div>
                    <div style={{ fontSize: 12.05, lineHeight: 1.27, color: C.navy, fontWeight: 760, letterSpacing: -0.25 }}>{row.goal}</div>
                  </div>
                  <div>
                    <div style={label}>경영전략</div>
                    <BulletList items={row.items} />
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 6, borderTop: "2px solid #d9b46f" }}>
                    <div style={{ ...label, color: "#8a5f12" }}>핵심 효과</div>
                    <div style={{ fontSize: 11.75, lineHeight: 1.25, color: C.accent, fontWeight: 820, letterSpacing: -0.25 }}>{row.effect}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const label: React.CSSProperties = { fontSize: 9.4, color: C.accent, fontWeight: 860, letterSpacing: 1.05, marginBottom: 2.5 };
