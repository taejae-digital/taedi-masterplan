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
        <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.4 }}>공동체는 개인을 줄 세우던 제도에서, 정체성을 지원·연결하는 생활 인프라로 바뀐다.</div>
        <div style={{ marginTop: 6, fontSize: 13.4, lineHeight: 1.65, color: C.body, fontWeight: 500 }}>산업화는 <b style={{ color: "#9a8c6a" }}>가정·도시·국가</b>에 기능을 몰아넣고 이웃·마을·세계를 약화시켰다. 디지털 시대에는 <b style={{ color: "#2f5eb0" }}>여섯 공동체가 모두 살아나</b> 단계·계층마다 다른 개인의 필요에 답한다.</div>
      </div>

      <div style={{ padding: "16px 44px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "66px 1fr 1fr 170px", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 6, overflow: "hidden", flex: 1 }}>
          {/* 컬럼 헤더 — 시대 단어는 여기 한 번만 */}
          <div style={{ background: "#1f2430" }} />
          <div style={{ background: "#efeee9", color: "#9a8c6a", fontSize: 13.5, fontWeight: 900, letterSpacing: 0.5, padding: "8px 14px", borderLeft: `1px solid ${C.cardBorder}`, display: "flex", alignItems: "center" }}>산업화</div>
          <div style={{ background: "#eaf1fa", color: "#2f5eb0", fontSize: 13.5, fontWeight: 900, letterSpacing: 0.5, padding: "8px 14px", borderLeft: `2px solid #2f5eb0`, display: "flex", alignItems: "center" }}>디지털</div>
          <div style={{ background: "#f4f5f7", color: C.faint, fontSize: 12, fontWeight: 900, letterSpacing: 0.3, padding: "8px 12px", borderLeft: `1px solid ${C.cardBorder}`, display: "flex", alignItems: "center" }}>채우는 필요</div>

          {/* 6공동체 행 */}
          {communityShift.map((c) => (
            <React.Fragment key={c.unit}>
              <div style={{ background: cardGrad(c.unit), color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "6px 4px", borderTop: `1px solid ${C.cardBorder}`, fontSize: 18, fontWeight: 900 }}>{c.unit}</div>
              <div style={{ padding: "9px 14px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#faf9f6", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#3a4250", lineHeight: 1.32, marginBottom: 3 }}>{c.indRole}</div>
                <div style={{ fontSize: 11, fontWeight: 550, color: C.muted, lineHeight: 1.4 }}>{c.indFacility} · {c.indOrg}</div>
              </div>
              <div style={{ padding: "9px 14px", borderLeft: `2px solid ${COMM[c.unit] || "#6b7280"}`, borderTop: `1px solid ${C.cardBorder}`, background: "#f7fafd", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.ink, lineHeight: 1.32, marginBottom: 3 }}>{c.digRole}</div>
                <div style={{ fontSize: 11, fontWeight: 550, color: C.body, lineHeight: 1.4 }}>{c.digFacility} · {c.digOrg}</div>
              </div>
              <div style={{ padding: "9px 13px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: C.ink, lineHeight: 1.4 }}>{c.answers}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: C.body, lineHeight: 1.5 }}>
          → <b style={{ color: "#9a8c6a" }}>가정·도시·국가</b>에 기능이 몰렸던 분업 질서가, <b style={{ color: "#2f5eb0" }}>여섯 공동체 전부</b>가 정체성 인프라로 되살아나 단계·계층별 필요에 답하는 질서로 바뀐다.
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
