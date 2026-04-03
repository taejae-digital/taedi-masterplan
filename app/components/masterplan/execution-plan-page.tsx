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
            {["단행본 출판 (Q3)", "국제 컨퍼런스 개최 (Q4)", "정책 보고서 정부 제출", "국제 자문단 상설화", "해외 학술지 게재"].map((t, i) => (
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
                ["4~5월", "마스터플랜 확정 · 위협 검증 착수 · 자문단 섭외 시작", "위협 목록 확정"],
                ["6~8월", "통제 방안 연구 4개 병행 (금지·승인·전환·구축)", "통제 방안 초안"],
                ["9~10월", "연구 보완 · 자문단 미팅 · 피드백 반영", "종합 연구 보고서"],
                ["11~12월", "단행본 집필 착수 · 컨퍼런스 기획 시작", "단행본 초고"],
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
            { t: "[전제] 거버넌스 구축 경로", d: "세계 의회 경로 현실성 검증. 블레츨리 후속 추적. 미중 트랙2 외교. 중견국 외교(오타와 모델)." },
            { t: "① 금지 레짐 설계", d: "국제 협약 설계(CWC 모델). 칩 공급망 통제(ASML·TSMC·삼성·NVIDIA). AI 무기·생물무기 접근 차단. 수출 통제 체계." },
            { t: "② 승인 체계 설계", d: "AI 안전청 설계(FDA 모델). 승인 등급·기준 수립. 킬스위치·행동 로그 의무화. 알고리즘 감사 체계." },
            { t: "③ 전환 모델 설계", d: "AI 초과이윤 누진세 설계. 돌봄 인정소득 재원 산출. 공공 AI 인프라 구축 모델. 데이터 주권·플랫폼 상호호환성." },
          ].map((s) => (
            <div key={s.t} style={{ padding: "8px 10px", borderTop: "3px solid #111" }}>
              <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: C.gray }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 03. 국제 자문단 — 윤준영 개편 버전 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("3", "국제 자문단 구성")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            [
              ["Yuval", "Harari", "Hebrew University of Jerusalem", "거시역사학자. AI가 서사·의미 체계 붕괴와 디지털 권위주의 강화를 경고.", "감시·조작 / 빅테크 독점 / 거버넌스"],
              ["Daron", "Acemoglu", "MIT (2024 노벨 경제학상)", "기술의 방향을 민주적으로 재설계하는 제도경제학 권위자.", "실업·정체성 / 빅테크 독점 / 거버넌스"],
              ["Nick", "Bostrom", "Macrostrategy Research (前 Oxford FHI)", "초지능·실존적 위험 연구 선구자. AI 통제 문제 체계적 탐구.", "AI 통제 상실 / 핵AI화 / 거버넌스"],
              ["Yoshua", "Bengio", "Mila / LawZero (2018 튜링상)", "딥러닝의 대부. 스스로 개척한 기술의 위험을 경고하는 행동하는 과학자.", "AI 통제 상실 / 생물무기 / 거버넌스"],
              ["Mustafa", "Suleyman", "Microsoft AI CEO (前 DeepMind)", "『The Coming Wave』에서 기술 확산의 봉쇄 실패를 정면 직시.", "군사 비대칭 / 생물무기 / 사이버 WMD"],
            ],
            [
              ["Shoshana", "Zuboff", "Harvard Business School", "감시 자본주의 해부. 플랫폼 권력의 민주주의 침식 메커니즘 분석.", "감시·조작 / 빅테크 독점"],
              ["Thomas", "Piketty", "Paris School of Economics", "r>g 명제로 불평등 동학 실증. AI 자본 초집중과 누진적 부유세 제안.", "실업·정체성 / 빅테크 독점 / 거버넌스"],
              ["Guy", "Standing", "University of London / BIEN", "프레카리아트 개념 창안. 기본소득·커먼즈 배당 세계적 권위자.", "실업·정체성 / 빅테크 독점"],
              ["Daniel", "Susskind", "King's College London / Oxford", "기술적 실업의 구조적 불가피성과 의미의 위기를 정면 직시.", "실업·정체성 / AI 통제 상실"],
              ["Alvin", "Graylin", "HTC 글로벌 부사장 (前 HTC China)", "미중 AI 경쟁 재해석. AGI 시대 AI 권리장전 제시.", "군사 비대칭 / 빅테크 독점 / 거버넌스"],
            ],
          ].map((group, gi) => (
            <table key={gi} style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr>
                <th style={{ ...hcell, textAlign: "center" as const, width: "12%" }}>후보</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "22%" }}>소속</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "40%" }}>선정 배경</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "26%" }}>기여 영역</th>
              </tr></thead>
              <tbody>
                {group.map(([first, last, a, b, r]) => (
                  <tr key={last}>
                    <td style={{ ...cell, fontWeight: 700, fontSize: 11, padding: "4px 6px" }}>{first}<br/>{last}</td>
                    <td style={{ ...cell, fontSize: 10.5, padding: "4px 6px" }}>{a}</td>
                    <td style={{ ...cell, fontSize: 10.5, padding: "4px 6px" }}>{b}</td>
                    <td style={{ ...cell, fontSize: 10.5, padding: "4px 6px" }}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>

      {/* 팀원 업무 분장 */}
      <div style={{ margin: "0 32px" }}>
        {sec("4", "팀원 업무 분장")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>유호현 (팀장)</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>[전제] 거버넌스 구축 · 총괄 · 정치적 실현</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>윤준영</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>① 금지 레짐 · 국제 협약 · 수출 통제</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>이규환</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>② 승인 체계 · 빅테크 통제 · 디지털 권리</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>김수연</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>③ 전환 모델 · 대량 실업 · 사회 전환</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
