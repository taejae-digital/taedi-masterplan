import { C } from "./constants";

export function Header({ subtitle, version = "v0.2" }: { subtitle: string; version?: string }) {
  return (
    <div style={{ background: C.navy, color: "#fff", padding: "20px 32px 16px", marginBottom: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: 4, opacity: 0.55, marginBottom: 3 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.45, marginBottom: 3 }}>MASTER PLAN {version}</div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{subtitle}</div>
        </div>
      </div>
      <div style={{ textAlign: "right", fontSize: 11, opacity: 0.35, marginTop: 3 }}>2026.04</div>
    </div>
  );
}

export function Footer() {
  return (
    <div style={{ margin: "14px 32px 0", padding: "7px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 11, color: C.light }}>
      <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
      <span>2026.04</span>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 14, fontWeight: 800, color: C.dark, marginBottom: 8, paddingBottom: 4, borderBottom: `2px solid ${C.dark}` }}>
      {children}
    </div>
  );
}

export function Box({ children, accent, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div style={{ padding: "10px 14px", border: `1px solid ${C.line}`, borderTop: `3px solid ${accent || C.navy}`, background: C.bg, ...style }}>
      {children}
    </div>
  );
}

export const cell: React.CSSProperties = { padding: "5px 7px", borderBottom: "1px solid #eee", verticalAlign: "top", fontSize: 12, lineHeight: 1.45 };
export const hcell: React.CSSProperties = { padding: "4px 7px", borderBottom: "2px solid #333", fontSize: 11.5, fontWeight: 700, textAlign: "left" };

// v0.1 호환 aliases
export const cellStyle = cell;
export const hcellStyle = hcell;
export const sec = (num: string, text: string) => (
  <div style={{ fontSize: 17, fontWeight: 800, color: "#111", marginBottom: 10, paddingLeft: 2, paddingBottom: 4, borderBottom: "1px solid #ccc" }}>{num}. {text}</div>
);
export function ResearchBox({ num, title, desc, assignee, color }: { num: string; title: string; desc: string; assignee?: string; color?: string }) {
  return (
    <div style={{ border: `1px solid ${C.line}`, borderTop: `3px solid ${color || C.navy}`, padding: "8px 10px", background: "#fff", minHeight: 70 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <div style={{ fontSize: 12.5, fontWeight: 800, color: color || C.navy }}>{num}</div>
        {assignee && <div style={{ fontSize: 11, color: C.light, fontWeight: 600 }}>{assignee}</div>}
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12.5, color: C.gray, lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}
export function Arrow() {
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.light, fontWeight: 700 }}>&rarr;</div>;
}
