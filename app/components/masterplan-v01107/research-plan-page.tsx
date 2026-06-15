import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";
import { VERSION } from "./version";

const objectives = [
  {
    o: "경제질서 연구 — 정체성 기반 생산자 경제 확정",
    no: "O1",
    owner: "김수연",
    advisor: "에릭 브린욜프슨(스탠퍼드대) · 마리아나 마추카토(UCL)",
    krs: ["규모의 경제에서 정체성 기반 생산자 경제로 넘어가는 전환 논리 정리", "리더·프로·아마·소외계층 4계층의 산업→디지털 역할 변화 정리", "AI가 표준 노동을 대체하고 개인 생산능력을 키우는 메커니즘 검증", "정체성이 고유한 기여로 이어지는 경제적 조건 도출"],
  },
  {
    o: "정치질서 연구 — 국가 독점에서 도시·세계정부로",
    no: "O2",
    owner: "윤준영",
    advisor: "대런 아세모글루(MIT) · 리처드 플로리다(토론토대)",
    krs: ["국가 독점 정치에서 도시·세계정부로 권한이 재배치되는 전환 정리", "개인·도시·국가·세계정부·플랫폼 5주체의 역할 변화 확정", "플랫폼·알고리즘 권력의 감사·제재 거버넌스 구조 정리", "생활정치 도시와 세계정부 공통규칙의 연결 구조 도출"],
  },
  {
    o: "새로운 사회계약 연구 — 작동 조건과 법제 검증",
    no: "O3",
    owner: "이규환",
    advisor: "쇼샤나 주보프(하버드경영대) · 루치아노 플로리디(예일대)",
    krs: ["정체성이 고유한 기여로 전환될 기본 여건(생활·생산·조정)의 보장 구조 확정", "생산수단 개방·기여 경로 연결·플랫폼 권력 조정의 핵심 합의 정리", "AI 인프라 접근권·개인화권·설명/거부/조정 UI의 법제 쟁점 정리", "EU DMA·AI Act·GDPR 분석 후 한국형 디지털 사회계약 적용안 제시"],
  },
];

/* 5.4 분기별 간트 — 각 트랙이 어느 시기에 걸쳐 있는지 + 마일스톤 산출물 핀 */
const ganttPeriods = ["6월", "7~8월", "9~10월", "11~12월"];
const ganttTracks = [
  { name: "마스터플랜 v1.0 논리 확정", span: [0, 0], detail: "사회계약·경영 기조 검토자료 구조화 · 외부 자문 질문지 완성" },
  { name: "문헌·사례 검토 / 기조 정리", span: [1, 1], detail: "경제·정치질서 사례 검토 · 디지털 시대 경영 기조 정리" },
  { name: "Working Paper 작성·공개", span: [1, 2], detail: "초고 작성 → 공개 → 외부 자문·공론장 피드백 반영" },
  { name: "글로벌 협력 채널 가동", span: [2, 3], detail: "협력 채널 가동 → 2027 심포지엄 연결" },
  { name: "단행본 출판 · 정책 제안", span: [3, 3], detail: "단행본 · 디지털 사회계약 정책 제안 · 2027 어젠다 확정" },
];
const ganttMilestones = [
  { at: 0, label: "v1.0 확정본" },
  { at: 1, label: "검토자료·초고" },
  { at: 2, label: "Working Paper 공개" },
  { at: 3, label: "단행본·심포지엄 어젠다" },
];

