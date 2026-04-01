const tag = (color: string, text: string) => (
  <span style={{ display: "inline-block", padding: "1px 5px", borderRadius: 3, background: color, color: "#fff", fontSize: 9, fontWeight: 600, marginRight: 3 }}>{text}</span>
);

const C = { danger: "#8b2500", warn: "#b8860b", opp: "#1a6b4a", ban: "#5c1a0a", econ: "#2c3e6b", gov: "#4a3600", comm: "#2d6a4f", commDk: "#0d4a30", gold: "#8c6d1f", inv: "#555" };

const cell: React.CSSProperties = { padding: "4px 6px", borderBottom: "1px solid #eee", verticalAlign: "top", fontSize: 10, lineHeight: 1.4 };
const hcell: React.CSSProperties = { padding: "3px 6px", borderBottom: "2px solid #333", fontSize: 9, fontWeight: 700, textAlign: "left" };
const stag = (color: string): React.CSSProperties => ({ fontWeight: 700, color, fontSize: 9, minWidth: 50, flexShrink: 0 });

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: `3px solid ${color}`, border: "1px solid #ddd", padding: "8px 10px", background: "#fff" }}>
      <div style={{ fontSize: 11, fontWeight: 700, color, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 10, lineHeight: 1.5, color: "#444" }}>{children}</div>
    </div>
  );
}

function Row({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 2 }}>
      <span style={stag(color)}>{label}</span>
      <span>{children}</span>
    </div>
  );
}

