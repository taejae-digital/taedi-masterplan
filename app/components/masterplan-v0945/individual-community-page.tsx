import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  // === 2.1 역사의 거대한 전환과 디지털 시대의 과제 (v0.9.29) ===
  // 세 시대 × 6 속성 매트릭스. 산업시대 기술은 3-stack.
  const eras = [
    {
      name: "농업 시대",
      sub: "정착 · 위계",
      essence: "자연 극복",
      essenceDetail: "정착으로 식량 안정",
      techType: "stack",
      techSubtitle: "식량을 대중화",
      tech: [
        { n: "①", label: "농경", era: "기원전" },
        { n: "②", label: "관개·정착", era: "BC 3000" },
      ],
      community: "마을 · 소도시",
      communityDetail: "(자치)",
      task: "식량 생산 안정화",
      expertise: "경험과 노하우 (구전)",
      ideal: "농민 · 장인",
      freedom: "생존권 보장",
      freedomDetail: "외적·기아·전쟁 위협으로부터",
      order: "왕정 · 봉건주의",
      orderDetail: "왕→영주→마을 자치, 원로 권위 — 전환은 제국 흥망과 종교 전쟁으로 진통",
      pending: false,
    },
    {
      name: "산업 시대",
      sub: "분업 · 관리",
      essence: "물리적 한계 극복",
      essenceDetail: "기계가 신체노동 대체",
      techType: "stack",
      techSubtitle: "지식·생산·에너지를 대중화",
      tech: [
        { n: "①", label: "인쇄술", era: "15c" },
        { n: "②", label: "기계·증기", era: "18c" },
        { n: "③", label: "전기", era: "19-20c" },
      ],
      community: "국가 · 대도시",
      communityDetail: "(확장)",
      task: "대량 생산과 관리",
      expertise: "정형화된 분업 기술",
      ideal: "숙련공 · 관리자 · 직업인",
      freedom: "사람답게 존중받을 자유",
      freedomDetail: "참정권·사유재산권·인권",
      order: "민주주의 · 자본주의",
      orderDetail: "참정권 → 1·2차 대전 → 팍스 아메리카나 vs 공산주의",
      pending: false,
    },
    {
      name: "디지털 시대",
      sub: "연결 · 자율",
      essence: "인지적 한계 극복",
      essenceDetail: "AI가 인지노동 대체",
      techType: "stack",
      techSubtitle: "정보·지능을 대중화",
      tech: [
        { n: "①", label: "인터넷", era: "1990s" },
        { n: "②", label: "AI", era: "2020s" },
      ],
      community: "세계 + 강소도시 · 이웃",
      communityDetail: "(세계화 · 지역화)",
      task: "정체성대로 사는 삶",
      taskDetail: "생계 중심 → 나를 위한 일",
      expertise: "깊이+너비 통합, AI 조율",
      ideal: "정체성 실현인",
      freedom: "자아실현의 자유",
      freedomDetail: "정체성 실현",
      freedomExtra: "AI가 인지노동 영역에 도달하면서 산업시대 노동가치설이 흔들린다",
      order: "정체성 기반 세계 거버넌스",
      orderDetail: "민주주의·자본주의를 넘는 새 사회계약 — 정체성 실현권, AI 인프라 평등 접근권, 세계 시민 거버넌스 (진통은 진행 중 — 분배·정체성 갈등)",
      pending: false,
      highlight: true,
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
      bridgeRole: "정체성 훈련",
      bridgeColor: "#c2410c",
      why: "이웃에서 발견된 정체성이 실제 능력이 되려면 훈련이 필요하다. 정체성마다 필요한 훈련이 다르므로, 마을은 정체성별 훈련 경로가 공존하는 생활권이어야 한다.",
      def: "예술·연구·돌봄·창업 등 정체성별로 다른 훈련 경로가 같은 생활권 안에 공존하는 규모.",
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      bridgeRole: "정체성 실현 환경",
      bridgeColor: "#1a2744",
      why: "마을에서 훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 한다. 일자리가 멀리 있으면 사슬이 끊기므로, 도시는 마을·산업·연구·교육이 한 권역에 묶인 강소도시여야 한다.",
      def: "시산학으로 엮여 정체성과 디지털 시대의 새 직업들을 직접 잇는 강소도시. 도시마다 다른 특색(도시 구독).",
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      bridgeRole: "실현 환경 보장",
      bridgeColor: "#2563eb",
      why: "도시에서 정체성과 일이 연결되려면 국가가 다양성을 표준화로 억누르지 말아야 한다. 그러나 도시 간 격차가 정체성을 배제해선 안 되므로, 국가는 표준 경로가 아니라 다양성과 안전망의 큰 틀만 짠다.",
      def: "표준 경로 설계가 아니라 다양성과 안전망의 큰 틀만 짜고, 실행은 도시로 위임.",
    },
    {
      label: "세계",
      to: "시민 직접 위임의 세계 거버넌스",
      bridgeRole: "실현 환경 보장",
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
          시대는 인간을 바꿨고, 인간은 새로운 자유를 요구한다
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          정체성을 가진 인간이 그 정체성을 실현할 자유를 요구한다. 그러나 그 정체성을 어떻게 발견하고 어떻게 직업과 연결할지는 비어 있다.
          <span style={{ color: C.accent }}> 우리가 그 다리를 놓는다.</span>
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 22 }}>

        {/* 2.1 역사의 거대한 전환과 디지털 시대의 과제 — 가로 방향 (시대 = row) */}
        <div>
          <div style={h3s}>2.1 역사의 거대한 전환과 디지털 시대의 과제</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#222", marginBottom: 12 }}>
            인류는 세 번 자기 한계를 넘었다. <strong>매번 새 기술이 희소했던 자원을 대중화했고, 그 대중화가 새 공동체·새 인재상·새 자유를 끌어냈다.</strong>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 8 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "9%", fontSize: 11.5 }}>시대</th>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "13%", fontSize: 11.5 }}>시대 본질</th>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "17%", fontSize: 11.5 }}>핵심 기술</th>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "13%", fontSize: 11.5 }}>공동체 단위</th>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "18%", fontSize: 11.5 }}>과제 · 전문성 · 인재상</th>
                <th style={{ padding: "10px 12px", textAlign: "left", width: "15%", fontSize: 11.5 }}>추구한 자유</th>
                <th style={{ padding: "10px 12px", textAlign: "left", fontSize: 11.5 }}>권력 · 경제 질서</th>
              </tr>
            </thead>
            <tbody>
              {eras.map((e, i) => (
                <tr key={i} style={{ background: e.pending ? "#fff4ec" : i % 2 === 0 ? "#fff" : C.bg, borderBottom: `1px solid ${C.navy}` }}>
                  <td style={{ padding: "14px 12px", verticalAlign: "top" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>{e.name}</div>
                    <div style={{ fontSize: 10.5, color: "#666", marginTop: 2 }}>{e.sub}</div>
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: e.pending ? C.red : C.navy }}>{e.essence}</div>
                    <div style={{ fontSize: 10.5, color: "#555", marginTop: 3 }}>{e.essenceDetail}</div>
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top" }}>
                    {e.techSubtitle && (
                      <div style={{ fontSize: 10, color: C.accent, fontWeight: 700, marginBottom: 5, letterSpacing: 0.3 }}>
                        {e.techSubtitle}
                      </div>
                    )}
                    {e.techType === "stack" ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {(e.tech as Array<{n: string; label: string; era: string}>).map((t, k) => (
                          <div key={k} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5 }}>
                            <span style={{ fontWeight: 800, color: C.navy }}>{t.n}</span>
                            <span style={{ fontWeight: 600, color: "#222" }}>{t.label}</span>
                            <span style={{ fontSize: 9.5, color: "#888" }}>({t.era})</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#222" }}>{(e.tech as string[])[0]}</div>
                    )}
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#222" }}>{e.community}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{e.communityDetail}</div>
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ fontSize: 9, color: "#888", fontWeight: 700, letterSpacing: 0.5, marginRight: 5 }}>과제</span>
                      <span style={{ fontSize: 11.5, color: "#222", fontWeight: 600 }}>{e.task}</span>
                      {e.taskDetail && <div style={{ fontSize: 10.5, color: "#666", fontStyle: "italic", marginLeft: 26, marginTop: 2 }}>{e.taskDetail}</div>}
                    </div>
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ fontSize: 9, color: "#888", fontWeight: 700, letterSpacing: 0.5, marginRight: 5 }}>전문성</span>
                      <span style={{ fontSize: 11.5, color: "#222" }}>{e.expertise}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: 9, color: "#888", fontWeight: 700, letterSpacing: 0.5, marginRight: 5 }}>인재상</span>
                      <span style={{ fontSize: 11.5, color: e.pending ? C.red : "#222", fontWeight: 700 }}>{e.ideal}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color: e.pending ? C.red : C.navy, lineHeight: 1.4 }}>{e.freedom}</div>
                    <div style={{ fontSize: 10.5, color: "#555", marginTop: 3 }}>{e.freedomDetail}</div>
                    {e.freedomExtra && (
                      <div style={{ fontSize: 10, color: C.accent, marginTop: 5, fontStyle: "italic", lineHeight: 1.4 }}>
                        ↳ {e.freedomExtra}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: "14px 12px", verticalAlign: "top", lineHeight: 1.5, background: e.pending ? "#fef2f2" : "transparent", border: e.pending ? `2px dashed ${C.red}` : undefined }}>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color: e.pending ? C.red : C.navy, fontStyle: e.pending ? "italic" : "normal" }}>{e.order}</div>
                    <div style={{ fontSize: 10.5, color: e.pending ? C.red : "#555", marginTop: 3, fontStyle: e.pending ? "italic" : "normal" }}>{e.orderDetail}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2.2 공동체 6단계 — 역할 분담 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.2 가정에서 세계까지 — 공동체 6단계의 변화</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#222", marginBottom: 14 }}>
            각 공동체 단계는 정체성 실현의 어느 역할을 맡는다.
            <span style={{ color: C.accent, fontWeight: 700 }}> 가정·이웃·마을은 정체성을 발견·훈련</span>하고,
            <span style={{ color: C.navy, fontWeight: 700 }}> 도시는 정체성과 직업을 잇는 실현의 무대</span>이며,
            <span style={{ color: "#2563eb", fontWeight: 700 }}> 국가·세계는 그 실현 환경을 보장</span>한다.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
            {stages.map(({ label, to, bridgeRole, bridgeColor, why, def }, i) => (
              <div key={i} style={{ display: "flex" }}>
                <div style={{ flex: 1, padding: "14px 13px", background: i % 2 ? C.bg : "#fff", borderTop: `3px solid ${bridgeColor}`, borderBottom: `3px solid ${bridgeColor}`, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <div style={{ fontSize: 11.5, color: "#888", fontWeight: 700 }}>{i + 1}단계</div>
                    <div style={{ fontSize: 9.5, color: "#fff", background: bridgeColor, padding: "2px 7px", borderRadius: 2, fontWeight: 700, letterSpacing: 0.5 }}>{bridgeRole}</div>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, lineHeight: 1.25, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: bridgeColor, lineHeight: 1.35, marginBottom: 8, paddingBottom: 7, borderBottom: `1px dashed ${bridgeColor}` }}>{to}</div>
                  <div style={{ fontSize: 11, color: "#444", lineHeight: 1.55, marginBottom: 22, fontStyle: "italic", minHeight: "8.5em" }}>{why}</div>
                  <div style={{ fontSize: 12, color: C.navy, fontWeight: 700, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 }}>새 역할</div>
                  <div style={{ fontSize: 11.5, color: "#111", lineHeight: 1.5, fontWeight: 600, minHeight: "6.5em" }}>{def}</div>
                </div>
                {i < stages.length - 1 && (
                  <div style={{ width: 14, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, fontSize: 22, fontWeight: 900, flexShrink: 0 }}>›</div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
