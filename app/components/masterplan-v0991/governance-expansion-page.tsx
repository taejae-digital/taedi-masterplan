import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const premiseRows = [
  ["국제 정세", "미국 일극 질서는 약해지고 중국의 기술·산업·군사·문화 영향력은 확대된다. 세계 의사결정은 강대국·빅테크·공급망 보유자 중심으로 움직인다."],
  ["한국의 제약", "한반도는 인구·영토·자원 규모만으로 글로벌 규칙을 주도하기 어렵다. 발언권은 외교 구호가 아니라 상대가 필요로 하는 산업적 상호필요에서 생긴다."],
  ["디지털 시대 과제", "AI·데이터·연산·에너지·바이오·문화 플랫폼이 세계 산업의 핵심축이 된다. 새 사회계약은 이 산업축을 개인의 권리와 공동체 운영 원리로 연결해야 한다."],
  ["전략 명제", "한국은 산업 생태계와 제도 역량을 묶어 미·중 협력의 실질 조건을 만들고, 한반도를 안전하고 건강한 디지털 질서의 중심 거점으로 세운다."],
];

const managementRows = [
  {
    area: "세계 경영",
    question: "강대국·빅테크 중심 질서 속에서 새 사회계약을 세계 규범으로 만들 수 있는가.",
    connection: "AI 인프라 접근권, 데이터 주권, 직접 거버넌스 참여권을 국제 표준·공급망·플랫폼 규칙으로 확장한다.",
    strategy: "외교 선언보다 산업적 상호필요를 먼저 만든다. AI 안전, 데이터 이동, 반도체·배터리 공급망, 에너지·바이오·문화 플랫폼을 협력 의제로 묶는다.",
    solution: "AI 안전 공동검증, 데이터 주권 원칙, 플랫폼 책임 조항, 공급망 협력안",
  },
  {
    area: "국가 경영",
    question: "한국은 미·중 사이에서 선택 압박을 받는 위치를 넘어 협력 구조를 제안할 수 있는가.",
    connection: "정체성 실현권과 AI 인프라 접근권을 국가 산업 배치, 공공 AI, 데이터 법제, 디지털 배당과 연결한다.",
    strategy: "15개 한반도 미래산업을 권역별 생태계로 배치하고, 7대 분야를 초일류 제도 역량으로 만들어 산업·외교·안보 협상력을 동시에 키운다.",
    solution: "권역별 산업 생태계, 공공 AI 인프라, 데이터 주권 법제, 7대분야 혁신",
  },
  {
    area: "도시 경영",
    question: "도시는 산업 생태계와 개인의 정체성 발견·훈련·실현을 함께 담는 생활권이 될 수 있는가.",
    connection: "새 권리는 도시에서 일·학습·주거·문화·돌봄·참여 경험으로 검증된다.",
    strategy: "권역별 강소도시가 대학·기업·연구기관·공공조달·시민참여를 묶어 시산학 생태계를 만들고, 개인의 성장 경로와 산업 일감을 연결한다.",
    solution: "도시별 산업학교, 시민참여 플랫폼, 도시 구독, 생활권 돌봄·학습 모델",
  },
  {
    area: "가정 경영",
    question: "개인은 AI와 데이터를 자기 삶의 판단 도구로 통제할 수 있는가.",
    connection: "AI 개인화권은 학습·건강·돌봄·관계 속에서 정체성 발견과 전문성 훈련을 돕는 생활 권리다.",
    strategy: "가정은 산업전략의 말단 소비처가 아니라 강화된 개인이 태어나는 최소 생활권이다. 개인 데이터, AI 코치, 건강·돌봄 경보, 학습 기록을 권리 기준으로 설계한다.",
    solution: "개인 성장 기록, 가족 AI 코치, 설명·거부·조정 UI, 건강·돌봄 기준",
  },
];

const regionRows = [
  ["미국", "AI 모델·반도체 설계·금융·안보 표준", "한국은 첨단제조·메모리·배터리·조선·문화 플랫폼의 신뢰 거점으로 협력한다.", "AI 안전 공동검증, 첨단제조 공급망, 해양안보·에너지 수송"],
  ["중국", "제조 규모·소재·배터리·플랫폼 시장·문화 영향력", "한국은 공급망 단절을 줄이고 소재·부품·문화·보건 협력의 조정 창구가 된다.", "소재·부품 상호의존, 고령화·보건, 청년·문화 교류"],
  ["일본", "소재·장비·로봇·고령사회 운영 경험", "한·일은 기술 신뢰성과 고령사회 해법을 묶어 동아시아 표준을 만든다.", "소부장·로봇·돌봄·재난안전 공동 표준"],
  ["러시아·북방", "에너지·자원·대륙 물류·극지·기후 변수", "한반도는 장기적으로 북방 자원·철도·에너지 연결을 안전 규칙 안에 편입한다.", "철도·물류·에너지·기후안보 연결축"],
  ["동남아", "젊은 인구·제조 이전·디지털 금융·도시 성장", "한국은 교육·제조·도시 운영 모델을 함께 수출하는 성장 파트너가 된다.", "산업학교, 스마트항만, 디지털 공공서비스, 문화교육"],
  ["아프리카", "인구 성장·도시화·에너지·보건·교육 수요", "한국은 AI 교육·보건·에너지·농식품 기술을 새 사회계약형 개발 모델로 연결한다.", "AI 학습, 공공보건, 분산에너지, 농식품·물 관리"],
  ["유럽", "규범·인권·기후·AI 법제·복지국가 경험", "한국은 산업 실행력과 유럽의 규범 역량을 결합해 디지털 권리 표준을 공동 설계한다.", "AI Act 이후 공동검증, 데이터 주권, 기후·복지 표준"],
];

