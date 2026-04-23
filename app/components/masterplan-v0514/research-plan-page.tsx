import { C } from "./constants";
import { Header, Footer, SectionTitle } from "./shared";

export function ResearchPlanPage() {
  const tls: React.CSSProperties = { fontSize: 12, padding: "5px 7px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top", lineHeight: 1.55 };
  const tlh: React.CSSProperties = { ...tls, fontWeight: 700, fontSize: 11.5, borderBottom: `2px solid ${C.dark}`, textAlign: "left" };

  return (
    <div style={{ pageBreakBefore: "always", minHeight: "280mm" }}>
      <Header subtitle="4. 해결책 · 연구 분야 · 실행 계획" />

      <div style={{ margin: "12px 32px 10px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          질서 자체를 위에서 설계할 수는 없다. 질서가 건강하게 작동할 조건을 지금 설계한다.
        </div>
        <div style={{ fontSize: 12.5, color: "#333", marginTop: 4, lineHeight: 1.65 }}>
          사후 교정이 불가능한 AI 시대, 태재는 이론·공론·솔루션의 세 축을 동시에 끌어올려 실행 가능한 모델로 제시한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* 왼쪽: 원리 + 연구 분야 */}
        <div>
          <SectionTitle>해결을 위한 3가지 원리</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 7, marginBottom: 14 }}>
            {[
              { n: "①", t: "개발자 입증 책임 (FDA¹⁰ 레짐)", d: "AI 시스템을 출시하려는 자가 안전을 스스로 증명하고 사전 승인을 받아야 한다. 위험을 가장 잘 아는 쪽이 개발자이므로 입증 책임도 그쪽에 귀속.", color: C.red },
              { n: "②", t: "과업 한정 한시적 위임 (WHO¹¹ 모델)", d: "목표 달성 시 자동 해체 프로토콜. 권한은 과업에 종속되며, 과업이 끝나면 권력 자동 소멸. 기능적 거버넌스.", color: C.amber },
              { n: "③", t: "역량·기여 기반 분배", d: "자본과 노동시간이 아닌 문제해결 역량·돌봄·창의·판단이 분배 기준. 공공 AI 인프라 사용료가 참여 기반 보상으로 환류. 플랫폼 독점 지대를 공동체로 재배태.", color: C.green },
            ].map(({ n, t, d, color }) => (
              <div key={t} style={{ padding: "8px 11px", borderLeft: `4px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 3 }}>{n} {t}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "#222" }}>{d}</div>
              </div>
            ))}
          </div>

          <SectionTitle>핵심 연구 분야</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 7, marginBottom: 14 }}>
            {[
              { t: "A. 새로운 경제·정치 질서의 이론 정립", d: "자본주의도 공산주의도 아닌 정보화 질서의 이론적 뼈대. 아담 스미스, 카를 마르크스, 장 자크 루소 등을 중심으로 AI 시대에 재해석. 공공 AI 인프라·참여 기반 분배의 논리 구축." },
              { t: "B. 기술 통제 체계 구상", d: "AI 자율살상무기(LAWS¹²)·AI·사이버 WMD¹³의 국제 레짐. 개발자 입증 책임 레짐과 사전 승인 체계 설계. 미중 대타협의 가능 경로 연구." },
              { t: "C. 인간 존엄과 공동체 재설계", d: "프로 계층 정체성 붕괴 대응. 직업=정체성 공식을 대체할 정체성 실현권. 가정·마을·도시 단위 재연결과 돌봄 인정 체계." },
              { t: "D. 빅테크 통제와 디지털 권리", d: "플랫폼 과두제 해체. 데이터 주권·알고리즘 투명성·디지털 권리 헌장. AI 인프라의 공공재화와 환경 영향 규제." },
            ].map(({ t, d }) => (
              <div key={t} style={{ padding: "7px 10px", border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.dark}`, background: "#fff" }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark, marginBottom: 3 }}>{t}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 일정 + 팀 + 중장기 */}
        <div>
          <SectionTitle>연구 목표 (2026)</SectionTitle>
          <div style={{ padding: "10px 14px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}`, marginBottom: 12 }}>
            <div style={{ fontSize: 12.5, lineHeight: 1.7, color: "#222" }}>
              디지털 기술이 가져오는 사회적 충격에 대응하는 구체적 해결책을 제시하고 실행 가능한 모델로 고도화한다.
              최종 산출물은 <strong style={{ color: C.amber }}>『디지털 위협 통제』 단행본 출판 + 공론화 (Q4 2026)</strong>.
            </div>
          </div>

          <SectionTitle>실행 일정</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14 }}>
            <thead>
              <tr>
                <th style={{ ...tlh, width: "18%" }}>시기</th>
                <th style={tlh}>실행 내용</th>
                <th style={{ ...tlh, width: "26%" }}>산출물</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["4~5월", "마스터플랜 v0.5.5 확정 · 연구 분야별 착수 · 국내외 자문단 섭외", "마스터플랜 확정본"],
                ["6~8월", "경제 질서 이론 · 폭력 민주화 통제 · 존엄·공동체 · 빅테크 규율 병렬 연구", "분야별 연구 초안 4종"],
                ["9~10월", "교차 검토 · 외부 전문가 피드백 · 단행본 편집", "종합 보고서"],
                ["11~12월", "『디지털 위협 통제』 출판 · 국내 공론화 · 국제 컨퍼런스", "단행본 + 정책 제안"],
              ] as const).map(([t, c, o]) => (
                <tr key={t}><td style={{ ...tls, fontWeight: 700, color: C.navy }}>{t}</td><td style={tls}>{c}</td><td style={tls}>{o}</td></tr>
              ))}
            </tbody>
          </table>

          <SectionTitle>팀 업무 분장</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 7, marginBottom: 12 }}>
            {[
              { name: "유호현 (팀장)", scope: "총괄 · 공공 AI 인프라 · 경제 질서 이론", focus: "연구 전체 방향 설정, 회장님·원장님과 소통, 공공 AI 인프라 및 역량 기반 분배 모델 구축, 미중 대타협 경로 연구, 단행본 편집 총괄." },
              { name: "윤준영", scope: "기술·국제 · AI 자율살상무기 + 미중 패권", focus: "LAWS·AI WMD 현황과 국제 레짐 선례 분석, 개발자 입증 책임 체계 설계, 기술 공급망 기반 수출통제 검토, Law Zero¹⁴, ARIA¹⁵ 등 기관과의 네트워킹 모색." },
              { name: "김수연", scope: "사회·공동체 · 인간 존엄 + 분배·노동", focus: "프로 계층 정체성 붕괴 대응, 직업=정체성 공식을 대체할 정체성 실현권, 6공동체 재연결, 돌봄·학습·창작 기여의 인정 구조 설계." },
              { name: "이규환", scope: "제도·환경 · 빅테크 통제 + 지속불가능성", focus: "플랫폼 과두제 규율, 데이터 주권·알고리즘 투명성 법제, AI 데이터센터 전력·용수·탄소 영향 분석, 디지털 권리 헌장 초안." },
            ].map(({ name, scope, focus }) => (
              <div key={name} style={{ padding: "8px 11px", borderTop: `2px solid ${C.line}`, background: C.bg }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark }}>{name}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: "#444" }}>{scope}</div>
                </div>
                <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{focus}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ padding: "9px 12px", borderTop: `3px solid ${C.accent}`, background: C.bg }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.accent, marginBottom: 4 }}>중기 (2027~2028)</div>
              {["연구 보고서 국제판 · 영문 번역", "국제 자문단 상설화 · 해외 학술지 게재", "국내 정책 파트너십 확장", "AI 거버넌스 국제 회의체 참여"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#333", marginBottom: 2 }}>— {t}</div>
              ))}
            </div>
            <div style={{ padding: "9px 12px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>장기 (2029~)</div>
              {["디지털 권리 헌장 초안 제시", "AI 통제 국제 협약 참여", "미중 합의 경로 제시 및 중재", "글로벌 AI 거버넌스 리더십"].map((t, i) => (
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
