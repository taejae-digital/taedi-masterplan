import { C } from "../masterplan-v705/constants";
import { Header, Footer } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const fearRows = [
  {
    actor: "미국",
    strength: "달러 금융·동맹망·에너지·대학·빅테크·군사력·글로벌 표준 설정 능력",
    shortFear: "중국 제조망과 글로벌 사우스 영향력이 커져 공급망·시장·동맹 결속이 흔들리는 것",
    longFear: "미국식 자유민주 질서와 달러·동맹 중심 패권이 약화되어 세계 규칙 설정권을 잃는 것",
    deal: "민주주의형 개방질서와 전략 공급망을 지키면서 중국과의 관리 가능한 경쟁 규칙 확보",
  },
  {
    actor: "중국",
    strength: "국가 총력전·제조망·인프라 건설·전력·로봇·EV·배터리·글로벌 사우스 네트워크",
    shortFear: "미국 주도 기술·금융·동맹망이 중국의 시장 접근과 공급망 확장을 차단하는 것",
    longFear: "성장 둔화·청년 실업·부동산·지역 격차가 체제 정당성과 사회 안정성을 약화시키는 것",
    deal: "무조건 배제가 아니라 검증 가능한 참여 경로와 산업·시장 접근을 보장받는 안정적 경쟁",
  },
  {
    actor: "한국",
    strength: "반도체·제조·조선·배터리·콘텐츠·도시 실험장·한미동맹·중국 인접성·빠른 사회 적용력",
    shortFear: "미국에는 안보·기술 종속, 중국에는 시장·공급망 의존이 커져 전략 선택지가 좁아지는 것",
    longFear: "저출산·수도권 집중·산업 전환 실패로 국가 활력과 한반도 미래 주도권을 잃는 것",
    deal: "미·중 모두가 필요로 하는 안전한 산업·도시·사회계약 실험장으로 표준 권력 확보",
  },
];

const governanceAxes = [
  {
    label: "學",
    title: "방향·지식·인재",
    actors: "싱크탱크 · 대학",
    body: "미래 의제·사회계약 원칙·AI 거버넌스·산업/도시 전략을 설계하고, 정체성 발견·문제 해결·AI 활용·창업/연구 역량을 기른다.",
    shift: "표준 인력 공급 → 정체성 기반 생산자를 기르는 지식·전략 실험장",
  },
  {
    label: "産",
    title: "생산·시장·산업 벨트",
    actors: "기업 · 15대 산업",
    body: "AI·데이터·컴퓨팅·자본·시장 접근·브랜드·신뢰 인프라를 제공해 개인 생산자와 소규모 팀을 큰 시장에 연결한다.",
    shift: "대량생산 조직 → 개인 생산자의 시장 진입과 협업을 가능하게 하는 산업 벨트 운영자",
  },
  {
    label: "市",
    title: "제도·정당성·안보",
    actors: "정부 · 정당 · 군대",
    body: "공공 데이터·조달·규제 샌드박스·디지털 인프라를 실행하고, 입법·정치적 합의·AI/사이버/드론/우주 안보를 보장한다.",
    shift: "표준화된 국가 관리 → 개인의 생산 자유와 공동체 안전을 함께 보장하는 공적 운영체계",
  },
  {
    label: "媒",
    title: "신뢰와 합의의 공론장",
    actors: "미디어",
    body: "정체성 기반 생산, AI 위험, 데이터 권리, 산업 전환, 도시 실험을 검증·설명·토론 가능한 사회 의제로 만든다.",
    shift: "정보 전달 매체 → 시산학 상호작용을 사회적 합의로 바꾸는 공론장",
  },
];

const nationalBelts = [
  { name: "수도권 문화·금융·디지털미디어 벨트", industries: "디지털미디어 · 디지털금융 · 신가치엔터 · 융합디자인", body: "글로벌 콘텐츠, 금융 플랫폼, 브랜드, 디자인, 미디어 서사를 세계 시장으로 확장한다." },
  { name: "중부 첨단제조·바이오·우주 벨트", industries: "로봇 · 바이오 · 인공위성 · 미래교육", body: "대학·연구소·산단을 연결해 AI 시대의 첨단 제조, 바이오, 우주, 인재 기반을 만든다." },
  { name: "동남권 해양·에너지·드론 벨트", industries: "드론 · 핵에너지 · 국토활용", body: "항만·조선·해양·에너지 인프라를 바탕으로 물류, 안보, 해양 감시, 에너지 산업을 고도화한다." },
  { name: "서남권 미래도시·공공재 실험 벨트", industries: "미래도시 · 미래주택 · 디지털공공재 · 건강/관광", body: "새만금·광주 AI·전남 해안·전북 농생명·남도 문화자산을 연결해 저밀도 미래생활권, 디지털 공공서비스, 건강·관광 산업을 실험한다." },
];

