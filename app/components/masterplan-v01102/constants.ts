/* ============================================================
   v0.11.2 "EDITORIAL" 디자인 시스템
   순백 배경 + 딥 네이비 주도 액센트 + 잉크 블랙 보조
   - 화이트 베이스, 딥 네이비(#16243d) 시그니처 액센트, 잉크 블랙 보조
   - 산세리프(Pretendard) 강한 위계, 넉넉한 여백, 가는 룰선
   ============================================================ */
export const C = {
  // 잉크 계열 (구조) — 차콜
  ink: "#1a1a1a",       // 가장 짙은 잉크 (헤더 텍스트/룰)
  navy: "#22262e",      // 기본 차콜 (표 헤더 등)
  navySoft: "#3c424d",  // 부드러운 차콜
  body: "#2d3138",      // 본문 텍스트
  muted: "#6b7280",     // 캡션/보조
  faint: "#9aa1ab",     // 아주 옅은 보조

  // 단일 강조 (딥 네이비 시그니처)
  accent: "#16243d",        // 딥 네이비
  accentDeep: "#1a1a1a",    // 잉크 블랙 (더 강한 포인트 보조)
  accentSoft: "#eef1f6",    // 아주 옅은 네이비 배경
  gold: "#16243d",          // (레거시) 네이비로 대체
  goldSoft: "#eef1f6",

  // 배경/라인
  page: "#ffffff",
  bg: "#f7f8f9",
  panel: "#f1f2f4",
  cardBg: "#ffffff",
  cardBorder: "#dcdee2",
  line: "#d7d9dd",
  hairline: "#e8e9ec",

  // 보조 강조 (제한적 사용)
  teal: "#1a2b4a",
  tealSoft: "#eef1f6",
  amber: "#3c424d",
  amberSoft: "#eef1f6",
  rose: "#16243d",
  roseSoft: "#eef1f6",
  green: "#1a2b4a",

  // 레거시 호환 (키 유지 — 값만 새 팔레트로 매핑)
  dark: "#1a1a1a",
  gray: "#22262e",
  light: "#6b7280",
  red: "#16243d",
  blue: "#16243d",
  purple: "#1a1a1a",
  subtext: "#6b7280",
  cardHead: "#f1f2f4",
  leadBlue: "#eef1f6",
  highlightBg: "#eef1f6",
  navyDeep: "#1a1a1a",
};
