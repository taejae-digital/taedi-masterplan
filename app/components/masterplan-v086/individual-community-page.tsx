import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" version={VERSION} />

      <div style={{ padding: "12px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 13, letterSpacing: 4, color: C.accent, fontWeight: 800, marginBottom: 5 }}>분업 시대 → 연결 시대</div>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          분업이 인간을 역할로 쪼갰다면, 디지털은 연결로 개인을 강화한다.
          판단력·실행력·파급력이 네트워크를 통해 집중되고, 강화된 개인은 더 많은 자유를 요구한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* 2.1 개인과 공동체의 변화 */}
        <div>
          <div style={h3s}>2.1 개인과 공동체 변화의 역사적 관찰 — 농업시대 · 산업시대 · 디지털시대</div>
          <div style={{ fontSize: 13, lineHeight: 1.6, color: "#222", marginBottom: 7 }}>
            새 기술이 개인을 강화할 때마다 — 농업의 토지 소유, 인쇄술의 신앙·지식 해석, 산업의 직업 선택, 인터넷의 정보 접근 — 공동체는 그 자유 요구를 새 권리로 제도화하며 응답해 왔다.
            <strong style={{ color: C.navy }}>디지털·AI 시대도 같은 패턴 위에 있다.</strong>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>시대별 개인·공동체의 동시 변화와 자유 요구의 제도화 — 새 기술이 개인을 강화하면 공동체는 새 권리로 응답해 왔다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 7 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "8%" }}>시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "13%" }}>핵심 기술</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "20%" }}>개인</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "20%" }}>공동체</th>
                <th style={{ padding: "5px 8px", textAlign: "left", width: "20%" }}>원하는 자유</th>
                <th style={{ padding: "5px 8px", textAlign: "left" }}>제도화된 권리</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  age: "농업시대",
                  tech: "농업기술 · 인쇄술",
                  personal: ["생산단위: 가족·마을", "정체성: 혈통·신분으로 물려받음"],
                  community: ["중심: 마을·영주", "위임: 신분에 내재된 지배"],
                  freedom: "토지 소유·상속, 신앙·지식 해석",
                  right: "토지 소유권·상속권, 신앙·학문의 자유",
                  highlight: false,
                },
                {
                  age: "산업시대",
                  tech: "산업기계 · 대중미디어",
                  personal: ["생산단위: 기업·조직", "정체성: 직업·직급에 맞춤"],
                  community: ["중심: 국가·기업", "위임: 국민의 계약적 위임"],
                  freedom: "일·정치 참여, 말하고 모일 자유",
                  right: "직업선택권·참정권, 표현·결사·노동권",
                  highlight: false,
                },
                {
                  age: "디지털시대",
                  tech: "인터넷 · AI",
                  personal: ["생산단위: 개인+AI", "정체성: 역량·관심·기여로 실현"],
                  community: ["중심: 도시·네트워크", "위임: 미션 한정 한시 위임"],
                  freedom: "스스로 삶·정체성을 설계할 자유",
                  right: "(미정립)",
                  highlight: true,
                },
              ].map(({ age, tech, personal, community, freedom, right, highlight }, i) => (
                <tr key={i} style={{ background: highlight ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 800, color: highlight ? C.navy : "#333", lineHeight: 1.5, verticalAlign: "top" }}>{age}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#444", lineHeight: 1.5, verticalAlign: "top", fontWeight: 600 }}>{tech}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", lineHeight: 1.5, verticalAlign: "top" }}>
                    {personal.map((line, j) => <div key={j} style={{ fontSize: 13, color: "#333", fontWeight: j === 1 ? 600 : 400 }}>{line}</div>)}
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", lineHeight: 1.5, verticalAlign: "top" }}>
                    {community.map((line, j) => <div key={j} style={{ fontSize: 13, color: "#333", fontWeight: j === 1 ? 600 : 400 }}>{line}</div>)}
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.5, verticalAlign: "top" }}>{freedom}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: highlight ? C.red : "#333", fontWeight: highlight ? 700 : 500, lineHeight: 1.5, verticalAlign: "top" }}>{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, fontSize: 13, lineHeight: 1.6, color: "#333" }}>
            <div>
              <strong style={{ color: C.navy }}>개인의 변화 —</strong> 농업시대의 개인은 혈통·신분으로 정해진 정체성을 물려받아 살았다. 산업시대의 개인은 기업이라는 분업 기계의 한 조각으로 자신을 규정했고 '회사 사람'이 근대적 인간의 표준형이 되었다. 디지털시대의 개인은 AI와 결합하여 과거 조직 하나가 하던 일을 해내며, 조직 밖에서도 살아갈 이유가 생긴다.
            </div>
            <div>
              <strong style={{ color: C.navy }}>공동체의 변화 —</strong> 농업시대의 마을·영주 중심에서 산업시대의 국민국가·기업으로, 다시 디지털시대의 도시·네트워크로 중심이 이동한다. 위임도 신분에 내재된 지배 → 국민의 계약적 위임 → 목적 달성 시 환수되는 미션 한정 한시 위임으로 바뀐다. 두 변화는 같은 동전의 양면이다.
            </div>
          </div>
        </div>

        {/* 디지털 시대 개인·공동체 (2.2 + 2.3 좌우 배치) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, flex: 1, alignItems: "stretch" }}>

            {/* 왼쪽: 강화된 개인 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* h3s 통일 */}
              <div style={h3s}>2.2 디지털 시대 강화된 개인</div>

              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", margin: "0 0 4px", lineHeight: 1.4 }}>강화의 세 영역</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 4, marginBottom: 8 }}>
                {[
                  { t: "판단력", d: "AI가 판단·추론·전문성을 이전하고 진입장벽을 해체 — 학위 없이도 전문가 수준 도구에 접근.", ex: "법률·의료·재무 자문, 비전공 개발자, 자기학습 분석가." },
                  { t: "실행력", d: "한 사람이 부서급 산출에 도달하고 다영역을 동시에 운용.", ex: "1인 기업, 여러 일 병행(의사+유튜브+창업, 변호사+리걸테크)." },
                  { t: "파급력", d: "도달 범위 확장 — 개인이 매스미디어급 영향력으로 공론장의 주체가 된다.", ex: "1인 미디어 수십만 구독, 인플루언서 캠페인." },
                ].map(({ t, d, ex }) => (
                  <div key={t} style={{ padding: "4px 8px", borderLeft: `3px solid ${C.navy}`, background: C.bg, display: "grid", gridTemplateColumns: "92px 1fr", gap: 6, alignItems: "baseline" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>{t}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#222" }}>
                      <div>{d}</div>
                      <div style={{ color: C.light, marginTop: 2 }}>예: {ex}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", margin: "10px 0 4px", lineHeight: 1.4 }}>계층 재편 — 3영역의 강화가 4계층의 비율과 성격을 동시에 바꾼다</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5 }}>
                {[
                  { t: "리더", am: "AI를 지휘", s: "2% → 7%", d: "AI 인프라·기준·플랫폼을 설계. Jevons 효과로 <strong>새 영역·새 카테고리가 폭증</strong>하며 설계자 수요 확대.", prod: "AI 인프라·플랫폼", dist: "플랫폼 지대(rent) 수취" },
                  { t: "프로", am: "AI로 증강", s: "53% → 28%", d: "AI를 도구로 전문성 발휘. <strong>task displacement로 프로 작업이 아마추어 도구로 이전</strong>되며 비중 축소.", prod: "AI 활용 전문 서비스", dist: "임금 + 부분 자본수익 (축소)" },
                  { t: "아마추어", am: "AI에 의존", s: "35% → 60%", d: "AI가 진입장벽을 해체해 학위·자격 없이도 활동 가능. <strong>프로 이탈자 + 신규 진입자 + 새 영역</strong>을 동시에 흡수.", prod: "플랫폼 노동·1인 미디어", dist: "광고·구독 + 배당 의존" },
                  { t: "소외", am: "AI에서 배제", s: "10% → 5%", d: "Jevons로 가격이 떨어져 <strong>AI 도달 범위 확장</strong>으로 일부 흡수. 잔존층은 격차 질적 심화.", prod: "AI 외 전통 노동", dist: "복지·이전소득" },
                ].map(({ t, am, s, d, prod, dist }) => (
                  <div key={t} style={{ padding: "6px 8px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 3 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>{t}</div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#fff", background: C.accent, padding: "1px 4px", borderRadius: 2 }}>{am}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 3 }}>{s}</div>
                    <div style={{ fontSize: 11, lineHeight: 1.45, color: "#222", marginBottom: 1 }}><strong style={{ color: C.navy }}>생산</strong> {prod}</div>
                    <div style={{ fontSize: 11, lineHeight: 1.45, color: "#222", marginBottom: 4 }}><strong style={{ color: C.navy }}>분배</strong> {dist}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.45, color: "#333" }} dangerouslySetInnerHTML={{ __html: d }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 5, fontSize: 10.5, color: "#888", lineHeight: 1.45 }}>
                — 2025→2050 추정. Acemoglu·Restrepo(2022) 자동화-노동분배율, McKinsey(2023) 작업의 50% 자동화 가능, Goldman Sachs(2023) 3억 일자리 노출, Frey·Osborne(2013), Susskind(2020) 전문직 자동화에 기반한 프로젝트 추정치. 정확한 수치보다 방향성(프로 축소·아마추어 폭증)이 핵심.
              </div>
              <div style={{ marginTop: 8, padding: "7px 10px", background: "#f6f5ef", borderLeft: `3px solid ${C.accent}`, borderRadius: 2 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>이론적 토대 — 세 경제학 원리가 4계층 변화론을 뒷받침한다</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#222" }}>
                  <strong>노동 총량의 오류 (Lump of labour fallacy)</strong> — &quot;일자리는 고정된 파이&quot;라는 가정은 100년 이상 반증되어 온 경제학 오류다. AI가 일자리를 빼앗는다는 단순 비관론의 전제 자체가 틀렸으며, 우리 모델은 총량의 증감이 아니라 <strong>계층 간 이동의 방향성</strong>을 본다. → 총량 유지·증가.<br/>
                  <strong>Jevons Paradox (1865)</strong> — 효율이 오르면 가격이 떨어지고 수요가 폭증해 총소비가 오히려 늘어난다. LLM 가격 2년 1/100 하락은 AI 사용량을 폭증시키며 새 영역·새 카테고리를 만든다. → <strong>리더층 확대·아마추어 진입 가속</strong>. 동시에 AI 인프라의 전력·용수 소비도 함께 폭증해 위협 ⑥ 지속불가능성의 동학을 만든다.<br/>
                  <strong>자동화의 task displacement (Acemoglu·Restrepo 2018, 2022)</strong> — AI는 일자리가 아니라 작업 단위(task)를 자동화·이전한다. 프로가 하던 작업이 아마추어 도구로 분산되며 일자리 총량은 유지되지만 카테고리는 이동한다. → <strong>프로 축소·아마추어 흡수</strong>.
                </div>
              </div>
            </div>

            {/* 오른쪽: 재구성되는 공동체 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* h3s 통일 */}
              <div style={h3s}>2.3 디지털 시대 재구성되는 공동체</div>

              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", margin: "0 0 6px", lineHeight: 1.4 }}>공동체 변화의 3축 — 강화된 개인이 한 국가에 묶이지 않으면서, 공동체의 단위·중심·권한이 동시에 이동한다</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 5, marginBottom: 14 }}>
                {[
                  { t: "도시 중심", d: "데이터·AI·인재·창조 산업이 강소도시에 집적. 실험·정책·삶의 질 경쟁 단위가 국가 → 도시로 이동." },
                  { t: "국가의 약화", d: "사이버·플랫폼·암호화폐가 안보·사법·화폐 독점 우회. 빅테크의 조세·규제 우회가 국가 재정 근거를 흔든다." },
                  { t: "권한의 재설계", d: "'임기 내 포괄 위임' → '꼭 필요한 만큼만, 투명하게, 목적 달성 시 자동 환수' 구조로." },
                ].map(({ t, d }) => (
                  <div key={t} style={{ padding: "4px 8px", borderLeft: `3px solid ${C.navy}`, background: C.bg, display: "grid", gridTemplateColumns: "92px 1fr", gap: 6, alignItems: "baseline" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>{t}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, color: "#222" }}>{d}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", margin: "0 0 6px", lineHeight: 1.4 }}>공동체별 재균형 — 가정부터 글로벌까지, 6개 공동체 모두 산업시대 역할에서 디지털시대 역할로 재배치된다</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: C.accent, color: "#fff" }}>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "14%" }}>공동체</th>
                    <th style={{ padding: "4px 7px", textAlign: "left", width: "36%" }}>산업시대 역할</th>
                    <th style={{ padding: "4px 7px", textAlign: "left" }}>디지털시대 재균형</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["가정", "노동력 재생산", "정체성 허브 · 창작·생산 단위"],
                    ["이웃", "일상적 신뢰 · 비공식 돌봄", "위기 대응 · 의식적 생활 연결"],
                    ["마을", "복지·교육·생활 인프라", "직접 조정 단위 · 실험의 규모"],
                    ["도시", "일자리·집적 경제", "삶의 질·창조 플랫폼 · 데이터 주권"],
                    ["국가", "안보·법치·복지 독점", "조건 설계자 · 도시·민간 실행 위임"],
                    ["글로벌", "UN·국제기구 중개", "AI·팬데믹·기후의 미션 한정 거버넌스"],
                  ].map(([c, old, next], i) => (
                    <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.4 }}>{c}</td>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", color: "#555", lineHeight: 1.4 }}>{old}</td>
                      <td style={{ padding: "3px 7px", borderBottom: "1px solid #eee", color: "#222", fontWeight: 600, lineHeight: 1.4 }}>{next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ padding: "8px 11px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, marginTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 2 }}>재균형의 원칙</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: "#222" }}>
                  개인이 혼자 못 하는 일에만 위임 · 위임된 권력은 투명하게 감시 · 목적을 달성하면 자동 환수 · 개인·공동체의 이익이 충돌할 때는 공공선이 기준.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
