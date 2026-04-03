import { C } from "./constants";

export function Header({ title, subtitle, tag }: { title: string; subtitle: string; tag?: string }) {
  return (
    <div style={{ background: C.navy, color: "#fff", padding: "22px 32px 18px", marginBottom: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 12.5, letterSpacing: 4, opacity: 0.6, marginBottom: 4 }}>태재미래전략연구원</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1 }}>디지털 전환과 사회변혁</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, opacity: 0.5, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 15.5, fontWeight: 600 }}>{subtitle}</div>
          {tag && <div style={{ fontSize: 11.5, opacity: 0.5, marginTop: 2 }}>{tag}</div>}
        </div>
      </div>
      <div style={{ textAlign: "right", fontSize: 11.5, opacity: 0.4, marginTop: 4 }}>2026.04</div>
    </div>
  );
}

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

export function Footer() {
  return (
    <div style={{ margin: "16px 32px 0", padding: "8px 0", borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", fontSize: 11.5, color: C.light }}>
      <span>태재미래전략연구원 디지털 전환과 사회변혁팀 | 내부 문서</span>
      <span>2026.04</span>
    </div>
  );
}

/** 공유 스타일 상수 */
export const sec = (num: string, text: string) => (
  <div style={{ fontSize: 17, fontWeight: 800, color: "#111", marginBottom: 10, paddingLeft: 2, paddingBottom: 4, borderBottom: "1px solid #ccc" }}>{num}. {text}</div>
);

export const h2Style = { fontSize: 15.5, fontWeight: 800 as const, color: "#111", marginBottom: 5, paddingBottom: 3, borderBottom: "2px solid #333" };
export const cellStyle = { padding: "5px 8px", borderBottom: "1px solid #eee", verticalAlign: "top" as const, fontSize: 13.5, lineHeight: 1.45 };
export const hcellStyle = { padding: "4px 8px", borderBottom: "2px solid #333", fontSize: 12, fontWeight: 700 as const, textAlign: "left" as const };
