const S = {
  grid: {
    display: "grid",
    gridTemplateColumns: "0.7fr 1fr 0.7fr 1fr 0.9fr 1fr",
    gap: 8,
    marginTop: 6,
    fontSize: 11,
    lineHeight: 1.4,
  } as React.CSSProperties,
  st: (color: string): React.CSSProperties => ({
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottom: "1px solid #ddd",
    color,
  }),
  sd: { fontSize: 10, lineHeight: 1.4, color: "#777", marginBottom: 3 } as React.CSSProperties,
  fh: { marginBottom: 2, paddingBottom: 2, borderBottom: "1px solid #ddd", marginTop: 5 } as React.CSSProperties,
  ft: (color: string): React.CSSProperties => ({ fontSize: 11, fontWeight: 700, color }),
  frow: { display: "flex", gap: 4, marginBottom: 2 } as React.CSSProperties,
  ftag: (color?: string): React.CSSProperties => ({
    minWidth: 36,
    flexShrink: 0,
    fontWeight: 700,
    fontSize: 9.5,
    color: color ?? "inherit",
  }),
  fr: { fontSize: 10, lineHeight: 1.35 } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 10, lineHeight: 1.35 },
  th: {
    fontSize: 9,
    fontWeight: 600,
    padding: "2px 4px",
    textAlign: "left" as const,
    borderBottom: "1.5px solid #111",
  },
  td: { padding: "3px 4px", borderBottom: "1px solid #ddd", verticalAlign: "top" as const },
  era: { fontWeight: 700 } as React.CSSProperties,
  foundation: {
    padding: "6px 14px",
    background: "#8c6d1f",
    color: "#fff",
    textAlign: "center" as const,
    fontSize: 10.5,
    lineHeight: 1.4,
    marginTop: 5,
    borderRadius: 2,
  } as React.CSSProperties,
  footer: {
    padding: "4px 14px",
    background: "#f5f5f5",
    textAlign: "center" as const,
    fontSize: 10,
    fontWeight: 500,
    borderTop: "1px solid #ddd",
    borderRadius: "0 0 4px 4px",
  } as React.CSSProperties,
};

function Row({ tag, tagColor, children }: { tag: string; tagColor?: string; children: React.ReactNode }) {
  return (
    <div style={S.frow}>
      <span style={S.ftag(tagColor)}>{tag}</span>
      <span>{children}</span>
    </div>
  );
}

function Heading({ color, children }: { color?: string; children: React.ReactNode }) {
  return (
    <div style={S.fh}>
      <span style={S.ft(color ?? "#333")}>{children}</span>
    </div>
  );
}

function Col0() {
  return (
    <div>
      <div style={S.st("#555")}>0. 불변</div>
      <div style={S.fr}>
        <Row tag="자유">개인은 자유를 원한다</Row>
        <Row tag="질서">공동체는 질서를 원한다</Row>
        <Row tag="권력">권력은 집중되려 한다</Row>
        <Row tag="경계">내 자유가 남의 자유를 해치면 안 된다</Row>
        <Row tag="패턴">설계가 늦으면 대가가 커진다</Row>
      </div>
      <p style={{ ...S.sd, marginTop: 4 }}>이 경향성에 AI가 만나면 변화가 시작된다</p>
    </div>
  );
}

function Col1() {
  return (
    <div>
      <div style={S.st("#333")}>1. 변화</div>
      <Heading color="#8b2500">위험한 변화</Heading>
      <div style={S.fr}>
        <Row tag="긴급" tagColor="#8b2500">AI 생물무기 · 사이버WMD · 핵AI화</Row>
        <Row tag="높음" tagColor="#b8860b">통제 상실 · 감시/조작 체제</Row>
      </div>
      <Heading color="#1a6b4a">기회의 변화</Heading>
      <div style={S.fr}>
        <Row tag="역량">누구나 전문가급</Row>
        <Row tag="노동">고용→자율. 목적 기반</Row>
        <Row tag="소유">부동산→데이터·정체성</Row>
        <Row tag="탈국가">디지털 경제가 국경을 넘는다</Row>
      </div>
      <Heading>분류 기준</Heading>
      <div style={{ ...S.fr, fontSize: 9.5 }}>
        비가역성 · 무차별성 · 통제불능 · 규모
        <br />
        2개+ → 금지 / 1개 → 승인 / 0개 → 관리
      </div>
    </div>
  );
}

