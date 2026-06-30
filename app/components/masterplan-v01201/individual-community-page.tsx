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
    title: "AI가 정체성 발견을 앞당긴다",
    body: "AI가 내 행동 패턴을 분석해 강점과 취향을 먼저 짚어준다. 수십 년 걸리던 자기 이해가 어린 시절부터 가능해진다.",
    color: C.self,
  },
  {
    num: "02",
    title: "생산 비용이 극적으로 낮아진다",
    body: "정체성만 잡으면 영상·책·사업·음악을 혼자 만들 수 있다. 자본과 조직 없이도 고유한 것을 세상에 내놓는다.",
    color: C.accent,
  },
  {
    num: "03",
    title: "표준화는 도태, 고유성이 경쟁력",
    body: "AI가 표준적인 작업을 대체한다. 남는 것은 나만이 할 수 있는 것 — 고유한 관점, 고유한 조합, 고유한 목소리다.",
    color: C.village,
  },
  {
    num: "04",
    title: "정체성을 아는 것이 곧 생존",
    body: "표준 경로(학교→대학→직장)를 따를수록 오히려 경쟁력을 잃는다. 일찍 정체성을 발견하고 고유한 방향을 잡는 것이 생존 전략이 된다.",
    color: C.gov,
  },
];

const COMM_DATA = [
  {
    unit: "가정",
    color: COMMUNITY.home,
    unchanged: "생애 전환기와 일상의 안전망",
    changed: "도시 기능(교육·진료·일·쇼핑)이 가정으로 들어오면서, 시간·공간의 자유와 조기 노출 속에 정체성을 발견하는 첫 공간이 된다",
  },
  {
    unit: "이웃",
    color: COMMUNITY.neighbor,
    unchanged: "우연한 만남과 일상의 관계",
    changed: "지리적 거리로 묶이던 관계가 취향·가치 기반으로 재편된다. 정체성을 실험하고 서로의 다름을 비추는 사이가 된다",
  },
  {
    unit: "마을",
    color: COMMUNITY.village,
    unchanged: "물리적 생활 인프라 (편의점·의료·공원)",
    changed: "생존·생계의 공동체에서 정체성 훈련의 공간으로. 공방·스튜디오·동호회가 생활 인프라 안에 섞이며, 오는 이유가 생존에서 성장으로 바뀐다",
  },
  {
    unit: "도시",
    color: COMMUNITY.city,
    unchanged: "기여를 발휘하는 무대",
    changed: "교육·고용을 집적·서열화하던 기능이 가정과 마을로 분산된다. 남는 기능을 재정의해, 정체성을 실제 기여로 잇는 생태계가 된다",
  },
  {
    unit: "국가",
    color: COMMUNITY.nation,
    unchanged: "공통 위험 관리와 최소 권리선 보장",
    changed: "직접 서비스를 공급하던 역할에서 도시 간 조율자로. 도시들의 실험을 조율하고 이동권·기회의 바닥·위험 규칙을 세운다",
  },
  {
    unit: "세계",
    color: COMMUNITY.world,
    unchanged: "국경을 넘는 위험과 협력의 무대",
    changed: "새 질서 설계 없이 힘 대 힘으로 충돌 중이다. 공멸 방지가 최우선 의제가 되고, 새로운 세계 질서의 설계가 필요해진다",
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

      <div style={{ padding: "18px 48px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>

        {/* 2.1 시대적 변화 — 3시대 가로 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <SectionLabel no="2.1" title="시대적 변화" lead="농업은 땅이, 산업화는 자본이, 디지털은 정체성이 생산수단이다." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 11, flex: 1 }}>
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
                justifyContent: "flex-start",
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
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <SectionLabel no="2.2" title="디지털 기술과 개인의 변화" lead="정체성을 아는 것이 곧 생존이 된다." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 11, flex: 1 }}>
            {INDIVIDUAL_CARDS.map((card) => (
              <div key={card.num} style={{
                border: `1px solid ${C.cardBorder}`,
                borderLeft: `4px solid ${card.color}`,
                borderRadius: 6,
                padding: "13px 14px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 7,
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: card.color, opacity: 0.7 }}>{card.num}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 900, color: card.color, lineHeight: 1.25 }}>{card.title}</span>
                </div>
                <div style={{ fontSize: 11.3, fontWeight: 500, color: C.body, lineHeight: 1.55 }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2.3 공동체의 변화 — 6카드 가로 */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1.3 }}>
          <SectionLabel no="2.3" title="공동체의 변화" lead="끌려가는 게 아니라 내가 원하는 공동체를 선택하고 만드는 주체가 된다." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 9, flex: 1 }}>
            {COMM_DATA.map((item) => (
              <div key={item.unit} style={{
                border: `1px solid ${C.cardBorder}`,
                borderTop: `3px solid ${item.color}`,
                borderRadius: 6,
                padding: "11px 11px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 9,
              }}>
                <div style={{ fontSize: 14, fontWeight: 950, color: item.color }}>{item.unit}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: C.muted, letterSpacing: 0.3 }}>유지</span>
                  <span style={{ fontSize: 10, fontWeight: 500, color: C.muted, lineHeight: 1.45 }}>{item.unchanged}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 900, color: item.color, letterSpacing: 0.3 }}>변화</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: C.body, lineHeight: 1.45 }}>{item.changed}</span>
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
