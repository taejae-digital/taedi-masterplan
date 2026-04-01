"use client";

import { CrisisMapChart } from "./crisis-map-chart";

export function CrisisMap() {
  return (
    <div style={{ width: 1500, margin: "0 auto", background: "#fff", padding: "24px 40px", wordBreak: "keep-all" as const }}>
      <div style={{ borderBottom: "3px solid #111", paddingBottom: 6, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>AI 위기 지도</h1>
            <div style={{ fontSize: 14, color: "#666", fontWeight: 600, letterSpacing: 2, marginTop: 3 }}>
              AI CRISIS MAP — taxonomy × 위험도 × 통제 유형
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: 12.5, color: "#999" }}>
            <div style={{ fontWeight: 700, color: "#111", fontSize: 13 }}>태재미래전략연구원</div>
            디지털 전환과 사회변혁팀 · 2026. 4.
          </div>
        </div>
      </div>
      <CrisisMapChart />
      <div style={{ marginTop: 16, fontSize: 10, color: "#999", lineHeight: 1.6, borderTop: "1px solid #ddd", paddingTop: 8 }}>
        Perez(2002) 기술혁명 황금기 · Payne(2026) AI Arms and Influence · Bengio(2024) 예측적 거버넌스 · Acemoglu &amp; Johnson(2023) 민주적 재방향화
      </div>
    </div>
  );
}
