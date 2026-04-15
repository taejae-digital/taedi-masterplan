/* p.5 — 위험의 지형 + 거버넌스 (narrative v0.3.10 6장+8장) */
import { C } from "./constants";
import { Header, Footer, SectionTitle } from "./shared";

export function RisksGovernancePage() {
  const tc: React.CSSProperties = { padding: "4px 6px", borderBottom: "1px solid #eee", verticalAlign: "top", fontSize: 12, lineHeight: 1.4 };
  const th: React.CSSProperties = { padding: "3px 6px", borderBottom: "2px solid #333", fontSize: 11, fontWeight: 700, textAlign: "left" };

  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="5. 위험의 지형과 거버넌스" />

      <div style={{ margin: "12px 32px 10px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>1. 위험 선별의 기준</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div style={{ padding: "10px 14px", borderLeft: `4px solid ${C.red}`, background: "#fff5f5" }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.red, marginBottom: 3 }}>기준 1: 돌이킬 수 없는 파국</div>
            <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>핵전쟁처럼 한 번 일어나면 되돌릴 수 없는 위험. AI 시대에 이에 해당하는 위험이 존재한다.</div>
          </div>
          <div style={{ padding: "10px 14px", borderLeft: `4px solid ${C.amber}`, background: "#fff8e1" }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.amber, marginBottom: 3 }}>기준 2: 공동체의 해체</div>
            <div style={{ fontSize: 12, lineHeight: 1.55, color: "#333" }}>구성원들이 서로를 적으로 인식하는 수준. 최소한의 신뢰와 연대가 파괴되면 공동체가 기능을 상실한다.</div>
          </div>
        </div>
      </div>

      {/* 위험 테이블 — 4수준 */}
      <div style={{ margin: "0 32px 10px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>2. 개인 → 공동체 → 국가 → 세계</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            <th style={{ ...th, width: "7%" }}>수준</th>
            <th style={{ ...th, width: "15%" }}>위험</th>
            <th style={{ ...th, width: "40%" }}>메커니즘과 시나리오</th>
            <th style={{ ...th, width: "7%" }}>기준</th>
            <th style={{ ...th, width: "31%" }}>통제 방향</th>
          </tr></thead>
          <tbody>
            <tr>
              <td style={{ ...tc, fontWeight: 700, color: C.navy }} rowSpan={2}>개인</td>
              <td style={{ ...tc, fontWeight: 700 }}>정보 환경 조작</td>
              <td style={tc}>AI가 개인의 인식과 판단에 직접 개입. 자신의 판단이 자율적인지 조작된 것인지 구별 불가. 가짜 뉴스를 넘어 인지 자체의 외부 설계.</td>
              <td style={{ ...tc, fontWeight: 700, color: C.amber }}>해체</td>
              <td style={tc}>알고리즘 투명성 의무. AI 안전청(FDA 모델) 심사. 딥페이크 라벨링.</td>
            </tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>경제적 소외</td>
              <td style={tc}>AI가 노동 대체 → 시장 참여 통로 상실. 생존뿐 아니라 정체성과 존엄의 문제. 구조적 무용화(structural obsolescence).</td>
              <td style={{ ...tc, fontWeight: 700, color: C.amber }}>해체</td>
              <td style={tc}>목적 기반 경제 전환. 돌봄 인정소득. 정체성 실현권 법제화.</td>
            </tr>
            <tr style={{ background: C.bg }}>
              <td style={{ ...tc, fontWeight: 700, color: C.navy }}>공동체</td>
              <td style={{ ...tc, fontWeight: 700 }}>현실 합의 붕괴</td>
              <td style={tc}>AI 최적화 정보 환경이 구성원을 서로 다른 현실에 가둠. 사실 자체에 대한 합의가 붕괴. 폴라니의 자기보호 운동이 극단화 → 파시즘적 반작용 위험.</td>
              <td style={{ ...tc, fontWeight: 700, color: C.amber }}>해체</td>
              <td style={tc}>독립 감사 기구. 플랫폼 상호호환성. 정보 환경 다양성 의무.</td>
            </tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700, color: C.navy }} rowSpan={2}>국가</td>
              <td style={{ ...tc, fontWeight: 700 }}>제도 부적응</td>
              <td style={tc}>기득권 저항이 제도적으로 수용 안 되면 혁명·내전으로 이행. AI 전환 속도가 산업혁명보다 빨라 제도가 못 따라감.</td>
              <td style={{ ...tc, fontWeight: 700, color: C.red }}>파국</td>
              <td style={tc}>사전 설계 경로(CWC·몬트리올 모델). 전환 완충 장치 선제 구축.</td>
            </tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>개인 파괴력 증폭</td>
              <td style={tc}>Anthropic 고성능 모델이 24년 된 Linux 보안 취약점 발견 — 악용 시 전 세계 인프라 동시 공격 가능. 소수 개인이 국가급 파괴력 보유.</td>
              <td style={{ ...tc, fontWeight: 700, color: C.red }}>파국</td>
              <td style={tc}>개발자 안전 입증 의무(FDA 모델). 모델 접근권 등급제. 칩 공급망 추적.</td>
            </tr>
            <tr style={{ background: C.bg }}>
              <td style={{ ...tc, fontWeight: 700, color: C.navy }}>세계</td>
              <td style={{ ...tc, fontWeight: 700 }}>AI 패권 전쟁</td>
              <td style={tc}>AI 전환 성공 vs 실패 국가 간 격차 → 패권 경쟁 → 군사적 확대. 산업혁명기 영국-독일, 현재 미국-중국 역학의 재현.</td>
              <td style={{ ...tc, fontWeight: 700, color: C.red }}>파국</td>
              <td style={tc}>세계 의회(입법) + AI 안전 기구(행정) + AI 분쟁 재판소(사법). 패권→합의 전환.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 거버넌스 */}
      <div style={{ margin: "0 32px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>3. 왜 지금인가 — 설계가 앞서면 비용이 낮다</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div style={{ padding: "8px 10px", borderTop: `3px solid ${C.green}`, background: C.bg }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.green, marginBottom: 4 }}>사전 설계 성공</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333" }}>
              <strong>CWC</strong> — 193개국 비준, 화학무기 100% 폐기<br />
              <strong>몬트리올</strong> — 197개국, 오존파괴물질 98% 감축<br />
              공통: 물리적 통제 지점 + 검증 메커니즘 + 경제적 대안
            </div>
          </div>
          <div style={{ padding: "8px 10px", borderTop: `3px solid ${C.red}`, background: "#fff5f5" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.red, marginBottom: 4 }}>사후 봉합 실패</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333" }}>
              <strong>NPT</strong> — 강대국 특권 허용, 이탈자 양산<br />
              <strong>BWC</strong> — 검증 없이 소련 20년 비밀 개발 허용<br />
              사후 거버넌스는 본질적으로 불완전
            </div>
          </div>
          <div style={{ padding: "8px 10px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 4 }}>AI의 통제 조건</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#333" }}>
              <strong>물리적 통제</strong> — 반도체 4사 (ASML·TSMC·삼성·NVIDIA)<br />
              <strong>검증</strong> — 컴퓨팅 사용량 추적 가능<br />
              <strong>대안</strong> — AI 초과이윤 사회 환류 모델
            </div>
          </div>
        </div>

        <div style={{ marginTop: 8, padding: "8px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}`, fontSize: 12, lineHeight: 1.6, color: "#111" }}>
          <strong>디지털 FDA 원칙:</strong> 개발자가 "이 기술이 미래를 위험하게 만들지 않는다"는 것을 입증해야만 세상에 나올 수 있는 체제. Anthropic 자체 보류 사례가 실증하나, 자발적 윤리의 한계가 있으므로 <strong>제도화가 필요하다.</strong> Bengio의 국제 AI 안전 논의와 연결.
        </div>
      </div>

      <Footer />
    </div>
  );
}
