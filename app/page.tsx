import Link from "next/link";

const versions = [
  { id: "mp/v0.1", label: "Master Plan v0.1", date: "2026.04", desc: "디지털 전환과 사회변혁팀 — 비전 선언 + 위협·통제 방안 + 연구 로드맵 + 연구 정리", color: "#1a2744" },
  { id: "v6", label: "종합 보고서 초안", date: "2026.04", desc: "디지털의 본질·사회 변화·위협 시나리오·대책(구축→금지→승인→전환)·실행 계획", color: "#111" },
  { id: "v6.3", label: "V6.3 Companion Report", date: "2026.04", desc: "이론적 배경과 상세한 논리 전개 — 종합 보고서 초안의 companion", color: "#333" },
  { id: "v5.5.1", label: "V5.5.1", date: "2026.03", desc: "변화→통제→경제질서→거버넌스→공동체 재편", color: "#1a6b4a" },
  { id: "v5.0", label: "V5.0", date: "2026.03", desc: "디지털 위협의 통제 — 4단계 흐름 (초기 버전)", color: "#2d6a4f" },
  { id: "v4.4.2", label: "V4.4.2", date: "2026.03", desc: "정체성 실현권 + 돌봄 윤리 + 상호의존성", color: "#1a5276" },
  { id: "v4.4", label: "V4.4", date: "2026.03", desc: "기술의 독점에서 자유의 확장으로 — 8장 체계", color: "#2c3e6b" },
  { id: "v4.3.1", label: "V4.3.1", date: "2026.03", desc: "자유의 확장 — 컴팩트 backing report", color: "#555" },
  { id: "v4.3", label: "V4.3", date: "2026.03", desc: "자유의 확장 — 정당 비전 포함", color: "#777" },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>A3 Viewer</h1>
      <p style={{ fontSize: 14, color: "#777", marginBottom: 32 }}>
        태재미래전략연구원 디지털 전환과 사회변혁팀 — 버전별 A3 요약
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {versions.map((v) => (
          <Link
            key={v.id}
            href={`/${v.id}`}
            style={{
              textDecoration: "none",
              textAlign: "left",
              padding: 20,
              background: "#fff",
              border: "1px solid #ddd",
              borderLeft: `4px solid ${v.color}`,
              borderRadius: 8,
              display: "block",
              transition: "box-shadow 0.15s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: v.color }}>{v.label}</span>
              <span style={{ fontSize: 11, color: "#aaa" }}>{v.date}</span>
            </div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.4, margin: 0 }}>{v.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
