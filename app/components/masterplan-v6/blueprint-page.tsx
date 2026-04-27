import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function BlueprintPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 디지털 사회의 새로운 사회계약" />

      <div style={{ padding: "14px 32px 12px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4, marginBottom: 6 }}>
          산업시대의 사회계약은 "기관에 소속되면 정체성·생계·인정을 보장한다"였다.
          AI 시대에 그 계약은 깨졌다. 우리는 사회계약을 다시 쓴다.
        </div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>
          새 계약은 두 면을 가진다 — <strong style={{ color: C.navy }}>강화된 개인이 공동체에 요구하는 것 (5.1)</strong>과
          <strong style={{ color: C.navy }}> 그 요구를 작동시키는 공동체의 구조 (5.2)</strong>.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        {/* 5.1 — 강화된 개인의 새 권리 */}
        <div>
          <div style={h3s}>5.1 강화된 개인의 새로운 권리 — 사회계약의 새 항목</div>
          <p style={{ ...ps, fontSize: 13.5 }}>
            산업시대 권리(직업 선택·계약·참정권)는 "조직 안에 소속된 개인"을 전제로 했다. 강화된 개인은 그 전제 밖에 선다. 새 권리는 다음 셋을 핵심으로 한다.
          </p>

          {[
            {
              n: "①",
              title: "정체성 실현권",
              tag: "직업이 정체성을 정의하는 시대의 종료",
              desc: "단일 직업에 자신을 귀속시키지 않고 다층 정체성을 살 권리. 시장 가치로 환원되지 않는 기여 — 돌봄·학습·창작·공동체 활동 — 가 사회적으로 인정받고, 그에 비례한 분배·존엄을 보장받을 권리. 직업이 흔들려도 정체성이 무너지지 않는 사회의 기반.",
            },
            {
              n: "②",
              title: "AI 인프라 평등 접근권",
              tag: "강화의 도구는 공공재",
              desc: "AI·연산·데이터는 강화의 핵심 도구다. 이것이 사적으로 독점되면 강화의 격차가 새 계급이 된다. 모든 시민이 공정한 가격으로 AI 인프라에 접근할 권리, 자기 데이터를 통제할 권리(데이터 주권), 그리고 핵심 모델의 거버넌스에 시민이 참여할 권리.",
            },
            {
              n: "③",
              title: "알고리즘 자기결정권",
              tag: "조작·감시·예측에서 자유로울 권리",
              desc: "행동 데이터로 사용자보다 사용자를 더 잘 아는 시스템이 동의를 우회해 판단을 조작할 때, 자율성은 형식적 권리로 전락한다. 알고리즘의 의사결정에 대한 설명 요구권, 자동화된 판단을 거부할 권리, 감시·예측 시스템에서 빠져나올 권리.",
            },
          ].map(({ n, title, tag, desc }) => (
            <div key={title} style={{ marginBottom: 10, padding: "10px 12px", borderLeft: `4px solid ${C.navy}`, background: C.bg }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>{n} {title}</div>
                <div style={{ fontSize: 12, color: "#666", fontStyle: "italic" }}>— {tag}</div>
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#222" }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* 5.2 — 권리를 작동시키는 공동체 구조 */}
        <div>
          <div style={h3s}>5.2 권리를 작동시키는 공동체 구조 — 거버넌스의 새 형태</div>
          <p style={{ ...ps, fontSize: 13.5 }}>
            권리는 그것을 보장할 구조 없이 글자에 머문다. 산업시대의 국가 일극 구조로는 새 권리를 보장할 수 없다. 새 구조는 다음 셋이 동시에 작동해야 한다.
          </p>

          {[
            {
              n: "①",
              title: "다층 거버넌스",
              tag: "국가 일극에서 가정·이웃·도시·국가·세계의 다층 분산으로",
              desc: "산업시대엔 국가가 안전·복지·인프라를 단독으로 떠맡았다. 디지털 시대엔 각 층위가 각자의 역할을 한다 — 가정과 이웃이 정체성·돌봄을, 도시가 생활 인프라와 직접 민주주의를, 국가가 권리 보호와 재분배를, 세계가 안전·기후·팬데믹을. 한 층위가 다른 층위를 대체하지 않고 보완한다.",
            },
            {
              n: "②",
              title: "개발자 안전 입증 (FDA 모델) + 한시·목적 한정 권력",
              tag: "만든 사람이 안전을 증명해야 내보낼 수 있다",
              desc: "AI·바이오 같은 비가역 위험 기술은 의약품과 같다 — 만든 사람이 출시 전에 안전을 입증하고 사전 승인을 받아야 시장에 내보낼 수 있다. 위험을 가장 잘 아는 쪽이 개발자이므로 입증 책임이 개발자에게 귀속된다. 동시에 위기 대응 권한은 위기 해소 시 자동 해체되어 영구화되지 않는다.",
            },
            {
              n: "③",
              title: "공공 인프라 + 글로벌 한시 협력",
              tag: "기반재는 공공으로, 국경 없는 위기는 한시 글로벌 거버넌스로",
              desc: "AI·연산·데이터·네트워크 같은 기반재는 사적 독점에서 공공재로 전환한다. 그리고 폭력 독점의 균열·기후·팬데믹처럼 어느 국가도 단독으로 통제할 수 없는 위기에 대해선 한시·목적 한정 글로벌 거버넌스(국제 AI 안전 기구, 디지털 권리 협약 등)가 작동한다 — 핵 군축이 우리에게 가르친 모델의 AI 적용.",
            },
          ].map(({ n, title, tag, desc }) => (
            <div key={title} style={{ marginBottom: 10, padding: "10px 12px", borderLeft: `4px solid ${C.accent}`, background: C.bg }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.accent }}>{n} {title}</div>
                <div style={{ fontSize: 12, color: "#666", fontStyle: "italic" }}>— {tag}</div>
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#222" }}>{desc}</div>
            </div>
          ))}

        </div>
      </div>

      {/* 5.3 — 새로운 사회계약으로 풀어내는 디지털 위협의 청사진 */}
      <div style={{ padding: "10px 32px 0" }}>
        <div style={h3s}>5.3 디지털 위협에 대한 새로운 사회계약의 작동 메커니즘</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: C.navy, color: "#fff" }}>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "8%" }}>긴급도</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "22%" }}>디지털 위협</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>핵심 처방 (5.1 권리 · 5.2 구조)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { lv: "진행 중", urg: true, threat: "폭력 독점의 균열", rx: "5.2-② FDA 모델 (개발자 안전 입증·사전 승인) + 5.2-③ 글로벌 한시 협력 (IASA·핵 군축 모델 AI 적용)" },
              { lv: "진행 중", urg: true, threat: "허위정보·플랫폼 과두", rx: "5.1-③ 알고리즘 자기결정권 + 5.2-③ AI 인프라 공공재화로 빅테크 독점 해체" },
              { lv: "임박", urg: false, threat: "자동화 실업 가속", rx: "5.1-① 정체성 실현권 — 시장 가치 너머의 기여(돌봄·창작)에 분배·존엄 보장" },
              { lv: "임박", urg: false, threat: "선거·공론장 AI 개입", rx: "5.1-③ 알고리즘 자기결정권 (설명 요구권·자동 판단 거부권) + 5.2-② FDA 모델로 고위험 시스템 사전 승인" },
              { lv: "중기", urg: false, threat: "AI 정렬 문제", rx: "5.2-② FDA 모델 (개발자 안전 입증·외부 검증) + 5.2-③ 글로벌 한시 협력으로 통제 권한 확보" },
              { lv: "중기", urg: false, threat: "미중 기술 패권 블록화", rx: "5.2-③ 글로벌 한시 협력 — 미·중·EU·글로벌 사우스 공동 의제로 디지털 거버넌스 끌어올리기" },
              { lv: "장기", urg: false, threat: "범용 AI 통제 불능", rx: "5.2-② FDA 모델 + 5.2-③ 글로벌 한시 협력으로 확산 이전 통제 레짐 확보" },
              { lv: "장기", urg: false, threat: "디지털 계급 고착·지속불가능성", rx: "5.1-② AI 인프라 평등 접근권 + 5.1-① 정체성 실현권 + 5.2-③ 공공 인프라로 환경·자원 사회화" },
            ].map((r, i) => (
              <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 11.5 }}>{r.lv}</td>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222" }}>{r.threat}</td>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", color: "#222", fontSize: 11.5 }}>{r.rx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
