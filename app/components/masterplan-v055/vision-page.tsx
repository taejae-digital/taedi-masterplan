import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function VisionPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 비전 — 강화된 개인, 공동체의 조율, 우리가 할 일" />

      <div style={{ padding: "18px 32px 14px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          기술은 개인을 강화하고, 강화된 개인은 더 큰 자유를 요구하며,
          공동체는 그 자유를 새 질서로 조율해왔다. 이 순서는 역전된 적이 없다.
        </div>
      </div>

      <div style={{ padding: "0 32px" }}>
        <div style={h3s}>1. 역사의 발전 방향 — 기술 → 개인 강화 → 자유 요구 → 공동체의 조율</div>
        <p style={ps}>
          사회의 질서는 위에서 설계되지 않는다. 새 기술이 개인의 역량을 확장할 때, 강화된 개인은 이전에는 상상할 수 없던 자유를 요구하게 되고, 공동체는 그 요구를 새로운 제도로 흡수해왔다. 제때 흡수하지 못한 공동체는 혁명과 전쟁으로 조정의 대가를 치렀다. 이 경로는 인류사 전체에 걸쳐 반복된 패턴이다.
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 12 }}>
          <thead>
            <tr style={{ background: C.navy, color: "#fff" }}>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "16%" }}>기술</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "22%" }}>개인의 강화</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "26%" }}>새로 요구된 자유</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>공동체의 조율</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["농업 기술", "정주·축적·가족 단위 자립", "토지 소유 · 상속권", "혈연·부족 공동체, 법전 성립"],
              ["인쇄술", "성서·지식의 직접 해석", "신앙의 자유 · 학문의 자유", "종교개혁 → 정교분리 → 대학 자율"],
              ["산업 기계", "노동자의 조직력·이동성", "직업 선택 · 계약 · 참정권", "노동법 · 보통선거 · 복지국가"],
              ["전신·방송", "대중 소통·여론 형성", "표현 · 결사 · 소수자 권리", "헌법적 기본권 · 공영방송 규율"],
              ["인터넷", "개인이 생산자·네트워크 주체", "정보 접근 · 플랫폼 참여", "아랍의 봄 · 플랫폼 규제 초기"],
              ["AI", "판단·창작·생산의 개인화", "자율·의미·기여·인정의 확장", "??? — 아직 질서가 부재"],
            ].map(([tech, power, demand, coord], i) => (
              <tr key={i} style={{ background: i === 5 ? "#f0f4ff" : i % 2 ? C.bg : "#fff" }}>
                <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", fontWeight: i === 5 ? 800 : 700, color: i === 5 ? C.navy : "#222" }}>{tech}</td>
                <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333" }}>{power}</td>
                <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: "#333", fontWeight: i === 5 ? 700 : 500 }}>{demand}</td>
                <td style={{ padding: "5px 8px", borderBottom: "1px solid #eee", color: i === 5 ? C.navy : "#555", fontWeight: i === 5 ? 800 : 400 }}>{coord}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={ps}>
          디지털 기술은 이 경로에서 가장 극적인 단계를 연다. 이전 기술이 신체와 소통을 확장했다면, AI는 판단과 추론 — 전문가의 권위, 관리자의 존재 이유, 의사결정자의 지위가 세워져 있던 인지 영역 — 까지 개인에게 이전한다. 강화된 개인은 단지 더 많이 하고 싶은 것이 아니라 <strong>다르게 살고 싶어 한다</strong>. 그러나 그에 맞는 공동체의 조율은 아직 설계되지 않았다.
        </p>

        <div style={h3s}>2. 강화된 개인이 낳는 새로운 문제들</div>
        <p style={ps}>
          개인의 역량이 커질수록, 한 사람이 일으킬 수 있는 피해의 규모도 커진다. 조율되지 않은 강화는 해방이 아니라 디지털 봉건제로 굳을 수 있다. 지금 우리가 목격하는 위험들은 대체로 이 '조율의 공백'에서 비롯된다.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
          {[
            { t: "폭력의 민주화", d: "AI가 생물·사이버·자율무기 진입장벽을 개인 수준으로 낮춘다. 인류 공멸 가능성을 실질적으로 연다.", color: C.red },
            { t: "플랫폼 봉건제", d: "소수 빅테크가 80억 인구의 정보 환경을 설계. 국가 조세·규제권은 사실상 무력화.", color: C.amber },
            { t: "프로 계층의 붕괴", d: "직업=정체성 공식이 무너진다. '무슨 일 하세요'에 답할 수 없는 존재론적 공백 확산.", color: C.accent },
            { t: "허위·감시·극단화", d: "생성형 AI의 식별 불가능한 조작이 민주주의의 전제인 시민 판단을 구조적으로 침식.", color: C.navy },
          ].map(({ t, d, color }) => (
            <div key={t} style={{ padding: "8px 10px", background: "#fff", border: `1px solid ${C.line}`, borderLeft: `4px solid ${color}` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color, marginBottom: 3 }}>{t}</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={h3s}>3. 공동체의 조율 노력 — 핵이 가르친 것</div>
        <p style={ps}>
          역사는 조율 없는 기술이 어떻게 위협이 되는지를 보여주는 장면을 이미 남겼다. 가장 가까운 선례가 <strong>핵</strong>이다. NPT·IAEA·CTBT·START 같은 국제 레짐이 세워졌지만, 기술의 속도를 따라잡지 못했고, 세계는 여전히 핵 위협의 그림자 아래에 있다. 금융(Basel·G20), 기후(파리협정), 생명공학(오비에도 협약)의 사례도 유사한 교훈을 준다. <strong style={{ color: C.red }}>공동체가 기술보다 느리면, 기술의 위험이 질서보다 커진다.</strong> AI는 그보다 빠르고 광범위하다. 핵이 물리적 파괴력으로 인류를 위협했다면, AI는 판단과 행동의 위임을 통해 질서 자체를 먼저 바꾼다.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <div style={{ padding: "10px 14px", background: "#fff5f5", borderLeft: `4px solid ${C.red}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.red, marginBottom: 3 }}>핵 레짐의 교훈</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "#222" }}>
              확산이 시작된 뒤에 조율한 결과, 완전한 비확산은 실패. 사후 레짐의 한계. 기술이 충분히 확산되기 전에 조율할 수 있는 창은 짧다.
            </div>
          </div>
          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>AI 조율의 조건</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "#222" }}>
              사후 교정 비용이 질적으로 다르다. 질서 자체가 아닌, 질서가 건강하게 작동할 조건 — 경쟁·책임·권력 해체 — 을 <strong>지금</strong> 설계해야 한다.
            </div>
          </div>
        </div>

        <div style={h3s}>4. 우리가 할 일</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "이론 정립", desc: "자본주의도 공산주의도 아닌 정보화 질서의 이론적 뼈대를 만든다.", color: C.navy },
            { label: "공론화", desc: "결론이 아닌 사고의 경로를 공유한다. 시민과 전문가가 함께 걷는다.", color: C.accent },
            { label: "솔루션 설계", desc: "AI 안전 승인, 폭력 민주화 통제, 공공 AI 인프라, 정체성 실현권.", color: C.amber },
            { label: "대타협 경로", desc: "미중 대결을 협력으로 전환시킬 수 있는 규범과 플랫폼을 제안한다.", color: C.green },
          ].map(({ label, desc, color }) => (
            <div key={label} style={{ padding: "10px 12px", borderTop: `3px solid ${color}`, background: C.bg }}>
              <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
