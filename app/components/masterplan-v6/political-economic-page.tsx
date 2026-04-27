import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

export function PoliticalEconomicPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 디지털 전환에 따른 정치/경제 질서 변화" />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 14 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          산업화 시대의 정치·경제 사상은 그 시대에 맞았기에 승리했다.
          그러나 디지털 시대의 조건은 그 사상이 딛고 서 있던 전제 자체를 무너뜨린다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
        {/* 3.1 정치 질서 */}
        <div>
          <div style={h3s}>3.1 정치 질서 — 정당성은 어디서 오는가</div>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "8px 0 6px" }}>산업화 시대의 답</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            근대 정치의 질문은 단 하나였다. <strong>"다스리는 자에게 복종해야 하는 이유는 무엇인가."</strong> 봉건 질서는 세습과 신의 뜻으로 답했지만, 그 답은 구체제의 모순과 함께 무너졌다. 세 단계에 걸쳐 새 답이 세워졌다.
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            첫째, 정당성의 원천을 <strong>인민의 동의</strong>로 옮겼다. 주권은 왕이 아닌 인민에게 있고, 정당한 권위는 공동체 전체의 일반의지에서만 나온다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "인간은 자유롭게 태어났으나, 어디서나 쇠사슬에 매여 있다." — 루소, 『사회계약론』 1762
            </span>
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            둘째, 다수의 동의만으로는 부족했다. 다수가 소수를 억압하는 다수의 횡포를 막을 <strong>공정한 절차</strong>가 필요했다. 자신의 위치를 모르는 상태에서 선택된 원칙만이 공정하다는 무지의 베일 논변이 복지국가와 기본권의 도덕적 토대가 됐다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "각자는 가장 광범위한 기본적 자유에 대한 동등한 권리를 가진다." — 롤스, 『정의론』 1971
            </span>
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            셋째, 절차만으로도 부족했다. 합의는 <strong>이성적 토론</strong>에서 이루어져야 했다. 민주주의의 정당성은 투표 수가 아니라, 왜곡 없는 의사소통이 가능한 공론장에 달려 있다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "공론장은 사적 인간들이 공적 관심사를 토론하기 위해 모이는 사회생활의 영역이다." — 하버마스, 『공론장의 구조변동』 1962
            </span>
          </p>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "12px 0 6px" }}>왜 산업화 시대에는 맞았는가</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            이 답은 산업화 시대의 조건과 정확히 맞았다. ① 정치 단위가 국민국가로 안정돼 있었고, ② 기술 변화 속도가 선거 주기(4~5년) 안에 감당 가능했으며, ③ 공론장이 신문·방송처럼 중앙화된 몇 개 매체를 중심으로 형성돼 이성적 토론이 물리적으로 가능했다. ④ 시민권의 단위가 '투표하는 개인'이었고, 1인 1표의 평등이 권력의 비례성을 보장했다.
          </p>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.red, margin: "12px 0 6px" }}>왜 디지털 시대에는 맞지 않는가</div>
          <div style={{ padding: "8px 10px", background: C.bg, borderLeft: `3px solid ${C.line}` }}>
            {[
              ["속도 불일치", "선거 주기는 4~5년, AI 기술 변화 주기는 수개월. 대의 민주주의의 반응 속도가 기술을 따라가지 못한다."],
              ["공론장 붕괴", "알고리즘 피드가 이용자를 분절된 정보 거품에 가두며 '왜곡 없는 의사소통'이라는 전제를 무너뜨린다."],
              ["선출되지 않은 권력", "빅테크가 국가보다 큰 영향력을 행사하지만 선출되지도, 의회에 책임지지도 않는다."],
              ["1인 1표의 무력화", "마이크로타게팅이 같은 선거에서 사람마다 다른 현실을 보여줘 형식적 평등이 실질적 불평등으로 전환된다."],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 11.5, lineHeight: 1.6 }}>
                <div style={{ minWidth: 95, fontWeight: 700, color: C.navy }}>{t}</div>
                <div style={{ color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3.2 경제 질서 */}
        <div>
          <div style={h3s}>3.2 경제 질서 — 부는 어떻게 만들어지고 나뉘는가</div>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "8px 0 6px" }}>산업화 시대의 답</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            근대 경제의 질문도 하나였다. <strong>"부는 어떻게 만들어지고, 어떻게 나뉘어야 하는가."</strong> 중상주의는 국가가 금을 축적하는 것이 부라고 답했지만, 그 답은 비효율과 특권으로 무너졌다. 세 단계에 걸쳐 새 답이 세워졌다.
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            첫째, 부의 원천은 국가 개입이 아니라 <strong>자유 시장과 분업</strong>에 있다. 개인이 자기 이익을 추구할 때 '보이지 않는 손'이 사회 전체의 부를 늘린다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "우리가 저녁을 먹을 수 있는 것은 정육점·양조업자·빵집의 자기 이익 추구 때문이다." — 스미스, 『국부론』 1776
            </span>
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            둘째, 자유 시장이 사회를 집어삼키자 반대 명제가 등장했다. 노동·토지·화폐를 상품으로 취급하면 <strong>사회 자체가 파괴된다</strong>. 시장의 확장과 사회의 자기 보호 운동이 함께 일어나는 '이중 운동'이 역사의 동력이다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "노동, 토지, 화폐를 시장에 맡기는 것은 사회의 자기 파괴와 동의어다." — 폴라니, 『거대한 전환』 1944
            </span>
          </p>
          <p style={{ ...ps, fontSize: 12.5 }}>
            셋째, 대공황이 자유 시장의 자동 균형 도그마를 무너뜨렸다. 수요가 부족하면 <strong>국가가 지출을 늘려 경기를 부양</strong>해야 한다. 케인스주의는 전후 복지국가의 이론적 토대가 됐다.
            <span style={{ display: "block", marginTop: 5, paddingLeft: 12, fontSize: 11.5, fontStyle: "italic", color: C.light, borderLeft: `2px solid ${C.line}` }}>
              "장기적으로 우리는 모두 죽는다." — 케인스, 『일반이론』 1936
            </span>
          </p>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "12px 0 6px" }}>왜 산업화 시대에는 맞았는가</div>
          <p style={{ ...ps, fontSize: 12.5 }}>
            이 답도 산업화 시대의 조건과 정확히 맞았다. ① 재화는 희소성 기반이었다 — 한 개를 만드는 데 비용이 들었고, 경쟁이 가격을 결정했다. ② 노동은 부의 일차적 원천이었고, 노동시간이 소득으로 환산되는 공식이 작동했다. ③ 국가가 화폐·조세·관세의 주권자였기에 케인스식 수요 관리가 가능했다. ④ 시장·사회·국가의 경계가 뚜렷해 폴라니의 이중 운동이 사회 내부에서 정치적 해법으로 수렴했다.
          </p>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.red, margin: "12px 0 6px" }}>왜 디지털 시대에는 맞지 않는가</div>
          <div style={{ padding: "8px 10px", background: C.bg, borderLeft: `3px solid ${C.line}` }}>
            {[
              ["한계비용 0의 재화", "데이터·알고리즘은 복제 비용이 거의 없다. 희소성 위에 세워진 시장 원리가 작동하지 않는다."],
              ["노동-소득 연결 해체", "자동화가 인지 노동까지 대체하며 노동시간=소득 공식이 무너진다. 기존 사회보장의 세원이 흔들린다."],
              ["국가 주권의 우회", "암호화폐·플랫폼·데이터 월경이 국가의 화폐·조세·규제권을 구조적으로 우회한다."],
              ["부의 극단적 집중", "AI가 만든 부가 데이터 독점자 소수에게 집적. 케인스의 수요 관리도 분배 문제를 해결하지 못한다."],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 11.5, lineHeight: 1.6 }}>
                <div style={{ minWidth: 95, fontWeight: 700, color: C.navy }}>{t}</div>
                <div style={{ color: "#333" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3.3 기존 질서로는 디지털 사회를 담을 수 없다 */}
      <div style={{ padding: "14px 32px 0", marginTop: 10 }}>
        <div style={h3s}>3.3 기존 질서로는 디지털 사회를 담을 수 없다</div>
        <p style={{ ...ps, fontSize: 12.5, marginBottom: 8 }}>
          정치와 경제의 산업화 시대 답이 동시에 흔들리는 이유는 우연이 아니다. 두 사상 모두 네 가지 공통 전제 위에 서 있었고, 디지털 전환은 바로 그 전제들을 무너뜨린다.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
          <thead>
            <tr style={{ background: C.navy, color: "#fff" }}>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11, width: "16%" }}>전제</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11 }}>산업화 시대</th>
              <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11 }}>디지털 시대</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["속도", "인간이 감당 가능한 변화 속도 — 세대·선거 주기 단위", "기술 변화가 제도 반응 속도를 초과 — 월·분 단위"],
              ["재화", "희소성 기반 — 경쟁이 가격을 결정", "한계비용 0의 재화 — 네트워크 효과가 독점을 재생산"],
              ["권력", "국민국가 단위에 집중 — 조세·규제·안보의 주권", "플랫폼·AI가 국가 경계를 넘어 권력 행사"],
              ["정체성", "직업·소속이 정체성을 규정 — 분업의 한 조각", "AI가 개인을 조직 밖으로 밀어냄 — 정체성의 공백"],
            ].map(([premise, old, next], i) => (
              <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy }}>{premise}</td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#555" }}>{old}</td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: "#222", fontWeight: 600 }}>{next}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ ...ps, fontSize: 12.5, marginTop: 10 }}>
          결론은 분명하다. 디지털 사회는 산업화 시대의 사상적 건축물 위에 증축할 수 없다. 정당성·분배·공론장의 기초 전제를 다시 세우는 작업이 필요하다. 이 작업이 본 연구의 남은 과제다.
        </p>
      </div>

      <Footer />
    </div>
  );
}