const sections = [
  {
    no: "4.2",
    area: "국가 경영",
    title: "정부 계획이 아니라 시산학과 미디어가 함께 움직이는 경영 생태계다.",
    lead: "디지털 시대의 국가 경영은 정부가 산업과 국민을 위에서 표준화하는 방식으로 작동할 수 없다. 강화된 개인의 정체성·전문성·AI 생산능력이 공동체 성과로 전환되도록 市·産·學과 미디어 공론장을 다시 설계해야 한다.",
    bullets: [],
    effect: "",
  },
  {
    no: "4.3",
    area: "도시 경영",
    title: "도시별 규제·산업 정체성을 세워 경쟁하게 한다.",
    lead: "15대 미래산업은 국가가 조율하지만 실행은 도시에서 일어난다. 도시는 같은 규칙을 복제하는 행정 단위가 아니라 산업·규제·세금·교육·문화가 다른 정체성 생태계이자 시민강화 AI 표준의 생활권 실험장이어야 한다.",
    bullets: [
      "규제 실험도시: 자율주행·드론·디지털공공재처럼 빠른 실증이 필요한 산업은 규제 샌드박스와 공공조달을 결합",
      "생산도시: 항만·고속도로·산단을 기반으로 제조·로봇·에너지·바이오 생산을 담당",
      "인재도시: 대학·연구기관·공항 접근성을 기반으로 산업학교·연구·창업·국제협력을 담당",
      "브랜드도시: 지역 특산물·관광·디자인·콘텐츠를 건강관광·신가치엔터·미래교육과 연결",
    ],
    effect: "도시 경영은 서울 집중을 분산시키는 방식이 아니라, 각 도시가 자기 산업 정체성으로 사람과 기업을 끌어들이는 경쟁 구조다.",
  },
  {
    no: "4.4",
    area: "가정 경영",
    title: "도시 안에서 탁월한 정체성이 발휘되는 시스템을 만든다.",
    lead: "가정은 개인을 도시 생태계와 연결하는 시작점이다. 정체성은 생활 기록, 학습, 관계, 실험, 인정, 그리고 건강을 지켜주는 스마트 홈 속에서 발견·훈련·전환된다.",
    bullets: [
      "개인 성장 기록: 학습·건강·관계·프로젝트·기여 데이터를 본인이 통제하며 축적",
      "건강 스마트홈: 수면·식사·운동·돌봄·위험 신호를 감지해 건강을 지키고 생활 리듬을 지원",
      "정체성 코치: 잘하는 것·좋아하는 것·사회가 원하는 것의 교집합을 탐색하고 도시 일감과 연결",
      "도시 기회 연결: 산업학교·멘토·실증 프로젝트·지역기업·공공조달 과제에 참여",
      "권리 UI: AI 추천을 설명·거부·조정하고, 개인의 고유한 기여와 전환 경로를 지원",
    ],
    effect: "가정 경영은 보호 단위가 아니라 개인이 도시 생태계 안에서 탁월한 생산자로 성장하는 시스템이다.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 15, display: "flex", flexDirection: "column", gap: 4 }}>
      {items.map((item) => <li key={item} style={{ margin: 0, paddingLeft: 1 }}>{item}</li>)}
    </ul>
  );
}

