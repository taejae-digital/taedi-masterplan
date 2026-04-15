/* p.3 — 비전 (v0.1 개선판) */
import { C } from "./constants";
import { Header, Footer, SectionTitle } from "./shared";

export function VisionPage() {
  const ps: React.CSSProperties = { margin: "0 0 9px", fontSize: 14, lineHeight: 1.85, color: "#222", textAlign: "justify" };
  const h3s: React.CSSProperties = { fontSize: 14, fontWeight: 800, color: C.navy, margin: "16px 0 6px", paddingBottom: 3, borderBottom: `1px solid ${C.line}` };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="1. 비전" />

      <div style={{ padding: "18px 32px 14px", borderBottom: `2px solid ${C.navy}`, marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          기술의 급격한 발전이 인류에게 끼칠 수 있는 해악을 선제적으로 대응하여,<br />
          안전하고 건강한 미래 사회를 만든다.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, padding: "0 32px" }}>

        {/* 왼쪽 */}
        <div>
          <div style={h3s}>1. 디지털 위협의 최전선에 선 한반도</div>
          <p style={ps}>
            AI 시대, 기술은 개인의 자유를 전례 없이 확장한다. 의대나 법대를 나오지 않아도 의료와 법률 지식을 활용할 수 있는 세상이 열리고 있다. 그러나 같은 기술이 자율살상무기, 생물무기 설계, 대규모 감시 체제의 도구가 된다. 확장된 자유와 확장된 위험은 같은 기술에서 나온다.
          </p>
          <p style={ps}>
            한반도는 이 충돌의 최전선에 있다. 미중 AI 군비 경쟁의 지정학적 접점이자, 세계에서 가장 빠르게 디지털화된 사회 중 하나다. 위협이 가장 먼저, 가장 강하게 도달하는 곳이 바로 이곳이다.
          </p>
          <p style={ps}>
            지금은 초기다. AI의 자율성은 아직 제한적이고, 이해관계가 완전히 고착되지 않았다. 핵 기술은 냉전이 시작된 뒤에야 통제를 시도했고, 그 대가는 수십 년의 공포였다. AI는 그보다 확산 속도가 빠르고 진입 장벽이 낮다. <strong>지금이 설계할 수 있는 마지막 시간이다.</strong>
          </p>

          <div style={h3s}>2. 위협을 정확히 아는 것이 모든 통제의 출발점</div>
          <p style={ps}>
            디지털이 초래하는 위협은 시간축에 따라 네 층위로 다가온다. <strong>진행 중</strong>인 AI 군사 비대칭과 자율살상무기는 가자·우크라이나에서 이미 실전에 투입됐고, 감시·조작 체제는 선거 개입과 딥페이크 일상화로 민주주의를 잠식하며, AI 통제 상실 위험은 현실이 되고 있다. <strong>임박한(1~3년)</strong> AI 생물무기·사이버 WMD·핵AI화는 더 많은 사람이 더 많은 수단으로 죽일 수 있게 만든다. <strong>중기적으로</strong> 대량 실업·정체성 위기와 빅테크 권력 독점은 사회 전체의 구조를 바꾸고, <strong>장기적으로</strong> 거버넌스 공백이 통제 자체를 불가능하게 만든다.
          </p>
          <p style={ps}>
            막아야 할 것과 막지 말아야 할 것을 구분해야 한다. 모든 AI를 규제하면 자유의 확장을 저해한다. 통제는 3단계로 나뉜다. <strong>금지</strong>는 AI 생물무기, 핵AI화처럼 존재 자체가 위험한 기술을 차단하는 것이다. <strong>승인</strong>은 감시 AI, 자율 에이전트처럼 조건부로 허용하되 사전 검증을 요구하는 것이다. <strong>전환</strong>은 AI 초과이윤 누진세, 돌봄 인정소득처럼 경제 구조를 재편하는 것이다.
          </p>

          <div style={h3s}>3. 설계가 앞서면 비용이 낮다</div>
          <p style={ps}>
            역사는 두 가지 경로를 보여준다. 화학무기금지협약(CWC)은 193개국이 비준하고 신고된 화학무기 재고를 100% 폐기했다. 몬트리올 의정서는 197개국이 비준하고 오존층 파괴 물질을 98% 감축했다. 반면 핵확산금지조약(NPT)은 강대국 특권을 허용해 북한, 이란 같은 이탈자를 만들었고, 생물무기금지협약(BWC)은 검증 메커니즘 없이 소련의 20년 비밀 개발을 허용했다.
          </p>
          <p style={ps}>
            성공한 통제의 공통점은 세 가지다. 물리적 통제 지점이 있었고(화학무기의 전구물질, 오존의 CFC 대체재), 검증 메커니즘이 작동했으며, 경제적 대안이 존재했다. AI에도 이 조건이 있다. 반도체 공급망(ASML, TSMC, 삼성, NVIDIA)은 물리적 통제 지점이 되고, 컴퓨팅 사용량은 추적 가능하며, AI 초과이윤의 사회 환류 모델은 경제적 대안이 된다.
          </p>
        </div>

        {/* 오른쪽 */}
        <div>
          <div style={h3s}>4. 디지털 FDA — 개발자가 안전을 입증해야 한다</div>
          <p style={ps}>
            신약을 만들 때 그 약이 인류에게 해가 없다는 것을 누가 입증하는가? 독립 전문가가 아니다. <strong>그 기술을 개발한 사람이 직접 안전성을 입증해야 허가가 난다.</strong> 이것이 FDA의 원리다.
          </p>
          <p style={ps}>
            디지털 기술도 마찬가지여야 한다. 수만 개의 디지털 기술이 쏟아지는데 누군가 전부 감시할 수 없다. 그러나 <strong>개발자가 "이 기술이 미래를 위험하게 만들지 않는다"는 것을 입증해야만 세상에 나올 수 있는 체제</strong>는 만들 수 있다. 입증 책임을 개발자에게 돌리는 것 — 이것이 FDA 모델의 핵심이고, 디지털 기술 통제의 현실적 출발점이다.
          </p>
          <p style={ps}>
            이 체제 없이는 돈 버는 방향으로 기술이 흐를 뿐이다. 엉터리 약이 횡행했던 것처럼, 검증 없는 디지털 기술은 인류를 해치는 도구가 된다.
          </p>

          <div style={h3s}>5. 정체성 실현권 — 더 큰 자유</div>
          <p style={ps}>
            자유는 확장되어 왔다. 인쇄술이 신앙의 자유를, 증기기관이 재산권의 자유를, 대량생산이 사회적 권리를 열었다. 매번 이전 시대에는 상상할 수 없던 자유였다. AI 시대의 다음 자유는 <strong>정체성 실현권</strong>이다. "나는 무엇을 위해 사는 사람인가"를 스스로 정의하고 추구할 수 있는 권리.
          </p>
          <p style={ps}>
            산업 시대는 효율을 최고 가치로 삼았다. 인간의 가치를 노동 생산성으로 측정한 것은 200년간의 역사적 이상(異常)이다. AI가 노동을 대체하면 "무슨 일 하세요?"에 답할 수 없는 사람이 다수가 된다. 기본소득만으로는 이 존재론적 위기를 해결할 수 없다. <strong>참정권이 민주주의를 정의했듯, 정체성 실현권이 디지털 시대를 정의한다.</strong>
          </p>

          <div style={h3s}>6. 태재가 해야 하는 일</div>
          <p style={ps}>
            위험을 알면서도 이윤 앞에서 멈춘 자들이 있다. 안전보다 속도를 택한 빅테크, 규제보다 혁신을 택한 정부, 경고보다 낙관을 택한 학계가 그들이다. 태재는 그들이 멈춘 자리에서 시작한다.
          </p>
          <p style={ps}>
            패권의 최전선에서 합의의 최전선으로. 미중 대결의 접점에 있는 한반도에서, 대결을 협력으로 전환시킬 모델을 먼저 만든다. 화학무기금지협약에서 최종 돌파구를 연 것은 강대국이 아닌 호주였다 — 1992년 에반스 외무장관의 타협 초안이 협약 타결의 결정적 계기가 됐다. 한국이 그 역할을 할 수 있다.
          </p>

          {/* 핵심 메시지 박스 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
            {[
              { label: "디지털 FDA", desc: "개발자가 안전을 입증해야 세상에 나온다", color: C.red },
              { label: "소멸하는 권력", desc: "과업 완성 시 사라지는 공공 목적 권력", color: C.amber },
              { label: "정체성 실현권", desc: "참정권 이후의 더 큰 자유, AI 시대의 핵심 가치", color: C.navy },
              { label: "패권→합의", desc: "한반도가 미중 협력의 설계자가 된다", color: C.green },
            ].map(({ label, desc, color }) => (
              <div key={label} style={{ padding: "8px 10px", borderLeft: `4px solid ${color}`, background: C.bg }}>
                <div style={{ fontSize: 13, fontWeight: 800, color, marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
