import { C } from "../masterplan-v700/constants";
import { Header, Footer, h3s } from "../masterplan-v700/shared";

const urgColor = (urg: string) =>
  urg === "진행 중" ? "#991b1b" : urg === "임박" ? "#b91c1c" : urg === "중기" ? "#ef4444" : urg === "장기" ? "#f87171" : C.red;

export function CombinedPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 질서의 붕괴와 새 사회계약" version="v0.7.16" />

      <div style={{ padding: "4px 32px 0", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* 3.1 + 3.2 좌우 2컬럼 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 10 }}>

        {/* 표 ① — 3.1 경제 질서의 타격 */}
        <div>
          <div style={h3s}>3.1 경제 질서의 타격</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "42%" }} />
              <col style={{ width: "38%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>산업화 시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>AI 시대의 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prev: "노동=소득 원리",
                  impact: "노동시간·소득 연결 붕괴. 자동화 이익은 데이터 독점자에 집중.",
                  threats: [
                    { urg: "임박", text: "대규모 직업 재편·실업 충격" },
                    { urg: "진행 중", text: "플랫폼 노동·1인 묶음직업 확산" },
                  ],
                },
                {
                  prev: "전문직 지식 독점",
                  impact: "전문 지식이 누구에게나 이전되며 전문직 소득 공식 붕괴.",
                  threats: [
                    { urg: "진행 중", text: "법률·회계·의료 전문직 소득 급감" },
                    { urg: "진행 중", text: "AI 플랫폼 독점 → 새 디지털 봉건제" },
                  ],
                },
                {
                  prev: "광고·미디어 경제",
                  impact: "개인이 대중 매체급 영향력을 확보하며 기존 미디어 경제 붕괴.",
                  threats: [
                    { urg: "진행 중", text: "언론사·미디어 기업 수익 급감" },
                    { urg: "진행 중", text: "AI 인프라 수익의 소수 집중" },
                  ],
                },
                {
                  prev: "제도적 완충 메커니즘",
                  impact: "AI 변화 속도 > 제도 적응 속도. 완충 장치가 작동하기 전에 충격이 먼저 도착.",
                  threats: [
                    { urg: "임박", text: "직업 소멸 속도가 재훈련 속도를 초과" },
                    { urg: "진행 중", text: "노동법·복지가 플랫폼·긱 노동에 뒤처짐" },
                  ],
                },
              ].map(({ prev, impact, threats }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    {threats.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: urgColor(t.urg), borderRadius: 2, padding: "1px 4px", flexShrink: 0, lineHeight: 1.4 }}>{t.urg}</span>
                        <span style={{ fontSize: 11.5, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 4, fontSize: 10, color: "#888", fontStyle: "italic" }}>
            — 아담 스미스, 『국부론』(1776) · 마르크스, 『자본론』(1867) · 케인스, 『고용·이자·화폐의 일반이론』(1936)
          </div>
        </div>

        {/* 표 ② — 3.2 정치 질서의 타격 */}
        <div>
          <div style={h3s}>3.2 정치 질서의 타격</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "42%" }} />
              <col style={{ width: "38%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>산업화 시대</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>AI 시대의 타격</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>구체적 위협 예시</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prev: "전문가·관료 위임제",
                  impact: "전문가 권위 붕괴, 위임 정당성 약화.",
                  threats: [
                    { urg: "진행 중", text: "AI 허위정보로 전문가 신뢰 붕괴" },
                    { urg: "진행 중", text: "포퓰리즘·반엘리트 정서 심화" },
                  ],
                },
                {
                  prev: "조직·직업 단체 기반 대의제",
                  impact: "노조·협회 기반 대의제 약화. 강화된 개인이 직접 정치 행위자로 등장.",
                  threats: [
                    { urg: "진행 중", text: "노조·협회 대표성 급격히 약화" },
                    { urg: "임박", text: "개인 직접 정치 행동 폭발" },
                  ],
                },
                {
                  prev: "공론장과 여론 형성",
                  impact: "AI 마이크로타게팅이 공론장을 분열시키고 빅테크가 민주적 의사결정을 잠식.",
                  threats: [
                    { urg: "진행 중", text: "AI 딥페이크·선거 개입" },
                    { urg: "진행 중", text: "에코챔버 심화·공론장 분열" },
                  ],
                },
                {
                  prev: "다자주의 국제 질서",
                  impact: "AI 패권경쟁이 기술블록화를 가속. 글로벌 규범 형성 공간을 국가 간 세력 경쟁이 잠식.",
                  threats: [
                    { urg: "진행 중", text: "미·중 AI 패권경쟁·수출 통제·기술블록화" },
                    { urg: "임박", text: "국가 AI 무기화·디지털 주권 분열" },
                  ],
                },
              ].map(({ prev, impact, threats }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 12, verticalAlign: "top", lineHeight: 1.5, fontWeight: 700, color: C.navy }}>{prev}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontSize: 11.5, verticalAlign: "top", lineHeight: 1.5, color: "#333" }}>{impact}</td>
                  <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" }}>
                    {threats.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: j < threats.length - 1 ? 4 : 0 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: urgColor(t.urg), borderRadius: 2, padding: "1px 4px", flexShrink: 0, lineHeight: 1.4 }}>{t.urg}</span>
                        <span style={{ fontSize: 11.5, color: "#333", lineHeight: 1.4 }}>{t.text}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 4, fontSize: 10, color: "#888", fontStyle: "italic" }}>
            — 루소, 『사회계약론』(1762) · 홉스, 『리바이어던』(1651) · 하버마스, 『공론장의 구조변동』(1962)
          </div>
        </div>

        </div>{/* end grid */}

        {/* 표 ③ — 3.3 새로운 사회계약 */}
        <div style={{ flex: 1 }}>
          <div style={h3s}>3.3 새로운 사회계약</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "44%" }} />
              <col style={{ width: "44%" }} />
            </colgroup>
            <thead>
              <tr style={{ background: C.navy, color: "#fff" }}>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>강화 영역</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 권리 — 강화된 개인이 요구하는 것</th>
                <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 12 }}>새 거버넌스 — 권리를 작동시키는 것</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dim: "판단력",
                  right: "AI 인프라 평등 접근권",
                  rightDesc: "AI·연산·데이터는 공공재. 소수 기업 독점은 새 계급 고착으로 직결. 데이터 주권과 이동권 보장 필수.",
                  gov: "사전승인 거버넌스",
                  govDesc: "의약품처럼 AI도 개발자가 안전성을 입증한 후 출시. 플랫폼 공공성을 보장하고, 위기 대응 권한은 한시적이며 해소 시 자동 소멸.",
                },
                {
                  dim: "실행력",
                  right: "정체성 실현권",
                  rightDesc: "직업 하나에 묶이지 않을 권리. 돌봄·창작·학습 등 시장 바깥 기여에 소득·존엄 인정.",
                  gov: "재편 완충 거버넌스",
                  govDesc: "전환 인프라로 재편기 소외 계층을 지원하고, AI 이익을 환수해 디지털 배당·공공 인프라로 환류. 가정·도시·국가·세계가 한시적으로 분담하는 다층 구조.",
                },
                {
                  dim: "파급력",
                  right: "알고리즘 자기결정권",
                  rightDesc: "AI의 판단에 설명을 요구하고 거부할 수 있는 권리. 정치 광고·채용·신용 평가 등 자동화 결정에서 탈출 보장.",
                  gov: "공론장 보호 거버넌스",
                  govDesc: "AI 콘텐츠 출처 표시·마이크로타게팅 규제로 공론장 중립성을 보호. 국경을 넘는 패권 경쟁은 글로벌 한시 협력으로 대응.",
                },
              ].map(({ dim, right, rightDesc, gov, govDesc }, i) => (
                <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5, fontWeight: 800, color: C.navy, fontSize: 13 }}>{dim}</td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{right}</div>
                    <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>{rightDesc}</div>
                  </td>
                  <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", verticalAlign: "top", lineHeight: 1.5, borderLeft: `2px solid ${C.navy}` }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{gov}</div>
                    <div style={{ fontSize: 11.5, color: "#444", lineHeight: 1.5 }}>{govDesc}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 주체 딜레마 강조 박스 */}
          <div style={{ marginTop: 8, padding: "8px 12px", background: C.bg, borderLeft: `3px solid ${C.red}`, borderRadius: 2 }}>
            <div style={{ fontSize: 11.5, color: "#222", lineHeight: 1.55 }}>
              <span style={{ fontWeight: 800, color: C.red, marginRight: 6 }}>새 사회계약의 딜레마</span>
              규제해야 할 국가보다 빅테크가 더 강한 현실. 새 사회계약 구축의 주체는 단일 국가가 아닌 <span style={{ fontWeight: 700, color: C.navy }}>민주국가 연합의 집단 행동</span>이어야 한다.
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
