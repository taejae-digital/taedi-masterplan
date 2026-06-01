import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const objectives = [
  {
    o: "O1. 마스터플랜 v1.0 확정",
    krs: ["v1.0 PDF 최종본 확정", "디지털 시대 정치질서·경제질서 정립", "새로운 권리·새 거버넌스·국제 규율 정립", "외부 독자 자족성 확보"],
  },
  {
    o: "O2. 정치질서·경제질서",
    krs: ["정치질서 — 국가 의사결정·집행·대표성이 개인·도시·빅테크·플랫폼으로 분산되는 구조 정립", "경제질서 — 임금노동·소득·조세·복지·시장 체계 무력화와 4계층 재편 대응"],
  },
  {
    o: "O3. 새로운 권리",
    krs: ["정체성 실현권", "AI 인프라 평등 접근권", "AI 개인화권"],
  },
  {
    o: "O4. 새 거버넌스와 국제 규율",
    krs: ["사전승인 거버넌스", "글로벌 협력 네트워크", "다자 협력 체계 사례 연구", "디지털 시대 권력 구조 변동 분석"],
  },
];

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 연구 계획" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 12.2, color: "#222", lineHeight: 1.45, fontWeight: 600 }}>
          <strong style={{ color: C.navy }}>목표는 v1.0 확정</strong>이다. 정치질서·경제질서, 세 권리, 사전승인 거버넌스, 국제 규율을 하나의 완결된 마스터플랜으로 묶고 외부 독자가 바로 이해할 수 있는 최종본을 만든다.
        </div>
      </div>

      {/* AI 시대의 연구 방법론 — 전체 너비 다이어그램 */}
      <div style={{ padding: "0 32px 6px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginBottom: 6 }}>
          <div style={{ fontSize: 12.1, fontWeight: 800, color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 2 }}>AI 시대의 연구 방법론</div>
          <div style={{ fontSize: 12, color: "#666" }}>정보→지식 변환은 AI에 위임하고, 지식→지혜(방향 판단)에 인간 역량을 집중한다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {[
            { num: "①", t: "문제 정식화", who: "팀원들", d: "질문을 정확히 끊어내고 가설·가치 기준을 명시" },
            { num: "②", t: "다중 가안 생성", who: "AI", d: "1안·2안·3안을 병렬로 빠르게 작성" },
            { num: "③", t: "비교·방향 판단", who: "팀원들", d: "기준에 비추어 안을 평가·선택·통합" },
            { num: "④", t: "외부 검증", who: "자문단·공론장", d: "전문가 피드백, 시민 토론으로 검증" },
            { num: "⑤", t: "통합·산출", who: "AI + 팀원들", d: "검증을 거친 안을 종합·정교화해 보고서·솔루션 도출" },
          ].map(({ num, t, who, d }, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
              <div style={{ flex: 1, padding: "6px 8px", border: "1px solid #222", borderRadius: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                  <span style={{ fontSize: 11.3, fontWeight: 900, color: "#111" }}>{num}</span>
                  <span style={{ fontSize: 11.3, fontWeight: 800, color: "#111" }}>{t}</span>
                </div>
                <div style={{ fontSize: 11.2, fontWeight: 700, color: "#666", marginBottom: 3, letterSpacing: 0.3 }}>{who}</div>
                <div style={{ fontSize: 10.8, color: "#444", lineHeight: 1.3 }}>{d}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: C.navy, fontSize: 16, fontWeight: 300 }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ position: "relative", marginTop: 2 }}>
          <svg width="100%" height="28" viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M 500 0 L 500 18 L 304 18 L 304 4" stroke={C.accent} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <path d="M 700 0 L 700 30 L 304 30 L 304 4" stroke={C.accent} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <polygon points="300,8 304,2 308,8" fill={C.accent} />
          </svg>
          <div style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", fontSize: 9.5, color: C.accent, background: "#fff", padding: "0 8px", fontWeight: 600, letterSpacing: 0.2 }}>
            피드백 반영
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div>
            <div style={h3s}>5.1 연구 목표</div>
            <div style={{ padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 11.3, color: "#222", lineHeight: 1.42 }}>
                <strong>디지털 시대 새 질서의 운영 원리</strong>를 확정한다. 개인의 정체성 실현, AI 인프라 접근, AI 개인화, 사전승인 거버넌스, 국제 협력 규율을 하나의 사회계약으로 정리한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>5.2 연구 전략 — 확정해야 할 네 축</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { t: "질서", d: "정치질서와 경제질서를 디지털 권력 분산, 노동가치설 약화, 4계층 재편의 관점에서 확정한다." },
                { t: "권리", d: "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권을 새 사회계약의 권리 언어로 정립한다." },
                { t: "거버넌스", d: "위험한 AI와 플랫폼 권력에 대해 사후 처벌보다 사전승인과 책임 구조를 우선한다." },
                { t: "국제 규율", d: "글로벌 협력 네트워크, 다자 협력 사례, 디지털 권력 구조 변동 분석을 국제 의제로 연결한다." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "6px 8px", background: C.bg, borderTop: `2px solid ${C.navy}` }}>
                  <div style={{ fontSize: 11.3, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 10.4, lineHeight: 1.36, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>5.3 OKR</div>
            {objectives.map(({ o, krs }) => (
              <div key={o} style={{ marginBottom: 6, padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                <div style={{ fontSize: 11.7, fontWeight: 900, color: C.navy, marginBottom: 4 }}>{o}</div>
                {krs.map((kr, i) => (
                  <div key={i} style={{ display: "flex", gap: 5, fontSize: 10.4, lineHeight: 1.36, color: "#333", marginBottom: 2 }}>
                    <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>KR{i + 1}</span>
                    <span>{kr}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>5.4 업무 분장</div>
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
            <div style={h3s}>5.5 실행 일정</div>
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
                  ["9~10월", "영문 Working Paper 2편 SSRN/arXiv 게재 · UK AISI·GovAI·Stanford HAI 협력 채널 가동", "영문 Working Paper 2편 · 협력 MoU"],
                  ["11~12월", "단행본 출판 · 세 권리 정책 제안 · 2027 서울 심포지엄 어젠다 확정", "단행본 · 정책 제안 · 어젠다"],
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
            <div style={h3s}>5.6 향후 계획</div>
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
                    "디지털 권리 헌장 초안 (세 권리 명문화)",
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
