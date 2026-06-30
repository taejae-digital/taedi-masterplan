import { VisionPage } from "./vision-page";
import { IndividualCommunityPage } from "./individual-community-page";
import { DigitalIndividualPage } from "./digital-individual-page";
import { CommunityChangePage } from "./community-change-page";
import { CombinedPage } from "./combined-page";
import { ResearchPlanPage } from "./research-plan-page";
import { GovernanceExpansionPage } from "./governance-expansion-page";

export function MasterPlanV01201() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: 0, background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "116%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <VisionPage />
      <IndividualCommunityPage />
      <DigitalIndividualPage />
      <CommunityChangePage />
      <CombinedPage />
      <GovernanceExpansionPage />
      <ResearchPlanPage />
    </div>
  );
}
