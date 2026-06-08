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

const nationalScenario = [
  { name: "싱크탱크", role: "규칙·전체 방향" },
  { name: "대학", role: "인재 양성" },
  { name: "기업", role: "제품화·투자" },
  { name: "미디어", role: "서사 확산" },
  { name: "정부", role: "예산·조달" },
  { name: "정당", role: "입법" },
  { name: "군대", role: "안보·전략 인프라" },
];

const nationalBelts = [
  "남동 제조·해양 벨트: 부산·울산·창원·거제·포항 — 항만·조선·로봇·드론·핵에너지·국토활용",
  "중부 반도체·바이오·위성 벨트: 수도권 남부·천안아산·대전·청주·세종 — 메모리·바이오·인공위성·디지털공공재",
  "서울·수도권 문화·금융 벨트: 서울·수도권 — 디지털미디어·금융·K컬처·디자인·창업 자본",
  "지역 특산물 벨트: 강원·호남·제주 — 건강관광·융합디자인·신가치엔터·미래교육·지역 브랜드",
];

const sections = [
  {
    no: "4.2",
    area: "국가 경영",
    title: "7대 분야 운영체계와 15대 산업벨트를 실행 권한으로 연결한다.",
    lead: "7대 분야는 운영체계, 15대 산업은 전국 벨트 생태계, 선출직 인재는 실행 권한, 도시는 실증 노드가 된다.",
    bullets: nationalBelts,
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
        <div style={{ display: "grid", gridTemplateColumns: "17% 1fr", gap: 10, alignItems: "stretch" }}>
          <div style={{ background: C.navy, color: "#fff", padding: "8px 10px", fontSize: 12.2, lineHeight: 1.28, fontWeight: 850 }}>
            협력적 딜<br />안전한 경합·상호이익 협정
          </div>
          <div style={{ background: "#f5f1ea", borderLeft: `3px solid ${C.accent}`, padding: "7px 10px", fontSize: 10.25, lineHeight: 1.2, color: "#333", fontWeight: 560 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
              <div><b style={{ color: C.navy }}>목적</b> — AI 패권경쟁이 군사 충돌·기술 봉쇄·시장 분열·사회 불안정으로 번지지 않도록 경쟁과 협력의 규칙을 만든다.</div>
              <div><b style={{ color: C.navy }}>레드라인</b> — WMD 연계 AI와 인간 승인 없는 자율살상무기는 금지하고, 민간 AI 경쟁은 검증 가능한 조건 아래 허용한다.</div>
              <div><b style={{ color: C.navy }}>경제 딜</b> — 미국은 신뢰 가능한 AI 인프라와 고부가가치 시장을 지키고, 중국은 저비용 모델·오픈소스·제조 생태계의 글로벌 진입 통로를 얻는다.</div>
              <div><b style={{ color: C.navy }}>내용</b> — 모델·컴퓨팅·데이터·오픈소스·응용서비스를 위험도별로 나누고, 접근·감사·수익 배분·분쟁 해결 기준을 합의한다.</div>
              <div><b style={{ color: C.navy }}>실행</b> — 공동위원회·기술 감사단·군사 AI 핫라인·산업 테스트베드·실험 도시를 통해 안보와 경제 규칙을 함께 검증한다.</div>
              <div><b style={{ color: C.accent }}>교환물</b> — 미국은 중국식 AI 확산을 통제할 신뢰 기준을 얻고, 중국은 검증된 시장 접근권을 얻는다. 한국은 양쪽이 활용할 사회계약·산업 적용 실험장이 된다.</div>
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
      <section style={{ border: `1.5px solid ${C.navy}`, background: "#fff", display: "flex", flexDirection: "column", minHeight: 202 }}>
        <div style={{ background: C.navy, color: "#fff", padding: "8px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
          <div style={{ fontSize: 16, fontWeight: 900 }}>{section.no}</div>
          <div style={{ fontSize: 16, fontWeight: 850 }}>{section.area}</div>
          <div style={{ fontSize: 12.6, fontWeight: 560, opacity: 0.86 }}>{section.title}</div>
        </div>
        <div style={{ padding: "9px 14px 8px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ color: C.navy, fontWeight: 850, fontSize: 12.1, lineHeight: 1.25 }}>{section.lead}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, alignItems: "stretch" }}>
            {nationalScenario.map((item, i) => (
              <div key={item.name} style={{ display: "flex", alignItems: "stretch" }}>
                <div style={{ flex: 1, border: "1px solid #d8d2ca", background: i % 2 === 0 ? "#f8f5ef" : "#eef3fb", padding: "6px 5px", textAlign: "center", minHeight: 45 }}>
                  <div style={{ fontSize: 11.3, color: C.navy, fontWeight: 900, marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontSize: 9.9, color: "#333", fontWeight: 650, lineHeight: 1.18 }}>{item.role}</div>
                </div>
                {i < nationalScenario.length - 1 && <div style={{ width: 13, display: "flex", alignItems: "center", justifyContent: "center", color: C.navy, fontSize: 13, fontWeight: 800 }}>→</div>}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px", color: "#333", fontWeight: 520, fontSize: 10.75, lineHeight: 1.22 }}>
            {section.bullets.map((item) => <div key={item}>• {item}</div>)}
          </div>
        </div>
      </section>
    );
  }

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
