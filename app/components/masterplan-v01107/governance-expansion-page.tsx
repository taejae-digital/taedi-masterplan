import { C } from "./constants";
import { Footer, Header, PageLead } from "./shared";
import { VERSION } from "./version";

const governanceAxes = [
  { label: "전략", title: "방향과 인재", actors: "싱크탱크 · 대학", body: "미래 의제·AI 거버넌스·산업/도시 전략의 방향을 만들고, 실행할 인재와 정체성·창업 역량을 기른다.", shift: "표준 인력 공급 → 방향 설계·정체성 기반 생산자 양성" },
  { label: "산업", title: "생산과 시장", actors: "기업 · 핵심 산업", body: "기술·아이디어를 제품·서비스로 전환하고, AI·데이터·자본·신뢰 인프라로 개인 생산자를 시장에 연결한다.", shift: "대량생산 조직 → 개인 생산자의 시장 진입을 여는 운영자" },
  { label: "정치", title: "제도·합의·안보", actors: "정부 · 정당 · 군대", body: "예산·제도·거버넌스를 설계하고, 합의를 입법화하며, 외부 위협에서 전환 질서와 공동체 안전을 지킨다.", shift: "국가 관리 → 생산 자유와 공동체 안전을 함께 보장" },
  { label: "미디어", title: "신뢰와 합의의 공론장", actors: "미디어", body: "정체성 생산·AI 위험·데이터 권리·산업 전환을 사회적 서사이자 검증·토론 의제로 만든다.", shift: "정보 매체 → 전략·산업·정치를 사회적 합의로 전환" },
];

const nationalBelts = [
  { name: "수도권·강원 문화·금융·디지털미디어 벨트", industries: "디지털미디어 · 디지털금융 · 신가치엔터 · 융합디자인", body: "콘텐츠·금융·브랜드·디자인을 세계 시장으로 확장한다." },
  { name: "중부 첨단제조·바이오·우주 벨트", industries: "로봇 · 바이오 · 인공위성 · 미래교육", body: "대학·연구소·산단을 잇는 첨단 제조·바이오·우주 기반을 만든다." },
  { name: "동남권 해양·에너지·드론 벨트", industries: "드론 · 핵에너지 · 국토활용", body: "항만·조선·에너지 기반으로 물류·안보·에너지 산업을 고도화한다." },
  { name: "서남권 미래도시·공공재 실험 벨트", industries: "미래도시 · 미래주택 · 디지털공공재 · 건강/관광", body: "AI·농생명·문화자산을 잇는 미래생활권·공공서비스·관광을 실험한다." },
];

const small = [
  {
    no: "4.3", area: "디지털 시대의 도시 경영",
    title: "시산학 생태계를 통해 정체성 기반 생산이 일어나는 곳.",
    lead: "도시는 시장·산업·학문(市·産·學)을 한 권역에 묶는 시산학 생태계의 실현장이다. 강소도시를 실행 단위로 두고, 중심 서버시티가 데이터·AI·행정·산업 API로 연결한다.",
    bullets: [
      "강소도시: 보이는 인간 규모에서 정체성 기반 생산자를 길러냄",
      "서버시티: 데이터·AI·행정·산업 API와 시장 접근을 공유",
      "벨트: 같은 산업 방향·교육·규제 실험을 공유해 하나의 생활권",
      "전국 분포: 다른 정체성·산업·생활 모델이 동시에 작동",
    ],
    effect: "강소도시와 서버시티를 연결한 산업·생활 벨트가 전국에 분포하며 디지털 시대의 다양성과 생산성을 만든다. 에드워드 글레이저(하버드대)는 도시는 사람을 연결해 학습과 혁신을 증폭하는 장치라고 보고, 리처드 플로리다(토론토대)는 인재와 창의 산업이 모이는 도시가 성장의 엔진이라고 본다.",
  },
  {
    no: "4.4", area: "디지털 시대의 가정 경영",
    title: "개인의 정체성을 발견해 도시 생태계로 잇는 시작점.",
    lead: "가정은 개인을 도시 생태계와 연결하는 시작점이다. 정체성은 스마트 홈 속에서 발견·훈련·전환된다.",
    bullets: [
      "개인 성장 기록: 학습·건강·관계·기여 데이터를 본인이 통제",
      "건강 스마트홈: 수면·식사·운동·돌봄·위험 신호를 감지·지원",
      "정체성 코치: 잘하는 것·좋아하는 것·필요의 교집합을 일감과 연결",
      "도시 기회 연결: 산업학교·멘토·실증·지역기업·공공조달 참여",
    ],
    effect: "가정 경영은 보호 단위가 아니라 개인이 도시 생태계에서 고유한 기여를 만드는 생산자로 성장하는 시스템이다. 앨리슨 고프닉(UC버클리)은 아이들이 지시된 수행보다 탐색과 놀이 속에서 세계 모델을 만들며 성장한다고 본다.",
  },
];

