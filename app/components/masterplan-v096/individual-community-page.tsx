import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  const stages = [
    {
      label: "가정",
      to: "정체성을 발견·매칭하는 가정",
      old: "노동력 재생산·표준화 양육",
      why: "강화된 개인은 직업에 자신을 맞추지 않고 자신의 정체성에 직업을 맞춘다. 정체성은 어릴 때부터 발견되어야 하므로, 가정이 첫 발견의 현장이 되어야 한다.",
      def: "아이를 시장이 정한 직업에 끼워 맞추는 곳이 아니라, 누구인지 발견하고 미래의 자리에 연결해주는 곳.",
      need: "정체성 탐험가",
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      old: "동질 계층의 비공식 돌봄",
      why: "가정에서 정체성을 발견하려면 비교의 거울이 필요하다. 같은 스펙끼리만 모이면 거울이 사라지므로, 이웃은 다양한 정체성을 일상에서 마주칠 수 있는 공간이어야 한다.",
      def: "다양한 직업·세대·배경이 일상 안에 섞여 자신과 다른 자기를 마주칠 수 있는 공간.",
      need: "돌봄 통합가·세계관 창작자",
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      old: "한 방향 학원가·획일 교육",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 마을은 정체성별 훈련 경로가 공존하는 생활권이어야 한다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
      need: "질서 설계자·세계관 창작자",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      old: "수도권 집중·대도시 출근",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 도시는 마을·산업·연구·교육이 한 권역에 묶인 강소도시여야 한다.",
      def: "시산학으로 엮여 정체성과 묶음직업을 직접 잇는 강소도시. 도시마다 다른 특색.",
      need: "생태계 직조가",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      old: "표준 행정·하위 단위 흡수",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 표준화로 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
      need: "질서 설계자",
    },
    {
      label: "세계",
      to: "미션 한정·자동 환수 거버넌스",
      old: "강대국 중심 영구 질서",
      why: "국가가 다양성과 안전망의 큰 틀을 짜더라도, 강화된 개인의 정체성 실현은 국경을 넘는다. 그 무대 자체를 위협하는 글로벌 도전(기후·AI·팬데믹)은 한 국가가 막을 수 없고, 영구적 세계권력은 정체성을 다시 위협하므로, 세계 거버넌스는 미션 한정·자동 환수 구조여야 한다.",
      def: "위협이 닥칠 때만 권한을 받고 해소되면 자동으로 해체되는 미션 한정 구조.",
      need: "질서 설계자·세계관 창작자",
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
                <th style={{ padding: "4px 6px", textAlign: "left", width: "6%" }}>시대</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "10%" }}>핵심 원리</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "16%" }}>인류의 숙제</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "14%" }}>핵심 기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "20%" }}>핵심 전문성</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "18%" }}>주요 직업</th>
                <th style={{ padding: "4px 6px", textAlign: "left" }}>원하는 자유</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  age: "농업",
                  principle: "정착 + 위계",
                  problem: ["생존 불확실성 (기근·홍수·가뭄)", "잉여의 저장과 분배", "대규모 조율의 정당성 확보", "지식의 세대 간 전승"],
                  tech: ["관개·치수 (물 통제)", "문자 (기록·법·권위)", "달력·천문 (시간 통제)", "종교·의례 (위계의 자연화)"],
                  jobs: [
                    ["의례·전승 지식 (세습)", "사제·서기·선비"],
                    ["체화 기능 (embodied skill)", "농부·장인·도공·대장장이"],
                    ["생계 노동 (subsistence)", "농민·어민·목축민"],
                    ["무력·방어 (martial skill)", "전사·귀족·영주"],
                  ],
                  fr: "태생으로 고정된 운명으로부터의 자유 — 신분·혈통에 묶이지 않을 자유",
                  highlight: false,
                },
                {
                  age: "산업",
                  principle: "분업 + 관리",
                  problem: ["근육력의 한계 극복", "대규모 조직의 협력 구조", "거리·시간 극복 (물류·소통)", "표준화 (같은 나사 없이는 대량생산 불가)"],
                  tech: ["증기기관·내연기관 (에너지 전환)", "철도·전신 (공간 초월)", "조립라인·표준화 (분업의 시스템화)", "관료제·주식회사 (관리의 제도화)"],
                  jobs: [
                    ["정형 인지·육체 과업 (routine tasks · Autor)", "공장 노동자·사무원·기능공"],
                    ["전문화 (specialization · Smith)", "엔지니어·의사·디자이너"],
                    ["관료적 전문성 (bureaucratic expertise · Weber)", "관료·매니저·법조인"],
                    ["상징 조작 (symbolic-analytic · Reich)", "마케터·금융가·컨설턴트"],
                  ],
                  fr: "역할로 환원되지 않을 자유 — 반복 노동·착취로부터, 기계의 부품이 아닌 온전한 인간으로",
                  highlight: false,
                },
                {
                  age: "디지털",
                  principle: "연결 + 자율",
                  problem: ["정보 과잉과 판단력 위기", "국경 초월 위기 (기후·팬데믹·AI)", "중앙 없는 협력 구조", "개인화와 집단 결속의 공존"],
                  tech: ["인터넷·플랫폼 (연결 인프라)", "AI·알고리즘 (정보 처리·판단 보조)", "오픈소스·프로토콜 (중앙 없는 협력)", "데이터·피드백 루프 (실시간 자율 조정)"],
                  jobs: [
                    ["정동·관계 노동 (affective·relational · Hardt-Negri)", "정체성 탐험가 (코치·상담사·심리학자 등)"],
                    ["돌봄 노동 (care work · Folbre)", "돌봄 통합가 (간호사·요양가·사회복지사 등)"],
                    ["암묵지·맥락 판단 (tacit knowledge · Polanyi)", "질서 설계자 (정책 기획가·거버넌스 전문가 등)"],
                    ["비정형 인지 (non-routine cognitive · Autor)", "생태계 직조가 (AI 활용 전문가·연구자 등)"],
                    ["의미 생성 (meaning-making · 자체 구성)", "세계관 창작자 (미디어 창작자·진실성 검증자 등)"],
                  ],
                  fr: "연결 속에서 자기 자신일 자유 — 감시·알고리즘·플랫폼 종속으로부터의 해방",
                  highlight: true,
                },
              ].map(({ age, principle, problem, tech, jobs, fr, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.45, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: highlight ? C.red : C.accent, lineHeight: 1.45, verticalAlign: "top", fontWeight: 800 }}>{principle}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>
                    {problem.map((p, k) => <div key={k}>{p}</div>)}
                  </td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>
                    {tech.map((t, k) => <div key={k}>{t}</div>)}
                  </td>
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
              <strong style={{ color: C.red }}>시장이 만들지 못하는 가치 활동</strong>(돌봄·정체성 발견·공동체 의례)을 <strong>공동체가 무대로 만든다.</strong> 산업시대가 시장 일자리에 정체성을 가두었다면, <strong>디지털 시대는 공동체가 정체성 실현의 무대를 짠다.</strong>
            </div>
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
