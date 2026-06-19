import { C } from "./constants";
import { Header, Footer, h3s } from "./shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  const lifeStages = [
    {
      stage: "탄생·유아",
      need: "안전 · 애착 · 기초 탐색",
      industrialCommunity: "가정 · 병원 · 학교",
      industrialPerson: "표준 성장 경로에 맞춰 보호·양육을 받는 아이",
      digitalPerson: "생활·건강·성향 데이터에서 정체성 단서가 보이는 아이",
      digitalCommunity: "스마트홈 · 가정 · 돌봄",
      communityShift: "사후 보호 → 조기 발견",
    },
    {
      stage: "아동·청소년",
      need: "정체성 발견 · 기초 훈련",
      industrialCommunity: "학교 · 학원 · 시험",
      industrialPerson: "같은 교과·성적·진학 경로에 맞춰지는 학생",
      digitalPerson: "관심·강점별 경험을 통해 자기 방향을 찾는 학습자",
      digitalCommunity: "학교 · 이웃 · 마을",
      communityShift: "표준 교육 → 정체성별 훈련",
    },
    {
      stage: "청년 진입",
      need: "독립 · 일 · 관계 · 시장 진입",
      industrialCommunity: "대학 · 회사",
      industrialPerson: "직무와 조직 규칙에 맞게 선발·훈련되는 인재",
      digitalPerson: "정체성을 프로젝트와 작은 시장으로 시험하는 생산자",
      digitalCommunity: "도시 · 시산학 · 멘토",
      communityShift: "취업 관문 → 실험 생태계",
    },
    {
      stage: "성인 생산",
      need: "기여 · 가족 · 전환 · 건강 유지",
      industrialCommunity: "회사 · 국가",
      industrialPerson: "표준 경력·복지·소득 경로 안에서 성장하는 직업인",
      digitalPerson: "고유 기여로 작고 새로운 시장을 만드는 개인 생산자",
      digitalCommunity: "플랫폼 · 회사 · 도시",
      communityShift: "소속 관리 → 시장 연결",
    },
    {
      stage: "전환·돌봄",
      need: "재학습 · 예방 · 관계 유지",
      industrialCommunity: "복지 · 의료 · 국가",
      industrialPerson: "실직·질병 이후 제도 지원을 받는 대상자",
      digitalPerson: "생활 데이터와 재학습으로 다음 역할을 다시 찾는 사람",
      digitalCommunity: "마을 · 도시 · 의료",
      communityShift: "사후 대응 → 예방·전환 지원",
    },
    {
      stage: "노년·임종",
      need: "존엄 · 돌봄 · 의사결정 지원",
      industrialCommunity: "요양원 · 병원",
      industrialPerson: "삶의 마지막을 시설과 의료에 분리 위탁하는 노인",
      digitalPerson: "생활권 안에서 존엄과 자기결정을 유지하는 시민",
      digitalCommunity: "가정 · 마을 · 의료",
      communityShift: "분리 수용 → 생활권 돌봄",
    },
  ];

  const rowLabel = (title: string, sub: string, bg: string, color = "#fff") => (
    <div style={{ background: bg, color, padding: "8px 7px", fontSize: 10.4, fontWeight: 900, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.22 }}>
      <div>{title}</div>
      <div style={{ marginTop: 3, fontSize: 8.4, fontWeight: 700, opacity: 0.78 }}>{sub}</div>
    </div>
  );

  const cell = (key: string, children: React.ReactNode, opts: { bg?: string; borderTop?: boolean } = {}) => (
    <div key={key} style={{ padding: "8px 9px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: opts.borderTop ? `1px solid ${C.cardBorder}` : undefined, background: opts.bg || "#fff", minHeight: 104, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {children}
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 8px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.45 }}>디지털 시대의 공동체는 표준화된 인재가 아니라 정체성으로 작은 시장을 만드는 사람을 길러야 한다.</div>
        <div style={{ marginTop: 4, fontSize: 12.2, lineHeight: 1.36, color: C.muted, fontWeight: 500 }}>산업화 시대는 개인을 학교·회사·국가의 표준 경로에 맞췄다. 디지털 시대에는 개인의 삶의 단계마다 필요한 공동체가 달라지고, 그 공동체는 안전을 지키면서 정체성을 발견·훈련·시장 연결·돌봄으로 이어야 한다.</div>
      </div>

      <div style={{ padding: "13px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 11 }}>
        <div style={{ ...h3s, fontSize: 16.8, margin: "2px 0 0" }}>2.1 삶의 단계와 공동체 기능의 변화 — 다섯 줄 구조</div>

        <div style={{ display: "grid", gridTemplateColumns: "86px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden" }}>
          {rowLabel("산업화 공동체", "표준 경로에 편입", C.ink)}
          {lifeStages.map((s, i) => cell(`ic-${s.stage}`, <>
            <div style={{ fontSize: 10.1, fontWeight: 900, color: C.ink, marginBottom: 4 }}>{s.industrialCommunity}</div>
            <div style={{ fontSize: 9.6, fontWeight: 650, color: C.muted, lineHeight: 1.28 }}>{s.communityShift}</div>
          </>, { bg: i % 2 ? C.bg : "#fff" }))}

          {rowLabel("산업화 개인", "표준화된 인재", C.surface, C.ink)}
          {lifeStages.map((s, i) => cell(`ip-${s.stage}`, <div style={{ fontSize: 10.5, fontWeight: 650, color: C.body, lineHeight: 1.34 }}>{s.industrialPerson}</div>, { borderTop: true, bg: i % 2 ? C.bg : "#fff" }))}

          {rowLabel("삶의 단계", "개인의 필요", "#ffffff", C.ink)}
          {lifeStages.map((s, i) => cell(`life-${s.stage}`, <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ position: "absolute", left: -9, right: -9, top: 15, height: 2, background: C.line }} />
            <div style={{ position: "relative", zIndex: 1, width: 30, height: 30, borderRadius: 15, background: i < 2 ? "#b08322" : i < 4 ? C.teal : C.navySoft, color: "#fff", fontSize: 12, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>{i + 1}</div>
            <div style={{ position: "relative", zIndex: 1, fontSize: 12.2, fontWeight: 900, color: C.ink, letterSpacing: -0.25 }}>{s.stage}</div>
            <div style={{ position: "relative", zIndex: 1, marginTop: 3, fontSize: 9.2, fontWeight: 750, color: C.muted }}>{s.need}</div>
          </div>, { borderTop: true }))}

          {rowLabel("디지털 개인", "정체성 → 작은 시장", C.teal)}
          {lifeStages.map((s, i) => cell(`dp-${s.stage}`, <div style={{ fontSize: 10.7, fontWeight: 700, color: C.ink, lineHeight: 1.34 }}>{s.digitalPerson}</div>, { borderTop: true, bg: i % 2 ? "#f7fbfa" : "#fff" }))}

          {rowLabel("디지털 공동체", "발견·훈련·연결", C.navySoft)}
          {lifeStages.map((s, i) => cell(`dc-${s.stage}`, <>
            <div style={{ fontSize: 10.1, fontWeight: 900, color: C.teal, marginBottom: 4 }}>{s.digitalCommunity}</div>
            <div style={{ fontSize: 9.6, fontWeight: 650, color: C.body, lineHeight: 1.3 }}>{s.communityShift}</div>
          </>, { borderTop: true, bg: i % 2 ? "#f7fbfa" : "#fff" }))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, height: 118, flexShrink: 0 }}>
          {[
            { t: "공동체 권한", d: "공동체 권한은 영구 권한이 아니라 생애 단계의 필요에 따라 위임되고 회수된다." },
            { t: "교육의 전환", d: "같은 교육을 넣는 것이 아니라 정체성을 발견한 뒤 그에 맞는 학습·훈련·실험 경로를 연다." },
            { t: "도시의 역할", d: "도시는 학교·회사·마을·산업·연구를 묶어 개인의 고유 기여가 작은 시장이 되게 한다." },
          ].map((x) => (
            <div key={x.t} style={{ border: `1px solid ${C.cardBorder}`, borderTop: `3px solid ${C.teal}`, borderRadius: 3, padding: "10px 13px", background: "#fff", overflow: "hidden" }}>
              <div style={{ fontSize: 13.4, fontWeight: 900, color: C.ink, marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 12.1, fontWeight: 600, color: C.body, lineHeight: 1.42 }}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
