/* p.3 공동체: 위임 구조의 재설계 (v0.5.2 시각화) */
import { C } from "./constants";
import { Header } from "./shared";

export function ResearchContentPage() {
  const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 13.5, lineHeight: 1.7, color: "#111", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 16, fontWeight: 800, color: C.navy, margin: "14px 0 8px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="3. 공동체: 위임의 재설계와 새로운 원리" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, padding: "0 32px" }}>
        <div>
          <div style={h3s}>3.1 위임의 정당성 위기와 재구성</div>
          <p style={ps}>위임은 역량의 비대칭에 기초한다. 디지털 기술이 이 비대칭을 축소하면 기존 구조(대의제, 관료제)는 정당성 위기에 직면한다.</p>
          
          <div style={{ padding: "12px", background: "#f1f5f9", borderRadius: 8, marginBottom: 15 }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: C.navy, marginBottom: 5 }}>위임의 조건 (Redesign)</div>
            <ul style={{ fontSize: 13, lineHeight: 1.6 }}>
              <li>개인 혼자 해결 불가한 문제(글로벌 위협)에 한정</li>
              <li>투명한 감시와 실시간 평가 메커니즘</li>
              <li>과업 완료 시 권력의 자동 환수(소멸)</li>
            </ul>
          </div>

          <div style={h3s}>3.2 공동체 단위별 변화</div>
          <div style={{ fontSize: 13, lineHeight: 1.6 }}>
            • <strong>가정/이웃:</strong> 기성 권위의 해체와 정체성 허브화<br/>
            • <strong>마을/도시:</strong> 생활세계 조정의 유연한 실험 단위 (강소도시 부상)<br/>
            • <strong>국가:</strong> 영토적 안보·법치·복지 독점력의 분산 및 침식<br/>
            • <strong>글로벌:</strong> 개인의 직접 접속과 초국가적 위협의 충돌
          </div>
        </div>

        <div>
          <div style={h3s}>3.3 새로운 경제·정치 질서의 설계 원리</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
             <div style={{ padding: "12px", background: "#eef2ff", borderRadius: 8, border: "1px solid #c7d2fe" }}>
               <strong style={{ fontSize: 14.5, color: C.navy }}>Digital Economy: 분산·협력</strong>
               <ul style={{ fontSize: 12.5, marginTop: 6, paddingLeft: 16, color: "#333" }}>
                 <li><strong>역량 기반 분래:</strong> 노동시간이 아닌 문제해결력과 판단력 기준 보상</li>
                 <li><strong>니치마켓 생태계:</strong> 메가마켓을 대체하는 롱테일(Long-tail) 가치 실현</li>
                 <li><strong>데이터 주권:</strong> 개인 생산 데이터의 소유권과 이익 환유 체계</li>
               </ul>
             </div>
             <div style={{ padding: "12px", background: "#fff7ed", borderRadius: 8, border: "1px solid #fed7aa" }}>
               <strong style={{ fontSize: 14.5, color: "#9a3412" }}>Digital Politics: 자기해체 권력</strong>
               <ul style={{ fontSize: 12.5, marginTop: 6, paddingLeft: 16, color: "#333" }}>
                 <li><strong>목적 한정 권력:</strong> 특정 위기 해소 시 자동으로 소멸하는 프로그래머블 권한</li>
                 <li><strong>유동민주주의:</strong> 디지털 숙의와 실시간 평가가 결합된 상시 참여 구조</li>
                 <li><strong>제재력 있는 거버넌스:</strong> 규범 위반에 대한 초국가적 실효 제재</li>
               </ul>
             </div>
          </div>

          <div style={h3s}>3.4 사상적 계승과 단절 (Beyond Industrial Era)</div>
          <p style={{ fontSize: 12.5, color: "#444", marginBottom: 10 }}>"산업화 시대 사상가들의 통찰을 토대로, 정보화 사회의 고유한 긴장을 해결한다."</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 12.5 }}>
             <div style={{ border: "1px solid #ddd", padding: 10, borderRadius: 6, background: "#f8fafc" }}>
               <strong>스미스/마르크스 → 플랫폼 비판</strong>
               <p style={{ fontSize: 11.5, marginTop: 4, color: "#666" }}>보이지 않는 손이 알고리즘 지대로, 자본 집중이 데이터 과두제로 변모한 현실을 진단.</p>
             </div>
             <div style={{ border: "1px solid #ddd", padding: 10, borderRadius: 6, background: "#f8fafc" }}>
               <strong>폴라니/루소 → 사회적 재매입</strong>
               <p style={{ fontSize: 11.5, marginTop: 4, color: "#666" }}>데이터의 '허구적 상품화'를 막고, 알고리즘 조작 없는 진정한 '일반의지' 형성 구조 설계.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
