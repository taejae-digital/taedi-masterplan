const C = {
  dark: "#111", gray: "#666", light: "#999", line: "#ddd", bg: "#f9f9f9",
};

const s = {
  cell: { padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 12, lineHeight: 1.45 },
  link: { padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 10.5, lineHeight: 1.4, color: "#444" },
  hcell: { padding: "4px 8px", borderBottom: "2px solid #333", fontSize: 10.5, fontWeight: 700 as const, textAlign: "left" as const },
  h2: { fontSize: 14, fontWeight: 800 as const, color: C.dark, marginBottom: 5, paddingBottom: 3, borderBottom: "2px solid #333" },
  row: { display: "flex" as const, gap: 6, marginBottom: 3, fontSize: 12, lineHeight: 1.45 },
  stag: { fontWeight: 700 as const, color: C.dark, fontSize: 10.5, minWidth: 52, flexShrink: 0 as const },
  section: (num: string, text: string) => (
    <div style={{ fontSize: 17, fontWeight: 800, color: C.dark, marginBottom: 10, paddingLeft: 2, paddingBottom: 4, borderBottom: "1px solid #ccc" }}>{num}. {text}</div>
  ),
};

function Page1() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      {/* 타이틀 */}
      <div style={{ borderBottom: `3px solid ${C.dark}`, paddingBottom: 6, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>디지털이 초래할 위험성과 그 대책</h1>
            <div style={{ fontSize: 14, color: C.gray, fontWeight: 600, letterSpacing: 2, marginTop: 3 }}>MASTER PLAN</div>
          </div>
          <div style={{ textAlign: "right", fontSize: 12.5, color: C.light }}>
            <div style={{ fontWeight: 700, color: C.dark, fontSize: 13 }}>태재미래전략연구원</div>
            디지털 전환과 사회변혁팀 · 2026. 4. 7.
          </div>
        </div>
      </div>

      {/* 1. 디지털의 본질 — Executive Summary */}
      {s.section("1", "디지털의 본질 — 기술은 자유를 확장하고, 확장된 자유는 기존 가치와 충돌한다")}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
        <div>
          <div style={s.h2}>디지털의 본질</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.7, color: "#333", marginTop: 6 }}>
            <p style={{ margin: "0 0 6px" }}>디지털은 <strong>강화</strong>(빠르게 더 많은 일)와 <strong>연결</strong>(다른 사람들의 능력을 공유)을 만든다.</p>
            <p style={{ margin: "0 0 6px" }}>강화되고 연결되어 전문가 수준의 일을 할 수 있게 된 개인들은 더 큰 규모의 정체성 실현을 원한다. 그러나 공동체는 전체의 균형을 유지해야 한다. <strong>개인의 확장된 자유와 공동체의 질서 사이에 충돌이 생긴다.</strong></p>
            <p style={{ margin: "0 0 8px" }}>이 충돌은 매번 반복되었다. <strong>설계가 앞서면 비용이 낮고, 늦으면 대가가 크다.</strong> 디지털 위협은 지금이 초기다.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, background: "#fff8f0", border: "0.5px solid #f0c080", borderRadius: 6, padding: "6px 10px", fontSize: 11, lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, marginBottom: 2 }}>개인은 자유를 원한다</div>
              <div>정체성대로 살 자유 · AI 도구 활용 · 새로운 가치를 만들 자유</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.gray }}>↔</div>
            <div style={{ flex: 1, background: "#f0f7ff", border: "0.5px solid #80b8f0", borderRadius: 6, padding: "6px 10px", fontSize: 11, lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, marginBottom: 2 }}>공동체는 질서를 원한다</div>
              <div>정체성 침해 금지 · 데이터 소유권 보호 · 생명·안전 위협 금지</div>
            </div>
          </div>
        </div>
        <div>
          {/* 역사 패턴 테이블 */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.4, marginBottom: 4 }}>
            <thead><tr>
              <th style={s.hcell}>기술 → 자유</th><th style={s.hcell}>저항</th><th style={s.hcell}>파괴적 전환</th><th style={s.hcell}>안전한 전환</th><th style={s.hcell}>새 가치</th>
            </tr></thead>
            <tbody>
              <tr><td style={s.cell}>인쇄술 → 신앙</td><td style={s.cell}>"사제의 것"</td><td style={s.cell}>30년 전쟁</td><td style={s.cell}>—</td><td style={s.cell}>신앙의 자유</td></tr>
              <tr><td style={s.cell}>증기기관 → 재산권</td><td style={s.cell}>"혈통이 권력"</td><td style={s.cell}>프랑스 혁명</td><td style={s.cell}>영국 개혁</td><td style={s.cell}>시민의 권리</td></tr>
              <tr><td style={s.cell}>대량생산 → 풍요</td><td style={s.cell}>"시장이 조절"</td><td style={s.cell}>대공황→파시즘</td><td style={s.cell}>뉴딜</td><td style={s.cell}>사회적 권리</td></tr>
              <tr style={{ background: C.bg }}><td style={{ ...s.cell, fontWeight: 700 }}>AI → 전문가급</td><td style={s.cell}>"실현은 사치"</td><td style={{ ...s.cell, fontWeight: 700 }}>AI 대량살상 전쟁</td><td style={{ ...s.cell, fontWeight: 700 }}>가치 전환</td><td style={{ ...s.cell, fontWeight: 700 }}>정체성 실현권</td></tr>
            </tbody>
          </table>
          <p style={{ margin: 0, fontSize: 10, color: C.light }}>Perez(2002) 기술혁명 황금기 · Polanyi(1944) 시장 팽창과 사회 자기보호 · Acemoglu &amp; Johnson(2023) 기술의 민주적 재방향화</p>
        </div>
      </div>

      {/* 2. 사회 변화 */}
      {s.section("2", "사회 변화 — 개인·공동체·경제 질서가 재편된다")}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <div style={s.h2}>개인의 변화</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, lineHeight: 1.4, marginTop: 4 }}>
            <thead><tr>
              <th style={s.hcell}>계층</th><th style={s.hcell}>현재</th><th style={s.hcell}>2050</th><th style={s.hcell}>생산의 변화</th><th style={s.hcell}>분배의 변화</th>
            </tr></thead>
            <tbody>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>리더</td><td style={s.cell}>2%</td><td style={s.cell}>5%</td><td style={s.cell}>AI 설계</td><td style={s.cell}>누진세+공적 지분</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>프로</td><td style={s.cell}>53%</td><td style={{ ...s.cell, fontWeight: 700 }}>25%</td><td style={s.cell}>AI 활용</td><td style={s.cell}>성과+목적 보상</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>아마추어</td><td style={s.cell}>35%</td><td style={{ ...s.cell, fontWeight: 700 }}>65%</td><td style={s.cell}>AI 의존</td><td style={s.cell}>기본소득+돌봄 인정</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>소외</td><td style={s.cell}>10%</td><td style={s.cell}>5%</td><td style={s.cell}>접근 불가</td><td style={s.cell}>접근권 보장</td></tr>
            </tbody>
          </table>
          <p style={{ margin: "4px 0 0", fontSize: 10.5, color: C.gray }}>"무슨 일 하세요?"에 답할 수 없는 사람이 다수가 된다. 경제적 위기이자 존재론적 위기.</p>
        </div>
        <div>
          <div style={s.h2}>공동체 재편</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, lineHeight: 1.4, marginTop: 4 }}>
            <thead><tr><th style={s.hcell}>공동체</th><th style={s.hcell}>산업 시대</th><th style={s.hcell}>디지털 시대</th></tr></thead>
            <tbody>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>가정</td><td style={s.cell}>노동력 재생산</td><td style={s.cell}>정체성 허브, 창작·생산 단위</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>이웃</td><td style={s.cell}>아파트 주민</td><td style={s.cell}>가치·취미 선택 공동체</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>마을</td><td style={s.cell}>행정구역</td><td style={s.cell}>도보권 공유시설</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>도시</td><td style={s.cell}>일자리 있는 곳</td><td style={s.cell}>창조 플랫폼</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>국가</td><td style={s.cell}>모든 것 통제</td><td style={s.cell}>최소 개입 (국방·외교·재난)</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>세계</td><td style={s.cell}>UN (무력)</td><td style={{ ...s.cell, fontWeight: 600 }}>세계 정부 — 화폐·규제·분쟁</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <div style={s.h2}>경제 질서의 변화</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, lineHeight: 1.4, marginTop: 4 }}>
            <thead><tr><th style={s.hcell}>소유 대상</th><th style={s.hcell}>산업 시대</th><th style={s.hcell}>디지털 시대</th></tr></thead>
            <tbody>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>부동산</td><td style={s.cell}>부의 핵심. 위치=가치</td><td style={s.cell}>장소성 약화. 재택으로 위치 무관화</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>데이터</td><td style={s.cell}>기업 부산물</td><td style={s.cell}>정체성 자산. 의료·교육·행동 데이터의 주권</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>AI 인프라</td><td style={s.cell}>해당 없음</td><td style={s.cell}>생산수단. 빅테크 독점 vs 공공화</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>정체성</td><td style={s.cell}>직업=나</td><td style={{ ...s.cell, fontWeight: 600 }}>"나는 무엇을 위해 사는 사람인가" — 목적으로 정의</td></tr>
              <tr><td style={{ ...s.cell, fontWeight: 700 }}>지적재산</td><td style={s.cell}>특허·저작권 보호</td><td style={s.cell}>AI 생성물 저작권 불명. 창작 독점 해체</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 위협 시나리오 */}
      {s.section("3", "디지털 기술의 위험성 — 위의 사회 변화가 통제 없이 진행될 때")}
      <div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, lineHeight: 1.4 }}>
            <thead><tr>
              <th style={{ ...s.hcell, width: "5%" }}>시기</th>
              <th style={{ ...s.hcell, width: "9%" }}>위협</th>
              <th style={{ ...s.hcell, width: "14%" }}>연관된 사회 변화</th>
              <th style={{ ...s.hcell, width: "12%" }}>기술 메커니즘</th>
              <th style={{ ...s.hcell, width: "30%" }}>시나리오</th>
              <th style={{ ...s.hcell, width: "18%" }}>통제 방안</th>
              <th style={{ ...s.hcell, width: "5%" }}>통제</th>
            </tr></thead>
            <tbody>
              {/* 임박 */}
              {/* 임박 */}
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700, verticalAlign: "middle" as const }} rowSpan={4}>임박<br/><span style={{ fontSize: 10, fontWeight: 400, color: C.gray }}>1~3년</span></td>
                <td style={{ ...s.cell, fontWeight: 700 }}>AI 군사 비대칭·폭력의 민주화</td>
                <td style={s.link}><strong>개인:</strong> 리더 계층이 AI로 군사력 격차 극대화<br/><strong>경제 질서:</strong> AI 인프라 접근 → 비국가 행위자도 폭력 수단 획득</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>상용 드론+컴퓨터비전 AI, 오픈소스 LLM 기반 전술 자동화</td>
                <td style={s.cell}>AI가 군사 전력 격차를 극대화 → 강대국이 "로우 코스트 전쟁" 시도 (이란 사례). 동시에 비국가 행위자도 폭력 수단 접근 → 국가 독점이던 폭력이 민주화.</td>
                <td style={s.cell}>AI 군사 기술 수출 통제 + 비국가 행위자 접근 차단</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              </tr>
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700 }}>AI 생물무기</td>
                <td style={s.link}><strong>경제 질서:</strong> AI 인프라 접근 민주화 → 악용 가능성도 민주화</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>AlphaFold2·3, ProteinMPNN, RFdiffusion</td>
                <td style={s.cell}>AlphaFold류 AI → 단백질 구조 예측 → 비전문가도 병원체 설계 가능 → 확산 시 만든 쪽 포함 모두 피해자.</td>
                <td style={s.cell}>모델 접근권 제한 + 연구소 외부 반출 금지</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              </tr>
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700 }}>사이버 WMD</td>
                <td style={s.link}><strong>공동체:</strong> 도시 인프라가 디지털에 전면 의존 → 공격 표면 확대</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>LLM 기반 취약점 탐색(PentestGPT류), 자율 익스플로잇 생성</td>
                <td style={s.cell}>AI가 전력망·금융망 취약점 자동 탐색 → 공격 코드 생성 → 인프라 연쇄 붕괴. WannaCry: NSA 무기 유출 → 영국 NHS 마비.</td>
                <td style={s.cell}>공격용 AI 개발 금지 + 인프라 방어 의무</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              </tr>
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700 }}>핵AI화·자율살상</td>
                <td style={s.link}><strong>공동체:</strong> 국가 간 AI 군비 경쟁 → 국가 공동체의 안보 질서 붕괴</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>자율표적선정 AI(LAWS), 핵 지휘통제 자동화 시스템</td>
                <td style={s.cell}>핵 지휘체계에 AI 개입 → 인간 승인 없이 발사 가능 → 오판이 곧 핵전쟁.</td>
                <td style={s.cell}>핵 지휘체계 AI 개입 전면 금지</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              </tr>
              {/* 진행중 */}
              <tr>
                <td style={{ ...s.cell, fontWeight: 700, verticalAlign: "middle" as const }} rowSpan={2}>진행중<br/><span style={{ fontSize: 10, fontWeight: 400, color: C.gray }}>현재</span></td>
                <td style={{ ...s.cell, fontWeight: 700 }}>감시·조작 체제</td>
                <td style={s.link}><strong>경제 질서:</strong> 데이터 주권 부재 → 개인 행동 데이터가 기업 자산</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>추천 알고리즘, 딥페이크, 마이크로타기팅 LLM</td>
                <td style={s.cell}>LLM + 추천 알고리즘 → 개인별 맞춤 정보 조작 → 여론·선거 개입 → 민주주의 침식.</td>
                <td style={s.cell}>알고리즘 투명성 의무 + 독립 감사</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#d97706" }}>승인</td>
              </tr>
              <tr>
                <td style={{ ...s.cell, fontWeight: 700 }}>AI 통제 상실</td>
                <td style={s.link}><strong>경제 질서:</strong> AI 인프라 독점 → 빅테크가 안전보다 속도 우선</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>자율 AI 에이전트, 강화학습 기반 목표 최적화</td>
                <td style={s.cell}>에이전트가 자율적 하위 목표 설정 → 인간 의도 무관 행동 → 기만·권력추구. 자율성↑ = 통제 난이도↑.</td>
                <td style={s.cell}>자율성 단계별 승인 + 킬스위치 의무</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#d97706" }}>승인</td>
              </tr>
              {/* 중기 */}
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700, verticalAlign: "middle" as const }} rowSpan={2}>중기<br/><span style={{ fontSize: 10, fontWeight: 400, color: C.gray }}>3~10년</span></td>
                <td style={{ ...s.cell, fontWeight: 700 }}>대량 실업·정체성 위기</td>
                <td style={s.link}><strong>개인:</strong> 프로 53%→25% 축소<br/><strong>경제 질서:</strong> 정체성=직업 공식 붕괴</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>GPU 클러스터 독점, 파운데이션 모델 API 종속</td>
                <td style={s.cell}>AI가 전문직 대체 → "나는 무엇을 위해 사는 사람인가" 위기 → 사회 불안정. 기본소득만으로는 존재론적 위기 해결 불가.</td>
                <td style={s.cell}>목적 기반 경제 + 돌봄 인정소득</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#16a34a" }}>전환</td>
              </tr>
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ ...s.cell, fontWeight: 700 }}>빅테크 권력 독점</td>
                <td style={s.link}><strong>개인:</strong> 리더 2%→5%가 AI 인프라 장악<br/><strong>경제 질서:</strong> AI 인프라 = 새 생산수단</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>GPU 클러스터 독점, 데이터 네트워크 효과</td>
                <td style={s.cell}>컴퓨트·데이터·모델 소수 독점 → 국가 규제권 무력화 → CEO 10명이 80억 일상 설계.</td>
                <td style={s.cell}>공공 AI 인프라 + 데이터 주권</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#16a34a" }}>전환</td>
              </tr>
              {/* 장기 */}
              <tr>
                <td style={{ ...s.cell, fontWeight: 700, verticalAlign: "middle" as const }}>장기<br/><span style={{ fontSize: 10, fontWeight: 400, color: C.gray }}>10년+</span></td>
                <td style={{ ...s.cell, fontWeight: 700 }}>거버넌스 공백</td>
                <td style={s.link}><strong>공동체:</strong> 국가→최소 개입, 세계→거버넌스 부재 상태</td>
                <td style={{ ...s.cell, fontSize: 10, color: "#777" }}>클라우드 인프라의 초국경성, 데이터 흐름의 탈국경화</td>
                <td style={s.cell}>기술이 국경 초월 → 국가 단위 규제 무력 → 규제 차익으로 최소 규제 국가에 기업 이탈.</td>
                <td style={s.cell}>세계 의회 + 초국가 AI 통제 기구</td>
                <td style={{ ...s.cell, fontWeight: 700, color: "#16a34a" }}>구축</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <div style={{ borderBottom: `2px solid ${C.dark}`, paddingBottom: 6, marginBottom: 14, marginTop: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>대책 · 실행 계획</h2>
      </div>

      {/* 4. AS-IS / TO-BE */}
      {s.section("4", "대책 — 두 가지 미래와 우리가 할 일")}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 14 }}>
        <div style={{ padding: "12px 14px", background: "#f5f5f5", borderTop: "4px solid #333" }}>
          <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>AS-IS: 산업 시대 가치관이 가져올 미래</div>
          <div style={{ fontSize: 12, lineHeight: 1.7, color: "#333" }}>
            <p style={{ margin: "0 0 4px" }}><strong>가치:</strong> 효율 = 가치. AI가 인간 대체·권력 집중·군사화를 "합리적 결론"으로 만든다.</p>
            <p style={{ margin: "0 0 4px" }}><strong>개인:</strong> 남의 꿈을 위한 노동. AI가 직업을 대체하면 정체성도 사라진다.</p>
            <p style={{ margin: "0 0 4px" }}><strong>공동체:</strong> 장소 기반. 거버넌스는 국경 안에 한정. 빅테크가 국가를 넘어선다.</p>
            <p style={{ margin: 0 }}><strong>결과:</strong> 생존 위협 + 권력 집중 + 노동 위기 + 불평등 + 거버넌스 공백.</p>
          </div>
        </div>
        <div style={{ padding: "12px 14px", background: "#f0f5f2", borderTop: "4px solid #333" }}>
          <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>TO-BE: 정체성 중심의 가치관이 가져올 미래</div>
          <div style={{ fontSize: 12, lineHeight: 1.7, color: "#333" }}>
            <p style={{ margin: "0 0 4px" }}><strong>가치:</strong> 정체성 실현권. 참정권이 민주주의를 정의했듯, 정체성 실현권이 디지털 시대를 정의한다.</p>
            <p style={{ margin: "0 0 4px" }}><strong>개인:</strong> 자기 목적 추구. 직장·직급 대신 기여로 정체성 정의.</p>
            <p style={{ margin: "0 0 4px" }}><strong>공동체:</strong> 가치 공동체. 도시는 창조 플랫폼. 세계 정부가 화폐·규제.</p>
            <p style={{ margin: 0 }}><strong>결과:</strong> AI 인프라 공공화 + 데이터 주권 + 목적 기반 경제 + 글로벌 거버넌스.</p>
          </div>
        </div>
      </div>

      {/* TO-DO: 금지·승인·전환·구축 */}
      <div style={{ fontSize: 15, fontWeight: 800, color: C.dark, marginBottom: 8, paddingLeft: 2 }}>TO-DO: [전제] 거버넌스 구축 → [통제] 금지 · 승인 · 전환</div>
      <div style={{ padding: "10px 14px", background: "#f8f9fa", borderLeft: "4px solid #333", marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 4 }}>[전제] 거버넌스 인프라 구축</div>
        <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
          <div style={{ fontWeight: 700, marginBottom: 2 }}>무엇을 구축하는가</div>
          <p style={{ margin: "0 0 3px" }}><strong>입법:</strong> 세계 의회(상원: 국가, 하원: 시민 직접) — AI 금지 협약·승인법·경제법 제정.</p>
          <p style={{ margin: "0 0 3px" }}><strong>행정:</strong> AI 안전 기구(국제원자력기구(IAEA) 모델) → 금지 집행. AI 안전청(미국 식품의약국(FDA) 모델) → 승인 집행.</p>
          <p style={{ margin: "0 0 5px" }}><strong>사법:</strong> AI 분쟁 재판소(국제사법재판소(ICJ) 모델) — 위반국·기업 제재, 피해 배상 판결.</p>
          <div style={{ fontWeight: 700, marginBottom: 2 }}>어떻게 구축하는가</div>
          <p style={{ margin: "0 0 5px" }}>미중 트랙2 외교 → 블레츨리 선언을 구속력 조약으로 → 세계 의회 설립 → 세계 정부. 오타와 조약처럼 중견국(한국)이 의제 설정.</p>
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 10, color: C.light }}>Ostrom(1990) 공유자원도 자치 규칙으로 관리 가능 · Schelling(1960) 상호 이익이 되는 초점에서 협력이 발생</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div style={{ padding: "10px 12px", borderTop: "4px solid #b91c1c" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#b91c1c", marginBottom: 6 }}>① 금지</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>선례: 화학무기금지협약(CWC, 1997)</div>
            <p style={{ margin: "0 0 4px" }}>화학무기금지기구(OPCW)가 193개국 화학무기 98% 폐기. 반면교사: 생물무기금지협약(BWC)은 검증 없어 소련 20년 비밀 개발.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>AI 적용</div>
            <p style={{ margin: "0 0 4px" }}>AI 안전 기구가 집행. 칩 공급망(ASML·TSMC·삼성) = 물리적 통제점. 바세나르 협정(이중용도 기술 수출통제) 확장.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>강제력</div>
            <p style={{ margin: 0 }}>칩 공급망 3개사 집중 → 추적 가능. 위반 시 칩·클라우드 차단. 강대국 특권 배제(핵확산금지조약(NPT) 교훈).</p>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 10, color: C.light }}>Payne(2026) AI 군비 경쟁이 억지력 균형을 파괴하는 메커니즘</p>
        </div>
        <div style={{ padding: "10px 12px", borderTop: "4px solid #d97706" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#d97706", marginBottom: 6 }}>② 승인</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>선례: 미국 식품의약국(FDA) + 연방항공청(FAA)</div>
            <p style={{ margin: "0 0 4px" }}>개발자가 안전성 입증 → 배포 허가. 물리적 영향이 있는 기술에 사전 승인.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>AI 적용</div>
            <p style={{ margin: "0 0 4px" }}>대상: AI+물리력 결합(로봇·드론·자율주행·의료·인프라). 지능 자체가 아닌 물리 세계 연결을 통제.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>강제력</div>
            <p style={{ margin: 0 }}>주요 시장(미·EU·중) 접근 조건으로 글로벌 표준화. 킬스위치 + 행동 로그 + 연간 재승인.</p>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 10, color: C.light }}>Russell(2019) AI는 항상 인간이 번복할 수 있어야 한다</p>
        </div>
        <div style={{ padding: "10px 12px", borderTop: "4px solid #16a34a" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#16a34a", marginBottom: 6 }}>③ 전환</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#333" }}>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>선례: 뉴딜 + 살트셰바덴</div>
            <p style={{ margin: "0 0 4px" }}>뉴딜: 공공 인프라+사회보장으로 구조 전환. 살트셰바덴: 전쟁 없이 노사 대타협.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>AI 적용</div>
            <p style={{ margin: "0 0 4px" }}>공공 AI 인프라(NY Empire AI·UK ARIA). AI 초과이윤 누진세 → 돌봄 인정소득. 데이터 자산권.</p>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>강제력</div>
            <p style={{ margin: 0 }}>조세권(새 법 불필요). 테마섹 모델: 국가 AI 지분 보유. EU 디지털시장법(DMA, 2024) 이미 시행 중.</p>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 10, color: C.light }}>Mazzucato(2013) 국가가 혁신의 주체가 되어야 한다 · Polanyi(1944) 시장이 팽창하면 사회가 자기보호한다</p>
        </div>
      </div>

      {/* 5. 구체적 action plan */}
      {s.section("5", "실행 계획 — 2026년 목표·일정·팀 역할")}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
        <div>
          <div style={s.h2}>2026년 성과 목표</div>
          <div style={{ fontSize: 12, lineHeight: 1.7, marginTop: 6 }}>
            {["위협 목록 완성 + 분류 기준","통제 방안 초안 (금지/승인/전환/구축)","경제 질서 청사진","단행본 출간","정치적 실현 — 한국에서 먼저"].map((t,i)=>(
              <div key={i} style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", marginBottom: 4, fontSize: 12 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={s.h2}>전략 5단계</div>
          <div style={{ fontSize: 12, lineHeight: 1.7, color: "#333", marginTop: 6 }}>
            <div style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", marginBottom: 4, fontSize: 12 }}>① 위협 특정 — 핵심 위협 도출 + 분류</div>
            <div style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", marginBottom: 4, fontSize: 12 }}>② 통제 설계 — 금지/승인/전환/구축</div>
            <div style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", marginBottom: 4, fontSize: 12 }}>③ 경제 질서 — 분배·노동·화폐 청사진</div>
            <div style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", marginBottom: 4, fontSize: 12 }}>④ 국제 검증 — 자문단 피드백</div>
            <div style={{ padding: "5px 10px", background: C.bg, borderLeft: "3px solid #333", fontSize: 12 }}>⑤ 공론화 — 단행본 + 컨퍼런스</div>
          </div>
        </div>
        <div>
          <div style={s.h2}>실행 일정</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.5, marginTop: 6 }}>
            <thead><tr><th style={{ ...s.hcell, width: "22%" }}>시기</th><th style={s.hcell}>실행 내용</th><th style={s.hcell}>산출물</th></tr></thead>
            <tbody>
              {[["4월","위협 특정 워크샵 (4/7)","위협 목록 + 분류"],["5~6월","통제 + 경제 질서 연구","종합 보고서"],["7~8월","국제 자문단","자문단 피드백"],["9~10월","단행본 집필","단행본 출간"],["11~12월","컨퍼런스 + 정치적 실현","공론화"]].map(([t,c,o])=>(
                <tr key={t}><td style={{...s.cell,fontWeight:700}}>{t}</td><td style={s.cell}>{c}</td><td style={s.cell}>{o}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div style={s.h2}>팀 역할</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.5, marginTop: 6 }}>
            <tbody>
              {[["유호현 (팀장)","총괄 · 경제 질서 · 정치적 실현"],["윤준영","AI 무기 · 국제 레짐"],["김수연","존엄 위기 · 노동/분배 · 공동체"],["이규환","빅테크 · AI 환경 · 디지털 권리"]].map(([n,r])=>(
                <tr key={n}><td style={{...s.cell,fontWeight:700,width:"36%"}}>{n}</td><td style={s.cell}>{r}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function V6MasterPlan() {
  return (
    <div style={{ width: 1500, margin: "0 auto", background: "#fff", padding: "24px 40px", wordBreak: "keep-all" as const }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <Page1 />
      <Page2 />
    </div>
  );
}
