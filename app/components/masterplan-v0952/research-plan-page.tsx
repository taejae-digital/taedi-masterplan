import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 연구 계획" version={VERSION} />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: "#222", lineHeight: 1.6, fontWeight: 600 }}>
          P2의 <strong style={{ color: C.navy }}>정체성 → 직업</strong> 인과와 P3의 <strong style={{ color: C.navy }}>경제·정치 6차원 재편</strong>, 그리고 3.3의 <strong style={{ color: C.navy }}>세 권리</strong>를 정당화·실증·확산한다. 태재는 이론·공론·솔루션의 세 축을 동시에 끌어올려 실행 가능한 모델로 제시한다.
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

      <div style={{ padding: "0 32px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>

        {/* 왼쪽 열: 4.1 → 4.2 → 4.3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.1 연구 목표</div>
            <div style={{ padding: "6px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                <strong>정체성 실현이 가능한 다층 사회</strong>를 위한 이론·권리·작동 메커니즘·측정 인프라를 정립하고 실행 가능한 모델로 고도화한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>4.2 연구 전략 — 3.3 국제 협력 컬럼의 실행</div>
            <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.5, padding: "5px 9px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, marginBottom: 6 }}>
              3.3 표의 <strong>국제 협력</strong> 컬럼(LawZero · EU AI Act / International AI Safety Network · 민주국가 연합)을 실제 협업 관계로 만든다. 영문 IP · 한국 실증 사례 · 거절하기 어려운 자리, 세 가지를 동시에 갖춘다.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                { t: "이론 정립 + 영문 IP", d: "단행본(국문, Q4 2026) 전에 영문 working paper 2편을 SSRN/arXiv 선행 발표. 동시대 학자가 검색·인용 가능한 진입 티켓." },
                { t: "국제 협업 인프라", d: "Bengio·Acemoglu·Mazzucato 등 자문·공동 연구. KAIST·SNU + 연례 서울 심포지엄(Q1 2027~) + UK AISI·GovAI·Stanford HAI 협력." },
                { t: "한국 = 실증 사례", d: "3.3 세 권리(정체성 실현권·AI 인프라 평등 접근권·시민 직접 위임 거버넌스권)의 한국 정책 시범. 강소도시·디지털 배당·다층 거버넌스 실증." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "7px 9px", background: C.bg, borderTop: `2px solid ${C.navy}` }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.3 연구 분야 — P2·P3·3.3을 정당화·실증한다</div>
            {[
              {
                letter: "A",
                t: "이론적 토대 — 정체성 → 직업 인과 정립",
                d: "P2의 핵심 명제 — '산업시대는 직업이 사람을 빚었다. 디지털시대는 사람의 정체성이 직업을 부른다' — 의 이론적 정당화. 노동가치설 붕괴를 직시한 동시대 학자(Acemoglu·Mazzucato·Bengio·Zuboff·Perez)와 공동 작업으로 '정체성 실현인'이라는 새 인간상의 정당성 확립.",
              },
              {
                letter: "B",
                t: "새 권리 — 3.3 세 권리의 법적·제도적 정립",
                d: "① 정체성 실현권 — 직업·소속에 묶이지 않을 권리, 발견·훈련·실현 단계별 기여 인정, 알고리즘 결정 설명·거부권. ② AI 인프라 평등 접근권 — AI·연산·데이터의 공공재화, 데이터 주권·이동권. ③ 시민 직접 위임 거버넌스권 — 산업시대 위임제를 넘어 가정~세계 6단계가 단계별 권한을 행사·한시 위임.",
              },
              {
                letter: "C",
                t: "새 경제·정치 질서 — 3.1·3.2의 6차원 구체화",
                d: "경제 3차원: 생산(정체성이 가치를 만든다) · 분배(자본·데이터 과세 + 디지털 배당) · 지출(정체성 실현 지출, 강소도시 구독). 정치 3차원: 입법(시민·도시·세계 공동 검증) · 행정(전자인 법인격 + 다층 집행) · 사법(알고리즘 결정 설명·거부권 + AI 보조 시민 검증).",
              },
              {
                letter: "D",
                t: "측정·평가 인프라 — P3 ②의 진단을 데이터로",
                d: "노동가치설 붕괴 측정(AI 인지노동 대체율·정체성 기여 측정 도구), AI 권력 집중 측정(빅테크 사실상 입법량·플랫폼 의사결정 자동화율), 다층 거버넌스 작동 측정(가정~세계 6단계 권한 행사 지표). 기존 벤치마크(HELM·AILuminate·UK AISI)가 비워둔 권력 집중·인간 존엄·글로벌 질서 영역을 채운다.",
              },
            ].map(({ letter, t, d }) => (
              <div key={letter} style={{ display: "flex", gap: 9, marginBottom: 6, padding: "7px 9px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: C.navy, lineHeight: 1, flexShrink: 0 }}>{letter}</div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 열: 4.4 → 4.5 → 4.6 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.4 업무 분장 — 4.3 A·B·C·D 매핑</div>
            <div style={{ padding: "7px 10px", marginBottom: 7, background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 2 }}>유호현 (팀장)</div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: "#444", marginBottom: 3, lineHeight: 1.45 }}>총괄 · A 이론 · D 측정 인프라</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>
                정체성 → 직업 인과 정립(A), 노동가치설 붕괴·AI 권력 집중·다층 거버넌스 측정 도구 설계(D), 국제 협력·단행본 총괄.
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                {
                  name: "김수연",
                  role: "A 이론 · B 정체성 실현권",
                  detail: "노동가치설 붕괴의 실증 자료 수집(A), 정체성 실현권 설계 — 돌봄·창작·학습 기여 인정 구조(B).",
                },
                {
                  name: "윤준영",
                  role: "B AI 인프라 평등 접근권 · C 경제 질서",
                  detail: "AI·연산·데이터 공공재화 설계, 데이터 주권(B). 자본·데이터 과세 + 디지털 배당, 정체성 실현 지출(C 경제).",
                },
                {
                  name: "이규환",
                  role: "C 정치 질서 · B 시민 직접 위임 거버넌스권",
                  detail: "입법·행정·사법 다층 분산, 전자인 법인격(C 정치). 가정~세계 6단계 단계별 위임 메커니즘 설계(B).",
                },
              ].map(({ name, role, detail }) => (
                <div key={name} style={{ padding: "7px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{name}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 600, color: "#444", marginBottom: 3, lineHeight: 1.45 }}>{role}</div>
                  <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>{detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.5 실행 일정</div>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 4, fontSize: 11.5 }}>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "12%" }}>시기</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>실행 내용</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "26%" }}>산출물</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4~5월", "마스터플랜 확정 · 영문 Working Paper 윤곽 (A 이론 / D 측정) · Bengio·Acemoglu·Mazzucato 1차 접촉", "마스터플랜 · Working Paper 윤곽"],
                  ["6~8월", "분야별 연구(A·B·C·D) · 영문 Working Paper 초고 · 동시대 학자 1대1 자문 · 정부 정책 협의", "분야별 초안 · Working Paper 초고 2편"],
                  ["9~10월", "영문 Working Paper 2편 SSRN/arXiv 게재 · UK AISI·GovAI·Stanford HAI 협력 채널 (3.3 국제 협력 컬럼 실행)", "영문 Working Paper 2편 · 협력 MoU"],
                  ["11~12월", "단행본 출판 · 3.3 세 권리 정책 제안 · 2027 서울 심포지엄 어젠다 확정", "단행본 · 정책 제안 · 어젠다"],
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
            <div style={h3s}>4.6 향후 계획 — 3.3 세 권리의 단계별 확산</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                {
                  t: "2027 — 국제 협업 가동",
                  items: [
                    "서울 디지털 거버넌스 심포지엄 1회차",
                    "동시대 학자 공동 연구 · 단행본 영문판",
                    "한국 공공 AI 인프라 정책 시범 (B 권리 실증)",
                  ],
                },
                {
                  t: "2028~2029 — 실증 사례화",
                  items: [
                    "강소도시 시범 (정체성 실현권 + 시민 직접 위임)",
                    "측정 인프라(D) 외부 협력 구현",
                    "디지털 권리 헌장 초안 (3.3 세 권리 명문화)",
                  ],
                },
                {
                  t: "2030+ — 글로벌 의제화",
                  items: [
                    "미중 합의 경로 중재 · 중견국 연대",
                    "디지털 권리 헌장 국제 채택",
                    "민주국가 연합 집단 행동 의제 설정",
                  ],
                },
              ].map(({ t, items }) => (
                <div key={t} style={{ padding: "9px 11px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>{t}</div>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 5, marginBottom: 4, fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>
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
