import { VisionPage } from "./vision-page";
import { IndividualCommunityPage } from "./individual-community-page";
import { PoliticalEconomicPage } from "./political-economic-page";
import { ThreatsPage } from "./threats-page";
import { BlueprintPage } from "./blueprint-page";
import { ResearchPlanPage } from "./research-plan-page";

export function MasterPlanV6() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: 0, background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "116%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      {/* p.1 비전 */}
      <VisionPage />
      {/* p.2 디지털 전환에 따른 개인과 공동체 변화 */}
      <IndividualCommunityPage />
      {/* p.3 디지털 전환에 따른 정치/경제 질서 변화 */}
      <PoliticalEconomicPage />
      {/* p.4 디지털 기술이 초래할 위협 */}
      <ThreatsPage />
      {/* p.5 디지털 사회 청사진 */}
      <BlueprintPage />
      {/* p.6 연구 계획 */}
      <ResearchPlanPage />
    </div>
  );
}
