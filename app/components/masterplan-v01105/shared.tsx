import { C } from "./constants";

/* ============================================================
   v0.11.4 EDITORIAL — 공유 컴포넌트
   화이트 헤더 + 상단 굵은 네이비 룰 + 하단 가는 잉크 룰
   ============================================================ */

/* 화이트 헤더 (컴팩트) — 한 줄 띠: 챕터 제목 크게 + 기관·버전 작게 */
export function Header({ subtitle, chapterNo, version = "v0.7" }: { subtitle: string; chapterNo?: string; version?: string }) {
  // subtitle 앞의 "1. " 같은 선행 번호 제거 (챕터 넘버와 중복 방지)
  const title = subtitle.replace(/^\s*\d+\.\s*/, "");
  return (
    <div style={{ position: "relative", background: "#fff", color: C.ink, padding: "16px 48px 13px", overflow: "hidden", borderTop: `4px solid ${C.ink}`, borderBottom: `1px solid ${C.ink}` }}>
      {chapterNo && <div style={{ position: "absolute", left: 42, top: -15, fontSize: 86, lineHeight: 1, fontWeight: 950, color: "#c4c9d1", letterSpacing: -6, zIndex: 0 }}>{chapterNo}</div>}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, paddingLeft: chapterNo ? 78 : 0 }}>
          <span style={{ fontSize: 21, fontWeight: 900, color: C.ink, letterSpacing: -0.5 }}>{title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontSize: 10, color: C.muted, fontWeight: 600, letterSpacing: 1 }}>
          <span style={{ color: C.muted, fontWeight: 800, letterSpacing: 3 }}>태재미래전략연구원</span>
          <span>디지털 전환과 사회변혁 · {version} · 2026.06</span>
        </div>
      </div>
    </div>
  );
}

export function Footer({ version = "v0.7" }: { version?: string } = {}) {
  return (
    <div style={{ margin: "0 48px", padding: "11px 0 16px", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 10.5, color: C.muted, fontWeight: 500, letterSpacing: 0.2 }}>
      <span>태재미래전략연구원 · 디지털 전환과 사회변혁팀 · 내부 문서</span>
      <span>2026.06 · {version}</span>
    </div>
  );
}

/* 페이지 대명제 리드 (컴팩트) — thesis 한 줄 + summary 작게 */
export function PageLead({ kicker, thesis, summary }: { kicker?: string; thesis: string; summary: string }) {
  return (
    <div style={{ padding: "10px 48px 9px", borderBottom: `1px solid ${C.line}` }}>
      <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.32, letterSpacing: -0.4 }}>{thesis}</div>
      <div style={{ marginTop: 4, fontSize: 11.5, lineHeight: 1.5, color: C.muted, fontWeight: 500 }}>{summary}</div>
    </div>
  );
}

/* 섹션 헤드 — 네이비 번호 + 잉크 제목 + 하단 잉크 룰 (컴팩트) */
export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginBottom: 8, paddingBottom: 6, borderBottom: `2px solid ${C.ink}` }}>
      <span style={{ fontSize: 18, fontWeight: 900, color: C.ink, letterSpacing: -0.5 }}>{no}</span>
      <span style={{ fontSize: 16, fontWeight: 800, color: C.ink, letterSpacing: -0.4 }}>{title}</span>
      {sub && <span style={{ fontSize: 11.5, fontWeight: 500, color: C.muted, marginLeft: 2 }}>{sub}</span>}
    </div>
  );
}

/* 카드 — 상단 네이비 accent 보더 */
export function Card({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 3,
      borderTop: `3px solid ${C.ink}`,
      overflow: "hidden",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "12px 48px 10px", padding: "13px 22px", background: C.surface, borderLeft: `4px solid ${C.ink}`, borderRadius: 3 }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 19, fontWeight: 800, color: C.ink, marginBottom: 9, paddingBottom: 6, borderBottom: `2px solid ${C.ink}` }}>
      {children}
    </div>
  );
}

/* 본문/표 스타일 (산세리프 본문 유지) */
export const ps: React.CSSProperties = { margin: "0 0 13px", fontSize: 13.8, lineHeight: 1.9, color: C.body, textAlign: "justify" };
export const h3s: React.CSSProperties = { fontSize: 16, fontWeight: 800, color: C.ink, margin: "10px 0 7px", paddingBottom: 5, borderBottom: `2px solid ${C.ink}` };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.7, color: C.body };
export const cell: React.CSSProperties = { padding: "9px 12px", borderBottom: `1px solid ${C.hairline}`, verticalAlign: "top", fontSize: 12.5, lineHeight: 1.5 };
export const hcell: React.CSSProperties = { padding: "9px 12px", background: C.ink, color: "#fff", fontSize: 12.5, fontWeight: 700, textAlign: "left" };
