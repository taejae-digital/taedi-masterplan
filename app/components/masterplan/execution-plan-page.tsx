/* 담당: 전체 — p.4 실행·업무 분장 */
import { C } from "./constants";
import { Header, Footer, sec, hcellStyle, cellStyle } from "./shared";

export function ExecutionPlanPage() {
  const tls: React.CSSProperties = { fontSize: 14, padding: "7px 10px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" };
  const tlh: React.CSSProperties = { ...tls, fontWeight: 700, fontSize: 13, borderBottom: `2px solid ${C.dark}`, textAlign: "left" };
  const hcell = hcellStyle;
  const cell = cellStyle;

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="실행 계획 및 업무 분장" subtitle="실행·업무 분장" />

      {/* 01. 실행 일정 */}
      <div style={{ margin: "16px 32px 16px" }}>
        {sec("1", "실행 일정")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 20 }}>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>장기 목표 (2028~)</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray }}>
            {["AI 거버넌스 국제 회의체 참여", "한국형 공공 AI 인프라 모델", "세계 의회 설립 논의", "디지털 권리 헌장 초안", "정치적 실현 — 입법 제안"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>중기 목표 (2027)</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray }}>
            {["국제 컨퍼런스 개최", "해외 학술지 게재", "정책 보고서 정부 제출", "국제 자문단 상설화", "후속 연구 착수"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>2026년 실행 일정</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={{ ...tlh, width: "18%" }}>시기</th><th style={tlh}>실행 내용</th><th style={{ ...tlh, width: "28%" }}>산출물</th></tr></thead>
            <tbody>
              {([
                ["4월", "위협 특정 워크샵, 마스터플랜 확정", "위협 목록 + 분류 기준"],
                ["5~6월", "통제 방안 연구, 경제 질서 설계", "종합 보고서"],
                ["7~8월", "국제 자문단 구성 및 검증", "자문단 피드백"],
                ["9~10월", "단행본 집필 및 편집", "단행본 출간"],
                ["11~12월", "출판, 컨퍼런스, 정치적 실현", "공론화"],
              ] as const).map(([t, c, o]) => (
                <tr key={t}><td style={{ ...tls, fontWeight: 700 }}>{t}</td><td style={tls}>{c}</td><td style={tls}>{o}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </div>

      {/* 02. 향후 연구 과제 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("2", "향후 연구 과제")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
          {[
            { t: "위협 검증", d: "각 위협 기술적 실현 가능성 전문가 검증. AISI 위험 지도 협업. 산업별 시나리오 구체화." },
            { t: "경제 모델", d: "공공 AI 인프라 비용 산출. AI 누진세 시뮬레이션. 돌봄 인정소득 재원. 한국형 모델." },
            { t: "거버넌스 경로", d: "세계 의회 경로 현실성 검증. 블레츨리 후속 추적. 오타와·몬트리올 심층 분석. 중견국 외교." },
            { t: "실증 연구", d: "4계급 분화 데이터(산업별 AI 대체율). 6공동체 변화 사례. AI 과의존 실태(AISI 협업)." },
          ].map((s) => (
            <div key={s.t} style={{ padding: "8px 10px", borderTop: "3px solid #111" }}>
              <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: C.gray }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 03. 국제 자문단 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("3", "국제 자문단 구성")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={hcell}>자문단 후보</th><th style={hcell}>소속</th><th style={hcell}>기여 영역</th></tr></thead>
            <tbody>
              {[
                ["A. Hall", "Stanford GSB", "공공부문 AI 전환"],
                ["Susskind", "Oxford", "AI와 노동"],
                ["Bengio", "Mila/ARIA", "AI 실존적 위협"],
                ["Russell", "UC Berkeley", "AI 정렬"],
                ["Acemoglu", "MIT", "민주적 재방향화"],
                ["Mazzucato", "UCL", "공공 투자"],
                ["Payne", "King's", "AI 군비 경쟁"],
                ["Brynjolfsson", "Stanford HAI", "AI 생산성"],
                ["조경현", "NYU", "AI 안전"],
                ["김경태", "Stanford MSx", "한미 비교 연구"],
              ].map(([n, a, r]) => (
                <tr key={n}><td style={{ ...cell, fontWeight: 700, fontSize: 12.5, padding: "3px 8px" }}>{n}</td><td style={{ ...cell, fontSize: 12.5, padding: "3px 8px" }}>{a}</td><td style={{ ...cell, fontSize: 12.5, padding: "3px 8px" }}>{r}</td></tr>
              ))}
            </tbody>
          </table>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={hcell}>협력 기관</th><th style={hcell}>협력 내용</th></tr></thead>
            <tbody>
              {[
                ["한국 AI 안전연구소(AISI)", "AI 위험 지도 공동 개발, 시나리오 검증"],
                ["Stanford HAI", "AI 거버넌스, 공공부문 AI 전환 연구"],
                ["UK ARIA", "AI 안전, Bengio 과학이사 연결"],
                ["OECD AI Policy Observatory", "국제 AI 정책 비교, 데이터"],
                ["KAIST AI 철학 연구센터", "전자인 법적 범주, AI 윤리"],
              ].map(([n, r]) => (
                <tr key={n}><td style={{ ...cell, fontWeight: 700 }}>{n}</td><td style={cell}>{r}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 팀원 업무 분장 */}
      <div style={{ margin: "0 32px" }}>
        {sec("4", "팀원 업무 분장")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>유호현 (팀장)</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>총괄 · 경제 질서 · 거버넌스 · 정치적 실현</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>윤준영</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>AI 무기 · 군사 비대칭 · 국제 레짐</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>김수연</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>존엄 위기 · 노동/분배 · 공동체 재편</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>이규환</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>빅테크 통제 · AI 환경 · 디지털 권리</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
