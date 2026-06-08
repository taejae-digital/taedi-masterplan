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

const sections = [
  {
    no: "4.2",
    area: "국가 경영",
    title: "7대 분야의 생태계 역할을 시각화하고, 15대 산업을 전국 벨트로 묶는다.",
    lead: "국가경영은 7대 분야가 하나의 시나리오로 움직이게 하고, 15대 산업을 권역별 벨트로 배치해 만든다. 여기에 선출직 인재를 붙여 법·예산·외교·공공조달의 실행 권한까지 연결해야 한다.",
    bullets: [
      "7대 분야 시나리오: 싱크탱크가 규칙·전체 방향을 만들고, 대학이 인재를 키우며, 기업이 제품화·투자를 맡고, 미디어가 서사를 확산하며, 정부가 예산·조달, 정당이 입법, 군대가 안보·전략 인프라를 담당",
      "선출직 인재: 벨트 전략을 법·예산·외교·공공조달로 실행하고, 도시 간 중복 투자와 이해관계를 조정",
      "남동 제조·해양 벨트: 부산·울산·창원·거제·포항을 항만·조선·로봇·드론·핵에너지·국토활용의 생산·수출 권역으로 묶음",
      "중부 반도체·바이오·위성 벨트: 수도권 남부·천안아산·대전·청주·세종을 메모리·바이오·인공위성·디지털공공재의 연구·실증·조달 권역으로 묶음",
      "서울·수도권 문화·금융 벨트와 지역 특산물 벨트: 서울은 디지털미디어·금융·K컬처 허브, 강원·호남·제주는 건강관광·융합디자인·신가치엔터·미래교육·지역 브랜드 실증 권역",
    ],
    effect: "7대 분야는 운영체계, 15대 산업은 전국 벨트 생태계, 선출직 인재는 실행 권한, 도시는 실증 노드가 된다.",
  },
  {
    no: "4.3",
    area: "도시 경영",
    title: "도시별 규제·산업 정체성을 세워 경쟁하게 한다.",
    lead: "15대 미래산업은 국가가 정하지만 실행은 도시에서 일어난다. 도시는 같은 규칙을 복제하는 행정 단위가 아니라 산업·규제·세금·교육·문화가 다른 정체성 생태계이자 시민강화 AI 표준의 생활권 실험장이어야 한다.",
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
    lead: "가정은 개인을 도시 생태계와 연결하는 시작점이다. 정체성은 배정되는 목표가 아니라 생활 기록, 학습, 관계, 실험, 인정 속에서 발견·훈련·전환된다.",
    bullets: [
      "개인 성장 기록: 학습·건강·관계·프로젝트·기여 데이터를 본인이 통제하며 축적",
      "정체성 코치: 잘하는 것·좋아하는 것·사회가 원하는 것의 교집합을 탐색하고 도시 일감과 연결",
      "도시 기회 연결: 산업학교·멘토·실증 프로젝트·지역기업·공공조달 과제에 참여",
      "권리 UI: AI 추천을 설명·거부·조정하고, 개인이 생산 방향과 전환 경로를 선택",
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
    <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: 286 }}>
      <div style={{ background: C.navy, color: "#fff", padding: "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: 16, fontWeight: 900 }}>4.1</div>
        <div style={{ fontSize: 16, fontWeight: 850 }}>세계 경영</div>
        <div style={{ fontSize: 12.7, fontWeight: 560, opacity: 0.88 }}>미국·중국·한국의 보유 카드와 공포를 협상 카드로 전환한다.</div>
      </div>
      <div style={{ padding: "9px 14px 10px", display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
        <div style={{ color: C.navy, fontSize: 11.5, lineHeight: 1.28, fontWeight: 760 }}>
          세계 경영은 각국이 가진 카드와 두려워하는 미래를 읽는 협상 설계다. 보유 카드는 상대가 필요로 하는 자원이고, 공포 카드는 상대가 피하고 싶은 손실이다. 한국은 미·중의 공포를 낮추고 한국의 산업·도시·사회계약 실험장을 교환물로 제시해 거부하기 어려운 딜을 만든다.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9 }}>
          {fearRows.map((row) => (
            <div key={row.actor} style={{ border: "1px solid #d8d2ca", background: "#f8f5ef", display: "flex", flexDirection: "column" }}>
              <div style={{ background: "#ebe4d8", color: C.navy, fontSize: 12.5, fontWeight: 900, padding: "5px 8px", borderBottom: "1px solid #d8d2ca" }}>{row.actor}</div>
              <div style={{ padding: "6px 8px", fontSize: 10.45, lineHeight: 1.22, color: "#333", display: "flex", flexDirection: "column", gap: 4 }}>
                <div><b style={{ color: C.navy }}>보유 카드</b> — {row.strength}</div>
                <div><b style={{ color: C.accent }}>잃기 싫은 것</b> — {row.shortFear}</div>
                <div><b style={{ color: C.accent }}>피하고 싶은 미래</b> — {row.longFear}</div>
                <div><b style={{ color: C.navy }}>협상 카드</b> — {row.deal}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "23% 1fr", gap: 10, alignItems: "stretch" }}>
          <div style={{ background: C.navy, color: "#fff", padding: "8px 10px", fontSize: 12.3, lineHeight: 1.28, fontWeight: 850 }}>
            협력적 딜<br />안전한 경합·상호이익 협정
          </div>
          <div style={{ background: "#f5f1ea", borderLeft: `3px solid ${C.accent}`, padding: "7px 10px", fontSize: 10.7, lineHeight: 1.25, color: "#333", fontWeight: 560 }}>
            전략 공급망, 금융·기술 접근, 안보 리스크, AI 검증, 데이터 주권, 도시 실증을 하나의 패키지로 묶는다. 미국은 동맹 기반 개방질서와 전략 공급망을 방어하고, 중국은 무조건 배제가 아니라 검증 가능한 참여 경로를 얻으며, 한국은 안전한 산업·도시·사회계약 실험장으로 표준 권력을 얻는다.
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategyCard({ section, compact = false }: { section: typeof sections[number]; compact?: boolean }) {
  return (
    <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: compact ? 245 : 202 }}>
      <div style={{ background: C.navy, color: "#fff", padding: compact ? "8px 12px" : "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontSize: compact ? 15 : 16, fontWeight: 900 }}>{section.no}</div>
        <div style={{ fontSize: compact ? 15 : 16, fontWeight: 850 }}>{section.area}</div>
        <div style={{ fontSize: compact ? 12 : 12.6, fontWeight: 560, opacity: 0.86 }}>{section.title}</div>
      </div>
      <div style={{ padding: compact ? "9px 12px 8px" : "10px 14px 8px", display: "grid", gridTemplateColumns: compact ? "1fr" : "30% 51% 19%", gap: compact ? 7 : 12, flex: 1 }}>
        <div style={{ color: C.navy, fontWeight: 760, fontSize: compact ? 11.25 : 11.6, lineHeight: 1.28 }}>{section.lead}</div>
        <div style={{ color: "#333", fontWeight: 520, fontSize: compact ? 10.75 : 10.9, lineHeight: 1.25 }}><BulletList items={section.bullets} /></div>
        <div style={{ background: "#f5f1ea", borderLeft: compact ? "none" : `3px solid ${C.accent}`, borderTop: compact ? `3px solid ${C.accent}` : "none", padding: compact ? "7px 9px" : "8px 10px", color: C.accent, fontWeight: 850, fontSize: compact ? 10.8 : 11.0, lineHeight: 1.24 }}>{section.effect}</div>
      </div>
    </section>
  );
}

export function GovernanceExpansionPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 새 사회계약의 경영 전략" version={VERSION} />
      <div style={{ padding: "11px 36px 8px", borderBottom: `3px solid ${C.navy}`, marginBottom: 9 }}>
        <div style={{ fontSize: 19.1, color: C.navy, lineHeight: 1.22, fontWeight: 850, letterSpacing: -0.4 }}>
          한국은 미·중이 거부하기 어려운 딜을 만들고, 7대 분야·15대 산업벨트·도시 경쟁으로 사회계약을 실증한다.
        </div>
        <div style={{ marginTop: 6, fontSize: 13.0, color: "#333", lineHeight: 1.28, fontWeight: 560 }}>
          세계 경영은 미국·중국·한국의 강점과 공포를 조정하는 딜, 국가 경영은 전국 벨트 생태계, 도시 경영은 생활권 실증, 가정 경영은 개인 성장의 최소 단위다.
        </div>
      </div>
      <div style={{ padding: "0 36px 13px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
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
