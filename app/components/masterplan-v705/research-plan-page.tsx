import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="6. 연구 계획" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          사후 교정이 불가능한 AI 시대, 태재는 이론·공론·솔루션의 세 축을 동시에 끌어올려 실행 가능한 모델로 제시한다.
        </div>
      </div>

      {/* AI 시대의 연구 방법론 — 전체 너비 다이어그램 */}
      <div style={{ padding: "0 32px 10px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 2 }}>AI 시대의 연구 방법론</div>
          <div style={{ fontSize: 11, color: "#666" }}>정보→지식 변환은 AI에 위임하고, 지식→지혜(방향 판단)에 인간 역량을 집중한다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {[
            { num: "①", t: "문제 정식화", who: "팀원들", color: C.navy, bg: "#f0f4ff", d: "질문을 정확히 끊어내고 가설·가치 기준을 명시" },
            { num: "②", t: "다중 가안 생성", who: "AI", color: "#3b82f6", bg: "#eff6ff", d: "1안·2안·3안을 병렬로 빠르게 작성" },
            { num: "③", t: "비교·방향 판단", who: "팀원들", color: C.navy, bg: "#f0f4ff", d: "기준에 비추어 안을 평가·선택·통합" },
            { num: "④", t: "외부 검증", who: "자문단·공론장", color: "#16a34a", bg: "#f0fdf4", d: "전문가 피드백, 시민 토론으로 검증" },
            { num: "⑤", t: "통합·산출", who: "팀원들", color: C.accent, bg: "#fff7ed", d: "검증을 거친 안을 종합·정교화해 보고서·솔루션 도출" },
          ].map(({ num, t, who, color, bg, d }, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
              <div style={{ flex: 1, padding: "8px 10px", border: "1px solid #222", borderRadius: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                  <span style={{ fontSize: 15, fontWeight: 900, color: "#111" }}>{num}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#111" }}>{t}</span>
                </div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: "#666", marginBottom: 3, letterSpacing: 0.3 }}>{who}</div>
                <div style={{ fontSize: 10, color: "#444", lineHeight: 1.4 }}>{d}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: C.navy, fontSize: 16, fontWeight: 300 }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ position: "relative", marginTop: 2 }}>
          <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ display: "block" }}>
            {/* ③ → ②  (45° 기울기로 ②에 진입) */}
            <path
              d="M 500 0 C 500 16, 312 16, 300 4"
              stroke={C.accent}
              strokeWidth="1.3"
              fill="none"
              strokeDasharray="4 3"
              vectorEffect="non-scaling-stroke"
            />
            {/* ④ → ②  (45° 기울기로 ②에 진입) */}
            <path
              d="M 700 0 C 700 32, 328 32, 300 4"
              stroke={C.accent}
              strokeWidth="1.3"
              fill="none"
              strokeDasharray="4 3"
              vectorEffect="non-scaling-stroke"
            />
            {/* 공유 화살촉 — 45° 좌상향 회전 */}
            <polygon points="296,5 300,0 304,5" fill={C.accent} transform="rotate(-45 300 4)" />
          </svg>
          <div style={{
            position: "absolute",
            bottom: 2,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 9.5,
            color: C.accent,
            background: "#fff",
            padding: "0 8px",
            fontStyle: "italic",
            fontWeight: 600,
            letterSpacing: 0.2,
          }}>
            피드백 반영
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        <div>
          {/* 6.1 연구 목표 & 전략 */}
          <div style={h3s}>6.1 연구 목표 & 전략</div>
          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}`, marginBottom: 12 }}>
            <div style={{ fontSize: 13.5, fontWeight: 800, color: C.navy, marginBottom: 4 }}>최종 목표</div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, color: "#222" }}>
              디지털 기술이 가져오는 사회적 충격에 대응하는 구체적 해결책을 제시하고 실행 가능한 모델로 고도화한다.
              최종 산출물은 <strong>단행본 출판 + 국내외 공론화 (Q4 2026)</strong>.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginBottom: 14 }}>
            {[
              { t: "이론 정립", d: "자본주의도 공산주의도 아닌 정보화 질서의 이론적 뼈대 구축" },
              { t: "공론화", d: "결론이 아닌 사고의 경로를 시민·전문가와 함께 걷는 과정" },
              { t: "솔루션 설계", d: "AI 승인 레짐·폭력 통제·공공 AI 인프라·정체성 실현권 등 구체안" },
            ].map(({ t, d }) => (
              <div key={t} style={{ padding: "8px 10px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>

          {/* 6.2 연구 분야 */}
          <div style={h3s}>6.2 연구 분야</div>
          {[
            { letter: "A", t: "이론적 토대 — 왜 새 사회계약인가", d: "민주주의·자본주의가 '직업=정체성인 인간'을 전제로 한 한계를 진단. 스미스·롤스·하버마스·폴라니·케인스를 AI 시대에 재해석하여 '정체성을 실현하는 강화된 개인의 연결'이라는 새 인간상의 정당성을 확립한다." },
            { letter: "B", t: "새 권리 — 무엇을 보장하나", d: "강화된 개인이 요구하는 세 권리의 법적·제도적 정립. ① 정체성 실현권 (직업·소속에 묶이지 않을 권리, 돌봄·창작·학습 기여의 인정), ② AI 인프라 평등 접근권 (AI·연산·데이터의 공공재화, 데이터 주권·이동권), ③ 알고리즘 자기결정권 (설명 요구권·자동 판단 거부권)." },
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

        <div>
          {/* 6.3 업무 분장 */}
          <div style={h3s}>6.3 업무 분장</div>
          {[
            {
              name: "유호현 (팀장)",
              role: "총괄 · 이론적 토대 (A) · AI 안전 평가 프레임워크 (D)",
              detail: "연구 전체 방향 설정, 회장님·원장님과 소통. 새 사회계약의 이론적 토대 (A) 정립, 6위협 × 판단력·실행력·파급력 평가 매트릭스 설계 (D), UK AISI·MLCommons·GovAI·Stanford HAI 협력, 단행본 편집 총괄.",
            },
            {
              name: "김수연",
              role: "이론적 토대 (A) · 새 권리 (B)",
              detail: "정체성 실현권의 사회·역사적 정당성 (A→B), 직업=정체성 공식을 대체할 정체성 실현권 설계, 직업 재편 충격 대응, 돌봄·학습·창작 기여 인정 구조, 공동체 재연결.",
            },
            {
              name: "이규환",
              role: "새 권리 (B) · 새 질서 (C)",
              detail: "AI 인프라 평등 접근권·알고리즘 자기결정권의 법적 정립 (B), 다층 거버넌스·플랫폼 과두제 해체·디지털 권리 헌장 (C), AI 데이터센터 전력·용수·탄소 영향 규제.",
            },
            {
              name: "윤준영",
              role: "새 질서 (C) · AI 안전 평가 협력 (D)",
              detail: "글로벌 한시 협력·미중 대타협 경로 (C), LAWS·AI WMD 국제 레짐, FDA 사전 승인 체계 설계 (D 협력), Law Zero·ARIA·UK AISI 기관 네트워킹.",
            },
          ].map(({ name, role, detail }) => (
            <div key={name} style={{ marginBottom: 9, padding: "9px 11px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{name}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#444", marginBottom: 4 }}>{role}</div>
              <div style={{ fontSize: 12, lineHeight: 1.6, color: "#333" }}>{detail}</div>
            </div>
          ))}

          {/* 6.4 실행 일정 */}
          <div style={h3s}>6.4 실행 일정</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12, fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 12, width: "18%" }}>시기</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 12 }}>실행 내용</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 12, width: "28%" }}>산출물</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["4~5월", "마스터플랜 확정 · 연구 분야별 착수 · 국내외 자문단 섭외", "마스터플랜 확정본"],
                ["6~8월", "이론적 토대 · 새 권리 · 새 질서 · AI 안전 평가 프레임워크 병렬 연구", "분야별 연구 초안 4종"],
                ["9~10월", "교차 검토 · 외부 전문가 피드백 · 단행본 편집 · AI 평가 프레임워크 영문 브리프 발표", "종합 보고서 · 영문 브리프"],
                ["11~12월", "단행본 출판 · 국내 공론화 · 국제 컨퍼런스 (UK AISI·MLCommons·GovAI 협력)", "단행본 + 정책 제안 + 평가 프레임워크"],
              ].map(([period, content, output], i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.5 }}>{period}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.5 }}>{content}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 600, color: "#222", lineHeight: 1.5 }}>{output}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { t: "중기 (2027~2028)", items: ["AI 평가 프레임워크 외부 협력 구현 (MLCommons·UK AISI)", "연구 보고서 국제판·해외 학술지 게재"] },
              { t: "장기 (2029~)", items: ["디지털 권리 헌장 초안·국제 협약 참여", "미중 합의 경로 제시 및 중재"] },
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

      <Footer />
    </div>
  );
}
