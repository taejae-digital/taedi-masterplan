import { C } from "./constants";
import { Header, Footer, PageLead } from "./shared";
import { VERSION } from "./version";

const fearRows = [
  {
    actor: "미국",
    strength: "달러·동맹망·빅테크·군사력·글로벌 표준·AI 법제",
    shortFear: "중국 제조망·글로벌 사우스가 커져 공급망·동맹이 흔들리는 것",
    longFear: "달러·동맹 패권이 약화돼 세계 규칙 설정권을 잃는 것",
    deal: "미국식 AI 법제를 동맹 표준으로, 무규칙 AI 확산 차단",
  },
  {
    actor: "중국",
    strength: "국가 총력전·제조망·전력·로봇·EV·배터리·사우스 네트워크",
    shortFear: "미국 주도 기술·금융망이 시장 접근을 차단하는 것",
    longFear: "성장 둔화·청년 실업·격차가 체제 안정성을 흔드는 것",
    deal: "전면 배제가 아닌 검증된 산업·시장 접근 보장",
  },
  {
    actor: "한국",
    strength: "반도체·제조·콘텐츠·도시 실험장·한미동맹·중국 인접성",
    shortFear: "미·중 양쪽 종속이 커져 전략 선택지가 좁아지는 것",
    longFear: "저출산·수도권 집중·전환 실패로 미래 주도권을 잃는 것",
    deal: "미·중이 모두 필요로 하는 AI 사회계약 실험장 지위 확보",
  },
];

const governanceAxes = [
  {
    label: "學",
    title: "방향·지식·인재",
    actors: "싱크탱크 · 대학",
    body: "미래 의제·AI 거버넌스·산업/도시 전략을 설계하고 정체성·창업 역량을 기른다.",
    shift: "표준 인력 공급 → 정체성 기반 생산자를 기르는 지식 실험장",
  },
  {
    label: "産",
    title: "생산·시장·산업 벨트",
    actors: "기업 · 15대 산업",
    body: "AI·데이터·자본·시장·신뢰 인프라로 개인 생산자를 큰 시장에 연결한다.",
    shift: "대량생산 조직 → 개인 생산자의 시장 진입을 여는 산업 벨트 운영자",
  },
  {
    label: "市",
    title: "제도·정당성·안보",
    actors: "정부 · 정당 · 군대",
    body: "공공 데이터·조달·규제 샌드박스를 실행하고 입법·합의·안보를 보장한다.",
    shift: "국가 관리 → 생산 자유와 공동체 안전을 함께 보장하는 운영체계",
  },
  {
    label: "媒",
    title: "신뢰와 합의의 공론장",
    actors: "미디어",
    body: "정체성 생산·AI 위험·데이터 권리·산업 전환을 검증·토론할 의제로 만든다.",
    shift: "정보 매체 → 시산학을 사회적 합의로 바꾸는 공론장",
  },
];

const nationalBelts = [
  { name: "수도권 문화·금융·디지털미디어 벨트", industries: "디지털미디어 · 디지털금융 · 신가치엔터 · 융합디자인", body: "콘텐츠·금융·브랜드·디자인을 세계 시장으로 확장한다." },
  { name: "중부 첨단제조·바이오·우주 벨트", industries: "로봇 · 바이오 · 인공위성 · 미래교육", body: "대학·연구소·산단을 잇는 첨단 제조·바이오·우주 기반을 만든다." },
  { name: "동남권 해양·에너지·드론 벨트", industries: "드론 · 핵에너지 · 국토활용", body: "항만·조선·에너지 기반으로 물류·안보·에너지 산업을 고도화한다." },
  { name: "서남권 미래도시·공공재 실험 벨트", industries: "미래도시 · 미래주택 · 디지털공공재 · 건강/관광", body: "AI·농생명·문화자산을 잇는 미래생활권·공공서비스·관광을 실험한다." },
];

