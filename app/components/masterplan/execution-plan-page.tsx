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
      <Header title="MASTER PLAN v0.1" subtitle="4. 실행 계획 및 팀 업무 분장" />

      {/* 01. 실행 일정 */}
      <div style={{ margin: "16px 32px 16px" }}>
        {sec("1", "실행 일정")}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 28 }}>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>실행 일정 (2026)</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={{ ...tlh, width: "18%" }}>시기</th><th style={tlh}>실행 내용</th><th style={{ ...tlh, width: "28%" }}>산출물</th></tr></thead>
            <tbody>
              {([
                ["4~5월", "마스터플랜 확정 · 위협 검증 착수 · 자문단 섭외 시작", "위협 목록 확정"],
                ["6~8월", "기술 통제 체계 설계 · 승인 체계 설계 · 전환 모델 연구 병행", "통제 방안 초안"],
                ["9~10월", "연구 보완 · 자문단 미팅 · 피드백 반영", "종합 연구 보고서"],
                ["11~12월", "단행본 출판 · 컨퍼런스 개최", "단행본 출판본"],
              ] as const).map(([t, c, o]) => (
                <tr key={t}><td style={{ ...tls, fontWeight: 700 }}>{t}</td><td style={tls}>{c}</td><td style={tls}>{o}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>중기 목표 (2027~2028)</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray }}>
            {["연구 보고서 출판", "국제 자문단 상설화", "해외 학술지 게재", "AI 거버넌스 국제 회의체 참여", "한국 내 입법 제안 · 정책화"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 8 }}>장기 목표 (2029~)</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray }}>
            {["빅테크 컴퓨팅 자원 공정 접근 모델", "디지털 권리 헌장 초안", "국가 간 AI 통제 협약 논의 참여", "세계 의회 설립 논의 기여 (민간)", "장기 비전 — 글로벌 AI 거버넌스"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      </div>

      {/* 02. 금년 핵심 연구 과제 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("2", "핵심 연구 과제")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { t: "① 기술 통제 체계 설계", d: "기술 통제 관련 기존 체제 및 사례 분석. 핵심 기술 공급망 기반 수출통제 구조 검토. 분야별 통제 메커니즘 비교 분석. → 설계안을 만들어 정부에 제안." },
            { t: "② 승인 체계 설계", d: "AI 안전청 설계(FDA 모델). 승인 등급·기준 수립. 킬스위치·행동 로그 의무화. 알고리즘 감사 체계. → 설계안을 만들어 정부에 제안." },
            { t: "③ 전환 모델 설계", d: "AI 초과이윤 누진세 설계. 돌봄 인정소득 재원 산출. 컴퓨팅 자원 공정 접근 의무·데이터 주권·플랫폼 상호호환성. → 경제 질서 청사진 제시." },
          ].map((s) => (
            <div key={s.t} style={{ padding: "8px 10px", borderTop: "3px solid #111" }}>
              <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6, color: C.gray }}>{s.d}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, padding: "6px 10px", background: C.bg, fontSize: 12, color: C.light, borderLeft: `3px solid ${C.line}` }}>
          ※ 국가 간 협약 체결, 세계기구 설립 등 국가 간 외교 사안은 연구소가 직접 수행할 수 없는 영역. 연구소는 설계·제안·공론화에 집중하고, 실제 국가 간 교섭은 정부가 담당하도록 연결하는 역할을 한다.
        </div>
      </div>

      {/* 03. 국제 자문단 — 윤준영 개편 버전 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("3", "국제 자문단 구성")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            [
              ["Erik", "Brynjolfsson", "Stanford HAI 교수 / Digital Economy Lab 소장 (前 MIT Sloan)", "『The Second Machine Age』 공저자. AI가 노동·생산성·불평등에 미치는 영향을 실증한 디지털경제학 권위자.", "실업·정체성 / 빅테크 독점 / 거버넌스"],
              ["Daron", "Acemoglu", "MIT 경제학 교수 (2024 노벨 경제학상 수상)", "『국가는 왜 실패하는가』 공저자. AI·자동화가 권력 구조의 선택임을 실증하고, 기술의 방향을 민주적으로 재설계하는 논거를 제시한 제도경제학 권위자.", "대량 실업·정체성 위기 / 빅테크 권력 독점 / 거버넌스 공백"],
              ["Nick", "Bostrom", "Macrostrategy Research Initiative 수석 연구원 (前 Oxford FHI 창립 소장)", "초지능·실존적 위험 연구의 선구자. 『Superintelligence』·『Deep Utopia』로 AI 통제 문제와 노동 이후 사회의 의미 공백을 가장 체계적으로 탐구한 철학자.", "AI 통제 상실 / 핵AI화·자율살상 / 거버넌스 공백"],
              ["Yoshua", "Bengio", "Université de Montréal 교수 / Mila 창립 과학 책임자 / LawZero 설립자", "딥러닝의 대부, 2018년 튜링상 수상. 스스로 개척한 기술의 위험을 경고하며 LawZero를 설립한 행동하는 과학자로, 프런티어 AI 안전 분야 최고 권위자.", "AI 통제 상실 / AI 생물무기 / 거버넌스 공백"],
              ["Mustafa", "Suleyman", "Microsoft AI CEO (前 DeepMind 공동 창립자)", "DeepMind 공동 창업 후 Microsoft AI를 이끄는 산업 내부자. 『The Coming Wave』에서 기술 확산의 봉쇄 실패를 정면으로 다뤄 실천적 거버넌스 논의를 주도.", "AI 군사 비대칭 / AI 생물무기 / 사이버 WMD / 거버넌스 공백"],
            ],
            [
              ["Shoshana", "Zuboff", "Harvard Business School 명예교수", "『감시 자본주의의 시대』로 빅테크의 행동 수정 경제를 해부. 플랫폼 권력이 민주주의를 침식하는 메커니즘을 가장 날카롭게 분석한 디지털 권력 이론가.", "감시·조작 체제 / 빅테크 권력 독점"],
              ["Thomas", "Piketty", "Paris School of Economics 교수 / World Inequality Lab 공동 소장", "『21세기 자본』의 r>g 명제로 자본주의 불평등 동학을 실증. AI·디지털 자본의 초집중과 세습 불평등 심화를 분석하고 누진적 부유세·참여 사회주의를 제안한 경제학자.", "대량 실업·정체성 위기 / 빅테크 권력 독점 / 거버넌스 공백"],
              ["Andrew", "Hall", "Stanford GSB 정치경제학 교수 / Democracy & Polarization Lab 공동 소장 / 연결 채널 보유 (김경태 전 샌프란시스코 영사)", "대규모 데이터·머신러닝으로 민주주의·양극화 연구. AI 거버넌스 헌법적 프레임워크 제안.", "감시·조작 / 빅테크 독점 / 거버넌스"],
              ["Daniel", "Susskind", "King's College London 경제학 교수 / Oxford Institute for Ethics in AI 선임 연구원 / 연결 채널 보유", "『A World Without Work』에서 기술적 실업의 구조적 불가피성과 의미의 위기를 정면으로 다룬 경제학자. 장소·스킬·정체성 미스매치 분석과 조건부 기본소득 설계 분야 전문가.", "대량 실업·정체성 위기 / AI 통제 상실"],
              ["Alvin", "Graylin", "HTC 글로벌 부사장 / ViveX Accelerator 공동 대표 (前 HTC China 대표)", "MIT AI·경영 석사, 30년간 AI·XR 산업을 이끈 기술경영 전문가. 미중 문화 전환을 직접 체험한 배경으로 미중 AI 경쟁의 본질을 재해석하고 AGI 시대 AI 권리장전을 제시.", "AI 군사 비대칭 / 빅테크 권력 독점 / 거버넌스 공백"],
            ],
          ].map((group, gi) => (
            <table key={gi} style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr>
                <th style={{ ...hcell, textAlign: "center" as const, width: "11%" }}>후보</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "30%" }}>소속 및 특이 사항</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "35%" }}>선정 배경</th>
                <th style={{ ...hcell, textAlign: "center" as const, width: "24%" }}>기여 영역</th>
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
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>[전제] 거버넌스 구축 · 총괄 · 현실화</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 2 }}>윤준영</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>① 국제 레짐 · 국제 규범 · 경제 안보</div>
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
