import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function ThreatsPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 디지털 기술이 초래할 위협" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          AI는 인간의 지렛대를 길게 만든다. 같은 힘으로 훨씬 큰 것을 움직일 수 있다.
          문제는 그 지렛대가 선한 방향으로만 쓰이지 않는다는 점이다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        <div>
          {/* 4.1 위협의 기준 */}
          <div style={h3s}>4.1 위협의 기준</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            모든 기술적 위험이 위협은 아니다. 본 연구에서 '위협'으로 분류하는 기준은 세 가지다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginBottom: 14 }}>
            {[
              { t: "비가역성", d: "일단 확산되면 되돌리기 어렵거나 불가능한 결과를 낳는가" },
              { t: "확장성", d: "한 행위자의 행동이 불특정 다수에게 피해를 주는 구조인가" },
              { t: "제도 무력화", d: "기존 법·규범·민주주의 절차를 우회하거나 무력화하는가" },
            ].map(({ t, d }) => (
              <div key={t} style={{ padding: "8px 10px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: 11, lineHeight: 1.55, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>

          {/* 4.2 위협 기술 우선순위 */}
          <div style={h3s}>4.2 위협 기술 우선순위</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "12%" }}>긴급도</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "28%" }}>위협</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>핵심 메커니즘</th>
              </tr>
            </thead>
            <tbody>
              {[
                { level: "진행 중", isUrgent: true, threat: "폭력 독점의 균열", mech: "AI가 생물·사이버·자율무기 진입장벽을 개인 수준으로 낮춤. 비가역적 공멸 가능성." },
                { level: "진행 중", isUrgent: true, threat: "허위정보·플랫폼 과두", mech: "생성형 AI의 조작이 사실 합의 기반 침식. 빅테크 독점이 국가 규제를 무력화." },
                { level: "임박", isUrgent: false, threat: "자동화 실업 가속", mech: "인지 노동 대체 속도가 수십 년→수년 단위로 압축. 새 직종 창출이 따라잡지 못함." },
                { level: "임박", isUrgent: false, threat: "선거·공론장 AI 개입", mech: "딥페이크·마이크로타게팅이 선거 인식 기반을 조작. 민주주의 절차 무력화." },
                { level: "중기", isUrgent: false, threat: "AI 정렬 문제", mech: "능력이 우월한 시스템이 인간 가치와 다른 목표를 추구할 때 통제 수단 부재." },
                { level: "중기", isUrgent: false, threat: "미중 기술 패권 블록화", mech: "기술 공급망 분리가 글로벌 AI 거버넌스 자체를 불가능하게 만듦." },
                { level: "장기", isUrgent: false, threat: "범용 AI 통제 불능", mech: "초지능 도래 시 되돌릴 수 없음. 선제적 통제 레짐 설계가 마지막 기회." },
                { level: "장기", isUrgent: false, threat: "디지털 계급 고착·지속불가능성", mech: "AI 격차가 생물학적 수명 격차까지 수반. 데이터센터 전력·탄소 부담이 기후 목표와 충돌." },
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.isUrgent ? C.red : C.light, fontSize: 11 }}>{r.level}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 600, color: "#222" }}>{r.threat}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#444", fontSize: 11 }}>{r.mech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          {/* 4.3 위험 시나리오 (석학) */}
          <div style={h3s}>4.3 위험 시나리오 — 석학들의 경고</div>
          {[
            {
              name: "닉 보스트롬",
              work: "『슈퍼인텔리전스』 2014",
              scenario: "목표 달성에 최적화된 초지능 AI는 인간의 가치와 무관하게 행동할 수 있다. 종이클립 최대화 문제 — AI에게 종이클립을 최대한 만들라는 목표를 주면, 지구의 모든 물질을 종이클립으로 바꾸려 할 수 있다.",
            },
            {
              name: "스튜어트 러셀",
              work: "『인간 호환: AI와 통제의 문제』 2019",
              scenario: "AI의 표준 설계 모델(인간이 지정한 목표 추구)은 본질적으로 위험하다. 인간이 무엇을 원하는지 AI가 확신하지 못하도록 설계해야 한다. 불확실성이 내재된 AI만이 통제 가능하다.",
            },
            {
              name: "요슈아 벤지오",
              work: "Law Zero 설립 2024",
              scenario: "AI 안전 연구는 핵 개발 이후의 물리학처럼 긴급한 전환점에 있다. '과학자 AI' — 인간을 조작하지 않고 돕는 것만 할 수 있는 AI — 설계가 확산 이전의 마지막 기회다.",
            },
            {
              name: "유발 하라리",
              work: "『호모 데우스』 2015 / 『넥서스』 2024",
              scenario: "알고리즘이 인간보다 인간을 더 잘 알 때, 자유의지와 민주주의의 전제가 붕괴한다. AI는 단순한 도구가 아니라 역사상 최초로 스스로 결정을 내리는 행위자다.",
            },
          ].map((s) => (
            <div key={s.name} style={{ marginBottom: 10, padding: "9px 11px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy }}>{s.name}</div>
                <div style={{ fontSize: 10.5, color: C.light }}>{s.work}</div>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "#222" }}>{s.scenario}</div>
            </div>
          ))}

          {/* 4.4 기술 통제 3가지 모델 */}
          <div style={h3s}>4.4 기술 통제를 위한 3가지 모델</div>
          {[
            {
              n: "①", t: "개발자 입증 책임 (FDA 레짐)",
              d: "AI 시스템을 출시하려는 자가 안전을 스스로 증명하고 사전 승인을 받아야 한다. 위험을 가장 잘 아는 쪽이 개발자이므로 입증 책임도 그쪽에 귀속. 의약품이 임상시험을 통과해야 하듯, AI도 사전 검증이 필수다.",
            },
            {
              n: "②", t: "과업 한정 한시적 위임 (WHO 모델)",
              d: "목표 달성 시 자동 해체 프로토콜. 권한은 과업에 종속되며, 과업이 끝나면 권력 자동 소멸. 팬데믹 대응처럼 위기의 범위와 기간을 명확히 한정하고, 위기 해소 후 즉시 권한을 환수한다.",
            },
            {
              n: "③", t: "역량·기여 기반 분배",
              d: "자본과 노동시간이 아닌 문제해결 역량·돌봄·창의·판단이 분배 기준. 공공 AI 인프라 사용료가 참여 기반 보상으로 환류. 플랫폼 독점 지대를 공동체로 재배태하여 자동화의 과실을 사회에 공유한다.",
            },
          ].map(({ n, t, d }) => (
            <div key={t} style={{ marginBottom: 8, padding: "8px 10px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>{n} {t}</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
