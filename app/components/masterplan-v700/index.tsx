import { VisionPage } from "./vision-page";
import { IndividualCommunityPage } from "./individual-community-page";
import { CombinedPage } from "./combined-page";
import { ResearchPlanPage } from "./research-plan-page";

export function MasterPlanV700() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: 0, background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "116%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      {/* p.1 비전 */}
      <VisionPage />
      {/* p.2 디지털 전환에 따른 개인과 공동체 변화 */}
      <IndividualCommunityPage />
      {/* p.3 질서 붕괴와 새 사회계약 (구 p.3+4+5 통합) */}
      <CombinedPage />
      {/* p.4 연구 계획 */}
      <ResearchPlanPage />
    </div>
  );
}
