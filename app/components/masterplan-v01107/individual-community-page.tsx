import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  // === 2.1 역사의 거대한 전환과 디지털 시대의 과제 (v0.10.6) ===
  // 정체성은 자아실현의 감성어가 아니라, AI 시대 고유한 기여를 만드는 기준값으로 재정의.
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
      freedom: "자신의 욕망을 최대한 실현할 자유",
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
      task: "자기 기여 영역 창출",
      taskDetail: "",
      expertise: "문제 설정 + AI·데이터 지휘 + 고유 가치화",
      expertiseDetail: "풀 문제를 정의하고, AI·데이터·도구를 활용하여 결과를 만들고, 시장·공동체의 고유 가치로 연결",
      ideal: "정체성 기반 생산자",
      freedom: "고유한 기여를 실험할 자유",
      freedomDetail: "자기 기준으로 AI·데이터·시장을 지휘",
      order: "정체성 기반 생산질서와 새 사회계약",
      orderDetail: "표준 일자리 보장이 아니라 정체성 발견, AI·데이터 접근, 시장 연결, 필수 기술 접근을 보장 — 진통은 직업 붕괴·플랫폼 독점·접근 격차",
      pending: false,
      highlight: true,
    },
  ];

  // === 2.2 공동체 6단계 (역할 분담) — bridgeColor를 네이비 명도 3단계로 정리 ===
  // 정체성 발견 → 정체성 훈련 → 실현 환경. 발견(옅은 네이비) / 훈련(중간) / 실현(짙은 네이비)
  const stages = [
    {
      label: "가정",
      to: "정체성을 발견·매칭하는 가정",
      bridgeRole: "정체성 발견·훈련",
      bridgeColor: "#b08322",
      whyPoints: ["직업에 맞추기보다 정체성에 직업을 맞춤", "어릴 때부터 발견되어야 하므로 가정이 첫 현장"],
      rolePoints: ["아이의 성향·관심·강점을 관찰", "미래 기회와 연결하는 첫 매칭"],
    },
    {
      label: "이웃",
      to: "다양성이 일상에 있는 이웃",
      bridgeRole: "정체성 발견·훈련",
      bridgeColor: "#b08322",
      whyPoints: ["정체성 발견에는 비교의 거울이 필요", "같은 스펙끼리만 모이면 다른 가능성이 보이지 않음"],
      rolePoints: ["다른 직업·세대·배경을 일상에서 만남", "자신과 다른 삶의 경로를 발견"],
    },
    {
      label: "마을",
      to: "정체성별 훈련이 가능한 마을",
      bridgeRole: "정체성 발견·훈련",
      bridgeColor: "#b08322",
      whyPoints: ["발견된 정체성은 실제 능력으로 훈련되어야 함", "정체성마다 필요한 훈련 경로가 다름"],
      rolePoints: ["예술·연구·돌봄·창업 훈련 경로 제공", "생활권 안에서 반복 연습과 피드백"],
    },
    {
      label: "도시",
      to: "시산학 매칭 생태계의 강소도시",
      bridgeRole: "실현 환경",
      bridgeColor: "#0d7d72",
      whyPoints: ["훈련된 정체성이 일과 만나려면 산업·연구가 가까워야 함", "일자리·교육·연구가 멀면 성장 사슬이 끊김"],
      rolePoints: ["마을·산업·연구·교육을 한 권역에 묶음", "도시마다 다른 특색과 구독 모델 운영"],
    },
    {
      label: "국가",
      to: "다양성·안전망 큰 틀의 국가",
      bridgeRole: "실현 환경 보장",
      bridgeColor: "#2f5fa8",
      whyPoints: ["도시 간 격차가 정체성을 배제하면 안 됨", "국가는 표준화보다 안전망과 연결 규칙을 짜야 함"],
      rolePoints: ["다양성과 안전망의 큰 틀 설계", "실행은 도시로 위임하고 격차를 조정"],
    },
    {
      label: "세계",
      to: "시민 직접 위임의 세계 거버넌스",
      bridgeRole: "실현 환경 보장",
      bridgeColor: "#2f5fa8",
      whyPoints: ["정체성 실현과 글로벌 도전은 국경을 넘음", "영구적 세계권력은 다시 정체성을 위협"],
      rolePoints: ["AI 보조 온라인 직접 민주주의", "미션 단위 권한 위임과 자동 환수"],
    },
  ];
  // 2.1 시대 비교표
  function EraTable() {
    const th: React.CSSProperties = {
      padding: "8px 10px",
      textAlign: "left",
      fontSize: 11.8,
      fontWeight: 900,
      color: C.ink,
      background: "#fff",
      borderBottom: `2px solid ${C.ink}`,
      letterSpacing: -0.1,
    };
    const td: React.CSSProperties = {
      padding: "10px 10px",
      verticalAlign: "top",
      lineHeight: 1.36,
      borderBottom: `1px solid ${C.cardBorder}`,
    };
    const label: React.CSSProperties = { fontSize: 9.4, color: C.faint, fontWeight: 800, letterSpacing: 0.3, marginRight: 5 };
    const body: React.CSSProperties = { fontSize: 12.2, color: C.ink, fontWeight: 650 };
    const detail: React.CSSProperties = { fontSize: 10.6, color: C.muted, marginTop: 2, lineHeight: 1.38 };

    return (
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: 12.4, borderTop: `1px solid ${C.ink}` }}>
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "17%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "18%" }} />
          <col style={{ width: "14%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <tr>
            <th style={th}>시대</th>
            <th style={th}>시대 본질</th>
            <th style={th}>핵심 기술</th>
            <th style={th}>공동체 단위</th>
            <th style={th}>과제 · 전문성 · 인재상</th>
            <th style={th}>추구한 자유</th>
            <th style={th}>권력 · 경제 질서</th>
          </tr>
        </thead>
        <tbody>
          {eras.map((e, i) => {
            const hi = !!e.highlight;
            const rowBg = hi ? "#fff" : i % 2 === 0 ? "#fff" : C.bg;
            return (
              <tr key={i} style={{ background: rowBg }}>
                <td style={{ ...td, borderLeft: hi ? `4px solid ${C.teal}` : `1px solid ${C.cardBorder}` }}>
                  <div style={{ fontSize: 15.4, fontWeight: 900, color: C.ink, letterSpacing: -0.45 }}>{e.name}</div>
                  <div style={{ fontSize: 10.3, color: C.muted, marginTop: 2, fontWeight: 700 }}>{e.sub}</div>
                </td>
                <td style={td}>
                  <div style={{ fontSize: 12.2, fontWeight: 800, color: C.ink }}>{e.essence}</div>
                  <div style={detail}>{e.essenceDetail}</div>
                </td>
                <td style={td}>
                  <div style={{ fontSize: 9.9, color: C.muted, fontWeight: 800, marginBottom: 4, letterSpacing: 0.1 }}>{e.techSubtitle}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {(e.tech as Array<{ n: string; label: string; era: string }>).map((t, k) => (
                      <div key={k} style={{ display: "flex", alignItems: "baseline", gap: 4, fontSize: 11.3, lineHeight: 1.22 }}>
                        <span style={{ fontWeight: 900, color: C.ink }}>{t.n}</span>
                        <span style={{ fontWeight: 700, color: C.ink }}>{t.label}</span>
                        <span style={{ fontSize: 9.2, color: C.muted }}>({t.era})</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td style={td}>
                  <div style={body}>{e.community}</div>
                  <div style={detail}>{e.communityDetail}</div>
                </td>
                <td style={td}>
                  <div style={{ marginBottom: 5 }}>
                    <span style={label}>과제</span>
                    <span style={body}>{e.task}</span>
                    {e.taskDetail && <div style={{ fontSize: 9.8, color: C.muted, fontStyle: "italic", marginLeft: 24, marginTop: 1 }}>{e.taskDetail}</div>}
                  </div>
                  <div style={{ marginBottom: 5 }}>
                    <span style={label}>전문성</span>
                    <span style={{ fontSize: 11.3, color: C.ink }}>{e.expertise}</span>
                    {e.expertiseDetail && <div style={{ fontSize: 9.8, color: C.muted, fontStyle: "italic", marginLeft: 24, marginTop: 1, lineHeight: 1.32 }}>{e.expertiseDetail}</div>}
                  </div>
                  <div>
                    <span style={label}>인재상</span>
                    <span style={{ fontSize: 11.3, color: C.ink, fontWeight: 800 }}>{e.ideal}</span>
                  </div>
                </td>
                <td style={td}>
                  <div style={{ fontSize: 12.0, fontWeight: 850, color: C.ink, lineHeight: 1.28 }}>{e.freedom}</div>
                  <div style={detail}>{e.freedomDetail}</div>
                </td>
                <td style={{ ...td, borderRight: `1px solid ${C.cardBorder}` }}>
                  <div style={{ fontSize: 12.0, fontWeight: 850, color: C.ink, lineHeight: 1.28 }}>{e.order}</div>
                  <div style={detail}>{e.orderDetail}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 9px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.45 }}>AI 시대, 개인은 표준 직업에 들어가는 사람이 아니라 자기 기여 영역을 만드는 사람이 된다.</div>
        <div style={{ marginTop: 4, fontSize: 12.5, lineHeight: 1.42, color: C.muted, fontWeight: 500 }}>농업·산업·디지털 시대를 관통하는 전환은 기술이 인간의 한계를 차례로 넘어선 과정이었다. 디지털 시대의 과제는 표준 직업에 편입되는 것이 아니라, 가정에서 세계까지 이어지는 공동체가 개인의 정체성을 고유한 기여로 길러내는 것이다.</div>
      </div>

      <div style={{ padding: "14px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>

        {/* 2.1 역사의 거대한 전환 — 비교표 */}
        <div>
          <div style={{ ...h3s, fontSize: 17.2, margin: "8px 0 7px" }}>2.1 역사의 거대한 전환과 디지털 시대의 과제</div>
          <EraTable />
        </div>

        {/* 2.2 공동체 6단계 — 노드 + 화살표 + 역할 배지 플로우 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ ...h3s, fontSize: 17.2, margin: "8px 0 7px" }}>2.2 가정에서 세계까지 — 공동체의 변화</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, flex: 1, alignItems: "stretch" }}>
            {stages.map(({ label, to, bridgeRole, bridgeColor, whyPoints, rolePoints }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
                <div style={{ flex: 1, padding: "0 4px", display: "flex", flexDirection: "column" }}>
                  {/* 단계 마커 + 역할 배지 */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 2, marginBottom: 7 }}>
                    <div style={{ fontSize: 21, fontWeight: 900, color: C.navy, letterSpacing: -0.5 }}>{label}</div>
                    <div style={{ marginTop: 4, fontSize: 11, fontWeight: 800, color: "#fff", background: bridgeColor, padding: "2px 8px", borderRadius: 3, letterSpacing: 0.2 }}>{bridgeRole}</div>
                  </div>
                  {/* 카드 */}
                  <div style={{ flex: 1, padding: "9px 10px 10px", background: i % 2 ? C.bg : "#fff", border: `1px solid ${C.cardBorder}`, borderTop: `3px solid ${bridgeColor}`, borderRadius: 3, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 15.2, fontWeight: 850, color: bridgeColor, lineHeight: 1.28, marginBottom: 6, paddingBottom: 6, borderBottom: `1px dashed ${C.cardBorder}` }}>{to}</div>
                    <div style={{ fontSize: 11, fontWeight: 850, color: C.muted, letterSpacing: 0.4, marginBottom: 5 }}>왜 필요한가</div>
                    <ul style={{ margin: "0 0 7px 0", paddingLeft: 13, color: C.muted, fontSize: 12.8, lineHeight: 1.5 }}>
                      {whyPoints.map((point, k) => <li key={k} style={{ marginBottom: 4 }}>{point}</li>)}
                    </ul>
                    <div style={{ fontSize: 11, fontWeight: 850, color: C.ink, letterSpacing: 0.4, marginBottom: 5, paddingTop: 7, borderTop: `1px solid ${C.hairline}` }}>새 역할</div>
                    <ul style={{ margin: 0, paddingLeft: 13, color: C.ink, fontSize: 13.2, lineHeight: 1.5, fontWeight: 500 }}>
                      {rolePoints.map((point, k) => <li key={k} style={{ marginBottom: 4 }}>{point}</li>)}
                    </ul>
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div style={{ width: 14, display: "flex", alignItems: "center", justifyContent: "center", color: C.ink, fontSize: 22, fontWeight: 900, flexShrink: 0, paddingTop: 4 }}>›</div>
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
