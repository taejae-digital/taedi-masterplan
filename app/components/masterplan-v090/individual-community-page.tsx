import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
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

      <div style={{ padding: "0 32px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>

        {/* 2.1 시대별 인류의 문제·직업·자유의 역사 */}
        <div>
          <div style={h3s}>2.1 시대별 인류의 문제·직업·자유의 역사적 관찰</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#222", marginBottom: 5 }}>
            새 기술이 개인을 강화할 때마다 인류가 풀어야 할 새 문제가 등장했고, 그 문제를 푸는 새 직업군이 형성되었으며, 강화된 개인은 새 자유를 요구해 공동체는 새 권리로 응답해 왔다.
            <strong style={{ color: C.navy }}> 디지털 시대도 같은 패턴 — 단, 직업 변화의 폭은 역사상 가장 크다.</strong>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 6 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "7%" }}>시대</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "11%" }}>핵심 기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "7%" }}>핵심 원리</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "13%" }}>인류가 풀어야 했던 문제</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "19%" }}>문제 해결에 필요한 전문성</th>
                <th style={{ padding: "4px 6px", textAlign: "left", width: "17%" }}>주요 직업</th>
                <th style={{ padding: "4px 6px", textAlign: "left" }}>원하는 자유 → 제도화된 권리</th>
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
                  fr: "토지·신앙·지식 해석 → 토지소유권·상속권·신앙·학문의 자유",
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
                  fr: "일·정치 참여, 표현·결사 → 직업선택권·참정권·표현·결사·노동권",
                  highlight: false,
                },
                {
                  age: "디지털",
                  tech: "인터넷 · AI · 휴머노이드",
                  principle: "연결",
                  problem: "정체성 매칭·인간-AI 경계·새 질서·돌봄·진실성",
                  jobs: [
                    ["비정형 인지 (non-routine cognitive · Autor)", "AI 활용 전문가·연구자"],
                    ["정동·관계 노동 (affective·relational · Hardt-Negri)", "코치·상담사·커뮤니티 운영자"],
                    ["돌봄 노동 (care work · Folbre)", "통합 돌봄가·간호사·요양가"],
                    ["암묵지·맥락 판단 (tacit knowledge · Polanyi)", "질서 설계자·정책 기획가"],
                    ["의미 생성 (meaning-making)", "세계관 창작자·진실성 검증자"],
                  ],
                  fr: "정체성 실현 → 정체성 실현권 · AI 인프라 평등 접근권 · AI 개인화권",
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

        {/* 2.2 강화된 개인 / 2.3 5대 문제 / 2.4 공동체 (3단) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, flex: 1, alignItems: "stretch" }}>

            {/* 왼쪽: 2.2 강화된 개인 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={h3s}>2.2 디지털 시대 강화된 개인</div>

              <div style={{ fontSize: 12, fontWeight: 700, color: "#666", margin: "0 0 3px", lineHeight: 1.4 }}>강화의 세 영역</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 3, marginBottom: 6 }}>
                {[
                  { t: "판단력", d: "AI가 전문성 이전. 학위 없이 전문가 도구 접근." },
                  { t: "실행력", d: "한 사람이 부서급 산출. 의사+유튜브+창업 동시." },
                  { t: "파급력", d: "매스미디어급 영향력으로 공론장 주체." },
                ].map(({ t, d }) => (
                  <div key={t} style={{ padding: "3px 7px", borderLeft: `3px solid ${C.navy}`, background: C.bg, display: "grid", gridTemplateColumns: "62px 1fr", gap: 4, alignItems: "baseline" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{t}</div>
                    <div style={{ fontSize: 11.5, lineHeight: 1.4, color: "#222" }}>{d}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 700, color: "#666", margin: "6px 0 3px", lineHeight: 1.4 }}>계층 재편 (2025→2050) — 판단력·실행력·파급력 중 무엇을 가졌느냐</div>
              <div style={{ fontSize: 10.8, lineHeight: 1.45, color: "#222", marginBottom: 4 }}>
                프로 53→28% 축소는 <strong>강화가 너무 광범위해 독점 지위가 해체</strong>되기 때문. Jevons 효과로 새 카테고리 폭증.
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {[
                  { t: "리더", am: "AI를 지휘", s: "2 → 7%", own: "판단·실행·파급", d: "AI 인프라·플랫폼 설계. 강화의 최대 수혜자." },
                  { t: "프로", am: "AI로 증강", s: "53 → 28%", own: "판단·실행", d: "독점 지위 해체. 강화가 곧 위협." },
                  { t: "아마추어", am: "AI에 의존", s: "35 → 60%", own: "파급", d: "매스미디어급 도달, 그러나 수익화는 상위 1%." },
                  { t: "소외", am: "AI에서 배제", s: "10 → 5%", own: "—", d: "3영역 모두 배제. 역량 격차 절대화." },
                ].map(({ t, am, s, own, d }) => (
                  <div key={t} style={{ padding: "4px 6px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 2 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{t}</div>
                      <div style={{ fontSize: 9.5, fontWeight: 700, color: "#fff", background: C.accent, padding: "0 3px", borderRadius: 2 }}>{am}</div>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.navy }}>{s}</div>
                    <div style={{ fontSize: 9.8, fontWeight: 700, color: C.accent, marginBottom: 2 }}>강화 {own}</div>
                    <div style={{ fontSize: 10.5, lineHeight: 1.4, color: "#333" }}>{d}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 4, fontSize: 9.5, color: "#888", lineHeight: 1.4 }}>
                — Acemoglu·Restrepo(2022), McKinsey(2023), Goldman Sachs(2023), Frey·Osborne(2013), Susskind(2020). 방향성이 핵심.
              </div>
            </div>

            {/* 가운데: 2.3 휴머노이드 시대 인류가 풀어야 할 5대 문제 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={h3s}>2.3 디지털 시대 인류가 풀어야 할 5대 문제</div>

              <div style={{ fontSize: 12, lineHeight: 1.5, color: "#222", marginBottom: 6 }}>
                AI와 휴머노이드가 표준 인지·신체 노동을 흡수하면, 인류에게 남는 일은 <strong style={{ color: C.navy }}>기계가 풀 수 없는 문제</strong>다. 새 직업은 이 다섯 문제를 푸는 자리에서 만들어진다.
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 4 }}>
                {[
                  {
                    n: "①",
                    title: "정체성의 발견과 매칭",
                    why: "한 인간이 누구이고 무엇을 할지는 기계가 정해줄 수 없다. AI가 표준 노동을 대체할수록 이 질문이 모든 사람에게 닥친다.",
                    who: "사람을 평생 따라가며 정체성을 읽고 미래의 자리에 연결하는 자 — 교사·상담사·코치·심리학자가 묶이는 자리.",
                  },
                  {
                    n: "②",
                    title: "인간-AI 경계의 조율",
                    why: "AI가 어디까지 들어오고 어디서 멈출지는 가치 판단의 문제. 기계는 자기 한계를 스스로 정할 수 없다.",
                    who: "AI와 인간 사이의 권한·책임을 설계하고 위기 때 결정을 내리는 자 — 엔지니어·법률가·윤리학자·정책가의 묶음.",
                  },
                  {
                    n: "③",
                    title: "새 질서의 설계와 작동",
                    why: "산업사회의 직업·법·시장이 무너진 자리에 무엇을 둘 것인가. 기계는 정당성을 만들 수 없다.",
                    who: "경제·정치·법·기술을 가로질러 새 사회계약을 짜고 도시·국가 단위에서 실행시키는 자.",
                  },
                  {
                    n: "④",
                    title: "돌봄과 관계의 통합",
                    why: "고령화·핵가족 해체·디지털 고립 속에서 사람을 사람 사이로 묶는 일. 기계가 흉내 낼수록 진짜 인간 연결의 값은 올라간다.",
                    who: "한 가족·한 동네 전체의 신체·정신·생활·관계를 통합해 살피는 자 — 의사·간호사·복지사·코치의 묶음.",
                  },
                  {
                    n: "⑤",
                    title: "진실성과 의미의 보존",
                    why: "AI가 무한히 콘텐츠를 만들 때, 사실·맥락·의미를 가려내고 사람을 모으는 이야기를 짓는 일은 인간에게 남는다.",
                    who: "정보의 출처·진위·맥락을 검증하고 세계관을 직조하는 자 — 저널리스트·연구자·작가·창작자의 묶음.",
                  },
                ].map(({ n, title, why, who }) => (
                  <div key={n} style={{ padding: "5px 8px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 2 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.accent }}>{n}</div>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy }}>{title}</div>
                    </div>
                    <div style={{ fontSize: 11, lineHeight: 1.5, color: "#222", marginBottom: 2 }}>{why}</div>
                    <div style={{ fontSize: 11, lineHeight: 1.5, color: "#222" }}>{who}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "5px 9px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginTop: 2 }}>
                <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#222" }}>
                  <strong style={{ color: C.navy }}>직업의 이름은 문제 다음에 온다.</strong> 100년 전 사람이 "디자이너"라는 이름을 몰랐어도 "대량생산을 사람들이 욕망하게 만들 자"라는 문제는 보았듯이.
                </div>
              </div>
            </div>

            {/* 오른쪽: 2.4 공동체 — 인과 사슬 */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={h3s}>2.4 강화된 개인이 만드는 공동체의 인과 사슬</div>

              <div style={{ fontSize: 12, lineHeight: 1.5, color: "#222", marginBottom: 6 }}>
                공동체는 따로 변하지 않는다. <strong style={{ color: C.navy }}>변화한 개인이 원하는 공동체</strong>가 다음 단계의 공동체다. 한 단계가 다음 단계의 논리적 귀결로 이어진다.
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[
                  {
                    from: "강화된 개인",
                    to: "정체성을 발견·매칭하는 가정",
                    why: "강화된 개인은 직업에 자신을 맞추지 않고, 자신의 정체성에 직업을 맞추려 한다. 정체성은 어려서부터 발견되어야 하므로,",
                    def: <>가정의 새 역할은 아이를 시장이 정한 직업에 끼워 맞추는 게 아니라, <strong style={{ color: C.navy }}>누구인지 발견하고 미래의 자리에 연결해주는 일</strong>이 된다.</>,
                  },
                  {
                    to: "다양성이 일상에 있는 이웃",
                    why: "정체성은 자기 가족과 다른 삶을 보고 부딪혀야 드러난다. 같은 스펙의 가정끼리만 모이면 비교의 거울이 사라지므로,",
                    def: <>이웃은 다양한 직업·세대·배경이 일상 안에 섞여 <strong style={{ color: C.navy }}>자신과 다른 자기를 마주칠 수 있는 공간</strong>이 되어야 한다.</>,
                  },
                  {
                    to: "정체성별 훈련이 가능한 마을",
                    why: "발견된 정체성마다 필요한 훈련이 다르다. 한 학원가가 모두를 같은 방향으로 밀면 정체성 매칭의 다음 단계가 끊기므로,",
                    def: <>마을은 예술·연구·돌봄·창업 등 <strong style={{ color: C.navy }}>정체성별로 다른 훈련 경로가 같은 생활권 안에 공존</strong>하는 규모여야 한다.</>,
                  },
                  {
                    to: "시산학 매칭 생태계의 강소도시",
                    why: "훈련된 정체성이 실제 미래의 일과 만나려면 마을이 산업·연구·교육과 한 권역에 묶여야 한다. 일자리가 멀리 떨어진 도시에 있으면 정체성과 직업의 사슬이 끊기므로,",
                    def: <>도시는 <strong style={{ color: C.navy }}>시산학으로 엮여 정체성과 직업을 직접 잇는 강소도시</strong>가 되어야 한다.</>,
                  },
                  {
                    to: "다양성·안전망 큰 틀의 국가",
                    why: "다양한 정체성을 살리려면 국가가 표준화로 누르지 말아야 한다. 그러나 도시 간 격차로 어떤 정체성이 배제되는 것도 막아야 하므로,",
                    def: <>국가의 새 역할은 표준 교육·취업 경로 설계가 아니라, <strong style={{ color: C.navy }}>다양성과 안전망의 큰 틀만 짜고 실행은 도시로 위임</strong>하는 일이 된다.</>,
                  },
                  {
                    to: "미션 한정·자동 환수의 세계 거버넌스",
                    why: "강소도시·정체성 모델이 작동하려면 기후·AI·팬데믹 같은 글로벌 위협이 통제되어야 한다. 그러나 영구적 세계 권력은 정체성과 자율을 다시 위협하므로,",
                    def: <>세계 거버넌스는 <strong style={{ color: C.navy }}>위협이 닥칠 때만 권한을 받고 해소되면 자동으로 해체되는 미션 한정 구조</strong>여야 한다.</>,
                  },
                ].map(({ from, to, why, def }, i) => (
                  <div key={i} style={{ padding: "5px 8px", borderLeft: `3px solid ${C.accent}`, background: i % 2 ? C.bg : "#fff" }}>
                    <div style={{ fontSize: 11.5, color: C.navy, marginBottom: 3 }}>
                      {from && <><span style={{ color: "#888", fontWeight: 600 }}>{from}</span> </>}
                      <span style={{ color: C.accent, fontWeight: 800, margin: "0 3px" }}>→</span>
                      <strong style={{ fontWeight: 800 }}>{to}</strong>
                    </div>
                    <div style={{ fontSize: 11, lineHeight: 1.5, color: "#222" }}>
                      <span style={{ color: "#555" }}>{why}</span> {def}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "5px 9px", background: "#f0f4ff", borderLeft: `3px solid ${C.navy}`, marginTop: 6 }}>
                <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#222" }}>
                  <strong style={{ color: C.red }}>시장이 만들지 못하는 일자리</strong>(돌봄·정체성 발견·공동체 의례)를 도시가 보장해야 사회가 유지된다. 사업이 일자리를 만들던 시대가 끝나고, 공동체가 일자리를 만드는 시대가 시작된다.
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
