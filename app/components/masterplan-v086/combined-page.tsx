import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const urgColor = (u: string) =>
  u === "진행 중" ? "#991b1b" : u === "임박" ? "#b91c1c" : C.red;

const threatMeta: Record<string, { label: string; bg: string }> = {
  "①": { label: "①사회통제력", bg: "#6d28d9" },
  "②": { label: "②권력집중", bg: "#1d4ed8" },
  "③": { label: "③공론장",   bg: "#b45309" },
  "④": { label: "④인간존엄", bg: "#b91c1c" },
  "⑤": { label: "⑤글로벌",  bg: "#0f766e" },
  "⑥": { label: "⑥지속성",  bg: "#15803d" },
};

function TBadge({ code }: { code: string }) {
  const m = threatMeta[code];
  if (!m) return null;
  return (
    <span style={{
      display: "inline-block", fontSize: 9, fontWeight: 800, color: "#fff",
      background: m.bg, borderRadius: 2, padding: "1px 4px",
      lineHeight: 1.4, marginRight: 3, flexShrink: 0, whiteSpace: "nowrap",
    }}>{m.label}</span>
  );
}

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version={VERSION} />

      <div style={{ padding: "4px 32px 0", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 3.1 + 3.2 좌우 2컬럼 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 8 }}>

          {/* 3.1 디지털 시대 정치질서 */}
          <div>
            <div style={h3s}>3.1 디지털 시대 정치질서</div>
            <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.5, padding: "4px 8px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, marginBottom: 5 }}>
              국가가 독점하던 의사결정·집행·대표성이 강화된 개인·도시·빅테크·플랫폼으로 분산된다.
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "40%" }} />
                <col style={{ width: "40%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>산업화 시대의 질서</th>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>변화의 원리</th>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prev: "국가의 사회 통제력",
                    impact: "무기 설계·해킹·자율 시스템 능력이 개인에게 이전된다. 국가가 유지해 온 사회 통제력이 약화된다.",
                    threats: [
                      { urg: "임박",   text: "AI 무기 개인화·국가 통제 우회", codes: ["①"] },
                      { urg: "진행 중", text: "AI 사이버 공격 능력 보편화",   codes: ["①"] },
                    ],
                  },
                  {
                    prev: "전문가·관료 위임제",
                    impact: "엘리트에 의한 정치 와해. 전문가 권위 붕괴, 위임 정당성 약화.",
                    threats: [
                      { urg: "진행 중", text: "AI 허위정보로 전문가 신뢰 붕괴", codes: ["③"] },
                      { urg: "진행 중", text: "포퓰리즘·반엘리트 정서 심화",   codes: ["③"] },
                    ],
                  },
                  {
                    prev: "공론장과 여론 형성",
                    impact: "가짜뉴스·알고리즘에 의한 공론장 왜곡. 선동과 포퓰리즘 가속.",
                    threats: [
                      { urg: "진행 중", text: "AI 딥페이크·선거 개입",        codes: ["③"] },
                      { urg: "진행 중", text: "에코챔버 심화·공론장 분열",     codes: ["③"] },
                    ],
                  },
                  {
                    prev: "선출된 대표제",
                    impact: "빅테크 등 선출되지 않은 권력의 대표성 문제. 시민 위임 없이 사회적 결정을 좌우.",
                    threats: [
                      { urg: "진행 중", text: "빅테크 정책 독점·사실상 입법",  codes: ["②"] },
                      { urg: "임박",    text: "민주적 통제 밖 AI 거버넌스",    codes: ["②"] },
                    ],
                  },
                  {
                    prev: "법인격 체계의 한계",
                    impact: "자연인·법인 외에 AI 에이전트·자율 시스템을 담을 새 법적 주체(전자인) 부재. 책임 귀속 공백 발생.",
                    threats: [
                      { urg: "임박",    text: "AI 에이전트 행위의 법적 책임 귀속 불가", codes: ["②", "⑤"] },
                      { urg: "진행 중", text: "자율 시스템 피해에 대한 사법 공백",       codes: ["⑤"] },
                    ],
                  },
                ].map(({ prev, impact, threats }, i) => (
                  <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                      {threats.map((t, j) => (
                        <div key={j} style={{ marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                          <span style={{ fontSize: 12, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 3, fontSize: 10, color: "#888" }}>
              — 루소, 『사회계약론』(1762) · 롤스, 『정의론』(1971) · 하버마스, 『공론장의 구조변동』(1962)
            </div>
          </div>

          {/* 3.2 디지털 시대 경제질서 */}
          <div>
            <div style={h3s}>3.2 디지털 시대 경제질서</div>
            <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.5, padding: "4px 8px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, marginBottom: 5 }}>
              임금노동이 만들던 소득·조세·복지·시장 체계가 자동화·데이터·플랫폼 독점으로 무력화된다.
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "40%" }} />
                <col style={{ width: "40%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>산업화 시대의 질서</th>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>변화의 원리</th>
                  <th style={{ padding: "4px 7px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prev: "노동=소득 원리",
                    impact: "노동의 희소가치 감소. 자동화 이익이 데이터 독점자에 집중.",
                    threats: [
                      { urg: "임박",    text: "대규모 직업 재편·실업 충격",          codes: ["④"] },
                      { urg: "진행 중", text: "플랫폼 노동·1인 다직업 병행 확산",        codes: ["④"] },
                    ],
                  },
                  {
                    prev: "소득 기반 조세 구조",
                    impact: "노동소득 축소로 소득세·사회보험 기반 와해. 자동화 자본이 조세 망 밖에 위치.",
                    threats: [
                      { urg: "임박",    text: "조세 징수 어려움·재정 기반 약화",      codes: ["②"] },
                      { urg: "진행 중", text: "빅테크의 조세 우회·역외 이전",          codes: ["②"] },
                    ],
                  },
                  {
                    prev: "중간계층 임금 구조",
                    impact: "AI 인프라 보유자와 노동자 간 극단적 양극화 가속.",
                    threats: [
                      { urg: "진행 중", text: "AI 플랫폼 독점 → 새 디지털 봉건제",   codes: ["②"] },
                      { urg: "진행 중", text: "전문직 소득 감소·중간계층 축소",        codes: ["④"] },
                    ],
                  },
                  {
                    prev: "복지국가 모델",
                    impact: "임금노동 전제 복지 체계의 한계. 복지 재편 필요.",
                    threats: [
                      { urg: "임박",    text: "노동법·복지가 플랫폼·긱 노동에 뒤처짐", codes: ["④"] },
                      { urg: "진행 중", text: "직업 소멸 속도가 재훈련 속도를 초과",   codes: ["④"] },
                    ],
                  },
                  {
                    prev: "소유권·시장 원리",
                    impact: "데이터·알고리즘·AI 모델의 소유권 모호성. 네트워크 효과·데이터 독점으로 시장 경쟁 자체가 작동 불가.",
                    threats: [
                      { urg: "진행 중", text: "AI 모델 학습 데이터 소유권 분쟁",      codes: ["②"] },
                      { urg: "임박",    text: "데이터센터 독점·에너지 외부효과 무규제", codes: ["②", "⑥"] },
                    ],
                  },
                ].map(({ prev, impact, threats }, i) => (
                  <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                    <td style={{ padding: "4px 7px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                      {threats.map((t, j) => (
                        <div key={j} style={{ marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                          <span style={{ fontSize: 12, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 3, fontSize: 10, color: "#888" }}>
              — 아담 스미스, 『국부론』(1776) · 카를 마르크스, 『자본론』(1867)
            </div>
          </div>
        </div>{/* end 3.1/3.2 grid */}

        {/* 3.3 새로운 사회계약 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약</div>

          {/* 1) 새로운 권리의 정립 — 3카드 (1×3) */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>새로운 권리의 정립</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>정체성 실현권</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                직업·소속에 묶이지 않을 권리. 농업시대 토지 소유권, 산업시대 직업선택권에 이어 디지털시대는 정체성을 스스로 설계할 권리를 요구한다. 돌봄·창작·학습 기여를 소득·사회보험과 연결하는 인정 구조로, 한 직장의 틀에 매이지 않더라도 삶을 지속할 물적 토대를 설계한다.
              </div>
              <div style={{ fontSize: 12, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 도시·협동조합·디지털 공동체</div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>AI 인프라 평등 접근권</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                AI·연산·데이터의 공공재화. 데이터 주권·이동권. 플랫폼 독점의 구조적 해체. AI 인프라가 빅테크에 독점되면 접근 격차가 곧 역량 격차, 곧 계층 격차가 된다. 전기·통신망이 공공재가 되었듯 AI 연산 자원·데이터도 공공재로 다뤄야 한다.
              </div>
              <div style={{ fontSize: 12, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 국가·공공 AI 인프라·국제 표준</div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>알고리즘 자기결정권</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                알고리즘 결정에 대한 설명 요구권·거부권. 자동 판단 결과에 대한 인간 검토 보장. AI가 채용·대출·보험·형사 처벌을 결정하는 시대에, 근거를 알 수 없으면 이의 제기조차 불가능하다. 이 권리 없이는 강화된 개인의 자유가 알고리즘에 의해 무력화된다.
              </div>
              <div style={{ fontSize: 12, color: "#111", fontWeight: 600, marginTop: 4 }}>거버넌스 단위: 민주국가 연합·세계시민 거버넌스</div>
            </div>

          </div>

          {/* 2) 새 거버넌스 (권리의 작동) — 3카드 (1×3) */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 13.5, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>새 거버넌스 (권리의 작동)</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>사전승인 거버넌스</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                의약품처럼 AI도 개발자가 안정성을 입증한 후 출시. 플랫폼 공공성을 보장하고, 위기 대응 권한은 한시적이며 해소 시 자동 소멸.
              </div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>재정 거버넌스</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                전환 인프라로 재편기 소외 계층을 지원하고, AI 이익을 환수해 디지털 배당, 공공인프라로 환류. 가정/도시/국가/글로벌이 한시적으로 분담하는 다층 구조.
              </div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>공론장 보호 거버넌스</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                AI 콘텐츠 출처 표시, 마이크로 타게팅 규제로 공론장의 중립성을 보호. 국경을 넘는 패권 경쟁은 한시적 협력으로 대응.
              </div>
            </div>

          </div>

          {/* 3) 국제 규율의 필요와 진행 중인 노력 — 3카드 (1×3) */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ fontSize: 13.5, fontWeight: 800, color: "#111", letterSpacing: 1, marginBottom: 5, borderBottom: "1px solid #111", paddingBottom: 2, display: "inline-block" }}>국제 규율의 필요와 진행 중인 노력</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>세계정부 수준의 규율</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                빅테크가 규제 대상 국가보다 강해진 현실에서 단일 국가의 규제는 플랫폼 이전 한 번에 무력화된다. 17세기 동인도회사형 제국이 빅테크의 궤도다. 핵·생화학무기 통제가 국제 조약으로만 가능했듯, AI 거버넌스도 <strong>민주국가 연합의 집단 행동</strong> 없이는 작동하지 않는다.
              </div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fafafa", borderLeft: "3px solid #ccc", borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#111", marginBottom: 3 }}>진행 중인 노력의 사례</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                <strong>Law Zero</strong>(Bengio) — AI 안전 국제 규범을 법적 구속력 있는 조약으로. <strong>ARIA</strong>(영국) — 정부가 선제적으로 AI 위험 연구를 주도. <strong>EU AI Act</strong> — 고위험 AI 사전 등록·감사 의무. 공통 교훈은 하나 — 기술이 배치된 뒤 규제하는 것은 너무 늦다.
              </div>
            </div>

            <div style={{ padding: "5px 10px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>태재의 역할과 공조</div>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                <strong>이론 토대</strong> — 단행본 『디지털 위협 통제』(Q4 2026)로 Law Zero·ARIA·EU AI Act 논의에 한국발 이론을 더한다. <strong>국제 학자 네트워크</strong> — Bengio·Hinton·Acemoglu 등과 자문·공동 연구로 규범 설계 참여자로 자리매김. <strong>중견국 가교</strong> — 미·중 양극화 속 협력적 거버넌스 의제 설정자. 핵 레짐의 비핵 중견국처럼 균형추 역할.
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
