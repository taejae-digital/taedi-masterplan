import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const objectives = [
  {
    o: "O1. 디지털 시대 새 사회계약 확정",
    owner: "유호현 총괄 · 김수연 근거 · 이규환 제도",
    krs: ["정체성을 고유한 기여와 생산력으로 전환하는 핵심 명제 확정", "규모의 경제에서 정체성 기반 생산자 경제로 넘어가는 경제질서 정리", "국가 독점 정치에서 개인·도시·국가·세계 다층 거버넌스로 넘어가는 정치질서 정리", "농업·산업·디지털 시대의 사회계약 교환 구조 확정"],
  },
  {
    o: "O2. 세계·국가·도시·가정 경영 전략 구체화",
    owner: "유호현 총괄 · 윤준영 국제 · 김수연 사례 · 이규환 제도",
    krs: ["미·중 패권경쟁의 레드라인과 교환물로 한국의 협상 카드 정리", "學·産·市·媒 운영체계와 15대 산업벨트 배치 확정", "도시별 규제·산업 정체성 경쟁 모델 구체화", "가정의 성장 기록·건강 스마트홈·권리 UI를 도시 기회와 연결"],
  },
  {
    o: "O3. v1.0 산출·검증·확산 체계 구축",
    owner: "유호현 총괄 · 윤준영 협력 · 전원 산출물",
    krs: ["v1.0 PDF 최종본과 외부 독자용 설명 문장 확정", "근거 데이터팩·사례 메모·정책 초안·국제 협력 맵을 OKR 증거로 정리", "자문단 질문지와 피드백 반영 루프 운영", "Working Paper·단행본·2027 서울 심포지엄으로 확산 경로 설계"],
  },
];

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 연구 계획" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 12.2, color: "#222", lineHeight: 1.45, fontWeight: 600 }}>
          정체성 기반 생산자 경제, 다층 거버넌스, 새 사회계약, 세계·국가·도시·가정 경영 전략을 하나의 완결된 마스터플랜으로 묶고 외부 독자가 바로 이해할 수 있는 최종본을 만든다.
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
                <strong>디지털 시대 새 질서의 운영 원리</strong>를 확정한다. 정체성 기반 생산자 경제, 개인·도시·국가·세계 다층 거버넌스, 사회계약의 교환 구조, 세계·국가·도시·가정 경영 전략을 하나의 실행 체계로 정리한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>5.2 연구 전략</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { t: "질서", d: "경제는 정체성 기반 생산자 경제, 정치는 개인·도시·국가·세계 다층 거버넌스로 확정한다." },
                { t: "사회계약", d: "농업·산업·디지털 시대의 교환 구조를 비교하고, 정체성을 생산력으로 전환할 자유와 조건을 정리한다." },
                { t: "경영 전략", d: "세계 딜, 學·産·市·媒 운영체계, 15대 산업벨트, 도시 경쟁, 가정 성장 시스템을 연결한다." },
                { t: "검증·확산", d: "외부 자문, Working Paper, 단행본, 2027 서울 심포지엄으로 검증과 확산 경로를 만든다." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "6px 8px", background: C.bg, borderTop: `2px solid ${C.navy}` }}>
                  <div style={{ fontSize: 11.3, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 10.4, lineHeight: 1.36, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>5.3 Objectives and Key Results</div>
            {objectives.map(({ o, owner, krs }) => (
              <div key={o} style={{ marginBottom: 6, padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                <div style={{ fontSize: 11.7, fontWeight: 900, color: C.navy, marginBottom: 4 }}>{o} <span style={{ fontSize: 10.2, fontWeight: 750, color: C.accent }}>({owner})</span></div>
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
            <div style={h3s}>5.4 실행 일정</div>
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
                  ["4~5월", "마스터플랜 v1.0 논리와 PDF 확정 · 외부 자문 질문지 작성", "마스터플랜 · 자문 질문지"],
                  ["6~8월", "사회계약·경영전략 근거팩 작성 · 미·중 딜, 산업벨트, 도시·가정 실증 모델 구체화 · Working Paper 초고", "근거팩 · 정책/전략 초안 · Working Paper 초고"],
                  ["9~10월", "Working Paper 공개 · 외부 자문 반영 · 글로벌 협력 채널 가동", "Working Paper · 피드백 반영본 · 협력 채널"],
                  ["11~12월", "단행본 출판 · 디지털 사회계약 정책 제안 · 2027 서울 심포지엄 어젠다 확정", "단행본 · 정책 제안 · 심포지엄 어젠다"],
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
            <div style={h3s}>5.5 향후 계획</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                {
                  t: "2027 — 국제 협업 가동",
                  items: [
                    "서울 디지털 거버넌스 심포지엄 1회차",
                    "동시대 학자 공동 연구 · 단행본 영문판",
                    "한국형 디지털 사회계약 실험도시 시범",
                  ],
                },
                {
                  t: "2028~2029 — 실증 사례화",
                  items: [
                    "강소도시 시범 (정체성 실현권 + 시민 직접 위임)",
                    "사회계약 지표·피드백 체계 외부 협력 구현",
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

