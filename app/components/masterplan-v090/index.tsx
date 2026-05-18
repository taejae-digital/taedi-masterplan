import { VisionPage } from "./vision-page";
import { IndividualCommunityPage } from "./individual-community-page";
import { CombinedPage } from "./combined-page";
import { ResearchPlanPage } from "./research-plan-page";

export function MasterPlanV090() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: 0, background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "116%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <VisionPage />
      <IndividualCommunityPage />
      <CombinedPage />
      <ResearchPlanPage />
    </div>
  );
}
