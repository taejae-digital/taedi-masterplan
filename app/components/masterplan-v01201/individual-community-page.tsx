import React from "react";
import { C, COMMUNITY } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const ERAS = [
  {
    label: "농업 시대",
    tag: "생존",
    color: "#3a3a3a",
    prod: "땅",
    desc: "대를 잇고 땅을 지키는 것이 목표. 신분과 생존이 공동체의 기반.",
  },
  {
    label: "산업화 시대",
    tag: "분업",
    color: "#3a3a3a",
    prod: "자본·조직",
    desc: "표준 교육과 좋은 일자리가 목표. 국가와 기업이 개인을 관리.",
  },
  {
    label: "디지털 시대",
    tag: "정체성",
    color: C.accentDeep,
    prod: "정체성",
    desc: "저마다 다른 정체성을 발휘하는 것이 목표. 고유성이 생산수단.",
  },
];

const INDIVIDUAL_CARDS = [
  {
    title: "AI가 정체성 발견을 앞당긴다",
    body: "AI가 행동 패턴을 분석해 강점과 취향을 먼저 짚어준다. 수십 년 걸리던 자기 이해가 훨씬 일찍 가능해진다.",
    color: C.self,
  },
  {
    title: "생산 비용이 극적으로 낮아진다",
    body: "정체성만 잡으면 영상·책·사업·음악을 혼자 만들 수 있다. 자본과 조직 없이도 고유한 것을 세상에 내놓을 수 있다.",
    color: C.accent,
  },
  {
    title: "표준화는 도태, 고유성이 경쟁력",
    body: "AI가 표준적인 작업을 대체한다. 남는 것은 나만이 할 수 있는 것 — 고유한 관점, 고유한 조합, 고유한 목소리.",
    color: C.village,
  },
  {
    title: "정체성을 아는 것이 곧 생존",
    body: "표준 경로(학교→대학→직장)를 따를수록 경쟁력을 잃는다. 일찍 정체성을 발견하고 고유한 방향을 잡는 것이 생존 전략.",
    color: C.gov,
  },
];

const COMM_DATA = [
  {
    unit: "가정",
    color: COMMUNITY.home,
    unchanged: "생애 전환기와 일상의 안전망",
    changed: "도시 기능(교육·진료·일·쇼핑)이 가정으로 이전 → 정체성 발견의 첫 공간",
  },
  {
    unit: "이웃",
    color: COMMUNITY.neighbor,
    unchanged: "우연한 만남과 일상의 관계",
    changed: "지리 기반 → 취향·가치 기반으로 재편",
  },
  {
    unit: "마을",
    color: COMMUNITY.village,
    unchanged: "물리적 생활 인프라 (편의점·의료·공원)",
    changed: "생존 공동체 → 정체성 훈련 공간으로. 공방·스튜디오·모임이 섞인다",
  },
  {
    unit: "도시",
    color: COMMUNITY.city,
    unchanged: "기여를 발휘하는 무대",
    changed: "교육·고용 집적 기능 축소 → 남는 기능 재정의 필요",
  },
  {
    unit: "국가",
    color: COMMUNITY.nation,
    unchanged: "공통 위험 관리·최소 권리선",
    changed: "직접 공급자 → 도시 간 조율자로",
  },
  {
    unit: "세계",
    color: COMMUNITY.world,
    unchanged: "국경 넘는 위험과 협력의 무대",
    changed: "힘 대 힘 충돌 중 → 공멸 방지가 최우선, 새 질서 설계 필요",
  },
];

export function IndividualCommunityPage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 6px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 15.5, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>
          정체성이 생산수단이 되는 시대, 개인이 공동체를 선택한다.
        </div>
      </div>

      {/* 3단 본문 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1.4fr", gap: 0, flex: 1, padding: "10px 48px 8px", columnGap: 14 }}>

        {/* 2.1 시대적 변화 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: C.muted, letterSpacing: 0.5, textTransform: "uppercase" as const, marginBottom: 2 }}>
            2.1 시대적 변화
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 900, color: C.ink, lineHeight: 1.25, marginBottom: 4 }}>
            농업은 땅이, 산업화는 자본이,<br />디지털은 정체성이 생산수단이다.
          </div>
          {ERAS.map((era, i) => (
            <div key={era.label} style={{
              border: `1px solid ${C.cardBorder}`,
              borderLeft: `4px solid ${i === 2 ? C.accentDeep : C.cardBorder}`,
              borderRadius: 5,
              padding: "8px 10px",
              background: i === 2 ? C.accentSoft : "#fafafa",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 900, color: i === 2 ? C.accentDeep : C.ink }}>{era.label}</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: C.muted }}>· {era.tag}</span>
              </div>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: i === 2 ? C.accentDeep : C.muted }}>
                생산수단: {era.prod}
              </div>
              <div style={{ fontSize: 9.8, fontWeight: 500, color: C.body, lineHeight: 1.4 }}>
                {era.desc}
              </div>
            </div>
          ))}
        </div>

        {/* 2.2 개인의 변화 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: C.muted, letterSpacing: 0.5, textTransform: "uppercase" as const, marginBottom: 2 }}>
            2.2 디지털과 개인의 변화
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 900, color: C.ink, lineHeight: 1.25, marginBottom: 4 }}>
            정체성을 아는 것이<br />곧 생존이 된다.
          </div>
          {INDIVIDUAL_CARDS.map((card) => (
            <div key={card.title} style={{
              border: `1px solid ${C.cardBorder}`,
              borderLeft: `4px solid ${card.color}`,
              borderRadius: 5,
              padding: "8px 10px",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              flex: 1,
            }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: card.color, lineHeight: 1.3 }}>
                {card.title}
              </div>
              <div style={{ fontSize: 9.8, fontWeight: 500, color: C.body, lineHeight: 1.4 }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>

        {/* 2.3 공동체의 변화 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: C.muted, letterSpacing: 0.5, textTransform: "uppercase" as const, marginBottom: 2 }}>
            2.3 공동체의 변화
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 900, color: C.ink, lineHeight: 1.25, marginBottom: 4 }}>
            끌려가는 게 아니라<br />선택하고 만드는 주체가 된다.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, flex: 1 }}>
            {COMM_DATA.map((item) => (
              <div key={item.unit} style={{
                border: `1px solid ${C.cardBorder}`,
                borderLeft: `4px solid ${item.color}`,
                borderRadius: 5,
                padding: "7px 9px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}>
                <div style={{ fontSize: 12, fontWeight: 950, color: item.color }}>{item.unit}</div>
                <div style={{ fontSize: 9, fontWeight: 500, color: C.muted, lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 800 }}>유지 </span>{item.unchanged}
                </div>
                <div style={{ fontSize: 9, fontWeight: 600, color: C.body, lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 800, color: item.color }}>변화 </span>{item.changed}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
