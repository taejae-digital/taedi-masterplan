import { C } from "./constants";

/* ============================================================
   v0.11.1 EDITORIAL — 공유 컴포넌트
   ============================================================ */

/* 드라마틱 풀블리드 헤더 — 거대한 챕터 넘버 + 골드 헤어라인 */
export function Header({ subtitle, chapterNo, version = "v0.7" }: { subtitle: string; chapterNo?: string; version?: string }) {
  return (
    <div style={{ position: "relative", background: C.ink, color: "#fff", padding: "26px 48px 24px", overflow: "hidden" }}>
      {/* 거대한 워터마크 넘버 */}
      {chapterNo && (
        <div style={{ position: "absolute", right: 40, top: -28, fontSize: 150, fontWeight: 900, color: "rgba(255,255,255,0.05)", letterSpacing: -6, lineHeight: 1, userSelect: "none" }}>
          {chapterNo}
        </div>
      )}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 6, color: C.gold, fontWeight: 700, marginBottom: 8 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 27, fontWeight: 900, letterSpacing: -0.5 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10.5, letterSpacing: 3, color: C.faint, marginBottom: 6 }}>MASTER PLAN · {version} · 2026.06</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: -0.2 }}>{subtitle}</div>
        </div>
      </div>
      {/* 골드 헤어라인 */}
      <div style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 3, background: `linear-gradient(90deg, ${C.gold} 0%, ${C.gold} 30%, transparent 100%)` }} />
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

/* 페이지 대명제 리드 — 드라마틱 큰 헤드라인 */
export function PageLead({ kicker, thesis, summary }: { kicker?: string; thesis: string; summary: string }) {
  return (
    <div style={{ padding: "20px 48px 18px", borderBottom: `1px solid ${C.line}` }}>
      {kicker && <div style={{ fontSize: 11.5, letterSpacing: 3, color: C.accent, fontWeight: 800, marginBottom: 9 }}>{kicker}</div>}
      <div style={{ fontSize: 23, fontWeight: 900, color: C.ink, lineHeight: 1.36, letterSpacing: -0.5, maxWidth: "92%" }}>{thesis}</div>
      <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.65, color: C.body, fontWeight: 500, maxWidth: "94%" }}>{summary}</div>
    </div>
  );
}

/* 섹션 헤드 — 큰 번호 + 굵은 제목 + 골드 마커 */
export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 13, marginBottom: 12, paddingBottom: 9, borderBottom: `2px solid ${C.ink}` }}>
      <span style={{ fontSize: 22, fontWeight: 900, color: C.accent, letterSpacing: -0.5 }}>{no}</span>
      <span style={{ fontSize: 19, fontWeight: 800, color: C.ink, letterSpacing: -0.4 }}>{title}</span>
      {sub && <span style={{ fontSize: 12.5, fontWeight: 500, color: C.muted, marginLeft: 2 }}>{sub}</span>}
    </div>
  );
}

/* 카드 */
export function Card({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 10,
      borderTop: accent ? `3px solid ${accent}` : `1px solid ${C.cardBorder}`,
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

/* 본문/표 스타일 */
export const ps: React.CSSProperties = { margin: "0 0 13px", fontSize: 13.8, lineHeight: 1.9, color: C.body, textAlign: "justify" };
export const h3s: React.CSSProperties = { fontSize: 18, fontWeight: 800, color: C.ink, margin: "16px 0 10px", paddingBottom: 6, borderBottom: `2px solid ${C.ink}` };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.7, color: C.body };
export const cell: React.CSSProperties = { padding: "9px 12px", borderBottom: `1px solid ${C.hairline}`, verticalAlign: "top", fontSize: 12.5, lineHeight: 1.5 };
export const hcell: React.CSSProperties = { padding: "9px 12px", background: C.ink, color: "#fff", fontSize: 12.5, fontWeight: 700, textAlign: "left" };
