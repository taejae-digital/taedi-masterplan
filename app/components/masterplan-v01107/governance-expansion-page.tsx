import { C } from "./constants";
import { Header, PageLead, Footer } from "./shared";
import { VERSION } from "./version";

const fearRows = [
  {
    actor: "미국",
    strength: "달러·동맹망·빅테크·군사력·글로벌 표준·AI 법제",
    shortFear: "중국 제조망·글로벌 사우스가 커져 공급망·동맹이 흔들리는 것",
    longFear: "달러·동맹 패권이 약화돼 세계 규칙 설정권을 잃는 것",
    hope: "미국식 AI·법제가 동맹 표준이 되고 달러·기술 주도권을 지키는 세계",
    deal: "미국식 AI 법제를 동맹 표준으로, 무규칙 AI 확산 차단",
  },
  {
    actor: "중국",
    strength: "국가 총력전·제조망·전력·로봇·EV·배터리·사우스 네트워크",
    shortFear: "미국 주도 기술·금융망이 시장 접근을 차단하는 것",
    longFear: "성장 둔화·청년 실업·격차가 체제 안정성을 흔드는 것",
    hope: "배제 없이 산업·시장에 참여하며 다극 질서에서 영향력을 키우는 세계",
    deal: "전면 배제가 아닌 검증된 산업·시장 접근 보장",
  },
  {
    actor: "한국",
    strength: "반도체·제조·콘텐츠·도시 실험장·한미동맹·중국 인접성",
    shortFear: "미·중 양쪽 종속이 커져 전략 선택지가 좁아지는 것",
    longFear: "저출산·수도권 집중·전환 실패로 미래 주도권을 잃는 것",
    hope: "미·중 모두가 신뢰하는 AI 사회계약 실험장·규칙 설계자가 되는 세계",
    deal: "미·중이 모두 필요로 하는 AI 사회계약 실험장 지위 확보",
  },
];

const dealItems = [
  { k: "목적", t: "AI 패권경쟁을 전쟁·봉쇄로 방치하지 않고, 다양성을 수용하는 글로벌 거버넌스로 전환한다." },
  { k: "레드라인", t: "핵·생화학·대규모 사이버에 AI 직접 연결과 인간 승인 없는 자율살상무기를 금지하고, 고위험 AI는 FDA식 사전 승인으로 개발자가 안전성을 입증한 뒤 출시한다." },
  { k: "경제 딜", t: "미국은 무규칙 AI를 막을 신뢰 기준을, 중국은 전면 배제 대신 검증된 시장 접근권을 얻는다." },
  { k: "다자 레버리지", t: "유럽은 권리·감사 기준, 일본은 제조·안보 표준, 동남아·아프리카는 수요시장으로 활용한다." },
  { k: "실행", t: "공동위·기술 감사단·군사 AI 핫라인·산업 테스트베드로 안보·경제 규칙을 함께 검증한다." },
  { k: "법제 경쟁", t: "미국(연방 집중)·EU(권리 기반 AI Act)·중국(국가 주도) 사이에서, 한국은 정체성 전환 여건을 보장하는 독자 모델로 포지셔닝한다." },
];

const exchange = "한국의 역할 — 미국엔 신뢰 기준을, 중국엔 검증된 시장 접근권을 잇는 중개자. 미·중 모두가 필요로 하는 AI 사회계약 실험장이자 글로벌 거버넌스 규칙 설계자 지위를 얻는다.";

