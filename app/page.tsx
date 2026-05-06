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

function getMajor(name: string): string {
  const parts = parseVersion(name);
  return `${parts[0]}.${parts[1]}`;
}

const DESCRIPTIONS: Record<string, string> = {
  // v0.1.x — 초기 마스터플랜
  "v0.1": "첫 마스터플랜 + 종합 보고서 초안",
  "v0.1.1": "일정 수정 반영",
  "v0.1.2": "중기 목표 2027 복원, 2026 실행 일정 제거",
  "v0.1.3": "p.3/p.4 일정 정합성 맞춤",
  "v0.1.4": "세계의회·세계정부, 2026 일정 복원, NVIDIA 추가",
  "v0.1.5": "중기 목표 정리",
  "v0.1.6": "비전·일정 미세 조정",
  "v0.1.7": "구조 정리",
  "v0.1.8": "마이너 수정",
  // v0.2, v0.3
  "v0.2": "구조 개편",
  "v0.3": "내용 보강",
  // v0.5.x — Vision narrative + risk matrix
  "v0.5.2": "구조 재구성 + nano-banana 버전",
  "v0.5.5": "4-page A3 narrative 도입",
  "v0.5.6": "후속 정리",
  "v0.5.7": "prose-led Vision (역사→문제→조율→실행)",
  "v0.5.8": "5-section Vision + 6-category MECE 위험",
  "v0.5.9": "risk matrix (시급성 × 비가역성, 파급 범위)",
  "v0.5.10": "stacked urgency list on P3",
  "v0.5.11": "개체→갈망→공동체→위임 논리 흐름 정렬",
  "v0.5.12": "P2 레이아웃 수정 (준영님 피드백)",
  "v0.5.13": "핵심 연구 분야 컬러 코딩 제거",
  "v0.5.14": "P2 도입부·4축 설명 원문 복원",
  "v0.5.15": "'폭력의 민주화'→'폭력 독점의 침식', '민주주의 침식'→'공론장의 붕괴'",
  "v0.5.16": "'폭력 독점의 침식' → '폭력 독점의 균열'",
  "v0.5.17": "본문 학자 위첨자 + 미주 페이지 학자 인용",
  // v0.6.x — 5차원 프레임 + Vision/P3/P4 재구성
  "v0.6.0": "5차원 프레임 도입",
  "v0.6.1": "후속 정리",
  "v0.6.2": "후속 정리",
  "v0.6.3": "후속 정리",
  "v0.6.4": "후속 정리",
  "v0.6.5": "refined Vision, mission statement",
  "v0.6.6": "schematic P3, balanced P4, social-contract P5",
  "v0.6.9": "비전 페이지 5차원 단순화",
  "v0.6.10": "p.3 인용구 3개 교체 (케인스·루소·하버마스)",
  "v0.6.11": "p.3 루소·롤스 인용구 위치 교정",
  "v0.6.12": "p.4 재구성 — 4.1 5차원 표, 4.3 5 모델",
  "v0.6.13": "p.4 헤더·도입문구 수정, 위협 명칭 통일",
  "v0.6.14": "p.4 도입 문구를 4.1 아래로 이동",
  "v0.6.15": "p.4 도입 박스 복원",
  "v0.6.16": "p.4 5차원-통제 모델 매핑 추가",
  // v0.7.x — 4페이지 통합 + 새 사회계약 프레임
  "v0.7.0": "P1·P2·P3·P4 4페이지 통합본",
  "v0.7.5": "P1 4단계 네러티브 정합, P4 AI 연구 방법론 다이어그램",
  "v0.7.7": "P3 질서 붕괴와 새 사회계약 디자인 정리",
  "v0.7.9": "P2 분업→연결 프레임 재구성, P3 '구조→질서'·빨간색 한정",
};

const MAJOR_LABELS: Record<string, { title: string; sub: string }> = {
  "0.7": { title: "v0.7.x", sub: "4페이지 통합 + 네러티브 프레임 + 새 사회계약" },
  "0.6": { title: "v0.6.x", sub: "5차원 프레임 + Vision·P3·P4 재구성" },
  "0.5": { title: "v0.5.x", sub: "Vision narrative + risk matrix + 학자 인용" },
  "0.3": { title: "v0.3", sub: "내용 보강" },
  "0.2": { title: "v0.2", sub: "구조 개편" },
  "0.1": { title: "v0.1.x", sub: "첫 마스터플랜 + 일정 정합" },
};

const allVersions = getMpVersions();
const latest = allVersions[allVersions.length - 1] || "v0.1";
const archive = [...allVersions].reverse().slice(1);

const groupedArchive: Record<string, string[]> = {};
for (const v of archive) {
  const major = getMajor(v);
  if (!groupedArchive[major]) groupedArchive[major] = [];
  groupedArchive[major].push(v);
}

const sortedMajors = Object.keys(groupedArchive).sort((a, b) => {
  const [aMaj, aMin] = a.split(".").map(Number);
  const [bMaj, bMin] = b.split(".").map(Number);
  return (bMaj - aMaj) || (bMin - aMin);
});

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
            <div style={{ fontSize: 12, opacity: 0.4 }}>2026.05</div>
          </div>
          <p style={{ fontSize: 14, opacity: 0.7, margin: "0 0 16px", lineHeight: 1.5 }}>
            {DESCRIPTIONS[latest] || "비전 · 위협과 통제 방안 · 연구 내용 · 실행 계획"}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href={`/mp/${latest}`} style={{ textDecoration: "none", padding: "8px 18px", background: "rgba(255,255,255,0.15)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff", transition: "background 0.15s" }}>
              본문 보기 →
            </Link>
          </div>
        </div>
      </div>

      {/* Archive — 0.x 대별 그룹 */}
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: "#999", marginBottom: 16, textTransform: "uppercase" }}>Archive — 이전 버전</div>
        {sortedMajors.map((major) => {
          const label = MAJOR_LABELS[major] || { title: `v${major}.x`, sub: "" };
          const versions = groupedArchive[major];
          return (
            <div key={major} style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8, paddingBottom: 6, borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#1a2744" }}>{label.title}</span>
                <span style={{ fontSize: 12, color: "#777" }}>{label.sub}</span>
                <span style={{ fontSize: 11, color: "#bbb", marginLeft: "auto" }}>{versions.length}개</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
                {versions.map((v) => (
                  <Link key={v} href={`/mp/${v}`} style={{ textDecoration: "none", padding: "10px 14px", background: "#fafafa", border: "1px solid #eee", borderRadius: 6, display: "block", transition: "border-color 0.15s" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 2 }}>{v}</div>
                    <div style={{ fontSize: 11, color: "#777", lineHeight: 1.4 }}>
                      {DESCRIPTIONS[v] || "버전 업데이트"}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
