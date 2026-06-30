import React from "react";
import { C, COMMUNITY } from "./constants";
import { Header, Footer } from "./shared";
import { VERSION } from "./version";

const COMM_DATA = [
  {
    unit: "가정",
    color: COMMUNITY.home,
    unchanged: "생애 전환기와 일상의 안전망",
    changed: "도시 기능(교육·진료·일·쇼핑)이 가정으로 이전 → 정체성 발견의 첫 공간이 된다",
  },
  {
    unit: "이웃",
    color: COMMUNITY.neighbor,
    unchanged: "우연한 만남과 일상의 관계",
    changed: "지리 기반에서 취향·가치 기반으로 — 정체성을 실험하고 연결하는 관계",
  },
  {
    unit: "마을",
    color: COMMUNITY.village,
    unchanged: "물리적 생활 인프라 (편의점·의료·공원)",
    changed: "생존·생계 공동체에서 정체성 훈련 공간으로 — 공방·스튜디오·모임이 생활 인프라 안에 섞인다",
  },
  {
    unit: "도시",
    color: COMMUNITY.city,
    unchanged: "기여를 발휘하는 무대",
    changed: "교육·고용 집적 기능 축소 → 남는 기능 재정의 필요. 정체성을 기여로 연결하는 생태계",
  },
  {
    unit: "국가",
    color: COMMUNITY.nation,
    unchanged: "공통 위험 관리와 최소 권리선 보장",
    changed: "직접 서비스 공급자에서 도시 간 조율자로 — 도시들의 실험을 조율하고 공통 규칙을 세운다",
  },
  {
    unit: "세계",
    color: COMMUNITY.world,
    unchanged: "국경을 넘는 위험과 협력의 무대",
    changed: "새 질서 설계 없이 힘 대 힘 충돌 중 → 공멸 방지가 최우선 의제, 새로운 세계 질서 설계가 필요하다",
  },
];

export function CommunityChangePage() {
  return (
    <div style={{ pageBreakBefore: "always", height: "281mm", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Header subtitle="2.3 공동체의 변화" chapterNo="02" version={VERSION} />

      <div style={{ padding: "16px 48px 5px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ fontSize: 16.6, fontWeight: 900, color: C.ink, lineHeight: 1.22, letterSpacing: -0.4 }}>
          개인의 변화가 공동체를 다시 짠다.
        </div>
        <div style={{ marginTop: 3, fontSize: 11.5, lineHeight: 1.4, color: C.body, fontWeight: 550 }}>
          끌려가는 게 아니라 내가 원하는 공동체를 선택하고 만드는 주체가 된다.
        </div>
      </div>

      <div style={{ padding: "12px 48px 0", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* 6카드 3×2 그리드 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 10, flex: 1 }}>
          {COMM_DATA.map((item) => (
            <div key={item.unit} style={{
              background: "#fff",
              border: `1px solid ${C.cardBorder}`,
              borderLeft: `4px solid ${item.color}`,
              borderRadius: 7,
              padding: "13px 15px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              {/* 공동체명 */}
              <div style={{ fontSize: 14.5, fontWeight: 950, color: item.color, letterSpacing: -0.3 }}>
                {item.unit}
              </div>
              {/* 변하지 않는 것 */}
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 9.5, fontWeight: 900, color: C.muted, letterSpacing: 0.2 }}>변하지 않는 것</span>
                <span style={{ fontSize: 10.8, fontWeight: 520, color: C.muted, lineHeight: 1.4 }}>{item.unchanged}</span>
              </div>
              {/* 변하는 것 */}
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 9.5, fontWeight: 900, color: item.color, letterSpacing: 0.2 }}>변하는 것</span>
                <span style={{ fontSize: 10.8, fontWeight: 600, color: C.body, lineHeight: 1.4 }}>{item.changed}</span>
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
            공동체는 개인이 원해서 만드는 것이다 — 끌려가는 게 아니라 선택하는 것
          </span>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
