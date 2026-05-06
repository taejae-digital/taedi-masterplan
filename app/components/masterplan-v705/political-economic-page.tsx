import { C } from "./constants";
import { Header, Footer, ps, h3s } from "./shared";

type Step = { era: string; thinker: string; work: string; year: string; core: string; quote: string };

function ThinkerStep({ s, color }: { s: Step; color: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", border: `1px solid ${C.line}`, marginBottom: 6 }}>
      <div style={{ background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11.5, fontWeight: 800, lineHeight: 1.25, textAlign: "center", padding: "4px 6px", whiteSpace: "pre-line" }}>{s.era}</div>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>{s.thinker} <span style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>· {s.work} ({s.year})</span></div>
        </div>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: "#222", marginBottom: 3 }}>{s.core}</div>
        <div style={{ fontSize: 11.5, fontStyle: "italic", color: C.light, lineHeight: 1.45 }}>"{s.quote}"</div>
      </div>
    </div>
  );
}

function BrokenList({ items }: { items: [string, string][] }) {
  return (
    <div style={{ padding: "8px 10px", background: "#fff5f5", borderLeft: `4px solid ${C.red}` }}>
      {items.map(([t, d]) => (
        <div key={t} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 12, lineHeight: 1.55 }}>
          <div style={{ minWidth: 95, fontWeight: 800, color: C.red }}>{t}</div>
          <div style={{ color: "#222" }}>{d}</div>
        </div>
      ))}
    </div>
  );
}

