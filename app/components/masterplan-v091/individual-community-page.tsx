import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  const stages = [
    {
      label: "가정",
      to: "정체성을 발견·매칭하는 가정",
      old: "노동력 재생산·표준화 양육",
      why: "강화된 개인은 직업에 자신을 맞추지 않고 자신의 정체성에 직업을 맞추려 한다. 정체성은 어려서부터 발견되어야 하므로,",
      def: "아이를 시장이 정한 직업에 끼워 맞추는 곳이 아니라, 누구인지 발견하고 미래의 자리에 연결해주는 곳.",
      need: "정체성 탐험가",
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      old: "동질 계층의 비공식 돌봄",
      why: "가정이 정체성을 발견하려면 비교의 거울이 필요하다. 정체성은 자기 가족과 다른 삶을 보고 부딪혀야 드러나므로, 같은 스펙끼리만 모이면 거울이 사라진다. 농촌 이웃이 우물·돌봄·전승을 함께 했듯, 디지털 시대 이웃은 다양한 정체성을 함께 보여주는 공동체가 되어야 한다.",
      def: "다양한 직업·세대·배경이 일상 안에 섞여 자신과 다른 자기를 마주칠 수 있는 공간.",
      need: "돌봄 통합가·세계관 창작자",
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      old: "한 방향 학원가·획일 교육",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 한 방향으로만 미는 학원가는 매칭의 다음 단계를 끊는다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
      need: "질서 설계자·경계 감시자",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      old: "수도권 집중·대도시 출근",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 마을·산업·연구·교육이 한 권역에 묶여야 한다.",
      def: "시산학으로 엮여 정체성과 묶음직업을 직접 잇는 강소도시. 도시마다 다른 특색.",
      need: "생태계 직조가",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      old: "가정·이웃·마을·도시가 할 일까지 국가가 떠맡음",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
      need: "AI 인프라 평등 보장자",
    },
    {
      label: "세계",
      to: "미션 한정·자동 환수 거버넌스",
      old: "강대국 중심 영구 질서",
      why: "국가가 다양성의 틀을 잡더라도, 기후·AI·팬데믹이 통제되지 않으면 모든 단계가 무너진다. 그러나 영구적 세계권력은 정체성을 다시 위협하므로, 위협이 닥칠 때만 권한을 받고 해소되면 해체되는 구조가 필요하다.",
      def: "위협이 닥칠 때만 권한을 받고 해소되면 자동으로 해체되는 미션 한정 구조.",
      need: "경계 감시자·AI-인간 조율자",
    },
  ];

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 13, letterSpacing: 4, color: C.accent, fontWeight: 800, marginBottom: 4 }}>시대마다 풀어야 할 문제가 있고, 그 문제를 풀던 직업이 있었다</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.35 }}>
          새 시대의 문제가 먼저 보여야, 그 문제를 풀 직업이 나오고, 그 직업에 맞는 정체성을 발견할 수 있다.
          분업이 인간을 역할로 쪼갰다면, 디지털·AI는 묶음으로 직업을 재편한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 2.1 개인과 전문성의 변화 — 시대별 관찰 */}
        <div>
          <div style={h3s}>2.1 개인과 전문성의 변화 — 시대별 역사적 관찰</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 5 }}>
            새 기술이 개인을 강화할 때마다 인류가 풀어야 할 새 문제가 등장했고, 그 문제를 푸는 새 전문성·직업군이 형성되었으며, 강화된 개인은 새 자유를 요구해 공동체는 새 권리로 응답해 왔다.
            <strong style={{ color: C.navy }}> 디지털 시대도 같은 패턴 — 단, 직업 변화의 폭은 역사상 가장 크다.</strong>
            {" "}자유에 응답하는 새 권리(제도화)의 디지털 시대 후보는 <strong>§3.1</strong>에서 다룬다.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 6 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "7%" }}>시대</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "13%" }}>핵심 기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "8%" }}>핵심 원리</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "15%" }}>인류가 풀어야 했던 문제</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "22%" }}>문제 해결에 필요한 전문성</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "20%" }}>주요 직업</th>
                <th style={{ padding: "4px 6px", textAlign: "left" }}>원하는 자유</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  age: "농업",
                  tech: "농업기술 · 인쇄술",
                  principle: "정착",
                  problem: "식량·생존·보호·전승",
                  jobs: [
                    ["체화 기능 (embodied skill)", "농부·수렵채집인"],
                    ["장인 전승 (craft)", "장인·도공·대장장이·목수"],
                    ["생계 노동 (subsistence)", "농민·어민·목축민"],
                    ["의례·전승 지식", "사제·서기·선비"],
                  ],
                  fr: "토지·신앙·지식 해석",
                  highlight: false,
                },
                {
                  age: "산업",
                  tech: "산업기계 · 대중미디어",
                  principle: "분업",
                  problem: "대량생산·운송·도시화·관리",
                  jobs: [
                    ["정형 인지·정형 육체 과업 (routine tasks · Autor)", "공장 노동자·사무원·기능공"],
                    ["전문화 (specialization · Smith)", "엔지니어·의사·디자이너"],
                    ["관료적 전문성 (bureaucratic expertise · Weber)", "관료·매니저·법조인"],
                    ["상징 조작 (symbolic-analytic · Reich)", "마케터·금융가·컨설턴트"],
                  ],
                  fr: "일·정치 참여, 표현·결사",
                  highlight: false,
                },
                {
                  age: "디지털",
                  tech: "인터넷 · AI · 휴머노이드",
                  principle: "연결",
                  problem: "정체성 매칭·인간-AI 경계·새 질서·돌봄·진실성",
                  jobs: [
                    ["비정형 인지 (non-routine cognitive · Autor)", "생태계 직조가 (AI 활용 전문가·연구자 등)"],
                    ["정동·관계 노동 (affective·relational · Hardt-Negri)", "정체성 탐험가 (코치·상담사·심리학자 등)"],
                    ["돌봄 노동 (care work · Folbre)", "돌봄 통합가 (간호사·요양가·사회복지사 등)"],
                    ["암묵지·맥락 판단 (tacit knowledge · Polanyi)", "질서 설계자 (정책 기획가·거버넌스 전문가 등)"],
                    ["의미 생성 (meaning-making)", "세계관 창작자 (진실성 검증자·미디어 창작자 등)"],
                  ],
                  fr: "정체성 실현",
                  highlight: true,
                },
              ].map(({ age, tech, principle, problem, jobs, fr, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.45, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.45, verticalAlign: "top", fontWeight: 600 }}>{tech}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: highlight ? C.red : C.accent, lineHeight: 1.45, verticalAlign: "top", fontWeight: 800 }}>{principle}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.45, verticalAlign: "top", fontWeight: 600 }}>{problem}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>
                    {jobs.map(([skill], k) => <div key={k}>{skill}</div>)}
                  </td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>
                    {jobs.map(([, occ], k) => <div key={k}>{occ}</div>)}
                  </td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: highlight ? C.red : "#333", fontWeight: highlight ? 700 : 500, lineHeight: 1.45, verticalAlign: "top" }}>{fr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: "#333" }}>
            <strong style={{ color: C.navy }}>직업 변화의 본질 —</strong> 100년 전 사람이 디자이너·엔지니어·마케터를 예측하려면 "대량생산을 사람들이 욕망하게 만들 자가 필요하다"는 <strong>문제</strong>부터 봤어야 했다. 우리도 마찬가지다. <strong>먼저 풀어야 할 문제를 보면, 그 문제를 푸는 자가 누구인지가 보이고, 거기에 맞는 정체성이 발견된다.</strong>
          </div>
        </div>

        {/* 2.2 공동체 6단계의 변화 — 가로 펼침 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.2 공동체 6단계의 변화 — 정체성 실현이 요구하는 새 역할</div>

          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            강화된 개인이 정체성을 실현하려면 공동체 각 단계가 새 역할을 수행해야 한다. <strong style={{ color: C.navy }}>한 단계의 변화는 다음 단계의 논리적 귀결</strong>이며, 변화는 §2.1 디지털 시대의 새 전문성 니즈에 따라 일어난다.
          </div>

          {/* 가로 인과 사슬: 강화된 개인 → 6단계 */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 0, flex: 1 }}>

            {/* 출발점: 강화된 개인 */}
            <div style={{ width: 110, display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "8px 6px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, borderTop: `2px solid ${C.navy}`, borderBottom: `2px solid ${C.navy}` }}>
                <div style={{ fontSize: 10, color: "#888", fontWeight: 700, marginBottom: 4 }}>출발점</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, textAlign: "center", lineHeight: 1.3, marginBottom: 6 }}>강화된<br />개인</div>
                <div style={{ fontSize: 10, color: "#333", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>판단력·실행력·파급력으로 정체성 실현을 요구</div>
              </div>
              <div style={{ fontSize: 9, color: "#666", lineHeight: 1.4, textAlign: "center", padding: "4px 2px 0", fontWeight: 600 }}>
                산업시대 = 직업이<br />정체성을 정함<br />→ 디지털시대 =<br />정체성이 직업을 정함
              </div>
            </div>

            {/* 화살표 */}
            <div style={{ width: 18, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 22, fontWeight: 900, flexShrink: 0 }}>›</div>

            {/* 6단계 카드 가로 펼침 */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
              {stages.map(({ label, to, old, why, def, need }, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 1, padding: "8px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${C.accent}`, borderBottom: `2px solid ${C.accent}`, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 10.5, color: "#888", fontWeight: 700, marginBottom: 2 }}>{i + 1}단계</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, lineHeight: 1.35, marginBottom: 5, paddingBottom: 4, borderBottom: `1px dashed ${C.accent}` }}>{to}</div>

                    <div style={{ fontSize: 9.5, color: "#888", fontWeight: 600, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>이전 역할</div>
                    <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4, marginBottom: 5 }}>{old}</div>

                    <div style={{ fontSize: 9.5, color: C.accent, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>왜</div>
                    <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45, marginBottom: 5, fontStyle: "italic" }}>{why}</div>

                    <div style={{ fontSize: 9.5, color: C.navy, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>새 역할</div>
                    <div style={{ fontSize: 11, color: "#111", lineHeight: 1.5, marginBottom: 6, fontWeight: 600 }}>{def}</div>

                    <div style={{ marginTop: "auto", padding: "4px 6px", background: "#fff0f0", borderLeft: `3px solid ${C.red}` }}>
                      <div style={{ fontSize: 9.5, color: C.red, fontWeight: 800, marginBottom: 1 }}>새 전문성 니즈</div>
                      <div style={{ fontSize: 10.5, color: "#222", lineHeight: 1.4, fontWeight: 600 }}>{need}</div>
                    </div>
                  </div>
                  {i < stages.length - 1 && (
                    <div style={{ width: 14, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 20, fontWeight: 900, flexShrink: 0 }}>›</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "6px 10px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginTop: 8 }}>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: "#222" }}>
              <strong style={{ color: C.red }}>시장이 만들지 못하는 일자리</strong>(돌봄·정체성 발견·공동체 의례)를 <strong>공동체가 보장해야 한다.</strong>
            </div>
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