const governanceAxes = [
  { label: "싱크탱크", title: "방향과 규칙", actors: "미래 의제 설계", body: "미래 의제·AI 거버넌스·산업/도시 전략의 방향과 규칙을 만든다.", shift: "자문 기구 → 국가의 방향과 규칙을 설계하는 두뇌" },
  { label: "대학", title: "실행할 인재", actors: "정체성·창업 역량", body: "그 방향을 실행할 인재를 기르고 정체성·창업 역량을 키운다.", shift: "표준 인력 공급 → 정체성 기반 생산자를 기르는 지식 실험장" },
  { label: "기업", title: "제품·서비스 전환", actors: "산업 벨트 운영", body: "기술과 아이디어를 제품·서비스로 전환하고 개인 생산자를 시장에 연결한다.", shift: "대량생산 조직 → 개인 생산자의 시장 진입을 여는 산업 벨트 운영자" },
  { label: "미디어", title: "사회적 서사 확산", actors: "신뢰와 합의의 공론장", body: "정체성 생산·AI 위험·데이터 권리·산업 전환을 사회적 서사로 확산한다.", shift: "정보 매체 → 방향·인재·생산을 사회적 합의로 바꾸는 공론장" },
  { label: "정부", title: "예산·제도·거버넌스", actors: "공공 데이터·조달·규제", body: "예산·제도·거버넌스를 설계하고 공공 데이터·조달·규제 샌드박스를 실행한다.", shift: "국가 관리 → 생산 자유와 공동체 안전을 함께 보장하는 운영체계" },
  { label: "정당", title: "정치적 선택지", actors: "사회적 합의의 입법화", body: "사회적 합의를 정치적 선택지로 만들고 입법으로 제도화한다.", shift: "권력 경쟁 조직 → 사회적 합의를 정치적 선택지로 만드는 통로" },
  { label: "군대", title: "질서의 보호", actors: "외부 위협 대응·안보", body: "외부 위협으로부터 정체성 전환의 질서와 공동체 안전을 보호한다.", shift: "국방 조직 → 전환 질서를 외부 위협에서 지키는 안전 보장자" },
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
    title: "강소도시-서버시티 벨트가 필요하다.",
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
    title: "도시 안에서 고유한 정체성이 발휘되는 시스템.",
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
    <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginBottom: 7, paddingBottom: 5, borderBottom: `2px solid ${C.ink}`, color: C.ink }}>
      <span style={{ fontSize: 16, fontWeight: 900 }}>{no}</span>
      <span style={{ fontSize: 16, fontWeight: 800 }}>{area}</span>
      <span style={{ fontSize: 11.8, fontWeight: 500, color: C.muted }}>{desc}</span>
    </div>
  );
}

