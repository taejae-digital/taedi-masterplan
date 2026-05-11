import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 연구 계획" version={VERSION} />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          사후 교정이 불가능한 AI 시대, 태재는 이론·공론·솔루션의 세 축을 동시에 끌어올려 실행 가능한 모델로 제시한다.
        </div>
      </div>

      {/* AI 시대의 연구 방법론 — 전체 너비 다이어그램 */}
      <div style={{ padding: "0 32px 10px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 2 }}>AI 시대의 연구 방법론</div>
          <div style={{ fontSize: 12, color: "#666" }}>정보→지식 변환은 AI에 위임하고, 지식→지혜(방향 판단)에 인간 역량을 집중한다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {[
            { num: "①", t: "문제 정식화", who: "팀원들", color: C.navy, bg: "#f0f4ff", d: "질문을 정확히 끊어내고 가설·가치 기준을 명시" },
            { num: "②", t: "다중 가안 생성", who: "AI", color: "#3b82f6", bg: "#eff6ff", d: "1안·2안·3안을 병렬로 빠르게 작성" },
            { num: "③", t: "비교·방향 판단", who: "팀원들", color: C.navy, bg: "#f0f4ff", d: "기준에 비추어 안을 평가·선택·통합" },
            { num: "④", t: "외부 검증", who: "자문단·공론장", color: "#16a34a", bg: "#f0fdf4", d: "전문가 피드백, 시민 토론으로 검증" },
            { num: "⑤", t: "통합·산출", who: "팀원들", color: C.accent, bg: "#fff7ed", d: "검증을 거친 안을 종합·정교화해 보고서·솔루션 도출" },
          ].map(({ num, t, who, d }, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
              <div style={{ flex: 1, padding: "8px 10px", border: "1px solid #222", borderRadius: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#111" }}>{num}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#111" }}>{t}</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#666", marginBottom: 3, letterSpacing: 0.3 }}>{who}</div>
                <div style={{ fontSize: 12, color: "#444", lineHeight: 1.4 }}>{d}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: C.navy, fontSize: 16, fontWeight: 300 }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ position: "relative", marginTop: 2 }}>
          <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M 500 0 L 500 18 L 304 18 L 304 4" stroke={C.accent} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <path d="M 700 0 L 700 30 L 304 30 L 304 4" stroke={C.accent} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <polygon points="300,8 304,2 308,8" fill={C.accent} />
          </svg>
          <div style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", fontSize: 9.5, color: C.accent, background: "#fff", padding: "0 8px", fontWeight: 600, letterSpacing: 0.2 }}>
            피드백 반영
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px", flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* 왼쪽 열: 4.1 → 4.2 → 4.3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.1 연구 목표</div>
            <div style={{ padding: "8px 10px", background: C.bg }}>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>
                디지털 기술이 가져오는 사회적 충격에 대응하는 구체적 해결책을 제시하고 실행 가능한 모델로 고도화한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>4.2 연구 전략 — 우리의 이야기를 세계가 함께 하게 하도록</div>
            <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.5, padding: "4px 8px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, marginBottom: 6 }}>
              Bengio·Acemoglu·Mazzucato 급 동시대 학자가 공동 작업의 상대로 우리를 인정하려면, 그들이 읽을 수 있는 영문 IP·그들 이론의 실증 사례·거절하기 어려운 자리, 세 가지가 동시에 갖춰져야 한다.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }}>
              {[
                { t: "이론 정립 + 영문 IP", d: "단행본(국문, Q4 2026) 전에 영문 working paper 2편을 SSRN/arXiv에 선행 발표. 동시대 학자가 검색·인용 가능한 진입 티켓." },
                { t: "국제 협업 인프라", d: "동시대 학자(Bengio·Acemoglu·Mazzucato 등) 자문·공동 연구. KAIST·SNU + 연례 서울 심포지엄(Q1 2027~) + UK AISI·GovAI·Stanford HAI 협력." },
                { t: "한국=실증 사례", d: "세계 학자가 한국에 오는 이유는 자기 이론의 시험장이기 때문. 공공 AI 인프라·중견국 거버넌스·민주적 재방향화의 실증 케이스를 한국 정책으로 설계." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "8px 10px", background: C.bg }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.3 연구 분야</div>
            {[
              { letter: "A", t: "이론적 토대 — 왜 새 사회계약인가", d: "민주주의·자본주의가 '직업=정체성인 인간'을 전제로 한 한계를 진단. 산업화 시대 사상가들의 이론 틀이 답을 주지 못하는 지점을 식별하고, AI 시대를 새 틀에서 사유하는 동시대 학자(Acemoglu·Mazzucato·Bengio·Zuboff·Perez·Abiri 등)와의 공동 작업으로 '정체성을 실현하는 강화된 개인의 연결'이라는 새 인간상의 정당성을 확립한다." },
              { letter: "B", t: "새 권리 — 무엇을 보장하나", d: "강화된 개인이 요구하는 세 권리의 법적·제도적 정립. ① 정체성 실현권 (직업·소속에 묶이지 않을 권리, 돌봄·창작·학습 기여의 인정), ② AI 인프라 평등 접근권 (AI·연산·데이터의 공공재화, 데이터 주권·이동권), ③ AI 개인화권 (AI를 자기 정체성 실현의 도구로 설계할 권리, 설명 요구권·자동 판단 거부권 포함)." },
              { letter: "C", t: "새 질서 — 어떻게 작동시키나", d: "권리를 실효화하는 작동 메커니즘. ① 다층 거버넌스 (가정·이웃·도시·국가·세계의 역할 분담), ② 공공 AI 인프라 + 디지털 배당 + 인간 존엄·공동체 재설계, ③ FDA 모델 + 한시 권력 + 글로벌 한시 협력 (LAWS·정렬 문제·미중 대타협)." },
              { letter: "D", t: "AI 안전 평가 프레임워크 — 어떻게 측정하나", d: "새 사회계약의 측정 도구. 6위협 × 판단력·실행력·파급력 매트릭스로 FDA식 사전 승인 평가 기준 정식화. 기존 벤치마크(HELM·AILuminate·UK AISI)가 비워둔 권력 집중·인간 존엄·글로벌 질서 영역을 채운다. UK AISI·MLCommons·GovAI·Stanford HAI 협력." },
            ].map(({ letter, t, d }) => (
              <div key={letter} style={{ display: "flex", gap: 10, marginBottom: 7, padding: "7px 9px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                <div style={{ fontSize: 15, fontWeight: 900, color: C.navy, minWidth: 18 }}>{letter}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 열: 4.4 → 4.5 → 4.6 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.4 업무 분장</div>
            <div style={{ padding: "7px 10px", marginBottom: 7, background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 2 }}>유호현 (팀장)</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#444", marginBottom: 3, lineHeight: 1.45 }}>총괄 · 이론적 토대 (A) · AI 안전 평가 프레임워크 (D)</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: "#333" }}>
                연구 방향 설정, 새 사회계약 이론 토대 (A), 6위협 평가 매트릭스 (D), 국제 협력·단행본 총괄.
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }}>
              {[
                { name: "김수연", role: "이론적 토대 (A) · 새 권리 (B)", detail: "정체성 실현권 설계 (A→B), 직업 재편 충격 대응, 돌봄·학습·창작 기여 인정." },
                { name: "이규환", role: "새 권리 (B) · 새 질서 (C)", detail: "AI 인프라 평등 접근권·AI 개인화권 (B), 다층 거버넌스·전력·용수 규제 (C)." },
                { name: "윤준영", role: "새 질서 (C) · 평가 협력 (D)", detail: "글로벌 한시 협력·미중 경로 (C), FDA 사전 승인 체계 (D), LawZero·ARIA 네트워킹." },
              ].map(({ name, role, detail }) => (
                <div key={name} style={{ padding: "7px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                  <div style={{ fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{name}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#444", marginBottom: 3, lineHeight: 1.45 }}>{role}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: "#333" }}>{detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.5 실행 일정</div>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 4, fontSize: 12 }}>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12, width: "12%" }}>시기</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>실행 내용</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12, width: "26%" }}>산출물</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4~5월", "마스터플랜 확정 · 영문 Working Paper 윤곽 · Bengio·Acemoglu·Mazzucato 1차 접촉", "마스터플랜 · Working Paper 윤곽"],
                  ["6~8월", "분야별 연구 · 영문 Working Paper 초고 · 동시대 학자 1대1 자문 · 정부 정책 협의", "분야별 초안 · Working Paper 초고 2편"],
                  ["9~10월", "영문 Working Paper 2편 SSRN/arXiv 게재 · UK AISI·GovAI·Stanford HAI 협력 채널", "영문 Working Paper 2편 · 협력 MoU"],
                  ["11~12월", "단행본 출판 · 정책 제안 · 2027 서울 심포지엄 어젠다 확정", "단행본 · 정책 제안 · 어젠다"],
                ].map(([period, content, output], i) => (
                  <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.45 }}>{period}</td>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.45 }}>{content}</td>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 600, color: "#222", lineHeight: 1.45 }}>{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>4.6 향후 계획</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7 }}>
              {[
                { t: "2027 — 국제 협업 가동", items: ["서울 디지털 거버넌스 심포지엄 1회차", "동시대 학자와 공동 연구 · 단행본 영문판", "한국 공공 AI 인프라 정책 시범"] },
                { t: "2028~2029 — 실증 사례화", items: ["중견국·아시아로 확장 (도시 데이터 주권 연합)", "6위협 평가 프레임워크 외부 협력 구현", "디지털 권리 헌장 초안"] },
                { t: "2030+ — 글로벌 의제화", items: ["미중 합의 경로 중재 · 중견국 연대", "디지털 권리 헌장 국제 채택"] },
              ].map(({ t, items }) => (
                <div key={t} style={{ padding: "9px 11px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>{t}</div>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 5, marginBottom: 4, fontSize: 12, lineHeight: 1.5, color: "#333" }}>
                      <span style={{ color: C.navy, fontWeight: 700, flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </div>
                  ))}
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
