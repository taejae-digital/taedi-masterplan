import { C } from "../components/masterplan/constants";

export default function NanoBananaPage() {
  const pageStyle: React.CSSProperties = { 
    width: "420mm", // A3 Landscape width
    height: "297mm", 
    padding: "40px", 
    background: "#fff", 
    pageBreakAfter: "always",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Pretendard, -apple-system, sans-serif"
  };
  
  const h1: React.CSSProperties = { fontSize: "42px", fontWeight: 900, color: C.navy, marginBottom: "20px" };
  const h2: React.CSSProperties = { fontSize: "28px", fontWeight: 800, color: C.navy, borderBottom: `4px solid ${C.navy}`, paddingBottom: "10px", marginBottom: "30px" };
  const bodyText: React.CSSProperties = { fontSize: "22px", lineHeight: 1.6, color: "#111", wordBreak: "keep-all" };
  const box: React.CSSProperties = { background: "#f8f9fa", padding: "30px", borderRadius: "15px", border: "1px solid #ddd" };

  return (
    <div style={{ background: "#eee" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 0; } body { margin: 0; } }`}</style>
      
      {/* 1P: 서론 - 질서 전환의 역사 */}
      <div style={pageStyle}>
        <h1 style={h1}>Nano Banana: Digital Masterplan v0.5.2</h1>
        <h2 style={h2}>1. 인쇄술의 재림, 디지털 전환의 본질</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "20px" }}>
          <div style={bodyText}>
            핵 기술이 물리적 파괴의 위협이었다면, 디지털 기술은 <strong>인지와 판단의 권력 재편</strong>입니다. 
            구텐베르크의 인쇄술이 지식 독점을 깨고 근대 시민사회를 열었듯, 
            AI는 기관의 전문성을 개인에게 이전하며 새로운 질서를 요청하고 있습니다.
          </div>
          <div style={box}>
            <div style={{ fontWeight: 800, fontSize: "24px", marginBottom: "15px" }}>핵심 유비 (Analogy)</div>
            <ul style={{ fontSize: "20px", lineHeight: 1.8 }}>
              <li><strong>물리적 확장:</strong> 증기기관 → 생산력 (산업사회)</li>
              <li><strong>인지적 확장:</strong> AI → 판단력 (정보화사회)</li>
              <li><strong>질서의 지체:</strong> 기술은 빛의 속도, 거버넌스는 거북이의 속도</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2P: 개인 - 계층 재편과 갈망 */}
      <div style={pageStyle}>
        <h2 style={h2}>2. 강화된 개인: 프로의 해체와 정체성의 시대</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div style={box}>
            <div style={{ fontWeight: 800, fontSize: "24px", marginBottom: "15px", color: "#e63946" }}>계층 대이동</div>
            <div style={{ fontSize: "26px", fontWeight: 700 }}>Pro: 53% → 25% (반토막)</div>
            <div style={{ fontSize: "26px", fontWeight: 700 }}>Amateur: 35% → 65% (폭증)</div>
            <p style={{ marginTop: "15px", fontSize: "18px" }}>"무슨 일 하세요?"에 답할 수 없는 사람이 다수가 되는 사회적 존재론의 위기.</p>
          </div>
          <div style={bodyText}>
            강화된 개인은 네 가지를 갈망합니다: <strong>자율, 의미, 기여, 인정.</strong>
            단순 고용 관계를 넘어, 자신의 정체성을 실현하고 가치를 직접 증명하는 '정체성 실현권'이 참정권 이후의 핵심 권리로 부상합니다.
          </div>
        </div>
      </div>

      {/* 3P: 공동체 - 위임의 재설계 */}
      <div style={pageStyle}>
        <h2 style={h2}>3. 공동체: 목적 달성 후 소멸하는 권력</h2>
        <div style={bodyText}>
          기존의 대의제와 관료제는 '정보의 비대칭'을 전제로 설계되었습니다. 개인이 똑똑해진 시대, 위임의 정당성은 흔들립니다. 
          우리는 <strong>'과업 완성 시 소멸하는 권력'</strong>을 설계해야 합니다.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "40px" }}>
          <div style={{ ...box, textAlign: "center" }}><strong>가정/도시</strong><br/>정체성 허브 및 실험 단위</div>
          <div style={{ ...box, textAlign: "center" }}><strong>유동민주주의</strong><br/>실시간 숙의와 평가</div>
          <div style={{ ...box, textAlign: "center" }}><strong>데이터 주권</strong><br/>개인 생산 가치의 직접 귀속</div>
        </div>
      </div>

      {/* 4P: 경제/정치 - 새로운 질서의 원리 */}
      <div style={pageStyle}>
        <h2 style={h2}>4. 새로운 질서: 롱테일 경제와 프로그래머블 거버넌스</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px" }}>
          <div>
            <div style={{ ...bodyText, marginBottom: "30px" }}>
              <strong>Digital Economy:</strong> 노동 시간이 아닌 문제해결력 기반 분배. 메가마켓이 아닌 수만 개의 니치마켓이 공존하는 롱테일 생태계.
            </div>
            <div style={bodyText}>
              <strong>Digital Politics:</strong> 알고리즘 조작을 배제한 진정한 '일반의지' 형성. 규범 위반에 대해 즉각적이고 초국가적인 실효 제재력을 갖춘 시스템.
            </div>
          </div>
          <div style={{ ...box, background: C.navy, color: "#fff" }}>
            <div style={{ fontSize: "20px", lineHeight: 1.6 }}>
              "스미스, 마르크스, 폴라니, 루소의 통찰을 딛고, 산업화의 유산을 넘어 정보화 고유의 사상적 영토를 개척한다."
            </div>
          </div>
        </div>
      </div>

      {/* 5P: 글로벌 - 미중 대타협과 한국의 돌파구 */}
      <div style={pageStyle}>
        <h2 style={h2}>5. 거버넌스: FDA 레짐과 호주 모델</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div style={box}>
            <div style={{ fontWeight: 800, fontSize: "22px", color: C.navy }}>글로벌 AI 통제 2대 원칙</div>
            <p style={{ marginTop: "10px", fontSize: "19px" }}>
              1. <strong>FDA 레짐:</strong> 개발자의 안전 입증 책임.<br/>
              2. <strong>WHO 모델:</strong> 특정 위기 대응 후 권한 소멸.
            </p>
          </div>
          <div style={bodyText}>
            미중 AI 패권 전쟁의 교착 상태를 돌파할 <strong>'지적 돌파구'</strong>가 필요합니다. 
            한국은 1992년 호주가 그랬듯, 중견국으로서 대결을 협력으로 전환시킬 세계 수준의 이론적 토대와 통제 안을 제시합니다.
          </div>
        </div>
        <div style={{ marginTop: "auto", textAlign: "center", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
          <strong style={{ fontSize: "18px", color: "#888" }}>masterplan v0.5.2 · Nano Banana Project</strong>
        </div>
      </div>
    </div>
  );
}
