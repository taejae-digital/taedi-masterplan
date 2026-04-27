import { C } from "./constants";

export function Header({ subtitle, version = "v0.6.5" }: { subtitle: string; version?: string }) {
  return (
    <div style={{ background: C.navy, color: "#fff", padding: "20px 32px 16px", marginBottom: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 13, letterSpacing: 4, opacity: 0.55, marginBottom: 3 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: 1 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, letterSpacing: 3, opacity: 0.45, marginBottom: 3 }}>MASTER PLAN {version}</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{subtitle}</div>
        </div>
      </div>
      <div style={{ textAlign: "right", fontSize: 12, opacity: 0.35, marginTop: 3 }}>2026.04</div>
    </div>
  );
}

export function Footer() {
  return (
    <div style={{ margin: "14px 32px 0", padding: "7px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 12, color: C.light }}>
      <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
      <span>2026.04 · v0.6.5</span>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 13.5, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 3, borderBottom: `2px solid ${C.dark}` }}>
      {children}
    </div>
  );
}

export function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "12px 32px 10px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
      {children}
    </div>
  );
}

export const ps: React.CSSProperties = { margin: "0 0 10px", fontSize: 14, lineHeight: 1.85, color: "#222", textAlign: "justify" };
export const h3s: React.CSSProperties = { fontSize: 14.5, fontWeight: 800, color: "#1a2744", margin: "14px 0 7px", paddingBottom: 3, borderBottom: "1px solid #ddd" };
export const body: React.CSSProperties = { fontSize: 13.5, lineHeight: 1.65, color: "#222" };
export const cell: React.CSSProperties = { padding: "5px 7px", borderBottom: "1px solid #eee", verticalAlign: "top", fontSize: 13, lineHeight: 1.45 };
export const hcell: React.CSSProperties = { padding: "4px 7px", borderBottom: "2px solid #333", fontSize: 12.5, fontWeight: 700, textAlign: "left" };
