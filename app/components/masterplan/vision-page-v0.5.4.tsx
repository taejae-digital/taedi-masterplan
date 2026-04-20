/* p.1 비전: 기술 혁신과 질서 전환의 역사 (v0.5.2 시각화) */
import { C } from "./constants";
import { Header } from "./shared";

export function VisionPage() {
  const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 14.5, lineHeight: 1.8, color: "#111", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 17, fontWeight: 800, color: C.navy, margin: "18px 0 8px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 서론: 기술 혁신과 질서 전환의 유비" />

      <div style={{ padding: "20px 32px 16px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          인쇄술이 산업사회 질서를 만들었듯, 디지털 기술은 정보화 사회의 새로운 질서를 요청한다.<br />
          개인이 바뀌면 공동체가 바뀌고, 공동체가 바뀌면 질서가 바뀐다.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, padding: "0 32px" }}>
        <div>
          <div style={h3s}>1.1 기술 혁신의 두 흐름: 물리적 확장 vs 인지적 확장</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <div style={{ padding: "12px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #eee" }}>
              <strong style={{ color: C.navy }}>유형 1: 물리적 능력 확장 (Industrial)</strong>
              <p style={{ fontSize: 13.5, marginTop: 5 }}>바퀴 → 증기기관 → 내연기관. 인간 신체의 한계 돌파. 생산방식을 바꾸고 계급 구조를 형성하기까지 수십 년의 시차 발생.</p>
            </div>
            <div style={{ padding: "12px", background: "#eef2ff", borderRadius: "8px", border: "1px solid #c7d2fe" }}>
              <strong style={{ color: C.navy }}>유형 2: 인지·판단 능력 확장 (Digital/AI)</strong>
              <p style={{ fontSize: 13.5, marginTop: 5 }}>문자 → 인쇄술 → 컴퓨터 → AI. 인간의 기억·추론·판단 한계 돌파. 권력 구조의 핵심인 '정보 해석과 판단'을 직접 건드림으로써 즉각적 체제 전환 촉발.</p>
            </div>
          </div>

          <div style={h3s}>1.2 인쇄술의 경로: 산업사회 질서의 탄생</div>
          <div style={{ fontSize: 14, color: "#333", lineHeight: 1.6 }}>
             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
               <span style={{ padding: "4px 8px", background: C.navy, color: "#fff", borderRadius: 4, fontSize: 11 }}>역사</span>
               <span>지식 독점 해체 (수도원/왕실) → 시민의식 발생 → 대의민주주의/국민국가 성립</span>
             </div>
             <p style={ps}>인쇄술은 지식의 '수신' 능력을 대중화했으나 '생산'은 여전히 기관의 몫이었다. 디지털 기술은 이 한계를 넘어 생산·유통·적용 능력까지 개인에게 이전한다.</p>
          </div>
        </div>

        <div>
          <div style={h3s}>1.3 핵심 질문: 새로운 질서의 설계</div>
          <p style={ps}>
            "정보화 사회에서 자본주의도 공산주의도 아닌, 새로운 경제·정치 질서는 무엇인가?"
          </p>
          <div style={{ padding: "15px", borderLeft: "4px solid #e67e22", background: "#fff9f0", borderRadius: "0 8px 8px 0" }}>
            <div style={{ fontWeight: 800, marginBottom: 5 }}>핵의 교훈 vs AI의 시급성</div>
            <p style={{ fontSize: 13.5 }}>핵 기술은 냉전 이후에야 통제를 시도했으나 그 대가는 공포였다. 디지털 기술은 그보다 빠르고 광범위하다. 역사를 되풀이하지 않으려면 <strong>'지금'</strong> 설계해야 한다.</p>
          </div>

          <div style={h3s}>1.4 역량 이전의 네 가지 축</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
             <div style={{ padding: 10, background: "#f1f5f9", borderRadius: 6, textAlign: "center", fontSize: 13 }}><strong>전문성</strong><br/>진입장벽 축소</div>
             <div style={{ padding: 10, background: "#f1f5f9", borderRadius: 6, textAlign: "center", fontSize: 13 }}><strong>정보</strong><br/>비대칭 해소</div>
             <div style={{ padding: 10, background: "#f1f5f9", borderRadius: 6, textAlign: "center", fontSize: 13 }}><strong>네트워크</strong><br/>즉각적 연결</div>
             <div style={{ padding: 10, background: "#f1f5f9", borderRadius: 6, textAlign: "center", fontSize: 13 }}><strong>생산수단</strong><br/>인프라 민주화</div>
          </div>
        </div>
      </div>
    </div>
  );
}