/* 4.1 세계 경영 — 미국 vs 중국 좌우 대치 → 협력적 딜 → 한국 */
function NationNode({ row, role, flag, center = false }: { row: typeof fearRows[number]; role: string; flag?: string; center?: boolean }) {
  return (
    <div style={{ border: `1.5px solid ${C.ink}`, borderRadius: 3, overflow: "hidden", background: center ? C.accentSoft : "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ background: C.ink, color: "#fff", padding: "5px 12px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14.5, fontWeight: 900 }}>{row.actor}{flag ? ` ${flag}` : ""}</span>
        <span style={{ fontSize: 9.5, fontWeight: 700, opacity: 0.85, letterSpacing: 0.3 }}>{role}</span>
      </div>
      <div style={{ padding: "8px 12px", fontSize: 10.3, lineHeight: 1.38, color: C.body, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px" }}>
          <div><b style={{ color: C.ink }}>보유 카드</b> {row.strength}</div>
          <div><b style={{ color: C.navySoft }}>잃기 싫은 것</b> {row.shortFear}</div>
          <div><b style={{ color: C.navySoft }}>원하는 미래</b> {row.hope}</div>
          <div><b style={{ color: C.navySoft }}>피하고 싶은 미래</b> {row.longFear}</div>
        </div>
        <div style={{ borderTop: `1px dashed ${C.cardBorder}`, paddingTop: 4 }}><b style={{ color: C.ink }}>협상 카드</b> {row.deal}</div>
      </div>
    </div>
  );
}

function WorldSection() {
  const [us, cn] = fearRows;
  return (
    <section>
      <SecHead no="4.1" area="디지털 시대의 세계 경영" desc="미·중 패권경쟁을 협력으로 변화시킨다." />
      <div style={{ color: C.body, fontSize: 12.5, lineHeight: 1.4, fontWeight: 600, marginBottom: 7 }}>
        협상과 협력 구조를 설계하고, 한국은 두 나라가 모두 필요로 하는 AI 사회계약 실험장이 된다. <span style={{ color: C.muted, fontWeight: 600 }}>요슈아 벤지오(몬트리올대·Mila)는 고도 AI가 권력 집중과 안전 위험을 키우므로 국제 거버넌스와 독립적 안전 검증이 필요하다고 본다.</span>
      </div>

      {/* 미국 vs 중국 좌우 대치 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr", alignItems: "stretch", columnGap: 0, marginBottom: 7 }}>
        <NationNode row={us} role="규칙 설정권 수호자" flag="🇺🇸" />
        <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <span style={{ fontSize: 18, fontWeight: 900, color: C.ink }}>VS</span>
          <span style={{ fontSize: 8.5, fontWeight: 700, color: C.muted, letterSpacing: 0.5 }}>패권 경합</span>
        </div>
        <NationNode row={cn} role="시장 접근 도전자" flag="🇨🇳" />
      </div>

      {/* 협력적 딜 테이블 */}
      <div style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", marginBottom: 0 }}>
        <div style={{ background: C.ink, color: "#fff", padding: "5px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12.5, fontWeight: 900 }}>협력적 딜</span>
          <span style={{ fontSize: 10, fontWeight: 500, opacity: 0.85 }}>안전한 경합·상호이익 협정 테이블</span>
        </div>
        <div style={{ padding: "9px 12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 18px" }}>
          {dealItems.map((d) => (
            <div key={d.k} style={{ fontSize: 11.5, lineHeight: 1.4, color: C.body }}>
              <b style={{ color: C.navy }}>{d.k}</b> — {d.t}
            </div>
          ))}
        </div>
        <div style={{ background: C.surface, borderTop: `1px solid ${C.cardBorder}`, padding: "8px 14px", fontSize: 12, fontWeight: 600, color: C.body, lineHeight: 1.45 }}>
          {exchange}
        </div>
      </div>
    </section>
  );
}

/* 4.2 국가 경영 */
function NationSection() {
  return (
    <section>
      <SecHead no="4.2" area="디지털 시대의 국가 경영" desc="국가를 움직이는 핵심 기관을 하나의 운영체계로 잇고 산업 벨트 생태계를 조직한다." />
      <div style={{ color: C.body, fontWeight: 600, fontSize: 12.5, lineHeight: 1.42, marginBottom: 8 }}>
        국가는 위에서 표준화하는 대신 싱크탱크·대학·기업·미디어·정부·정당·군대가 방향에서 보호까지 이어지는 하나의 운영체계를 설계하고, 시산학 생태계는 도시가 맡는다. <span style={{ color: C.muted, fontWeight: 600 }}>마리아나 마추카토(UCL)는 국가가 위험을 감수하고 방향을 제시하는 미션 지향 주체가 되어야 한다고 본다.</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 8 }}>
        {governanceAxes.map((axis) => (
          <div key={axis.label} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: C.ink, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 900, padding: "4px 2px", letterSpacing: -0.3 }}>{axis.label}</div>
            <div style={{ padding: "6px 7px", color: C.body, lineHeight: 1.26, flex: 1 }}>
              <div style={{ color: C.ink, fontWeight: 800, fontSize: 10.6 }}>{axis.title}</div>
              <div style={{ color: C.navySoft, fontWeight: 700, fontSize: 8.8, margin: "1px 0 3px" }}>{axis.actors}</div>
              <div style={{ fontSize: 9.4, fontWeight: 500 }}>{axis.body}</div>
              <div style={{ marginTop: 3, fontSize: 8.8, fontWeight: 700, color: C.muted }}>{axis.shift}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: C.ink, fontWeight: 800, fontSize: 12.5, marginBottom: 6 }}>핵심 산업의 역할과 지역 배치 — 산업 벨트 생태계</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 9, marginBottom: 7 }}>
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
      <div style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 3, padding: "8px 14px 8px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
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
        summary="새 사회계약은 선언만으로 실현되지 않는다. 세계는 안전한 경합의 규칙을 만들고, 국가는 싱크탱크·대학·기업·미디어·정부·정당·군대와 산업 벨트를 조직하며, 도시는 시산학 강소도시-서버시티 벨트에서 생활권 실증을 수행하고, 가정은 개인 성장의 기반을 만든다."
      />
      <div style={{ padding: "6px 44px 4px", display: "flex", flexDirection: "column", gap: 8, flex: 1, minHeight: 0 }}>
        <WorldSection />
        <NationSection />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "stretch" }}>
          <SmallSection s={small[0]} />
          <SmallSection s={small[1]} />
        </div>
      </div>
      <Footer version={VERSION} />
    </div>
  );
}
