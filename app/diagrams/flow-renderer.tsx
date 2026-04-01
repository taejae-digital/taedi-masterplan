import type { FlowNode, FlowEdge, ColLabel } from "./types";

function getCenter(node: FlowNode) {
  return { x: node.x + node.w / 2, y: node.y + (node.h ?? 36) / 2 };
}

function getRight(node: FlowNode) {
  return { x: node.x + node.w, y: node.y + (node.h ?? 36) / 2 };
}

function getLeft(node: FlowNode) {
  return { x: node.x, y: node.y + (node.h ?? 36) / 2 };
}

export function FlowRenderer({
  nodes,
  edges,
  columns,
  width = 1400,
  height = 700,
  title,
  subtitle,
}: {
  nodes: FlowNode[];
  edges: FlowEdge[];
  columns: ColLabel[];
  width?: number;
  height?: number;
  title: string;
  subtitle: string;
}) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div style={{ width, background: "#fff", padding: "24px 30px", borderRadius: 8 }}>
      <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{title}</h1>
      <p style={{ fontSize: 12, color: "#999", marginBottom: 16 }}>{subtitle}</p>

      <div style={{ position: "relative", width: "100%", height }}>
        {/* Column borders */}
        {columns.map((col, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: col.x - 8,
              top: col.y - 24,
              width: col.w + 16,
              height: col.h + 32,
              border: `1px ${col.dashed ? "dashed" : "solid"} ${col.borderColor}40`,
              borderRadius: 6,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -10,
                left: 8,
                background: "#fff",
                padding: "0 6px",
                fontSize: 11,
                fontWeight: 700,
                color: col.borderColor,
              }}
            >
              {col.label}
            </span>
          </div>
        ))}

        {/* SVG edges */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox={`0 0 ${width} ${height}`}
        >
          <defs>
            {Array.from(new Set(edges.map((e) => e.color))).map((c) => (
              <marker
                key={c}
                id={`a-${c.replace("#", "")}`}
                markerWidth="6"
                markerHeight="4"
                refX="5"
                refY="2"
                orient="auto"
              >
                <polygon points="0 0,6 2,0 4" fill={c} opacity="0.7" />
              </marker>
            ))}
          </defs>
          {edges.map((e, i) => {
            const from = nodeMap[e.from];
            const to = nodeMap[e.to];
            if (!from || !to) return null;
            const a = getRight(from);
            const b = getLeft(to);
            // stepped path: horizontal out → vertical → horizontal in
            const midX = a.x + (b.x - a.x) * 0.5;
            const d = `M${a.x},${a.y} L${midX},${a.y} L${midX},${b.y} L${b.x},${b.y}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={e.color}
                strokeWidth={1}
                opacity={0.25}
                markerEnd={`url(#a-${e.color.replace("#", "")})`}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((n) => (
          <div
            key={n.id}
            style={{
              position: "absolute",
              left: n.x,
              top: n.y,
              width: n.w,
              height: n.h ?? 36,
              background: n.color,
              color: "#fff",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 11,
              fontWeight: 600,
              lineHeight: 1.3,
              textAlign: "center",
              padding: "4px 8px",
            }}
          >
            {n.label}
            {n.sub && <span style={{ fontSize: 9, fontWeight: 400, opacity: 0.8 }}>{n.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
