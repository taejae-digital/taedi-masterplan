import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM, lifeStages, CLASS_ROWS } from "./mp-data";

// P2-a 개인 축: 생애주기 6단계 × 4계층. 각 셀 = 계층 상태 + 필요 기능. 생애주기 행에 연결 공동체 pill.
export function IndividualCommunityPage() {
  const commPills = (tags: string[], center = false) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: center ? "center" : "flex-start", marginTop: 4 }}>
      {tags.map((t) => (
        <span key={t} style={{ fontSize: 8.4, fontWeight: 900, color: "#fff", background: COMM[t] || "#9ca3af", padding: "1px 7px", borderRadius: 8, letterSpacing: 0.1 }}>{t}</span>
      ))}
    </div>
  );

  // 좌측 라벨 셀
  const labelCell = (title: string, sub: string, bg: string) => (
    <div style={{ background: bg, color: "#fff", padding: "6px 7px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", lineHeight: 1.2 }}>
      <div style={{ fontSize: 10.2, fontWeight: 900 }}>{title}</div>
      <div style={{ marginTop: 2, fontSize: 8, fontWeight: 700, opacity: 0.8 }}>{sub}</div>
    </div>
  );

  // 생애주기 헤더 셀(단계명 + 정체성 과정 + 공동체 pill)
  const stageCell = (key: string, i: number, stage: string, process: string, tags: string[]) => (
    <div key={key} style={{ padding: "6px 7px", borderLeft: `1px solid ${C.cardBorder}`, background: "#1f2430", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ width: 18, height: 18, borderRadius: 9, background: "#fff", color: "#1f2430", fontSize: 10, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
        <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: -0.3 }}>{stage}</span>
      </div>
      <div style={{ marginTop: 3, fontSize: 8.8, fontWeight: 750, opacity: 0.82 }}>{process}</div>
      {commPills(tags, true)}
    </div>
  );

  // 4계층 셀 — 산업화 상태 → 디지털 상태(+필요 기능) 대비
  const tierCell = (key: string, indState: string, digState: string, need: string) => (
    <div key={key} style={{ padding: "5px 8px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", minHeight: 46, display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
      <span style={{ fontSize: 9, fontWeight: 600, color: "#9a8c6a", lineHeight: 1.22 }}>{indState}</span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 8.6, color: C.faint, fontWeight: 900 }}>→</span>
        <span style={{ fontSize: 9.6, fontWeight: 800, color: C.ink, lineHeight: 1.22 }}>{digState}</span>
      </div>
      <span style={{ fontSize: 8.4, fontWeight: 800, color: "#2f6f8f", lineHeight: 1.18 }}>필요 · {need}</span>
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인의 생애주기와 필요" chapterNo="02" version={VERSION} />

      <div style={{ padding: "12px 48px 10px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 18.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.45 }}>표준 경로에 줄 세우던 개인이, 생애주기마다 정체성을 키우는 주체로 바뀐다.</div>
        <div style={{ marginTop: 5, fontSize: 12.2, lineHeight: 1.4, color: C.muted, fontWeight: 500 }}>산업화 시대에는 성적·학벌·고용이라는 하나의 잣대가 리더·프로·아마·소외를 갈랐다. 디지털 시대에는 단계마다 정체성을 <b style={{ color: C.ink }}>드러내고·발견하고·훈련하고·발휘하고·전수하며</b>, 계층마다 다른 필요를 공동체가 채운다. <span style={{ color: "#9a8c6a", fontWeight: 700 }}>회색=산업화</span> <b style={{ color: C.ink }}>→ 진한색=디지털</b>.</div>
      </div>

      <div style={{ padding: "14px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "92px repeat(6, 1fr)", gap: 0, border: `1px solid ${C.cardBorder}`, borderRadius: 5, overflow: "hidden" }}>
          {/* 생애주기 헤더 행 */}
          {labelCell("생애주기", "정체성 과정 · 연결 공동체", "#1f2430")}
          {lifeStages.map((s, i) => stageCell(`stage-${s.stage}`, i, s.stage, s.process, s.digTags))}

          {/* 4계층 행 */}
          {CLASS_ROWS.map((r) => (
            <React.Fragment key={r.key}>
              {labelCell(r.label, "산업화→디지털", "#6b7280")}
              {lifeStages.map((s) => tierCell(`${r.key}-${s.stage}`, s.ind[r.key], s.digitalPerson[r.key], s.digitalPerson[`${r.key}N` as "leadN" | "proN" | "amaN" | "marginN"]))}
            </React.Fragment>
          ))}
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "stretch" }}>
          <div style={{ flex: 1, border: `1px solid ${C.cardBorder}`, borderRadius: 5, padding: "11px 14px", background: "#f7faf8" }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: "#2f9e6b", marginBottom: 4 }}>가까운 공동체일수록 — 발견·돌봄</div>
            <div style={{ fontSize: 10.4, fontWeight: 550, color: C.body, lineHeight: 1.42 }}>가정·이웃·마을은 생애 초반의 단서 드러남과 발견, 후반의 전수와 돌봄을 맡는다. 소외 계층이 가장 먼저 다시 연결되어야 하는 곳이다.</div>
          </div>
          <div style={{ flex: 1, border: `1px solid ${C.cardBorder}`, borderRadius: 5, padding: "11px 14px", background: "#f5f8fc" }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: "#2f5eb0", marginBottom: 4 }}>먼 공동체일수록 — 발휘·확장</div>
            <div style={{ fontSize: 10.4, fontWeight: 550, color: C.body, lineHeight: 1.42 }}>도시·국가·세계는 정체성을 실제 기여로 발휘하고 확장하는 무대를 연다. 국가는 모든 단계에서 소외를 보호하는 안전망으로 작동한다.</div>
          </div>
        </div>

        <div style={{ marginTop: 14, fontSize: 11.2, fontWeight: 600, color: C.muted, lineHeight: 1.4 }}>
          → 단계·계층별로 다른 이 필요들이 모여, <b style={{ color: C.ink }}>6단계 공동체</b>가 산업화 시대에 만들어졌고 디지털 시대에 새로 바뀐다. <span style={{ color: C.ink, fontWeight: 800 }}>(다음 장)</span>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
