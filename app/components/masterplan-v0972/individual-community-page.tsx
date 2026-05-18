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
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      old: "동질 계층의 비공식 돌봄",
      why: "가정에서 정체성을 발견하려면 비교의 거울이 필요하다. 같은 스펙끼리만 모이면 거울이 사라지므로, 이웃은 다양한 정체성을 일상에서 마주칠 수 있는 공간이어야 한다.",
      def: "다양한 직업·세대·배경이 일상 안에 섞여 자신과 다른 자기를 마주칠 수 있는 공간.",
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      old: "한 방향 학원가·획일 교육",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 마을은 정체성별 훈련 경로가 공존하는 생활권이어야 한다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      old: "수도권 집중·대도시 출근",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 도시는 마을·산업·연구·교육이 한 권역에 묶인 강소도시여야 한다.",
      def: "시산학으로 엮여 정체성과 묶음직업을 직접 잇는 강소도시. 도시마다 다른 특색.",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      old: "표준 행정·하위 단위 흡수",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 표준화로 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
    },
    {
      label: "세계",
      to: "미션 한정·자동 환수 거버넌스",
      old: "강대국 중심 영구 질서",
      why: "국가가 다양성과 안전망의 큰 틀을 짜더라도, 강화된 개인의 정체성 실현은 국경을 넘는다. 그 무대 자체를 위협하는 글로벌 도전(기후·AI·팬데믹)은 한 국가가 막을 수 없고, 영구적 세계권력은 정체성을 다시 위협하므로, 세계 거버넌스는 미션 한정·자동 환수 구조여야 한다.",
      def: "위협이 닥칠 때만 권한을 받고 해소되면 자동으로 해체되는 미션 한정 구조.",
    },
  ];

  const historicalEras = [
    {
      age: "농업",
      principle: "정착 + 위계",
      problem: "생존 불확실성과 잉여의 분배",
      tech: "관개·문자·달력",
      individual: "신분·혈통이 정체성을 결정하고, 태어난 자리에 평생 묶였다. 노동력 자체가 가치였다.",
      community: "마을·씨족이 노동력 재생산과 위계 유지의 단위가 되었다.",
      freedom: "신분·혈통에 묶이지 않을 자유",
      highlight: false,
    },
    {
      age: "산업",
      principle: "분업 + 관리",
      problem: "대량생산과 대규모 협력 구조",
      tech: "증기·전기·조립라인",
      individual: "직업이 정체성을 결정하고, 한 회사·한 영역에 귀속되었다. 표준화된 자격이 가치를 측정했다.",
      community: "국가·기업·노조가 임금노동을 단위로 분배·복지·정치를 작동시켰다.",
      freedom: "역할로 환원되지 않을 자유",
      highlight: false,
    },
    {
      age: "디지털",
      principle: "연결 + 자율",
      problem: "정보 과잉과 판단력 위기 · 국경 초월 위기(기후·팬데믹·AI) · 권력 집중",
      tech: "AI·알고리즘 · 인터넷·플랫폼 · 오픈소스·프로토콜",
      individual: "판단력·실행력·파급력 세 축에서 동시에 강화된다. 직업이 정체성을 정하던 시대에서, 정체성이 직업을 정하는 시대로 이동한다.",
      community: "산업시대 모델 그대로. (→ 2.3)",
      freedom: "연결 속에서 자기 자신일 자유 — 정체성 실현의 자유",
      highlight: true,
    },
  ];

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 8 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.35 }}>
          기술이 개인을 바꾸면, 그 개인들로 이루어진 공동체도 함께 바뀌어 왔다. 디지털 시대엔 그 변화를 기다릴 수 없다 — 공동체 각 단계의 역할과 권한을 의도적으로 설계해야 한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 2.1 역사 — 개인이 변하면 공동체도 함께 변했다 */}
        <div>
          <div style={h3s}>2.1 시대의 변화 — 개인이 변하면 공동체도 함께 변했다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 6 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "7%" }}>시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "10%" }}>핵심 원리</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "14%" }}>인류의 숙제</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "12%" }}>핵심 기술</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "22%" }}>개인은 어떻게 변했는가</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "22%" }}>공동체는 어떻게 변했는가</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>원하는 자유</th>
              </tr>
            </thead>
            <tbody>
              {historicalEras.map(({ age, principle, problem, tech, individual, community, freedom, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.45, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: highlight ? C.red : C.accent, lineHeight: 1.45, verticalAlign: "top", fontWeight: 800 }}>{principle}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#222", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>{problem}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500 }}>{tech}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#111", lineHeight: 1.5, verticalAlign: "top", fontWeight: highlight ? 700 : 500 }}>{individual}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: highlight ? C.accent : "#111", lineHeight: 1.5, verticalAlign: "top", fontWeight: 500, fontStyle: highlight ? "italic" : "normal" }}>{community}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: highlight ? C.red : "#333", fontWeight: highlight ? 700 : 600, lineHeight: 1.45, verticalAlign: "top" }}>{freedom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2.2 디지털 시대 개인의 변화 */}
        <div>
          <div style={h3s}>2.2 디지털 시대 — 개인은 이렇게 강화되고 있다</div>

          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            디지털 시대 개인의 강화는 <strong style={{ color: C.navy }}>판단력·실행력·파급력</strong> 세 축에서 동시에 일어난다.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            <div style={{ padding: "10px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 11, color: C.navy, fontWeight: 800, marginBottom: 4 }}>판단력</div>
              <div style={{ fontSize: 12, color: "#111", lineHeight: 1.5, fontWeight: 500 }}>
                AI가 추론·전문성을 개인에게 이전한다. 학위·자격증 없이도 전문가 수준의 도구에 접근하며, 의사·변호사·분석가가 하던 판단을 누구나 할 수 있게 된다.
              </div>
            </div>
            <div style={{ padding: "10px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 11, color: C.navy, fontWeight: 800, marginBottom: 4 }}>실행력</div>
              <div style={{ fontSize: 12, color: "#111", lineHeight: 1.5, fontWeight: 500 }}>
                한 사람이 과거 부서 하나의 산출에 도달한다. 1인 기업과 본업·부업의 동시 운영이 현실이 되고, 직업·소속 하나에 매이지 않는 삶이 가능해진다.
              </div>
            </div>
            <div style={{ padding: "10px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 11, color: C.navy, fontWeight: 800, marginBottom: 4 }}>파급력</div>
              <div style={{ fontSize: 12, color: "#111", lineHeight: 1.5, fontWeight: 500 }}>
                개인이 매스미디어급 도달 범위를 갖는다. 공론장의 주체로 직접 참여하며, 과거 100명 규모 조직이 가졌던 영향력에 1인이 도달한다.
              </div>
            </div>
          </div>
        </div>

        {/* 2.3 디지털 시대 공동체 설계 — 6단계 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.3 디지털 시대 — 공동체는 이렇게 설계해야 한다</div>

          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            강화된 개인의 정체성 실현을 받아낼 공동체 각 단계의 역할과 권한을 <strong style={{ color: C.navy }}>가정에서 세계까지 이어지는 연쇄</strong>로 설계한다.
          </div>

          {/* 가로 인과 사슬: 강화된 개인 → 6단계 */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 0, flex: 1 }}>

            {/* 출발점: 강화된 개인 */}
            <div style={{ width: 110, display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "8px 6px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, borderTop: `2px solid ${C.navy}`, borderBottom: `2px solid ${C.navy}` }}>
                <div style={{ fontSize: 10, color: "#888", fontWeight: 700, marginBottom: 4 }}>출발점</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, textAlign: "center", lineHeight: 1.3, marginBottom: 6 }}>강화된<br />개인</div>
                <div style={{ fontSize: 10, color: "#333", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>정체성이<br />직업을 정하는<br />시대로</div>
              </div>
            </div>

            {/* 화살표 */}
            <div style={{ width: 18, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 22, fontWeight: 900, flexShrink: 0 }}>›</div>

            {/* 6단계 카드 가로 펼침 */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
              {stages.map(({ label, to, old, why, def }, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div style={{ flex: 1, padding: "8px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${C.accent}`, borderBottom: `2px solid ${C.accent}`, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 10.5, color: "#888", fontWeight: 700, marginBottom: 2 }}>{i + 1}단계</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, lineHeight: 1.35, marginBottom: 5, paddingBottom: 4, borderBottom: `1px dashed ${C.accent}` }}>{to}</div>

                    <div style={{ fontSize: 9.5, color: "#888", fontWeight: 600, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>이전 역할</div>
                    <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4, marginBottom: 5 }}>{old}</div>

                    <div style={{ fontSize: 9.5, color: C.accent, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>왜</div>
                    <div style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45, marginBottom: 5, fontStyle: "italic" }}>{why}</div>

                    <div style={{ fontSize: 9.5, color: C.navy, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>새 역할·권한</div>
                    <div style={{ fontSize: 11, color: "#111", lineHeight: 1.5, fontWeight: 600, flex: 1 }}>{def}</div>

                  </div>
                  {i < stages.length - 1 && (
                    <div style={{ width: 14, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 20, fontWeight: 900, flexShrink: 0 }}>›</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