/* 공통 섹션 헤드 */
function SecHead({ no, area, desc }: { no: string; area: string; desc: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginBottom: 8, paddingBottom: 6, borderBottom: `2px solid ${C.ink}`, color: C.ink }}>
      <span style={{ fontSize: 16, fontWeight: 900 }}>{no}</span>
      <span style={{ fontSize: 16, fontWeight: 800 }}>{area}</span>
      <span style={{ fontSize: 11.8, fontWeight: 500, color: C.muted }}>{desc}</span>
    </div>
  );
}

/* 4.1 세계 경영 — 지속불가능의 지구 · 미중 갈등과 한반도 · 협력공존 대전환 */
function WorldSection() {
  const worldThemes = [
    {
      tag: "지속불가능의 지구",
      title: "현 체제로는 풀리지 않는 전 지구적 위기",
      body: "지구온난화·기후위기, 핵·테러 위협과 통제력을 잃은 기술, 빈곤·양극화가 동시에 심화된다. 인류는 공영은 고사하고 지속불가능의 위기 아래 당장의 생존조차 불투명하다. 해결은 국가 간 협력을 통한 전 지구적 대응뿐인데, 현재의 국가들은 자국 이기주의 속에서 패권·이권 경쟁만 하고 미·중 두 초강대국조차 책임을 다하지 못한 채 갈등만 키운다.",
      accent: C.ink,
    },
    {
      tag: "미·중 갈등과 한반도",
      title: "갈등의 한가운데, 동시에 반전의 열쇠",
      body: "급부상하는 중국과 이를 견제하는 미국의 갈등 한가운데에 한반도가 있다. 지정학적·역사적 특수성으로 과거 미·중 대리전의 무대였고, 지금도 핵전쟁 위험이 가장 높은 곳이다. 바로 그 특수성이 한반도를 미·중 협력을 이끌어낼 반전의 지렛대로 만든다.",
      accent: C.ink,
    },
    {
      tag: "협력공존으로의 대전환",
      title: "한반도가 수행해야 할 세계경영 미션",
      body: "지속불가능의 극복과 한반도의 생존을 위해, 경쟁보다 협력이 우선하는 세계 질서를 창출한다. 기존의 양극·다극 체제를 넘어 협력공존하는 글로벌 거버넌스를 수립하는 것 — 이것이 한반도가 생존을 위해 반드시 성공시켜야 할 미션이다.",
      accent: C.teal,
    },
  ];

  return (
    <section>
      <SecHead no="4.1" area="디지털 시대의 세계 경영" desc="지속불가능의 지구, 미·중 갈등의 한가운데 한반도, 협력공존 세계 질서로의 대전환을 설계한다." />
      <div style={{ color: C.body, fontSize: 12.5, lineHeight: 1.4, fontWeight: 600, marginBottom: 10 }}>
        세계경영의 핵심은 각국의 역할을 나열하는 것이 아니라, <span style={{ color: C.ink, fontWeight: 800 }}>급부상하는 중국과 견제하는 미국의 갈등을 협력공존으로 대전환</span>시켜 지속불가능에 놓인 지구를 구하는 것이다. 한반도는 그 대전환에 공헌하며 스스로의 생존을 확보한다. <span style={{ color: C.muted, fontWeight: 600 }}>미·중·한이 무엇을 두려워하고 무엇을 원하는지의 카드와 구체적 딜 설계는 「세계 경영 마스터플랜」에서 별도로 다룬다.</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {worldThemes.map((w, i) => (
          <div key={w.tag} style={{ position: "relative", border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", borderTop: `3px solid ${w.accent}` }}>
            <div style={{ position: "absolute", right: 6, top: -22, fontSize: 96, lineHeight: 1, fontWeight: 950, color: w.accent === C.teal ? "#d4ece8" : "#e3e5e8", opacity: 0.4, zIndex: 0 }}>{i + 1}</div>
            <div style={{ position: "relative", zIndex: 1, padding: "9px 12px" }}>
              <div style={{ color: w.accent, fontSize: 9.6, fontWeight: 900, letterSpacing: 0.2, marginBottom: 2 }}>{w.tag}</div>
              <div style={{ color: C.ink, fontSize: 12.6, fontWeight: 900, lineHeight: 1.22, marginBottom: 5 }}>{w.title}</div>
              <div style={{ color: C.body, fontSize: 10.5, fontWeight: 500, lineHeight: 1.45 }}>{w.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 4.2 국가 경영 */
function NationSection() {
  return (
    <section>
      <SecHead no="4.2" area="디지털 시대의 국가 경영" desc="전략·산업·정치·미디어 운영체계로 핵심 기관을 잇고 산업 벨트 생태계를 조직한다." />
      <div style={{ color: C.body, fontWeight: 600, fontSize: 12.5, lineHeight: 1.42, marginBottom: 10 }}>
        국가는 위에서 표준화하는 대신 전략(싱크탱크·대학)·산업(기업)·정치(정부·정당·군대)·미디어가 방향에서 보호까지 이어지는 하나의 운영체계를 설계하고, 시산학 생태계는 도시가 맡는다. <span style={{ color: C.muted, fontWeight: 600 }}>마리아나 마추카토(UCL)는 국가가 위험을 감수하고 방향을 제시하는 미션 지향 주체가 되어야 한다고 본다.</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 8 }}>
        {governanceAxes.map((axis) => (
          <div key={axis.label} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", display: "grid", gridTemplateColumns: "52px 1fr" }}>
            <div style={{ background: C.ink, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, letterSpacing: -0.3, textAlign: "center", lineHeight: 1.15, padding: "0 2px" }}>{axis.label}</div>
            <div style={{ padding: "5px 9px", color: C.body, lineHeight: 1.28 }}>
              <div style={{ color: C.ink, fontWeight: 800, fontSize: 11.6 }}>{axis.title}</div>
              <div style={{ color: C.navySoft, fontWeight: 700, fontSize: 9.6, margin: "1px 0 2px" }}>{axis.actors}</div>
              <div style={{ fontSize: 10, fontWeight: 500 }}>{axis.body}</div>
              <div style={{ marginTop: 2, fontSize: 9.6, fontWeight: 700, color: C.muted }}>{axis.shift}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: C.ink, fontWeight: 800, fontSize: 12.5, marginBottom: 7 }}>핵심 산업의 역할과 지역 배치 — 산업 벨트 생태계</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 9 }}>
        {nationalBelts.map((belt, i) => (
          <div key={belt.name} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden" }}>
            <div style={{ background: C.surface, borderBottom: `1px solid ${C.cardBorder}`, padding: "4px 8px", display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 17, height: 17, borderRadius: 2, background: C.ink, color: "#fff", fontSize: 10, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ color: C.ink, fontSize: 11, fontWeight: 800, lineHeight: 1.18 }}>{belt.name}</span>
            </div>
            <div style={{ padding: "5px 9px" }}>
              <div style={{ color: C.navySoft, fontSize: 10, fontWeight: 700, lineHeight: 1.3, marginBottom: 3 }}>{belt.industries}</div>
              <div style={{ color: C.body, fontSize: 10, fontWeight: 500, lineHeight: 1.35 }}>{belt.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: C.surface, borderLeft: `3px solid ${C.ink}`, borderRadius: 2, padding: "8px 13px", color: C.ink, fontSize: 11.5, fontWeight: 600, lineHeight: 1.45 }}>
        중부 벨트의 로봇·바이오·우주 원천기술이 동남권 벨트의 에너지·물류·드론으로 양산·운송되고, 서남권 벨트의 미래도시·공공재 실험장에서 생활 데이터로 검증된 뒤, 수도권·강원 벨트의 콘텐츠·금융·디자인을 거쳐 세계 시장으로 나간다. 시장의 수요·자본은 다시 중부의 연구로 되돌아온다. 어느 벨트도 혼자 완결되지 않고, 기술→양산→실증→시장→재투자의 순환이 벨트들을 한 산업 생태계로 묶는다.
      </div>
    </section>
  );
}

/* 4.3 / 4.4 도시·가정 (2단) */
function SmallSection({ s }: { s: typeof small[number] }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <SecHead no={s.no} area={s.area} desc={s.title} />
      <div style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, padding: "10px 14px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
        <div style={{ color: C.body, fontWeight: 600, fontSize: 12.2, lineHeight: 1.42 }}>{s.lead}</div>
        <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {s.bullets.map((b) => (
            <li key={b} style={{ margin: 0, fontSize: 11.2, lineHeight: 1.42, color: C.body, fontWeight: 500 }}>{b}</li>
          ))}
        </ul>
        <div style={{ background: C.surface, borderLeft: `3px solid ${C.ink}`, borderRadius: 2, padding: "7px 12px", color: C.body, fontWeight: 600, fontSize: 11, lineHeight: 1.4 }}>{s.effect}</div>
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
        summary="새 사회계약은 선언만으로 실현되지 않는다. 세계는 안전한 경합의 규칙을 만들고, 국가는 전략·산업·정치·미디어와 산업 벨트를 조직하며, 도시는 시산학 강소도시-서버시티 벨트에서 생활권 실증을 수행하고, 가정은 개인 성장의 기반을 만든다."
      />
      <div style={{ padding: "10px 44px 6px", display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between", flex: 1, minHeight: 0 }}>
        <WorldSection />
        <NationSection />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "stretch" }}>
          <SmallSection s={small[0]} />
          <SmallSection s={small[1]} />
        </div>
      </div>
      <Footer version={VERSION} />
    </div>
  );
}