const sections = [
  {
    no: "4.2",
    area: "국가 경영",
    title: "정부 계획이 아니라 시산학과 미디어가 함께 움직이는 경영 생태계다.",
    lead: "디지털 시대의 국가 경영은 정부가 위에서 표준화하는 방식으로 작동할 수 없다. 강화된 개인의 정체성·AI 생산능력이 공동체 성과로 전환되도록 市·産·學과 미디어 공론장을 다시 설계한다.",
    bullets: [],
    effect: "",
  },
  {
    no: "4.3",
    area: "도시 경영",
    title: "디지털 시대에는 소도시-서버시티 벨트가 필요하다.",
    lead: "디지털 시대에는 생산·교육·돌봄·창업·행정이 모두 데이터와 AI 위에서 작동한다. 큰 도시 하나가 모든 기능을 빨아들이는 구조로는 다양한 정체성과 작은 시장을 살릴 수 없다. 3~5만 명 규모의 소도시를 실행 단위로 두고, 중심 서버시티가 데이터·AI·행정·산업 API로 연결해야 한다.",
    bullets: [
      "왜 소도시인가: 생활·교육·돌봄·창업·규제 실험이 보이는 인간 규모에서 정체성 기반 생산자를 길러낼 수 있음",
      "왜 서버시티인가: 각 소도시가 따로 흩어지지 않도록 데이터·AI·행정·산업 API와 시장 접근을 공유",
      "왜 벨트인가: 여러 소도시와 서버시티가 같은 산업 방향·교육 파이프라인·규제 실험을 공유할 때 하나의 산업·생활권이 됨",
      "왜 전국 분포인가: 디지털 시대 다양성은 서울 집중이 아니라 전국의 다른 정체성·산업·생활 모델이 동시에 작동할 때 생산성이 됨",
    ],
    effect: "도시 경영은 소도시 몇 개를 흩뿌리는 정책이 아니다. 3~5만 소도시와 중심 서버시티를 연결해 산업·생활 벨트를 만들고, 그 벨트들이 전국에 분포하면서 디지털 시대의 다양성과 생산성을 만든다.",
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
      "가족·관계 기반: 관심·재능·돌봄·정서적 안전을 축적해 개인이 도시 생태계로 나갈 기반을 형성",
    ],
    effect: "가정 경영은 보호 단위가 아니라 개인이 도시 생태계 안에서 탁월한 생산자로 성장하는 시스템이다.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
      {items.map((item) => <li key={item} style={{ margin: 0, paddingLeft: 1 }}>{item}</li>)}
    </ul>
  );
}

function StrategyTitle({ no, area, title, compact = false }: { no: string; area: string; title: string; compact?: boolean }) {
  return (
    <div style={{ padding: compact ? "9px 14px 7px" : "10px 16px 8px", borderBottom: `2px solid ${C.navy}`, display: "flex", alignItems: "baseline", gap: 11, color: C.navy }}>
      <div style={{ fontSize: compact ? 16 : 17, fontWeight: 900, color: C.accent }}>{no}</div>
      <div style={{ fontSize: compact ? 16 : 17, fontWeight: 800 }}>{area}</div>
      <div style={{ fontSize: compact ? 12.5 : 13.2, fontWeight: 500, color: C.muted }}>{title}</div>
    </div>
  );
}

