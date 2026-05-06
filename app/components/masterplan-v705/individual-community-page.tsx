import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";

export function IndividualCommunityPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" />

      <div style={{ padding: "12px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C.accent, fontWeight: 800, marginBottom: 5 }}>분업 시대 → 연결 시대</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          분업이 인간을 역할로 쪼갰다면, 디지털은 연결로 개인을 강화한다.
          판단력·실행력·파급력이 네트워크를 통해 집중되고, 강화된 개인은 더 많은 자유를 요구한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 2.1 개인과 공동체의 변화 */}
        <div>
          <div style={h3s}>2.1 개인과 공동체의 변화 — 농업시대 · 산업시대 · 디지털시대</div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: "#222", marginBottom: 7 }}>
            새 기술이 개인을 강화할 때마다 — 농업의 토지 소유, 인쇄술의 신앙·지식 해석, 산업의 직업 선택, 인터넷의 정보 접근 — 공동체는 그 자유 요구를 새 권리로 제도화하며 응답해 왔다.
            <strong style={{ color: C.navy }}>디지털·AI 시대도 같은 패턴 위에 있다.</strong>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 7, alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>시대별 개인·공동체의 동시 변화 — 새 기술이 개인을 강화하면 공동체는 새 질서로 응답한다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, height: "100%" }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "9%" }}>시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "28%" }}>개인</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "30%" }}>공동체</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>다음 시대로의 전환 계기</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  age: "농업시대",
                  personal: ["생산단위: 가족·마을", "정체성: 혈통·토지·신분", "삶의 공식: 태어난 대로 사는 삶"],
                  community: ["중심: 마을·영주", "조율: 관습·혈연·종교", "위임: 신분에 내재된 지배"],
                  transition: "증기기관·공장·도시화 → 분업 기계의 부품으로 편입, 국민국가 형성",
                  highlight: false,
                },
                {
                  age: "산업시대",
                  personal: ["생산단위: 기업·조직", "정체성: 직업·직급·소속", "삶의 공식: 정체성을 직업에 맞추는 삶"],
                  community: ["중심: 국가·기업", "조율: 법·관료제·시장", "위임: 국민의 계약적 위임"],
                  transition: "인터넷·플랫폼·AI → 조직 밖에서 조직 수준의 산출 가능, 국가 독점 우회",
                  highlight: false,
                },
                {
                  age: "디지털시대",
                  personal: ["생산단위: 개인+AI", "정체성: 역량·관심·기여", "삶의 공식: 정체성을 실현할 수 있는 삶"],
                  community: ["중심: 도시·네트워크", "조율: 데이터·알고리즘·참여", "위임: 미션 한정 한시 위임"],
                  transition: "(진행 중)",
                  highlight: true,
                },
              ].map(({ age, personal, community, transition, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.5, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", lineHeight: 1.5, verticalAlign: "top" }}>
                    {personal.map((line, j) => <div key={j} style={{ fontSize: j === 0 ? 11 : 11.5, color: j === 0 ? "#888" : "#333", fontWeight: j === 2 ? 600 : 400 }}>{line}</div>)}
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", lineHeight: 1.5, verticalAlign: "top" }}>
                    {community.map((line, j) => <div key={j} style={{ fontSize: j === 0 ? 11 : 11.5, color: j === 0 ? "#888" : "#333", fontWeight: j === 2 ? 600 : 400 }}>{line}</div>)}
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: highlight ? C.light : C.accent, fontStyle: highlight ? "italic" : "normal", lineHeight: 1.5, verticalAlign: "top", fontSize: 11.5 }}>{transition}</td>
                </tr>
              ))}
            </tbody>
          </table>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>시대별 자유 요구와 제도화된 권리 — 강화된 개인의 자유 요구가 권리로 제도화돼 온 패턴</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, height: "100%" }}>
                <thead>
                  <tr style={{ background: C.accent, color: "#fff" }}>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "20%" }}>기술</th>
                    <th style={{ padding: "4px 7px", textAlign: "left" }}>원한 자유</th>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "30%" }}>제도화된 권리</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["농업 기술", "토지를 소유·상속할 자유", "토지 소유권·상속권"],
                    ["인쇄술", "성서·지식을 해석할 자유", "신앙·학문의 자유"],
                    ["산업 기계", "일·정치에 참여할 자유", "직업선택권·계약권·참정권"],
                    ["대중 미디어", "말하고 모일 자유", "표현·결사·노동·소수자 권리"],
                    ["인터넷", "정보·플랫폼 참여 자유", "정보접근권·플랫폼 이용권"],
                    ["디지털·AI", "기관에 속하지 않고 스스로 삶·정체성을 설계할 자유", "(미정립)"],
                  ].map(([tech, freedom, right], i) => (
                    <tr key={i} style={{ background: i === 5 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                      <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: i === 5 ? C.navy : "#333", lineHeight: 1.45 }}>{tech}</td>
                      <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.45 }}>{freedom}</td>
                      <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", color: i === 5 ? C.red : "#333", fontWeight: i === 5 ? 700 : 500, lineHeight: 1.45 }}>{right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>
            <div>
              <strong style={{ color: C.navy }}>개인의 변화 —</strong> 농업시대의 개인은 가족과 마을 안에서 태어난 대로 살았다. 산업시대의 개인은 기업이라는 분업 기계의 한 조각으로 자신을 규정했고 '회사 사람'이 근대적 인간의 표준형이 되었다. 디지털시대의 개인은 AI와 결합하여 과거 조직 하나가 하던 일을 해내며, 조직 밖에서도 살아갈 이유가 생긴다.
            </div>
            <div>
              <strong style={{ color: C.navy }}>공동체의 변화 —</strong> 농업시대의 마을·영주 중심에서 산업시대의 국민국가·기업으로, 다시 디지털시대의 도시·네트워크로 중심이 이동한다. 위임도 신분에 내재된 지배 → 국민의 계약적 위임 → 목적 달성 시 환수되는 미션 한정 한시 위임으로 바뀐다. 두 변화는 같은 동전의 양면이다.
            </div>
          </div>
        </div>

        {/* 2.2 디지털 시대 개인과 공동체의 모습 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={h3s}>2.2 디지털 시대 개인과 공동체의 모습</div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: "#222", marginBottom: 7 }}>
            그 변화의 동력은 <strong style={{ color: C.navy }}>디지털·AI가 개인의 판단력·실행력·파급력 세 영역을 동시에 강화한다는 것</strong>이다. 이전 기술 혁명은 한두 영역만 강화했지만, 디지털·AI는 3영역을 동시에 끌어올린다는 점에서 결정적으로 다르다.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, flex: 1, alignItems: "stretch" }}>

            {/* 왼쪽: 강화된 개인 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, margin: "3px 0 5px", padding: "3px 0", borderBottom: `1.5px solid ${C.navy}` }}>강화된 개인</div>

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>강화의 세 영역</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 4, marginBottom: 8 }}>
                {[
                  { t: "판단력", d: "AI가 판단·추론·전문성을 이전하고 진입장벽을 해체 — 학위 없이도 전문가 수준 도구에 접근.", ex: "법률·의료·재무 자문, 비전공 개발자, 자기학습 분석가." },
                  { t: "실행력", d: "한 사람이 부서급 산출에 도달하고 다영역을 동시에 운용.", ex: "1인 기업·묶음 직업, 의사+유튜브+창업, 변호사+리걸테크." },
                  { t: "파급력", d: "도달 범위 확장 — 개인이 매스미디어급 영향력으로 공론장의 주체가 된다.", ex: "1인 미디어 수십만 구독, 인플루언서 캠페인." },
                ].map(({ t, d, ex }) => (
                  <div key={t} style={{ padding: "4px 8px", borderLeft: `3px solid ${C.navy}`, background: C.bg, display: "grid", gridTemplateColumns: "52px 1fr", gap: 6, alignItems: "baseline" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{t}</div>
                    <div style={{ fontSize: 11, lineHeight: 1.5, color: "#222" }}>
                      {d} <span style={{ color: C.light, fontStyle: "italic" }}>예: {ex}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>4 계층 재편 — 3영역 강화의 결과로 사회 계층이 재편된다. 프로 축소·아마추어 폭증.</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5 }}>
                {[
                  { t: "리더", s: "2%→5%", d: "AI 설계자. 기준·플랫폼 재정의.", a: "판단력·실행력" },
                  { t: "프로", s: "53%→25%", d: "AI 활용자. 직업 기반 정체성 변화.", a: "실행력" },
                  { t: "아마추어", s: "35%→65%", d: "AI 의존자. 인정 경로 불안정.", a: "파급력" },
                  { t: "소외", s: "10%→5%", d: "AI 접근 불가. 격차 질적 심화.", a: "판단력 결핍" },
                ].map(({ t, s, d, a }) => (
                  <div key={t} style={{ padding: "5px 7px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                    <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, marginBottom: 1 }}>{t}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#555", marginBottom: 1 }}>{s}</div>
                    <div style={{ fontSize: 11, lineHeight: 1.4, color: "#333" }}>{d}</div>
                    <div style={{ fontSize: 9.5, color: C.accent, fontWeight: 700, marginTop: 2 }}>← {a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 재구성되는 공동체 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, margin: "3px 0 5px", padding: "3px 0", borderBottom: `1.5px solid ${C.navy}` }}>재구성되는 공동체</div>

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>공동체 변화의 3축 — 강화된 개인이 한 국가에 묶이지 않으면서, 공동체의 단위·중심·권한이 동시에 이동한다</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5, marginBottom: 8 }}>
                {[
                  { t: "① 도시 중심", d: "데이터·AI·인재·창조 산업이 강소도시에 집적. 실험·정책·삶의 질 경쟁 단위가 국가 → 도시로 이동." },
                  { t: "② 국가의 약화", d: "사이버·플랫폼·암호화폐가 안보·사법·화폐 독점 우회. 빅테크의 조세·규제 우회가 국가 재정 근거를 흔든다." },
                  { t: "③ 권한의 재설계", d: "'임기 내 포괄 위임' → '꼭 필요한 만큼만, 투명하게, 목적 달성 시 자동 환수' 구조로." },
                ].map(({ t, d }) => (
                  <div key={t} style={{ padding: "6px 9px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{t}</div>
                    <div style={{ fontSize: 10.5, lineHeight: 1.5, color: "#333" }}>{d}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.6, color: "#333", marginBottom: 7 }}>
                디지털 전환은 공동체 구조를 세 방향에서 동시에 바꾼다. 데이터·AI·인재 산업이 강소도시에 집적되면서 경쟁 단위가 국가에서 도시로 이동하고, 사이버·플랫폼·암호화폐가 국가의 안보·사법·화폐 독점을 우회한다. 위임의 논리도 '임기 내 포괄 위임'에서 '필요한 만큼만, 투명하게, 목적 달성 시 자동 환수'로 재설계되어야 한다.
              </div>

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>공동체별 재균형 — 가정부터 글로벌까지, 6개 공동체 모두 산업시대 역할에서 디지털시대 역할로 재배치된다</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: C.accent, color: "#fff" }}>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "12%" }}>공동체</th>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "30%" }}>산업시대 역할</th>
                    <th style={{ padding: "4px 7px", textAlign: "left" }}>디지털시대 재균형</th>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "15%" }}>강화 압력</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["가정", "노동력 재생산 · 미성년 보호", "정체성 허브 · 창작·생산 단위", "실행력"],
                    ["이웃", "일상적 신뢰 · 비공식 돌봄", "위기 대응 · 의식적 생활 연결", "파급력·판단력"],
                    ["마을", "복지·교육·생활 인프라", "직접 조정 단위 · 실험의 규모", "판단력"],
                    ["도시", "일자리·집적 경제", "삶의 질·창조 플랫폼 · 데이터 주권", "실행력"],
                    ["국가", "안보·법치·복지 독점", "조건 설계자 · 도시·민간 실행 위임", "판단력·파급력"],
                    ["글로벌", "UN·국제기구 중개", "AI·팬데믹·기후의 미션 한정 거버넌스", "실행력·판단력"],
                  ].map(([c, old, next, area], i) => (
                    <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.4 }}>{c}</td>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", color: "#555", lineHeight: 1.4 }}>{old}</td>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", color: "#222", fontWeight: 600, lineHeight: 1.4 }}>{next}</td>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", color: C.accent, fontWeight: 700, fontSize: 10, lineHeight: 1.4 }}>{area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ padding: "6px 11px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, marginTop: 7 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2 }}>재균형의 원칙</div>
                <div style={{ fontSize: 10.5, lineHeight: 1.6, color: "#222" }}>
                  개인이 혼자 못 하는 일에만 위임 · 위임된 권력은 투명하게 감시 · 목적을 달성하면 자동 환수 · 개인·공동체의 이익이 충돌할 때는 공공선이 기준.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
