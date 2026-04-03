import { VisionPage } from "./vision-page";
import { ThreatControlPage } from "./threat-control-page";
import { ResearchContentPage } from "./research-content-page";
import { ExecutionPlanPage } from "./execution-plan-page";

export function VisionPlan() {
  return (
    <div style={{ width: 1500, margin: "0 auto", padding: "24px 40px", background: "#fff", fontFamily: "Pretendard, -apple-system, sans-serif", wordBreak: "keep-all" as const }}>
      <style>{`@media print { @page { size: A3 landscape; margin: 8mm; } * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }`}</style>
      <VisionPage />
      <ThreatControlPage />
      <ResearchContentPage />
      <ExecutionPlanPage />
    </div>
  );
}