function WorldCard() {
  return (
    <section style={{ background: "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 9, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <StrategyTitle no="4.1" area="세계 경영" title="미·중 패권경쟁의 레드라인과 교환물을 설계한다." />
      <div style={{ padding: "8px 14px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ color: C.navy, fontSize: 11.8, lineHeight: 1.32, fontWeight: 700 }}>
          디지털 시대의 세계 경영은 미·중 패권경쟁을 없애는 것이 아니라, 경쟁이 WMD·자율살상무기·군사 오판·시장 분열로 번지지 않도록 레드라인과 교환물을 설계하는 것이다. 한국은 선택당하는 국가가 아니라, 두 국가가 모두 필요로 하는 AI 사회계약 실험장이 되어야 한다.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {fearRows.map((row) => (
            <div key={row.actor} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: C.cardBg, display: "flex", flexDirection: "column" }}>
              <div style={{ background: C.cardHead, color: C.navy, fontSize: 12.8, fontWeight: 800, padding: "5px 11px", borderBottom: `1px solid ${C.cardBorder}` }}>{row.actor}</div>
              <div style={{ padding: "7px 10px", fontSize: 10.2, lineHeight: 1.28, color: C.body, display: "flex", flexDirection: "column", gap: 3 }}>
                <div><b style={{ color: C.navy }}>보유 카드</b> — {row.strength}</div>
                <div><b style={{ color: C.accent }}>잃기 싫은 것</b> — {row.shortFear}</div>
                <div><b style={{ color: C.accent }}>피하고 싶은 미래</b> — {row.longFear}</div>
                <div><b style={{ color: C.navy }}>협상 카드</b> — {row.deal}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "17% 1fr", gap: 10, alignItems: "stretch" }}>
          <div style={{ background: C.navy, color: "#fff", padding: "11px 13px", borderRadius: 7, fontSize: 13, lineHeight: 1.4, fontWeight: 800, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            협력적 딜<br /><span style={{ fontSize: 11.5, fontWeight: 500, opacity: 0.85 }}>안전한 경합·상호이익 협정</span>
          </div>
          <div style={{ background: C.leadBlue, borderLeft: `3px solid ${C.accent}`, borderRadius: 7, padding: "7px 12px", fontSize: 10.2, lineHeight: 1.32, color: C.body, fontWeight: 500 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 14px" }}>
              <div><b style={{ color: C.navy }}>목적</b> — AI 패권경쟁을 전쟁·봉쇄로 방치하지 않고, 다양성을 수용하는 글로벌 거버넌스로 전환한다.</div>
              <div><b style={{ color: C.navy }}>레드라인</b> — 핵·생화학·대규모 사이버에 AI 직접 연결, 인간 승인 없는 자율살상무기를 금지한다.</div>
              <div><b style={{ color: C.navy }}>경제 딜</b> — 미국은 무규칙 AI를 막을 신뢰 기준을, 중국은 전면 배제 대신 검증된 시장 접근권을 얻는다.</div>
              <div><b style={{ color: C.navy }}>다자 레버리지</b> — 유럽은 권리·감사 기준, 일본은 제조·안보 표준, 동남아·아프리카는 수요시장으로 활용한다.</div>
              <div><b style={{ color: C.navy }}>실행</b> — 공동위·기술 감사단·군사 AI 핫라인·산업 테스트베드로 안보·경제 규칙을 함께 검증한다.</div>
              <div><b style={{ color: C.navy }}>법제 경쟁</b> — 미국(연방 집중), EU(권리 기반 AI Act), 중국(국가 주도 수출) 사이에서, 한국은 정체성 전환 여건을 보장하는 독자 모델로 포지셔닝한다.</div>
              <div><b style={{ color: C.accent }}>교환물</b> — 미국은 신뢰 기준을, 중국은 검증된 시장 접근권을, 한국은 글로벌 거버넌스 실험장·규칙 설계자 지위를 얻는다.</div>
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
      <section style={{ background: "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 9, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <StrategyTitle no={section.no} area={section.area} title={section.title} />
        <div style={{ padding: "8px 14px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ color: C.navy, fontWeight: 700, fontSize: 11.6, lineHeight: 1.32 }}>{section.lead}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 9 }}>
            {governanceAxes.map((axis) => (
              <div key={axis.label} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: C.cardBg, display: "grid", gridTemplateColumns: "36px 1fr", minHeight: 80 }}>
                <div style={{ background: C.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, fontWeight: 900 }}>{axis.label}</div>
                <div style={{ padding: "6px 8px", color: C.body, lineHeight: 1.26 }}>
                  <div style={{ color: C.navy, fontWeight: 800, fontSize: 11.6 }}>{axis.title}</div>
                  <div style={{ color: C.accent, fontWeight: 700, fontSize: 9.9, margin: "2px 0 3px" }}>{axis.actors}</div>
                  <div style={{ fontSize: 9.8, fontWeight: 500 }}>{axis.body}</div>
                  <div style={{ marginTop: 3, fontSize: 9.6, fontWeight: 700, color: C.navy }}>{axis.shift}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: C.navy, fontWeight: 800, fontSize: 12.2, lineHeight: 1.2, marginTop: 2 }}>
            디지털 시대 산업의 역할과 배치
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 7 }}>
            {nationalBelts.map((belt) => (
              <div key={belt.name} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 7, background: "#fff", padding: "6px 9px", minHeight: 54 }}>
                <div style={{ color: C.navy, fontSize: 11.3, fontWeight: 800, lineHeight: 1.18, marginBottom: 4 }}>{belt.name}</div>
                <div style={{ color: C.accent, fontSize: 10, fontWeight: 700, lineHeight: 1.22, marginBottom: 4 }}>{belt.industries}</div>
                <div style={{ color: C.body, fontSize: 9.8, fontWeight: 500, lineHeight: 1.3 }}>{belt.body}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.accentSoft, borderLeft: `3px solid ${C.accent}`, borderRadius: 6, padding: "7px 12px", color: C.ink, fontSize: 11, fontWeight: 600, lineHeight: 1.34 }}>
            學은 방향과 역량을, 産은 산업 벨트와 시장 연결을, 市는 제도와 안전을, 미디어는 사회적 신뢰와 합의를 맡는다. 이 구조가 작동할 때 강화된 개인은 고립된 생산자가 아니라 공동체의 새로운 성장동력이 된다.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "#fff", border: `1px solid ${C.cardBorder}`, borderRadius: 9, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <StrategyTitle no={section.no} area={section.area} title={section.title} compact={compact} />
      <div style={{ padding: compact ? "7px 12px 8px" : "12px 16px 11px", display: "grid", gridTemplateColumns: compact ? "1fr" : "30% 51% 19%", gap: compact ? 5 : 14 }}>
        <div style={{ color: C.navy, fontWeight: 700, fontSize: compact ? 11.4 : 12.6, lineHeight: 1.3 }}>{section.lead}</div>
        <div style={{ color: C.body, fontWeight: 500, fontSize: compact ? 10.4 : 11.8, lineHeight: 1.32 }}><BulletList items={section.bullets as string[]} /></div>
        <div style={{ background: C.accentSoft, borderLeft: compact ? "none" : `3px solid ${C.accent}`, borderTop: compact ? `3px solid ${C.accent}` : "none", borderRadius: 6, padding: compact ? "8px 11px" : "10px 12px", color: C.navy, fontWeight: 700, fontSize: compact ? 11 : 11.8, lineHeight: 1.36 }}>{section.effect}</div>
      </div>
    </section>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" chapterNo="04" version={VERSION} />
      <PageLead
        thesis="디지털 시대에는 강화된 개인의 정체성이 공동체의 생산성으로 이어지도록 세계·국가·도시·가정의 운영 조건을 다시 설계해야 한다."
        summary="새 사회계약은 선언만으로 실현되지 않는다. 세계는 안전한 경합의 규칙을 만들고, 국가는 學·産·市·媒와 산업벨트를 조직하며, 도시는 소도시-서버시티 벨트에서 생활권 실증을 수행하고, 가정은 개인 성장의 기반을 만든다."
      />
      <div style={{ padding: "6px 40px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
        <WorldCard />
        <StrategyCard section={sections[0]} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start" }}>
          <StrategyCard section={sections[1]} compact />
          <StrategyCard section={sections[2]} compact />
        </div>
      </div>
    </div>
  );
}
