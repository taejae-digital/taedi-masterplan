// P2 전용: 농업·산업화·디지털 3시대 × (개인 생애주기 / 6공동체)

export const ERAS = [
  { key: "agri", label: "농업 시대", tag: "생존", accent: "#8a6d3b",
    summary: "땅과 노동력이 곧 생존이라, 가족·마을이 노동·돌봄·교육을 함께 떠안는 자급 공동체가 만들어진다." },
  { key: "ind", label: "산업화 시대", tag: "분업", accent: "#3a3a3a",
    summary: "표준 교육으로 좋은 일자리를 얻는 것이 목표라, 학교·기업·국가가 인재를 한 줄로 세워 관리하는 공동체가 만들어진다." },
  { key: "dig", label: "디지털 시대", tag: "다양성", accent: "#0d7d72",
    summary: "저마다 다른 정체성을 발휘하는 것이 목표라, 생애 단계마다 필요한 공동체가 고유 기능을 나눠 맡는다." },
] as const;

export type Pill = { c: string; role: string };

export type EraPersonRow = {
  stage: string;
  agri: string; agriC: Pill[];
  ind: string; indC: Pill[];
  dig: string; digC: Pill[];
};

export const eraPerson: EraPersonRow[] = [
  {
    stage: "태아·영아",
    agri: "무사한 출산과 대를 이을 건강한 몸",
    agriC: [{ c: "가정", role: "출산·양육" }],
    ind: "안정된 양육과 표준 발달에 맞는 보살핌",
    indC: [{ c: "가정", role: "기초 양육" }, { c: "국가", role: "모자 보건" }],
    dig: "타고난 기질·강점의 단서를 일찍 읽어주기",
    digC: [{ c: "가정", role: "단서 관찰·기록" }],
  },
  {
    stage: "유아·아동",
    agri: "집안일·농사일을 익히며 자라는 것",
    agriC: [{ c: "가정", role: "일 가르침" }, { c: "마을", role: "또래 양육" }],
    ind: "취학 준비와 또래에 뒤지지 않는 기초 학력",
    indC: [{ c: "가정", role: "취학 준비" }, { c: "도시", role: "표준 학교" }],
    dig: "다양한 체험으로 좋아하는 것을 발견·실험",
    digC: [{ c: "이웃", role: "체험 기회" }, { c: "마을", role: "발견 프로그램" }],
  },
  {
    stage: "청소년",
    agri: "가업을 물려받을 기술과 노동력 습득",
    agriC: [{ c: "가정", role: "가업 전수" }, { c: "마을", role: "일손 단련" }],
    ind: "입시 경쟁에서 좋은 성적과 상급 학교 진학",
    indC: [{ c: "도시", role: "입시 학교" }],
    dig: "기여가 큰 강점을 골라 훈련하고 방향 정하기",
    digC: [{ c: "마을", role: "멘토·훈련" }, { c: "도시", role: "심화 경로" }],
  },
  {
    stage: "청년",
    agri: "물려받을 토지와 혼인으로 가정 형성",
    agriC: [{ c: "가정", role: "토지 상속" }, { c: "마을", role: "혼인 연결" }],
    ind: "좋은 직장 취업과 정규직 정착",
    indC: [{ c: "도시", role: "기업 일자리" }],
    dig: "정체성을 실제 기여로 발휘할 무대",
    digC: [{ c: "도시", role: "발휘 무대" }, { c: "세계", role: "넓은 시장" }],
  },
  {
    stage: "중장년",
    agri: "가문·토지를 지키고 자식에게 물려줌",
    agriC: [{ c: "가정", role: "가문 유지" }, { c: "마을", role: "자치 참여" }],
    ind: "고용 유지와 가족 부양, 사회적 지위",
    indC: [{ c: "도시", role: "고용 유지" }, { c: "국가", role: "지위·복지" }],
    dig: "강점을 재설계·확장하고 새 영역에 도전",
    digC: [{ c: "도시", role: "재학습·전환" }, { c: "세계", role: "확장 협업" }],
  },
  {
    stage: "노년",
    agri: "어른으로서 권위와 봉양받는 노후",
    agriC: [{ c: "가정", role: "봉양" }, { c: "마을", role: "어른 예우" }],
    ind: "은퇴 후 연금과 자식의 부양",
    indC: [{ c: "가정", role: "부양" }, { c: "국가", role: "연금·복지" }],
    dig: "경험을 다음 세대에 전수하고 세대를 연결",
    digC: [{ c: "이웃", role: "관계 유지" }, { c: "마을", role: "전수 무대" }],
  },
];

export type EraCommRow = { unit: string; agri: string; ind: string; dig: string };

export const eraComm: EraCommRow[] = [
  { unit: "가정", agri: "노동·양육·부양·교육을 모두 떠안은 생산 단위", ind: "양육·부양을 맡되 교육은 학교에 위임", dig: "정체성 단서를 가장 먼저 읽는 생활 기반" },
  { unit: "이웃", agri: "품앗이·두레로 노동과 돌봄을 함께한 관계망", ind: "표준 제도에 가려 생활 기능이 약해짐", dig: "정체성을 실험할 관계를 여는 일상망" },
  { unit: "마을", agri: "농지·관개·제사를 함께 운영한 자치 공동체", ind: "생활공동체 기능이 도시로 흡수됨", dig: "발견된 방향을 훈련으로 잇는 생활권" },
  { unit: "도시", agri: "행정·시장이 모인 제한적 중심지", ind: "학교·회사·노동을 집적해 줄 세우는 대도시", dig: "정체성을 실제 기여로 발휘하는 환경" },
  { unit: "국가", agri: "조세·부역·신분 질서를 관장", ind: "표준 교육·고용·복지로 인재를 한 줄로 관리", dig: "발휘 조건을 보장하고 위험을 조정하는 안전망" },
  { unit: "세계", agri: "교역·전쟁 외에는 닿지 않는 먼 질서", ind: "국가 간 협정 위주, 개인에겐 닿지 않음", dig: "국경 넘는 위험을 함께 관리하는 공동 질서" },
];
