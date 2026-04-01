export interface Threat {
  id: string;
  name: string;
  category: string;
  severity: number;
  timeline: string;
  control: "금지" | "승인" | "전환" | "구축";
  scenario: string;
}

export const categories = [
  { id: "existential", name: "실존적 위협", color: "#2d1b3d" },
  { id: "military", name: "군사·안보", color: "#1a2744" },
  { id: "social", name: "사회·정치", color: "#1a3a5c" },
  { id: "economic", name: "경제·노동", color: "#1a4a3a" },
  { id: "governance", name: "거버넌스", color: "#3a3a3a" },
];

export const controlColors: Record<string, string> = {
  금지: "#b91c1c",
  승인: "#d97706",
  전환: "#16a34a",
  구축: "#555555",
};

export const timelineOrder = ["임박", "진행중", "중기", "장기"];

export const threats: Threat[] = [
  // 실존적 위협
  { id: "bioweapon", name: "AI 생물무기", category: "existential", severity: 95, timeline: "임박", control: "금지", scenario: "AlphaFold류 AI로 비전문가도 병원체 설계 가능" },
  { id: "nuclear-ai", name: "핵AI화", category: "existential", severity: 92, timeline: "임박", control: "금지", scenario: "핵 지휘체계 AI 개입 → 인간 승인 없이 발사" },
  { id: "agi-alignment", name: "초지능 정렬 실패", category: "existential", severity: 85, timeline: "중기", control: "승인", scenario: "AGI가 인간 가치와 어긋난 목표를 자율 추구" },
  { id: "ai-loss", name: "AI 통제 상실", category: "existential", severity: 78, timeline: "진행중", control: "승인", scenario: "에이전트의 자율적 하위 목표 → 기만·권력추구" },

  // 군사·안보
  { id: "mil-asymmetry", name: "군사력 비대칭", category: "military", severity: 84, timeline: "임박", control: "금지", scenario: "AI가 전력 격차 극대화 → 저비용 전쟁 유혹 (이란)" },
  { id: "violence-demo", name: "폭력의 민주화", category: "military", severity: 80, timeline: "임박", control: "금지", scenario: "비국가 행위자도 폭력 수단 접근" },
  { id: "cyber-wmd", name: "사이버 WMD", category: "military", severity: 76, timeline: "임박", control: "금지", scenario: "AI가 인프라 취약점 자동 탐색 → 연쇄 붕괴" },
  { id: "drone-swarm", name: "자율 드론 군집", category: "military", severity: 70, timeline: "임박", control: "금지", scenario: "저비용 자율 드론 → 재래식 방어 무력화" },
  { id: "arms-race", name: "AI 군비 경쟁", category: "military", severity: 65, timeline: "진행중", control: "구축", scenario: "미중 AI 군사 경쟁 → 억지력 균형 파괴" },

  // 사회·정치
  { id: "surveillance", name: "감시·조작 체제", category: "social", severity: 74, timeline: "진행중", control: "승인", scenario: "개인별 맞춤 정보 조작 → 민주주의 침식" },
  { id: "deepfake", name: "딥페이크·허위정보", category: "social", severity: 68, timeline: "진행중", control: "승인", scenario: "실시간 영상·음성 합성 → 진위 판별 불가" },
  { id: "election", name: "선거 개입", category: "social", severity: 64, timeline: "진행중", control: "승인", scenario: "AI 생성 정치 콘텐츠 → 여론 조작" },
  { id: "algo-bias", name: "알고리즘 차별", category: "social", severity: 52, timeline: "진행중", control: "승인", scenario: "학습 데이터 편향 → 채용·대출·사법 차별 재생산" },
  { id: "privacy", name: "프라이버시 침해", category: "social", severity: 48, timeline: "진행중", control: "승인", scenario: "행동 예측을 넘어 행동 조작 가능한 데이터 축적" },
  { id: "overreliance", name: "AI 과의존", category: "social", severity: 42, timeline: "진행중", control: "승인", scenario: "판단을 AI에 위임 → 인간 역량 퇴화" },

  // 경제·노동
  { id: "mass-unemployment", name: "대량 실업", category: "economic", severity: 76, timeline: "중기", control: "전환", scenario: "프로 계층 53%→25% 축소 → 사회 불안정" },
  { id: "identity-crisis", name: "정체성 위기", category: "economic", severity: 72, timeline: "중기", control: "전환", scenario: "직업=정체성 붕괴 → 존재론적 위기" },
  { id: "bigtech-monopoly", name: "빅테크 독점", category: "economic", severity: 73, timeline: "중기", control: "전환", scenario: "CEO 10명이 80억 일상 설계" },
  { id: "wealth", name: "부의 극단적 집중", category: "economic", severity: 62, timeline: "중기", control: "전환", scenario: "상위 0.1%가 자산 40% 소유" },
  { id: "infra-monopoly", name: "AI 인프라 독점", category: "economic", severity: 58, timeline: "진행중", control: "전환", scenario: "컴퓨트·데이터·모델을 소수 기업 독점" },

  // 거버넌스
  { id: "gov-gap", name: "거버넌스 공백", category: "governance", severity: 68, timeline: "장기", control: "구축", scenario: "기술이 국경 초월 → 국가 단위 규제 무력" },
  { id: "reg-arbitrage", name: "규제 차익", category: "governance", severity: 55, timeline: "진행중", control: "구축", scenario: "최소 규제 국가로 기업 이탈" },
  { id: "intl-failure", name: "국제 협력 실패", category: "governance", severity: 60, timeline: "진행중", control: "구축", scenario: "미중 대립 → AI 규범 합의 불가" },
  { id: "digital-sovereignty", name: "디지털 주권 갈등", category: "governance", severity: 50, timeline: "중기", control: "구축", scenario: "데이터·AI 인프라 국경 갈등 → 기술 블록화" },
];