function Col2() {
  return (
    <div>
      <div style={S.st("#1a5276")}>2. 대응</div>
      <Heading>위협 → 통제</Heading>
      <div style={S.fr}>
        <Row tag="금지" tagColor="#8b2500">개발 자체를 막는다</Row>
        <Row tag="승인" tagColor="#1a5276">안전 입증 후 배포</Row>
      </div>
      <p style={{ ...S.sd, marginTop: 4 }}>기회의 변화는 통제가 아니라 바로 경제 질서로</p>
      <Heading>조약 교훈</Heading>
      <table style={S.table}>
        <tbody>
          <tr>
            <td style={{ ...S.td, ...S.era }}>CWC</td>
            <td style={S.td}>사찰→98%폐기</td>
          </tr>
          <tr>
            <td style={{ ...S.td, ...S.era }}>BWC</td>
            <td style={S.td}>검증없음→실패</td>
          </tr>
          <tr>
            <td style={{ ...S.td, ...S.era }}>NPT</td>
            <td style={S.td}>특권→군축실패</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Col3() {
  return (
    <div>
      <div style={S.st("#2c3e6b")}>3. 경제 질서</div>
      <p style={S.sd}>기회의 변화가 새로운 경제를 만든다</p>
      <div style={S.fr}>
        <Row tag="화폐">달러 → 세계 화폐. 세계 정부가 발행. 통화량·이자율로 세계 경제 조절</Row>
        <Row tag="분배">AI 초과이윤 환원. 하한선 + 차등. 돌봄 인정소득</Row>
        <Row tag="노동">고용→목적 기반. 효율이 아닌 정체성 실현이 가치</Row>
        <Row tag="소유">부동산→데이터·정체성. 장소성 약화. 도시계획 재편</Row>
      </div>
      <p style={{ ...S.sd, marginTop: 4 }}>
        자본주의(효율 극대화)를 넘어서는 <strong>정체성 실현 경제</strong>
      </p>
    </div>
  );
}

function Col4() {
  return (
    <div>
      <div style={S.st("#8c6d1f")}>4. 거버넌스</div>
      <p style={S.sd}>위협 통제 + 경제 질서 → 둘 다 거버넌스가 필요하다</p>
      <div style={S.fr}>
        <Row tag="세계의회">상원(국가 1국1표) + 하원(시민 직접, 인구비례, agent-based)</Row>
        <Row tag="민주주의">대의제 → AI 직접민주주의</Row>
        <Row tag="검증">AI 통제 기구 독립 검증. 컴퓨트 모니터링</Row>
        <Row tag="초다수결">거부권 없음. 2/3이상 동의</Row>
      </div>
      <Heading>미중 → 세계 정부</Heading>
      <div style={S.fr}>
        <Row tag="1" tagColor="#8b2500">위협 공동 통제</Row>
        <Row tag="2" tagColor="#b8860b">블록화</Row>
        <Row tag="3" tagColor="#1a6b4a">세계 의회 → 세계 정부</Row>
      </div>
    </div>
  );
}

function Col5() {
  return (
    <div>
      <div style={S.st("#1a6b4a")}>5. 공동체 재편</div>
      <p style={S.sd}>경제 질서와 거버넌스에 따라 공동체가 재편된다</p>
      <table style={S.table}>
        <thead>
          <tr>
            <th style={S.th}>공동체</th>
            <th style={S.th}>산업</th>
            <th style={S.th}>디지털</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["스마트홈", "재생산", "정체성 허브·창작 단위"],
            ["이웃", "아파트", "가치 기반 선택 공동체"],
            ["마을", "행정구역", "도보권 공유시설"],
            ["도시", "일자리 있는 곳", "삶의 질 플랫폼. 직주근접"],
            ["국가", "전면통제", "최소 개입"],
            ["글로벌", "UN 무력", "세계 정부"],
          ].map(([name, ind, dig]) => (
            <tr key={name}>
              <td style={{ ...S.td, ...S.era }}>{name}</td>
              <td style={S.td}>{ind}</td>
              <td style={S.td}>{dig}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Heading color="#8c6d1f">정치적 실현</Heading>
      <div style={S.fr}>
        패권의 최전선에서 합의의 최전선으로. &quot;더 큰 자유&quot; — 위험은 함께 막고, 자유는 최대한 누린다. 새로운
        질서의 모델을 한국에서 먼저 만든다
      </div>
    </div>
  );
}

export function V5Page1Detail() {
  return (
    <div style={{ marginTop: 10 }}>
      <div style={S.grid}>
        <Col0 />
        <Col1 />
        <Col2 />
        <Col3 />
        <Col4 />
        <Col5 />
      </div>
    </div>
  );
}

export function V5DetailSection() {
  return (
    <div>

      {/* 목표·전략·실행계획·성과목표·역할분담 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr 1fr", gap: 12, marginTop: 8, fontSize: 10, lineHeight: 1.4 }}>

        {/* 목표와 전략 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, borderBottom: "2px solid #111", paddingBottom: 2 }}>목표와 전략</div>
          <div style={{ fontWeight: 700, marginBottom: 3 }}>목표</div>
          <p style={{ margin: "0 0 6px", color: "#333" }}>신기술(디지털)이 초래할 위험성을 특정하고, 안전한 미래를 위한 대책을 수립한다</p>
          <div style={{ fontWeight: 700, marginBottom: 3 }}>전략</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
            <span style={{ fontWeight: 700, color: "#8b2500" }}>①</span><span>위협을 정확히 특정한다</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
            <span style={{ fontWeight: 700, color: "#1a5276" }}>②</span><span>통제 방안을 설계한다</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
            <span style={{ fontWeight: 700, color: "#2c3e6b" }}>③</span><span>새로운 경제 질서를 제시한다</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
            <span style={{ fontWeight: 700, color: "#8c6d1f" }}>④</span><span>거버넌스를 설계한다</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
            <span style={{ fontWeight: 700, color: "#1a6b4a" }}>⑤</span><span>공동체 재편과 정치적 실현</span>
          </div>
        </div>

        {/* 구체적 실행 방안 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, borderBottom: "2px solid #111", paddingBottom: 2 }}>구체적 실행 방안</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, lineHeight: 1.35 }}>
            <thead><tr>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>시기</th>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>실행 내용</th>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>산출물</th>
            </tr></thead>
            <tbody>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>4월</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>디지털 위협 특정 워크샵</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>위협 목록 + 분류 기준</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>5~6월</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>통제 방안 + 경제 질서 연구</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>통합 보고서 초안</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>7~8월</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>국제 자문단 구성·검토</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>보고서 보완</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>9~10월</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>단행본 집필</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>단행본 출간</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>11~12월</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>서울 컨퍼런스 + 정치적 실현</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>공론화·정치화</td></tr>
            </tbody>
          </table>
        </div>

        {/* 2026년도 성과 목표 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, borderBottom: "2px solid #111", paddingBottom: 2 }}>2026년도 성과 목표</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 3 }}>
            <span style={{ fontWeight: 700, color: "#8b2500" }}>①</span><span>디지털 위협 목록 완성 — 기술별 구체적 위험, 분류 기준 확립</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 3 }}>
            <span style={{ fontWeight: 700, color: "#1a5276" }}>②</span><span>통제 방안 초안 — 금지/승인/허용 체계, 국제 레짐 비교 분석</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 3 }}>
            <span style={{ fontWeight: 700, color: "#2c3e6b" }}>③</span><span>경제 질서 청사진 — 세계 화폐, 분배, 정체성 실현 경제 모델</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 3 }}>
            <span style={{ fontWeight: 700, color: "#4a3600" }}>④</span><span>단행본 출간 — 『디지털 위협 통제』</span>
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 3 }}>
            <span style={{ fontWeight: 700, color: "#1a6b4a" }}>⑤</span><span>정치적 실현 경로 — 한국에서 새로운 질서의 모델을 먼저 만든다</span>
          </div>
        </div>

        {/* 팀원별 역할 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, borderBottom: "2px solid #111", paddingBottom: 2 }}>팀원별 역할</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, lineHeight: 1.35 }}>
            <thead><tr>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>팀원</th>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>담당</th>
              <th style={{ textAlign: "left", borderBottom: "1.5px solid #333", padding: "2px 4px", fontSize: 9 }}>연구 과제</th>
            </tr></thead>
            <tbody>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>유호현<br/><span style={{ fontWeight: 400, color: "#777" }}>팀장</span></td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>전체 방향<br/>경제 질서</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>연구 총괄, 경제 질서·거버넌스 설계, 정치적 실현</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>윤준영</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>기술·국제</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>AI 자율살상무기, 미중 패권, 국제 레짐 분석</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>김수연</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>사회·공동체</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>인간 존엄 위기, 노동·분배, 공동체 재편</td></tr>
              <tr><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee", fontWeight: 700 }}>이규환</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>제도·환경</td><td style={{ padding: "3px 4px", borderBottom: "1px solid #eee" }}>빅테크 통제, AI 에너지·환경, 디지털 권리</td></tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
