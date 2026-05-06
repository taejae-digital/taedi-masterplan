import { C } from "../masterplan-v700/constants";
import { Header, Footer, h3s } from "../masterplan-v700/shared";

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version="v0.7.8" />

      {/* 상단 논리 흐름 박스 */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "7px 32px", borderBottom: `2px solid ${C.navy}`, gap: 0 }}>
        <div style={{ flex: 1, padding: "7px 12px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.accent, marginBottom: 2, letterSpacing: 0.5 }}>산업 질서의 전제</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>민주주의·자본주의는 특정 인간상을 전제로 설계됐다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>정치 질서는 1인 1표·공론장을, 경제 질서는 노동시간=소득·희소성 원리를 전제로 했다. 인간은 단일한 직업을 갖고 평생 역할을 수행한다는 가정 위에 세워진 체계다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 12px", background: "#fff5f5", borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.red, marginBottom: 2, letterSpacing: 0.5 }}>전제의 붕괴</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.red, lineHeight: 1.3, marginBottom: 3 }}>AI가 그 전제를 무너뜨린다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>AI는 개인의 판단력·실행력·파급력을 급격히 강화한다. 전문가만 할 수 있던 일을 누구나 하고, 혼자서 조직급 산출을 내며, 개인이 대중에게 직접 영향을 미친다.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 20, color: C.navy, fontWeight: 300 }}>→</div>
        <div style={{ flex: 1, padding: "7px 12px", background: C.bg, borderRight: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: C.navy, marginBottom: 2, letterSpacing: 0.5 }}>새 사회계약</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, lineHeight: 1.3, marginBottom: 3 }}>강화된 개인을 위한 새 권리와 새 구조가 필요하다</div>
          <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>기존 질서는 이 변화를 담지 못한다. 정체성 실현권·AI 인프라 평등 접근권·알고리즘 자기결정권이라는 새 권리와, 이를 작동시킬 새 구조가 요구된다.</div>
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
          <div style={h3s}>① 진단 — AI가 강화하는 3영역이 기존 정치·경제 질서의 전제를 무너뜨린다</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "29%" }} />
              <col style={{ width: "29%" }} />
              <col style={{ width: "28%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>정치 질서 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>경제 질서 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>＋ 이익</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력", desc: "AI가 전문 지식을 누구에게나 이전",
                  pol: "전문가·관료 권위 흔들림, 위임 정당성 약화. 학위·자격증 기반 엘리트 합의 붕괴.",
                  eco: "지식 노동의 비용이 0에 수렴, 전문직 소득 공식 붕괴. AI 플랫폼 독점이 새 봉건제로.",
                  plus: "의료·법률 민주화 · 지식 평등 · 개발도상국 도약",
                },
                {
                  dim: "실행력", desc: "개인이 혼자서 조직급 산출 가능",
                  pol: "직업=소속 기반 참정 구조 이완, 복지국가 위기.",
                  eco: "노동시간과 소득의 연결 붕괴, 자동화 이익이 데이터 독점자에 집중. 1인 다중직업 시대로.",
                  plus: "1인 기업·묶음 직업 · 틈새시장 혁신 가속",
                },
                {
                  dim: "파급력", desc: "개인이 대중 매체급 영향력 확보",
                  pol: "1인 1표 무력화, AI 마이크로타게팅이 공론장을 분열. 빅테크가 민주주의 잠식.",
                  eco: "기존 광고·미디어 경제 붕괴, AI 인프라 수익이 소수에 집중.",
                  plus: "시민 직접 참여 · 디지털 민주주의 · 글로벌 캠페인",
                },
              ].map(({ dim, desc, pol, eco, plus }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 800, color: C.navy, fontSize: 13.5 }}>{dim}</div>
                    <div style={{ fontSize: 11.5, color: "#666", lineHeight: 1.4 }}>{desc}</div>
                  </td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: C.red, fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{pol}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: C.red, fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{eco}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#2d6a2d", fontSize: 12, verticalAlign: "top", lineHeight: 1.5 }}>{plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 새 사회계약 — 개요 */}
        <div style={{ marginBottom: 6 }}>
          <div style={h3s}>② 새 사회계약 — 기존 질서를 대체할 새 권리와 새 구조</div>
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
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>새 구조 — 권리를 작동시키는 것</div>
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

        {/* 표 ③ — 처방 (긴급도 순 정렬) */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>③ 처방 — 기존 질서를 유지할 때 발생하는 위협과 새 사회계약의 대응 (긴급도 순)</div>
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
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 사회계약의 처방 — 권리·구조</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, area: "판단력", threat: "국가 폭력 독점의 균열", rx: "FDA 모델 (AI 무기·자율 살상 시스템 사전 승인) + 국제 한시 협력 (핵 군축처럼 AI 군비 통제 체제 구축)" },
                { lv: "진행 중", urg: true, area: "파급력·판단력", threat: "허위정보·플랫폼 독점", rx: "알고리즘 자기결정권 (출처 표시·타게팅 규제) + AI 인프라 공공재화로 빅테크 독점 해체" },
                { lv: "진행 중", urg: true, area: "실행력", threat: "미·중 기술 패권 블록화", rx: "글로벌 한시 협력 — 미·중·EU·개발도상국 공동 의제로 디지털 거버넌스 국제화" },
                { lv: "임박", urg: false, area: "실행력", threat: "직업 대규모 재편의 충격", rx: "정체성 실현권 + 전환 지원 인프라 구축, AI 이익 환수·배당, 돌봄·창작·학습에 분배·존엄 보장" },
                { lv: "임박", urg: false, area: "파급력", threat: "선거·공론장에 AI 개입", rx: "알고리즘 자기결정권 (설명 요구권·자동 판단 거부권) + FDA 모델로 선거 관련 고위험 시스템 사전 승인" },
                { lv: "중기", urg: false, area: "판단력", threat: "AI 정렬 실패", rx: "FDA 모델 (개발자 안전 입증·외부 검증 의무화) + 글로벌 한시 협력으로 통제 권한 확보" },
                { lv: "장기", urg: false, area: "판단력", threat: "범용 AI 통제 불능", rx: "FDA 모델 + 글로벌 한시 협력으로 확산 이전 국제 통제 체제 확보" },
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

      </div>

      <Footer />
    </div>
  );
}
