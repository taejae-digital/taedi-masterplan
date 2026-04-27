import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function IndividualCommunityPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 디지털 전환에 따른 개인과 공동체 변화" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          산업화가 분업으로 개인을 조직 안에 끌어들였다면, AI 시대의 자동화는 그 분업을 해체해 개인을 조직 밖으로 밀어낸다.
          그에 따라 공동체의 중심도 국가에서 도시로, 수직 위임에서 수평 조율로 이동한다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
        {/* 왼쪽: 2.1 개인의 역사 + 2.2 개인의 변화 */}
        <div>
          <div style={h3s}>2.1 개인의 역사 — 농업시대 · 산업시대 · 디지털시대</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 10, fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "18%" }}>시대</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>생산 단위</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>정체성의 근거</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>삶의 공식</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["농업시대", "가족·마을", "혈통·토지·신분", "태어난 대로 사는 삶"],
                ["산업시대", "기업·조직", "직업·직급·소속", "정체성을 직업에 맞추는 삶"],
                ["디지털시대", "개인+AI", "역량·관심·기여", "삶을 정체성에 맞추는 삶"],
              ].map(([age, unit, id, life], i) => (
                <tr key={i} style={{ background: i === 2 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: i === 2 ? 800 : 700, color: i === 2 ? C.navy : "#333" }}>{age}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{unit}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{id}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: i === 2 ? C.navy : "#333", fontWeight: i === 2 ? 700 : 500 }}>{life}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ ...ps, fontSize: 12.5 }}>
            농업시대의 개인은 가족과 마을 안에서 태어난 대로 살았다. 산업시대의 개인은 기업이라는 분업 기계의 한 조각으로 자신을 규정했다. 직업·직급·소속이 '나'를 설명했고, '회사 사람'이 근대적 인간의 표준형이 되었다. 디지털시대의 개인은 AI와 결합하여 과거 조직 하나가 하던 일을 해낸다. 조직은 여전히 존재하지만 개인이 반드시 그 안에 있어야 할 이유가 줄어든다.
          </p>

          <div style={h3s}>2.2 개인의 변화 — 4 계층, 갈망, 자유</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, margin: "6px 0 4px" }}>AI 시대의 4 계층 재편</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, marginBottom: 10 }}>
            {[
              { t: "리더", s: "2%→5%", d: "AI 설계자. 기준·플랫폼 재정의." },
              { t: "프로", s: "53%→25%", d: "AI 활용자. 정체성 공식 붕괴." },
              { t: "아마추어", s: "35%→65%", d: "AI 의존자. 인정 경로 불안정." },
              { t: "소외", s: "10%→5%", d: "AI 접근 불가. 격차 질적 심화." },
            ].map(({ t, s, d }) => (
              <div key={t} style={{ padding: "6px 8px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{t}</div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: "#555", marginBottom: 2 }}>{s}</div>
                <div style={{ fontSize: 10.5, lineHeight: 1.5, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, margin: "6px 0 4px" }}>확장된 개인의 네 가지 갈망</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
            {[
              { t: "자율", d: "타인이 정한 틀이 아닌 스스로 설계하는 삶." },
              { t: "의미", d: "생존 이상의 삶. 시장 가치가 아닌 자기가 납득하는 활동." },
              { t: "기여", d: "조직 종속 없이 공동의 목표에 참여." },
              { t: "인정", d: "소속이 아닌 기여로 증명되는 정체성." },
            ].map(({ t, d }) => (
              <div key={t} style={{ padding: "6px 9px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
                <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{t}</div>
                <div style={{ fontSize: 11, lineHeight: 1.55, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, margin: "6px 0 4px" }}>시대별 자유 요구와 제도화된 권리</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 8, fontSize: 11 }}>
            <thead>
              <tr style={{ background: C.accent, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5, width: "16%" }}>기술</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5 }}>원한 자유</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5 }}>제도화된 권리</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["농업 기술", "토지를 소유·상속할 자유", "토지 소유권·상속권"],
                ["인쇄술", "성서·지식을 해석할 자유", "신앙·학문의 자유"],
                ["산업 기계", "일·정치에 참여할 자유", "직업선택권·계약권·참정권"],
                ["대중 미디어", "말하고 모일 자유", "표현·결사·노동·소수자 권리"],
                ["인터넷", "정보·플랫폼 참여 자유", "정보접근권·플랫폼 이용권"],
                ["디지털·AI", "기관에 속하지 않고 스스로 삶·정체성을 설계할 자유", "(미정립)"],
              ].map(([tech, freedom, right], i) => (
                <tr key={i} style={{ background: i === 5 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: i === 5 ? C.navy : "#333" }}>{tech}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#333" }}>{freedom}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: i === 5 ? C.red : "#333", fontWeight: i === 5 ? 700 : 500 }}>{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 오른쪽: 2.3 공동체의 역사 + 2.4 공동체의 변화 */}
        <div>
          <div style={h3s}>2.3 공동체의 역사 — 농업시대 · 산업시대 · 디지털시대</div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 10, fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11, width: "18%" }}>시대</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>중심 공동체</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>조율 방식</th>
                <th style={{ padding: "5px 7px", textAlign: "left", fontSize: 11 }}>위임의 논리</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["농업시대", "마을·영주", "관습·혈연·종교", "신분에 내재된 지배"],
                ["산업시대", "국가·기업", "법·관료제·시장", "국민의 계약적 위임"],
                ["디지털시대", "도시·네트워크", "데이터·알고리즘·참여", "목적 한정 한시 위임"],
              ].map(([age, unit, method, delegation], i) => (
                <tr key={i} style={{ background: i === 2 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", fontWeight: i === 2 ? 800 : 700, color: i === 2 ? C.navy : "#333" }}>{age}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{unit}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: "#333" }}>{method}</td>
                  <td style={{ padding: "5px 7px", borderBottom: "1px solid #eee", color: i === 2 ? C.navy : "#333", fontWeight: i === 2 ? 700 : 500 }}>{delegation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ ...ps, fontSize: 12.5 }}>
            농업시대의 공동체는 마을과 영주 중심이었다. 조율은 관습과 혈연, 종교로 이루어졌고, 지배는 신분 안에 내재돼 있었다. 산업시대에 오면 공동체의 중심이 국민국가와 기업으로 옮겨간다. 법과 관료제, 시장이 조율 장치가 되고, 개인이 국가에 주권을 위임하는 계약의 논리가 자리 잡는다. 디지털시대에는 다시 한 번 중심이 이동한다. 국가의 독점은 약해지고, 도시와 네트워크가 실제 조율 단위가 된다. 위임은 영구적 계약이 아니라 목적이 달성되면 환수되는 한시적 권한이 되어야 한다.
          </p>

          <div style={h3s}>2.4 공동체의 변화 — 도시 중심 · 국가 약화 · 권한의 위임</div>
          <p style={ps}>
            디지털 전환은 공동체의 세 가지 구조를 동시에 바꾼다. 첫째, <strong>도시 중심</strong>이다. 데이터·AI·인재·창조 산업이 특정 대도시 클러스터에 집적되며, 실험·정책·삶의 질 경쟁의 단위가 국가에서 도시로 이동한다. 둘째, <strong>국가의 약화</strong>다. 사이버 공간과 플랫폼, 암호화폐가 국가의 안보·사법·화폐 독점을 우회하고, 빅테크의 조세·규제 우회는 국가 재정의 근거를 흔든다. 셋째, <strong>권한의 재설계</strong>다. 산업시대의 주권 위임이 '한 번 맡기면 임기 내내 포괄적으로 위임'이었다면, 디지털시대의 위임은 '꼭 필요한 만큼만, 투명하게, 목적이 달성되면 자동 환수'되는 구조여야 한다.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 8, fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: C.accent, color: "#fff" }}>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5, width: "18%" }}>공동체</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5 }}>산업시대 역할</th>
                <th style={{ padding: "4px 6px", textAlign: "left", fontSize: 10.5 }}>디지털시대 재균형</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["가정", "노동력 재생산 · 미성년 보호", "정체성 허브 · 창작·생산 단위"],
                ["이웃", "일상적 신뢰 · 비공식 돌봄", "위기 대응 · 의식적 생활 연대"],
                ["마을", "복지·교육·생활 인프라", "직접 조정 단위 · 실험의 규모"],
                ["도시", "일자리·집적 경제", "삶의 질·창조 플랫폼 · 데이터 주권"],
                ["국가", "안보·법치·복지 독점", "조건 설계자 · 도시·민간 실행 위임"],
                ["글로벌", "UN·국제기구 중개", "AI·팬데믹·기후의 목적 한정 거버넌스"],
              ].map(([c, old, next], i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy }}>{c}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#555" }}>{old}</td>
                  <td style={{ padding: "4px 6px", borderBottom: "1px solid #eee", color: "#222", fontWeight: 600 }}>{next}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: "8px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, marginTop: 6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>재균형의 원칙</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: "#222" }}>
              개인이 혼자 못 하는 일에만 위임 · 위임된 권력은 투명하게 감시 · 목적을 달성하면 자동 환수 · 개인·공동체의 이익이 충돌할 때는 공공선이 기준.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
