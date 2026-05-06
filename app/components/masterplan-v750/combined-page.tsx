import { C } from "../masterplan-v700/constants";
import { Header, Footer, h3s } from "../masterplan-v700/shared";

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version="v0.7.12" />

      {/* 상단 페이지 흐름 — 3단 구조 */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "7px 32px", gap: 0 }}>
        <div style={{ flex: 1, padding: "7px 14px", background: "#fff5f5", borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.red, marginBottom: 2, letterSpacing: 0.5 }}>① 진단</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.red, lineHeight: 1.3, marginBottom: 3 }}>산업사회의 질서가 흔들린다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>디지털이 강화한 개인은 산업사회 정치·경제 질서의 전제를 무너뜨린다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 14px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2, letterSpacing: 0.5 }}>② 새 사회계약</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>새 권리와 새 거버넌스로 다시 짠다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>강화된 개인의 새 권리와 권리를 작동시키는 새 거버넌스를 설계한다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 14px", background: C.bg }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.accent, marginBottom: 2, letterSpacing: 0.5 }}>③ 영역별 통제 모델 적용</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>강화 영역별 통제로 작동시킨다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>판단력·실행력·파급력 각 영역에서 위협을 통제하고 권리를 보장한다.</div>
        </div>
      </div>

      <div style={{ padding: "4px 32px 0", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 표 ① — 진단 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>① 진단 — 디지털 강화가 기존 정치·경제 질서의 전제를 무너뜨린다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "26%" }} />
              <col style={{ width: "37%" }} />
              <col style={{ width: "37%" }} />
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
                    <span style={{ fontWeight: 800, color: C.navy, fontSize: 13.5, marginRight: 6 }}>{dim}</span>
                    <span style={{ fontSize: 11, color: "#666" }}>{desc}</span>
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{pol}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{eco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 표 ② — 새로운 권리와 새로운 거버넌스 설계 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>② 새로운 권리와 새로운 거버넌스 설계 — 강화된 개인을 위한 사회계약</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "44%" }} />
              <col style={{ width: "44%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 권리 — 강화된 개인이 요구하는 것</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 거버넌스 — 권리를 작동시키는 것</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력",
                  right: "AI 인프라 평등 접근권",
                  rightDesc: "AI·연산·데이터는 공공재여야 한다. 소수 기업의 독점은 새로운 계급 고착을 낳는다. 데이터 주권과 이동권 보장 필수.",
                  gov: "사전승인 거버넌스",
                  govDesc: "의약품처럼 AI도 개발자가 안전성을 입증한 후 출시. 플랫폼 공공성을 보장하고, 위기 대응 권한은 한시적이며 해소 시 자동 소멸.",
                },
                {
                  dim: "실행력",
                  right: "정체성 실현권",
                  rightDesc: "직업 하나에 묶이지 않을 권리. 돌봄·창작·학습 등 시장 바깥의 기여에도 소득과 존엄이 인정되어야 한다.",
                  gov: "재편 완충 거버넌스",
                  govDesc: "전환 인프라로 재편기 소외 계층을 지원하고, AI 이익을 환수해 디지털 배당·공공 인프라로 환류. 가정·도시·국가·세계가 한시적으로 분담하는 다층 구조.",
                },
                {
                  dim: "파급력",
                  right: "알고리즘 자기결정권",
                  rightDesc: "AI의 판단에 설명을 요구하고 거부할 수 있는 권리. 정치 광고·채용 심사·신용 평가 등 자동화된 결정에서 탈출할 수 있어야 한다.",
                  gov: "공론장 보호 거버넌스",
                  govDesc: "AI 콘텐츠 출처 표시·마이크로타게팅 규제로 공론장 중립성을 보호. 국경을 넘는 패권 경쟁은 글로벌 한시 협력으로 대응.",
                },
              ].map(({ dim, right, rightDesc, gov, govDesc }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", fontWeight: 800, color: C.navy, fontSize: 13 }}>{dim}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{right}</div>
                    <div style={{ fontSize: 11, color: "#444", lineHeight: 1.4 }}>{rightDesc}</div>
                  </td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5, borderLeft: `2px solid ${C.navy}` }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{gov}</div>
                    <div style={{ fontSize: 11, color: "#444", lineHeight: 1.4 }}>{govDesc}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 표 ③ — 영역별 통제 모델 적용 (위협·처방) */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>③ 영역별 통제 모델 적용 — 강화 영역의 위협별 처방</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "56%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>긴급도</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>− 위협</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>★ 처방</th>
              </tr>
            </thead>
            <tbody>
              {([
                {
                  dim: "판단력",
                  threats: [
                    { lv: "진행 중", urg: true, name: "국가 폭력 독점의 균열", rxMain: "사전승인 거버넌스 + 글로벌 한시 협력", rxDesc: "AI 무기·자율 살상 시스템 사전 승인, 핵 군축처럼 AI 군비 통제 체제 구축" },
                    { lv: "진행 중", urg: true, name: "AI 인프라 독점·분단화", rxMain: "AI 인프라 평등 접근권 + 글로벌 한시 협력", rxDesc: "미·중 기술 패권 경쟁으로 AI 인프라가 블록화되는 흐름을 막고, 미·중·EU·개발도상국 공동 의제로 디지털 거버넌스 국제화" },
                    { lv: "중기→장기", urg: false, name: "AI 정렬·통제 실패", rxMain: "사전승인 거버넌스 + 글로벌 한시 협력", rxDesc: "개발자 안전 입증·외부 검증 의무화, 확산 이전 국제 통제 체제 확보" },
                  ],
                },
                {
                  dim: "실행력",
                  threats: [
                    { lv: "임박", urg: false, name: "직업 대규모 재편의 충격", rxMain: "정체성 실현권 + 재편 완충 거버넌스", rxDesc: "전환 지원 인프라 구축, AI 이익 환수·배당, 돌봄·창작·학습에 분배·존엄 보장" },
                    { lv: "장기", urg: false, name: "디지털 계급 고착", rxMain: "AI 인프라 평등 접근권 + 재편 완충 거버넌스", rxDesc: "공공 인프라로 자원·기회 불평등 해소, 정체성 실현권으로 분배 보장" },
                  ],
                },
                {
                  dim: "파급력",
                  threats: [
                    { lv: "진행 중", urg: true, name: "AI 공론장 개입·허위정보 확산", rxMain: "알고리즘 자기결정권 + 공론장 보호 거버넌스", rxDesc: "출처 표시·타게팅 규제·설명 요구권, 선거 관련 고위험 시스템 사전 승인" },
                    { lv: "진행 중", urg: true, name: "빅테크 플랫폼 독점·미디어 과두", rxMain: "AI 인프라 평등 접근권 + 공론장 보호 거버넌스", rxDesc: "AI 인프라 공공재화로 빅테크 독점 해체, 데이터 주권·이동권 보장" },
                  ],
                },
              ] as const).map(({ dim, threats }, i) => (
                threats.map((t, j) => (
                  <tr key={`${i}-${j}`} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    {j === 0 && (
                      <td rowSpan={threats.length} style={{ padding: "5px 8px", borderBottom: "1px solid #eee", borderRight: `1px solid ${C.line}`, verticalAlign: "top", lineHeight: 1.5, fontWeight: 800, color: C.navy, fontSize: 13 }}>{dim}</td>
                    )}
                    <td style={{ padding: "4px 8px", borderBottom: j === threats.length - 1 ? "1px solid #eee" : "1px solid #f5f5f5", fontWeight: 700, color: t.urg ? C.red : C.light, fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>{t.lv}</td>
                    <td style={{ padding: "4px 8px", borderBottom: j === threats.length - 1 ? "1px solid #eee" : "1px solid #f5f5f5", color: "#333", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, fontWeight: 600 }}>{t.name}</td>
                    <td style={{ padding: "4px 8px", borderBottom: j === threats.length - 1 ? "1px solid #eee" : "1px solid #f5f5f5", color: "#222", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>
                      <div style={{ fontWeight: 700, color: C.navy, marginBottom: 2 }}>{t.rxMain}</div>
                      <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4 }}>{t.rxDesc}</div>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  );
}
