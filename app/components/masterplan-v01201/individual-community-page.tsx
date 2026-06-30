import React from "react";
import { C, COMMUNITY } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const ERAS = [
  {
    label: "농업 시대",
    tag: "생존",
    prod: "땅",
    desc: "대를 잇고 땅을 지키는 것이 삶의 목표였다. 신분과 혈연이 공동체의 기반이었고, 가족과 마을이 생산·양육·부양을 모두 떠안았다.",
  },
  {
    label: "산업화 시대",
    tag: "분업",
    prod: "자본·조직",
    desc: "표준 교육을 받고 좋은 일자리를 얻는 것이 목표였다. 균질할수록 효율이 높았고, 학교와 국가가 개인을 표준 규격으로 길러 관리했다.",
  },
  {
    label: "디지털 시대",
    tag: "정체성",
    prod: "정체성",
    desc: "저마다 다른 정체성을 발휘하는 것이 목표가 된다. 표준은 AI가 대체하고, 고유한 관점과 조합이 곧 생산수단이 된다.",
    accent: true,
  },
];

const INDIVIDUAL_CARDS = [
  {
    num: "01",
    layer: "발견",
    title: "AI가 정체성 발견을 앞당긴다",
    body: "AI가 내 행동 패턴을 분석해 강점과 취향을 먼저 짚어준다. 수십 년 걸리던 자기 이해가 어린 시절부터 가능해진다.",
    color: C.self,
  },
  {
    num: "02",
    layer: "발휘",
    title: "생산 비용이 0에 가까워진다",
    body: "정체성만 잡으면 영상·책·사업·음악을 혼자 만들 수 있다. 자본과 조직 없이도 발견한 정체성을 곧바로 세상에 펼친다.",
    color: C.accent,
  },
  {
    num: "03",
    layer: "환경",
    title: "표준적인 일은 AI가 대체한다",
    body: "정해진 절차와 균질한 작업은 AI가 더 빠르고 싸게 해낸다. 표준 규격에 맞춘 사람일수록 설 자리가 줄어든다.",
    color: C.village,
  },
  {
    num: "04",
    layer: "결론",
    title: "고유성이 유일한 경쟁력이 된다",
    body: "남는 것은 나만이 할 수 있는 것 — 고유한 관점과 조합이다. 일찍 정체성을 발견하고 키우는 것이 생존의 조건이 된다.",
    color: C.gov,
  },
];

const COMM_DATA = [
  {
    unit: "가정",
    color: COMMUNITY.home,
    flow: "개인의 정체성 발견이 시작되는 곳",
    unchanged: "생애 전환기와 일상의 안전망",
    changed: "도시 기능(교육·진료·일·쇼핑)이 가정으로 들어오면서, 정체성을 가장 먼저 발견하는 공간이 된다",
  },
  {
    unit: "이웃",
    color: COMMUNITY.neighbor,
    flow: "가정에서 찾은 정체성을 밖에서 비춰보는 곳",
    unchanged: "우연한 만남과 일상의 관계",
    changed: "지리로 묶이던 관계가 취향·가치 기반으로 — 서로의 다름을 비추며 정체성을 실험한다",
  },
  {
    unit: "마을",
    color: COMMUNITY.village,
    flow: "이웃과의 실험을 훈련으로 잇는 곳",
    unchanged: "물리적 생활 인프라 (편의점·의료·공원)",
    changed: "생존 공동체에서 정체성 훈련 공간으로 — 공방·스튜디오·동호회가 생활권 안에 들어온다",
  },
  {
    unit: "도시",
    color: COMMUNITY.city,
    flow: "훈련된 정체성을 기여로 펼치는 곳",
    unchanged: "기여를 발휘하는 무대",
    changed: "교육·고용 집적 기능은 가정·마을로 분산되고, 정체성을 실제 기여로 잇는 생태계로 재정의된다",
  },
  {
    unit: "국가",
    color: COMMUNITY.nation,
    flow: "도시들의 기여가 충돌하지 않게 조율하는 곳",
    unchanged: "공통 위험 관리와 최소 권리선",
    changed: "직접 공급자에서 도시 간 조율자로 — 이동권·기회의 바닥·위험 규칙을 세운다",
  },
  {
    unit: "세계",
    color: COMMUNITY.world,
    flow: "국가를 넘는 공동 위험을 함께 다루는 곳",
    unchanged: "국경을 넘는 위험과 협력의 무대",
    changed: "힘 대 힘 충돌을 멈추고 공멸을 막는 것이 최우선 — 새로운 세계 질서 설계가 필요해진다",
  },
];

