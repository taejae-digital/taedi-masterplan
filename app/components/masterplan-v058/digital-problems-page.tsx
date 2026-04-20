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
          {/* 왼쪽: 긴급도별 위험 지도 */}
          <div>
            <div style={h3s}>긴급도별 위험 지도</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              {[
                {
                  tag: "진행중", color: C.red,
                  title: "폭력의 민주화 · 대량살상 수단의 개인화",
                  desc: "AI가 생물·사이버·자율무기의 진입장벽을 소집단·개인 수준으로 낮춘다. AI 기반 생화학무기는 핵보다 개발 비용이 낮으면서 피해 규모는 유사하거나 크다. 비가역적 공멸 가능성을 실질적으로 연다.",
                },
                {
                  tag: "진행중", color: C.red,
                  title: "허위정보 생태계 · 플랫폼 과두 · 디지털 권위주의",
                  desc: "생성형 AI가 식별 불가능한 조작을 보편화하며 사실 합의 기반을 침식. 에코챔버와 알고리즘 극단화가 민주주의의 전제인 시민 판단을 구조적으로 약화시키고, 감시·통제 기술이 권위주의 모델로 수출된다.",
                },
                {
                  tag: "임박", color: C.amber,
                  title: "자동화 실업 가속 · 선거 과정 AI 개입",
                  desc: "AI가 인지 노동까지 대체하는 속도는 수십 년이 아닌 수년 단위. 새 직종 창출이 따라잡지 못한다. 개인 맞춤형 설득·딥페이크·마이크로타게팅이 선거의 인식 기반을 조작한다.",
                },
                {
                  tag: "중기", color: C.accent,
                  title: "AI 정렬 문제 · 프로 계층 정체성 붕괴",
                  desc: "능력이 우월한 시스템이 인간의 가치와 다른 목표를 추구할 때 우리는 통제 수단이 없다. 동시에 직업으로 정체성을 규정해온 53% 프로 계층이 25%로 축소되며 '무슨 일 하세요'에 답할 수 없는 존재론적 공백이 확산된다.",
                },
                {
                  tag: "장기", color: C.navy,
                  title: "범용 AI 통제 불능 · 디지털 계급 구조 고착",
                  desc: "초지능이 도래하면 인류는 그 시스템을 되돌릴 수 없다. 동시에 AI 설계자 5% / AI 활용 프로 25% / AI 의존 아마추어 65% / 소외 5%의 계층 구조가 생물학적 수명 격차까지 수반하며 굳어진다.",
                },
              ].map(({ tag, color, title, desc }) => (
                <div key={title} style={{ display: "grid", gridTemplateColumns: "64px 1fr", border: `1px solid ${C.line}`, borderLeft: `4px solid ${color}` }}>
                  <div style={{ background: color, color: "#fff", padding: "6px 4px", fontSize: 11, fontWeight: 800, textAlign: "center", letterSpacing: 1, whiteSpace: "pre-line", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1.25 }}>{tag}</div>
                  <div style={{ padding: "8px 12px" }}>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color, marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{desc}</div>
                  </div>
                </div>
              ))}
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
