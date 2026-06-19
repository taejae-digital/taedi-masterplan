// P2 공유 데이터 — 개인 축(P2-a)과 공동체 축(P2-b)이 함께 사용

// 6단계 공동체 색 — 가정→세계 초록→파랑 그라데이션 보간
export const COMM_ORDER = ["가정", "이웃", "마을", "도시", "국가", "세계"];
const GRAD_START = [0x2f, 0x9e, 0x6b]; // 가정: 초록
const GRAD_END = [0x2f, 0x5e, 0xb0]; // 세계: 파랑
const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
export const gradAt = (t: number) =>
  `rgb(${lerp(GRAD_START[0], GRAD_END[0], t)}, ${lerp(GRAD_START[1], GRAD_END[1], t)}, ${lerp(GRAD_START[2], GRAD_END[2], t)})`;
export const COMM: Record<string, string> = COMM_ORDER.reduce((acc, unit, i) => {
  acc[unit] = gradAt(i / (COMM_ORDER.length - 1));
  return acc;
}, {} as Record<string, string>);
export const cardGrad = (unit: string) => {
  const i = COMM_ORDER.indexOf(unit);
  const n = COMM_ORDER.length - 1;
  const t0 = Math.max(0, (i - 0.5) / n);
  const t1 = Math.min(1, (i + 0.5) / n);
  return `linear-gradient(90deg, ${gradAt(t0)}, ${gradAt(t1)})`;
};

// ── P2-a 개인 축: 생애주기 6단계 × 4계층 ──
export type PersonTier = {
  trait: string;
  lead: string; pro: string; ama: string; margin: string; // 계층 상태
  leadN: string; proN: string; amaN: string; marginN: string; // 계층별 필요 기능
  leadC: string[]; proC: string[]; amaC: string[]; marginC: string[]; // 계층별 연결 공동체
};

export type LifeStage = {
  stage: string;
  process: string; // 정체성 과정(능동 관점)
  indTags: string[];
  digTags: string[];
  ind: { lead: string; pro: string; ama: string; margin: string }; // 산업화 시대 개인 상태
  digitalPerson: PersonTier;
};

