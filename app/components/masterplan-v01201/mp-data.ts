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
  digitalPerson: PersonTier;
};

export const lifeStages: LifeStage[] = [
  {
    stage: "태아+영아",
    process: "단서 드러남",
    indTags: ["가정", "국가"],
    digTags: ["가정", "국가"],
    digitalPerson: {
      trait: "모든 가능성을 지닌 출생",
      lead: "일찍 풍부하게 읽히는 단서", pro: "비교적 선명하게 읽히는 단서", ama: "단편적으로만 읽히는 단서", margin: "데이터·관찰의 사각지대",
      leadN: "단서 기록·해석", proN: "단서 기록·해석", amaN: "세심한 관찰 손길", marginN: "기초 돌봄·접근 보장",
      leadC: ["가정"], proC: ["가정"], amaC: ["가정", "이웃"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "유아+아동기",
    process: "발견 · 실험",
    indTags: ["가정", "도시"],
    digTags: ["가정", "이웃", "마을"],
    digitalPerson: {
      trait: "다양한 체험을 통한 단서 확인",
      lead: "폭넓은 체험으로 또렷해진 강점", pro: "꾸준한 관심 분야 탐색", ama: "제한적인 체험 기회", margin: "발견을 도울 환경의 부재",
      leadN: "체험 폭 확장", proN: "관심 탐색 지원", amaN: "체험 기회 제공", marginN: "발견 환경 보완",
      leadC: ["이웃", "마을"], proC: ["가정", "이웃"], amaC: ["가정", "이웃"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "청소년기",
    process: "훈련 · 방향 정함",
    indTags: ["도시"],
    digTags: ["마을", "도시"],
    digitalPerson: {
      trait: "기여 큰 정체성의 선정·훈련",
      lead: "강점 집중 훈련을 통한 두각", pro: "방향을 정한 꾸준한 단련", ama: "제한적인 훈련 기회", margin: "훈련 경로의 단절",
      leadN: "심화 훈련 경로", proN: "훈련·멘토 연결", amaN: "훈련 기회 확대", marginN: "이탈 방지·재진입",
      leadC: ["마을", "도시"], proC: ["마을"], amaC: ["마을", "이웃"], marginC: ["마을", "국가"],
    },
  },
  {
    stage: "청년기",
    process: "발휘",
    indTags: ["도시"],
    digTags: ["도시", "세계"],
    digitalPerson: {
      trait: "정체성의 실제 기여 발휘",
      lead: "창업·전문직의 영향력 발휘", pro: "전문 영역의 기여 정착", ama: "산발적인 기여 기회", margin: "발휘 무대의 부재",
      leadN: "넓은 발휘 무대", proN: "기여 정착 기반", amaN: "기여 기회 연결", marginN: "진입 장벽 완화",
      leadC: ["도시", "세계"], proC: ["도시"], amaC: ["마을", "도시"], marginC: ["도시", "국가"],
    },
  },
  {
    stage: "중장년기",
    process: "재설계 · 확장",
    indTags: ["도시", "국가"],
    digTags: ["가정", "도시", "국가"],
    digitalPerson: {
      trait: "정체성의 재설계·확장",
      lead: "경험·데이터를 통한 영향력 확장", pro: "기여 방식의 갱신·심화", ama: "부족한 재학습 기회", margin: "전환 지원에서 소외",
      leadN: "확장 무대·협업", proN: "재학습·갱신", amaN: "재학습 접근", marginN: "전환기 보호",
      leadC: ["도시", "세계"], proC: ["도시", "마을"], amaC: ["마을", "도시"], marginC: ["가정", "국가"],
    },
  },
  {
    stage: "노년기",
    process: "전수 · 연결",
    indTags: ["국가"],
    digTags: ["가정", "이웃", "마을"],
    digitalPerson: {
      trait: "정체성의 전수·연결",
      lead: "멘토·자문을 통한 세대 연결", pro: "후속 세대로의 경험 전수", ama: "제한적인 전수 기회", margin: "역할 없는 단절",
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
