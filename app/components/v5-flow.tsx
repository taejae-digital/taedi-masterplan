import { V5TableDiagram } from "./v5-table";
import { V5Page1Detail, V5DetailSection } from "./v5-detail";

export function V5FlowDiagram() {
  return (
    <div style={{ width: 1200, margin: "0 auto", background: "#fff", padding: "0 30px" }}>
      {/* 페이지 1 */}
      <div style={{ minHeight: "297mm", pageBreakAfter: "always" }}>
        <V5TableDiagram />
        <V5Page1Detail />
      </div>
      {/* 페이지 2 */}
      <div>
        <V5DetailSection />
      </div>
    </div>
  );
}
