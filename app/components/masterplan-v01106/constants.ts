/* ============================================================
   v0.11.4 "EDITORIAL MONO + 3" 디자인 시스템
   ------------------------------------------------------------
   원칙: 최대한 블랙(무채색). 컬러는 정보 전달이 필요한 곳에만.
   컬러는 단 3색 — 각각 고정된 의미를 가진다.

   [무채색 = 구조] 헤드라인·헤더배경·테두리·번호칩·본문 위계.
       의미 없음. 문서의 뼈대.

   [컬러 3색 = 정보]
     1) accent (Teal  #0d7d72) — "디지털 시대 / 새 질서 / 전환의 방향".
        지향점·핵심 선언·전환 강조. 구조에는 쓰지 않는다.
     2) gov    (Slate #2f5fa8) — "구조·제도·거버넌스 / 세계·국가·정치".
     3) self   (Sand  #b08322) — "개인·정체성·발견 / 가정·개인 출발점".

   색을 칠하기 전 자문: "이 색이 어떤 정보를 전달하는가?"
   답이 없으면 → 블랙.
   ============================================================ */
export const C = {
  // 무채색 스케일 (구조)
  ink: "#0a0a0a",       // 최강조 — 헤더 텍스트/배경/룰
  navy: "#141414",      // 헤드라인·박스 배경
  navySoft: "#3a3a3a",  // 부드러운 잉크
  body: "#2b2b2b",      // 본문
  muted: "#6b7280",     // 캡션/보조
  faint: "#9aa1ab",     // 아주 옅은 보조

  // 컬러 1 — 방향 강조 (Teal)
  accent: "#0d7d72",
  accentSoft: "#e8f3f1",
  accentDeep: "#0a5a52",

  // 컬러 2 — 거버넌스 (Slate Blue)
  gov: "#2f5fa8",
  govSoft: "#eaf0f9",

  // 컬러 3 — 개인·정체성 (Warm Sand)
  self: "#b08322",
  selfSoft: "#f6efdf",

  // 배경/라인 (무채색)
  page: "#ffffff",
  bg: "#ffffff",
  panel: "#ffffff",
  cardBg: "#ffffff",
  cardBorder: "#d9d9d9",
  line: "#c9c9c9",
  hairline: "#e8e8e8",
  surface: "#f0f0f1",   // 은은한 채움 박스 (강조 박스 배경)

  // 레거시 키 호환 — 전부 무채색/3색 중 하나로 매핑 (잡색 금지)
  gold: "#0a0a0a",
  goldSoft: "#f2f2f2",
  teal: "#0d7d72",
  tealSoft: "#e8f3f1",
  amber: "#3a3a3a",
  amberSoft: "#f2f2f2",
  rose: "#0a0a0a",
  roseSoft: "#f2f2f2",
  green: "#0d7d72",
  dark: "#0a0a0a",
  gray: "#141414",
  light: "#6b7280",
  red: "#0a0a0a",
  blue: "#2f5fa8",
  purple: "#0a0a0a",
  subtext: "#6b7280",
  cardHead: "#ffffff",
  leadBlue: "#eaf0f9",
  highlightBg: "#e8f3f1",
  navyDeep: "#0a0a0a",
};
