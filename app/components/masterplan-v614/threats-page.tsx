import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function ThreatsPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 개인 강화의 위협 — 진단, 우선순위, 통제" />

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1, marginTop: 14 }}>
        <div>
          {/* 4.1 동전의 양면 */}
          <div style={h3s}>4.1 동전의 양면 — 5차원 강화의 두 결과</div>
          <p style={{ ...ps, fontSize: 12.5, marginBottom: 8 }}>
            같은 강화가 이익과 위협을 동시에 만든다. AI는 지렛대를 길게 만들 뿐, 그 지렛대가 어느 방향으로 움직일지는 정해주지 않는다.
            강화의 차원마다 위협이 다르고, 통제 전략도 달라야 한다. 어떤 위협이 긴급하고, 어떻게 통제할 것인가를 차례로 살핀다.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 8 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "30%" }}>강화 차원</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, color: "#86efac" }}>＋ 이익</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, color: "#fca5a5" }}>− 위협</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: "판단력", desc: "AI가 판단·추론·전문성을 개인에게 이전", plus: "의료·법률·재무 접근 민주화, 전문 서비스 비용 하락", minus: "폭력 독점의 균열 · AI 정렬 문제 · 범용 AI 통제 불능" },
                { dim: "생산성", desc: "한 사람이 과거 부서 하나의 산출에 도달", plus: "1인 기업·SaaS, 소규모 혁신 가속", minus: "자동화 실업 가속 · 디지털 계급·지속불가능성" },
                { dim: "범위", desc: "한 사람이 여러 분야를 동시에 운용", plus: "글로벌 협력, 분야 간 혁신", minus: "미중 기술 패권 블록화" },
                { dim: "접근성", desc: "진입장벽 하락 — 학위·자격증 없이도", plus: "지식 평등, 글로벌 사우스 도약", minus: "허위정보·플랫폼 과두" },
                { dim: "영향력", desc: "도달 범위 확장 — 개인이 매스미디어급", plus: "시민 직접 참여, e-democracy", minus: "선거·공론장 AI 개입" },
              ].map(({ dim, desc, plus, minus }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800, color: C.navy, fontSize: 12.5 }}>{dim}</div>
                    <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4 }}>{desc}</div>
                  </td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: C.green, fontSize: 11, verticalAlign: "top" }}>{plus}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: C.red, fontSize: 11, verticalAlign: "top" }}>{minus}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "7px 10px", background: "#fff8e1", borderLeft: `3px solid #f59e0b` }}>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: "#92400e", marginBottom: 2 }}>강화의 전제 조건 — AI 인프라의 환경 부담</div>
            <div style={{ fontSize: 11, lineHeight: 1.5, color: "#333" }}>
              개인 강화를 구동하는 AI 인프라(데이터센터)의 전력·용수·탄소 부담은 5차원 강화의 역효과가 아니라, 강화 자체가 전제하는 구조적 비용이다. 기후 목표와의 충돌이 심화되고 있다.
            </div>
          </div>
        </div>

        <div>
          {/* 4.2 위협 우선순위 */}
          <div style={h3s}>4.2 위협 우선순위 — 긴급도별</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 10, fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11, width: "14%" }}>긴급도</th>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11, width: "30%" }}>위협</th>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11 }}>핵심 메커니즘</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, t: "폭력 독점의 균열", m: "AI가 생물·사이버·자율무기 진입장벽을 개인 수준으로" },
                { lv: "진행 중", urg: true, t: "허위정보·플랫폼 과두", m: "생성형 AI 조작 + 빅테크 독점이 국가 규제 무력화" },
                { lv: "임박", urg: false, t: "자동화 실업 가속", m: "인지 노동 대체 속도 수십 년→수년 단위로 압축" },
                { lv: "임박", urg: false, t: "선거·공론장 AI 개입", m: "딥페이크·마이크로타게팅이 민주주의 절차 무력화" },
                { lv: "중기", urg: false, t: "AI 정렬 문제", m: "능력 우월 시스템의 목표 불일치 시 통제 수단 부재" },
                { lv: "중기", urg: false, t: "미중 기술 패권 블록화", m: "공급망 분리가 글로벌 AI 거버넌스 자체를 차단" },
                { lv: "장기", urg: false, t: "범용 AI 통제 불능", m: "초지능 도래 시 비가역. 사전 설계가 마지막 기회" },
                { lv: "장기", urg: false, t: "디지털 계급·지속불가능성", m: "AI 격차의 생물학적 고착, 데이터센터의 환경 부담" },
              ] as const).map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 11 }}>{r.lv}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222" }}>{r.t}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: "#444", fontSize: 11 }}>{r.m}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 4.3 통제 5 모델 */}
          <div style={h3s}>4.3 위협 통제의 5 모델 — 강화 차원별 통제 전략</div>
          {[
            {
              n: "①", t: "개발자 입증 책임 (FDA 레짐)",
              tag: "판단력 강화 대상",
              d: "고위험 AI 기능은 개발자가 안전성을 입증하고 사전 승인을 받아야 한다. 위험을 가장 잘 아는 쪽이 개발자이므로 입증 책임도 그쪽에 귀속.",
              app: "폭력 독점의 균열 · AI 정렬 문제 · 범용 AI 통제 불능",
            },
            {
              n: "②", t: "역량·기여 기반 분배",
              tag: "생산성 강화 대상",
              d: "AI가 만든 부의 일부를 공공 AI 인프라·디지털 배당으로 환류. 자본·노동시간이 아닌 문제해결·돌봄·창의·판단을 분배 기준으로.",
              app: "자동화 실업 가속 · 디지털 계급·지속불가능성",
            },
            {
              n: "③", t: "과업 한정 한시 위임 (WHO 모델)",
              tag: "범위 강화 대상",
              d: "글로벌 위협 대응 권한은 명시 범위·기간에서만 작동하고 위기 해소 시 자동 해체. 권한이 영구화되는 것을 구조적으로 차단.",
              app: "미중 기술 패권 블록화 · 선거·공론장 AI 개입",
            },
            {
              n: "④", t: "플랫폼 공공성·데이터 권리",
              tag: "접근성 강화 대상",
              d: "플랫폼 독점 규제와 데이터 소유권 개인 귀속. 개인이 생산한 데이터의 이익이 개인에게 환류되는 구조 설계.",
              app: "허위정보·플랫폼 과두",
            },
            {
              n: "⑤", t: "공론장 보호",
              tag: "영향력 강화 대상",
              d: "알고리즘 투명성 의무화, 선거 AI 활용 규제, 왜곡 없는 숙의 공론장 설계. 강화된 영향력이 민주주의를 잠식하지 않도록.",
              app: "선거·공론장 AI 개입",
            },
          ].map(({ n, t, tag, d, app }) => (
            <div key={t} style={{ marginBottom: 5, padding: "5px 9px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{n} {t}</div>
                <div style={{ fontSize: 10, color: C.red, fontWeight: 700, padding: "1px 5px", border: `1px solid ${C.red}`, borderRadius: 3 }}>{tag}</div>
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.5, color: "#222", marginBottom: 2 }}>{d}</div>
              <div style={{ fontSize: 10.5, color: C.light }}>적용 위협: <strong style={{ color: "#444" }}>{app}</strong></div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
