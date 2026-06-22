import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM } from "./mp-data";
import { ERAS, eraPerson, eraComm, Pill } from "./p2era-data";

export function IndividualCommunityPage() {
  const colTpl = "78px repeat(3, 1fr)";

  const EraHead = () => (
    <>
      <div style={{ background: "#fff", borderBottom: `2px solid ${C.ink}` }} />
      {ERAS.map((e) => (
        <div key={e.key} style={{ background: "#fff", borderLeft: `1px solid ${C.cardBorder}`, borderBottom: `2px solid ${C.ink}`, padding: "8px 14px", display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 900, color: C.ink }}>{e.label}</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: e.accent }}>{"\u00b7"} {e.tag}</span>
        </div>
      ))}
    </>
  );

  const SummaryRow = () => (
    <>
      <div style={{ background: "#fff" }} />
      {ERAS.map((e) => (
        <div key={`sum-${e.key}`} style={{ padding: "8px 13px", borderLeft: `1px solid ${C.cardBorder}`, background: "#fafafa", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: e.accent, lineHeight: 1.4 }}>{e.summary}</span>
        </div>
      ))}
    </>
  );

  const SectionBar = ({ text }: { text: string }) => (
    <div style={{ gridColumn: "1 / -1", background: C.ink, color: "#fff", fontSize: 12, fontWeight: 900, letterSpacing: 2, padding: "5px 14px", borderTop: `1px solid ${C.cardBorder}` }}>{text}</div>
  );

  const Pills = ({ items }: { items: Pill[] }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 5 }}>
      {items.map((p, i) => {
        const col = COMM[p.c] || "#6b7280";
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 3, background: `${col}1a`, border: `1px solid ${col}`, borderRadius: 10, padding: "1px 7px", fontSize: 9.3, fontWeight: 800, color: col, lineHeight: 1.35, whiteSpace: "nowrap" }}>
            {p.c}<span style={{ fontWeight: 600, opacity: 0.85 }}>{"\u00b7"} {p.role}</span>
          </span>
        );
      })}
    </div>
  );

  const PersonRow = ({ label, cells }: { label: string; cells: { txt: string; pills: Pill[] }[] }) => (
    <>
      <div style={{ background: "#fafafa", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "6px 4px", fontSize: 11.5, fontWeight: 900, textAlign: "center", lineHeight: 1.2 }}>{label}</div>
      {cells.map((cell, i) => (
        <div key={i} style={{ padding: "7px 12px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: C.body, lineHeight: 1.38 }}>{cell.txt}</span>
          <Pills items={cell.pills} />
        </div>
      ))}
    </>
  );

  const CommRow = ({ label, cells }: { label: string; cells: string[] }) => {
    const col = COMM[label] || "#6b7280";
    return (
      <>
        <div style={{ background: `${col}14`, color: col, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, borderLeft: `3px solid ${col}`, padding: "6px 4px", fontSize: 12, fontWeight: 900, textAlign: "center" }}>{label}</div>
        {cells.map((t, i) => (
          <div key={i} style={{ padding: "6px 12px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 10.8, fontWeight: 500, color: C.body, lineHeight: 1.38 }}>{t}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 시대에 따른 개인의 필요와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.4 }}>개인이 시대마다 다른 것을 필요로 했고, 그 필요가 공동체의 모양을 바꿔 왔다.</div>
        <div style={{ marginTop: 6, fontSize: 12.5, lineHeight: 1.5, color: C.body, fontWeight: 500 }}>각 생애 단계에서 개인이 바라는 것 아래, 그 필요를 채우는 <b style={{ color: C.ink }}>공동체(가정·이웃·마을·도시·국가·세계)</b>를 색으로 표시했다. 아래 공동체 표의 같은 색과 이어진다.</div>
      </div>

      <div style={{ padding: "14px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: colTpl, gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 5, overflow: "hidden" }}>
          <EraHead />
          <SummaryRow />
          <SectionBar text="개인 — 생애주기마다 바라는 것 + 필요한 공동체" />
          {eraPerson.map((r) => (
            <PersonRow key={r.stage} label={r.stage} cells={[
              { txt: r.agri, pills: r.agriC },
              { txt: r.ind, pills: r.indC },
              { txt: r.dig, pills: r.digC },
            ]} />
          ))}
          <SectionBar text="공동체 — 그 필요가 만든 공동체" />
          {eraComm.map((r) => (
            <CommRow key={r.unit} label={r.unit} cells={[r.agri, r.ind, r.dig]} />
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
