import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function BlueprintPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="5. 디지털 사회 청사진" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          우리의 과제는 질서를 위에서 설계하는 것이 아니라, 질서가 건강하게 작동할 조건을 지금 설계하는 것이다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        {/* 5.1 디지털 시대의 공동체 재설계 */}
        <div>
          <div style={h3s}>5.1 디지털 시대의 공동체 재설계</div>
          <p style={{ ...ps, fontSize: 13.5 }}>
            디지털 사회의 공동체 재설계는 정치·경제·사회 세 축을 동시에 끌어올려야 한다. 각 축은 독립적이지 않고 상호 강화적이다.
          </p>

          {[
            {
              title: "정치 — 정치질서의 재설계",
              items: [
                { t: "알고리즘 공론장 복원", d: "플랫폼의 피드 알고리즘을 투명하게 공개하고, 시민이 선택 가능한 공론장 설계. 하버마스의 이성적 토론 조건을 디지털 환경에 재건." },
                { t: "AI 거버넌스 민주화", d: "AI 시스템 설계 결정에 시민·의회가 참여하는 절차 제도화. 선출되지 않은 기술 기업이 공적 의사결정을 독점하지 못하도록." },
                { t: "목적 한정 한시 위임", d: "국가 권한의 범위와 기간을 명시적으로 제한. AI·팬데믹·기후 등 위기별 전담 거버넌스 기구, 위기 해소 후 자동 해체." },
                { t: "도시 민주주의 강화", d: "실제 삶의 질 결정이 도시 단위에서 이루어지는 현실을 반영. 도시 간 정책 경쟁·직접 민주주의 실험을 제도화." },
              ],
            },
            {
              title: "경제 — 분배의 재설계",
              items: [
                { t: "공공 AI 인프라", d: "연산 자원·데이터·기반 모델을 공공재로 운영. 플랫폼 독점이 AI의 과실을 사유화하는 구조를 끊음." },
                { t: "역량·기여 기반 분배", d: "노동시간이 아닌 문제해결·돌봄·창의·판단에 분배. AI 세수를 사회에 환류하는 디지털 배당." },
                { t: "플랫폼 독점 규율", d: "데이터 주권·알고리즘 투명성·플랫폼 이용권의 법제화. 빅테크의 국가 대체를 방지." },
                { t: "지속가능성 내재화", d: "AI 데이터센터의 전력·용수·탄소 비용을 사회적 비용으로 전환. 기후 목표와 기술 발전을 정합적으로." },
              ],
            },
            {
              title: "사회 — 정체성의 재설계",
              items: [
                { t: "정체성 실현권", d: "직업=정체성 공식을 대체할 권리 체계. 역량·관심·기여로 정체성을 구축할 수 있는 제도적 인정 구조." },
                { t: "돌봄·창작 인정", d: "시장 가치 없이 사회적 가치가 있는 활동(돌봄·학습·창작)에 대한 공적 인정과 보상 체계." },
                { t: "공동체 재연결", d: "가정·이웃·마을의 해체에 맞서 의식적 생활 공동체 설계. 디지털 도구를 연결이 아닌 결속에 활용." },
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 3, marginBottom: 8 }}>
                {title}
              </div>
              {items.map(({ t, d }) => (
                <div key={t} style={{ display: "flex", gap: 8, marginBottom: 6, padding: "6px 8px", background: C.bg, borderLeft: `3px solid ${C.line}` }}>
                  <div style={{ minWidth: 90, fontSize: 12, fontWeight: 700, color: "#222" }}>{t}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 5.2 세계정부 */}
        <div>
          <div style={h3s}>5.2 세계정부 — 글로벌 AI 거버넌스 아키텍처</div>
          <p style={{ ...ps, fontSize: 13.5 }}>
            AI·기후·팬데믹은 어느 국가도 단독으로 통제할 수 없다. 그러나 UN의 1국1표 구조는 속도와 전문성 모두 한계를 보인다. 새로운 글로벌 거버넌스 아키텍처가 필요하다.
          </p>

          <div style={{ marginBottom: 12, padding: "10px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 6 }}>설계 원칙</div>
            {[
              "목적 한정 — 범용 세계정부가 아닌 AI·기후·팬데믹 등 문제별 전담 기구",
              "한시성 — 위기 해소 후 자동 해체, 권한의 영구화 방지",
              "투명성 — 의사결정 과정의 공개, 시민 감시 가능",
              "비례성 — 위기의 규모에 비례한 권한만 부여",
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4, fontSize: 12, lineHeight: 1.55, color: "#222" }}>
                <span style={{ color: C.navy, fontWeight: 700, flexShrink: 0 }}>▪</span>
                <span>{p}</span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 6 }}>글로벌 거버넌스 기구 제안</div>
            {[
              { t: "국제 AI 안전 기구 (IASA)", d: "IAEA의 AI 버전. AI 시스템의 사전 안전 승인, 개발자 입증 책임 레짐 운영. 미중 공동 참여가 필수 조건." },
              { t: "디지털 권리 협약", d: "오비에도 협약의 AI 버전. 알고리즘 투명성·데이터 주권·AI 사용 시 인간 존엄 보호를 국제 조약으로." },
              { t: "글로벌 AI 공공재 기금", d: "빅테크의 데이터 사용료·AI 세수를 글로벌 기금으로 조성. 개발도상국 AI 접근 격차 해소에 투입." },
              { t: "미중 AI 대타협 플랫폼", d: "핵 군축 협상의 AI 버전. 자율살상무기·AI 사이버전·생성형 AI 규제에서 최소한의 공동 규범 도출." },
            ].map(({ t, d }) => (
              <div key={t} style={{ marginBottom: 8, padding: "8px 10px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: "10px 12px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 5 }}>핵이 가르친 것</div>
            <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#222" }}>
              NPT·IAEA 체계는 불완전하지만, 핵 확산을 늦추는 데 기여했다. AI는 핵보다 확산 속도가 빠르고 비가역성이 더 높다. 핵 레짐이 형성되기까지 20년이 걸렸다. AI에게는 그만한 시간이 없다. 지금 당장 설계를 시작해야 한다.
            </p>
          </div>

          <div style={{ marginTop: 12, padding: "10px 12px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 5 }}>개인의 자유와 세계 평화는 같은 구조의 양면</div>
            <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#222" }}>
              개인이 안전할 때 국가가 전쟁 기계로 전환될 유인이 줄어든다. 정체성과 생계를 위협받지 않는 개인은 극단적 민족주의·권위주의의 동원 대상이 되지 않는다. 개인의 자유를 보장하는 제도와 세계 평화를 만드는 거버넌스는 분리된 과제가 아니다.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
