import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM } from "./mp-data";
import { ERAS, eraPerson, eraComm, Pill } from "./p2era-data";

export function IndividualCommunityPage() {
  const colTpl = "82px repeat(3, 1fr)";

  const EraHead = () => (
    <>
      <div style={{ background: "#fff", borderBottom: `2px solid ${C.ink}`, padding: "8px 13px", display: "flex", alignItems: "baseline" }}>
        <span style={{ fontSize: 14.5, fontWeight: 900, color: C.ink }}>시대</span>
      </div>
      {ERAS.map((e) => (
        <div key={e.key} style={{ background: "#fff", borderLeft: `1px solid ${C.cardBorder}`, borderBottom: `2px solid ${C.ink}`, padding: "8px 13px", display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 14.5, fontWeight: 900, color: C.ink }}>{e.label}</span>
          <span style={{ fontSize: 11.8, fontWeight: 850, color: e.accent }}>{e.tag}</span>
        </div>
      ))}
    </>
  );

  const SectionBar = ({ label, desc, extraTop = 0 }: { label: string; desc: string; extraTop?: number }) => (
    <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 11, background: "#f4f5f7", borderTop: `1px solid ${C.cardBorder}`, borderBottom: `1px solid ${C.cardBorder}`, padding: "6px 14px", marginTop: extraTop }}>
      <span style={{ display: "inline-block", width: 4, height: 16, background: C.navy, borderRadius: 1 }} />
      <span style={{ fontSize: 13.2, fontWeight: 900, color: C.ink, letterSpacing: 0.3 }}>{label}</span>
      <span style={{ fontSize: 11.8, fontWeight: 600, color: C.muted, letterSpacing: 0 }}>{desc}</span>
    </div>
  );

  const SummaryRow = () => (
    <>
      <div style={{ background: "#fafafa", borderTop: `1px solid ${C.cardBorder}`, color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 6px", fontSize: 12.2, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>목표</div>
      {ERAS.map((e) => (
        <div key={`sum-${e.key}`} style={{ padding: "9px 13px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fafafa" }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, color: e.accent, lineHeight: 1.42 }}>{e.summary}</span>
        </div>
      ))}
    </>
  );

  const Pills = ({ items }: { items: Pill[] }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
      {items.map((pill, i) => {
        const col = COMM[pill.c] || "#6b7280";
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 3, background: `${col}1a`, border: `1px solid ${col}`, borderRadius: 11, padding: "1px 6px", fontSize: 9.4, fontWeight: 850, color: col, lineHeight: 1.38, whiteSpace: "nowrap" }}>
            {pill.c}<span style={{ fontWeight: 650, opacity: 0.85 }}>{"·"} {pill.role}</span>
          </span>
        );
      })}
    </div>
  );

  const PersonRow = ({ label, cells }: { label: string; cells: { txt: string; pills: Pill[] }[] }) => (
    <>
      <div style={{ background: "#fafafa", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "8px 6px", fontSize: 12.2, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
      {cells.map((cell, i) => (
        <div key={i} style={{ minHeight: 46, padding: "6px 11px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: 11.5, fontWeight: 520, color: C.body, lineHeight: 1.26 }}>{cell.txt}</span>
          <Pills items={cell.pills} />
        </div>
      ))}
    </>
  );

  const CommRow = ({ label, cells }: { label: string; cells: string[] }) => {
    const col = COMM[label] || "#6b7280";
    return (
      <>
        <div style={{ background: `${col}14`, color: col, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, borderLeft: `4px solid ${col}`, padding: "7px 5px", fontSize: 12.8, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
        {cells.map((t, i) => (
          <div key={i} style={{ minHeight: 32, padding: "5px 11px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 11.2, fontWeight: 520, color: C.body, lineHeight: 1.24 }}>{t}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 시대에 따른 개인의 필요와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "20px 48px 6px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>개인이 시대마다 다른 것을 필요로 했고, 그 필요가 공동체의 모양을 바꿔 왔다.</div>
        <div style={{ marginTop: 4, fontSize: 11.5, lineHeight: 1.4, color: C.body, fontWeight: 550 }}>농업은 신분과 생존, 산업화는 표준 교육과 일자리, 디지털은 정체성 실현을 중심으로 개인과 공동체의 관계를 다시 짠다.</div>
      </div>

      <div style={{ padding: "10px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: colTpl, border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: "#fff", flex: 1 }}>
          <EraHead />
          <SummaryRow />
          <SectionBar label="개인" desc="생애주기별 기대와 필요한 공동체" />
          {eraPerson.map((r) => (
            <PersonRow key={r.stage} label={r.stage} cells={[
              { txt: r.agri, pills: r.agriC },
              { txt: r.ind, pills: r.indC },
              { txt: r.dig, pills: r.digC },
            ]} />
          ))}
          <SectionBar label="공동체" desc="개인의 필요를 뒷받침하는 관계와 제도" />
          {eraComm.map((r) => (
            <CommRow key={r.unit} label={r.unit} cells={[r.agri, r.ind, r.dig]} />
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
