import { C } from "../masterplan-v700/constants";
import { Header, Footer, h3s } from "../masterplan-v700/shared";

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version="v0.7.9" />

      {/* 상단 논리 흐름 박스 */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "7px 32px", borderBottom: `2px solid ${C.navy}`, gap: 0 }}>
        <div style={{ flex: 1, padding: "7px 12px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.accent, marginBottom: 2, letterSpacing: 0.5 }}>기존 경제·정치 질서</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>산업사회의 경제 질서는 노동=소득 원리로, 정치 질서는 대의제와 전문가 위임으로 작동해왔다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>임금노동이 소득과 사회적 지위를 결정했고, 시민은 선거로 대표를 선출해 공적 판단을 위임했다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 12px", background: "#fff5f5", borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.red, marginBottom: 2, letterSpacing: 0.5 }}>전제의 붕괴</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.red, lineHeight: 1.3, marginBottom: 3 }}>디지털 강화가 그 전제를 무너뜨린다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>AI는 개인의 판단력·실행력·파급력을 급격히 강화한다. 누구나 전문가 수준의 판단이 가능해지고, 혼자서 조직급 산출을 내며, 개인이 대중에게 직접 영향을 미친다. 노동=소득 원리와 전문가 위임 구조가 동시에 흔들린다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 12px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2, letterSpacing: 0.5 }}>새 사회계약</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>강화된 개인을 위한 새 권리와 새 질서가 필요하다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>기존 질서는 이 변화를 담지 못한다. AI 인프라 평등 접근권·정체성 실현권·알고리즘 자기결정권이라는 새 권리와, 이를 작동시킬 새 질서가 요구된다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 12px", background: C.bg }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2, letterSpacing: 0.5 }}>우리의 연구</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>이것을 현실화한다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>위협 진단, 통제 모델, 전환 경로를 연구하고 정책·공론장·국제 협력으로 끌어낸다.</div>
        </div>
      </div>

      <div style={{ padding: "4px 32px 0", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 표 ① — 진단 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>① 진단 — 디지털 강화가 기존 정치·경제 질서의 전제를 무너뜨린다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "18%" }} />
              <col style={{ width: "41%" }} />
              <col style={{ width: "41%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>정치 질서 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>경제 질서 타격</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력", desc: "AI가 전문 지식을 누구에게나 이전",
                  pol: <>전문가·관료 권위 흔들림, 위임 정당성 약화. <span style={{ color: C.red, fontWeight: 700 }}>학위·자격증 기반 엘리트 합의 붕괴</span>.</>,
                  eco: <>지식 노동의 비용이 0에 수렴, <span style={{ color: C.red, fontWeight: 700 }}>전문직 소득 공식 붕괴</span>. AI 플랫폼 독점이 새 봉건제로.</>,
                },
                {
                  dim: "실행력", desc: "개인이 혼자서 조직급 산출 가능",
                  pol: <>고용 기반 복지 체계 위기. <span style={{ color: C.red, fontWeight: 700 }}>노동=소득 연결이 끊기면 기존 사회보험·복지 구조가 흔들린다</span>.</>,
                  eco: <><span style={{ color: C.red, fontWeight: 700 }}>노동시간과 소득의 연결 붕괴</span>, 자동화 이익이 데이터 독점자에 집중. 1인 다중직업 시대로.</>,
                },
                {
                  dim: "파급력", desc: "개인이 대중 매체급 영향력 확보",
                  pol: <>AI 마이크로타게팅이 공론장을 분열시키고 <span style={{ color: C.red, fontWeight: 700 }}>여론 조작이 쉬워진다</span>. 빅테크가 민주적 의사결정을 잠식.</>,
                  eco: <>기존 광고·미디어 경제 붕괴, AI 인프라 <span style={{ color: C.red, fontWeight: 700 }}>수익이 소수에 집중</span>.</>,
                },
              ].map(({ dim, desc, pol, eco }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 800, color: C.navy, fontSize: 13.5 }}>{dim}</div>
                    <div style={{ fontSize: 11.5, color: "#666", lineHeight: 1.4 }}>{desc}</div>
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{pol}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{eco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 표 ② — 영역별 통제 모델 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>② 영역별 통제 모델 — 강화가 파괴로 흐르지 않게 하는 구조</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "30%" }} />
              <col style={{ width: "58%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>− 위협</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>★ 통제 모델</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력",
                  neg: "폭력 독점 균열 · AI 정렬 실패 · 범용 AI 통제 불능 · 빅테크 플랫폼 과두",
                  ctrl: "FDA 모델 + 플랫폼 공공성",
                  ctrlDesc: "배포 전 개발자가 안전성을 입증하고 사전 승인을 받게 한다. AI 인프라 독점이 새 봉건제로 굳지 않도록 데이터 이동권·알고리즘 감사를 의무화한다.",
                },
                {
                  dim: "실행력",
                  neg: "직업 재편 충격 · 자동화 이익 집중 · 미·중 기술 패권 블록화",
                  ctrl: "재편 충격 완충 + 한시 위임 거버넌스",
                  ctrlDesc: "전환 인프라로 재편기 소외 계층을 지원하고, AI 이익을 환수해 디지털 배당·공공 인프라로 환류한다. 글로벌 거버넌스 권한은 위기 기간에만 발동되고 해소 시 자동 종료한다.",
                },
                {
                  dim: "파급력",
                  neg: "선거·공론장 AI 개입 · 허위정보 확산 · 마이크로타게팅",
                  ctrl: "공론장 보호 + 알고리즘 자기결정권",
                  ctrlDesc: "AI 생성 콘텐츠 출처 표시·마이크로타게팅을 규제해 공론장 중립성을 보호한다. 자동화된 결정에 대해 설명 요구권과 거부권을 보장한다.",
                },
              ].map(({ dim, neg, ctrl, ctrlDesc }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5, fontWeight: 800, color: C.navy, fontSize: 13 }}>{dim}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: C.red, fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>{neg}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#222", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 800, color: C.navy, marginBottom: 2 }}>{ctrl}</div>
                    <div>{ctrlDesc}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 표 ③ — 긴급도별 위협과 처방 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>③ 긴급도별 위협과 처방</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "9%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "58%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>긴급도</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>위협</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 사회계약의 처방 — 권리·질서</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, area: "실행력", threat: "국가 폭력 독점의 균열", rx: "FDA 모델 (AI 무기·자율 살상 시스템 사전 승인) + 국제 한시 협력 (핵 군축처럼 AI 군비 통제 체제 구축)" },
                { lv: "진행 중", urg: true, area: "파급력", threat: "AI 공론장 개입·플랫폼 독점", rx: "알고리즘 자기결정권 (출처 표시·타게팅 규제·설명 요구권) + FDA 모델로 선거 관련 고위험 시스템 사전 승인 + AI 인프라 공공재화로 빅테크 독점 해체" },
                { lv: "진행 중", urg: true, area: "판단력·파급력", threat: "미·중 기술 패권 블록화", rx: "글로벌 한시 협력 — 미·중·EU·개발도상국 공동 의제로 디지털 거버넌스 국제화" },
                { lv: "임박", urg: false, area: "실행력", threat: "직업 대규모 재편의 충격", rx: "정체성 실현권 + 전환 지원 인프라 구축, AI 이익 환수·배당, 돌봄·창작·학습에 분배·존엄 보장" },
                { lv: "중기→장기", urg: false, area: "판단력", threat: "AI 정렬·통제 실패", rx: "FDA 모델 (개발자 안전 입증·외부 검증 의무화) + 글로벌 한시 협력으로 확산 이전 국제 통제 체제 확보" },
                { lv: "장기", urg: false, area: "판단력·실행력", threat: "디지털 계급 고착", rx: "AI 인프라 평등 접근권 + 정체성 실현권 + 공공 인프라로 자원·기회 불평등 해소" },
              ] as const).map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 12, lineHeight: 1.5 }}>{r.lv}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", color: C.accent, fontWeight: 700, fontSize: 11.5, lineHeight: 1.5 }}>{r.area}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222", fontSize: 12, lineHeight: 1.5 }}>{r.threat}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", color: "#222", fontSize: 12, lineHeight: 1.5 }}>{r.rx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 표 ④ — 강화된 개인의 새 권리와 공동체 구조 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>④ 강화된 개인의 새 권리와 권리를 작동시키는 공동체 구조</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 4, padding: "8px 14px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>새 권리 — 강화된 개인이 요구하는 것</div>
              {[
                ["① 정체성 실현권", "직업 하나에 묶이지 않을 권리. 돌봄·창작·학습 등 시장 바깥의 기여에도 소득과 존엄이 인정되어야 한다. AI 이익 환수·디지털 배당으로 실현."],
                ["② AI 인프라 평등 접근권", "AI·연산·데이터는 공공재여야 한다. 소수 기업의 독점은 새로운 계급 고착을 낳는다. 데이터 주권과 이동권 보장 필수."],
                ["③ 알고리즘 자기결정권", "AI의 판단에 설명을 요구하고 거부할 수 있는 권리. 정치 광고·채용 심사·신용 평가 등 자동화된 결정에서 탈출할 수 있어야 한다."],
              ].map(([t, d]) => (
                <div key={t} style={{ display: "grid", gridTemplateColumns: "128px 1fr", gap: 6, marginBottom: 5 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: "#333", lineHeight: 1.45 }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.navy}`, borderRadius: 4, padding: "8px 14px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>새 질서 — 권리를 작동시키는 것</div>
              {[
                ["① 다층 거버넌스", "가정·이웃·도시·국가·세계가 각 층위에서 역할을 분담한다. 국가 혼자서는 디지털 전환의 속도와 다양성을 감당할 수 없다."],
                ["② FDA 모델 + 한시 권력", "의약품처럼 AI도 개발자가 안전을 입증해야 출시할 수 있어야 한다. 위기 대응을 위해 부여된 권한은 위기 해소 시 자동으로 소멸된다."],
                ["③ 공공 인프라 + 글로벌 한시 협력", "AI·연산·데이터를 공공재로 운영한다. AI 정렬·패권 경쟁처럼 국경을 넘는 위기는 한시적 글로벌 거버넌스로 대응한다."],
              ].map(([t, d]) => (
                <div key={t} style={{ display: "grid", gridTemplateColumns: "128px 1fr", gap: 6, marginBottom: 5 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: C.navy }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: "#333", lineHeight: 1.45 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
