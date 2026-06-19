import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { lifeStages, CLASS_ROWS } from "./mp-data";

// P2-a 개인 축: 산업화 표 / 디지털 표 2개. 각 표 = 생애주기 6단계(가로) × 4계층(세로), 칸에 문장.
export function IndividualCommunityPage() {
  type TierKey = "lead" | "pro" | "ama" | "margin";

  const PersonTable = ({
    era,
    accent,
    headBg,
    pick,
    proc,
    bg,
  }: {
    era: string;
    accent: string;
    headBg: string;
    pick: (s: typeof lifeStages[number], k: TierKey) => string;
    proc: (s: typeof lifeStages[number]) => string;
    bg: string;
  }) => (
    <div style={{ display: "grid", gridTemplateColumns: "54px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 5, overflow: "hidden" }}>
      <div style={{ background: headBg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px 4px", fontSize: 13, fontWeight: 900, letterSpacing: 1, writingMode: "vertical-rl", textOrientation: "upright" as const }}>{era}</div>
      {lifeStages.map((s, i) => (
        <div key={`h-${era}-${s.stage}`} style={{ background: headBg, color: "#fff", borderLeft: `1px solid rgba(255,255,255,0.18)`, padding: "6px 6px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: -0.3 }}>{i + 1}. {s.stage}</div>
          <div style={{ fontSize: 10.5, fontWeight: 700, opacity: 0.85, marginTop: 2 }}>{proc(s)}</div>
        </div>
      ))}
      {CLASS_ROWS.map((r) => (
        <React.Fragment key={`${era}-${r.key}`}>
          <div style={{ background: accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, padding: "4px", fontSize: 12.5, fontWeight: 900 }}>{r.label}</div>
          {lifeStages.map((s) => (
            <div key={`${era}-${r.key}-${s.stage}`} style={{ padding: "7px 9px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: bg, display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 550, color: C.body, lineHeight: 1.45 }}>{pick(s, r.key)}</span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인의 생애주기와 필요" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.4 }}>표준 경로에 줄 세우던 개인이, 생애주기마다 자기 강점을 키우는 주체로 바뀐다.</div>
        <div style={{ marginTop: 6, fontSize: 13.4, lineHeight: 1.65, color: C.body, fontWeight: 500 }}>산업화 시대에는 성적·학벌·고용이라는 하나의 잣대가 리더·프로·아마·소외를 갈랐다. 디지털 시대에는 단계마다 정체성을 <b style={{ color: C.ink }}>드러내고·발견하고·훈련하고·발휘하고·전수하며</b>, 같은 계층이라도 저마다 다른 필요를 공동체가 채운다.</div>
      </div>

      <div style={{ padding: "14px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 900, color: "#9a8c6a", marginBottom: 6, letterSpacing: -0.2 }}>산업화 시대 — 하나의 잣대로 줄 세운다</div>
          <PersonTable era="산업화" accent="#9a8c6a" headBg="#7c715a" pick={(s, k) => s.ind[k]} proc={(s) => s.indProcess} bg="#faf9f6" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 900, color: "#2f5eb0", marginBottom: 6, letterSpacing: -0.2 }}>디지털 시대 — 단계·계층마다 다른 필요를 채운다</div>
          <PersonTable era="디지털" accent="#2f5eb0" headBg="#274f8c" pick={(s, k) => s.digitalPerson[k]} proc={(s) => s.process} bg="#f7fafd" />
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
