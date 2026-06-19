import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  const lifeStages = [
    {
      stage: "탄생·유아",
      need: "안전 · 애착 · 기초 탐색",
      industrialCommunity: "가정 · 병원 · 학교",
      industrialFeature: "사후 보호·표준 성장 관리",
      industrialPerson: "표준 성장 경로에 맞춰 보호·양육을 받는 아이",
      digitalPerson: "성향 데이터로 정체성의 단서가 일찍 드러나는 아이",
      digitalCommunity: "스마트홈 · 가정 · 돌봄",
      digitalFeature: "생활 데이터 기반 조기 발견",
    },
    {
      stage: "아동·청소년",
      need: "정체성 발견 · 기초 훈련",
      industrialCommunity: "학교 · 학원 · 시험",
      industrialFeature: "동일 교과·성적 경쟁",
      industrialPerson: "같은 교과·성적·진학 경로에 맞춰지는 학생",
      digitalPerson: "정해진 길이 사라진 자리에서 스스로 방향을 찾아야 하는 학습자",
      digitalCommunity: "학교 · 이웃 · 마을",
      digitalFeature: "표준 사다리 대신 다양한 훈련 경로 보장",
    },
    {
      stage: "청년 진입",
      need: "독립 · 일 · 관계 · 시장 진입",
      industrialCommunity: "대학 · 회사",
      industrialFeature: "취업 관문·조직 적응",
      industrialPerson: "직무와 조직 규칙에 맞게 선발·훈련되는 인재",
      digitalPerson: "안정 정규직이 줄어, 각자 작은 시장을 직접 여는 1인 생산자",
      digitalCommunity: "도시 · 시산학 · 멘토",
      digitalFeature: "진입 비용·실패 위험을 낮추는 받침대",
    },
    {
      stage: "성인 생산",
      need: "기여 · 가족 · 전환 · 건강 유지",
      industrialCommunity: "회사 · 국가",
      industrialFeature: "소속·경력 장기 관리",
      industrialPerson: "표준 경력·복지·소득 경로 안에서 성장하는 직업인",
      digitalPerson: "유튜버·창작자처럼 니치를 개척하나 소득은 불안정한 생산자",
      digitalCommunity: "플랫폼 · 회사 · 도시",
      digitalFeature: "불안정 소득의 안전망·신뢰 인프라",
    },
    {
      stage: "전환·돌봄",
      need: "재학습 · 예방 · 관계 유지",
      industrialCommunity: "복지 · 의료 · 국가",
      industrialFeature: "실직·질병 이후 사후 대응",
      industrialPerson: "실직·질병 이후 제도 지원을 받는 대상자",
      digitalPerson: "잦은 단절·전직에 반복 노출돼 재학습이 상시화된 사람",
      digitalCommunity: "마을 · 도시 · 의료",
      digitalFeature: "상시 전환을 떠받치는 재학습·소득 안전망",
    },
    {
      stage: "노년·임종",
      need: "존엄 · 돌봄 · 의사결정 지원",
      industrialCommunity: "요양원 · 병원",
      industrialFeature: "시설·의료 분리 수용",
      industrialPerson: "삶의 마지막을 시설과 의료에 분리 위탁하는 노인",
      digitalPerson: "생활권 안에서 존엄과 자기결정을 유지하는 시민",
      digitalCommunity: "돌봄 공동체 · 가정 · 의료",
      digitalFeature: "분리 수용 아닌 생활권 통합 돌봄",
    },
  ];

  const communityReshape = [
    { unit: "가정", role: "정체성을 발견하고 데이터를 쥐는 출발점", facility: "건강·정체성 스마트홈", org: "성장 데이터 금고 · 정체성 코치 AI · 건강 예측" },
    { unit: "이웃·마을", role: "취향·관계로 정체성을 기르는 생활권", facility: "취향 공유시설(체육·음악·창작)", org: "정체성 매칭 동아리 · 마을 멘토단 · 돌봄 품앗이" },
    { unit: "학교", role: "정체성별 학습·실험 경로 플랫폼", facility: "정체성 탐색랩·프로젝트 스튜디오", org: "학습경로 설계자 · AI 튜터 · 진로 실험" },
    { unit: "회사·일터", role: "1인 생산자의 기여를 잇는 협업·시장", facility: "1인 생산자 공유 작업장·랩", org: "프로젝트 매칭 · 소득 안전망 조합 · 평판 인프라" },
    { unit: "도시", role: "작은 시장이 생기는 시산학 생태계", facility: "시산학 서버시티(데이터·AI·산업 API)", org: "강소도시 산업학교 · 창업·실증 · 시장 연결망" },
    { unit: "국가·세계", role: "불안정을 받치는 안전망·공동위험 관리", facility: "디지털 공공 인프라(신원·결제·안전망)", org: "직접민주 거버넌스 · 격차 조정 기금 · 공동위험 관리체" },
  ];

  const industrialReshape = [
    { unit: "가정", role: "양육·부양을 맡되 표준 교육에 위임", facility: "주거·양육 가정", org: "부모 부양 · 사교육 의존 · 보육 위탁" },
    { unit: "이웃·마을", role: "역할이 약화·해체된 생활권", facility: "(약화) 행정 동·반", org: "반상회·계 잔존 · 공동 기능 대부분 소멸" },
    { unit: "학교", role: "표준 인재를 선별·서열화", facility: "표준 학교·학원·시험", org: "교과 표준화 · 입시 경쟁 · 자격 검정" },
    { unit: "회사·일터", role: "평생 고용으로 개인을 소속·관리", facility: "기업·공장·사무 조직", org: "정규 고용 · 직무 배치 · 승진·복지" },
    { unit: "도시", role: "노동·주거를 집적한 대도시", facility: "산업도시·신도시", org: "주거·교통·행정 공급 · 일자리 집중" },
    { unit: "국가", role: "표준 제도와 안전망을 중앙 관리", facility: "중앙 정부·공공기관", org: "표준 교육·복지·고용 정책 · 중앙 통제" },
  ];

  const rowLabel = (title: string, sub: string, bg: string, color = "#fff") => (
    <div style={{ background: bg, color, padding: "8px 7px", fontSize: 10.4, fontWeight: 900, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.22 }}>
      <div>{title}</div>
      <div style={{ marginTop: 3, fontSize: 8.4, fontWeight: 700, opacity: 0.78 }}>{sub}</div>
    </div>
  );

  const cell = (key: string, children: React.ReactNode, opts: { bg?: string; borderTop?: boolean } = {}) => (
    <div key={key} style={{ padding: "6px 9px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: opts.borderTop ? `1px solid ${C.cardBorder}` : undefined, background: opts.bg || "#fff", minHeight: 64, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {children}
    </div>
  );

  function ReshapeCards({ data, headBg, facilityBg, facilityLabel, facilityHead, facilityText, orgLabelColor }: {
    data: { unit: string; role: string; facility: string; org: string }[];
    headBg: string; facilityBg: string; facilityLabel: string; facilityHead: string; facilityText: string; orgLabelColor: string;
  }) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
        {data.map((c) => (
          <div key={c.unit} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: headBg, color: "#fff", padding: "4px 8px", textAlign: "center", letterSpacing: -0.3 }}>
              <div style={{ fontSize: 12, fontWeight: 900 }}>{c.unit}</div>
              <div style={{ fontSize: 8, fontWeight: 600, opacity: 0.82, marginTop: 1, lineHeight: 1.18 }}>{c.role}</div>
            </div>
            <div style={{ padding: "5px 9px 5px", background: facilityBg, borderBottom: `1px solid ${C.cardBorder}` }}>
              <div style={{ fontSize: 8, fontWeight: 900, color: facilityHead, letterSpacing: 0.3, marginBottom: 2 }}>{facilityLabel}</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: facilityText, lineHeight: 1.28 }}>{c.facility}</div>
            </div>
            <div style={{ padding: "5px 9px 6px", flex: 1 }}>
              <div style={{ fontSize: 8, fontWeight: 900, color: orgLabelColor, letterSpacing: 0.3, marginBottom: 2 }}>조직·서비스</div>
              <div style={{ fontSize: 9.4, fontWeight: 600, color: C.body, lineHeight: 1.32 }}>{c.org}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 8px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.45 }}>안정된 직장이 줄어드는 시대 — 각자 정체성으로 작은 시장을 여는 길을 공동체가 받쳐야 한다.</div>
        <div style={{ marginTop: 4, fontSize: 12.2, lineHeight: 1.36, color: C.muted, fontWeight: 500 }}>산업화 시대는 표준 인재를 길러 학교·회사·국가의 평생 경로에 편입시켰다. 디지털 시대에는 그 평생 경로가 무너지고, 개인은 유튜버·창작자·1인 사업자처럼 각자 작은 시장을 직접 개척한다. 기회는 넓어지지만 소득과 신분은 불안정해진다. 공동체의 새 역할은 모두를 같은 길로 모으는 것이 아니라, 이 불안정을 떠받쳐 누구나 정체성으로 도전할 수 있게 하는 것이다.</div>
      </div>

      <div style={{ padding: "11px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
        {/* 최상단 — 산업화 시대 6공동체 시설·조직 */}
        <ReshapeCards data={industrialReshape} headBg="#3a4250" facilityBg="#f1f2f4" facilityLabel="핵심 시설" facilityHead="#5b6472" facilityText="#3a4250" orgLabelColor={C.faint} />

        {/* 중간 — 생애 단계 타임라인 */}
        <div style={{ display: "grid", gridTemplateColumns: "86px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden" }}>
          {rowLabel("산업화 공동체", "표준 경로에 편입", "#3a4250")}
          {lifeStages.map((s, i) => cell(`ic-${s.stage}`, <>
            <div style={{ fontSize: 10.1, fontWeight: 900, color: "#3a4250", marginBottom: 4 }}>{s.industrialCommunity}</div>
            <div style={{ fontSize: 9.6, fontWeight: 650, color: C.muted, lineHeight: 1.28 }}>{s.industrialFeature}</div>
          </>, { bg: "#f4f5f7" }))}

          {rowLabel("산업화 개인", "표준 인재·평생 경로", "#6b7280")}
          {lifeStages.map((s, i) => cell(`ip-${s.stage}`, <div style={{ fontSize: 10.5, fontWeight: 650, color: C.muted, lineHeight: 1.34 }}>{s.industrialPerson}</div>, { borderTop: true, bg: "#fafbfc" }))}

          {rowLabel("삶의 단계", "개인의 필요", "#1f2430")}
          {lifeStages.map((s, i) => cell(`life-${s.stage}`, <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ position: "absolute", left: -9, right: -9, top: 15, height: 2, background: C.line }} />
            <div style={{ position: "relative", zIndex: 1, width: 30, height: 30, borderRadius: 15, background: i < 2 ? "#b08322" : i < 4 ? C.teal : C.navySoft, color: "#fff", fontSize: 12, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>{i + 1}</div>
            <div style={{ position: "relative", zIndex: 1, fontSize: 12.2, fontWeight: 900, color: C.ink, letterSpacing: -0.25 }}>{s.stage}</div>
            <div style={{ position: "relative", zIndex: 1, marginTop: 3, fontSize: 9.2, fontWeight: 750, color: C.muted }}>{s.need}</div>
          </div>, { borderTop: true }))}

          {rowLabel("디지털 개인", "각자 작은 시장·불안정", "#3d9b91")}
          {lifeStages.map((s, i) => cell(`dp-${s.stage}`, <div style={{ fontSize: 10.7, fontWeight: 700, color: "#0f5e57", lineHeight: 1.34 }}>{s.digitalPerson}</div>, { borderTop: true, bg: "#f2f9f8" }))}

          {rowLabel("디지털 공동체", "도전 받치는 안전망", "#0d7d72")}
          {lifeStages.map((s, i) => cell(`dc-${s.stage}`, <>
            <div style={{ fontSize: 10.1, fontWeight: 900, color: "#0d7d72", marginBottom: 4 }}>{s.digitalCommunity}</div>
            <div style={{ fontSize: 9.6, fontWeight: 650, color: "#2f6f68", lineHeight: 1.3 }}>{s.digitalFeature}</div>
          </>, { borderTop: true, bg: "#eef7f6" }))}
        </div>

        {/* 최하단 — 디지털 시대 6공동체 시설·조직 */}
        <ReshapeCards data={communityReshape} headBg={C.ink} facilityBg="#eef7f6" facilityLabel="핵심 시설" facilityHead="#0d7d72" facilityText="#0f5e57" orgLabelColor={C.muted} />
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
