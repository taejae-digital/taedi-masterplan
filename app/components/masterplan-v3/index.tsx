import { VisionPage } from "./vision-page";
import { IndividualChangePage } from "./individual-change-page";
import { CommunityPage } from "./community-page";
import { EconomicOrderPage } from "./economic-order-page";
import { RisksGovernancePage } from "./risks-governance-page";
import { ResearchExecutionPage } from "./research-execution-page";

export function MasterPlanV3() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: "24px 40px", background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "106%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      {/* p.1 비전 — 개인의 시대, 역사의 패턴, 목표하는 미래 */}
      <VisionPage />
      {/* p.2 개인의 변화 — 역량·자율성·생애주기·건강·정체성 */}
      <IndividualChangePage />
      {/* p.3 개인과 공동체 — 위임 구조의 재편 (v0.3.10 신규) */}
      <CommunityPage />
      {/* p.4 경제 질서의 전환 — Polanyi, 노동·가치·규모 변형 */}
      <EconomicOrderPage />
      {/* p.5 위험의 지형과 거버넌스 — 선별 기준, FDA 모델 */}
      <RisksGovernancePage />
      {/* p.6 태재가 하는 일 — 이론·공론화·솔루션·실행 */}
      <ResearchExecutionPage />
    </div>
  );
}
