import React from "react";
import { C } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const CARDS = [
  {
    title: "AI가 정체성 발견을 앞당긴다",
    body: "AI가 행동 패턴을 분석해 내 강점과 취향을 먼저 짚어준다. 수십 년 걸리던 자기 이해가 훨씬 일찍 가능해진다.",
    color: C.self,
    soft: C.selfSoft,
  },
  {
    title: "생산 비용이 극적으로 낮아진다",
    body: "정체성만 잡으면 영상·책·사업·음악을 혼자 만들 수 있다. 자본과 조직 없이도 고유한 것을 세상에 내놓을 수 있다.",
    color: C.accent,
    soft: C.accentSoft,
  },
  {
    title: "표준화는 도태, 고유성이 경쟁력",
    body: "AI가 표준적인 작업을 대체한다. 남는 것은 나만이 할 수 있는 것 — 고유한 관점, 고유한 조합, 고유한 목소리다.",
    color: C.village,
    soft: "#eef4ed",
  },
  {
    title: "정체성을 아는 것이 곧 생존",
    body: "표준 경로(학교→대학→직장)를 따를수록 오히려 경쟁력을 잃는다. 일찍 정체성을 발견하고 고유한 방향을 잡는 것이 생존 전략이 된다.",
    color: C.gov,
    soft: C.govSoft,
  },
];

export function DigitalIndividualPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2.2 디지털 기술과 개인의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "16px 48px 5px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>
          디지털 기술은 정체성을 발견하고 발휘하는 비용을 거의 0으로 만들었다.
        </div>
        <div style={{ marginTop: 3, fontSize: 11.5, lineHeight: 1.4, color: C.body, fontWeight: 550 }}>
          농업은 땅이, 산업화는 자본과 조직이 생산수단이었다. 디지털 시대의 생산수단은 정체성이다.
        </div>
      </div>

      <div style={{ padding: "14px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        {/* 4카드 2×2 그리드 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12, flex: 1 }}>
          {CARDS.map((card) => (
            <div key={card.title} style={{
              background: "#fff",
              border: `1px solid ${C.cardBorder}`,
              borderLeft: `4px solid ${card.color}`,
              borderRadius: 7,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: card.color, lineHeight: 1.25, letterSpacing: -0.2 }}>
                {card.title}
              </div>
              <div style={{ fontSize: 11.5, fontWeight: 520, color: C.body, lineHeight: 1.5 }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 강조 문구 */}
        <div style={{
          background: C.ink,
          borderRadius: 6,
          padding: "11px 20px",
          textAlign: "center",
          marginBottom: 4,
        }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: -0.2 }}>
            디지털 시대, 정체성은 선택이 아니라 생존의 조건이다
          </span>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
