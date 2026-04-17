/* p.2 개인: 역량 강화와 계층의 분화 (v0.5.2 시각화) */
import { C } from "./constants";
import { Header } from "./shared";

export function ThreatControlPage() {
  const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 14, lineHeight: 1.75, color: "#111", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 16, fontWeight: 800, color: C.navy, margin: "14px 0 8px", paddingBottom: 4, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="2. 개인: 역량 강화와 갈망의 변화" />

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 32, padding: "0 32px" }}>
        <div>
          <div style={h3s}>2.1 계층의 분화: 프로의 해체와 아마추어의 급증</div>
          <p style={ps}>디지털 기술과의 관계에 따라 개인은 네 계층으로 재편된다. 핵심은 <strong>전문직(Pro)의 축소</strong>와 <strong>의존적 아마추어의 대두</strong>다.</p>
          
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, marginTop: 10 }}>
            <thead>
              <tr style={{ background: "#f0f2f5" }}>
                <th style={{ padding: "8px", border: "1px solid #ddd" }}>계층</th>
                <th style={{ padding: "8px", border: "1px solid #ddd" }}>특성</th>
                <th style={{ padding: "8px", border: "1px solid #ddd" }}>인구 비중 변화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}><strong>리더 (설계자)</strong></td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>AI를 설계하고 방향 결정</td>
                <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>2% → 5% (▲)</td>
              </tr>
              <tr style={{ background: "#fff5f5" }}>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}><strong>프로 (활용자)</strong></td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>전문직, 숙련 노동자</td>
                <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}><strong>53% → 25% (▼)</strong></td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}><strong>아마추어 (의존자)</strong></td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>디지털 소작농 (플랫폼 의존)</td>
                <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>35% → 65% (▲)</td>
              </tr>
              <tr>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}><strong>소외 계층</strong></td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>기술 접근 원천 배제</td>
                <td style={{ padding: "8px", border: "1px solid #ddd", textAlign: "center" }}>10% → 5% (▼)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div style={h3s}>2.2 개인의 4대 갈망 (Needs)</div>
          <p style={ps}>능력이 강화된 개인은 단순히 더 많은 것이 아니라, <strong>'다른 것'</strong>을 원하게 된다. 이는 자유 요구의 증대로 이어진다.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["자율: 스스로 삶을 설계", "의미: 생존 이상의 가치 활동", "기여: 조직 밖 공동 목표 참여", "인정: 실질 역량에 대한 평판"].map(item => (
              <div key={item} style={{ padding: "8px 12px", borderLeft: `3px solid ${C.accent}`, background: "#f8f9fa", fontSize: 13.5 }}>
                {item}
              </div>
            ))}
          </div>
          
          <div style={h3s}>2.3 디지털 전환이 만드는 다층적 위협</div>
          <p style={ps}>기술의 긍정적 변화와 동일한 원천에서 문명 수준의 위협이 발생한다. 이 위협들은 상호 강화적이며 결합 효과는 개별 합산을 초과한다.</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ padding: "10px", border: "1px solid #fee2e2", background: "#fef2f2", borderRadius: 8 }}>
              <strong style={{ color: "#b91c1c", fontSize: 13.5 }}>🚨 1순위: 폭력의 민주화 (WMD화)</strong>
              <p style={{ fontSize: 12.5, marginTop: 4, color: "#444" }}>
                AI가 생물무기 설계, 사이버 공격 인프라, 자율 무기 시스템의 진입장벽을 개인/소집단 수준으로 낮춤. 핵보다 개발비는 낮으나 피해는 유사한 '사이버 WMD' 위협.
              </p>
            </div>
            
            <div style={{ padding: "10px", background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: 8 }}>
              <strong style={{ color: "#92400e", fontSize: 13.5 }}>⚠️ 진행 중 & 임박한 위협</strong>
              <ul style={{ fontSize: 12.5, marginTop: 4, color: "#444", paddingLeft: 18 }}>
                <li><strong>정보 생태계 파괴:</strong> 식별 불가한 딥페이크와 허위정보 확산</li>
                <li><strong>정치적 위기:</strong> 디지털 권위주의 모델 수출 및 선거 개입</li>
                <li><strong>경제적 충격:</strong> 프로 계층의 정체성 위기와 가속화된 자동화 실업</li>
              </ul>
            </div>

            <div style={{ padding: "10px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8 }}>
              <strong style={{ color: "#334155", fontSize: 13.5 }}>⏳ 중·장기적 위협</strong>
              <p style={{ fontSize: 12.5, marginTop: 4, color: "#444" }}>
                AI 정렬(Alignment) 문제 심화, 범용 인공지능(AGI)의 통제 불능 가능성, 그리고 고착화된 디지털 계급 구조.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