function WorldCard() {
  return (
    <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: 264 }}>
      <div style={{ background: C.navy, color: "#fff", padding: "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: 16, fontWeight: 900 }}>4.1</div>
        <div style={{ fontSize: 16, fontWeight: 850 }}>세계 경영</div>
        <div style={{ fontSize: 12.7, fontWeight: 560, opacity: 0.88 }}>미·중 패권경쟁의 레드라인과 교환물을 설계한다.</div>
      </div>
      <div style={{ padding: "7px 12px 8px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        <div style={{ color: C.navy, fontSize: 11.5, lineHeight: 1.28, fontWeight: 760 }}>
          디지털 시대의 세계 경영은 미·중 패권경쟁을 없애는 것이 아니라, 경쟁이 WMD 확산·자율살상무기·군사 오판·시장 분열로 번지지 않도록 레드라인과 교환물을 설계하는 것이다. 한국은 미·중 사이에서 선택당하는 국가가 아니라, 두 국가가 모두 필요로 하는 AI 사회계약 실험장이 되어야 한다.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9 }}>
          {fearRows.map((row) => (
            <div key={row.actor} style={{ border: "1px solid #d6deea", background: "#f8fafc", display: "flex", flexDirection: "column" }}>
              <div style={{ background: "#eef3fb", color: C.navy, fontSize: 12.5, fontWeight: 900, padding: "5px 8px", borderBottom: "1px solid #d6deea" }}>{row.actor}</div>
              <div style={{ padding: "6px 8px", fontSize: 10.45, lineHeight: 1.22, color: "#333", display: "flex", flexDirection: "column", gap: 4 }}>
                <div><b style={{ color: C.navy }}>보유 카드</b> — {row.strength}</div>
                <div><b style={{ color: C.accent }}>잃기 싫은 것</b> — {row.shortFear}</div>
                <div><b style={{ color: C.accent }}>피하고 싶은 미래</b> — {row.longFear}</div>
                <div><b style={{ color: C.navy }}>협상 카드</b> — {row.deal}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "17% 1fr", gap: 10, alignItems: "stretch" }}>
          <div style={{ background: C.navy, color: "#fff", padding: "8px 10px", fontSize: 12.2, lineHeight: 1.28, fontWeight: 850 }}>
            협력적 딜<br />안전한 경합·상호이익 협정
          </div>
          <div style={{ background: "#f7f9fc", borderLeft: `3px solid ${C.navy}`, padding: "7px 10px", fontSize: 10.25, lineHeight: 1.2, color: "#333", fontWeight: 560 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
              <div><b style={{ color: C.navy }}>목적</b> — AI 패권경쟁을 전쟁·봉쇄·사회 불안정으로 방치하지 않고, 디지털 시대 다양성을 수용하는 글로벌 거버넌스로 전환한다.</div>
              <div><b style={{ color: C.navy }}>레드라인</b> — 핵·생화학·대규모 사이버 공격에 AI를 직접 연결하는 행위와 인간 승인 없는 자율살상무기는 금지한다.</div>
              <div><b style={{ color: C.navy }}>경제 딜</b> — 미국은 중국식 AI가 무규칙 글로벌 기본값이 되는 것을 막을 신뢰 기준을 얻고, 중국은 감시 AI 프레임에 따른 전면 배제 대신 검증된 시장 접근권을 얻는다.</div>
              <div><b style={{ color: C.navy }}>다자 레버리지</b> — 유럽은 권리·감사 기준, 일본은 제조·안보 표준, 동남아·아프리카는 수요시장, 러시아는 협정 부재 시 커지는 WMD·사이버 위험 변수로 활용한다.</div>
              <div><b style={{ color: C.navy }}>실행</b> — 공동위원회·기술 감사단·군사 AI 핫라인·사고 공동조사·산업 테스트베드·실험 도시를 통해 안보와 경제 규칙을 함께 검증한다.</div>
              <div><b style={{ color: C.accent }}>교환물</b> — 미국은 신뢰 기준을, 중국은 검증된 시장 접근권을, 한국은 디지털 시대 다양성에 맞는 글로벌 거버넌스 실험장과 규칙 설계자 지위를 얻는다.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategyCard({ section, compact = false }: { section: typeof sections[number]; compact?: boolean }) {
  if (section.no === "4.2") {
    return (
      <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: 244 }}>
        <div style={{ background: C.navy, color: "#fff", padding: "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
          <div style={{ fontSize: 16, fontWeight: 900 }}>{section.no}</div>
          <div style={{ fontSize: 16, fontWeight: 850 }}>{section.area}</div>
          <div style={{ fontSize: 12.5, fontWeight: 560, opacity: 0.86 }}>{section.title}</div>
        </div>
        <div style={{ padding: "8px 14px 9px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
          <div style={{ color: C.navy, fontWeight: 760, fontSize: 11.35, lineHeight: 1.25 }}>{section.lead}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {governanceAxes.map((axis) => (
              <div key={axis.label} style={{ border: "1px solid #d6deea", background: "#f8fafc", display: "grid", gridTemplateColumns: "32px 1fr", minHeight: 92 }}>
                <div style={{ background: C.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 900 }}>{axis.label}</div>
                <div style={{ padding: "5px 7px", color: "#333", lineHeight: 1.15 }}>
                  <div style={{ color: C.navy, fontWeight: 900, fontSize: 11.2 }}>{axis.title}</div>
                  <div style={{ color: C.accent, fontWeight: 800, fontSize: 9.8, margin: "1px 0 3px" }}>{axis.actors}</div>
                  <div style={{ fontSize: 9.35, fontWeight: 560 }}>{axis.body}</div>
                  <div style={{ marginTop: 3, fontSize: 9.1, fontWeight: 760, color: C.navy }}>{axis.shift}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: C.navy, fontWeight: 850, fontSize: 10.7, lineHeight: 1.15 }}>
            디지털 시대 산업의 역할과 배치
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {nationalBelts.map((belt) => (
              <div key={belt.name} style={{ border: "1px solid #d6deea", background: "#fff", padding: "5px 6px", minHeight: 66 }}>
                <div style={{ color: C.navy, fontSize: 10.2, fontWeight: 900, lineHeight: 1.1, marginBottom: 3 }}>{belt.name}</div>
                <div style={{ color: C.accent, fontSize: 9.3, fontWeight: 850, lineHeight: 1.15, marginBottom: 3 }}>{belt.industries}</div>
                <div style={{ color: "#333", fontSize: 8.95, fontWeight: 540, lineHeight: 1.16 }}>{belt.body}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#eef3fb", borderLeft: `3px solid ${C.navy}`, padding: "5px 8px", color: "#24364b", fontSize: 10.35, fontWeight: 760, lineHeight: 1.2 }}>
            學은 개인의 방향과 역량을 만들고, 産은 이를 산업 벨트와 시장으로 연결하며, 市는 제도와 안전을 보장하고, 미디어는 사회적 신뢰와 합의를 형성한다. 이 구조가 작동할 때 강화된 개인은 고립된 생산자가 아니라 공동체의 새로운 성장동력이 된다.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: compact ? 208 : 202 }}>
      <div style={{ background: C.navy, color: "#fff", padding: compact ? "8px 12px" : "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: compact ? 15 : 16, fontWeight: 900 }}>{section.no}</div>
        <div style={{ fontSize: compact ? 15 : 16, fontWeight: 850 }}>{section.area}</div>
        <div style={{ fontSize: compact ? 12 : 12.6, fontWeight: 560, opacity: 0.86 }}>{section.title}</div>
      </div>
      <div style={{ padding: compact ? "9px 12px 8px" : "10px 14px 8px", display: "grid", gridTemplateColumns: compact ? "1fr" : "30% 51% 19%", gap: compact ? 7 : 12, flex: 1 }}>
        <div style={{ color: C.navy, fontWeight: 760, fontSize: compact ? 11.25 : 11.6, lineHeight: 1.28 }}>{section.lead}</div>
        <div style={{ color: "#333", fontWeight: 520, fontSize: compact ? 10.75 : 10.9, lineHeight: 1.25 }}><BulletList items={section.bullets as string[]} /></div>
        <div style={{ background: "#f7f9fc", borderLeft: compact ? "none" : `3px solid ${C.navy}`, borderTop: compact ? `3px solid ${C.navy}` : "none", padding: compact ? "7px 9px" : "8px 10px", color: C.navy, fontWeight: 850, fontSize: compact ? 10.8 : 11.0, lineHeight: 1.24 }}>{section.effect}</div>
      </div>
    </section>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />
      <div style={{ padding: "8px 36px 7px", borderBottom: `3px solid ${C.navy}`, marginBottom: 7 }}>
        <div style={{ fontSize: 19.1, color: C.navy, lineHeight: 1.22, fontWeight: 850, letterSpacing: -0.4 }}>
          한국은 미·중이 거부하기 어려운 딜을 만들고, 7대 분야·15대 산업벨트·도시 경쟁으로 사회계약을 실증한다.
        </div>
        <div style={{ marginTop: 6, fontSize: 13.0, color: "#333", lineHeight: 1.28, fontWeight: 560 }}>
          세계 경영은 미국·중국·한국의 강점과 공포를 조정하는 딜, 국가 경영은 전국 벨트 생태계, 도시 경영은 생활권 실증, 가정 경영은 개인 성장의 최소 단위다.
        </div>
      </div>
      <div style={{ padding: "0 36px 8px", display: "flex", flexDirection: "column", flex: 1, gap: 7 }}>
        <WorldCard />
        <StrategyCard section={sections[0]} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <StrategyCard section={sections[1]} compact />
          <StrategyCard section={sections[2]} compact />
        </div>
      </div>
      <Footer version={VERSION} />
    </div>
  );
}
