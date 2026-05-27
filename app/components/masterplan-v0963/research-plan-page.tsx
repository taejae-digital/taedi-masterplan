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

const executionPlan = [
  {
    period: "5월",
    owner: "유호현",
    task: "v1.0 구조 확정, 정치·경제 질서 문장 통일, 사전승인 거버넌스 원리 정립",
    output: "v1.0 구조안",
  },
  {
    period: "5월",
    owner: "김수연",
    task: "정체성 발견·훈련·실현 구조 정리, 정체성 실현권 초안 작성",
    output: "정체성 실현권 초안",
  },
  {
    period: "6월",
    owner: "이규환",
    task: "AI 인프라 평등 접근권·AI 개인화권 제도화, 공공 AI 접근과 설명·거부 가능성 정리",
    output: "권리·제도 초안",
  },
  {
    period: "6월",
    owner: "윤준영",
    task: "사전승인 거버넌스, 글로벌 협력 네트워크, 다자 협력 사례, 권력 구조 변동 분석",
    output: "국제 규율 초안",
  },
  {
    period: "7~8월",
    owner: "전체",
    task: "권리·질서·거버넌스 통합, 외부 독자 자족성 검수, 문장·어휘·인과 일관성 정리",
    output: "v1.0 PDF 최종본",
  },
  {
    period: "9월+",
    owner: "전체",
    task: "발표용 요약본 제작, 후속 연구 과제 정리, 국제 협력·정책 제안 확장",
    output: "발표자료·후속 과제",
  },
];

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 연구 계획" version={VERSION} />

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
            <div style={h3s}>4.1 연구 목표</div>
            <div style={{ padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 11.3, color: "#222", lineHeight: 1.42 }}>
                <strong>디지털 시대 새 질서의 운영 원리</strong>를 확정한다. 개인의 정체성 실현, AI 인프라 접근, AI 개인화, 사전승인 거버넌스, 국제 협력 규율을 하나의 사회계약으로 정리한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>4.2 연구 전략 — 확정해야 할 네 축</div>
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
            <div style={h3s}>4.3 OKR</div>
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

        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div>
            <div style={h3s}>4.4 실행 계획 — 담당·일정·산출물</div>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: 10.9 }}>
              <colgroup>
                <col style={{ width: "12%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "51%" }} />
                <col style={{ width: "22%" }} />
              </colgroup>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 10.8 }}>시기</th>
                  <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 10.8 }}>담당</th>
                  <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 10.8 }}>핵심 작업</th>
                  <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 10.8 }}>산출물</th>
                </tr>
              </thead>
              <tbody>
                {executionPlan.map(({ period, owner, task, output }, i) => (
                  <tr key={`${period}-${owner}`} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontWeight: 800, color: C.navy, lineHeight: 1.35, verticalAlign: "top" }}>{period}</td>
                    <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontWeight: 800, color: "#222", lineHeight: 1.35, verticalAlign: "top" }}>{owner}</td>
                    <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.38, verticalAlign: "top" }}>{task}</td>
                    <td style={{ padding: "6px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.35, verticalAlign: "top" }}>{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ padding: "8px 10px", background: "#fff8e1", borderLeft: `3px solid ${C.accent}`, fontSize: 11, lineHeight: 1.45, color: "#222" }}>
            <strong style={{ color: C.navy }}>완료 기준은 OKR의 KR이 담당한다.</strong> 별도 완료 기준을 만들지 않고, 실행 계획은 누가·언제·무엇을 산출하는지만 보여준다.
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
