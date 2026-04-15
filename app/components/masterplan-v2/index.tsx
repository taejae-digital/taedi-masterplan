import { IndividualChangePage } from "./individual-change-page";
import { NewOrderPage } from "./new-order-page";
import { VisionPage } from "./vision-page";
import { ThreatControlPage } from "./threat-control-page";
import { ExecutionPlanPage } from "./execution-plan-page";

export function VisionPlanV2() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: "24px 40px", background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const, fontSize: "106%" }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      {/* p.1 비전 — v0.1 개선판, 회장님 피드백 반영 */}
      <VisionPage />
      {/* p.2 개인의 변화 — 본질 5%, 모든 변화의 출발점 */}
      <IndividualChangePage />
      {/* p.3 새로운 질서 — 자본주의도 공산주의도 아닌 정보화 시대의 경제·정치 */}
      <NewOrderPage />
      {/* p.4 위협·통제 */}
      <ThreatControlPage />
      {/* p.5 실행 계획 */}
      <ExecutionPlanPage />
    </div>
  );
}
