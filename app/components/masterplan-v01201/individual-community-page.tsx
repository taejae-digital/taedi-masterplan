import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";
import { COMM } from "./mp-data";
import { ERAS, eraPerson, eraComm, CommCells, COMM_ORDER } from "./p2era-data";

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

  const SectionBar = ({ label, desc, unchanged, changed, extraTop = 0 }: { label: string; desc: string; unchanged?: string; changed?: string; extraTop?: number }) => (
    <div style={{ gridColumn: "1 / -1", background: "#f4f5f7", borderTop: `1px solid ${C.cardBorder}`, borderBottom: `1px solid ${C.cardBorder}`, padding: "6px 14px 7px", marginTop: extraTop }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{ display: "inline-block", width: 4, height: 16, background: C.navy, borderRadius: 1 }} />
        <span style={{ fontSize: 13.2, fontWeight: 900, color: C.ink, letterSpacing: 0.3 }}>{label}</span>
        <span style={{ fontSize: 11.8, fontWeight: 600, color: C.muted, letterSpacing: 0 }}>{desc}</span>
      </div>
      {(unchanged || changed) && (
        <div style={{ marginTop: 4, marginLeft: 15, fontSize: 10.8, lineHeight: 1.4, color: C.body, fontWeight: 520 }}>
          {unchanged && (<div><span style={{ fontWeight: 900, color: C.accentDeep }}>변하지 않는 것 </span>{unchanged}</div>)}
          {changed && (<div style={{ marginTop: 1 }}><span style={{ fontWeight: 900, color: C.muted }}>변하는 것 </span>{changed}</div>)}
        </div>
      )}
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

  // 6공동체 미니 그리드 — 6칸 고정, 없는 공동체는 빈 칸
  const CommGrid = ({ cells }: { cells: CommCells }) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "2px 3px", width: "100%", marginTop: 4 }}>
      {COMM_ORDER.map((c) => {
        const role = cells[c as keyof CommCells];
        const col = COMM[c] || "#6b7280";
        if (!role) {
          return (
            <div key={c} style={{ minHeight: 18, borderRadius: 3, background: "#f3f4f6", opacity: 0.45 }} />
          );
        }
        return (
          <div key={c} style={{
            minHeight: 18,
            borderRadius: 3,
            background: `${col}18`,
            border: `1px solid ${col}55`,
            padding: "1px 3px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
          }}>
            <span style={{ fontSize: 7.8, fontWeight: 900, color: col, lineHeight: 1.3, letterSpacing: -0.2 }}>{c}</span>
            <span style={{ fontSize: 7.2, fontWeight: 600, color: col, lineHeight: 1.25, opacity: 0.88, letterSpacing: -0.2 }}>{role}</span>
          </div>
        );
      })}
    </div>
  );

  const PersonRow = ({ label, cells }: { label: string; cells: { txt: string; cells: CommCells }[] }) => (
    <>
      <div style={{ background: "#fafafa", color: C.navy, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, padding: "6px 5px", fontSize: 11.5, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
      {cells.map((cell, i) => (
        <div key={i} style={{ padding: "5px 9px 5px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, fontWeight: 520, color: C.body, lineHeight: 1.24 }}>{cell.txt}</span>
          <CommGrid cells={cell.cells} />
        </div>
      ))}
    </>
  );

  const CommRow = ({ label, cells }: { label: string; cells: string[] }) => {
    const col = COMM[label] || "#6b7280";
    return (
      <>
        <div style={{ background: `${col}14`, color: col, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${C.cardBorder}`, borderRight: `1px solid ${C.cardBorder}`, borderLeft: `4px solid ${col}`, padding: "5px 4px", fontSize: 12, fontWeight: 950, textAlign: "center", lineHeight: 1.18 }}>{label}</div>
        {cells.map((t, i) => (
          <div key={i} style={{ minHeight: 28, padding: "4px 10px", borderLeft: `1px solid ${C.cardBorder}`, borderTop: `1px solid ${C.cardBorder}`, background: "#fff", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 10.5, fontWeight: 520, color: C.body, lineHeight: 1.3 }}>{t}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 시대에 따른 개인의 필요와 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "16px 48px 5px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>개인이 시대마다 다른 것을 필요로 했고, 그 필요가 공동체의 모양을 바꿔 왔다.</div>
        <div style={{ marginTop: 3, fontSize: 11.5, lineHeight: 1.4, color: C.body, fontWeight: 550 }}>농업은 신분과 생존, 산업화는 표준 교육과 일자리, 디지털은 정체성 실현을 중심으로 개인과 공동체의 관계를 다시 짠다.</div>
      </div>

      <div style={{ padding: "8px 48px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: colTpl, border: `1px solid ${C.cardBorder}`, borderRadius: 7, overflow: "hidden", background: "#fff", flex: 1 }}>
          <EraHead />
          <SummaryRow />
          <SectionBar label="개인" desc="생애주기별 기대와 필요한 공동체"
            unchanged="태어나 자라 늙기까지, 생애 단계마다 안전·건강·보살핌·배움·역할·존엄을 필요로 하고 제 몫의 사람이 되려 한다."
            changed="원하는 바가 깊어진다 — 신분을 잇는 생존(농업) → 표준 교육으로 좋은 일자리(산업화) → 전문성을 키운 개인이 저마다의 정체성을 기여로 발휘할 무대를 원함(디지털)." />
          {eraPerson.map((r) => (
            <PersonRow key={r.stage} label={r.stage} cells={[
              { txt: r.agri, cells: r.agriC },
              { txt: r.ind,  cells: r.indC  },
              { txt: r.dig,  cells: r.digC  },
            ]} />
          ))}
          <SectionBar label="공동체" desc="개인이 필요로 하는 만큼 권한을 맡고, 충족되면 거두는 관계"
            unchanged="공동체의 권한은 영구적이지 않다 — 개인이 생애단계·위험에 따라 필요한 만큼 맡겼다가, 스스로 감당할 수 있게 되면 거둔다."
            changed="무게가 옮겨간다 — 가족·마을의 자급(농업) → 학교·국가의 표준 관리(산업화) → 도시는 발휘·생활·조세를 책임지고, 국가는 도시들의 실험을 조율하며 최소 권리선과 위험 규칙을 세우는 분담(디지털)." />
          {eraComm.map((r) => (
            <CommRow key={r.unit} label={r.unit} cells={[r.agri, r.ind, r.dig]} />
          ))}
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
