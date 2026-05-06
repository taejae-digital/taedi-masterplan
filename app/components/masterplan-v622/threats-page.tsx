import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";

export function ThreatsPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 개인 강화의 위협 — 진단, 우선순위, 통제" />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}`, marginBottom: 10 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          강화된 개인이 공동체에 가져오는 위협은 영역마다 다르다. 진단·우선순위·통제의 순으로 살핀다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>

        {/* 4.1 통합 표: 강화 영역 / 이익 / 위협 / 통제 모델 */}
        <div>
          <div style={h3s}>4.1 동전의 양면 — 강화 영역별 이익·위협·통제</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "14%" }}>강화 영역</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "20%", color: "#86efac" }}>＋ 이익</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "21%", color: "#fca5a5" }}>− 위협</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>통제 모델</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력", desc: "AI가 판단·추론·전문성을 개인에게 이전",
                  plus: "의료·법률·재무 접근 민주화, 전문 서비스 비용 하락",
                  minus: "폭력 독점의 균열 · AI 정렬 문제 · 범용 AI 통제 불능",
                  ctrl: "① 개발자 입증 책임 (FDA 레짐) — 배포 전 안전성을 개발자가 입증하고 사전 승인을 받아야 한다. 사고 후 규제가 아닌 출시 전 검증을 의무화한다.",
                },
                {
                  dim: "생산성", desc: "한 사람이 과거 부서 하나의 산출에 도달",
                  plus: "1인 기업·SaaS, 소규모 혁신 가속",
                  minus: "자동화 실업 가속 · 디지털 계급·지속불가능성",
                  ctrl: "② 역량·기여 기반 분배 — 자동화 이익을 AI세로 환수해 공공 AI 인프라·디지털 배당 재원으로 활용한다. 문제해결·돌봄·창의 기여에 분배 기준을 적용한다.",
                },
                {
                  dim: "범위", desc: "한 사람이 여러 분야를 동시에 운용",
                  plus: "글로벌 협력, 분야 간 혁신",
                  minus: "미중 기술 패권 블록화",
                  ctrl: "③ 과업 한정 한시 위임 (WHO 모델) — AI 거버넌스 권한은 위기 기간에만 발동되고 해소 시 자동 종료한다. 권한 남용을 구조적으로 방지한다.",
                },
                {
                  dim: "접근성", desc: "진입장벽 하락 — 학위·자격증 없이도",
                  plus: "지식 평등, 글로벌 사우스 도약",
                  minus: "허위정보·플랫폼 과두",
                  ctrl: "④ 플랫폼 공공성·데이터 권리 — 데이터 이동권 보장과 알고리즘 감사를 의무화한다. AI 모델 수익 일부를 데이터 생산자에게 귀속하는 구조를 법제화한다.",
                },
                {
                  dim: "영향력", desc: "도달 범위 확장 — 개인이 매스미디어급",
                  plus: "시민 직접 참여, e-democracy",
                  minus: "선거·공론장 AI 개입",
                  ctrl: "⑤ 공론장 보호 — AI 생성 콘텐츠 출처 표시와 마이크로타게팅을 규제한다. 알고리즘이 여론을 왜곡하지 않도록 공론장의 중립성을 보호한다.",
                },
              ].map(({ dim, desc, plus, minus, ctrl }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800, color: C.navy, fontSize: 12.5 }}>{dim}</div>
                    <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4 }}>{desc}</div>
                  </td>
                  <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", color: C.green, fontSize: 11.5, verticalAlign: "top" }}>{plus}</td>
                  <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", color: C.red, fontSize: 11.5, verticalAlign: "top" }}>{minus}</td>
                  <td style={{ padding: "7px 8px", borderBottom: "1px solid #eee", color: "#222", fontSize: 11.5, verticalAlign: "top" }}>{ctrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 인프라 박스 */}
        <div style={{ padding: "8px 12px", background: "#fff8e1", borderLeft: `4px solid #f59e0b` }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#92400e", marginBottom: 3 }}>강화의 전제 조건 — AI 인프라의 환경 부담</div>
          <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>
            개인 강화를 구동하는 AI 인프라(데이터센터)의 전력·용수·탄소 부담은 5가지 강화의 역효과가 아니라, 강화 자체가 전제하는 구조적 비용이다. 기후 목표와의 충돌이 심화되고 있다.
          </div>
        </div>

        {/* 4.2 위협 우선순위: 긴급도 / 위협 / 긴급도 근거 / 핵심 메커니즘 */}
        <div>
          <div style={h3s}>4.2 위협 우선순위 — 긴급도별</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "8%" }}>긴급도</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "17%" }}>위협</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "38%" }}>긴급도 근거</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>핵심 메커니즘</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, t: "폭력 독점의 균열", reason: "민간 드론·사이버 공격 이미 현실화. AI로 생물무기 설계 진입장벽 실시간 하락 중", m: "AI가 생물·사이버·자율무기 진입장벽을 개인 수준으로 낮춤" },
                { lv: "진행 중", urg: true, t: "허위정보·플랫폼 과두", reason: "AI 딥페이크·허위정보 선거 개입 사례 이미 다수 발생. 빅테크 독점 심화 진행 중", m: "생성형 AI 조작 + 빅테크 독점이 국가 규제 무력화" },
                { lv: "임박", urg: false, t: "자동화 실업 가속", reason: "코딩·법률·회계 자동화 급가속. 대규모 화이트칼라 직종 전환 3~5년 내 임박", m: "인지 노동 대체 속도 수십 년→수년 단위로 압축" },
                { lv: "임박", urg: false, t: "선거·공론장 AI 개입", reason: "주요국 선거 AI 개입 시도 급증. 마이크로타게팅 규제 공백 심각", m: "딥페이크·마이크로타게팅이 민주주의 절차 무력화" },
                { lv: "중기", urg: false, t: "AI 정렬 문제", reason: "현세대 AI 제한적이나 능력 증가 속도 고려 시 5~10년 내 핵심 과제", m: "능력 우월 시스템의 목표 불일치 시 통제 수단 부재" },
                { lv: "중기", urg: false, t: "미중 기술 패권 블록화", reason: "AI 칩·모델 수출 규제 이미 시작. 고착까지 수년 내", m: "공급망 분리가 글로벌 AI 거버넌스 자체를 차단" },
                { lv: "장기", urg: false, t: "범용 AI 통제 불능", reason: "도래 시점 불확실하나 비가역성 극히 높아 사전 설계가 마지막 기회", m: "초지능 도래 시 비가역. 사전 설계가 마지막 기회" },
                { lv: "장기", urg: false, t: "디지털 계급·지속불가능성", reason: "현재 격차는 교정 가능. 방치 시 생물학적 고착 위험", m: "AI 격차의 생물학적 고착, 데이터센터의 환경 부담" },
              ] as const).map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 11.5 }}>{r.lv}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222", fontSize: 12 }}>{r.t}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#444", fontSize: 11.5 }}>{r.reason}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#444", fontSize: 11.5 }}>{r.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  );
}
