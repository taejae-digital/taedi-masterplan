import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { ERAS, eraPerson, eraComm } from "./p2era-data";

export function IndividualCommunityPage() {
  const colTpl = "84px repeat(3, 1fr)";

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

  const SectionBar = ({ text }: { text: string }) => (
    <div style={{ gridColumn: "1 / -1", background: C.ink, color: "#fff", fontSize: 12, fontWeight: 900, letterSpacing: 2, padding: "5px 14px" }}>{text}</div>
  );

  const Row = ({ label, cells }: { label: string; cells: string[] }) => (
    <>
      <div style={{ background: "#fafafa", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "6px 4px", fontSize: 12, fontWeight: 900, textAlign: "center", lineHeight: 1.2 }}>{label}</div>
      {cells.map((t, i) => (
        <div key={i} style={{ padding: "7px 13px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 11.5, fontWeight: 500, color: C.body, lineHeight: 1.4 }}>{t}</span>
        </div>
      ))}
    </>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 시대에 따른 개인의 필요와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.4 }}>개인이 시대마다 다른 것을 필요로 했고, 그 필요가 공동체의 모양을 바꿔 왔다.</div>
        <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: C.body, fontWeight: 500 }}>농업 시대는 <b style={{ color: "#8a6d3b" }}>토지{"\u00b7"}신분</b>에, 산업화 시대는 <b style={{ color: C.ink }}>분업</b>에 개인을 맞췄고, 그 필요가 가정{"\u00b7"}도시{"\u00b7"}국가에 기능을 몰아 한 줄로 세웠다. 디지털 시대에는 <b style={{ color: C.accent }}>다양성</b>이 기준이 되어, 생애 단계마다 필요한 공동체가 저마다 고유 기능을 맡는다.</div>
      </div>

      <div style={{ padding: "16px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: colTpl, gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 5, overflow: "hidden" }}>
          <EraHead />
          <SectionBar text="개인 — 생애주기마다 바라는 것" />
          {eraPerson.map((r) => (
            <Row key={r.stage} label={r.stage} cells={[r.agri, r.ind, r.dig]} />
          ))}
          <SectionBar text="공동체 — 그 필요가 만든 공동체" />
          {eraComm.map((r) => (
            <Row key={r.unit} label={r.unit} cells={[r.agri, r.ind, r.dig]} />
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
