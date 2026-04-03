/* 담당: 윤준영 — p.2 위협·통제 */
import { C } from "./constants";
import { Header, Footer } from "./shared";

export function ThreatControlPage() {
  const tc = { padding: "4px 6px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 12, lineHeight: 1.4 };
  const th = { padding: "3px 6px", borderBottom: "2px solid #333", fontSize: 11, fontWeight: 700 as const, textAlign: "left" as const };

  return (
    <div style={{ pageBreakBefore: "always" }}>
      <Header title="디지털 위협과 통제 방안" subtitle="2. 디지털 기술의 위협 및 통제" />

      {/* 디지털 기술 구성 */}
      <div style={{ margin: "12px 32px 10px" }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: C.navy, marginBottom: 8 }}>디지털 기술의 구성 — 어떻게 디지털 기술이 위협이 되는가</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1fr", gap: 0, alignItems: "stretch" }}>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${C.navy}`, padding: "8px 10px" }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>기반 기술</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>대규모 언어 모델(LLM)</strong> — GPT, Gemini, Claude. 텍스트 생성·추론·코드 작성.</div>
              <div style={{ marginBottom: 3 }}><strong>단백질 구조 예측</strong> — AlphaFold, RFdiffusion. 분자 수준 설계.</div>
              <div style={{ marginBottom: 3 }}><strong>컴퓨터 비전</strong> — 이미지·영상 인식, 딥페이크 생성.</div>
              <div style={{ marginBottom: 3 }}><strong>강화학습</strong> — 자율 의사결정, 목표 최적화.</div>
              <div><strong>AI 에이전트</strong> — 자율적 도구 사용, 하위 목표 설정, 다단계 추론.</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${C.navy}`, padding: "8px 10px" }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>응용 영역</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>군사</strong> — 자율 드론 군집, 표적 선정, 전술 자동화, 핵 지휘통제.</div>
              <div style={{ marginBottom: 3 }}><strong>생명공학</strong> — 신약 개발, 병원체 설계, 합성생물학.</div>
              <div style={{ marginBottom: 3 }}><strong>사이버</strong> — 취약점 탐색, 공격 코드 생성, 인프라 침투.</div>
              <div style={{ marginBottom: 3 }}><strong>정보·미디어</strong> — 딥페이크, 맞춤형 허위정보, 여론 조작.</div>
              <div><strong>경제·노동</strong> — 업무 자동화, 전문직 대체, 플랫폼 독점.</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>
          <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid #b91c1c`, padding: "8px 10px" }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: "#b91c1c", marginBottom: 6 }}>위협으로의 전환</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <div style={{ marginBottom: 3 }}><strong>군사 →</strong> AI 군사 비대칭, 폭력의 민주화, 핵AI화·자율살상</div>
              <div style={{ marginBottom: 3 }}><strong>생명공학 →</strong> AI 생물무기 (비전문가도 병원체 설계)</div>
              <div style={{ marginBottom: 3 }}><strong>사이버 →</strong> 사이버 WMD (인프라 연쇄 붕괴)</div>
              <div style={{ marginBottom: 3 }}><strong>정보·미디어 →</strong> 감시·조작 체제 (민주주의 침식)</div>
              <div><strong>경제·노동 →</strong> 대량 실업·정체성 위기, 빅테크 권력 독점</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: "#333", marginTop: 6, padding: "6px 10px", background: "#f8f8f8", borderLeft: "3px solid #b91c1c", lineHeight: 1.6 }}>
          같은 기반 기술이 용도에 따라 치료제도, 무기도 된다. 지능 개발 자체를 막을 수는 없다. <strong>그러나 AI가 물리적 세계에 접근하는 순간 — 로봇, 드론, 무기, 인프라, 의료기기 — 은 철저히 승인되거나 금지되어야 한다.</strong> 통제의 경계선은 &quot;AI가 물리력과 결합하는 지점&quot;이다.
        </div>
      </div>

      {/* 위협 테이블 */}
      <div style={{ margin: "0 32px 12px" }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: C.navy, marginBottom: 8 }}>디지털 기술의 위험성 — 시간순 위협과 통제 방안</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            <th style={{ ...th, width: "5%" }}>시기</th>
            <th style={{ ...th, width: "9%" }}>위협</th>
            <th style={{ ...th, width: "11%" }}>기술 메커니즘</th>
            <th style={{ ...th, width: "25%" }}>시나리오</th>
            <th style={{ ...th, width: "6%" }}>통제</th>
            <th style={{ ...th, width: "22%" }}>구체적 통제 방안</th>
            <th style={{ ...th, width: "19%" }}>선례·근거</th>
          </tr></thead>
          <tbody>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={4}>임박<br/><span style={{ fontSize: 11.5, color: C.light }}>1~3년</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>AI 군사 비대칭</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>상용 드론+컴퓨터비전, 오픈소스 LLM 전술 자동화</td>
              <td style={tc}>AI가 전력 격차 극대화 → 저비용 전쟁 유혹(이란). 비국가 행위자도 폭력 수단 접근 → 폭력의 민주화.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>AI 군사기술 수출 통제. 비국가 행위자 접근 차단. AI 안전 기구(IAEA 모델) 사찰.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>바세나르 협정 확장</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>AI 생물무기</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>AlphaFold2·3, ProteinMPNN, RFdiffusion</td>
              <td style={tc}>비전문가도 병원체 설계 가능. 확산 시 만든 쪽 포함 모두 피해자.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>모델 접근권 등급제. 생물안전 연구소 외부 반출 금지. 합성생물학 AI 학습데이터 통제.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>화학무기금지협약(CWC) 98% 폐기</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>사이버 WMD</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>LLM 취약점 탐색(PentestGPT류), 자율 익스플로잇</td>
              <td style={tc}>전력망·금융망 취약점 자동 탐색 → 인프라 연쇄 붕괴. WannaCry: NSA 무기 유출 → NHS 마비.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>공격용 AI 개발·배포 금지. 핵심 인프라 방어 의무화. 칩 공급망(ASML·TSMC·삼성) 추적.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>생물무기금지협약(BWC) 실패 교훈</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>핵AI화·자율살상</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>자율표적선정 AI(LAWS), 핵 지휘통제 자동화</td>
              <td style={tc}>핵 지휘체계 AI 개입 → 인간 승인 없이 발사 → 오판이 곧 핵전쟁.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#b91c1c" }}>금지</td>
              <td style={tc}>핵 지휘체계 AI 개입 전면 금지. 자율살상무기 금지 협약. 인간 최종 승인 의무화.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>핵확산금지조약(NPT) — 강대국 특권 배제</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={2}>진행중<br/><span style={{ fontSize: 11.5, color: C.light }}>현재</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>감시·조작 체제</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>추천 알고리즘, 딥페이크, 마이크로타기팅 LLM</td>
              <td style={tc}>개인별 맞춤 정보 조작 → 여론·선거 개입 → 민주주의 침식.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#d97706" }}>승인</td>
              <td style={tc}>알고리즘 투명성 의무. 독립 감사 기구. 딥페이크 라벨링. AI 안전청(FDA 모델) 심사.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>EU AI Act(2024) 고위험 분류</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>AI 통제 상실</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>자율 AI 에이전트, 강화학습 목표 최적화</td>
              <td style={tc}>에이전트 자율 목표 설정 → 인간 의도 무관 행동 → 기만·권력추구.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#d97706" }}>승인</td>
              <td style={tc}>자율성 4단계 등급별 승인. 킬스위치 의무. 행동 로그 공개. 연간 재승인.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>Russell(2019) 번복 가능성 원칙</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }} rowSpan={2}>중기<br/><span style={{ fontSize: 11.5, color: C.light }}>3~10년</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>대량 실업·정체성 위기</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>파운데이션 모델 API 종속, GPU 클러스터 독점</td>
              <td style={tc}>프로 53%→25% 축소 → 존재론적 위기. 기본소득만으로 해결 불가.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#16a34a" }}>전환</td>
              <td style={tc}>목적 기반 경제. AI 초과이윤 누진세 → 돌봄 인정소득. 정체성 실현권 법제화.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>뉴딜(1933) + 살트셰바덴(1938)</td></tr>
            <tr style={{ background: "#f5f5f5" }}>
              <td style={{ ...tc, fontWeight: 700 }}>빅테크 권력 독점</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>GPU 독점, 데이터 네트워크 효과</td>
              <td style={tc}>CEO 10명이 80억 일상 설계. 국가 규제권 무력화.</td>
              <td style={{ ...tc, fontWeight: 700, color: "#16a34a" }}>전환</td>
              <td style={tc}>컴퓨팅 자원 공정 접근 의무(GPU·클라우드). 데이터 주권 확립. 플랫폼 상호호환성 의무.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>Mazzucato(2013) 기업가적 국가</td></tr>
            <tr>
              <td style={{ ...tc, fontWeight: 700 }}>장기<br/><span style={{ fontSize: 11.5, color: C.light }}>10년+</span></td>
              <td style={{ ...tc, fontWeight: 700 }}>거버넌스 공백</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.gray }}>클라우드 초국경성, 데이터 탈국경화</td>
              <td style={tc}>국가 단위 규제 무력 → 규제 차익으로 기업 이탈.</td>
              <td style={{ ...tc, fontWeight: 700 }}>구축</td>
              <td style={tc}>세계 의회(입법) + AI 안전 기구(행정) + AI 분쟁 재판소(사법). 미중 트랙2 외교에서 시작.</td>
              <td style={{ ...tc, fontSize: 11.5, color: C.light }}>몬트리올 의정서(1987) 197개국</td></tr>
          </tbody>
        </table>
      </div>

      {/* 통제 프레임워크 요약 */}
      <div style={{ margin: "10px 32px 0" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>통제 프레임워크</div>
        <div style={{ padding: "8px 12px", background: "#f8f9fa", borderLeft: `4px solid ${C.navy}`, marginBottom: 8 }}>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: C.navy, marginBottom: 4 }}>[전제] 거버넌스 인프라 구축</div>
          <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
            입법(세계 의회) · 행정(AI 안전 기구 + AI 안전청) · 사법(AI 분쟁 재판소). 경로: 미중 트랙2 → 블레츨리→조약 → 세계 의회 → 세계 정부.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          <div style={{ padding: "6px 8px", borderTop: "3px solid #b91c1c" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#b91c1c", marginBottom: 3 }}>① 금지</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}><strong>적용 대상</strong> — AI 무기화 기술 (군사·생물무기·사이버 공격·핵 지휘통제)</p>
              <p style={{ margin: "0 0 3px" }}><strong>통제점</strong> — 칩 공급망 4개사 (ASML·TSMC·삼성·NVIDIA)</p>
              <p style={{ margin: "0 0 3px" }}><strong>집행</strong> — 위반 시 칩·클라우드 접근 차단, 국제 기구 사찰</p>
              <p style={{ margin: 0, fontSize: 11, color: C.light }}>강대국 포함 예외 없이 적용</p>
            </div>
          </div>
          <div style={{ padding: "6px 8px", borderTop: "3px solid #d97706" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#d97706", marginBottom: 3 }}>② 승인</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}><strong>적용 대상</strong> — AI + 물리력 결합 시스템 (드론·자율무기·의료기기·인프라 제어)</p>
              <p style={{ margin: "0 0 3px" }}><strong>메커니즘</strong> — 사전 심사·등급별 승인·주요 시장 접근 조건</p>
              <p style={{ margin: "0 0 3px" }}><strong>집행</strong> — 킬스위치 의무화·행동 로그 공개·연간 재승인</p>
              <p style={{ margin: 0, fontSize: 11, color: C.light }}>지능 자체가 아닌 AI+물리력 결합 지점에 적용</p>
            </div>
          </div>
          <div style={{ padding: "6px 8px", borderTop: "3px solid #16a34a" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#16a34a", marginBottom: 3 }}>③ 전환</div>
            <div style={{ fontSize: 11.5, lineHeight: 1.5, color: C.gray }}>
              <p style={{ margin: "0 0 3px" }}><strong>적용 대상</strong> — 노동 시장·AI 인프라 소유·데이터 주권</p>
              <p style={{ margin: "0 0 3px" }}><strong>메커니즘</strong> — AI 초과이윤 누진세 → 돌봄 인정소득·컴퓨팅 자원 공정 접근·데이터 주권</p>
              <p style={{ margin: "0 0 3px" }}><strong>집행</strong> — 기존 조세권 활용·국가별 입법·테마섹형 공공 투자</p>
              <p style={{ margin: 0, fontSize: 11, color: C.light }}>전환은 자연 발생하지 않으므로 능동적 설계 필요</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
