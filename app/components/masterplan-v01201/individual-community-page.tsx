import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { lifeStages, CLASS_ROWS, communityShift } from "./mp-data";

// P2: 개인 생애주기(6단계x4계층) + 그 아래 6공동체. 산업화 블록 / 디지털 블록 2단.
export function IndividualCommunityPage() {
  type TierKey = "lead" | "pro" | "ama" | "margin";

  const EraBlock = ({
    label,
    sub,
    accent,
    pick,
    proc,
    commRole,
    commDetail,
    commAnswers,
    ansLabel,
  }: {
    label: string;
    sub: string;
    accent: string;
    pick: (s: typeof lifeStages[number], k: TierKey) => string;
    proc: (s: typeof lifeStages[number]) => string;
    commRole: (c: typeof communityShift[number]) => string;
    commDetail: (c: typeof communityShift[number]) => string;
    commAnswers?: (c: typeof communityShift[number]) => string;
    ansLabel?: string;
  }) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: 13.5, fontWeight: 900, color: accent, marginBottom: 6, letterSpacing: -0.2, paddingBottom: 4, borderBottom: `2px solid ${accent}` }}>
        {label} <span style={{ fontSize: 11.5, fontWeight: 600, color: C.muted }}>{"\u00b7"} {sub}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "50px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 4, overflow: "hidden" }}>
        <div style={{ background: "#fff", borderBottom: `2px solid ${C.ink}` }} />
        {lifeStages.map((s, i) => (
          <div key={`h-${label}-${s.stage}`} style={{ background: "#fff", borderLeft: `1px solid ${C.cardBorder}`, borderBottom: `2px solid ${C.ink}`, padding: "6px 6px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: -0.3, color: C.ink }}>{i + 1}. {s.stage}</div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: accent, marginTop: 2 }}>{proc(s)}</div>
          </div>
        ))}
        {CLASS_ROWS.map((r) => (
          <React.Fragment key={`${label}-${r.key}`}>
            <div style={{ background: "#fff", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "4px", fontSize: 12.5, fontWeight: 900 }}>{r.label}</div>
            {lifeStages.map((s) => (
              <div key={`${label}-${r.key}-${s.stage}`} style={{ padding: "7px 9px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 550, color: C.body, lineHeight: 1.45 }}>{pick(s, r.key)}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "50px repeat(6, 1fr)", gap: 0, alignItems: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 900, color: C.muted, lineHeight: 1.2, textAlign: "center" }}>공동체</div>
        {communityShift.map((c) => (
          <div key={`${label}-c-${c.unit}`} style={{ marginLeft: 7, border: `1px solid ${C.cardBorder}`, borderTop: `3px solid ${accent}`, borderRadius: 3, background: "#fff", padding: "7px 9px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 12.5, fontWeight: 900, color: C.ink, marginBottom: 3 }}>{c.unit}</div>
            <div style={{ fontSize: 10.8, fontWeight: 800, color: accent, lineHeight: 1.3, marginBottom: 2 }}>{commRole(c)}</div>
            <div style={{ fontSize: 9.8, fontWeight: 500, color: C.muted, lineHeight: 1.35 }}>{commDetail(c)}</div>
            {commAnswers && (
              <div style={{ marginTop: 5, paddingTop: 5, borderTop: `1px dashed ${C.cardBorder}`, fontSize: 9.6, fontWeight: 700, color: accent, lineHeight: 1.32 }}>
                <span style={{ color: C.faint, fontWeight: 800 }}>{ansLabel} </span>{commAnswers(c)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인의 생애주기와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: C.ink, lineHeight: 1.25, letterSpacing: -0.4 }}>개인을 하나의 표준 경로에 맞추던 공동체가, 생애 단계마다 필요한 공동체가 고유 기능을 맡는 질서로 바뀐다.</div>
        <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: C.body, fontWeight: 500 }}>산업화 시대에는 표준 제도가 가정{"\u00b7"}도시{"\u00b7"}국가에 기능을 몰아넣고 개인을 하나의 경로에 맞췄다. 디지털 시대에는 정체성을 <b style={{ color: C.ink }}>드러내고{"\u00b7"}발견하고{"\u00b7"}훈련하고{"\u00b7"}발휘하고{"\u00b7"}전수하는</b> 각 단계마다, 그 단계에 필요한 공동체가 고유 기능을 맡는다.</div>
      </div>

      <div style={{ padding: "12px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <EraBlock
          label="산업화 시대 · 분업"
          sub="분업 질서가 가정·도시·국가에 기능을 몰아넣고 개인을 한 경로에 맞춘다"
          accent={C.navySoft}
          pick={(s, k) => s.ind[k]}
          proc={(s) => s.indProcess}
          commRole={(c) => c.indRole}
          commDetail={(c) => c.indOrg}
          commAnswers={(c) => c.indAnswers}
          ansLabel="생애 기능"
        />
        <EraBlock
          label="디지털 시대 · 다양성"
          sub="다양성 질서에서 단계마다 필요한 공동체가 저마다 고유 기능을 맡는다"
          accent={C.accent}
          pick={(s, k) => s.digitalPerson[k]}
          proc={(s) => s.process}
          commRole={(c) => c.digRole}
          commDetail={(c) => c.digOrg}
          commAnswers={(c) => c.answers}
          ansLabel="생애 기능"
        />
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
