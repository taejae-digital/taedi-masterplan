import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="6. 연구 계획" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          사후 교정이 불가능한 AI 시대, 태재는 이론·공론·솔루션의 세 축을 동시에 끌어올려 실행 가능한 모델로 제시한다.
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
              최종 산출물은 <strong>『디지털 위협 통제』 단행본 출판 + 국내외 공론화 (Q4 2026)</strong>.
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
            { letter: "A", t: "새로운 경제·정치 질서의 이론 정립", d: "스미스·마르크스·루소·롤스·하버마스·폴라니·케인스를 AI 시대에 재해석. 공공 AI 인프라·참여 기반 분배의 논리 구축." },
            { letter: "B", t: "기술 통제 체계 구상", d: "AI 자율살상무기(LAWS)·AI·사이버 WMD의 국제 레짐. 개발자 입증 책임 레짐과 사전 승인 체계 설계. 미중 대타협의 가능 경로." },
            { letter: "C", t: "인간 존엄과 공동체 재설계", d: "프로 계층 정체성 붕괴 대응. 직업=정체성 공식을 대체할 정체성 실현권. 가정·마을·도시 단위 재연결과 돌봄 인정 체계." },
            { letter: "D", t: "빅테크 통제와 디지털 권리", d: "플랫폼 과두제 해체. 데이터 주권·알고리즘 투명성·디지털 권리 헌장. AI 인프라의 공공재화와 환경 영향 규제." },
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
              role: "총괄 · 공공 AI 인프라 · 경제 질서 이론",
              detail: "연구 전체 방향 설정, 회장님·원장님과 소통, 공공 AI 인프라 및 역량 기반 분배 모델 구축, 미중 대타협 경로 연구, 단행본 편집 총괄.",
            },
            {
              name: "윤준영",
              role: "기술·국제 · AI 자율살상무기 + 미중 패권",
              detail: "LAWS·AI WMD 현황과 국제 레짐 선례 분석, 개발자 입증 책임 체계 설계, 기술 공급망 기반 수출통제 검토, Law Zero·ARIA 등 기관 네트워킹.",
            },
            {
              name: "김수연",
              role: "사회·공동체 · 인간 존엄 + 분배·노동",
              detail: "프로 계층 정체성 붕괴 대응, 직업=정체성 공식을 대체할 정체성 실현권, 공동체 재연결, 돌봄·학습·창작 기여의 인정 구조 설계.",
            },
            {
              name: "이규환",
              role: "제도·환경 · 빅테크 통제 + 지속불가능성",
              detail: "플랫폼 과두제 규율, 데이터 주권·알고리즘 투명성 법제, AI 데이터센터 전력·용수·탄소 영향 분석, 디지털 권리 헌장 초안.",
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
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 12, width: "18%" }}>시기</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 12 }}>실행 내용</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 12, width: "28%" }}>산출물</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["4~5월", "마스터플랜 v0.6.0 확정 · 연구 분야별 착수 · 국내외 자문단 섭외", "마스터플랜 확정본"],
                ["6~8월", "경제 질서 이론 · 폭력 민주화 통제 · 존엄·공동체 · 빅테크 규율 병렬 연구", "분야별 연구 초안 4종"],
                ["9~10월", "교차 검토 · 외부 전문가 피드백 · 단행본 편집", "종합 보고서"],
                ["11~12월", "『디지털 위협 통제』 출판 · 국내 공론화 · 국제 컨퍼런스", "단행본 + 정책 제안"],
              ].map(([period, content, output], i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy }}>{period}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{content}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 600, color: "#222" }}>{output}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { t: "중기 (2027~2028)", items: ["연구 보고서 국제판·영문 번역", "국제 자문단 상설화·해외 학술지 게재", "국내 정책 파트너십 확장", "AI 거버넌스 국제 회의체 참여"] },
              { t: "장기 (2029~)", items: ["디지털 권리 헌장 초안 제시", "AI 통제 국제 협약 참여", "미중 합의 경로 제시 및 중재", "글로벌 AI 거버넌스 리더십"] },
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