export const lifeStages: LifeStage[] = [
  {
    stage: "태아+영아",
    process: "단서 드러남",
    indTags: ["가정", "국가"],
    digTags: ["가정", "국가"],
    ind: {
      lead: "여유 있는 가정에서 양질의 양육·의료를 받지만, 타고난 기질은 관찰되지 않은 채 표준 발달 기준에만 맞춰진다.",
      pro: "기본 돌봄은 안정적이나, 아이 고유의 신호보다 또래 평균 발달표가 양육의 기준이 된다.",
      ama: "맞벌이·돌봄 공백으로 세심한 관찰이 어렵고, 발달 지연이 늦게 발견된다.",
      margin: "의료·보호 사각지대에서 기본 건강·안전조차 보장받기 어렵다.",
    },
    digitalPerson: {
      trait: "모든 가능성을 지니고 태어난다",
      lead: "생체·행동 데이터로 기질과 강점의 단서가 일찍 풍부하게 읽혀 가정이 함께 기록한다.",
      pro: "정기 관찰로 관심·반응의 단서가 비교적 선명하게 잡혀 발달을 맞춤 지원한다.",
      ama: "데이터가 단편적이어도 이웃·돌봄망이 관찰 손길을 보태 공백을 메운다.",
      margin: "데이터·관찰이 닿지 않는 아이를 국가가 먼저 찾아 기초 돌봄과 접근을 보장한다.",
      leadN: "단서 기록·해석", proN: "발달 맞춤 지원", amaN: "관찰 손길 보강", marginN: "기초 돌봄·접근 보장",
      leadC: ["가정"], proC: ["가정"], amaC: ["가정", "이웃"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "유아+아동기",
    process: "발견 · 실험",
    indTags: ["가정", "도시"],
    digTags: ["가정", "이웃", "마을"],
    ind: {
      lead: "사교육·선행학습을 풍부히 받지만, 정해진 커리큘럼을 앞당겨 익힐 뿐 자기 관심을 탐색할 여백은 적다.",
      pro: "표준 교육과정을 충실히 따라가며, 성적으로 환산되는 능력 위주로 길러진다.",
      ama: "교육 자원이 부족해 다양한 경험의 기회가 좁고, 흥미를 펼쳐볼 통로가 막힌다.",
      margin: "기초 보육·교육에서 이탈해 또래가 밟는 출발선에조차 서지 못한다.",
    },
    digitalPerson: {
      trait: "여러 강점의 단서를 체험으로 확인한다",
      lead: "이웃·마을의 폭넓은 체험 속에서 강점이 또렷해지고, 좋아하는 것을 마음껏 실험한다.",
      pro: "가정·이웃이 관심 분야를 꾸준히 탐색하도록 도와 흥미가 방향으로 자란다.",
      ama: "체험 기회가 제한적이어도 마을이 공동 프로그램으로 발견의 장을 넓혀준다.",
      margin: "발견을 도울 환경이 없는 아이에게 국가·마을이 체험과 돌봄을 먼저 채운다.",
      leadN: "체험 폭 확장", proN: "관심 탐색 지원", amaN: "체험 기회 제공", marginN: "발견 환경 보완",
      leadC: ["이웃", "마을"], proC: ["가정", "이웃"], amaC: ["가정", "이웃"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "청소년기",
    process: "훈련 · 방향 정함",
    indTags: ["도시"],
    digTags: ["마을", "도시"],
    ind: {
      lead: "상위권 성적으로 명문대를 향하지만, 적성과 무관하게 입시 한 줄에 모든 역량을 쏟는다.",
      pro: "중상위권을 유지하며 대학에 진학하나, 진짜 강점이 무엇인지 물을 기회 없이 점수로 진로가 정해진다.",
      ama: "성적 경쟁에서 밀려 '못하는 학생'으로 분류되고, 다른 재능은 끝내 훈련받지 못한다.",
      margin: "진학 경로에서 탈락하면 사회가 더 이상 길을 열어주지 않아 그대로 낙오한다.",
    },
    digitalPerson: {
      trait: "기여가 큰 강점을 골라 훈련한다",
      lead: "사회에 크게 기여할 강점을 선정해 마을·도시가 심화 훈련 경로로 집중 육성한다.",
      pro: "방향을 정해 멘토와 함께 꾸준히 단련하며, 한 길에 매이지 않고 강점을 키운다.",
      ama: "훈련 기회가 적어도 마을 멘토단이 진입로를 넓혀 누구나 단련받을 수 있게 한다.",
      margin: "훈련에서 단절된 청소년을 국가·마을이 다시 찾아 이탈을 막고 재진입시킨다.",
      leadN: "심화 훈련 경로", proN: "훈련·멘토 연결", amaN: "훈련 기회 확대", marginN: "이탈 방지·재진입",
      leadC: ["마을", "도시"], proC: ["마을"], amaC: ["마을", "이웃"], marginC: ["마을", "국가"],
    },
  },
  {
    stage: "청년기",
    process: "발휘",
    indTags: ["도시"],
    digTags: ["도시", "세계"],
    ind: {
      lead: "명문대·대기업에 진입해 인정받지만, 한 번의 학벌·취업 경쟁 결과가 평생 위치를 굳힌다.",
      pro: "정규직으로 노동시장에 들어가 조직이 정한 직무를 수행하며, 강점보다 자리에 맞춘다.",
      ama: "불안정 고용에 머물며 능력을 펼칠 안정된 무대를 얻지 못한다.",
      margin: "취업시장에서 배제되면 사회에 기여할 통로 자체가 닫힌다.",
    },
    digitalPerson: {
      trait: "강점을 실제 기여로 발휘한다",
      lead: "창업·전문직으로 도시와 세계 무대에서 영향력을 발휘하고, 실패해도 다시 도전한다.",
      pro: "전문 영역에서 기여를 정착시키며, 자리가 아니라 강점으로 평가받는다.",
      ama: "기여 기회가 흩어져 있어도 도시가 프로젝트로 연결해 발휘의 장을 연다.",
      margin: "발휘 무대가 없던 이에게 국가·도시가 진입 장벽을 낮춰 첫 기여를 잇는다.",
      leadN: "넓은 발휘 무대", proN: "기여 정착 기반", amaN: "기여 기회 연결", marginN: "진입 장벽 완화",
      leadC: ["도시", "세계"], proC: ["도시"], amaC: ["마을", "도시"], marginC: ["도시", "국가"],
    },
  },
  {
    stage: "중장년기",
    process: "재설계 · 확장",
    indTags: ["도시", "국가"],
    digTags: ["가정", "도시", "국가"],
    ind: {
      lead: "관리직·고소득으로 안정되지만, 한 직무에 묶여 새 강점으로 전환할 기회는 드물다.",
      pro: "고용을 유지하며 경력을 쌓으나, 기술 변화 앞에서 재학습 없이 버티기 어렵다.",
      ama: "고용 불안에 노출되어 경력 중단의 위험을 안고 살아간다.",
      margin: "실직·경력 단절이 곧 사회적 퇴출로 이어져 회복이 어렵다.",
    },
    digitalPerson: {
      trait: "강점을 재설계하고 확장한다",
      lead: "쌓인 경험과 데이터로 새 영역까지 영향력을 확장하고 세계와 협업한다.",
      pro: "기여 방식을 갱신·심화하며, 재학습으로 강점을 시대에 맞게 다시 벼린다.",
      ama: "재학습 기회가 부족해도 마을·도시가 접근로를 열어 전환을 돕는다.",
      margin: "전환에서 소외된 이를 국가·가정이 전환기 보호로 받쳐 다시 일어서게 한다.",
      leadN: "확장 무대·협업", proN: "재학습·갱신", amaN: "재학습 접근", marginN: "전환기 보호",
      leadC: ["도시", "세계"], proC: ["도시", "마을"], amaC: ["마을", "도시"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "노년기",
    process: "전수 · 연결",
    indTags: ["국가"],
    digTags: ["가정", "이웃", "마을"],
    ind: {
      lead: "자산·건강으로 여유로운 노년을 보내지만, 평생의 경험은 사회로 이어지지 못한 채 묻힌다.",
      pro: "연금으로 생활을 유지하나, 은퇴와 함께 역할이 사라져 '부양 대상'으로만 남는다.",
      ama: "노후 준비가 부족해 생계와 건강을 걱정하며 위축된 노년을 보낸다.",
      margin: "빈곤·고립에 방치되어 돌봄과 관계 모두에서 끊긴다.",
    },
    digitalPerson: {
      trait: "강점을 전수하고 세대를 연결한다",
      lead: "멘토·자문으로 마을·도시에서 후속 세대와 경험을 잇는 현역 전수자가 된다.",
      pro: "가정·마을을 통해 쌓은 경험을 다음 세대에 전하는 통로를 얻는다.",
      ama: "전수 기회가 적어도 이웃·가정이 역할을 연결해 관계 속에 머물게 한다.",
      margin: "단절될 위기의 노인을 가정·국가가 고립에서 건져 돌봄과 역할로 다시 잇는다.",
      leadN: "전수 무대 연결", proN: "전수 통로 제공", amaN: "역할 연결", marginN: "고립 방지·돌봄",
      leadC: ["마을", "도시"], proC: ["가정", "마을"], amaC: ["가정", "이웃"], marginC: ["가정", "국가"],
    },
  },
];

export const CLASS_ROWS: { key: "lead" | "pro" | "ama" | "margin"; label: string }[] = [
  { key: "lead", label: "리더" },
  { key: "pro", label: "프로" },
  { key: "ama", label: "아마" },
  { key: "margin", label: "소외" },
];

// ── P2-b 공동체 축: 6공동체 × 시대(산업화 before / 디지털 after) ──
export type CommunityShift = {
  unit: string;
  // 산업화 시대 (before)
  indRole: string;
  indFacility: string;
  indOrg: string;
  // 디지털 시대 (after)
  digRole: string;
  digFacility: string;
  digOrg: string;
  // 이 공동체가 답하는 개인의 필요
  answers: string;
};

export const communityShift: CommunityShift[] = [
  {
    unit: "가정",
    indRole: "양육·부양을 맡되 표준 교육에 위임",
    indFacility: "주거·양육 공간",
    indOrg: "부모 부양 · 사교육 의존 · 보육 위탁",
    digRole: "정체성 단서를 가장 먼저 읽는 생활 기반",
    digFacility: "돌봄/보호 · 정체성 관찰",
    digOrg: "초기 신호 기록 · 가족 대화 · 생활 리듬 조정",
    answers: "태아·영아의 단서 드러남, 노년의 전수·돌봄",
  },
  {
    unit: "이웃",
    indRole: "역할이 약화·해체된 관계망",
    indFacility: "(약화) 행정 반·통",
    indOrg: "생활 기능 약화 · 공동 돌봄 소멸",
    digRole: "정체성을 실험할 관계를 여는 일상망",
    digFacility: "관계 실험 · 흥미 발견 · 상호 돌봄",
    digOrg: "관심 기반 모임 · 생활 멘토 · 돌봄 품앗이",
    answers: "유아·아동의 발견·실험, 단절 계층의 재연결",
  },
  {
    unit: "마을",
    indRole: "생활공동체 기능이 도시로 흡수됨",
    indFacility: "(약화) 행정 동·면",
    indOrg: "전통 마을 해체 · 자치 기능 약화",
    digRole: "발견된 방향을 훈련으로 잇는 생활권",
    digFacility: "정체성 훈련 · 전환 지원 · 보호",
    digOrg: "훈련경로 설계 · 마을 멘토단 · 통합 돌봄",
    answers: "청소년의 훈련, 중장년의 재학습 접근",
  },
  {
    unit: "도시",
    indRole: "학교·회사·노동을 집적한 대도시",
    indFacility: "표준 학교 · 기업·공장 · 신도시",
    indOrg: "입시 경쟁 · 정규 고용 · 주거·교통 집중",
    digRole: "정체성을 실제 기여로 발휘하는 환경",
    digFacility: "기여 발휘 · 프로젝트 실험 · 이동성",
    digOrg: "프로젝트 연결 · 직무 전환 · 생활 조정",
    answers: "청년·중장년의 발휘, 리더·프로의 무대",
  },
  {
    unit: "국가",
    indRole: "표준 제도·복지·고용을 중앙 관리",
    indFacility: "중앙 정부·공공기관 · 복지·요양 시설",
    indOrg: "표준 교육·복지·고용 정책 · 중앙 통제",
    digRole: "발휘 조건을 보장하고 위험을 조정하는 안전망",
    digFacility: "기본 조건 보장 · 위험 조정",
    digOrg: "전환기 보호 · 학습 접근 · 기여 조건 조정",
    answers: "소외 계층의 보호·재진입, 전 단계 안전망",
  },
  {
    unit: "세계",
    indRole: "역할이 제한적인 국제질서",
    indFacility: "(제한) 국제기구",
    indOrg: "국가 간 협정 위주 · 개인엔 닿지 않음",
    digRole: "정체성 발휘 무대를 넓히는 연결 질서",
    digFacility: "국경 넘는 발휘 · 협력 · 인정",
    digOrg: "글로벌 협업 규칙 · 공동위험 조정 · 이동성 보장",
    answers: "청년·중장년 리더의 국경 넘는 발휘·인정",
  },
];
