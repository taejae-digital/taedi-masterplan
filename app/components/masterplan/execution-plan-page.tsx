/* p.4 거버넌스: 위협의 통제와 글로벌 협력 (v0.5.2 시각화) */
import { C } from "./constants";
import { Header } from "./shared";

export function ExecutionPlanPage() {
  const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 13.5, lineHeight: 1.7, color: "#111", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 16, fontWeight: 800, color: C.navy, margin: "14px 0 8px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="4. 거버넌스: 글로벌 위협과 새로운 거버넌스" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, padding: "0 32px" }}>
        <div>
          <div style={h3s}>4.1 위협의 지형과 우선순위</div>
          <p style={ps}>비가역성(Irreversibility)과 질서 파괴성을 기준으로 대응 순위를 설정한다.</p>
          <div style={{ padding: "12px", border: "2px solid #fee2e2", background: "#fef2f2", borderRadius: 8 }}>
            <strong style={{ color: "#b91c1c", fontSize: 14 }}>1순위: 폭력의 민주화 (WMD화)</strong>
            <p style={{ fontSize: 13, marginTop: 5 }}>AI 생물무기, 사이버 WMD, 핵AI화 등 인류 공멸의 실질적 위협. 국가급 자원 없이도 가능해진 대량살상 수단의 확산 차단이 최우선.</p>
          </div>
          <div style={{ marginTop: 10, fontSize: 13, color: "#555" }}>
            • <strong>진행/임박:</strong> 허위정보, 권위주의, 자동화 실업, 선거 개입<br/>
            • <strong>중/장기:</strong> AI 정렬 실패, 범용 인공지능(AGI) 통제 불능
          </div>

          <div style={h3s}>4.2 글로벌 거버넌스 설계 모델</div>
          <div style={{ display: "flex", gap: 15 }}>
            <div style={{ flex: 1, padding: 10, background: "#e8f0fe", borderRadius: 6 }}>
              <strong style={{ fontSize: 13.5 }}>FDA 레짐</strong>
              <p style={{ fontSize: 12, marginTop: 4 }}>위험을 가장 잘 아는 <strong>개발자</strong>가 스스로 안전을 입증하고 승인받는 책임 구조.</p>
            </div>
            <div style={{ flex: 1, padding: 10, background: "#e8f0fe", borderRadius: 6 }}>
              <strong style={{ fontSize: 13.5 }}>WHO 모델</strong>
              <p style={{ fontSize: 12, marginTop: 4 }}>글로벌 위기 시 <strong>목적 한정</strong>된 권력을 행사하고 임무 완료 시 자동 소멸.</p>
            </div>
          </div>
        </div>

        <div>
          <div style={h3s}>4.3 미중 대타협과 한국의 전략적 위치</div>
          <p style={ps}>글로벌 거버넌스는 미국과 중국의 합의 없이는 불가능하다. AI 통제 불능이 양국 모두에 실존적 위협이라는 '상호 파멸의 논리'를 협력의 지렛대로 삼아야 한다.</p>
          
          <div style={{ padding: "15px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8 }}>
             <strong style={{ color: "#15803d" }}>지적 돌파구: 호주 모델 (1992)</strong>
             <p style={{ fontSize: 13, marginTop: 5 }}>강대국 간 교착을 돌파한 중견국 호주의 타협 초안처럼, 한국은 세계적 수준의 이론적 토대와 통제 방안을 설계하여 미중 협력을 견인한다.</p>
          </div>

          <div style={h3s}>4.4 5대 연구 어젠다</div>
          <ul style={{ fontSize: 12.5, lineHeight: 1.8, color: "#333", paddingLeft: 20 }}>
            <li>역량 기반 질서의 이론적 정초</li>
            <li>프로그래머블 거버넌스의 기술적·제도적 설계</li>
            <li>글로벌 거버넌스 현실적 이행 경로 연구</li>
            <li>디지털 전환기 사회 안전망 및 전환 비용 관리</li>
            <li>세계시민 교육과 글로벌 공론장 형성</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 40, textAlign: "center", borderTop: "1px solid #ddd", paddingTop: 10 }}>
        <p style={{ fontSize: 12, color: "#888" }}>masterplan v0.5.2 · 태재미래전략연구원 디지털팀 · 2026-04-17</p>
      </div>
    </div>
  );
}