/* 5.5 향후 계획 — 미래 연장 타임라인 */
const futurePlan = [
  { t: "2027", sub: "국제 협업 가동", items: ["서울 디지털 거버넌스 심포지엄 1회차", "동시대 학자 공동 연구 · 단행본 영문판", "한국형 디지털 사회계약 실험도시 시범"] },
  { t: "2028~2029", sub: "실증 사례화", items: ["강소도시 시범 (정체성 발휘 여건 + 시민 위임 구조 실험)", "사회계약 지표·피드백 체계 외부 협력 구현", "디지털 권리 헌장 초안"] },
  { t: "2030+", sub: "글로벌 의제화", items: ["미중 합의 경로 중재 · 중견국 연대", "디지털 권리 헌장 국제 채택", "민주국가 연합 집단 행동 의제 설정"] },
];

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 연구 계획" chapterNo="05" version={VERSION} />

      <div style={{ padding: "10px 32px 7px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 13.2, color: "#222", lineHeight: 1.55, fontWeight: 600 }}>
          정체성 기반 생산자 경제, 도시와 세계정부 정치질서, 새 사회계약, 세계·국가·도시·가정 경영 전략을 하나의 완결된 마스터플랜으로 묶고 외부 독자가 바로 이해할 수 있는 최종본을 만든다.
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
              <div style={{ flex: 1, padding: "6px 8px", border: "1px solid #222", borderRadius: 2 }}>
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
            <path d="M 500 0 L 500 18 L 304 18 L 304 4" stroke={C.ink} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <path d="M 700 0 L 700 30 L 304 30 L 304 4" stroke={C.ink} strokeWidth="1.3" fill="none" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            <polygon points="300,8 304,2 308,8" fill={C.ink} />
          </svg>
          <div style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", fontSize: 9.5, color: C.muted, background: "#fff", padding: "0 8px", fontWeight: 600, letterSpacing: 0.2 }}>
            피드백 반영
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div>
            <div style={h3s}>5.1 연구 목표</div>
            <div style={{ padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 13.2, color: "#222", lineHeight: 1.6 }}>
                <strong>디지털 시대 새 질서의 운영 원리</strong>를 확정한다. 정체성 기반 생산자 경제, 도시와 세계정부 정치질서, 사회계약의 교환 구조를 정리하고, 세계·국가·도시·가정 경영의 기조를 제시한다(상세 실행 전략은 담당 팀과 협업).
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>5.2 연구 전략</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { t: "질서", d: "경제는 정체성 기반 생산자 경제, 정치는 국가 독점에서 도시와 세계정부로 이동하는 질서로 확정한다." },
                { t: "사회계약", d: "농업·산업·디지털 시대의 교환 구조를 비교하고, 정체성이 고유한 기여로 이어질 기본 여건을 정리한다." },
                { t: "경영 기조", d: "세계·국가·도시·가정 경영의 원리(다층 거버넌스·정체성 생태계 운영)를 제시한다. 상세 실행 전략은 담당 팀과 협업한다." },
                { t: "검증·확산", d: "외부 자문, Working Paper, 단행본, 2027 서울 심포지엄으로 검증과 확산 경로를 만든다." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "2px 0 4px" }}>
                  <div style={{ fontSize: 12.6, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5.3 OKR — 3인 카드 */}
          <div>
            <div style={h3s}>5.3 Objectives and Key Results</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {objectives.map(({ o, no, owner, advisor, krs }) => (
                <div key={no} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", background: "#fff" }}>
                  <div style={{ background: C.ink, color: "#fff", padding: "5px 10px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 900, opacity: 0.8 }}>{no}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.9 }}>{owner}</span>
                    <span style={{ fontSize: 12.8, fontWeight: 800, marginLeft: 1, lineHeight: 1.25 }}>{o}</span>
                  </div>
                  <div style={{ padding: "3px 10px", borderBottom: `1px solid ${C.cardBorder}`, fontSize: 10, color: C.muted, fontWeight: 600 }}>
                    <span style={{ fontWeight: 800, color: C.ink }}>자문 </span>{advisor}
                  </div>
                  <div style={{ padding: "5px 9px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5px 10px" }}>
                    {krs.map((kr, i) => (
                      <div key={i} style={{ display: "flex", gap: 5, fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>
                        <span style={{ color: C.ink, fontWeight: 900, flexShrink: 0 }}>KR{i + 1}</span>
                        <span>{kr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* 5.4 실행 일정 — 가로 간트 / 마일스톤 바 */}
          <div>
            <div style={h3s}>5.4 실행 일정</div>
            <div style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", background: "#fff" }}>
              {/* 분기 헤더 */}
              <div style={{ display: "grid", gridTemplateColumns: "38% repeat(4, 1fr)", background: C.navy, color: "#fff" }}>
                <div style={{ padding: "5px 8px", fontSize: 11.5, fontWeight: 700 }}>트랙</div>
                {ganttPeriods.map((p) => (
                  <div key={p} style={{ padding: "5px 0", fontSize: 11.5, fontWeight: 800, textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.25)" }}>{p}</div>
                ))}
              </div>
              {/* 간트 바 */}
              {ganttTracks.map((tr, ti) => (
                <div key={tr.name} style={{ display: "grid", gridTemplateColumns: "38% repeat(4, 1fr)", background: ti % 2 ? C.bg : "#fff", borderTop: `1px solid ${C.hairline}`, alignItems: "stretch" }}>
                  <div style={{ padding: "5px 8px" }}>
                    <div style={{ fontSize: 11.4, fontWeight: 800, color: C.ink, lineHeight: 1.25 }}>{tr.name}</div>
                    <div style={{ fontSize: 9.8, color: "#555", lineHeight: 1.3, marginTop: 2 }}>{tr.detail}</div>
                  </div>
                  {ganttPeriods.map((_, ci) => {
                    const active = ci >= tr.span[0] && ci <= tr.span[1];
                    const isStart = ci === tr.span[0];
                    const isEnd = ci === tr.span[1];
                    return (
                      <div key={ci} style={{ borderLeft: `1px solid ${C.hairline}`, display: "flex", alignItems: "center", padding: "5px 3px" }}>
                        {active && (
                          <div style={{
                            height: 9, width: "100%", background: C.ink,
                            borderTopLeftRadius: isStart ? 5 : 0, borderBottomLeftRadius: isStart ? 5 : 0,
                            borderTopRightRadius: isEnd ? 5 : 0, borderBottomRightRadius: isEnd ? 5 : 0,
                          }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
              {/* 마일스톤 산출물 핀 */}
              <div style={{ display: "grid", gridTemplateColumns: "38% repeat(4, 1fr)", background: C.surface, borderTop: `2px solid ${C.ink}` }}>
                <div style={{ padding: "5px 8px", fontSize: 10.4, fontWeight: 800, color: C.ink }}>◆ 마일스톤 산출물</div>
                {ganttPeriods.map((_, ci) => {
                  const ms = ganttMilestones.find((m) => m.at === ci);
                  return (
                    <div key={ci} style={{ borderLeft: `1px solid ${C.cardBorder}`, padding: "4px 4px", textAlign: "center" }}>
                      {ms && (
                        <div style={{ fontSize: 9.6, fontWeight: 700, color: C.ink, lineHeight: 1.25 }}>◆ {ms.label}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 5.5 향후 계획 — 미래 연장 타임라인 */}
          <div>
            <div style={h3s}>5.5 향후 계획</div>
            <div style={{ position: "relative" }}>
              {/* 타임라인 척추선 */}
              <div style={{ position: "absolute", left: 7, top: 6, bottom: 6, width: 2, background: C.ink, opacity: 0.35 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {futurePlan.map(({ t, sub, items }, i) => (
                  <div key={t} style={{ position: "relative", paddingLeft: 24 }}>
                    {/* 노드 */}
                    <div style={{ position: "absolute", left: 0, top: 2, width: 16, height: 16, borderRadius: 2, background: C.ink, color: "#fff", fontSize: 9, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 3px #fff" }}>{i + 1}</div>
                    <div style={{ border: `1px solid ${C.cardBorder}`, borderLeft: `3px solid ${C.ink}`, borderRadius: 0, background: C.bg, padding: "9px 13px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 15, fontWeight: 900, color: C.ink }}>{t}</span>
                        <span style={{ fontSize: 12.5, fontWeight: 800, color: C.navy }}>{sub}</span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 0" }}>
                        {items.map((item, j) => (
                          <div key={j} style={{ display: "flex", gap: 5, width: "100%", fontSize: 12, lineHeight: 1.62, color: "#333" }}>
                            <span style={{ color: C.muted, fontWeight: 700, flexShrink: 0 }}>—</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
