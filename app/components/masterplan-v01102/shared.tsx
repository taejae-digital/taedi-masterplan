import { C } from "./constants";

/* ============================================================
   v0.11.2 EDITORIAL — 공유 컴포넌트
   화이트 헤더 + 상단 굵은 네이비 룰 + 하단 가는 잉크 룰
   ============================================================ */

/* 화이트 헤더 — 상단 네이비 두꺼운 룰 + 하단 가는 잉크 룰 + 옅은 워터마크 넘버 */
export function Header({ subtitle, chapterNo, version = "v0.7" }: { subtitle: string; chapterNo?: string; version?: string }) {
  return (
    <div style={{ position: "relative", background: "#fff", color: C.ink, padding: "24px 48px 20px", overflow: "hidden", borderTop: `4px solid ${C.accent}`, borderBottom: `1px solid ${C.ink}` }}>
      {/* 거대한 워터마크 넘버 (아주 옅은 회색) */}
      {chapterNo && (
        <div style={{ position: "absolute", right: 40, top: -24, fontSize: 140, fontWeight: 900, color: "rgba(0,0,0,0.04)", letterSpacing: -6, lineHeight: 1, userSelect: "none" }}>
          {chapterNo}
        </div>
      )}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 6, color: C.accent, fontWeight: 800, marginBottom: 8 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 27, fontWeight: 900, letterSpacing: -0.5, color: C.ink }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10.5, letterSpacing: 3, color: C.muted, marginBottom: 6, fontWeight: 600 }}>MASTER PLAN · {version} · 2026.06</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.ink, letterSpacing: -0.2 }}>{subtitle}</div>
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

/* 페이지 대명제 리드 — 잉크 굵은 헤드라인 + 네이비 키커 */
export function PageLead({ kicker, thesis, summary }: { kicker?: string; thesis: string; summary: string }) {
  return (
    <div style={{ padding: "20px 48px 18px", borderBottom: `1px solid ${C.line}` }}>
      {kicker && <div style={{ fontSize: 11.5, letterSpacing: 3, color: C.accent, fontWeight: 800, marginBottom: 9 }}>{kicker}</div>}
      <div style={{ fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.36, letterSpacing: -0.5, maxWidth: "92%" }}>{thesis}</div>
      <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.65, color: C.body, fontWeight: 500, maxWidth: "94%" }}>{summary}</div>
    </div>
  );
}

/* 섹션 헤드 — 네이비 번호 + 잉크 제목 + 하단 잉크 룰 */
export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 13, marginBottom: 12, paddingBottom: 9, borderBottom: `2px solid ${C.ink}` }}>
      <span style={{ fontSize: 22, fontWeight: 900, color: C.accent, letterSpacing: -0.5 }}>{no}</span>
      <span style={{ fontSize: 19, fontWeight: 800, color: C.ink, letterSpacing: -0.4 }}>{title}</span>
      {sub && <span style={{ fontSize: 12.5, fontWeight: 500, color: C.muted, marginLeft: 2 }}>{sub}</span>}
    </div>
  );
}

/* 카드 — 상단 네이비 accent 보더 */
export function Card({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 10,
      borderTop: accent ? `3px solid ${accent}` : `3px solid ${C.accent}`,
      overflow: "hidden",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "12px 48px 10px", padding: "13px 22px", background: C.accentSoft, borderLeft: `4px solid ${C.accent}`, borderRadius: 7 }}>
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
export const h3s: React.CSSProperties = { fontSize: 18, fontWeight: 800, color: C.ink, margin: "16px 0 10px", paddingBottom: 6, borderBottom: `2px solid ${C.ink}` };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.7, color: C.body };
export const cell: React.CSSProperties = { padding: "9px 12px", borderBottom: `1px solid ${C.hairline}`, verticalAlign: "top", fontSize: 12.5, lineHeight: 1.5 };
export const hcell: React.CSSProperties = { padding: "9px 12px", background: C.ink, color: "#fff", fontSize: 12.5, fontWeight: 700, textAlign: "left" };
