import { VisionPage } from "./vision-page";
import { IndividualCommunityPage } from "./individual-community-page";
import { DigitalProblemsPage } from "./digital-problems-page";
import { ResearchPlanPage } from "./research-plan-page";

export function MasterPlanV059() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: "24px 40px", background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "106%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      {/* p.1 비전 — 개인의 시대와 새로운 질서의 설계 */}
      <VisionPage />
      {/* p.2 개인의 확장과 공동체와의 재균형 */}
      <IndividualCommunityPage />
      {/* p.3 디지털 시대에 예측되는 문제들 */}
      <DigitalProblemsPage />
      {/* p.4 해결책 · 연구 분야 · 실행 계획 */}
      <ResearchPlanPage />
    </div>
  );
}
