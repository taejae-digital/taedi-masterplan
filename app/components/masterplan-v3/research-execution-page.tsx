/* p.6 — 태재가 하는 일 + 실행 (narrative v0.3.10 9장) */
import { C } from "./constants";
import { Header, Footer, SectionTitle } from "./shared";

export function ResearchExecutionPage() {
  const tls: React.CSSProperties = { fontSize: 13, padding: "6px 8px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" };
  const tlh: React.CSSProperties = { ...tls, fontWeight: 700, fontSize: 12, borderBottom: `2px solid ${C.dark}`, textAlign: "left" };

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header subtitle="6. 태재가 하는 일" />

      <div style={{ margin: "12px 32px 10px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          전환이 전쟁이 아닌 진화로 끝날 수 있는 경로를 설계한다.
        </div>
        <div style={{ fontSize: 12.5, color: "#444", marginTop: 3 }}>
          기술의 방향을 바꾸는 것이 아니다. 기술은 이미 오고 있다. 패권의 최전선에서 합의의 최전선으로.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* 왼쪽: 3대 과업 + 일정 */}
        <div>
          <SectionTitle>3대 과업</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, marginBottom: 14 }}>
            {[
              {
                num: "1", title: "이론 정립", color: C.navy,
                desc: "개인 역량 확장 → 사회 구조 전환 메커니즘을 역사적·이론적으로 정립. Polanyi를 비롯한 사상적 자원을 AI 시대에 재해석. 경제 질서 전환의 논리를 구축.",
              },
              {
                num: "2", title: "공론화", color: C.green,
                desc: "결론을 전달하는 것이 아니라 사고의 경로를 공유. 왜 이 위험을 선택했는지, 왜 이 질서가 변해야 하는지, 왜 이 시점에 설계가 필요한지 — 추론의 과정 자체를 공론의 대상으로.",
              },
              {
                num: "3", title: "구체적 솔루션", color: C.amber,
                desc: "AI 안전 검증의 제도화. 경제적 전환에 대한 완충 장치. 국제적 합의 프레임워크의 구축. 솔루션은 이론과 공론의 기반 위에서만 유효.",
              },
            ].map(({ num, title, desc, color }) => (
              <div key={num} style={{ padding: "10px 14px", borderLeft: `4px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 4 }}>{num}. {title}</div>
                <div style={{ fontSize: 12, lineHeight: 1.6, color: "#222" }}>{desc}</div>
              </div>
            ))}
          </div>

          <SectionTitle>실행 일정 (2026)</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14 }}>
            <thead><tr><th style={{ ...tlh, width: "18%" }}>시기</th><th style={tlh}>실행 내용</th><th style={{ ...tlh, width: "28%" }}>산출물</th></tr></thead>
            <tbody>
              {([
                ["4~5월", "마스터플랜 확정 · 경제 질서 이론 착수 · 자문단 섭외", "마스터플랜 v1.0"],
                ["6~8월", "Polanyi 기반 경제 질서 연구 · 기술 통제 체계 설계 · 승인 체계 설계", "경제 질서 초안 + 통제 방안"],
                ["9~10월", "연구 보완 · 자문단 미팅 · 피드백 반영", "종합 연구 보고서"],
                ["11~12월", "단행본 출판 · 컨퍼런스 개최", "단행본 출판본"],
              ] as const).map(([t, c, o]) => (
                <tr key={t}><td style={{ ...tls, fontWeight: 700 }}>{t}</td><td style={tls}>{c}</td><td style={tls}>{o}</td></tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.amber, marginBottom: 3 }}>한국에서의 실험</div>
            <div style={{ fontSize: 12, lineHeight: 1.6, color: "#333" }}>
              높은 디지털 접근성, 빠른 기술 수용 속도, 상대적으로 작은 규모. 실험 결과가 빠르게 관찰될 수 있는 조건. CWC에서 호주 에반스 외무장관의 타협 초안이 결정적 계기였듯, 한국이 그 역할을 할 수 있다.
            </div>
          </div>
        </div>

        {/* 오른쪽: 핵심 연구 과제 + 팀 + 중장기 */}
        <div>
          <SectionTitle>핵심 연구 과제</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, marginBottom: 14 }}>
            {[
              { t: "① 경제 질서 이론 정립", d: "Polanyi의 배태·이중 운동을 AI 시대에 재해석. 노동·가치·규모 변형의 논리 구축. 회장님 문제의식(자본주의 다음은 무엇인가)에 답하는 이론적 프레임.", color: C.navy },
              { t: "② 기술 통제 체계 설계", d: "기존 국제 레짐 분석. 핵심 기술 공급망 기반 수출통제 구조 검토. 분야별 통제 메커니즘 비교 → 설계안을 만들어 정부에 제안.", color: C.red },
              { t: "③ 승인 체계 설계 (FDA 모델)", d: "AI 안전청 설계. 개발자 안전 입증 의무화. 승인 등급·기준 수립. 킬스위치·행동 로그 의무화. Bengio 진영과의 연결 모색.", color: C.amber },
              { t: "④ 전환 모델 설계", d: "경제 질서 전환의 완충 장치. AI 초과이윤 누진세 → 돌봄 인정소득. 컴퓨팅 자원 공정 접근·데이터 주권. 정체성 실현권 법제화.", color: C.green },
            ].map((s) => (
              <div key={s.t} style={{ padding: "8px 10px", borderLeft: `4px solid ${s.color}`, background: "#fff" }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: s.color, marginBottom: 3 }}>{s.t}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{s.d}</div>
              </div>
            ))}
          </div>

          <SectionTitle>팀 업무 분장</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[
              { name: "유호현 (팀장)", role: "거버넌스 구축 · 총괄 · 경제 질서 이론" },
              { name: "윤준영", role: "국제 레짐 · 국제 규범 · 경제 안보" },
              { name: "이규환", role: "승인 체계 · 빅테크 통제 · 디지털 권리" },
              { name: "김수연", role: "전환 모델 · 정체성 실현권 · 사회 전환" },
            ].map(({ name, role }) => (
              <div key={name} style={{ padding: "8px 10px", borderTop: `3px solid ${C.dark}`, background: C.bg }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>{name}</div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: "#555" }}>{role}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ padding: "8px 10px", borderTop: `3px solid ${C.accent}`, background: C.bg }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.accent, marginBottom: 4 }}>중기 (2027~2028)</div>
              {["연구 보고서 출판", "국제 자문단 상설화", "해외 학술지 게재", "AI 거버넌스 국제 회의체 참여"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#333", marginBottom: 2 }}>— {t}</div>
              ))}
            </div>
            <div style={{ padding: "8px 10px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>장기 (2029~)</div>
              {["디지털 권리 헌장 초안", "국가 간 AI 통제 협약 참여", "세계 의회 설립 논의 기여", "글로벌 AI 거버넌스 리더십"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: C.navy, marginBottom: 2, fontWeight: 600 }}>— {t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