export function V5TableDiagram() {
  return (
    <div style={{ width: "100%", paddingTop: 20 }}>
      <h1 style={{ fontSize: 17, fontWeight: 800, marginBottom: 2 }}>신기술(디지털)이 초래할 위험성과 그 대책</h1>
      <p style={{ fontSize: 11, color: "#777", marginBottom: 12 }}>태재미래전략연구원 디지털 전환과 사회변혁팀 · 2026년 연구계획</p>

      {/* ═══ AS-IS / TO-BE / TO-DO (핵심5%, 주요15%, 파생80%) ═══ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
        <Section title="AS-IS — 현재" color="#333">
          <Row label="핵심 5%" color={C.danger}>
            <strong>효율=가치 체계가 AI를 파멸로 전환</strong> — 인간 대체·권력 집중·군사화가 "합리적 결론"이 되는 구조
          </Row>
          <Row label="주요 15%" color={C.warn}>
            <strong>개인:</strong> 남의 꿈을 위한 노동. "정체성 실현은 사치"<br/>
            <strong>공동체:</strong> 일자리와 성장 제공. 국가는 효율로 경쟁
          </Row>
          <Row label="파생 80%" color="#999">
            생존 위협·권력 집중·노동의 위기·불평등·민주주의 침식·거버넌스 공백
          </Row>
        </Section>

        <Section title="TO-BE — 새로운 질서" color={C.opp}>
          <Row label="핵심 5%" color={C.opp}>
            <strong>정체성 실현권</strong> — 남의 꿈이 아닌 자기 삶의 목적을 추구할 권리. 참정권이 민주주의를 정의했듯, 정체성 실현권이 디지털 시대를 정의
          </Row>
          <Row label="주요 15%" color={C.opp}>
            <strong>개인:</strong> 자기 삶의 목적을 추구<br/>
            <strong>공동체:</strong> 국민의 정체성 실현을 보장
          </Row>
          <Row label="파생 80%" color="#999">
            금지선·권력 균형·분배 재설계·새로운 경제 질서·거버넌스→세계 정부
          </Row>
        </Section>

        <Section title="TO-DO — 우리가 할 일" color={C.gold}>
          <Row label="핵심 5%" color={C.gold}>
            <strong>안전한 가치 전환</strong> — 위협을 정확히 특정하고 통제한다. 가치 전환이 서야 규제·분배·거버넌스의 방향이 정해진다
          </Row>
          <Row label="주요 15%" color={C.gold}>
            <strong>①</strong> 위협 통제 (금지/승인)<br/>
            <strong>②</strong> 경제 질서 설계<br/>
            <strong>③</strong> 거버넌스 구축
          </Row>
          <Row label="파생 80%" color="#999">
            공동체 재편 + 정치적 실현 — 한국에서 새로운 질서의 모델을 먼저 만든다
          </Row>
        </Section>
      </div>

      {/* ═══ 메인 테이블: 0→1→2/3→4→5 ═══ */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 10 }}>
        <thead>
          <tr>
            <th style={{ ...hcell, width: "11%", color: C.inv }}>0. 불변</th>
            <th style={{ ...hcell, width: "20%", color: "#333" }}>1. 변화</th>
            <th style={{ ...hcell, width: "15%", color: "#1a5276" }}>2. 통제 / 3. 경제 질서</th>
            <th style={{ ...hcell, width: "12%", color: C.gov }}>4. 거버넌스</th>
            <th style={{ ...hcell, width: "18%", color: C.comm }}>5. 공동체 재편</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: "#fff8f6" }}>
            <td style={{ ...cell, fontWeight: 700, color: C.inv }} rowSpan={3}>권력은<br/>집중되려 한다<br/><span style={{ fontWeight: 400, fontSize: 9, color: "#999" }}>토지→자본→데이터→AI<br/>매체만 바뀌고 경향은 동일</span></td>
            <td style={cell}>{tag(C.danger,"긴급")} AI 생물무기 — 대학원생도 설계 가능</td>
            <td style={{ ...cell, fontWeight: 600, color: C.ban }} rowSpan={3}>{tag(C.ban,"금지")}<br/>개발 자체를 막는다.<br/>독립 검증 기구 사찰.<br/>강대국 특권 배제.</td>
            <td style={{ ...cell, color: C.gov }}>AI 통제 기구</td>
            <td style={{ ...cell, background: C.commDk, color: "#fff", fontWeight: 600 }}>세계 정부 — 화폐·규제·분쟁</td>
          </tr>
          <tr style={{ background: "#fff8f6" }}>
            <td style={cell}>{tag(C.danger,"긴급")} 사이버 WMD — 인프라 상호 파괴</td>
            <td style={{ ...cell, color: C.gov }}>세계 의회</td>
            <td style={{ ...cell, background: C.comm, color: "#fff" }}>국가 — 최소 개입</td>
          </tr>
          <tr style={{ background: "#fff8f6" }}>
            <td style={cell}>{tag(C.danger,"긴급")} 핵AI화/자율살상 — 인간 없는 핵 발사</td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr style={{ background: "#fffdf5" }}>
            <td style={{ ...cell, fontWeight: 700, color: C.inv }} rowSpan={2}>공동체는<br/>질서를 원한다<br/><span style={{ fontWeight: 400, fontSize: 9, color: "#999" }}>관습→법률→관료제→알고리즘<br/>도구가 바뀌고 욕구는 동일</span></td>
            <td style={cell}>{tag(C.warn,"높음")} AI 통제 상실 — 자율적 목표 추구</td>
            <td style={{ ...cell, fontWeight: 600, color: C.warn }} rowSpan={2}>{tag(C.warn,"승인")}<br/>개발자가 안전 입증<br/>후 배포. 부작용<br/>기록·공개 의무.</td>
            <td style={{ ...cell, color: C.gov }}>국가 의회</td>
            <td style={{ ...cell, background: C.comm, color: "#fff" }}>도시 — 삶의 질 플랫폼</td>
          </tr>
          <tr style={{ background: "#fffdf5" }}>
            <td style={cell}>{tag(C.warn,"진행중")} 감시/조작 — 민주주의 침식</td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>

          <tr>
            <td style={{ ...cell, fontWeight: 700, color: C.inv }} rowSpan={4}>개인은<br/>자유를 원한다<br/><span style={{ fontWeight: 400, fontSize: 9, color: "#999" }}>신앙→시민권→사회권→정체성 실현권<br/>범위가 확장되고 욕구는 동일</span></td>
            <td style={cell}>{tag(C.opp,"기회")} 누구나 전문가급</td>
            <td style={{ ...cell, fontWeight: 600, color: C.econ }} rowSpan={4}>{tag(C.econ,"경제 질서")}<br/>세계 화폐<br/>AI 이윤 환원<br/>정체성 실현 경제</td>
            <td style={{ ...cell, color: C.gov }}>도시 의회</td>
            <td style={{ ...cell, background: C.comm, color: "#fff" }}>이웃/마을 — 가치 공동체</td>
          </tr>
          <tr>
            <td style={cell}>{tag(C.opp,"기회")} 노동 구조 전환</td>
            <td style={cell}></td>
            <td style={{ ...cell, background: C.comm, color: "#fff" }}>스마트홈 — 정체성 허브</td>
          </tr>
          <tr>
            <td style={cell}>{tag(C.opp,"기회")} 소유권 변화</td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>
          <tr>
            <td style={cell}>{tag(C.opp,"기회")} 탈국가화</td>
            <td style={cell}></td>
            <td style={cell}></td>
          </tr>
        </tbody>
      </table>

      {/* 분류 기준 + 관찰 원칙 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div style={{ fontSize: 9.5, color: "#666", padding: "5px 8px", background: "#f9f9f9", borderRadius: 4 }}>
          <strong style={{ color: "#333" }}>분류 기준:</strong> 비가역성 · 무차별성 · 통제불능 · 규모 → 2개+ = 금지 / 1개 = 승인 / 0개 = 허용.
          같은 기술도 용도에 따라 분류가 다르다.
        </div>
        <div style={{ fontSize: 9.5, color: "#666", padding: "5px 8px", background: "#f9f9f9", borderRadius: 4 }}>
          <strong style={{ color: "#333" }}>관찰의 원칙:</strong> 변하는 것과 변하지 않는 것을 구분. 변화의 단계(씨앗→싹→꽃→열매)를 파악.
          초기에 잡아야 한다 — 방치하면 핵처럼 수습이 안 된다.
        </div>
      </div>

    </div>
  );
}
