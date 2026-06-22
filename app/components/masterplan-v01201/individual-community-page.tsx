import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM } from "./mp-data";
import { ERAS, eraPerson, eraComm, Pill } from "./p2era-data";

export function IndividualCommunityPage() {
  const colTpl = "82px repeat(3, 1fr)";

  const EraMiniHead = () => (
    <>
      <div style={{ background: "#fafafa", borderBottom: `2px solid ${C.ink}` }} />
      {ERAS.map((e) => (
        <div key={e.key} style={{ background: "#fafafa", borderLeft: `1px solid ${C.cardBorder}`, borderBottom: `2px solid ${C.ink}`, padding: "5px 11px", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 13.1, fontWeight: 900, color: C.ink }}>{e.label}</span>
        </div>
      ))}
    </>
  );

  const EraOverview = () => (
    <div style={{ display: "grid", gridTemplateColumns: colTpl, border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: "#fff" }}>
      <div style={{ background: C.ink, color: "#fff", padding: "7px 8px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: 10.6, lineHeight: 1.25, fontWeight: 900, letterSpacing: 0.2 }}>시대별 목표</div>
      {ERAS.map((e) => (
        <div key={e.key} style={{ borderLeft: `1px solid ${C.cardBorder}`, padding: "6px 11px 7px", background: "#fff" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 14.2, fontWeight: 900, color: C.ink }}>{e.label}</span>
            <span style={{ fontSize: 11.3, fontWeight: 850, color: e.accent }}>{e.tag}</span>
          </div>
          <div style={{ fontSize: 10.6, lineHeight: 1.32, fontWeight: 650, color: C.body }}>{e.summary}</div>
        </div>
      ))}
    </div>
  );

  const SectionTitle = ({ text }: { text: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 9, margin: "6px 0 4px" }}>
      <div style={{ height: 2, width: 22, background: C.ink }} />
      <div style={{ fontSize: 12.7, color: C.ink, fontWeight: 950, letterSpacing: 0.2 }}>{text}</div>
      <div style={{ height: 1, flex: 1, background: C.line }} />
    </div>
  );

  const Pills = ({ items }: { items: Pill[] }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 5 }}>
      {items.map((p, i) => {
        const col = COMM[p.c] || "#6b7280";
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 3, background: `${col}1a`, border: `1px solid ${col}`, borderRadius: 11, padding: "1px 6px", fontSize: 9.2, fontWeight: 850, color: col, lineHeight: 1.38, whiteSpace: "nowrap" }}>
            {p.c}<span style={{ fontWeight: 650, opacity: 0.85 }}>{"\u00b7"} {p.role}</span>
          </span>
        );
      })}
    </div>
  );

  const PersonRow = ({ label, cells }: { label: string; cells: { txt: string; pills: Pill[] }[] }) => (
    <>
      <div style={{ background: "#fafafa", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "6px 5px", fontSize: 11.9, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
      {cells.map((cell, i) => (
        <div key={i} style={{ minHeight: 55, padding: "7px 10px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: 11.3, fontWeight: 520, color: C.body, lineHeight: 1.42 }}>{cell.txt}</span>
          <Pills items={cell.pills} />
        </div>
      ))}
    </>
  );

  const CommRow = ({ label, cells }: { label: string; cells: string[] }) => {
    const col = COMM[label] || "#6b7280";
    return (
      <>
        <div style={{ background: `${col}14`, color: col, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, borderLeft: `4px solid ${col}`, padding: "5px 5px", fontSize: 12.2, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
        {cells.map((t, i) => (
          <div key={i} style={{ minHeight: 33, padding: "5px 10px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 10.8, fontWeight: 520, color: C.body, lineHeight: 1.36 }}>{t}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 시대에 따른 개인의 필요와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "8px 48px 6px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>개인이 시대마다 다른 것을 필요로 했고, 그 필요가 공동체의 모양을 바꿔 왔다.</div>
        <div style={{ marginTop: 4, fontSize: 11.7, lineHeight: 1.42, color: C.body, fontWeight: 550 }}>농업은 신분과 생존, 산업화는 표준 교육과 일자리, 디지털은 정체성 실현을 중심으로 개인과 공동체의 관계를 다시 짠다.</div>
      </div>

      <div style={{ padding: "9px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <EraOverview />

        <SectionTitle text="개인 — 생애주기별 기대와 필요한 공동체" />
        <div style={{ display: "grid", gridTemplateColumns: colTpl, border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: "#fff" }}>
          <EraMiniHead />
          {eraPerson.map((r) => (
            <PersonRow key={r.stage} label={r.stage} cells={[
              { txt: r.agri, pills: r.agriC },
              { txt: r.ind, pills: r.indC },
              { txt: r.dig, pills: r.digC },
            ]} />
          ))}
        </div>

        <SectionTitle text="공동체 — 개인의 필요를 뒷받침하는 관계와 제도" />
        <div style={{ display: "grid", gridTemplateColumns: colTpl, border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: "#fff" }}>
          <EraMiniHead />
          {eraComm.map((r) => (
            <CommRow key={r.unit} label={r.unit} cells={[r.agri, r.ind, r.dig]} />
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
