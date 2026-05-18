import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  const historicalEras = [
    {
      age: "농업",
      principle: "정착 + 위계",
      problem: "생존 불확실성과 잉여의 분배",
      tech: "관개·문자·달력",
      individual: "신분·혈통이 정체성을 결정. 태어난 자리에 평생 묶임.",
      community: "마을·씨족이 노동력 재생산과 위계 유지의 단위.",
      freedom: "신분·혈통에 묶이지 않을 자유",
      highlight: false,
    },
    {
      age: "산업",
      principle: "분업 + 관리",
      problem: "대량생산과 대규모 협력 구조",
      tech: "증기·전기·조립라인",
      individual: "관리자와 실무자로 나뉨. 주어진 조건에서 가장 잘하는 걸 하는 사회.",
      community: "국가·기업·노조가 임금노동을 단위로 분배·복지·정치를 작동.",
      freedom: "역할로 환원되지 않을 자유",
      highlight: false,
    },
    {
      age: "디지털",
      principle: "연결 + 자율",
      problem: "정보 과잉·국경 초월 위기·권력 집중·공론장 붕괴·존엄 위기·지속불가능",
      tech: "AI·인터넷·플랫폼·오픈소스",
      individual: "모든 사람이 리더처럼 산다. AI와 함께 1인이 여러 사업을 운영. 정체성에 따라 자신이 풀고 싶은 문제를 선택.",
      community: "산업시대 모델 그대로. (→ 2.4)",
      freedom: "정체성 실현의 자유 — 잘하고, 좋아하고, 사회가 필요로 하는 일을 하는 자유",
      highlight: true,
    },
  ];

  const futureExpertise = [
    {
      challenge: "사회 통제력 약화",
      problem: "AI 무기·해킹·자율 시스템 능력이 개인에게 이전",
      role: "안전 설계자",
      desc: "분산된 위협을 통제 가능한 구조로 묶어내는 사람",
    },
    {
      challenge: "권력 집중",
      problem: "AI 인프라가 빅테크에 집중되어 새 봉건 구조 형성",
      role: "분산 거버너",
      desc: "AI 인프라를 공공재로 만들고 비대칭을 견제하는 사람",
    },
    {
      challenge: "공론장 붕괴",
      problem: "AI 조작으로 시민 자율 판단이 잠식",
      role: "공론 큐레이터",
      desc: "정보를 맥락으로 전환하고 진실성을 검증하는 사람",
    },
    {
      challenge: "인간 존엄 위기",
      problem: "프로 계층 축소·직업 기반 정체성 흔들림",
      role: "정체성 매개자",
      desc: "잘하는 것·좋아하는 것을 발견하고 사회 요구와 매칭하는 사람",
    },
    {
      challenge: "글로벌 질서 균열",
      problem: "능력이 국경을 넘어 확산되며 국가 간 조율 불가",
      role: "글로벌 협력 설계자",
      desc: "미션 한정 한시 협력으로 글로벌 도전에 대응하는 사람",
    },
    {
      challenge: "지속불가능성",
      problem: "AI 인프라의 전력·용수 부담이 기후 목표와 충돌",
      role: "지속가능성 직조가",
      desc: "디지털 인프라와 기후·자원의 균형을 설계하는 사람",
    },
  ];

  const stages = [
    {
      label: "가정",
      axis: "잘 + 좋아",
      to: "정체성을 발견하는 가정",
      old: "노동력 재생산·표준화 양육",
      def: "아이가 무엇을 잘하고 좋아하는지 발견하는 첫 현장.",
    },
    {
      label: "이웃",
      axis: "잘 + 좋아",
      to: "다양성이 일상에 있는 이웃",
      old: "동질 계층의 비공식 돌봄",
      def: "여러 정체성·세대·배경을 일상에서 마주치며 자신을 상대적으로 발견하는 공간.",
    },
    {
      label: "마을",
      axis: "잘 + 좋아",
      to: "정체성별 훈련이 가능한 마을",
      old: "획일적 학원가",
      def: "발견된 정체성을 능력으로 키울 다양한 훈련 경로가 공존하는 생활권.",
    },
    {
      label: "도시",
      axis: "사회 요구 매개",
      to: "시산학 매칭의 강소도시",
      old: "수도권 집중·기능 도시",
      def: "특성화된 강소도시들이 정체성과 미래 전문성을 직접 잇는 생태계.",
    },
    {
      label: "국가",
      axis: "사회 요구 매개",
      to: "다양성·안전망 큰 틀의 국가",
      old: "표준 행정·산업 정책 주도",
      def: "표준 경로 대신 다양성과 안전망의 큰 틀만 짜고 실행은 도시로 위임.",
    },
    {
      label: "세계",
      axis: "사회 요구 매개",
      to: "미션 한정 자동 환수 거버넌스",
      old: "강대국 중심 영구 질서",
      def: "글로벌 도전에 한시적 권한이 주어지고 해소 시 자동 해체되는 최소 거버넌스.",
    },
  ];

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, lineHeight: 1.35 }}>
          산업화는 사람을 관리자와 실무자로 갈랐다. 디지털·AI는 그 구분을 풀고, 누구나 자기 정체성으로 사회의 문제를 푸는 시대를 연다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>

        <div>
          <div style={h3s}>2.1 시대의 변화 — 개인과 공동체</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, marginBottom: 4 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "6%" }}>시대</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "10%" }}>핵심 원리</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "16%" }}>인류의 숙제</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "10%" }}>핵심 기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "22%" }}>개인은 어떻게 변했는가</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "18%" }}>공동체는 어떻게 변했는가</th>
                <th style={{ padding: "4px 6px", textAlign: "left" }}>원하는 자유</th>
              </tr>
            </thead>
            <tbody>
              {historicalEras.map(({ age, principle, problem, tech, individual, community, freedom, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.4, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: highlight ? C.red : C.accent, lineHeight: 1.4, verticalAlign: "top", fontWeight: 800 }}>{principle}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.45, verticalAlign: "top", fontWeight: 500 }}>{problem}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.45, verticalAlign: "top", fontWeight: 500 }}>{tech}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: "#111", lineHeight: 1.5, verticalAlign: "top", fontWeight: highlight ? 700 : 500 }}>{individual}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: highlight ? C.accent : "#111", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500, fontStyle: highlight ? "italic" : "normal" }}>{community}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: highlight ? C.red : "#333", fontWeight: highlight ? 700 : 600, lineHeight: 1.4, verticalAlign: "top" }}>{freedom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={h3s}>2.2 디지털 시대 정체성 — 3박자가 만나는 자리</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) 6% 22%", gap: 8, alignItems: "stretch" }}>
            <div style={{ padding: "8px 10px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 11, color: C.navy, fontWeight: 800, marginBottom: 3 }}>① 잘하는 것</div>
              <div style={{ fontSize: 11, color: "#111", lineHeight: 1.4, fontWeight: 500 }}>
                재능·역량. 가정·이웃·마을이 발견하고 훈련.
              </div>
            </div>
            <div style={{ padding: "8px 10px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 11, color: C.navy, fontWeight: 800, marginBottom: 3 }}>② 좋아하는 것</div>
              <div style={{ fontSize: 11, color: "#111", lineHeight: 1.4, fontWeight: 500 }}>
                관심·열망. 가정·이웃·마을의 다양성 속에서 발견.
              </div>
            </div>
            <div style={{ padding: "8px 10px", background: "#fff0f0", borderLeft: `4px solid ${C.red}` }}>
              <div style={{ fontSize: 11, color: C.red, fontWeight: 800, marginBottom: 3 }}>③ 사회가 원하는 것</div>
              <div style={{ fontSize: 11, color: "#111", lineHeight: 1.4, fontWeight: 500 }}>
                미래의 전문성 = 6도전을 푸는 사람. 도시·국가·세계가 매개. (→ 2.3)
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 28, fontWeight: 900 }}>=</div>
            <div style={{ padding: "8px 10px", background: C.navy, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 2 }}>정체성 = 미션</div>
              <div style={{ fontSize: 10.5, lineHeight: 1.4, fontWeight: 500 }}>
                세 박자가 만나는 자리에서 개인이 사회의 문제를 푸는 미션이 된다.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={h3s}>2.3 사회가 원하는 것 — 6도전을 푸는 미래 전문성</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {futureExpertise.map(({ challenge, problem, role, desc }, i) => (
              <div key={i} style={{ padding: "6px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${C.red}`, borderBottom: `2px solid ${C.red}`, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 9, color: "#888", fontWeight: 700, marginBottom: 1 }}>6도전 #{i + 1}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 3 }}>{challenge}</div>
                <div style={{ fontSize: 9.5, color: "#555", lineHeight: 1.4, marginBottom: 5, fontStyle: "italic" }}>{problem}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.red, lineHeight: 1.3, marginBottom: 2 }}>{role}</div>
                <div style={{ fontSize: 10, color: "#222", lineHeight: 1.4, fontWeight: 500, flex: 1 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.4 공동체 6단계 — 3박자 매칭을 만드는 구조</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4, flex: 1 }}>
            {stages.map(({ label, axis, to, old, def }, i) => {
              const isLeft = i < 3;
              return (
                <div key={i} style={{ padding: "6px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${isLeft ? C.navy : C.accent}`, borderBottom: `2px solid ${isLeft ? C.navy : C.accent}`, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 9, color: "#888", fontWeight: 700, marginBottom: 1 }}>{i + 1}단계</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.2, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 9, color: isLeft ? C.navy : C.red, fontWeight: 700, marginBottom: 4, padding: "1px 4px", background: isLeft ? "#f0f4ff" : "#fff0f0", display: "inline-block", width: "fit-content" }}>{axis}</div>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: C.accent, lineHeight: 1.3, marginBottom: 4, paddingBottom: 3, borderBottom: `1px dashed ${C.accent}` }}>{to}</div>

                  <div style={{ fontSize: 9, color: "#888", fontWeight: 600, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>이전 역할</div>
                  <div style={{ fontSize: 10, color: "#666", lineHeight: 1.35, marginBottom: 4 }}>{old}</div>

                  <div style={{ fontSize: 9, color: C.navy, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>새 모습</div>
                  <div style={{ fontSize: 10.5, color: "#111", lineHeight: 1.45, fontWeight: 600, flex: 1 }}>{def}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