const koreaRows = [
  ["서해 AI·첨단제조권", "수도권–충청–새만금–호남", "AI·반도체·데이터센터 / 배터리·디스플레이 / 정밀제조·소부장", "AI 인프라와 첨단제조를 묶어 미·중 모두가 필요로 하는 안정 공급망을 만든다."],
  ["동남 해양제조·물류권", "부산–울산–창원–거제–포항", "조선·해양플랜트 / 스마트항만·물류 / 로봇·수소", "해양안보, 에너지 수송, 항만 자동화를 연결해 동북아 물류 협상력을 만든다."],
  ["동해 에너지·기후·바이오권", "강원–동해안–경북 내륙", "차세대 에너지 / 기후 적응 / 바이오·헬스케어", "기후·고령화·보건 문제를 산업과 생활 데이터로 풀어 국제 공동검증 시장을 만든다."],
  ["남부 문화·교육·관광권", "광주–전주–남해안–제주", "문화콘텐츠 / 교육·훈련 / 관광·지역 커뮤니티", "정체성 발견 산업을 콘텐츠·교육·관광으로 확장해 문화 패권과 지역 활력을 연결한다."],
  ["북방 대륙연결권", "수도권 북부–강원 북부–동해 북방축", "철도·대륙물류 / 자원·에너지 연결 / 평화·재난안전 인프라", "한반도 긴장을 장기적 연결 전략으로 전환하고 북방 협력의 안전 규칙을 준비한다."],
];

