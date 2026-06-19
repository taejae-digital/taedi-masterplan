import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM, cardGrad, communityShift } from "./mp-data";

// P2-b 공동체 축: 6단계 공동체가 산업화(before)에서 디지털(after)로 어떻게 바뀌는지.
export function CommunityShiftPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 공동체의 산업화 → 디지털 전환" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.45 }}>공동체는 개인을 배치하던 제도에서, 정체성을 지원·연결하는 생활 인프라로 바뀐다.</div>
        <div style={{ marginTop: 5, fontSize: 12.2, lineHeight: 1.4, color: C.muted, fontWeight: 500 }}>앞 장의 단계·계층별 필요가 모여 <b style={{ color: C.ink }}>6단계 공동체</b>를 만든다. 산업화 시대에는 가정·도시·국가만 비대해지고 이웃·마을·세계는 약화됐다. 디지털 시대에는 여섯 공동체가 모두 살아나 각자의 필요에 답한다.</div>
      </div>

      <div style={{ padding: "14px 40px 0", flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
        {communityShift.map((c) => (
          <div key={c.unit} style={{ display: "grid", gridTemplateColumns: "64px 1fr 1fr 150px", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 6, overflow: "hidden", flex: 1 }}>
            {/* 공동체 이름 */}
            <div style={{ background: cardGrad(c.unit), color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "6px 4px", textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 900 }}>{c.unit}</div>
            </div>

            {/* 산업화 (before) */}
            <div style={{ padding: "7px 12px", borderLeft: `1px solid ${C.cardBorder}`, background: "#f6f6f5", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 8.6, fontWeight: 900, color: "#9a8c6a", letterSpacing: 0.5, marginBottom: 2 }}>산업화 시대</div>
              <div style={{ fontSize: 10.6, fontWeight: 800, color: "#3a4250", lineHeight: 1.28, marginBottom: 2 }}>{c.indRole}</div>
              <div style={{ fontSize: 9.4, fontWeight: 550, color: C.muted, lineHeight: 1.32 }}>{c.indFacility} · {c.indOrg}</div>
            </div>

            {/* 디지털 (after) */}
            <div style={{ padding: "7px 12px", borderLeft: `2px solid ${COMM[c.unit] || "#6b7280"}`, background: "#f5f9fc", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 8.6, fontWeight: 900, color: "#2f5eb0", letterSpacing: 0.5, marginBottom: 2 }}>디지털 시대</div>
              <div style={{ fontSize: 10.6, fontWeight: 800, color: C.ink, lineHeight: 1.28, marginBottom: 2 }}>{c.digRole}</div>
              <div style={{ fontSize: 9.4, fontWeight: 550, color: C.body, lineHeight: 1.32 }}>{c.digFacility} · {c.digOrg}</div>
            </div>

            {/* 답하는 필요 */}
            <div style={{ padding: "7px 11px", borderLeft: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 8.4, fontWeight: 900, color: C.faint, letterSpacing: 0.3, marginBottom: 3 }}>답하는 필요</div>
              <div style={{ fontSize: 9.6, fontWeight: 700, color: C.ink, lineHeight: 1.34 }}>{c.answers}</div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 2, fontSize: 11.2, fontWeight: 600, color: C.muted, lineHeight: 1.4 }}>
          → 산업화가 <b style={{ color: "#9a8c6a" }}>가정·도시·국가</b>에 기능을 몰아넣었다면, 디지털은 <b style={{ color: "#2f5eb0" }}>여섯 공동체 전부</b>를 정체성 인프라로 되살려 단계·계층별 필요에 정밀하게 답한다.
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