export function PoliticalEconomicPage() {
  return (
    <div style={{ pageBreakBefore: "always", pageBreakAfter: "always", height: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="3. 디지털 전환에 따른 정치/경제 질서 변화" />

      <div style={{ padding: "12px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, lineHeight: 1.4 }}>
          산업화 시대의 정치·경제 사상은 시대의 조건과 맞았기에 승리했다.
          디지털 시대는 그 사상이 딛고 서 있던 전제 자체를 무너뜨린다.
        </div>
      </div>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
        {/* 3.1 정치 */}
        <div>
          <div style={h3s}>3.1 정치 질서 — 정당성은 어디서 오는가</div>
          <div style={{ padding: "6px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}`, fontSize: 12.5, fontWeight: 700, color: C.navy, marginBottom: 8 }}>
            Q. 다스리는 자에게 복종해야 하는 이유는?
          </div>

          <ThinkerStep color={C.navy} s={{ era: "동의\n①", thinker: "루소", work: "사회계약론", year: "1762", core: "주권은 인민에게. 정당성은 일반의지에서.", quote: "인간은 자유롭게 태어났으나, 어디서나 쇠사슬에 매여있다." }} />
          <ThinkerStep color={C.navy} s={{ era: "절차\n②", thinker: "롤스", work: "정의론", year: "1971", core: "다수 횡포를 막을 공정한 절차 — 무지의 베일.", quote: "공정한 규칙이란, 내 위치를 모르는 상태에서도 동의할 수 있는 규칙이다." }} />
          <ThinkerStep color={C.navy} s={{ era: "공론장\n③", thinker: "하버마스", work: "공론장의 구조변동", year: "1962", core: "정당성은 왜곡 없는 의사소통의 공론장에서.", quote: "공론장은 권력 밖의 시민들이 공적 관심사를 토론하는 영역이다." }} />

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "10px 0 4px" }}>왜 산업화 시대에 맞았나</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 8 }}>
            {[
              "국민국가 단위 안정",
              "기술 변화가 선거 주기 안",
              "중앙화된 매체 = 공론장",
              "1인 1표 = 권력의 비례성",
            ].map((t) => (
              <div key={t} style={{ padding: "5px 8px", background: C.bg, fontSize: 11.5, color: "#333", borderLeft: `2px solid ${C.line}` }}>✓ {t}</div>
            ))}
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.red, margin: "8px 0 4px" }}>왜 디지털 시대에 맞지 않나</div>
          <BrokenList items={[
            ["속도 불일치", "선거 4~5년 vs AI 변화 수개월"],
            ["공론장 붕괴", "알고리즘 피드 = 분절된 정보 거품"],
            ["선출되지 않은 권력", "빅테크는 의회에 책임지지 않음"],
            ["1인 1표의 무력화", "마이크로타게팅이 사람마다 다른 현실 전송"],
          ]} />
        </div>

        {/* 3.2 경제 */}
        <div>
          <div style={h3s}>3.2 경제 질서 — 부는 어떻게 만들어지고 나뉘는가</div>
          <div style={{ padding: "6px 10px", background: C.bg, borderLeft: `3px solid ${C.accent}`, fontSize: 12.5, fontWeight: 700, color: C.accent, marginBottom: 8 }}>
            Q. 부는 어떻게 만들어지고 어떻게 나뉘어야 하는가?
          </div>

          <ThinkerStep color={C.accent} s={{ era: "시장\n①", thinker: "스미스", work: "국부론", year: "1776", core: "부의 원천은 자유 시장과 분업의 보이지 않는 손.", quote: "정육점·양조업자·빵집의 자기 이익 추구가 우리에게 저녁을 준다." }} />
          <ThinkerStep color={C.accent} s={{ era: "사회보호\n②", thinker: "폴라니", work: "거대한 전환", year: "1944", core: "노동·토지·화폐의 상품화는 사회 자기파괴, 이중 운동이 답.", quote: "노동·토지·화폐를 시장에 맡기는 것은 사회의 자기 파괴다." }} />
          <ThinkerStep color={C.accent} s={{ era: "수요관리\n③", thinker: "케인스", work: "일반이론", year: "1936", core: "수요 부족 시 국가 지출로 경기 부양 — 복지국가의 토대.", quote: "장기적으로 우리는 모두 죽는다 — 시장의 자기조정을 기다리는 동안." }} />

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.dark, margin: "10px 0 4px" }}>왜 산업화 시대에 맞았나</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 8 }}>
            {[
              "재화는 희소성 기반",
              "노동시간 = 소득 공식",
              "국가가 화폐·조세 주권자",
              "시장·사회·국가 경계 뚜렷",
            ].map((t) => (
              <div key={t} style={{ padding: "5px 8px", background: C.bg, fontSize: 11.5, color: "#333", borderLeft: `2px solid ${C.line}` }}>✓ {t}</div>
            ))}
          </div>

          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.red, margin: "8px 0 4px" }}>왜 디지털 시대에 맞지 않나</div>
          <BrokenList items={[
            ["한계비용 0", "데이터·알고리즘은 복제 비용 0 — 희소성 원리 무력"],
            ["노동-소득 단절", "자동화가 인지 노동 대체 → 노동시간=소득 공식 붕괴"],
            ["국가 주권 우회", "암호화폐·플랫폼·초국경 데이터 이동이 국가의 화폐·조세 주권을 우회"],
            ["부의 극단적 집중", "AI 부가 데이터 독점자 소수에게 집적"],
          ]} />
        </div>
      </div>

      {/* 3.3 — 3영역으로 보는 산업 질서의 파탄 */}
      <div style={{ padding: "10px 32px 0" }}>
        <div style={h3s}>3.3 3영역 강화가 산업 질서의 전제를 무너뜨린다</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: C.navy, color: "#fff" }}>
              <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5, width: "10%" }}>강화 영역</th>
              <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>정치 질서에 가하는 타격 <span style={{ color: "#aac8ff", fontWeight: 500 }}>(루소·롤스·하버마스)</span></th>
              <th style={{ padding: "6px 8px", textAlign: "left", fontSize: 11.5 }}>경제 질서에 가하는 타격 <span style={{ color: "#aac8ff", fontWeight: 500 }}>(스미스·폴라니·케인스)</span></th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                area: "판단력",
                pol: "전문가·관료 판단 권위 흔들림 — 위임 정당성의 근거 약화. 학위·자격증 엘리트 선발 합의 정당성 붕괴.",
                eco: "인지 노동 한계비용 0 수렴 — 전문직 기반 가격·소득 공식 붕괴. 진입장벽 무력화로 플랫폼·모델 독점이 새 봉건제로.",
              },
              {
                area: "실행력",
                pol: "다수 고용 전제 복지국가 위기 — 직업 묶음 재편으로 과도기 소외 계층 발생. 직업=소속 기반 참정 구조 이완.",
                eco: "노동시간=소득 공식 붕괴, 자동화 이익이 데이터 독점자에 집중. 분업·조직 중심 기업 모델 약화, 1인 묶음 직업이 니치마켓 분점.",
              },
              {
                area: "파급력",
                pol: "1인 1표 무력화, 마이크로타게팅이 공론장을 사람마다 다른 현실로 분열. 선출되지 않은 빅테크가 민주주의 기반 잠식.",
                eco: "광고·미디어 경제 붕괴, 관심 경제 과두화로 부의 흐름 비대칭화. AI 인프라 투자 수익이 소수 플랫폼에 집중.",
              },
            ].map(({ area, pol, eco }, i) => (
              <tr key={i} style={{ background: i % 2 ? C.bg : "#fff" }}>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", fontWeight: 800, color: C.navy, fontSize: 12.5, lineHeight: 1.5 }}>{area}</td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: C.red, fontWeight: 600, lineHeight: 1.5 }}>{pol}</td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #eee", color: C.red, fontWeight: 600, lineHeight: 1.5 }}>{eco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
