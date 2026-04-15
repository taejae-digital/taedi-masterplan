/* 담당: 김수연/이규환 — p.3 연구 내용 */
import { C } from "./constants";
import { Header, ResearchBox, Arrow, Footer, hcellStyle, cellStyle } from "./shared";

export function ResearchContentPage() {
  const hcell = hcellStyle;
  const cell = cellStyle;

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="MASTER PLAN v0.1" subtitle="3. 상세 연구 프레임워크" />

      {/* 연구 흐름 */}
      <div style={{ margin: "16px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>연구 흐름</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1fr 24px 1fr 24px 1fr", gap: 0, alignItems: "stretch" }}>
          <ResearchBox num="1" title="디지털의 본질" desc="강화와 연결이 만드는 자유의 확장. 개인의 확장된 자유와 공동체 질서의 충돌." />
          <Arrow />
          <ResearchBox num="2" title="사회 변화" desc="개인 계층 재편(프로 53%→25%), 6공동체 재구성, 경제 질서 전환." />
          <Arrow />
          <ResearchBox num="3" title="위협 특정" desc="시간순 위협 시나리오. 임박(생물무기·AI 기반 WMD)부터 장기(거버넌스 공백)까지." />
          <Arrow />
          <ResearchBox num="4" title="대책 설계" desc="[전제] 거버넌스 구축 → [통제] 금지·승인·전환. 각 위협별 구체적 통제 방안." />
          <Arrow />
          <ResearchBox num="5" title="실행·공론화" desc="단행본 출판, 국제 컨퍼런스, 정책 제안, 현실화." />
        </div>
      </div>

      {/* 연구 내용 상세 */}
      <div style={{ margin: "12px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>연구 내용 상세</div>

        {/* 01. 디지털 기술 변화의 본질 */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>1. 디지털 기술 변화의 본질</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 5px" }}>디지털은 <strong>강화</strong>(빠르게 더 많은 일)와 <strong>연결</strong>(다른 사람들의 능력을 공유)을 만든다. 인쇄술이 신앙의 자유를, 증기기관이 재산권의 자유를 열었듯, AI는 누구나 전문가급 역량을 갖추는 자유를 연다.</p>
              <p style={{ margin: "0 0 5px" }}>강화되고 연결된 개인들은 더 큰 규모의 정체성 실현을 원한다. 그러나 공동체는 전체의 균형을 유지해야 한다. <strong>개인의 확장된 자유와 공동체의 질서 사이에 충돌이 생긴다.</strong> 이 충돌은 500년간 반복된 패턴이다.</p>
              <p style={{ margin: 0 }}>설계가 앞서면 비용이 낮고(영국 개혁, 뉴딜), 늦으면 대가가 크다(30년 전쟁, 대공황→파시즘). 디지털 위협은 지금이 초기 — 이해관계가 아직 얽히지 않았다.</p>
            </div>
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, lineHeight: 1.35 }}>
                <thead><tr>
                  <th style={hcell}>기술 → 자유</th><th style={hcell}>저항</th><th style={hcell}>파괴적 전환</th><th style={hcell}>안전한 전환</th><th style={hcell}>새 가치</th>
                </tr></thead>
                <tbody>
                  <tr><td style={cell}>인쇄술 → 신앙</td><td style={cell}>&quot;사제의 것&quot;</td><td style={cell}>30년 전쟁</td><td style={cell}>—</td><td style={cell}>신앙의 자유</td></tr>
                  <tr><td style={cell}>증기기관 → 재산권</td><td style={cell}>&quot;혈통이 권력&quot;</td><td style={cell}>프랑스 혁명</td><td style={cell}>영국 개혁</td><td style={cell}>시민의 권리</td></tr>
                  <tr><td style={cell}>대량생산 → 풍요</td><td style={cell}>&quot;시장이 조절&quot;</td><td style={cell}>대공황→파시즘</td><td style={cell}>뉴딜</td><td style={cell}>사회적 권리</td></tr>
                  <tr style={{ background: "#f8f9fa" }}><td style={{ ...cell, fontWeight: 700 }}>AI → 전문가급</td><td style={cell}>&quot;실현은 사치&quot;</td><td style={{ ...cell, fontWeight: 700 }}>AI 대량살상 전쟁</td><td style={{ ...cell, fontWeight: 700 }}>가치 전환</td><td style={{ ...cell, fontWeight: 700 }}>정체성 실현권</td></tr>
                </tbody>
              </table>
              <p style={{ margin: "4px 0 0", fontSize: 11.5, color: C.light }}>Perez (2002) 기술혁명 황금기 · Polanyi (1944) 시장 팽창과 사회 자기보호 · Acemoglu &amp; Johnson (2023) 기술의 민주적 재방향화</p>
            </div>
          </div>
        </div>

        {/* 02. 사회 변화 */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>2. 사회 변화</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>개인의 변화</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>리더</strong> (AI 설계자) 2% → 5%</p>
                <p style={{ margin: "0 0 4px" }}><strong>프로</strong> (AI 활용) 53% → <strong>25%</strong></p>
                <p style={{ margin: "0 0 4px" }}><strong>아마추어</strong> (AI 의존) 35% → <strong>65%</strong></p>
                <p style={{ margin: "0 0 6px" }}><strong>소외</strong> (AI 접근 불가) 10% → 5%</p>
                <p style={{ margin: 0 }}>&quot;무슨 일 하세요?&quot;에 답할 수 없는 사람이 다수. 경제적 위기이자 존재론적 위기.</p>
              </div>
            </div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>공동체 재편</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>가정</strong> → 정체성 허브, 창작·생산 단위</p>
                <p style={{ margin: "0 0 4px" }}><strong>이웃</strong> → 가치·취미 기반 선택 공동체</p>
                <p style={{ margin: "0 0 4px" }}><strong>도시</strong> → 창조 플랫폼</p>
                <p style={{ margin: "0 0 4px" }}><strong>국가</strong> → 최소 개입 (국방·외교·재난)</p>
                <p style={{ margin: 0 }}><strong>세계</strong> → 세계 정부 (화폐·규제·분쟁)</p>
              </div>
            </div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>경제 질서의 변화 — 니치마켓 자본주의</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
                <p style={{ margin: "0 0 4px" }}><strong>산업 시대:</strong> KBS·MBC 같은 대기업 메가마켓 중심. 자본·규모가 권력.</p>
                <p style={{ margin: "0 0 4px" }}><strong>AI 시대:</strong> 슈카·MK크리에이티브처럼 소수 인원이 개인화된 가치를 실현하는 무수한 니치마켓. 롱테일 경제(Chris Anderson, 2004)가 가속화.</p>
                <p style={{ margin: "0 0 4px" }}><strong>핵심 전환:</strong> 노동 가치 실현(기업) → 개인화된 가치 실현(개인). &quot;무슨 일 하세요?&quot;가 아닌 &quot;나는 무엇을 위해 사는 사람인가&quot;.</p>
                <p style={{ margin: 0 }}><strong>새 경제 질서:</strong> 자본주의도 공산주의도 아닌 — 개인이 AI로 소규모 가치를 실현하는 니치마켓 생태계. 더 많은 사람이 더 다양한 방식으로 경제에 참여.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 03-04 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>3. 위협 시나리오</div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
                <p style={{ margin: "0 0 5px" }}><strong>진행 중:</strong> <span style={{ color: "#b91c1c", fontWeight: 700 }}>AI 군사 비대칭</span> — 가자·우크라이나 실전 투입, 비국가 행위자도 폭력 수단 접근. <span style={{ color: "#b91c1c", fontWeight: 700 }}>자율살상무기</span> — 인간 승인 없는 표적 선정·공격 자동화. <span style={{ color: "#d97706", fontWeight: 700 }}>감시·조작 체제</span> — LLM+추천 알고리즘으로 여론 조작, 민주주의 침식. <span style={{ color: "#d97706", fontWeight: 700 }}>AI 통제 상실</span> — 에이전트가 자율 목표 설정, 기만·권력추구.</p>
                <p style={{ margin: "0 0 5px" }}><strong>임박(1~3년):</strong> <span style={{ color: "#b91c1c", fontWeight: 700 }}>AI 생물무기</span> — AlphaFold류로 비전문가도 병원체 설계. <span style={{ color: "#b91c1c", fontWeight: 700 }}>사이버 WMD</span> — 인프라 취약점 자동 탐색·연쇄 붕괴. <span style={{ color: "#b91c1c", fontWeight: 700 }}>핵AI화</span> — 핵 지휘체계 AI 개입, 인간 승인 없는 발사.</p>
                <p style={{ margin: 0 }}><strong>중기(3~10년):</strong> <span style={{ color: "#16a34a", fontWeight: 700 }}>대량 실업·정체성 위기</span> — 프로 계층 절반 이상 축소. <span style={{ color: "#16a34a", fontWeight: 700 }}>빅테크 권력 독점</span> — CEO 10명이 80억 일상 설계. <strong>장기(10년+):</strong> <span style={{ fontWeight: 700 }}>거버넌스 공백</span> — 기술이 국경 초월, 국가 규제 무력.</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>4. 대책: AS-IS → TO-BE</div>
            <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
                <p style={{ margin: "0 0 5px" }}><strong>AS-IS(산업 시대 가치관):</strong> 효율=가치. AI가 인간 대체·권력 집중·군사화를 &quot;합리적 결론&quot;으로 만든다. 남의 꿈을 위한 노동. 거버넌스는 국경 안에 한정. 결과: 생존 위협 + 불평등 + 거버넌스 공백.</p>
                <p style={{ margin: "0 0 5px" }}><strong>TO-BE(정체성 중심 가치관):</strong> 정체성 실현권. 자기 목적 추구. 도시는 창조 플랫폼. 세계 정부가 화폐·규제. 컴퓨팅 자원 공정 접근 + 목적 기반 경제.</p>
                <p style={{ margin: 0 }}><strong>TO-DO:</strong> [통제] ① 금지(화학무기금지협약 모델, 칩 공급망 통제) ② 승인(식품의약국 모델, AI+물리력) ③ 전환(뉴딜+살트셰바덴 모델, 돌봄 인정소득·컴퓨팅 공정 접근)을 실현하기 위해 [전제] 거버넌스 구축(세계 의회 입법·행정·사법)이 필요하다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 05. 실행 및 공론화 전략 */}
      <div style={{ margin: "16px 32px 12px" }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>5. 실행 및 공론화 전략</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>단행본 출판</div>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>목표:</strong> 『디지털이 초래할 위험성과 그 대책』 2026년 Q4 출판.</p>
              <p style={{ margin: "0 0 4px" }}><strong>구성:</strong> 디지털의 본질 → 사회 변화 → 위협 시나리오 → 기술 통제 체제 설계·승인·전환 → 정체성 실현권.</p>
              <p style={{ margin: "0 0 4px" }}><strong>독자:</strong> 정책 입안자, 국제 학계, 시민 사회. 한국어 출간 후 영문 요약본.</p>
              <p style={{ margin: 0 }}><strong>검증:</strong> 9~10월 자문단 미팅 피드백 → 11~12월 집필 착수 → 2026 Q4 출판.</p>
            </div>
          </div>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>국제 컨퍼런스</div>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>시기:</strong> 2026년 11~12월, 서울.</p>
              <p style={{ margin: "0 0 4px" }}><strong>형식:</strong> 국제 학자 초청 토론. 블레츨리/서울 AI Summit 후속 트랙으로 포지셔닝.</p>
              <p style={{ margin: "0 0 4px" }}><strong>참석자:</strong> 국제 자문단 학자, 각국 AISI 연구자, 정책 입안자, 시민 사회 대표.</p>
              <p style={{ margin: 0 }}><strong>산출물:</strong> 서울 선언문 — &quot;어떤 세계를 만들 것인가&quot;에 대한 첫 국제 합의 시도.</p>
            </div>
          </div>
          <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, background: C.bg }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.dark, marginBottom: 6 }}>현실화</div>
            <div style={{ fontSize: 12, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 4px" }}><strong>한국 내:</strong> 단행본 및 연구 보고서 퍼블리시. AI 거버넌스 입법 제안.</p>
              <p style={{ margin: "0 0 4px" }}><strong>국제:</strong> 오타와 조약 모델 — 한국이 중견국으로서 AI 금지 협약 의제 설정. 민간 자문단을 통한 국제 논의 참여.</p>
              <p style={{ margin: "0 0 4px" }}><strong>네트워크:</strong> 국제 자문단 상설화. AISI·KAIST·서울대 등 국내 협력 기관 네트워크.</p>
              <p style={{ margin: 0 }}><strong>목표:</strong> 패권의 최전선에서 합의의 최전선으로. 한국에서 먼저 모델을 만든다.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
