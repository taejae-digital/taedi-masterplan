import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function ThreatsPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 디지털 기술의 이익과 위협 — 동전의 양면" />

      <div style={{ padding: "12px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          같은 강화가 이익과 위협을 동시에 만든다.
          AI는 지렛대를 길게 만들 뿐, 그 지렛대가 어느 방향으로 움직일지는 정해주지 않는다.
        </div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginTop: 4 }}>
          이익과 위협을 함께 보아야 길이 보인다. 위협만 보면 기술을 막게 되고, 이익만 보면 위협이 자란다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        <div>
          {/* 4.1 동전의 양면 */}
          <div style={h3s}>4.1 동전의 양면 — 같은 강화의 두 결과</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, marginBottom: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "26%" }}>강화된 능력</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, color: "#86efac" }}>＋ 이익</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, color: "#fca5a5" }}>− 위협</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["① 무기·도구 설계", "의료·재난 대응 가속, 신약 개발 단축", "생물·사이버·자율무기의 개인화"],
                ["② 정보·콘텐츠 생성", "다언어 번역, 지식 평등 접근", "허위정보·딥페이크·여론 조작"],
                ["③ 시장·플랫폼 운영", "1인 기업·시민 직접 참여(e-democracy)", "빅테크 봉건제, 국가 규제 무력화"],
                ["④ 노동·전문성 대체", "다층 정체성, 창의·기여 노동의 부상", "프로 계층 붕괴, 정체성 공백"],
                ["⑤ 국경·협업 초월", "글로벌 협력, 글로벌 사우스 도약 기회", "미중 패권 블록화, 조율 불가"],
                ["⑥ 자원·연산 집약", "기후 모델링, 에너지·물 사용 최적화", "데이터센터 전력·용수·탄소 부담"],
              ].map(([cap, plus, minus], i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy }}>{cap}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: C.green, fontSize: 11.5 }}>{plus}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: C.red, fontSize: 11.5 }}>{minus}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 4.2 위협이 더 시급한 이유 */}
          <div style={h3s}>4.2 그러나 위협이 더 시급하다 — 위협의 세 기준</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            이익과 위협이 양면이라면 왜 위협을 우선해 다루는가? 이익은 자라되 사회 안에서 흡수되지만, 위협은 다음 셋 중 하나라도 충족하면 사회를 무너뜨린다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {[
              { t: "비가역성", d: "확산되면 되돌릴 수 없는 결과" },
              { t: "확장성", d: "한 행위자가 불특정 다수에게 피해" },
              { t: "제도 무력화", d: "법·민주 절차를 우회·무력화" },
            ].map(({ t, d }) => (
              <div key={t} style={{ padding: "7px 9px", borderTop: `2px solid ${C.red}`, background: C.bg }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: C.red, marginBottom: 3 }}>{t}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* 4.3 위협 우선순위 */}
          <div style={h3s}>4.3 위협 우선순위 — 시급도별 + 3 기준 적합도</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 12, fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11, width: "11%" }}>긴급도</th>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11, width: "23%" }}>위협</th>
                <th style={{ padding: "4px 2px", textAlign: "center", fontSize: 10.5, width: "6%" }}>비가역</th>
                <th style={{ padding: "4px 2px", textAlign: "center", fontSize: 10.5, width: "6%" }}>확장</th>
                <th style={{ padding: "4px 2px", textAlign: "center", fontSize: 10.5, width: "8%" }}>제도무력</th>
                <th style={{ padding: "5px 6px", textAlign: "left", fontSize: 11 }}>핵심 메커니즘</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, t: "폭력 독점의 균열", c: ["●","●","◐"], m: "AI가 생물·사이버·자율무기 진입장벽을 개인 수준으로" },
                { lv: "진행 중", urg: true, t: "허위정보·플랫폼 과두", c: ["◐","●","●"], m: "생성형 AI 조작 + 빅테크 독점이 국가 규제 무력화" },
                { lv: "임박", urg: false, t: "자동화 실업 가속", c: ["●","●","◐"], m: "인지 노동 대체 속도 수십 년→수년 단위로 압축" },
                { lv: "임박", urg: false, t: "선거·공론장 AI 개입", c: ["◐","●","●"], m: "딥페이크·마이크로타게팅이 민주주의 절차 무력화" },
                { lv: "중기", urg: false, t: "AI 정렬 문제", c: ["●","●","●"], m: "능력 우월 시스템의 목표 불일치 시 통제 수단 부재" },
                { lv: "중기", urg: false, t: "미중 기술 패권 블록화", c: ["●","●","●"], m: "공급망 분리가 글로벌 AI 거버넌스 자체를 차단" },
                { lv: "장기", urg: false, t: "범용 AI 통제 불능", c: ["●","●","●"], m: "초지능 도래 시 비가역. 사전 설계가 마지막 기회" },
                { lv: "장기", urg: false, t: "디지털 계급·지속불가능성", c: ["●","●","◐"], m: "AI 격차의 생물학적 고착, 데이터센터의 환경 부담" },
              ] as const).map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 11 }}>{r.lv}</td>
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222" }}>{r.t}</td>
                  {r.c.map((dot, j) => (
                    <td key={j} style={{ padding: "4px 2px", borderBottom: "1px solid #eee", textAlign: "center", color: dot === "●" ? C.red : "#bbb", fontSize: 13, fontWeight: 800 }}>{dot}</td>
                  ))}
                  <td style={{ padding: "5px 6px", borderBottom: "1px solid #eee", color: "#444", fontSize: 11 }}>{r.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 10.5, color: C.light, marginTop: -6, marginBottom: 10 }}>
            <span style={{ color: C.red, fontWeight: 800 }}>●</span> 강하게 해당  ·  <span style={{ color: "#bbb", fontWeight: 800 }}>◐</span> 부분적 해당
          </div>

          {/* 4.4 통제 모델 */}
          <div style={h3s}>4.4 위협 통제의 3 모델 — 강화 차원별 통제 전략</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            강화의 차원이 다르면 통제 전략도 달라야 한다. 위험 영역의 <strong>범위 강화</strong>는 사전 승인으로, 위기 시 권력의 <strong>영향력 강화</strong>는 한시 위임으로, 부와 노동의 <strong>생산성 강화</strong>는 분배 재설계로 — 세 모델이 함께 작동해야 강화의 그림자가 통제된다.
          </p>
          {[
            {
              n: "①", t: "개발자 입증 책임 (FDA 레짐)",
              tag: "범위 강화 대상",
              d: "AI가 무기 설계·해킹·생물학 같은 위험 분야의 전문성까지 개인에게 이전할 때, 그 강화는 폭력 독점의 균열로 이어진다. 의약품이 임상시험을 통과해야 출시되듯, 고위험 AI는 개발자가 안전성을 입증하고 사전 승인을 받아야 한다. 위험을 가장 잘 아는 쪽이 개발자이므로 입증 책임도 그쪽에 귀속.",
              app: "폭력 독점의 균열 · AI 정렬 · 범용 AI 통제 불능",
            },
            {
              n: "②", t: "과업 한정 한시 위임 (WHO 모델)",
              tag: "영향력 강화 대상",
              d: "강화된 개인이 만드는 글로벌 위협(허위정보 캠페인·사이버 공격·팬데믹·기후 위기)에 대응하려면 일시적인 권한 집중이 필요하다. 그러나 그 권한이 영구화되면 새로운 권력 집중이 된다. WHO의 팬데믹 대응처럼, 위기 대응 권한은 명시적 범위·기간에서만 작동하고 위기 해소 시 자동 해체된다.",
              app: "허위정보·플랫폼 과두 · 미중 블록화 · 선거 AI 개입",
            },
            {
              n: "③", t: "역량·기여 기반 분배",
              tag: "생산성 강화 대상",
              d: "AI가 한 사람에게 부서급 생산성을 부여하면, 자본과 노동시간이 부의 분배 기준으로 작동하지 않는다. 1인 SaaS가 100명 회사 매출에 도달하는 시대에, 분배 기준 자체를 다시 정의해야 한다. 자본·노동시간이 아닌 문제해결·돌봄·창의·판단을 기준으로, AI가 만든 부의 일부를 공공 AI 인프라·디지털 배당으로 사회에 환류한다.",
              app: "자동화 실업 · 디지털 계급 고착 · 인간 존엄 위기",
            },
          ].map(({ n, t, tag, d, app }) => (
            <div key={t} style={{ marginBottom: 7, padding: "7px 9px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 3 }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy }}>{n} {t}</div>
                <div style={{ fontSize: 10.5, color: C.red, fontWeight: 700, padding: "1px 6px", border: `1px solid ${C.red}`, borderRadius: 3 }}>{tag}</div>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: "#222", marginBottom: 3 }}>{d}</div>
              <div style={{ fontSize: 11, color: C.light }}>적용 위협: <strong style={{ color: "#444" }}>{app}</strong></div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
