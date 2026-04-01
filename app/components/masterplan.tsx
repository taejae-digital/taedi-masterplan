const C = {
  navy: "#1a2744", dark: "#111", gray: "#555", light: "#999", line: "#ddd",
  bg: "#f8f9fa", accent: "#2a3f6b",
};

function Header({ title, subtitle, tag }: { title: string; subtitle: string; tag?: string }) {
  return (
    <div style={{ background: C.navy, color: "#fff", padding: "22px 32px 18px", marginBottom: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, opacity: 0.6, marginBottom: 4 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, letterSpacing: 3, opacity: 0.5, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{subtitle}</div>
          {tag && <div style={{ fontSize: 10, opacity: 0.5, marginTop: 2 }}>{tag}</div>}
        </div>
      </div>
      <div style={{ textAlign: "right", fontSize: 10, opacity: 0.4, marginTop: 4 }}>2026.04</div>
    </div>
  );
}

function VisionPage() {
  const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 13, lineHeight: 1.85, color: "#222", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 15, fontWeight: 800, color: C.navy, margin: "18px 0 8px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header title="MASTER PLAN v0.1" subtitle="p.1 비전" />

      <div style={{ padding: "20px 32px 16px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          기술의 급격한 발전이 인류에게 끼칠 수 있는 해악을 선제적으로 대응하여,<br />
          안전하고 건강한 미래 사회를 만든다.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, padding: "0 32px" }}>
        {/* Left column */}
        <div>
          <div style={h3s}>1. 디지털 위협의 최전선에 선 한반도</div>
          <p style={ps}>
            AI 시대, 기술은 개인의 자유를 전례 없이 확장한다. 의대나 법대를 나오지 않아도 의료와 법률 지식을 활용할 수 있는 세상이 열리고 있다. 그러나 같은 기술이 자율살상무기, 생물무기 설계, 대규모 감시 체제의 도구가 된다. 확장된 자유와 확장된 위험은 같은 기술에서 나온다.
          </p>
          <p style={ps}>
            한반도는 이 충돌의 최전선에 있다. 미중 AI 군비 경쟁의 지정학적 접점이자, 세계에서 가장 빠르게 디지털화된 사회 중 하나다. 위협이 가장 먼저, 가장 강하게 도달하는 곳이 바로 이곳이다.
          </p>
          <p style={ps}>
            지금은 초기다. AI의 자율성은 아직 제한적이고, 이해관계가 완전히 고착되지 않았다. 핵 기술은 냉전이 시작된 뒤에야 통제를 시도했고, 그 대가는 수십 년의 공포였다. AI는 그보다 확산 속도가 빠르고, 진입 장벽이 낮다. 지금이 설계할 수 있는 마지막 시간이다.
          </p>

          <div style={h3s}>2. 위협을 정확히 아는 것이 모든 통제의 출발점</div>
          <p style={ps}>
            디지털이 초래하는 위협은 여섯 가지 범주로 수렴한다. AI 생물무기와 사이버 대량파괴무기는 임박한 위협이다. 핵 지휘체계의 AI화와 자율살상무기는 국가 간 전쟁의 성격을 바꾼다. 감시와 조작 체제는 민주주의를 안에서부터 침식한다. AI 통제 상실은 에이전트가 인간의 의도와 무관하게 행동할 가능성이다. 대량 실업과 정체성 위기는 경제적 문제이자 존재론적 문제다. 빅테크 권력 독점은 10명의 CEO가 80억 인구의 일상을 설계하는 구조를 만든다.
          </p>
          <p style={ps}>
            막아야 할 것과 막지 말아야 할 것을 구분해야 한다. 모든 AI를 규제하면 자유의 확장을 저해한다. 통제는 4단계로 나뉜다. <strong>구축</strong>은 통제를 집행할 국제 기구를 세우는 것이다. <strong>금지</strong>는 AI 생물무기, 핵AI화처럼 존재 자체가 위험한 기술을 차단하는 것이다. <strong>승인</strong>은 감시 AI, 자율 에이전트처럼 조건부로 허용하되 사전 검증을 요구하는 것이다. <strong>전환</strong>은 공공 AI 인프라, 돌봄 인정소득처럼 경제 구조를 재편하는 것이다.
          </p>

          <div style={h3s}>3. 설계가 앞서면 비용이 낮다</div>
          <p style={ps}>
            역사는 두 가지 경로를 보여준다. 화학무기금지협약(CWC)은 193개국이 비준하고 98%를 폐기했다. 몬트리올 의정서는 197개국이 비준하고 오존층 파괴 물질을 99% 감축했다. 반면 핵확산금지조약(NPT)은 강대국 특권을 허용해 북한, 이란 같은 이탈자를 만들었고, 생물무기금지협약(BWC)은 검증 메커니즘 없이 소련의 20년 비밀 개발을 허용했다.
          </p>
          <p style={ps}>
            성공한 통제의 공통점은 세 가지다. 물리적 통제점이 있었고(화학무기의 전구물질, 오존의 CFC 대체재), 검증 메커니즘이 작동했으며, 경제적 대안이 존재했다. AI에도 이 조건이 있다. 반도체 공급망(ASML, TSMC, 삼성)은 물리적 통제점이 되고, 컴퓨팅 사용량은 추적 가능하며, AI의 경제적 인센티브는 어느 기술보다 크다.
          </p>
        </div>

        {/* Right column */}
        <div>
          <div style={h3s}>4. 정체성 실현권 — 더 큰 자유</div>
          <p style={ps}>
            자유는 확장되어 왔다. 인쇄술이 신앙의 자유를, 증기기관이 재산권의 자유를, 대량생산이 사회적 권리를 열었다. 매번 이전 시대에는 상상할 수 없던 자유였다 — 평민이 투표한다는 것은 왕정 시대에 사치였고, 사회보장은 자유방임 시대에 불가능했다. AI 시대의 다음 자유는 정체성 실현권이다. "나는 무엇을 위해 사는 사람인가"를 스스로 정의하고 추구할 수 있는 권리 — 이것이 참정권 이후의 더 큰 자유다.
          </p>
          <p style={ps}>
            산업 시대는 효율을 최고 가치로 삼았다. 인간의 가치를 노동 생산성으로 측정한 것은 200년간의 역사적 이상(異常)이다. AI가 노동을 대체하면 "무슨 일 하세요?"에 답할 수 없는 사람이 다수가 된다. 기본소득만으로는 이 존재론적 위기를 해결할 수 없다. 참정권이 민주주의를 정의했듯, 정체성 실현권이 디지털 시대를 정의한다. 직장과 직급 대신 기여와 목적으로 정체성을 정의하는 사회. "돌봄 길드 1,200시간 기여자", "기후 데이터 협동조합 설립자"가 명함이 되는 세상이다.
          </p>
          <p style={ps}>
            이를 위해서는 세 가지가 필요하다. 공공 AI 인프라가 개인에게 전문가급 도구를 제공해야 하고, 돌봄과 교육과 공동체 활동이 경제적으로 인정받아야 하며, 데이터 주권이 개인에게 귀속되어야 한다. 개인의 자유와 공동체의 질서 사이 균형은 정체성 실현권이라는 새로운 가치 위에서만 가능하다.
          </p>

          <div style={h3s}>5. 태재가 해야 하는 일</div>
          <p style={ps}>
            위험을 알면서도 이윤 앞에서 멈춘 자들이 있다. 안전보다 속도를 택한 빅테크, 규제보다 혁신을 택한 정부, 경고보다 낙관을 택한 학계가 그들이다. 태재는 그들이 멈춘 자리에서 시작한다.
          </p>
          <p style={ps}>
            패권의 최전선에서 합의의 최전선으로. 미중 대결의 접점에 있는 한반도에서, 대결을 협력으로 전환시킬 모델을 먼저 만든다. 한국은 세계에서 가장 빠르게 디지털화된 사회이자, 미중 어느 쪽에도 종속되지 않은 중견국이다. 화학무기금지협약을 이끈 것은 강대국이 아니라 캐나다와 호주 같은 중견국이었다.
          </p>
          <p style={ps}>
            2026년 안에 디지털 위협과 대책을 담은 단행본을 출판하고, 이를 기반으로 공론화한다. 위협 목록을 완성하고, 통제 방안 초안을 설계하며, 경제 질서의 청사진을 그린다. 국제 자문단의 검증을 거쳐 세계 수준의 이론적 토대를 만든다. 디지털 위협 통제는 세계적으로도 초기 단계 — 격차가 없다.
          </p>
        </div>
      </div>

    </div>
  );
}

function ResearchBox({ num, title, desc, assignee, color }: { num: string; title: string; desc: string; assignee?: string; color?: string }) {
  return (
    <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${color || C.navy}`, padding: "10px 12px", background: "#fff", minHeight: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: color || C.navy }}>{num}</div>
        {assignee && <div style={{ fontSize: 9.5, color: C.light, fontWeight: 600 }}>{assignee}</div>}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: C.gray, lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}

function Arrow() {
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>;
}

function ThreatControlPage() {
  const tc = { padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 11.5, lineHeight: 1.45 };
  const th = { padding: "4px 8px", borderBottom: "2px solid #333", fontSize: 10.5, fontWeight: 700 as const, textAlign: "left" as const };

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="디지털 위협과 통제 방안" subtitle="p.2 위협·통제" />

      {/* 디지털 기술 구성 */}
      <div style={{ margin: "16px 32px 14px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>디지털 기술의 구성 — 어떻게 디지털 기술이 위협이 되는가</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1fr", gap: 0, alignItems: "stretch" }}>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${C.navy}`, padding: "10px 12px" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>기반 기술</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>대규모 언어 모델(LLM)</strong> — GPT, Gemini, Claude. 텍스트 생성·추론·코드 작성.</div>
              <div style={{ marginBottom: 3 }}><strong>단백질 구조 예측</strong> — AlphaFold, RFdiffusion. 분자 수준 설계.</div>
              <div style={{ marginBottom: 3 }}><strong>컴퓨터 비전</strong> — 이미지·영상 인식, 딥페이크 생성.</div>
              <div style={{ marginBottom: 3 }}><strong>강화학습</strong> — 자율 의사결정, 목표 최적화.</div>
              <div><strong>AI 에이전트</strong> — 자율적 도구 사용, 하위 목표 설정, 다단계 추론.</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${C.navy}`, padding: "10px 12px" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>응용 영역</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>군사</strong> — 자율 드론 군집, 표적 선정, 전술 자동화, 핵 지휘통제.</div>
              <div style={{ marginBottom: 3 }}><strong>생명공학</strong> — 신약 개발, 병원체 설계, 합성생물학.</div>
              <div style={{ marginBottom: 3 }}><strong>사이버</strong> — 취약점 탐색, 공격 코드 생성, 인프라 침투.</div>
              <div style={{ marginBottom: 3 }}><strong>정보·미디어</strong> — 딥페이크, 맞춤형 허위정보, 여론 조작.</div>
              <div><strong>경제·노동</strong> — 업무 자동화, 전문직 대체, 플랫폼 독점.</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid #b91c1c`, padding: "10px 12px" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#b91c1c", marginBottom: 6 }}>위협으로의 전환</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>군사 →</strong> AI 군사 비대칭, 폭력의 민주화, 핵AI화·자율살상</div>
              <div style={{ marginBottom: 3 }}><strong>생명공학 →</strong> AI 생물무기 (비전문가도 병원체 설계)</div>
              <div style={{ marginBottom: 3 }}><strong>사이버 →</strong> 사이버 WMD (인프라 연쇄 붕괴)</div>
              <div style={{ marginBottom: 3 }}><strong>정보 →</strong> 감시·조작 체제 (민주주의 침식)</div>
              <div><strong>경제 →</strong> 대량 실업·정체성 위기, 빅테크 권력 독점</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#333", marginTop: 6, padding: "6px 10px", background: "#f8f8f8", borderLeft: "3px solid #b91c1c", lineHeight: 1.6 }}>
          같은 기반 기술이 용도에 따라 치료제도, 무기도 된다. 지능 개발 자체를 막을 수는 없다. <strong>그러나 AI가 물리적 세계에 접근하는 순간 — 로봇, 드론, 무기, 인프라, 의료기기 — 은 철저히 승인되거나 금지되어야 한다.</strong> 통제의 경계선은 &quot;AI가 물리력과 결합하는 지점&quot;이다.
        </div>
      </div>

      {/* 위협 테이블 */}
      <div style={{ margin: "0 32px 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>디지털 기술의 위험성 — 시간순 위협과 통제 방안</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            <th style={{ ...th, width: "5%" }}>시기</th>
            <th style={{ ...th, width: "9%" }}>위협</th>
            <th style={{ ...th, width: "11%" }}>기술 메커니즘</th>
            <th style={{ ...th, width: "25%" }}>시나리오</th>
            <th style={{ ...th, width: "6%" }}>통제</th>
            <th style={{ ...th, width: "22%" }}>구체적 통제 방안</th>
            <th style={{ ...th, width: "19%" }}>선례·근거</th>
          </tr></thead>
          <tbody>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={4}>임박<br/><span style={{ fontSize: 10, color: C.light }}>1~3년</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>AI 군사 비대칭</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>상용 드론+컴퓨터비전, 오픈소스 LLM 전술 자동화</td>
              <td style={tc}>AI가 전력 격차 극대화 → 저비용 전쟁 유혹(이란). 비국가 행위자도 폭력 수단 접근 → 폭력의 민주화.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>AI 군사기술 수출 통제. 비국가 행위자 접근 차단. AI 안전 기구(IAEA 모델) 사찰.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>바세나르 협정 확장</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>AI 생물무기</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>AlphaFold2·3, ProteinMPNN, RFdiffusion</td>
              <td style={tc}>비전문가도 병원체 설계 가능. 확산 시 만든 쪽 포함 모두 피해자.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>모델 접근권 등급제. 생물안전 연구소 외부 반출 금지. 합성생물학 AI 학습데이터 통제.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>화학무기금지협약(CWC) 98% 폐기</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>사이버 WMD</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>LLM 취약점 탐색(PentestGPT류), 자율 익스플로잇</td>
              <td style={tc}>전력망·금융망 취약점 자동 탐색 → 인프라 연쇄 붕괴. WannaCry: NSA 무기 유출 → NHS 마비.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>공격용 AI 개발·배포 금지. 핵심 인프라 방어 의무화. 칩 공급망(ASML·TSMC·삼성) 추적.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>생물무기금지협약(BWC) 실패 교훈</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>핵AI화·자율살상</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>자율표적선정 AI(LAWS), 핵 지휘통제 자동화</td>
              <td style={tc}>핵 지휘체계 AI 개입 → 인간 승인 없이 발사 → 오판이 곧 핵전쟁.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>핵 지휘체계 AI 개입 전면 금지. 자율살상무기 금지 협약. 인간 최종 승인 의무화.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>핵확산금지조약(NPT) — 강대국 특권 배제</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={2}>진행중<br/><span style={{ fontSize: 10, color: C.light }}>현재</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>감시·조작 체제</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>추천 알고리즘, 딥페이크, 마이크로타기팅 LLM</td>
              <td style={tc}>개인별 맞춤 정보 조작 → 여론·선거 개입 → 민주주의 침식.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#d97706" }}>승인</td>
              <td style={tc}>알고리즘 투명성 의무. 독립 감사 기구. 딥페이크 라벨링. AI 안전청(FDA 모델) 심사.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>EU AI Act(2024) 고위험 분류</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>AI 통제 상실</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>자율 AI 에이전트, 강화학습 목표 최적화</td>
              <td style={tc}>에이전트 자율 목표 설정 → 인간 의도 무관 행동 → 기만·권력추구.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#d97706" }}>승인</td>
              <td style={tc}>자율성 4단계 등급별 승인. 킬스위치 의무. 행동 로그 공개. 연간 재승인.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>Russell(2019) 번복 가능성 원칙</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={2}>중기<br/><span style={{ fontSize: 10, color: C.light }}>3~10년</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>대량 실업·정체성 위기</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>파운데이션 모델 API 종속, GPU 클러스터 독점</td>
              <td style={tc}>프로 53%→25% 축소 → 존재론적 위기. 기본소득만으로 해결 불가.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#16a34a" }}>전환</td>
              <td style={tc}>목적 기반 경제. AI 초과이윤 누진세 → 돌봄 인정소득. 정체성 실현권 법제화.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>뉴딜(1933) + 살트셰바덴(1938)</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>빅테크 권력 독점</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>GPU 독점, 데이터 네트워크 효과</td>
              <td style={tc}>CEO 10명이 80억 일상 설계. 국가 규제권 무력화.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#16a34a" }}>전환</td>
              <td style={tc}>공공 AI 인프라 구축. 데이터 주권 확립. 플랫폼 상호호환성 의무.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>Mazzucato(2013) 기업가적 국가</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>장기<br/><span style={{ fontSize: 10, color: C.light }}>10년+</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>거버넌스 공백</td>
              <td style={{ ...tc, fontSize: 10, color: C.gray }}>클라우드 초국경성, 데이터 탈국경화</td>
              <td style={tc}>국가 단위 규제 무력 → 규제 차익으로 기업 이탈.</td>
              <td style={{ ...tc, fontWeight: 700 }}>구축</td>
              <td style={tc}>세계 의회(입법) + AI 안전 기구(행정) + AI 분쟁 재판소(사법). 미중 트랙2 외교에서 시작.</td>
              <td style={{ ...tc, fontSize: 10, color: C.light }}>몬트리올 의정서(1987) 197개국</td></tr>
          </tbody>
        </table>
      </div>

      {/* 통제 프레임워크 요약 */}
      <div style={{ margin: "16px 32px 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>통제 프레임워크</div>
        <div style={{ padding: "10px 14px", background: "#f8f9fa", borderLeft: `4px solid ${C.navy}`, marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 4 }}>[전제] 거버넌스 인프라 구축</div>
          <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
            입법(세계 의회) · 행정(AI 안전 기구 + AI 안전청) · 사법(AI 분쟁 재판소). 경로: 미중 트랙2 → 블레츨리→조약 → 세계 의회 → 세계 정부.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #b91c1c" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#b91c1c", marginBottom: 4 }}>① 금지</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}>화학무기금지협약(CWC) 모델: 98% 폐기 성공</p>
              <p style={{ margin: "0 0 3px" }}>칩 공급망 3개사 = 물리적 통제점</p>
              <p style={{ margin: "0 0 3px" }}>위반 시 칩·클라우드 접근 차단</p>
              <p style={{ margin: 0, fontSize: 10, color: C.light }}>강대국 특권 배제 — 핵확산금지조약(NPT) 실패 교훈</p>
            </div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #d97706" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#d97706", marginBottom: 4 }}>② 승인</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}>미국 식품의약국(FDA) + 연방항공청(FAA) 모델</p>
              <p style={{ margin: "0 0 3px" }}>대상: AI + 물리력 결합 (지능 자체가 아님)</p>
              <p style={{ margin: "0 0 3px" }}>주요 시장 접근 조건 → 글로벌 표준화</p>
              <p style={{ margin: 0, fontSize: 10, color: C.light }}>킬스위치 + 행동 로그 + 연간 재승인</p>
            </div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #16a34a" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#16a34a", marginBottom: 4 }}>③ 전환</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}>뉴딜(1933) + 살트셰바덴(1938) 모델</p>
              <p style={{ margin: "0 0 3px" }}>공공 AI 인프라 + AI 초과이윤 누진세</p>
              <p style={{ margin: "0 0 3px" }}>조세권(새 법 불필요) + 테마섹 모델</p>
              <p style={{ margin: 0, fontSize: 10, color: C.light }}>EU 디지털시장법(DMA, 2024) 이미 시행 중</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ margin: "16px 32px 0", padding: "8px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 10, color: C.light }}>
        <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
        <span>2026.04</span>
      </div>
    </div>
  );
}

/* ─── P3: 연구 내용과 현황 ─── */

const sec = (num: string, text: string) => (
  <div style={{ fontSize: 17, fontWeight: 800, color: "#111", marginBottom: 10, paddingLeft: 2, paddingBottom: 4, borderBottom: "1px solid #ccc" }}>{num}. {text}</div>
);

const h2 = { fontSize: 14, fontWeight: 800 as const, color: "#111", marginBottom: 5, paddingBottom: 3, borderBottom: "2px solid #333" };
const cell = { padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 12, lineHeight: 1.45 };
const hcell = { padding: "4px 8px", borderBottom: "2px solid #333", fontSize: 10.5, fontWeight: 700 as const, textAlign: "left" as const };

function ResearchContentPage() {
  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="연구 내용과 현황" subtitle="p.3 연구 내용" />

      {/* 연구 흐름 */}
      <div style={{ margin: "16px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>연구 흐름</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1fr 24px 1fr 24px 1fr", gap: 0, alignItems: "stretch" }}>
          <ResearchBox num="01" title="디지털의 본질" desc="강화와 연결이 만드는 자유의 확장. 개인의 확장된 자유와 공동체 질서의 충돌." />
          <Arrow />
          <ResearchBox num="02" title="사회 변화" desc="개인 계층 재편(프로 53%→25%), 6공동체 재구성, 경제 질서 전환." />
          <Arrow />
          <ResearchBox num="03" title="위협 특정" desc="시간순 위협 시나리오. 임박(생물무기·사이버WMD)부터 장기(거버넌스 공백)까지." />
          <Arrow />
          <ResearchBox num="04" title="대책 설계" desc="[전제] 거버넌스 구축 → [통제] 금지·승인·전환. 각 위협별 구체적 통제 방안." />
          <Arrow />
          <ResearchBox num="05" title="실행·공론화" desc="단행본 출판, 국제 컨퍼런스, 정책 제안, 정치적 실현." />
        </div>
      </div>

      {/* 연구 내용 상세 */}
      <div style={{ margin: "12px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>연구 내용 상세</div>

        {/* 01. 디지털 기술 변화의 본질 — 풀 와이드 */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>01. 디지털 기술 변화의 본질</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
              <p style={{ margin: "0 0 5px" }}>디지털은 <strong>강화</strong>(빠르게 더 많은 일)와 <strong>연결</strong>(다른 사람들의 능력을 공유)을 만든다. 인쇄술이 신앙의 자유를, 증기기관이 재산권의 자유를 열었듯, AI는 누구나 전문가급 역량을 갖추는 자유를 연다.</p>
              <p style={{ margin: "0 0 5px" }}>강화되고 연결된 개인들은 더 큰 규모의 정체성 실현을 원한다. 그러나 공동체는 전체의 균형을 유지해야 한다. <strong>개인의 확장된 자유와 공동체의 질서 사이에 충돌이 생긴다.</strong> 이 충돌은 500년간 반복된 패턴이다.</p>
              <p style={{ margin: 0 }}>설계가 앞서면 비용이 낮고(영국 개혁, 뉴딜), 늦으면 대가가 크다(30년 전쟁, 대공황→파시즘). 디지털 위협은 지금이 초기 — 이해관계가 아직 얽히지 않았다.</p>
            </div>
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5, lineHeight: 1.35 }}>
                <thead><tr>
                  <th style={hcell}>기술 → 자유</th><th style={hcell}>저항</th><th style={hcell}>파괴적 전환</th><th style={hcell}>안전한 전환</th><th style={hcell}>새 가치</th>
                </tr></thead>
                <tbody>
                  <tr><td style={cell}>인쇄술 → 신앙</td><td style={cell}>"사제의 것"</td><td style={cell}>30년 전쟁</td><td style={cell}>—</td><td style={cell}>신앙의 자유</td></tr>
                  <tr><td style={cell}>증기기관 → 재산권</td><td style={cell}>"혈통이 권력"</td><td style={cell}>프랑스 혁명</td><td style={cell}>영국 개혁</td><td style={cell}>시민의 권리</td></tr>
                  <tr><td style={cell}>대량생산 → 풍요</td><td style={cell}>"시장이 조절"</td><td style={cell}>대공황→파시즘</td><td style={cell}>뉴딜</td><td style={cell}>사회적 권리</td></tr>
                  <tr style={{ background: "#f8f9fa" }}><td style={{ ...cell, fontWeight: 700 }}>AI → 전문가급</td><td style={cell}>"실현은 사치"</td><td style={{ ...cell, fontWeight: 700 }}>AI 대량살상 전쟁</td><td style={{ ...cell, fontWeight: 700 }}>가치 전환</td><td style={{ ...cell, fontWeight: 700 }}>정체성 실현권</td></tr>
                </tbody>
              </table>
              <p style={{ margin: "4px 0 0", fontSize: 10, color: C.light }}>Perez (2002) 기술혁명 황금기 · Polanyi (1944) 시장 팽창과 사회 자기보호 · Acemoglu &amp; Johnson (2023) 기술의 민주적 재방향화</p>
            </div>
          </div>
        </div>
        {/* 02. 사회 변화 — 풀 와이드 3컬럼 */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>02. 사회 변화</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>개인의 변화</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>리더</strong> (AI 설계자) 2% → 5%</p>
                <p style={{ margin: "0 0 4px" }}><strong>프로</strong> (AI 활용) 53% → <strong>25%</strong></p>
                <p style={{ margin: "0 0 4px" }}><strong>아마추어</strong> (AI 의존) 35% → <strong>65%</strong></p>
                <p style={{ margin: "0 0 6px" }}><strong>소외</strong> (AI 접근 불가) 10% → 5%</p>
                <p style={{ margin: 0 }}>"무슨 일 하세요?"에 답할 수 없는 사람이 다수. 경제적 위기이자 존재론적 위기.</p>
              </div>
            </div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>공동체 재편</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>가정</strong> → 정체성 허브, 창작·생산 단위</p>
                <p style={{ margin: "0 0 4px" }}><strong>이웃</strong> → 가치·취미 기반 선택 공동체</p>
                <p style={{ margin: "0 0 4px" }}><strong>도시</strong> → 창조 플랫폼</p>
                <p style={{ margin: "0 0 4px" }}><strong>국가</strong> → 최소 개입 (국방·외교·재난)</p>
                <p style={{ margin: 0 }}><strong>세계</strong> → 세계 정부 (화폐·규제·분쟁)</p>
              </div>
            </div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>경제 질서의 변화</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>부동산</strong> → 데이터가 새 자산</p>
                <p style={{ margin: "0 0 4px" }}><strong>직업</strong> → 목적으로 정체성 정의</p>
                <p style={{ margin: "0 0 4px" }}><strong>AI 인프라</strong> → 새 생산수단 (빅테크 독점 vs 공공화)</p>
                <p style={{ margin: "0 0 6px" }}><strong>지적재산</strong> → AI 생성물 저작권 불명</p>
                <p style={{ margin: 0 }}>핵심 질문: "나는 무엇을 위해 사는 사람인가"</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>03. 위협 시나리오</div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
                <p style={{ margin: "0 0 5px" }}><strong>임박(1~3년):</strong> <span style={{ color: "#b91c1c", fontWeight: 700 }}>AI 군사 비대칭</span> — AI가 전력 격차 극대화, 비국가 행위자도 폭력 수단 접근(이란 사례). <span style={{ color: "#b91c1c", fontWeight: 700 }}>AI 생물무기</span> — AlphaFold류로 비전문가도 병원체 설계. <span style={{ color: "#b91c1c", fontWeight: 700 }}>사이버 WMD</span> — 인프라 취약점 자동 탐색·연쇄 붕괴. <span style={{ color: "#b91c1c", fontWeight: 700 }}>핵AI화</span> — 핵 지휘체계 AI 개입, 인간 승인 없는 발사.</p>
                <p style={{ margin: "0 0 5px" }}><strong>진행중:</strong> <span style={{ color: "#d97706", fontWeight: 700 }}>감시·조작</span> — LLM+추천 알고리즘으로 여론 조작, 민주주의 침식. <span style={{ color: "#d97706", fontWeight: 700 }}>AI 통제 상실</span> — 에이전트가 자율 목표 설정, 기만·권력추구.</p>
                <p style={{ margin: 0 }}><strong>중기(3~10년):</strong> <span style={{ color: "#16a34a", fontWeight: 700 }}>대량 실업·정체성 위기</span> — 프로 계층 절반 이상 축소. <span style={{ color: "#16a34a", fontWeight: 700 }}>빅테크 독점</span> — CEO 10명이 80억 일상 설계. <strong>장기(10년+):</strong> <span style={{ fontWeight: 700 }}>거버넌스 공백</span> — 기술이 국경 초월, 국가 규제 무력.</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>04. 대책: AS-IS → TO-BE</div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
                <p style={{ margin: "0 0 5px" }}><strong>AS-IS(산업 시대 가치관):</strong> 효율=가치. AI가 인간 대체·권력 집중·군사화를 &quot;합리적 결론&quot;으로 만든다. 남의 꿈을 위한 노동. 거버넌스는 국경 안에 한정. 결과: 생존 위협 + 불평등 + 거버넌스 공백.</p>
                <p style={{ margin: "0 0 5px" }}><strong>TO-BE(정체성 중심 가치관):</strong> 정체성 실현권. 자기 목적 추구. 도시는 창조 플랫폼. 세계 정부가 화폐·규제. AI 인프라 공공화 + 목적 기반 경제.</p>
                <p style={{ margin: 0 }}><strong>TO-DO:</strong> [전제] 거버넌스 구축(세계 의회 입법·행정·사법) → [통제] ① 금지(화학무기금지협약 모델, 칩 공급망 통제) ② 승인(식품의약국 모델, AI+물리력) ③ 전환(뉴딜+살트셰바덴 모델, 공공 AI 인프라).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 지금까지의 연구 */}
      <div style={{ margin: "16px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>05. 실행 및 공론화 전략</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>단행본 출판</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>목표:</strong> 『디지털이 초래할 위험성과 그 대책』 2026년 Q4 출간.</p>
              <p style={{ margin: "0 0 4px" }}><strong>구성:</strong> 디지털의 본질 → 사회 변화 → 위협 시나리오 → 거버넌스 구축 → 금지·승인·전환 → 정체성 실현권.</p>
              <p style={{ margin: "0 0 4px" }}><strong>독자:</strong> 정책 입안자, 국제 학계, 시민 사회. 한국어 출간 후 영문 요약본.</p>
              <p style={{ margin: 0 }}><strong>검증:</strong> 국제 자문단(7~8월) 피드백 → 수정 → 최종 원고.</p>
            </div>
          </div>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>국제 컨퍼런스</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>시기:</strong> 2026년 11~12월, 서울.</p>
              <p style={{ margin: "0 0 4px" }}><strong>형식:</strong> 단행본 출간 기념 + 국제 학자 초청 토론. 블레츨리/서울 AI Summit 후속 트랙으로 포지셔닝.</p>
              <p style={{ margin: "0 0 4px" }}><strong>참석자:</strong> 국제 자문단 학자, 각국 AISI 연구자, 정책 입안자, 시민 사회 대표.</p>
              <p style={{ margin: 0 }}><strong>산출물:</strong> 서울 선언문 — "어떤 세계를 만들 것인가"에 대한 첫 국제 합의 시도.</p>
            </div>
          </div>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 6 }}>정치적 실현</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>한국 내:</strong> 단행본 기반 정책 보고서 → 국회 브리핑. AI 거버넌스 입법 제안.</p>
              <p style={{ margin: "0 0 4px" }}><strong>국제:</strong> 오타와 조약 모델 — 한국이 중견국으로서 AI 금지 협약 의제 설정. 미중 트랙2 외교 참여.</p>
              <p style={{ margin: "0 0 4px" }}><strong>네트워크:</strong> 국제 자문단 상설화. AISI·KAIST·서울대 등 국내 협력 기관 네트워크.</p>
              <p style={{ margin: 0 }}><strong>목표:</strong> 패권의 최전선에서 합의의 최전선으로. 한국에서 먼저 모델을 만든다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ margin: "16px 32px 0", padding: "8px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 10, color: C.light }}>
        <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
        <span>2026.04</span>
      </div>
    </div>
  );
}

/* ─── P4: 실행 계획 및 업무 분장 ─── */

function ExecutionPlanPage() {
  const tls: React.CSSProperties = { fontSize: 11, padding: "6px 10px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" };
  const tlh: React.CSSProperties = { ...tls, fontWeight: 700, fontSize: 10, borderBottom: `2px solid ${C.dark}`, textAlign: "left" };

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="실행 계획 및 업무 분장" subtitle="p.4 실행·업무 분장" />

      {/* 01. 실행 일정 */}
      <div style={{ margin: "16px 32px 16px" }}>
        {sec("1", "실행 일정")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 20 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 8 }}>장기 목표 (2028~)</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.7, color: C.gray }}>
            {["AI 거버넌스 국제 회의체 참여", "한국형 공공 AI 인프라 모델", "세계 의회 설립 논의", "디지털 권리 헌장 초안", "정치적 실현 — 입법 제안"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 8 }}>중기 목표 (2027)</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.7, color: C.gray }}>
            {["국제 컨퍼런스 개최", "해외 학술지 게재", "정책 보고서 정부 제출", "국제 자문단 상설화", "후속 연구 착수"].map((t, i) => (
              <div key={i} style={{ padding: "4px 8px", background: C.bg, borderLeft: `3px solid ${C.dark}`, marginBottom: 4 }}>{t}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 8 }}>2026년 실행 일정</div>
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
              <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 11, lineHeight: 1.55, color: C.gray }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 03. 국제 자문단 */}
      <div style={{ margin: "0 32px 12px" }}>
        {sec("3", "국제 자문단 구성")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            [
              ["Yuval", "Harari", "Hebrew University of Jerusalem 역사학 교수", "『사피엔스』·『넥서스』의 거시역사학자. AI가 서사·의미 체계를 붕괴시키고 디지털 권위주의를 강화할 위험을 가장 명료하게 경고한 사상가.", "감시·조작 체제 / 빅테크 권력 독점 / 거버넌스 공백"],
              ["Daron", "Acemoglu", "MIT 경제학 교수 (2024 노벨 경제학상 수상)", "『국가는 왜 실패하는가』 공저자. AI·자동화가 권력 구조의 선택임을 실증하고, 기술의 방향을 민주적으로 재설계하는 논거를 제시한 제도경제학 권위자.", "대량 실업·정체성 위기 / 빅테크 권력 독점 / 거버넌스 공백"],
              ["Nick", "Bostrom", "Macrostrategy Research Initiative 수석 연구원 (前 Oxford FHI 창립 소장)", "초지능·실존적 위험 연구의 선구자. 『Superintelligence』·『Deep Utopia』로 AI 통제 문제와 노동 이후 사회의 의미 공백을 가장 체계적으로 탐구한 철학자.", "AI 통제 상실 / 핵AI화·자율살상 / 거버넌스 공백"],
              ["Yoshua", "Bengio", "Université de Montréal 교수 / Mila 창립 과학 책임자 / LawZero 설립자", "딥러닝의 대부, 2018년 튜링상 수상. 스스로 개척한 기술의 위험을 경고하며 LawZero를 설립한 행동하는 과학자로, 프런티어 AI 안전 분야 최고 권위자.", "AI 통제 상실 / AI 생물무기 / 거버넌스 공백"],
              ["Mustafa", "Suleyman", "Microsoft AI CEO (前 DeepMind 공동 창립자)", "DeepMind 공동 창업 후 Microsoft AI를 이끄는 산업 내부자. 『The Coming Wave』에서 기술 확산의 봉쇄 실패를 정면으로 다뤄 실천적 거버넌스 논의를 주도.", "AI 군사 비대칭 / AI 생물무기 / 사이버 WMD / 거버넌스 공백"],
            ],
            [
              ["Shoshana", "Zuboff", "Harvard Business School 명예교수", "『감시 자본주의의 시대』로 빅테크의 행동 수정 경제를 해부. 플랫폼 권력이 민주주의를 침식하는 메커니즘을 가장 날카롭게 분석한 디지털 권력 이론가.", "감시·조작 체제 / 빅테크 권력 독점"],
              ["Thomas", "Piketty", "Paris School of Economics 교수 / World Inequality Lab 공동 소장", "『21세기 자본』의 r>g 명제로 자본주의 불평등 동학을 실증. AI·디지털 자본의 초집중과 세습 불평등 심화를 분석하고 누진적 부유세·참여 사회주의를 제안한 경제학자.", "대량 실업·정체성 위기 / 빅테크 권력 독점 / 거버넌스 공백"],
              ["Guy", "Standing", "University of London 경제학 교수 / BIEN(기본소득지구네트워크) 공동 창립자", "프레카리아트 개념 창안자. 플랫폼 자본주의가 낳는 불안정 계층의 다중 박탈과 지대 경제를 체계화했으며, 기본소득·커먼즈 배당 설계의 세계적 권위자.", "대량 실업·정체성 위기 / 빅테크 권력 독점"],
              ["Daniel", "Susskind", "King's College London 경제학 교수 / Oxford Institute for Ethics in AI 선임 연구원", "『A World Without Work』에서 기술적 실업의 구조적 불가피성과 의미의 위기를 정면으로 다룬 경제학자. 장소·스킬·정체성 미스매치 분석과 조건부 기본소득 설계 분야 전문가.", "대량 실업·정체성 위기 / AI 통제 상실"],
              ["Alvin", "Graylin", "HTC 글로벌 부사장 / ViveX Accelerator 공동 대표 (前 HTC China 대표)", "MIT AI·경영 석사, 30년간 AI·XR 산업을 이끈 기술경영 전문가. 미중 문화 전환을 직접 체험한 배경으로 미중 AI 경쟁의 본질을 재해석하고 AGI 시대 AI 권리장전을 제시.", "AI 군사 비대칭 / 빅테크 권력 독점 / 거버넌스 공백"],
            ],
          ].map((group, gi) => (
            <table key={gi} style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr>
                <th style={{ ...hcell, textAlign: "center" as const }}>후보</th>
                <th style={{ ...hcell, textAlign: "center" as const }}>소속 및 특이사항</th>
                <th style={{ ...hcell, textAlign: "center" as const }}>선정 배경</th>
                <th style={{ ...hcell, textAlign: "center" as const }}>기여 영역</th>
              </tr></thead>
              <tbody>
                {group.map(([first, last, a, b, r]) => (
                  <tr key={last}>
                    <td style={{ ...cell, fontWeight: 700, fontSize: 10, padding: "4px 8px" }}>{first}<br/>{last}</td>
                    <td style={{ ...cell, fontSize: 10, padding: "4px 8px" }}>{a}</td>
                    <td style={{ ...cell, fontSize: 10, padding: "4px 8px" }}>{b}</td>
                    <td style={{ ...cell, fontSize: 10, padding: "4px 8px" }}>{r}</td>
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
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 2 }}>유호현 (팀장)</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>총괄 · 경제 질서 · 거버넌스 · 정치적 실현</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 2 }}>윤준영</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>국제 레짐 · 국제 규범 · 디지털 경제</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 2 }}>김수연</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>존엄 위기 · 노동/분배 · 공동체 재편</div>
          </div>
          <div style={{ padding: "10px 12px", borderTop: "4px solid #333", background: C.bg }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, marginBottom: 2 }}>이규환</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>빅테크 통제 · AI 환경 · 디지털 권리</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ margin: "16px 32px 0", padding: "8px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 10, color: C.light }}>
        <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
        <span>2026.04</span>
      </div>
    </div>
  );
}

export function VisionPlan() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: "24px 40px", background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <VisionPage />
      <ThreatControlPage />
      <ResearchContentPage />
      <ExecutionPlanPage />
    </div>
  );
}
