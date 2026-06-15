import { C } from "./constants";

/* ============================================================
   v0.11.7 EDITORIAL REFINED — 공유 컴포넌트
   ------------------------------------------------------------
   화이트 헤더 + 잉크 룰 (다크 밴드·골드 취소, 2026-06-10)
   1. 타이포 위계 강화 — 제목/본문/캡션의 크기·굵기 대비
   2. 헤더 — 챕터번호 oversize 연회색 + 제목 + 우측 기관명 2줄
   3. 선 시스템 — 굵은 잉크 룰은 섹션 경계에만, 나머지 헤어라인
   4. 표 — 흰 헤더 + 하단 굵은 룰, 셀 패딩 확대
   ============================================================ */

/* 헤더 — 화이트, 상단 굵은 잉크 룰, oversize 연회색 챕터번호 */
export function Header({ subtitle, chapterNo, version = "v0.7" }: { subtitle: string; chapterNo?: string; version?: string }) {
  const title = subtitle.replace(/^\s*\d+\.\s*/, "");
  return (
    <div style={{ position: "relative", background: "#fff", color: C.ink, padding: "15px 48px 12px", overflow: "hidden", borderTop: `5px solid ${C.ink}`, borderBottom: `1.5px solid ${C.ink}` }}>
      {chapterNo && <div style={{ position: "absolute", left: 42, top: -17, fontSize: 92, lineHeight: 1, fontWeight: 950, color: "#ced3da", letterSpacing: -7, zIndex: 0 }}>{chapterNo}</div>}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, paddingLeft: chapterNo ? 84 : 0 }}>
          <span style={{ fontSize: 22.5, fontWeight: 900, color: C.ink, letterSpacing: -0.6 }}>{title}</span>
        </div>
        <div style={{ textAlign: "right", lineHeight: 1.5 }}>
          <div style={{ fontSize: 10.5, color: C.ink, fontWeight: 850, letterSpacing: 2.5 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 9.5, color: C.muted, fontWeight: 600, letterSpacing: 0.6 }}>디지털 전환과 사회변혁 · {version} · 2026.06</div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ version = "v0.7" }: { version?: string } = {}) {
  return (
    <div style={{ margin: "0 48px", padding: "10px 0 14px", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 9, color: C.muted, fontWeight: 700, letterSpacing: 1.8 }}>
      <span>TAEJAE FUTURE CONSENSUS INSTITUTE · 디지털 전환과 사회변혁팀</span>
      <span style={{ letterSpacing: 1 }}>MASTERPLAN {version} · 2026.06</span>
    </div>
  );
}

/* 페이지 대명제 리드 — 잉크 좌측 바 */
export function PageLead({ kicker, thesis, summary }: { kicker?: string; thesis: string; summary: string }) {
  return (
    <div style={{ padding: "13px 48px 11px", borderBottom: `1px solid ${C.line}` }}>
      <div style={{ borderLeft: `4px solid ${C.ink}`, paddingLeft: 16 }}>
        <div style={{ fontSize: 18.5, fontWeight: 900, color: C.ink, lineHeight: 1.32, letterSpacing: -0.45 }}>{thesis}</div>
        <div style={{ marginTop: 5, fontSize: 12, lineHeight: 1.55, color: C.muted, fontWeight: 500, maxWidth: "94%" }}>{summary}</div>
      </div>
    </div>
  );
}

/* 섹션 헤드 — 잉크 번호 + 잉크 제목 + 하단 잉크 룰 */
export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginBottom: 10, paddingBottom: 7, borderBottom: `2.5px solid ${C.ink}` }}>
      <span style={{ fontSize: 19, fontWeight: 950, color: C.ink, letterSpacing: -0.6 }}>{no}</span>
      <span style={{ fontSize: 16.5, fontWeight: 850, color: C.ink, letterSpacing: -0.4 }}>{title}</span>
      {sub && <span style={{ fontSize: 11.5, fontWeight: 500, color: C.muted, marginLeft: 2 }}>{sub}</span>}
    </div>
  );
}

/* 카드 — 헤어라인 보더 + 상단 잉크 accent */
export function Card({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 2,
      borderTop: `3px solid ${accent || C.ink}`,
      overflow: "hidden",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "12px 48px 10px", padding: "14px 24px", background: C.surface, borderLeft: `5px solid ${C.ink}`, borderRadius: 2 }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 19, fontWeight: 850, color: C.ink, marginBottom: 10, paddingBottom: 6, borderBottom: `2.5px solid ${C.ink}` }}>
      {children}
    </div>
  );
}

/* 본문/표 스타일 — 행간 확대, 표 셀 여백 확대 */
export const ps: React.CSSProperties = { margin: "0 0 13px", fontSize: 14, lineHeight: 1.85, color: C.body, textAlign: "justify" };
export const h3s: React.CSSProperties = { fontSize: 16.5, fontWeight: 850, color: C.ink, margin: "10px 0 8px", paddingBottom: 5, borderBottom: `2.5px solid ${C.ink}` };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.7, color: C.body };
export const cell: React.CSSProperties = { padding: "10px 13px", borderBottom: `1px solid ${C.hairline}`, verticalAlign: "top", fontSize: 12.6, lineHeight: 1.55 };
export const hcell: React.CSSProperties = { padding: "10px 13px", background: "#fff", color: C.ink, fontSize: 12.4, fontWeight: 850, textAlign: "left", borderBottom: `2.5px solid ${C.ink}` };
