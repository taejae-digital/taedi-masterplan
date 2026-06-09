import { C } from "./constants";

/* ============================================================
   v0.11.0 디자인 시스템 — 가독성 우선
   - 명확한 위계: 페이지타이틀 > 섹션제목 > 소제목 > 본문 > 캡션
   - 일관된 카드: 흰 배경 + 얇은 보더 + 라운드
   - 넉넉한 여백, 부드러운 강조색
   ============================================================ */

export function Header({ subtitle, chapter, version = "v0.7" }: { subtitle: string; chapter?: string; version?: string }) {
  return (
    <div style={{ background: `linear-gradient(100deg, ${C.navyDeep} 0%, ${C.navy} 100%)`, color: "#fff", padding: "22px 40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: 5, opacity: 0.6, marginBottom: 5, fontWeight: 600 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 0.5 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.5, marginBottom: 5 }}>MASTER PLAN · {version} · 2026.06</div>
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 0.3 }}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ version = "v0.7" }: { version?: string } = {}) {
  return (
    <div style={{ margin: "0 40px", padding: "10px 0 14px", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 11, color: C.muted, fontWeight: 500 }}>
      <span>태재미래전략연구원 디지털 전환과 사회변혁팀 · 내부 문서</span>
      <span>2026.06 · {version}</span>
    </div>
  );
}

/* 페이지 상단 대명제 리드 블록 */
export function PageLead({ thesis, summary }: { thesis: string; summary: string }) {
  return (
    <div style={{ padding: "16px 40px 14px", borderBottom: `3px solid ${C.navy}` }}>
      <div style={{ fontSize: 20, fontWeight: 850, color: C.navy, lineHeight: 1.34, letterSpacing: -0.3 }}>{thesis}</div>
      <div style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.6, color: C.body, fontWeight: 500 }}>{summary}</div>
    </div>
  );
}

/* 섹션 제목: 번호 + 제목 + 부제 */
export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10, paddingBottom: 7, borderBottom: `2px solid ${C.navy}` }}>
      <span style={{ fontSize: 17, fontWeight: 900, color: C.accent, letterSpacing: 0.3 }}>{no}</span>
      <span style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.2 }}>{title}</span>
      {sub && <span style={{ fontSize: 13, fontWeight: 500, color: C.muted }}>{sub}</span>}
    </div>
  );
}

/* 카드 컨테이너 */
export function Card({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.cardBorder}`,
      borderRadius: 8,
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
    <div style={{ margin: "12px 40px 10px", padding: "12px 20px", background: C.accentSoft, borderLeft: `4px solid ${C.accent}`, borderRadius: 6 }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, marginBottom: 8, paddingBottom: 5, borderBottom: `2px solid ${C.navy}` }}>
      {children}
    </div>
  );
}

/* 본문/소제목 스타일 */
export const ps: React.CSSProperties = { margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.85, color: C.body, textAlign: "justify" };
export const h3s: React.CSSProperties = { fontSize: 17, fontWeight: 800, color: C.navy, margin: "16px 0 9px", paddingBottom: 5, borderBottom: `2px solid ${C.navy}` };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.7, color: C.body };
export const cell: React.CSSProperties = { padding: "8px 10px", borderBottom: `1px solid ${C.hairline}`, verticalAlign: "top", fontSize: 12.5, lineHeight: 1.5 };
export const hcell: React.CSSProperties = { padding: "8px 10px", background: C.navy, color: "#fff", fontSize: 12.5, fontWeight: 700, textAlign: "left" };
