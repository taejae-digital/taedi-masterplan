import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" />

      <div style={{ padding: "10px 32px 8px", borderBottom: `2px solid ${C.navy}` }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4, marginBottom: 4 }}>
          분업이 인간을 역할로 쪼갰다면, 디지털은 판단력·실행력·파급력으로 개인을 증폭시킨다.
        </div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.55 }}>
          증폭된 개인은 산업 질서의 전제를 무너뜨리고, 새로운 사회계약을 요구한다 — 강화된 개인의 새 권리와 그것을 작동시키는 공동체 구조.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 표 1 — 강화 영역별 이익·위협·새 사회계약 */}
        <div>
          <div style={h3s}>강화 영역별 분석 — 이익·위협·새 사회계약의 처방</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "12%" }}>강화 영역</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "22%", color: "#aac8ff" }}>산업 질서 타격</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "18%", color: "#86efac" }}>＋ 이익</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "18%", color: "#fca5a5" }}>− 위협</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, background: "#1a3a6e", borderLeft: "3px solid #60a5fa", color: "#60a5fa" }}>★ 새 사회계약</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력",
                  desc: "AI가 판단·추론·전문성을 이전, 진입장벽 해체",
                  hit: "전문가·관료 판단 권위 흔들림, 위임 정당성 약화. 인지 노동 한계비용 0 수렴, 전문직 기반 가격·소득 공식 붕괴",
                  plus: "의료·법률·재무 접근 민주화 · 지식 평등 · 글로벌 사우스 도약",
                  minus: "폭력 독점의 균열 · AI 정렬 문제 · 범용 AI 통제 불능 · 빅테크 플랫폼 과두",
                  ctrlTitle: "② AI 인프라 평등 접근권 + ★ FDA 모델",
                  ctrl: "개발자 안전 입증 · 사전 승인 의무화. 데이터 이동권·알고리즘 감사. AI 인프라 공공재화.",
                },
                {
                  dim: "실행력",
                  desc: "1인이 부서급 산출, 다영역 동시 운용",
                  hit: "직업 묶음 재편으로 다수 고용 전제 복지국가 위기. 노동시간=소득 공식 붕괴, 자동화 이익이 데이터 독점자 집중",
                  plus: "1인 기업·묶음 직업, 니치마켓 혁신 가속 · 분야 간 협력",
                  minus: "직업 재편의 충격 — task 해체·재조합 과도기 소외 · 자동화 이익 집중 · 미중 기술 패권 블록화",
                  ctrlTitle: "① 정체성 실현권 + 재편 완충",
                  ctrl: "시장 가치 너머 돌봄·학습·창작까지 기여 인정. AI 이익 환수·디지털 배당 환류. 전환 인프라 구축.",
                },
                {
                  dim: "파급력",
                  desc: "도달 범위 확장 — 개인이 매스미디어급 영향력",
                  hit: "1인 1표 무력화, 마이크로타게팅이 공론장을 분열. 선출되지 않은 빅테크가 민주주의 기반 잠식. 광고·미디어 경제 붕괴",
                  plus: "시민 직접 참여, e-democracy · 글로벌 캠페인",
                  minus: "선거·공론장 AI 개입 · 허위정보 확산 · 마이크로타게팅",
                  ctrlTitle: "③ 알고리즘 자기결정권",
                  ctrl: "AI 생성 콘텐츠 출처 표시·마이크로타게팅 규제. 알고리즘 설명 요구권·자동 판단 거부권. 공론장 중립성 보호.",
                },
              ].map(({ dim, desc, hit, plus, minus, ctrlTitle, ctrl }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 800, color: C.navy, fontSize: 12.5 }}>{dim}</div>
                    <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.4 }}>{desc}</div>
                  </td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#444", fontWeight: 600, fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>{hit}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: C.green, fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>{plus}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: C.red, fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5 }}>{minus}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5, background: i % 2 ? "#e8f0fe" : "#f0f5ff", borderLeft: "3px solid #3b82f6" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{ctrlTitle}</div>
                    <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.5 }}>{ctrl}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 연결 화살표 */}
        <div style={{ textAlign: "center", color: C.navy, margin: "6px 0 4px" }}>
          <div style={{ fontSize: 18, lineHeight: 1 }}>▼</div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 3 }}>
            긴급도에 따라 대응 우선순위가 달라진다 — 지금 필요한 처방
          </div>
        </div>

        {/* 표 2 — 긴급도별 위협과 핵심 처방 */}
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "8%" }}>긴급도</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "11%" }}>강화 영역</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "17%" }}>위협</th>
                <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>핵심 처방 — 권리·구조</th>
              </tr>
            </thead>
            <tbody>
              {([
                { lv: "진행 중", urg: true, area: "판단력", threat: "폭력 독점의 균열", rx: "FDA 모델 (개발자 안전 입증·사전 승인) + 글로벌 한시 협력 (IASA·핵 군축 AI 적용)" },
                { lv: "진행 중", urg: true, area: "파급력·판단력", threat: "허위정보·플랫폼 과두", rx: "알고리즘 자기결정권 + AI 인프라 공공재화로 빅테크 독점 해체" },
                { lv: "임박", urg: false, area: "실행력", threat: "직업 재편의 충격", rx: "정체성 실현권 + 전환 인프라 구축, AI 이익 환수·환류, 돌봄·창작·학습에 분배·존엄 보장" },
                { lv: "임박", urg: false, area: "파급력", threat: "선거·공론장 AI 개입", rx: "알고리즘 자기결정권 (설명 요구권·자동 판단 거부권) + FDA 모델로 고위험 시스템 사전 승인" },
                { lv: "중기", urg: false, area: "판단력", threat: "AI 정렬 문제", rx: "FDA 모델 (개발자 안전 입증·외부 검증) + 글로벌 한시 협력으로 통제 권한 확보" },
                { lv: "진행 중", urg: true, area: "실행력", threat: "미중 기술 패권 블록화", rx: "글로벌 한시 협력 — 미·중·EU·글로벌 사우스 공동 의제로 디지털 거버넌스 끌어올리기" },
                { lv: "장기", urg: false, area: "판단력", threat: "범용 AI 통제 불능", rx: "FDA 모델 + 글로벌 한시 협력으로 확산 이전 통제 레짐 확보" },
                { lv: "장기", urg: false, area: "판단력·실행력", threat: "디지털 계급 고착·지속불가능성", rx: "AI 인프라 평등 접근권 + 정체성 실현권 + 공공 인프라로 환경·자원 사회화" },
              ] as const).map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: r.urg ? C.red : C.light, fontSize: 11.5, lineHeight: 1.5 }}>{r.lv}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: C.accent, fontWeight: 700, fontSize: 10.5, lineHeight: 1.5 }}>{r.area}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: "#222", fontSize: 12, lineHeight: 1.5 }}>{r.threat}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#222", fontSize: 11.5, lineHeight: 1.5 }}>{r.rx}</td>
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
