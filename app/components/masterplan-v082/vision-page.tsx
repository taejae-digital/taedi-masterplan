import { C } from "../masterplan-v705/constants";
import { Header, Footer, ps, h3s } from "../masterplan-v705/shared";

export function VisionPage() {
  return (
    <div style={{ height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="1. 비전" version="v0.8.2" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C.light, fontWeight: 700, marginBottom: 6 }}>MISSION</div>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          디지털 기술이 인류의 안전하고 건강한 미래에 이바지하도록,
          강화된 개인을 품을 새 질서의 조건을 설계한다.
        </div>
      </div>

      {/* 전체 조망 — 4단계 논리 흐름 */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "8px 32px 8px", borderBottom: `1px solid ${C.line}`, marginBottom: 8, gap: 0 }}>
        <div style={{ flex: 1, padding: "8px 12px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: C.accent, marginBottom: 2, letterSpacing: 0.5 }}>1.1 분업 시대 → 연결 시대</div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>디지털 연결이 개인을 강화한다</div>
          <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45 }}>분업이 인간을 역할로 쪼갰다면, 디지털은 연결로 강화한다. 강화된 개인은 판단력·실행력·파급력이 증대되어 더 많은 자유를 필요로 한다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 7px", fontSize: 18, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "8px 12px", background: "#fff5f5", borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: C.red, marginBottom: 2, letterSpacing: 0.5 }}>1.2 기존 질서의 균열</div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.red, lineHeight: 1.3, marginBottom: 3 }}>민주주의·자본주의가 응답하지 못한다</div>
          <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45 }}>산업시대 질서는 "역할 인간의 집합"을, 디지털시대 질서는 "정체성을 실현하는 강화된 개인의 연결"을 전제로 한다. 기존 질서는 후자에 응답하지 못해 위협이 현실이 된다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 7px", fontSize: 18, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "8px 12px", background: "#f0f5ff", borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: "#3b82f6", marginBottom: 2, letterSpacing: 0.5 }}>1.3 공동체의 재구성</div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>새로운 사회계약이 필요하다</div>
          <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45 }}>강화된 개인의 자유를 담아낼 새로운 경제 질서와 정치 질서 — 새로운 사회계약이 필요하다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 7px", fontSize: 18, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "8px 12px", background: "#f0fff4" }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: "#16a34a", marginBottom: 2, letterSpacing: 0.5 }}>1.4 우리의 연구</div>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>이것을 현실화한다</div>
          <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45 }}>위협 진단, 통제 모델, 전환 경로를 연구하고 정책·공론장·국제 협력으로 끌어낸다.</div>
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
        <div>
          <div style={h3s}>1.1 분업 시대 → 연결 시대 — 디지털 연결이 개인을 강화한다</div>
          <p style={ps}>
            산업 시대는 인간을 분업으로 쪼개 역할에 가두었다. 디지털 시대는 개인을 연결망으로 묶어 강화한다. 강화는 <strong>판단력·실행력·파급력 세 영역에서 동시에</strong> 일어난다. <strong>판단력</strong> — AI가 추론·전문성을 개인에게 이전해 의사·변호사·분석가가 하던 일을 누구든 할 수 있게 하고, 학위·자격증 없이도 전문가 수준 도구에 접근하며 진입장벽이 해체된다. <strong>실행력</strong> — 한 사람이 과거 부서 하나의 산출에 도달하며 1인 기업과 묶음 직업이 현실이 된다. <strong>파급력</strong> — 개인이 매스미디어급 도달 범위를 가지며 공론장의 주체가 된다.
          </p>
          <p style={ps}>
            그 결과 강화된 개인이 원하는 것은 양적 확장이 아니라 <strong>자기 정체성의 실현</strong>이다. '정체성을 직업에 맞추는 삶'에서 '삶을 정체성에 맞추는 삶'으로의 이동이다 — 본업을 유지하는 의사·교수·변호사가 유튜브·뉴스레터·창업을 동시에 운영하며 본업보다 큰 영향력을 얻고, 묶음 직업·1인 미디어가 과거 100명 규모 회사 수준의 영향력에 도달한다. 새 기술이 개인을 강화할 때, 강화된 개인은 이전에는 상상할 수 없던 <strong>자유</strong>를 요구한다 — 농업이 토지 소유의 자유를, 인쇄술이 신앙·지식 해석의 자유를, 산업화가 직업 선택과 정치 참여의 자유를 끌어냈듯, 디지털은 정체성 실현의 자유를 요구하고 있다.
          </p>

          <div style={h3s}>1.2 기존 질서의 균열 — 민주주의·자본주의가 응답하지 못한다</div>
          <p style={ps}>
            산업 시대의 질서는 <strong>"역할 인간의 집합"</strong>을 전제로 설계되었다. 한 직업·한 회사·한 국가에 귀속된 인간이 정치·경제·법의 기본 단위였고, 민주주의는 영토 시민의 표를, 자본주의는 임금노동자의 노동을, 법은 자연인과 법인을 단위로 작동했다. 강화된 개인이 그 틀을 넘어서면서 균열이 시작된다. 3영역의 전문가급 능력이 개인 수준으로 내려오면, 그 능력이 일으킬 피해의 규모도 개인 수준으로 내려온다. <strong>① 폭력 독점의 균열</strong> — 무기 설계·해킹·자율무기 능력이 개인에게 이전되며 국가의 폭력 독점이 깨진다. <strong>② 권력 집중</strong> — AI 인프라가 소수 빅테크에 집중되어 강화된 개인 위에 새 봉건 구조가 형성된다. <strong>③ 공론장 붕괴</strong> — 콘텐츠·여론 조작 능력이 보편화되어 시민의 자율 판단이 잠식된다. <strong>④ 인간 존엄 위기</strong> — 프로 계층이 축소되며 직업이 부여하던 정체성이 흔들린다. <strong>⑤ 글로벌 질서 균열</strong> — 능력이 국경을 넘어 확산되면서 국가 간 조율이 불가능해진다. <strong>⑥ 지속불가능성</strong> — AI 인프라의 전력·용수 부담이 기후 목표와 충돌한다.
          </p>
          <p style={ps}>
            과거에도 공동체의 조율 실패는 강화의 힘을 해방이 아닌 파괴로 돌렸다. 인쇄술 이후 신앙·지식의 자유 요구를 교리 안에 수용하지 못한 결과가 30년 전쟁이었고, 산업혁명이 노동·분배를 조율하지 못한 대가는 공산혁명·파시즘·두 차례 세계대전·대공황이었다. 핵 통제 레짐은 80년이 지난 지금도 미완성이다. <strong>디지털 시대의 6위협은 모두 한 사실에서 파생된다 — 강화된 개인의 역량이 산업화 질서의 수용 한계를 넘어섰다.</strong>
          </p>
        </div>

        <div>
          <div style={h3s}>1.3 공동체의 재구성 — 새로운 사회계약이 필요하다</div>
          <p style={ps}>
            강화된 개인의 자유 요구를 기존 질서가 봉합으로 막아낼 수는 없다. 6위협을 개별 사안으로 분리해 대응하는 접근은 위협의 공통 근원을 놓친다. 필요한 것은 <strong>3영역에서 강화된 개인을 안전하게 품을 수 있는 새 공동체 질서의 설계</strong>다. 새 질서는 세 층위의 재구성을 요구한다. <strong>주체</strong> — AI 에이전트와 자율 시스템에 적용할 새 법적 범주(전자인)와 책임 구조. <strong>관계</strong> — 강화된 개인 사이, 그리고 개인과 AI 사이의 권리·의무·책임의 재정의. <strong>질서</strong> — 정체성 실현을 보장하는 분배 구조, 권력 집중을 견제하는 거버넌스, 국경을 넘는 조율 메커니즘.
          </p>
          <p style={ps}>
            이 재구성은 산업 시대의 사회계약 위에 무엇을 덧대는 작업이 아니라, <strong>민주주의와 자본주의를 대체할 새 사회계약을 처음부터 다시 설계하는 작업</strong>이다. 영토 시민의 표를 단위로 한 민주주의는 한 국가에 귀속되지 않는 강화된 개인을 대표할 수 없고, 임금노동의 기여를 분배의 기준으로 삼은 자본주의는 직업이 정체성을 보장하지 못하는 시대의 가치를 측정할 수 없다. <strong>무엇이 민주주의를 대체하여 강화된 개인의 정치 참여를 매개할 것인가, 무엇이 자본주의를 대체하여 정체성 실현 시대의 분배를 작동시킬 것인가</strong> — 이 두 질문이 새 사회계약의 출발점이다.
          </p>
          <p style={ps}>
            새 질서가 따라야 할 원칙은 산업 시대의 그것과 다르다. <strong>① 정체성 실현의 자유</strong>를 기본권으로 삼고, <strong>② 강화된 개인 사이의 비대칭</strong>(빅테크-개인, 자본-노동, 알고리즘-시민)을 견제할 분산 구조를 내장하며, <strong>③ 한 직업·한 회사·한 국가의 단위를 넘어선 공동체</strong>(도시·협동조합·디지털 이웃·세계 시민 거버넌스)가 정치·경제·법의 기본 단위로 작동하도록 한다. 본 연구의 출발점은 이 원칙들을 정식화하고, 그것이 6위협 각각에 어떻게 작동 가능한 통제 모델로 구현되는지를 시뮬레이션·외부 검증의 사이클로 검증하는 일이다.
          </p>

          <div style={h3s}>1.4 우리의 연구 — 이것을 현실화한다</div>
          <p style={ps}>
            디지털 전환과 사회변혁팀은 위 세 단계를 연구·공론화·정책 설계의 사이클로 엮어 현실화한다. <strong>위협의 진단</strong> — 3영역 강화가 만드는 6위협의 메커니즘과 임계점을 매핑한다. <strong>통제 모델의 설계</strong> — 폭력 독점·권력 집중·공론장·인간 존엄·글로벌 질서·지속가능성 각 영역에서 작동 가능한 거버넌스 안을 다중 시나리오로 비교한다. <strong>전환 경로의 제시</strong> — 산업 시대 질서에서 디지털 시대 질서로 이행할 단계적 경로와 한국·국제 사회의 역할을 설계한다.
          </p>
          <p style={ps}>
            연구 방식은 AI가 가능하게 한 새 사이클을 따른다. 다양한 시나리오를 동시에 검토하고, 1안·2안·3안을 비교하며, 외부 평가자에게 가안을 제출해 검증받는 반복 사이클이다. 산출물은 단일 보고서에 머물지 않는다. <strong>이론의 정립</strong>(단행본 Q4 2026)과 <strong>공론화</strong>(시민·전문가 토론, 국내외 자문단 네트워크), <strong>실행 가능한 솔루션</strong>(정책 제안·국제 협력 의제) — 세 축을 동시에 끌어올려 디지털 기술이 인간을 소외시키는 것이 아니라 강화된 개인들이 자발적으로 연결되어 더 높은 공공선을 실현하는 문명을 만든다.
          </p>
        </div>
      </div>

      <Footer version="v0.8.2" />
    </div>
  );
}
