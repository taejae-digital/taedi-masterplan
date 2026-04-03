import Link from "next/link";

const current = [
  {
    id: "mp/v0.1.6",
    label: "Master Plan v0.1.6",
    type: "종합 보고서",
    date: "2026.04",
    desc: "비전 · 위협과 통제 방안 · 연구 내용 · 실행 계획",
    companion: { name: "Companion Report", href: "/v6.3" },
  },
];

const archive = [
  { id: "archive/v5.5.1", label: "v5.5.1", date: "2026.03", desc: "변화→통제→경제질서→거버넌스→공동체 재편" },
  { id: "archive/v5.0", label: "v5.0", date: "2026.03", desc: "디지털 위협의 통제 — 4단계 흐름" },
  { id: "archive/v4.4.2", label: "v4.4.2", date: "2026.03", desc: "정체성 실현권 + 돌봄 윤리" },
  { id: "archive/v4.4", label: "v4.4", date: "2026.03", desc: "기술의 독점에서 자유의 확장으로" },
  { id: "archive/v4.3.1", label: "v4.3.1", date: "2026.03", desc: "자유의 확장 — 컴팩트" },
  { id: "archive/v4.3", label: "v4.3", date: "2026.03", desc: "자유의 확장 — 정당 비전 포함" },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px", fontFamily: "Pretendard, -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#999", marginBottom: 6, textTransform: "uppercase" }}>태재미래전략연구원</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 6px", color: "#111", lineHeight: 1.2 }}>디지털 전환과 사회변혁</h1>
        <p style={{ fontSize: 15, color: "#666", margin: 0 }}>디지털이 초래할 위험성과 그 대책 — 마스터플랜 및 연구 문서</p>
      </div>

      {/* Current version */}
      {current.map((v) => (
        <div key={v.id} style={{ marginBottom: 40 }}>
          <div style={{ padding: "28px 32px", background: "#1a2744", borderRadius: 12, color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.5, marginBottom: 4 }}>{v.type}</div>
                <div style={{ fontSize: 24, fontWeight: 800 }}>{v.label}</div>
              </div>
              <div style={{ fontSize: 12, opacity: 0.4 }}>{v.date}</div>
            </div>
            <p style={{ fontSize: 14, opacity: 0.7, margin: "0 0 16px", lineHeight: 1.5 }}>{v.desc}</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Link href={`/${v.id}`} style={{ textDecoration: "none", padding: "8px 18px", background: "rgba(255,255,255,0.15)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff", transition: "background 0.15s" }}>
                본문 보기 →
              </Link>
              {v.companion && (
                <Link href={v.companion.href} style={{ textDecoration: "none", padding: "8px 18px", background: "rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", transition: "background 0.15s" }}>
                  {v.companion.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Archive */}
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: "#999", marginBottom: 12, textTransform: "uppercase" }}>Archive — 이전 버전</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
          {archive.map((v) => (
            <Link key={v.id} href={`/${v.id}`} style={{ textDecoration: "none", padding: "12px 16px", background: "#fafafa", border: "1px solid #eee", borderRadius: 6, display: "block", transition: "border-color 0.15s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#555" }}>{v.label}</span>
                <span style={{ fontSize: 10, color: "#bbb" }}>{v.date}</span>
              </div>
              <p style={{ fontSize: 11, color: "#999", lineHeight: 1.4, margin: 0 }}>{v.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
