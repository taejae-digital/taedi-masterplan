import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

export function IndividualCommunityPage() {
  // 6단계 공동체 색 — 가정→세계 초록→파랑 그라데이션 보간
  const COMM_ORDER = ["가정", "이웃", "마을", "도시", "국가", "세계"];
  const GRAD_START = [0x2f, 0x9e, 0x6b]; // 가정: 초록
  const GRAD_END = [0x2f, 0x5e, 0xb0];   // 세계: 파랑
  const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
  const gradAt = (t: number) => `rgb(${lerp(GRAD_START[0], GRAD_END[0], t)}, ${lerp(GRAD_START[1], GRAD_END[1], t)}, ${lerp(GRAD_START[2], GRAD_END[2], t)})`;
  const COMM: Record<string, string> = COMM_ORDER.reduce((acc, unit, i) => {
    acc[unit] = gradAt(i / (COMM_ORDER.length - 1));
    return acc;
  }, {} as Record<string, string>);
  // 카드별 그라데이션: 6칸이 이어지면 하나의 매끄러운 노랑→파랑 띠
  const cardGrad = (unit: string) => {
    const i = COMM_ORDER.indexOf(unit);
    const n = COMM_ORDER.length - 1;
    const t0 = Math.max(0, (i - 0.5) / n);
    const t1 = Math.min(1, (i + 0.5) / n);
    return `linear-gradient(90deg, ${gradAt(t0)}, ${gradAt(t1)})`;
  };

  // industrialPerson/digitalPerson: 문자열이면 한 줄, 객체면 리더·프로·아마·소외 4계층 분기
  const lifeStages = [
    {
      stage: "태아+영아",
      need: "돌봄/보호 · 관찰",
      industrialCommunity: "가정 · 병원",
      industrialFeature: "가정이 양육을, 국가가 의료·보건을 맡는다",
      indTags: ["가정", "국가"],
      digTags: ["가정", "국가"],
      industrialPerson: { trait: "가정 환경이 정하는 출발선", lead: "양육·의료 자원이 풍부한 가정", pro: "기본 돌봄이 안정된 가정", ama: "돌봄 공백이 잦은 가정", margin: "의료·보호에서 소외된 가정" },
      digitalPerson: { trait: "모든 가능성을 지닌 출생", lead: "일찍 풍부하게 읽히는 단서", pro: "비교적 선명하게 읽히는 단서", ama: "단편적으로만 읽히는 단서", margin: "데이터·관찰의 사각지대" },
      digitalCommunity: "가정 · 의료 · 돌봄",
      digitalFeature: "가정이 돌봄을, 의료가 정체성 단서 분석을 지원한다",
    },
    {
      stage: "유아+아동기",
      need: "발견 · 실험",
      industrialCommunity: "가정 · 학교 · 학원",
      industrialFeature: "가정이 보육을, 학교가 표준 교육을 맡는다",
      indTags: ["가정", "도시"],
      digTags: ["가정", "이웃"],
      industrialPerson: { trait: "조기교육·사교육이 만드는 격차", lead: "사교육·선행학습이 풍부", pro: "표준 교육에 충실", ama: "교육 자원이 부족", margin: "기초 보육·교육에서 이탈" },
      digitalPerson: { trait: "다양한 체험을 통한 단서 확인", lead: "폭넓은 체험으로 또렷해진 강점", pro: "꾸준한 관심 분야 탐색", ama: "제한적인 체험 기회", margin: "발견을 도울 환경의 부재" },
      digitalCommunity: "가정 · 이웃 · 마을",
      digitalFeature: "가정·이웃·마을이 다양한 체험과 발견을 돕는다",
    },
    {
      stage: "청소년기",
      need: "훈련 · 방향 확정",
      industrialCommunity: "학교 · 학원 · 시험",
      industrialFeature: "학교가 입시를, 도시가 진학 경로를 제공한다",
      indTags: ["도시"],
      digTags: ["마을", "도시"],
      industrialPerson: { trait: "입시 성적이 가르는 진로", lead: "상위권 성적의 명문대 진학", pro: "중상위권의 대학 진학", ama: "성적 경쟁에서 밀려남", margin: "진학 경로에서 탈락" },
      digitalPerson: { trait: "기여 큰 정체성의 선정·훈련", lead: "강점 집중 훈련을 통한 두각", pro: "방향을 정한 꾸준한 단련", ama: "제한적인 훈련 기회", margin: "훈련 경로의 단절" },
      digitalCommunity: "마을 · 학교 · 멘토",
      digitalFeature: "마을·학교·멘토가 정체성 훈련을 함께한다",
    },
    {
      stage: "청년기",
      need: "발휘 · 인정",
      industrialCommunity: "대학 · 회사",
      industrialFeature: "대학이 선발을, 기업이 일자리를 배분한다",
      indTags: ["도시"],
      digTags: ["도시"],
      industrialPerson: { trait: "학벌·취업이 정하는 위치", lead: "명문대·대기업 진입", pro: "정규직 노동시장 진입", ama: "불안정 고용에 머묾", margin: "취업시장에서 배제" },
      digitalPerson: { trait: "정체성의 실제 기여 발휘", lead: "창업·전문직의 영향력 발휘", pro: "전문 영역의 기여 정착", ama: "산발적인 기여 기회", margin: "발휘 무대의 부재" },
      digitalCommunity: "도시 · 일 경험 · 멘토",
      digitalFeature: "도시가 일 경험과 시장 진입을 연결한다",
    },
    {
      stage: "중장년기",
      need: "조정 · 재발휘",
      industrialCommunity: "회사 · 복지 · 의료",
      industrialFeature: "기업이 고용을, 국가가 복지를 관리한다",
      indTags: ["도시", "국가"],
      digTags: ["가정", "도시", "국가"],
      industrialPerson: { trait: "직위·고용 안정성의 분화", lead: "관리직·고소득의 안정", pro: "고용 유지와 경력 축적", ama: "고용 불안에 노출", margin: "실직·경력 단절" },
      digitalPerson: { trait: "정체성의 재설계·확장", lead: "경험·데이터를 통한 영향력 확장", pro: "기여 방식의 갱신·심화", ama: "부족한 재학습 기회", margin: "전환 지원에서 소외" },
      digitalCommunity: "가정 · 마을 · 도시 · 의료",
      digitalFeature: "가정·도시·의료가 재학습과 건강을 받친다",
    },
    {
      stage: "노년기",
      need: "보호 · 조정 · 재구성",
      industrialCommunity: "요양원 · 병원",
      industrialFeature: "국가가 요양·의료 시설로 노년을 수용한다",
      indTags: ["국가"],
      digTags: ["가정", "이웃", "마을"],
      industrialPerson: { trait: "은퇴 후 자산·건강의 좌우", lead: "자산·건강으로 여유로운 노년", pro: "연금을 통한 생활 유지", ama: "부족한 노후 준비", margin: "빈곤·고립에 방치" },
      digitalPerson: { trait: "정체성의 전수·연결", lead: "멘토·자문을 통한 세대 연결", pro: "후속 세대로의 경험 전수", ama: "제한적인 전수 기회", margin: "역할 없는 단절" },
      digitalCommunity: "가정 · 이웃 · 돌봄",
      digitalFeature: "가정·이웃이 멘토링과 세대 연결을 돕는다",
    },
  ];

  const communityReshape = [
    { unit: "가정", role: "정체성 단서를 가장 먼저 읽는 생활 기반", facility: "돌봄/보호 · 정체성 관찰", org: "초기 신호 기록 · 가족 대화 · 생활 리듬 조정" },
    { unit: "이웃", role: "정체성을 실험할 관계를 여는 일상망", facility: "관계 실험 · 흥미 발견 · 상호 돌봄", org: "관심 기반 모임 · 생활 멘토 · 돌봄 품앗이" },
    { unit: "마을", role: "발견된 방향을 훈련으로 잇는 생활권", facility: "정체성 훈련 · 전환 지원 · 보호", org: "훈련경로 설계 · 마을 멘토단 · 통합 돌봄" },
    { unit: "도시", role: "정체성을 실제 기여로 발휘하는 환경", facility: "기여 발휘 · 프로젝트 실험 · 이동성", org: "프로젝트 연결 · 직무 전환 · 생활 조정" },
    { unit: "국가", role: "발휘 조건을 보장하고 위험을 조정하는 안전망", facility: "기본 조건 보장 · 위험 조정", org: "전환기 보호 · 학습 접근 · 기여 조건 조정" },
    { unit: "세계", role: "정체성 발휘 무대를 넓히는 연결 질서", facility: "국경 넘는 발휘 · 협력 · 인정", org: "글로벌 협업 규칙 · 공동위험 조정 · 이동성 보장" },
  ];

  const industrialReshape = [
    { unit: "가정", role: "양육·부양을 맡되 표준 교육에 위임", facility: "주거·양육 가정", org: "부모 부양 · 사교육 의존 · 보육 위탁" },
    { unit: "이웃", role: "역할이 약화·해체된 관계망", facility: "(약화) 행정 반·통", org: "생활 기능 약화 · 공동 돌봄 기능 소멸" },
    { unit: "마을", role: "생활공동체 기능이 도시로 흡수됨", facility: "(약화) 행정 동·면", org: "전통 마을 해체 · 자치 기능 약화" },
    { unit: "도시", role: "학교·회사·노동을 집적한 대도시", facility: "표준 학교 · 기업·공장 · 신도시", org: "입시 경쟁 · 정규 고용 · 주거·교통 집중" },
    { unit: "국가", role: "표준 제도·복지·고용을 중앙 관리", facility: "중앙 정부·공공기관 · 복지·요양 시설", org: "표준 교육·복지·고용 정책 · 중앙 통제" },
    { unit: "세계", role: "역할이 제한적인 국제질서", facility: "(제한) 국제기구", org: "국가 간 협정 위주 · 개인엔 닿지 않음" },
  ];

  const rowLabel = (title: string, sub: string, bg: string, color = "#fff") => (
    <div style={{ background: bg, color, padding: "8px 7px", fontSize: 10.4, fontWeight: 900, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.22 }}>
      <div>{title}</div>
      <div style={{ marginTop: 3, fontSize: 8.4, fontWeight: 700, opacity: 0.78 }}>{sub}</div>
    </div>
  );

  const cell = (key: string, children: React.ReactNode, opts: { bg?: string; borderTop?: boolean } = {}) => (
    <div key={key} style={{ padding: "5px 7px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: opts.borderTop ? `1px solid ${C.cardBorder}` : undefined, background: opts.bg || "#fff", minHeight: 84, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {children}
    </div>
  );

  function ReshapeCards({ data, era }: {
    data: { unit: string; role: string; facility: string; org: string }[];
    era: string;
  }) {
    return (
      <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
        <div style={{ flexShrink: 0, width: 30, background: "#6b7280", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ color: "#fff", fontSize: 13, fontWeight: 900, letterSpacing: 2, writingMode: "vertical-rl", textOrientation: "upright" }}>{era}</div>
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {data.map((c) => {
            const cc = COMM[c.unit] || "#6b7280";
            return (
            <div key={c.unit} style={{ border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ background: cardGrad(c.unit), color: "#fff", padding: "7px 9px", textAlign: "center", letterSpacing: -0.3 }}>
                <div style={{ fontSize: 13.5, fontWeight: 900 }}>{c.unit}</div>
                <div style={{ fontSize: 8.6, fontWeight: 600, opacity: 0.86, marginTop: 2, lineHeight: 1.25 }}>{c.role}</div>
              </div>
              <div style={{ padding: "8px 11px", background: "#f4f5f7", borderBottom: `1px solid ${C.cardBorder}` }}>
                <div style={{ fontSize: 8.6, fontWeight: 900, color: "#6b7280", letterSpacing: 0.3, marginBottom: 3 }}>주된 기능</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#3a4250", lineHeight: 1.34 }}>{c.facility}</div>
              </div>
              <div style={{ padding: "8px 11px 9px", flex: 1 }}>
                <div style={{ fontSize: 8.6, fontWeight: 900, color: C.faint, letterSpacing: 0.3, marginBottom: 3 }}>운영 방식</div>
                <div style={{ fontSize: 10.2, fontWeight: 600, color: C.body, lineHeight: 1.42 }}>{c.org}</div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 기능 → 6공동체 연결 배지 (배지마다 공동체 그라데이션 색)
  const commTagRow = (tags: string[]) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 5 }}>
      {tags.map((t) => (
        <span key={t} style={{ fontSize: 9.2, fontWeight: 900, color: "#fff", background: COMM[t] || "#6b7280", padding: "1px 7px", borderRadius: 8, letterSpacing: 0.2 }}>{t}</span>
      ))}
    </div>
  );

  // 개인 셀: 문자열이면 한 줄, 객체면 리더·프로·아마·소외 4계층 분기
  type PersonValue = string | { trait: string; lead: string; pro: string; ama: string; margin: string };
  const CLASS_ROWS: { key: "lead" | "pro" | "ama" | "margin"; label: string; color: string }[] = [
    { key: "lead", label: "리더", color: "#1f3a5f" },
    { key: "pro", label: "프로", color: "#2f6f8f" },
    { key: "ama", label: "아마", color: "#7a8a52" },
    { key: "margin", label: "소외", color: "#9a6a4a" },
  ];
  const personCell = (key: string, value: PersonValue, oneLineStyle: React.CSSProperties, bg: string) => {
    if (typeof value === "string") {
      return cell(key, <div style={oneLineStyle}>{value}</div>, { borderTop: true, bg });
    }
    return cell(key, (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 10.6, fontWeight: 900, color: C.ink, lineHeight: 1.26, paddingBottom: 3, borderBottom: `1px solid ${C.cardBorder}` }}>{value.trait}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {CLASS_ROWS.map((r) => (
            <div key={r.key} style={{ display: "flex", alignItems: "flex-start", gap: 5 }}>
              <span style={{ flexShrink: 0, width: 4, alignSelf: "stretch", background: r.color, borderRadius: 2, marginTop: 1, marginBottom: 1 }} />
              <span style={{ fontSize: 9.4, fontWeight: 650, color: C.muted, lineHeight: 1.24 }}>{value[r.key]}</span>
            </div>
          ))}
        </div>
      </div>
    ), { borderTop: true, bg });
  };

  // 개인 행 라벨 — 4계층 범례를 한 번만 표시
  const personRowLabel = (title: string, sub: string) => (
    <div style={{ background: "#6b7280", color: "#fff", padding: "8px 6px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
      <div style={{ fontSize: 10.4, fontWeight: 900, lineHeight: 1.2 }}>{title}</div>
      <div style={{ marginTop: 2, fontSize: 8, fontWeight: 700, opacity: 0.8, lineHeight: 1.2 }}>{sub}</div>
      <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 2.5, alignItems: "flex-start" }}>
        {CLASS_ROWS.map((r) => (
          <div key={r.key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: r.color, flexShrink: 0 }} />
            <span style={{ fontSize: 8.2, fontWeight: 800 }}>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 8px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.45 }}>개인은 표준 경로를 따르는 존재에서 자기 삶을 구성하는 주체로 바뀐다.</div>
        <div style={{ marginTop: 4, fontSize: 12.2, lineHeight: 1.36, color: C.muted, fontWeight: 500 }}>공동체는 개인을 통제·배치하는 제도에서, 정체성 발견·실험·훈련·발휘·돌봄/보호·조정을 지원하고 연결하는 생활 인프라로 바뀐다.</div>
      </div>

      <div style={{ padding: "10px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "space-between" }}>
        {/* 최상단 — 산업화 시대: 개인을 표준 경로에 배치하는 공동체 */}
        <div style={{ fontSize: 11.4, fontWeight: 550, color: C.muted, lineHeight: 1.25, letterSpacing: -0.15 }}><span style={{ color: C.ink, fontWeight: 900 }}>분업의 산업화 시대</span>에는 교육·고용·복지의 표준 필요를 처리하기 위해 개인이 가정-학교-회사-국가복지 경로에 배치되었다.</div>
        <ReshapeCards data={industrialReshape} era="산업화" />

        {/* 중간 — 생애 단계 타임라인 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontWeight: 900, color: C.ink }}>개인의 네 위치 — <span style={{ color: "#1f3a5f" }}>리더</span> · <span style={{ color: "#2f6f8f" }}>프로</span> · <span style={{ color: "#7a8a52" }}>아마추어</span> · <span style={{ color: "#9a6a4a" }}>소외</span></span>
          <span style={{ fontSize: 10, fontWeight: 600, color: C.muted }}>개인 행은 시대별 <b style={{ color: C.ink }}>4계층 구분 기준</b>을 제시한다.</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "86px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden" }}>
          {rowLabel("산업화 공동체", "표준 경로에 배치", "#4b5563")}
          {lifeStages.map((s, i) => cell(`ic-${s.stage}`, <>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, lineHeight: 1.3 }}>{s.industrialFeature}</div>
            <div style={{ marginTop: 4, marginBottom: 1 }} />
            {commTagRow(s.indTags)}
          </>, { bg: "#f4f5f7" }))}

          {rowLabel("산업화 개인", "특징 · 4계층 기준", "#6b7280")}
          {lifeStages.map((s, i) => personCell(`ip-${s.stage}`, s.industrialPerson, { fontSize: 11.5, fontWeight: 650, color: C.muted, lineHeight: 1.36 }, "#fafbfc"))}

          {rowLabel("삶의 단계", "정체성 과정", "#1f2430")}
          {lifeStages.map((s, i) => cell(`life-${s.stage}`, <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ position: "absolute", left: -9, right: -9, top: 15, height: 2, background: C.line }} />
            <div style={{ position: "relative", zIndex: 1, width: 30, height: 30, borderRadius: 15, background: "#4b5563", color: "#fff", fontSize: 12, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>{i + 1}</div>
            <div style={{ position: "relative", zIndex: 1, fontSize: 10.4, fontWeight: 900, color: C.ink, letterSpacing: -0.25 }}>{s.stage}</div>
            <div style={{ position: "relative", zIndex: 1, marginTop: 3, fontSize: 9.2, fontWeight: 750, color: C.muted }}>{s.need}</div>
          </div>, { borderTop: true }))}

          {rowLabel("디지털 개인", "특징 · 4계층 기준", "#6b7280")}
          {lifeStages.map((s, i) => personCell(`dp-${s.stage}`, s.digitalPerson, { fontSize: 11.5, fontWeight: 700, color: C.muted, lineHeight: 1.36 }, "#fafbfc"))}

          {rowLabel("디지털 공동체", "과정 지원·연결", "#4b5563")}
          {lifeStages.map((s, i) => cell(`dc-${s.stage}`, <>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, lineHeight: 1.3 }}>{s.digitalFeature}</div>
            <div style={{ marginTop: 4, marginBottom: 1 }} />
            {commTagRow(s.digTags)}
          </>, { borderTop: true, bg: "#f4f5f7" }))}
        </div>

        {/* 최하단 — 디지털 시대: 개인의 생애주기별 필요를 지원·연결하는 공동체 */}
        <div style={{ fontSize: 11.4, fontWeight: 550, color: C.muted, lineHeight: 1.25, letterSpacing: -0.15 }}><span style={{ color: C.ink, fontWeight: 900 }}>정체성 연결의 디지털 시대</span>에는 개인이 가진 여러 강점 중 사회에 가장 크게 기여할 정체성을 찾아 훈련·발휘하도록 공동체가 생활권 인프라로 이를 지원·연결한다.</div>
        <ReshapeCards data={communityReshape} era="디지털" />
      </div>

      <div style={{ marginTop: 14 }} />
      <Footer version={VERSION} />
    </div>
  );
}
