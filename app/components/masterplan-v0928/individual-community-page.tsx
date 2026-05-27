import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  // === 2.1 시대별 인간의 변화 — 본질 → 욕망 → 자유 → 사회 ===
  const ageRows = [
    {
      age: "농업",
      essence: "정착한 인간",
      desire: "안정된 생존",
      blocker: "신분·공간의 속박",
      freedom: "이동의 자유",
      society: "위계·전승 사회",
      ageColor: false,
    },
    {
      age: "산업",
      essence: "분업에 편입된 인간",
      desire: "안전한 생계",
      blocker: "착취·공황·전쟁",
      freedom: "공포로부터의 자유",
      society: "분업·표준화 사회",
      ageColor: false,
    },
    {
      age: "디지털",
      essence: "정체성을 가진 인간",
      desire: "정체성 실현",
      blocker: "역할·생계 강박",
      freedom: "정체성 실현의 자유",
      society: "(설계 중 — 연구원의 미션)",
      ageColor: true,
    },
  ];

  // === 2.3 공동체 6단계 (역할 분담 추가) ===
  const stages = [
    {
      label: "가정",
      to: "정체성을 발견·매칭하는 가정",
      bridgeRole: "정체성 발견",
      bridgeColor: "#c2410c",
      why: "강화된 개인은 직업에 자신을 맞추지 않고 자신의 정체성에 직업을 맞춘다. 정체성은 어릴 때부터 발견되어야 하므로, 가정이 첫 발견의 현장이 되어야 한다.",
      def: "아이를 시장이 정한 직업에 끼워 맞추는 곳이 아니라, 누구인지 발견하고 미래의 자리에 연결해주는 곳.",
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      bridgeRole: "정체성 발견",
      bridgeColor: "#c2410c",
      why: "가정에서 정체성을 발견하려면 비교의 거울이 필요하다. 같은 스펙끼리만 모이면 거울이 사라지므로, 이웃은 다양한 정체성을 일상에서 마주칠 수 있는 공간이어야 한다.",
      def: "다양한 직업·세대·배경이 일상 안에 섞여 자신과 다른 자기를 마주칠 수 있는 공간.",
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      bridgeRole: "정체성 발견",
      bridgeColor: "#c2410c",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 마을은 정체성별 훈련 경로가 공존하는 생활권이어야 한다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      bridgeRole: "다리 작동",
      bridgeColor: "#1a2744",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 도시는 마을·산업·연구·교육이 한 권역에 묶인 강소도시여야 한다.",
      def: "시산학으로 엮여 정체성과 묶음직업을 직접 잇는 강소도시. 도시마다 다른 특색(도시 구독).",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      bridgeRole: "다리 보호",
      bridgeColor: "#2563eb",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 표준화로 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
    },
    {
      label: "세계",
      to: "시민 직접 위임의 세계 거버넌스",
      bridgeRole: "다리 보호",
      bridgeColor: "#2563eb",
      why: "강화된 개인의 정체성 실현은 국경을 넘는다. 글로벌 도전(기후·AI·팬데믹)은 한 국가가 막을 수 없고, 영구적 세계권력은 정체성을 다시 위협한다. 권력의 원천은 강대국이 아니라 전 세계 시민이어야 한다.",
      def: "AI 에이전트가 보조하는 온라인 직접 민주주의. 전 세계 시민이 미션 단위로 권한을 위임하고, 해소되면 자동 환수한다.",
    },
  ];

  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      {/* 헤드라인 박스 — 회장님 인과 사슬 + 연구원 미션 */}
      <div style={{ padding: "10px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 13, letterSpacing: 4, color: C.accent, fontWeight: 800, marginBottom: 6 }}>
          시대는 인간을 바꿨고, 인간은 새로운 자유를 요구한다 — 디지털 시대의 인간은 정체성을 가진 존재로 바뀌었다
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          정체성을 가진 인간이 그 정체성을 실현할 자유를 요구한다. 그러나 그 정체성을 어떻게 발견하고 어떻게 직업과 연결할지는 비어 있다.
          <span style={{ color: C.accent }}> 우리가 그 다리를 놓는다.</span>
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>

        {/* 2.1 시대별 인간의 변화 */}
        <div>
          <div style={h3s}>2.1 인간은 어떻게 변했는가 — 본질이 욕망을 부르고, 욕망이 자유를 요구한다</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 6 }}>
            각 시대는 새로운 인간을 만들었다. 그 인간이 무엇을 원했고, 무엇이 그것을 가로막았으며, 그래서 어떤 자유를 요구했는지가 시대 전체의 골격이다.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, marginBottom: 8 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "8%" }}>시대</th>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "20%" }}>① 인간의 변화 <span style={{ fontWeight: 500, opacity: 0.85 }}>(본질)</span></th>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "16%" }}>② 그 인간의 욕망</th>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "18%" }}>③ 가로막는 것</th>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "20%" }}>④ 필요한 자유</th>
                <th style={{ padding: "8px 10px", textAlign: "left" }}>⑤ 그 위에 선 사회</th>
              </tr>
            </thead>
            <tbody>
              {ageRows.map(({ age, essence, desire, blocker, freedom, society, ageColor }, i) => (
                <tr key={i} style={{ background: ageColor ? "#fff4ec" : i % 2 === 0 ? "#fff" : C.bg, borderBottom: `1px solid ${C.navy}` }}>
                  <td style={{ padding: "10px 10px", fontWeight: 800, color: C.navy, fontSize: 14, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "10px 10px", color: ageColor ? C.accent : "#222", fontWeight: ageColor ? 800 : 600, verticalAlign: "top", lineHeight: 1.5 }}>{essence}</td>
                  <td style={{ padding: "10px 10px", color: "#222", verticalAlign: "top", lineHeight: 1.5, fontWeight: ageColor ? 700 : 500 }}>{desire}</td>
                  <td style={{ padding: "10px 10px", color: "#444", verticalAlign: "top", lineHeight: 1.5 }}>{blocker}</td>
                  <td style={{ padding: "10px 10px", color: ageColor ? C.accent : "#222", fontWeight: ageColor ? 800 : 600, verticalAlign: "top", lineHeight: 1.5 }}>{freedom}</td>
                  <td style={{ padding: "10px 10px", color: ageColor ? C.accent : "#222", verticalAlign: "top", lineHeight: 1.5, fontStyle: ageColor ? "italic" : "normal", fontWeight: ageColor ? 800 : 500 }}>{society}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: "8px 12px", background: "#fff4ec", borderLeft: `4px solid ${C.accent}`, fontSize: 12.5, lineHeight: 1.55, color: "#222" }}>
            <strong style={{ color: C.accent }}>농업·산업은 인간의 변화에 사회가 사후적으로 맞춰갔다 —</strong> 그 과정에서 혁명·전쟁·공황의 비용을 치렀다.
            디지털 시대는 그 비용을 치르기 전에 <strong style={{ color: C.navy }}>사회를 미리 설계할 수 있는 첫 시대</strong>다.
          </div>
        </div>

        {/* 2.2 다리 도식 — 연구원의 미션 */}
        <div>
          <div style={h3s}>2.2 디지털팀이 놓는 다리 — 미래 예측과 정체성 발견 사이</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            "정체성을 먼저 발견하라"는 원칙은 옳지만, 개인 혼자 미래를 모르고는 정체성을 발견할 수 없다.
            연구원은 <strong style={{ color: C.navy }}>미래 예측(Top-down)</strong>과 <strong style={{ color: C.accent }}>정체성 발견(Bottom-up)</strong> 사이에 매칭의 다리를 놓는다.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, alignItems: "stretch" }}>

            {/* 왼쪽: Top-down — 미래 예측 */}
            <div style={{ padding: "12px 14px", background: "#eef3fb", borderTop: `3px solid ${C.navy}`, borderBottom: `3px solid ${C.navy}`, borderLeft: `4px solid ${C.navy}` }}>
              <div style={{ fontSize: 10.5, letterSpacing: 3, color: C.navy, fontWeight: 800, marginBottom: 4 }}>TOP-DOWN · 연구원의 작업</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, marginBottom: 8 }}>미래 예측</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#222" }}>
                <div style={{ marginBottom: 4 }}>① 디지털 시대 핵심 5% 문제 예측</div>
                <div style={{ marginBottom: 4, paddingLeft: 10 }}>↓</div>
                <div style={{ marginBottom: 4 }}>② 그 문제를 풀 직업군 매핑</div>
                <div style={{ marginBottom: 4, paddingLeft: 10 }}>↓</div>
                <div style={{ marginBottom: 0 }}>③ 그 직업이 요구할 <strong style={{ color: C.navy }}>정체성 유형</strong> 도출</div>
              </div>
            </div>

            {/* 가운데: 매칭 다리 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 0", position: "relative" }}>
              <div style={{ fontSize: 11, color: "#666", fontWeight: 700, marginBottom: 6, letterSpacing: 2 }}>매칭</div>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>◆</div>
              <div style={{ fontSize: 10.5, color: C.accent, fontWeight: 800, marginTop: 6, textAlign: "center", lineHeight: 1.35 }}>연구원이<br/>놓는 다리</div>
            </div>

            {/* 오른쪽: Bottom-up — 정체성 발견 */}
            <div style={{ padding: "12px 14px", background: "#fff4ec", borderTop: `3px solid ${C.accent}`, borderBottom: `3px solid ${C.accent}`, borderRight: `4px solid ${C.accent}` }}>
              <div style={{ fontSize: 10.5, letterSpacing: 3, color: C.accent, fontWeight: 800, marginBottom: 4 }}>BOTTOM-UP · 개인의 경로</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: C.accent, marginBottom: 8 }}>정체성 발견</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#222" }}>
                <div style={{ marginBottom: 4 }}>① 가정에서 정체성의 씨앗을 발견</div>
                <div style={{ marginBottom: 4, paddingLeft: 10 }}>↓</div>
                <div style={{ marginBottom: 4 }}>② 이웃·마을에서 다양성과 비교·훈련</div>
                <div style={{ marginBottom: 4, paddingLeft: 10 }}>↓</div>
                <div style={{ marginBottom: 0 }}>③ 도시에서 <strong style={{ color: C.accent }}>자기 정체성에 맞는 일</strong>과 만남</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "8px 12px", background: C.navy, color: "#fff", marginTop: 8, borderRadius: 2 }}>
            <div style={{ fontSize: 12.5, lineHeight: 1.6, fontWeight: 500 }}>
              <strong>산업시대는 직업이 사람을 빚었다.</strong> 시장이 일자리를 정했고, 사람은 거기에 자기를 끼워 맞췄다.
              <strong style={{ color: "#fcd34d" }}> 디지털 시대는 사람의 정체성이 직업을 부른다.</strong> 그 사이에 우리가 매칭 시스템을 설계한다.
            </div>
          </div>
        </div>

        {/* 2.3 공동체 6단계 — 다리의 역할 분담 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.3 그 다리가 작동할 공간 — 가정에서 세계까지 6단계 역할 분담</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 8 }}>
            각 공동체 단계는 다리의 어느 역할을 맡는다.
            <span style={{ color: C.accent, fontWeight: 700 }}> 가정·이웃·마을은 정체성을 발견·훈련</span>하고,
            <span style={{ color: C.navy, fontWeight: 700 }}> 도시는 매칭 다리가 실제 작동하는 무대</span>이며,
            <span style={{ color: "#2563eb", fontWeight: 700 }}> 국가·세계는 그 다리가 무너지지 않게 보호</span>한다.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
            {stages.map(({ label, to, bridgeRole, bridgeColor, why, def }, i) => (
              <div key={i} style={{ display: "flex" }}>
                <div style={{ flex: 1, padding: "8px 8px", background: i % 2 ? C.bg : "#fff", borderTop: `2px solid ${bridgeColor}`, borderBottom: `2px solid ${bridgeColor}`, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                    <div style={{ fontSize: 10.5, color: "#888", fontWeight: 700 }}>{i + 1}단계</div>
                    <div style={{ fontSize: 9, color: "#fff", background: bridgeColor, padding: "1px 5px", borderRadius: 2, fontWeight: 700, letterSpacing: 0.5 }}>{bridgeRole}</div>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: bridgeColor, lineHeight: 1.3, marginBottom: 5, paddingBottom: 4, borderBottom: `1px dashed ${bridgeColor}` }}>{to}</div>
                  <div style={{ fontSize: 9.5, color: C.accent, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>왜</div>
                  <div style={{ fontSize: 9.75, color: "#444", lineHeight: 1.35, marginBottom: 5, fontStyle: "italic" }}>{why}</div>
                  <div style={{ fontSize: 9.5, color: C.navy, fontWeight: 700, marginBottom: 1, textTransform: "uppercase", letterSpacing: 0.5 }}>새 역할</div>
                  <div style={{ fontSize: 10.25, color: "#111", lineHeight: 1.35, fontWeight: 600, flex: 1 }}>{def}</div>
                </div>
                {i < stages.length - 1 && (
                  <div style={{ width: 12, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 20, fontWeight: 900, flexShrink: 0 }}>›</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ padding: "8px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, marginTop: 8 }}>
            <div style={{ fontSize: 12, lineHeight: 1.55, color: "#222" }}>
              <strong style={{ color: C.red }}>시장이 만들지 못하는 가치 활동</strong>(돌봄·정체성 발견·공동체 의례)을 <strong>공동체가 무대로 만든다.</strong>
              산업시대가 시장 일자리에 정체성을 가두었다면, <strong style={{ color: C.navy }}>디지털 시대는 공동체가 정체성 실현의 무대를 짠다.</strong>
            </div>
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
