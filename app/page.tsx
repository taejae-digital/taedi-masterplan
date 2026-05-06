import Link from "next/link";
import fs from "fs";
import path from "path";

function parseVersion(name: string): number[] {
  return name.replace(/^v/, "").split(".").map((n) => parseInt(n, 10) || 0);
}

function compareVersions(a: string, b: string): number {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function getMpVersions() {
  const mpDir = path.join(process.cwd(), "app", "mp");
  if (!fs.existsSync(mpDir)) return [];
  return fs.readdirSync(mpDir)
    .filter((d) => fs.statSync(path.join(mpDir, d)).isDirectory())
    .filter((d) => /^v0\./.test(d))
    .sort(compareVersions);
}

const allVersions = getMpVersions();
const latest = allVersions[allVersions.length - 1] || "v0.1";
const archive = [...allVersions].reverse().slice(1);

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px", fontFamily: "Pretendard, -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#999", marginBottom: 6, textTransform: "uppercase" }}>태재미래전략연구원</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 6px", color: "#111", lineHeight: 1.2 }}>디지털 전환과 사회변혁</h1>
        <p style={{ fontSize: 15, color: "#666", margin: 0 }}>디지털이 초래할 위험성과 그 대책 — 마스터플랜 및 연구 문서</p>
      </div>

      {/* Current version — auto-detected */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ padding: "28px 32px", background: "#1a2744", borderRadius: 12, color: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.5, marginBottom: 4 }}>종합 보고서</div>
              <div style={{ fontSize: 24, fontWeight: 800 }}>Master Plan {latest}</div>
            </div>
            <div style={{ fontSize: 12, opacity: 0.4 }}>2026.04</div>
          </div>
          <p style={{ fontSize: 14, opacity: 0.7, margin: "0 0 16px", lineHeight: 1.5 }}>비전 · 위협과 통제 방안 · 연구 내용 · 실행 계획</p>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href={`/mp/${latest}`} style={{ textDecoration: "none", padding: "8px 18px", background: "rgba(255,255,255,0.15)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff", transition: "background 0.15s" }}>
              본문 보기 →
            </Link>
          </div>
        </div>
      </div>

      {/* Archive — 0.x 버전 자동 감지 */}
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: "#999", marginBottom: 12, textTransform: "uppercase" }}>Archive — 이전 버전</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
          {archive.map((v) => (
            <Link key={v} href={`/mp/${v}`} style={{ textDecoration: "none", padding: "10px 14px", background: "#fafafa", border: "1px solid #eee", borderRadius: 6, display: "block", transition: "border-color 0.15s" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#555" }}>Master Plan {v}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
