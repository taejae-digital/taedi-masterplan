/* ============================================================
   "EDITORIAL MONO + COMMUNITY 6" 디자인 시스템
   ------------------------------------------------------------
   원칙: 무채색(블랙)이 구조의 뼈대. 컬러는 정보 전달이 필요한 곳에만.

   [1차 팔레트 = P2 6공동체 색 (단일 출처)]
     가정 home     #b9763f  테라코타
     이웃 neighbor #a8902f  올리브골드
     마을 village  #5a8a55  그린
     도시 city     #3f8580  청록
     국가 nation   #4f6d9e  블루
     세계 world    #6a5f9c  남보라
   P2(individual-community)와 mp-data의 COMM이 이 팔레트를 단일 출처로 참조한다.

   [의미 토큰 = 1차 팔레트의 별칭(alias)]
     accent (강조·전환 방향) → 도시 city  #3f8580
     gov    (거버넌스·국가)   → 국가 nation #4f6d9e
     self   (개인·정체성)     → 가정 home  #b9763f
   기존 코드(C.accent / C.gov / C.self / C.teal ...)는 그대로 동작한다.
   ============================================================ */

// 1차 팔레트 — P2 6공동체 색 (단일 출처)
export const COMMUNITY = {
  home: "#b9763f",     // 가정
  neighbor: "#a8902f", // 이웃
  village: "#5a8a55",  // 마을
  city: "#3f8580",     // 도시
  nation: "#4f6d9e",   // 국가
  world: "#6a5f9c",    // 세계
} as const;

export const C = {
  // 1차 팔레트 노출
  home: COMMUNITY.home,
  neighbor: COMMUNITY.neighbor,
  village: COMMUNITY.village,
  city: COMMUNITY.city,
  nation: COMMUNITY.nation,
  world: COMMUNITY.world,

  // 무채색 스케일 (구조)
  ink: "#0a0a0a",       // 최강조 — 헤더 텍스트/배경/룰
  navy: "#141414",      // 헤드라인·박스 배경
  navySoft: "#3a3a3a",  // 부드러운 잉크
  body: "#2b2b2b",      // 본문
  muted: "#6b7280",     // 캡션/보조
  faint: "#9aa1ab",     // 아주 옅은 보조

  // 의미 토큰 1 — 강조·전환 방향 (= 도시 청록)
  accent: COMMUNITY.city,
  accentSoft: "#e6efee",
  accentDeep: "#2f6864",

  // 의미 토큰 2 — 거버넌스 (= 국가 블루)
  gov: COMMUNITY.nation,
  govSoft: "#eef1f6",

  // 의미 토큰 3 — 개인·정체성 (= 가정 테라코타)
  self: COMMUNITY.home,
  selfSoft: "#f4ece2",

  // 배경/라인 (무채색)
  page: "#ffffff",
  bg: "#ffffff",
  panel: "#ffffff",
  cardBg: "#ffffff",
  cardBorder: "#d9d9d9",
  line: "#c9c9c9",
  hairline: "#e8e8e8",
  surface: "#f0f0f1",   // 은은한 채움 박스 (강조 박스 배경)

  // 레거시 키 호환 — 1차 팔레트/무채색으로 매핑 (잡색 금지)
  gold: "#0a0a0a",
  goldSoft: "#f2f2f2",
  teal: COMMUNITY.city,
  tealSoft: "#e6efee",
  amber: "#3a3a3a",
  amberSoft: "#f2f2f2",
  rose: "#0a0a0a",
  roseSoft: "#f2f2f2",
  green: COMMUNITY.city,
  dark: "#0a0a0a",
  gray: "#141414",
  light: "#6b7280",
  red: "#0a0a0a",
  blue: COMMUNITY.nation,
  purple: "#0a0a0a",
  subtext: "#6b7280",
  cardHead: "#ffffff",
  leadBlue: "#eef1f6",
  highlightBg: "#e6efee",
  navyDeep: "#0a0a0a",
};