export function IndividualCommunityPage() {
  const SectionLabel = ({ no, title, lead }: { no: string; title: string; lead: string }) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginBottom: 7 }}>
      <span style={{ display: "inline-block", width: 4, height: 15, background: C.accentDeep, borderRadius: 1, transform: "translateY(2px)" }} />
      <span style={{ fontSize: 10.5, fontWeight: 900, color: C.muted, letterSpacing: 0.5 }}>{no}</span>
      <span style={{ fontSize: 13.5, fontWeight: 900, color: C.ink, letterSpacing: -0.3 }}>{title}</span>
      <span style={{ fontSize: 11, fontWeight: 600, color: C.body }}>{lead}</span>
    </div>
  );

  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2. 개인과 공동체" chapterNo="02" version={VERSION} />

      <div style={{ padding: "10px 48px 6px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>
          정체성이 생산수단이 되는 시대, 개인이 공동체를 선택한다.
        </div>
      </div>

      <div style={{ padding: "20px 48px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18 }}>

        {/* 2.1 시대적 변화 — 3시대 가로 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
          <SectionLabel no="2.1" title="시대적 변화" lead="농업은 땅이, 산업화는 자본이, 디지털은 정체성이 생산수단이다." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 11, flex: 1, minHeight: 0 }}>
            {ERAS.map((era) => (
              <div key={era.label} style={{
                border: `1px solid ${C.cardBorder}`,
                borderTop: `3px solid ${era.accent ? C.accentDeep : "#3a3a3a"}`,
                borderRadius: 6,
                padding: "13px 15px",
                background: era.accent ? C.accentSoft : "#fafafa",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                  <span style={{ fontSize: 14, fontWeight: 900, color: era.accent ? C.accentDeep : C.ink }}>{era.label}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 800, color: C.muted }}>{era.tag}</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 850, color: era.accent ? C.accentDeep : C.navySoft }}>
                  생산수단 · {era.prod}
                </div>
                <div style={{ fontSize: 11.5, fontWeight: 500, color: C.body, lineHeight: 1.55 }}>
                  {era.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2.2 디지털과 개인의 변화 — 4카드 가로 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
          <SectionLabel no="2.2" title="디지털 기술과 개인의 변화" lead="정체성을 아는 것이 곧 생존이 된다." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 11, flex: 1, minHeight: 0 }}>
            {INDIVIDUAL_CARDS.map((card, i) => (
              <div key={card.num} style={{
                border: `1px solid ${C.cardBorder}`,
                borderLeft: `4px solid ${card.color}`,
                borderRadius: 6,
                padding: "13px 14px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                justifyContent: "space-between",
                position: "relative",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", background: card.color, borderRadius: 3, padding: "1px 6px", letterSpacing: 0.5 }}>{card.layer}</span>
                  <span style={{ fontSize: 9.5, fontWeight: 900, color: card.color, opacity: 0.55 }}>{card.num}</span>
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 900, color: card.color, lineHeight: 1.25 }}>{card.title}</div>
                <div style={{ fontSize: 11.3, fontWeight: 500, color: C.body, lineHeight: 1.55 }}>
                  {card.body}
                </div>
                {i < 3 && (
                  <span style={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", fontSize: 14, fontWeight: 900, color: C.faint, zIndex: 2 }}>›</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2.3 공동체의 변화 — 6카드 가로 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1.25, minHeight: 0 }}>
          <SectionLabel no="2.3" title="공동체의 변화" lead="끌려가는 게 아니라 내가 원하는 공동체를 선택하고 만드는 주체가 된다." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 9, flex: 1, minHeight: 0 }}>
            {COMM_DATA.map((item, i) => (
              <div key={item.unit} style={{
                border: `1px solid ${C.cardBorder}`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 6,
                padding: "11px 11px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                justifyContent: "space-between",
                position: "relative",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 950, color: item.color }}>{item.unit}</span>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, color: item.color, lineHeight: 1.35, paddingBottom: 5, borderBottom: `1px dashed ${C.hairline}` }}>
                  {item.flow}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: C.muted, letterSpacing: 0.3 }}>변하지 않는 것</span>
                  <span style={{ fontSize: 9.7, fontWeight: 500, color: C.muted, lineHeight: 1.45 }}>{item.unchanged}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: item.color, letterSpacing: 0.3 }}>변하는 것</span>
                  <span style={{ fontSize: 9.7, fontWeight: 600, color: C.body, lineHeight: 1.45 }}>{item.changed}</span>
                </div>
                {i < 5 && (
                  <span style={{ position: "absolute", right: -9, top: 14, fontSize: 13, fontWeight: 900, color: C.faint, zIndex: 2 }}>›</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer version={VERSION} />
    </div>
  );
}