const institutionRows = [
  ["싱크탱크", "세계 산업축·권역별 역할·한반도 협상 지도를 설계하는 전략 두뇌", "산업·외교·안보·권리체계를 한 장의 협상안으로 묶는 인재"],
  ["대학", "권역별 산업학교와 평생학습 모듈로 15개 산업군 인재를 계속 재훈련", "AI·반도체·바이오·로봇·문화교육을 현장 프로젝트로 가르치는 인재"],
  ["기업", "공급망 실행, 테스트베드, 데이터·AI 인프라, 글로벌 표준 실증의 주체", "기술과 시장만이 아니라 사회계약형 제품·서비스를 설계하는 인재"],
  ["미디어", "문화 영향력, 사회적 신뢰, 디지털 권리 담론, 도시 브랜드를 확산", "혐오와 진영논리를 넘어 전략적 시민 여론을 만드는 인재"],
  ["정부", "공공 AI, 데이터 주권, 공공조달, 규제 샌드박스, 산업·도시 권한 배분", "부처 칸막이가 아니라 권역 생태계를 운영하는 행정 인재"],
  ["정당", "새 권리를 법제화하고 산업·도시·복지·안보 의제를 선거와 의회로 연결", "지역 이익을 세계 전략과 연결하는 선출직·정책 인재"],
  ["군대", "전략기술 보호, 해양안보, 재난 대응, 사이버·우주·공급망 안보", "안보를 산업·기술·재난안전과 통합해 다루는 지휘 인재"],
];

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />

      <div style={{ padding: "7px 30px 5px", borderBottom: `2px solid ${C.navy}`, marginBottom: 6 }}>
        <div style={{ fontSize: 12.1, color: "#222", lineHeight: 1.34, fontWeight: 650 }}>
          <strong style={{ color: C.navy }}>새로운 사회계약은 산업·도시·제도·인재를 하나의 경영전략으로 묶을 때 현실이 된다.</strong> 미·중 협력은 외교 구호보다 산업적 상호필요에서 출발하며, 한반도의 발언권은 그 상호필요를 안전하고 건강한 디지털 질서로 조직하는 능력에서 나온다.
        </div>
      </div>

      <div style={{ padding: "0 30px 7px", display: "flex", flexDirection: "column", flex: 1, gap: 4.6 }}>
        <div>
          <div style={h3s}>4.1 국제 정세와 디지털 전환이 바꾸는 경영의 전제</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5 }}>
            {premiseRows.map(([k, v], i) => (
              <div key={k} style={{ border: `1.5px solid ${i === 3 ? C.accent : C.navy}`, background: i === 3 ? "#fff8f4" : "#fff" }}>
                <div style={{ background: i === 3 ? C.accent : C.navy, color: "#fff", padding: "4.4px 7px", fontSize: 10.75, fontWeight: 900 }}>{k}</div>
                <div style={{ padding: "5.4px 6.5px", fontSize: 9.45, lineHeight: 1.16, color: "#333", fontWeight: i === 3 ? 700 : 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={h3s}>4.2 세계·국가·도시·가정의 경영전략</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "11%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "24%" }} />
              <col style={{ width: "27%" }} />
              <col style={{ width: "16%" }} />
            </colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>영역</th><th style={th}>핵심 질문</th><th style={th}>새 사회계약과의 연결</th><th style={th}>경영전략</th><th style={th}>1차 해결책</th></tr></thead>
            <tbody>
              {managementRows.map((r, i) => (
                <tr key={r.area} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...td, color: C.navy, fontWeight: 900, fontSize: 8.7 }}>{r.area}</td>
                  <td style={{ ...td, fontWeight: 650 }}>{r.question}</td>
                  <td style={{ ...td, color: C.navy, fontWeight: 650 }}>{r.connection}</td>
                  <td style={td}>{r.strategy}</td>
                  <td style={{ ...td, color: C.accent, fontWeight: 800, fontSize: 7.35, lineHeight: 1.02 }}>{r.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div style={{ ...h3s, marginBottom: 2 }}>4.3 통합 실행전략 — 권역별 세계 질서, 한반도 산업생태계, 7대분야 초일류, 선출직 인재</div>
          <div style={{ fontSize: 9.55, color: "#444", lineHeight: 1.15, marginBottom: 3, fontWeight: 650 }}>디지털 시대의 새 사회계약은 세계 각 권역의 역할을 다시 짜고, 한반도의 15개 미래산업을 권역별 생태계로 배치하며, 싱크탱크·대학·기업·미디어·정부·정당·군대의 초일류 역량과 선출직 인재로 실행된다.</div>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: 3 }}>
            <colgroup><col style={{ width: "10%" }} /><col style={{ width: "23%" }} /><col style={{ width: "35%" }} /><col style={{ width: "32%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>권역</th><th style={th}>현재 산업·권력 조건</th><th style={th}>새 사회계약을 위한 역할</th><th style={th}>협력 의제</th></tr></thead>
            <tbody>
              {regionRows.map(([region, condition, role, agenda], i) => (
                <tr key={region} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 900 }}>{region}</td>
                  <td style={tdTiny}>{condition}</td>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 650 }}>{role}</td>
                  <td style={{ ...tdTiny, color: C.accent, fontWeight: 800 }}>{agenda}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginBottom: 3 }}>
            <colgroup><col style={{ width: "17%" }} /><col style={{ width: "20%" }} /><col style={{ width: "29%" }} /><col style={{ width: "34%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>한반도 권역</th><th style={th}>거점</th><th style={th}>15개 미래산업군</th><th style={th}>생태계 전략</th></tr></thead>
            <tbody>
              {koreaRows.map(([zone, base, industries, strategy], i) => (
                <tr key={zone} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 900 }}>{zone}</td>
                  <td style={tdTiny}>{base}</td>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 650 }}>{industries}</td>
                  <td style={tdTiny}>{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup><col style={{ width: "12%" }} /><col style={{ width: "45%" }} /><col style={{ width: "43%" }} /></colgroup>
            <thead><tr style={{ background: C.navy, color: "#fff" }}><th style={th}>7대분야</th><th style={th}>초일류 전환 방향</th><th style={th}>필요한 선출직·운영 인재</th></tr></thead>
            <tbody>
              {institutionRows.map(([field, excellence, talent], i) => (
                <tr key={field} style={{ background: i % 2 ? C.bg : "#fff" }}>
                  <td style={{ ...tdTiny, color: C.navy, fontWeight: 900 }}>{field}</td>
                  <td style={tdTiny}>{excellence}</td>
                  <td style={{ ...tdTiny, color: C.accent, fontWeight: 800 }}>{talent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}

const th: React.CSSProperties = { padding: "2.8px 4px", textAlign: "left", fontSize: 8.2, borderRight: "1px solid rgba(255,255,255,0.18)" };
const td: React.CSSProperties = { padding: "3px 4px", borderBottom: "1px solid #eee", fontSize: 8.15, lineHeight: 1.1, color: "#333", verticalAlign: "top" };
const tdTiny: React.CSSProperties = { padding: "2.45px 3.8px", borderBottom: "1px solid #eee", fontSize: 7.45, lineHeight: 1.08, color: "#333", verticalAlign: "top" };
