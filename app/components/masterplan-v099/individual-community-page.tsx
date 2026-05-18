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
      vision: "/generated/v099-community-visions/family-pencil.png",
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      old: "동질 계층의 비공식 돌봄",
      why: "가정에서 정체성을 발견하려면 비교의 거울이 필요하다. 같은 스펙끼리만 모이면 거울이 사라지므로, 이웃은 다양한 정체성을 일상에서 마주칠 수 있는 공간이어야 한다.",
      def: "다양한 직업·세대·배경이 일상 안에 섞여 자신과 다른 자기를 마주칠 수 있는 공간.",
      need: "돌봄 통합가·세계관 창작자",
      vision: "/generated/v099-community-visions/neighborhood-pencil.png",
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      old: "한 방향 학원가·획일 교육",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 마을은 정체성별 훈련 경로가 공존하는 생활권이어야 한다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
      need: "질서 설계자·세계관 창작자",
      vision: "/generated/v099-community-visions/village-pencil.png",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      old: "수도권 집중·대도시 출근",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 도시는 마을·산업·연구·교육이 한 권역에 묶인 강소도시여야 한다.",
      def: "시산학으로 엮여 정체성과 묶음직업을 직접 잇는 강소도시. 도시마다 다른 특색.",
      need: "생태계 직조가",
      vision: "/generated/v099-community-visions/city-pencil.png",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      old: "표준 행정·하위 단위 흡수",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 표준화로 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
      need: "질서 설계자",
      vision: "/generated/v099-community-visions/nation-pencil.png",
    },
    {
      label: "세계",
      to: "미션 한정·자동 환수 거버넌스",
      old: "강대국 중심 영구 질서",
      why: "국가가 다양성과 안전망의 큰 틀을 짜더라도, 강화된 개인의 정체성 실현은 국경을 넘는다. 그 무대 자체를 위협하는 글로벌 도전(기후·AI·팬데믹)은 한 국가가 막을 수 없고, 영구적 세계권력은 정체성을 다시 위협하므로, 세계 거버넌스는 미션 한정·자동 환수 구조여야 한다.",
      def: "위협이 닥칠 때만 권한을 받고 해소되면 자동으로 해체되는 미션 한정 구조.",
      need: "질서 설계자·세계관 창작자",
      vision: "/generated/v099-community-visions/world-pencil.png",
    },
  ];

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 13, letterSpacing: 4, color: C.accent, fontWeight: 800, marginBottom: 4 }}>산업화는 사람을 부품으로 만들었다. 디지털·AI는 사업 파트너 같은 인재를 요구한다</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.35 }}>
          새 시대의 문제가 먼저 보여야, 그 문제를 풀 직업이 나오고, 그 직업에 맞는 정체성을 발견할 수 있다.
          산업화는 스킬을 직업으로 만들었지만, 디지털·AI는 <strong style={{ color: C.red }}>자기 미션을 가진 인재</strong>를 직업으로 만든다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 2.1 개인과 전문성의 변화 — 시대별 관찰 (3계층: 핵심·주요·파생) */}
        <div>
          <div style={h3s}>2.1 개인과 전문성의 변화 — 시대마다 핵심·주요·파생으로 갈라진다</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 5 }}>
            시대의 과제는 셋으로 갈라진다 — <strong style={{ color: C.navy }}>핵심</strong>(시대를 정의하는 자), <strong>주요</strong>(시대의 일을 수행하는 자), <strong>파생</strong>(시대의 토대를 만드는 자).
            산업화는 사람을 부품으로 만들었지만, 디지털·AI는 <strong style={{ color: C.red }}>자기 미션을 가진 사업 파트너</strong> 같은 인재를 요구한다.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 6 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "6%" }}>시대</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "7%" }}>층위</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "17%" }}>핵심 과제</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "20%" }}>핵심 기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "20%" }}>핵심 전문성</th>
                <th style={{ padding: "4px 6px", textAlign: "left" }}>이상적 인재상</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  age: "농업",
                  ageColor: false,
                  rows: [
                    { level: "핵심", task: "위계 질서의 정당화", tech: "위계를 신성화한 종교", expert: "의례·통치의 권위", ideal: "덕망 있는 권위자" },
                    { level: "주요", task: "세대 간 지식의 전승", tech: "기록을 가능케 한 문자", expert: "경험의 축적과 전승", ideal: "지혜로운 원로" },
                    { level: "파생", task: "식량 생산의 안정화", tech: "물을 다스리는 관개술", expert: "체화된 생산의 기예", ideal: "건강하고 부지런한 일꾼" },
                  ],
                },
                {
                  age: "산업",
                  ageColor: false,
                  rows: [
                    { level: "핵심", task: "대규모 조직의 운영", tech: "분업을 제도화한 관료제·조립라인", expert: "조직 운영의 관리 전문성", ideal: "유능한 조직 관리자" },
                    { level: "주요", task: "공간·시간의 압축", tech: "거리를 좁힌 철도·전신", expert: "분과별 심화 전문성", ideal: "노련한 분과 전문가" },
                    { level: "파생", task: "인간 근력의 한계 극복", tech: "에너지를 생산하는 동력기관", expert: "정형화된 반복 노동", ideal: "성실한 숙련 노동자" },
                  ],
                },
                {
                  age: "디지털",
                  ageColor: true,
                  rows: [
                    { level: "핵심", task: "새 미션·카테고리·플랫폼 표준의 정의", tech: "AI·플랫폼 인프라의 설계", expert: "미션 주도의 협업 역량", ideal: "자기 미션을 가진 사업 파트너" },
                    { level: "주요", task: "정보 과잉 속 가치 창출", tech: "판단을 증폭하는 AI·알고리즘", expert: "맥락·의미를 생성하는 비정형 인지", ideal: "통찰력 있는 맥락 해석자" },
                    { level: "파생", task: "정체성 표현과 공동체 결속", tech: "생성 AI·플랫폼·SNS", expert: "자기 정체성의 진정성 있는 표현", ideal: "정체성 기반의 1인 창작자" },
                  ],
                },
              ].flatMap(({ age, ageColor, rows }) => rows.map((r, j) => ({ ...r, age, ageColor, isFirst: j === 0, rowCount: rows.length }))).map(({ age, ageColor, isFirst, rowCount, level, task, tech, expert, ideal }, i) => (
                <tr key={i} style={{ background: ageColor ? "#f0f4ff" : i % 6 < 3 ? "#fff" : C.bg }}>
                  {isFirst && <td rowSpan={rowCount} style={{ padding: "4px 6px", borderBottom: `2px solid ${C.navy}`, borderTop: i === 0 ? "none" : `2px solid ${C.navy}`, fontWeight: 800, color: ageColor ? C.red : C.navy, lineHeight: 1.45, verticalAlign: "top", fontSize: 13 }}>{age}</td>}
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: level === "핵심" ? (ageColor ? C.red : C.navy) : C.accent, fontWeight: level === "핵심" ? 800 : 700, lineHeight: 1.45, verticalAlign: "top" }}>{level}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>{task}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>{tech}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>{expert}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: ageColor && level === "핵심" ? C.red : "#222", fontWeight: ageColor && level === "핵심" ? 700 : 500, lineHeight: 1.45, verticalAlign: "top" }}>{ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: "#333" }}>
            <strong style={{ color: C.navy }}>층위가 시대를 만든다 —</strong> 농업시대는 <strong>위계의 권위자</strong>가, 산업시대는 <strong>조직의 관리자</strong>가 시대를 정의했다. 디지털 시대는 <strong style={{ color: C.red }}>자기 미션을 가진 사업 파트너</strong>가 새 카테고리를 만드는 자가 된다. <strong>먼저 풀어야 할 문제를 보면, 그 문제를 푸는 자가 보이고, 거기에 맞는 정체성이 발견된다.</strong>
          </div>
        </div>

        {/* 2.2 공동체 6단계의 변화 — 가로 펼침 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.2 공동체 6단계의 변화 — 정체성 실현이 요구하는 새 역할</div>

          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            개인이 변화하면 공동체도 변화한다. 디지털 기술로 변화한 개인이 요구하는 공동체의 새 역할은 <strong style={{ color: C.navy }}>가정에서 세계까지 이어지는 연쇄</strong>다.
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
              {stages.map(({ label, to, old, why, def, need, vision }, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 1, padding: "8px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${C.accent}`, borderBottom: `2px solid ${C.accent}`, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 10.5, color: "#888", fontWeight: 700, marginBottom: 2 }}>{i + 1}단계</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: C.accent, lineHeight: 1.3, marginBottom: 4, paddingBottom: 4, borderBottom: `1px dashed ${C.accent}` }}>{to}</div>

                    <div style={{ fontSize: 9.5, color: "#888", fontWeight: 600, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>이전 역할</div>
                    <div style={{ fontSize: 10, color: "#666", lineHeight: 1.35, marginBottom: 4 }}>{old}</div>

                    <div style={{ fontSize: 9.5, color: C.accent, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>왜</div>
                    <div style={{ fontSize: 9.75, color: "#444", lineHeight: 1.35, marginBottom: 4, fontStyle: "italic" }}>{why}</div>

                    <div style={{ fontSize: 9.5, color: C.navy, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>새 역할</div>
                    <div style={{ fontSize: 10.25, color: "#111", lineHeight: 1.35, fontWeight: 600, flex: 1 }}>{def}</div>
                    <div
                      style={{
                        marginTop: 4,
                        marginLeft: -8,
                        marginRight: -8,
                        marginBottom: -8,
                        height: 84,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        overflow: "hidden",
                        borderTop: "1px solid #d7dce8",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={vision}
                        alt={`${label} 공동체 비전`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center bottom",
                          display: "block",
                        }}
                      />
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
