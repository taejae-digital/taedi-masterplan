import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function DigitalProblemsPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="3. 디지털 시대에 예측되는 문제들" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.red}`, marginBottom: 14, background: "#fff5f5" }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: C.red, lineHeight: 1.4 }}>
          AI는 인간을 대체하지 않는다. 인간이 AI를 통해 훨씬 더 큰 일을 해낸다.
          그만큼 한 사람이 일으킬 수 있는 피해의 규모도 커진다.
        </div>
        <div style={{ fontSize: 12.5, color: "#222", marginTop: 6, lineHeight: 1.65 }}>
          확장된 역량에는 확장된 자유가 필요하지만, 확장된 자유는 확장된 책임과 제어 구조를 동반해야 한다.
          아래는 지금 설계하지 않으면 비가역으로 고착될 위험들이다.
        </div>
      </div>

      <div style={{ padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
          {/* 왼쪽: 위험 지도 (2D 매트릭스) */}
          <div>
            <div style={h3s}>위험 지도 — 시간 × 비가역성</div>
            <div style={{ position: "relative", width: "100%", height: 360, border: `1px solid ${C.line}`, background: "#fff", marginBottom: 8 }}>
              {/* 사분면 배경 (우상단=지금 진행중+비가역 → 최대 위협) */}
              <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "50%", background: "rgba(185,28,28,0.06)" }} />
              <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "50%", background: "rgba(26,39,68,0.03)" }} />

              {/* 격자선 */}
              {[25, 50, 75].map((pct) => (
                <div key={`v${pct}`} style={{ position: "absolute", top: 0, bottom: 0, left: `${pct}%`, borderLeft: `1px dashed ${C.line}` }} />
              ))}
              {[25, 50, 75].map((pct) => (
                <div key={`h${pct}`} style={{ position: "absolute", left: 0, right: 0, bottom: `${pct}%`, borderTop: `1px dashed ${C.line}` }} />
              ))}

              {/* Y축 라벨 */}
              <div style={{ position: "absolute", left: 4, top: 4, fontSize: 10, fontWeight: 800, color: C.red }}>↑ 비가역·공멸성</div>
              <div style={{ position: "absolute", left: 4, bottom: 4, fontSize: 10, fontWeight: 700, color: C.light }}>낮음</div>

              {/* X축 라벨 */}
              <div style={{ position: "absolute", right: 6, bottom: 4, fontSize: 10, fontWeight: 800, color: C.red }}>임박성 →</div>
              <div style={{ position: "absolute", left: 4, bottom: -16, fontSize: 10, fontWeight: 700, color: C.light }}>장기</div>

              {/* 우상단 강조 라벨 */}
              <div style={{ position: "absolute", right: 8, top: 22, fontSize: 10, fontWeight: 800, color: C.red, background: "rgba(255,255,255,0.9)", padding: "1px 4px" }}>지금 최대 위협</div>

              {/* 컬럼 가이드 (왼쪽: 장기 → 오른쪽: 진행중) */}
              {[
                { pct: 12.5, label: "장기" },
                { pct: 37.5, label: "중기" },
                { pct: 62.5, label: "임박" },
                { pct: 87.5, label: "진행중" },
              ].map(({ pct, label }) => (
                <div key={label} style={{ position: "absolute", top: 6, left: `${pct}%`, transform: "translateX(-50%)", fontSize: 10, fontWeight: 700, color: "#888", background: "rgba(255,255,255,0.95)", padding: "0 4px" }}>{label}</div>
              ))}

              {/* 위험 노드 */}
              {[
                { x: 88, y: 92, label: "폭력의 민주화", color: C.red, offset: "bl" },
                { x: 86, y: 48, label: "허위정보·플랫폼·권위주의", color: C.red, offset: "bl" },
                { x: 90, y: 28, label: "감시 자본주의", color: C.amber, offset: "bl" },
                { x: 62, y: 42, label: "자동화 실업", color: C.amber, offset: "br" },
                { x: 58, y: 62, label: "선거 AI 개입", color: C.amber, offset: "tr" },
                { x: 40, y: 88, label: "AI 정렬 문제", color: C.accent, offset: "br" },
                { x: 44, y: 50, label: "프로 계층 정체성", color: C.accent, offset: "br" },
                { x: 34, y: 68, label: "미중 블록화", color: C.accent, offset: "tr" },
                { x: 12, y: 94, label: "AGI 통제 불능", color: C.navy, offset: "br" },
                { x: 18, y: 70, label: "디지털 계급 고착", color: C.navy, offset: "br" },
                { x: 8, y: 50, label: "지속불가능성", color: C.green, offset: "br" },
              ].map(({ x, y, label, color, offset }) => {
                const labelStyle: React.CSSProperties = { position: "absolute", fontSize: 10.5, fontWeight: 700, color: "#222", background: "rgba(255,255,255,0.9)", padding: "0 3px", whiteSpace: "nowrap" };
                if (offset === "br") { labelStyle.left = 12; labelStyle.top = 6; }
                else if (offset === "tr") { labelStyle.left = 12; labelStyle.bottom = 6; }
                else if (offset === "bl") { labelStyle.right = 12; labelStyle.top = 6; }
                else { labelStyle.right = 12; labelStyle.bottom = 6; }
                return (
                  <div key={label} style={{ position: "absolute", left: `${x}%`, bottom: `${y}%` }}>
                    <div style={{ width: 11, height: 11, borderRadius: "50%", background: color, border: `2px solid #fff`, boxShadow: `0 0 0 1px ${color}`, transform: "translate(-50%, 50%)" }} />
                    <div style={labelStyle}>{label}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ fontSize: 10.5, color: C.light, lineHeight: 1.5 }}>
              우상단일수록 <strong style={{ color: C.red }}>지금 최대 위협</strong> — 임박성과 비가역성이 모두 높은 영역. 좌상단은 시간 여유는 있으나 실현 시 돌이킬 수 없는 위협. 우하단은 이미 진행중이나 사회적 조정으로 복구 가능한 위협.
            </div>
          </div>

          {/* 오른쪽: 구조적 위험 */}
          <div>
            <div style={h3s}>구조적 위험 — 왜 확장된 자유가 필요한가</div>
            <p style={ps}>
              AI는 인간의 지렛대를 길게 만든다. 같은 힘으로 훨씬 큰 것을 움직일 수 있다. 문제는 지렛대가 선한 방향으로만 쓰이지 않는다는 점이다. 한 명의 해커가 수백만 명을 마비시키고, 한 명의 영향력자가 수천만 명의 판단을 왜곡할 수 있다. 강화된 개인을 감당할 그릇은 더 큰 자유 — 그러나 책임과 투명성이 설계된 자유다.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6, marginBottom: 10 }}>
              {[
                { t: "권력 집중 · 디지털 봉건제", d: "구글·아마존·메타 등 10여명의 CEO가 80억 인구의 정보 환경을 설계한다. 국가의 조세권·규제권이 사실상 무력화되며, 개인은 플랫폼의 디지털 소작농이 된다.", color: C.red },
                { t: "감시 자본주의 · 행동 데이터 착취", d: "사용자 자신보다 사용자를 더 잘 아는 데이터가 예측 상품으로 거래된다. 정치 캠페인의 마이크로타게팅은 계몽이 아닌 조작에 가깝다.", color: C.amber },
                { t: "국가의 역량 역전", d: "사이버 전쟁·암호화폐·스마트 컨트랙트·탈중앙 플랫폼이 국가의 안보·사법·화폐 독점을 우회한다. 국가의 위임 구조가 정당성 위기에 진입한다.", color: C.accent },
                { t: "분배·노동·공동체 붕괴", d: "프로 계층 축소(53→25%), 아마추어 급증(35→65%)이 정체성의 공백을 만든다. 가정·이웃·마을의 일상 연결이 의도하지 않은 채 해체된다.", color: C.navy },
                { t: "지속불가능성", d: "AI 데이터센터가 전력과 용수를 독점. 모델 훈련의 탄소 비용이 기후 목표와 충돌하며, 비용은 지역사회에 전가된다.", color: C.green },
              ].map(({ t, d, color }) => (
                <div key={t} style={{ padding: "7px 10px", background: "#fff", borderLeft: `4px solid ${color}`, border: `1px solid ${C.line}` }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#222" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4계층 변화 */}
        <div>
          <div style={h3s}>계층 재편 — 같은 기술이 다르게 닿는다</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {[
              { tier: "리더 (AI 설계자)", now: "2%", next: "5%", desc: "전문성의 기준과 플랫폼 구조를 재정의한다. 강화라기보다 권한의 질적 확대.", color: C.navy },
              { tier: "프로 (AI 활용자)", now: "53%", next: "25%", desc: "직업=정체성 공식의 붕괴. 가장 폭발적인 사회적 긴장의 원천.", color: C.red },
              { tier: "아마추어 (AI 의존자)", now: "35%", next: "65%", desc: "플랫폼 의존. 자율은 있지만 기여가 비가시적, 인정 경로가 불안정.", color: C.amber },
              { tier: "소외 (AI 접근 불가)", now: "10%", next: "5%", desc: "숫자는 줄지만 격차는 질적으로 벌어진다. 배제의 언어로 자유가 기능.", color: C.accent },
            ].map(({ tier, now, next, desc, color }) => (
              <div key={tier} style={{ padding: "10px 12px", borderTop: `3px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 4 }}>{tier}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color, marginBottom: 4 }}>{now} <span style={{ color: C.light, fontSize: 12 }}>→</span> {next}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
