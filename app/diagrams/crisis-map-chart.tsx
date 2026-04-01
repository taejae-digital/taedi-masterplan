"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { threats, categories, controlColors, timelineOrder } from "./crisis-map-data";

const W = 1420, H = 820;

const timelineLabels: Record<string, string> = {
  "임박": "임박 (1~3년)",
  "진행중": "진행중 (현재)",
  "중기": "중기 (3~10년)",
  "장기": "장기 (10년+)",
};

export function CrisisMapChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Build hierarchy: root → timeline → threats
    const hierarchyData = {
      name: "AI 위기",
      children: timelineOrder.map((tl) => ({
        name: tl,
        id: tl,
        children: threats
          .filter((t) => t.timeline === tl)
          .sort((a, b) => b.severity - a.severity)
          .map((t) => ({
            name: t.name,
            id: t.id,
            value: t.severity * t.severity,
            severity: t.severity,
            control: t.control,
            timeline: t.timeline,
            scenario: t.scenario,
            category: t.category,
            categoryName: categories.find((c) => c.id === t.category)?.name || "",
          })),
      })),
    };

    const root = d3.hierarchy(hierarchyData)
      .sum((d) => (d as { value?: number }).value || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    d3.treemap<typeof hierarchyData>()
      .size([W, H])
      .paddingTop(32)
      .paddingRight(4)
      .paddingBottom(4)
      .paddingLeft(4)
      .paddingInner(3)
      (root);

    const g = svg.append("g");

    // Timeline column backgrounds + labels
    root.children?.forEach((tl) => {
      const c = tl as d3.HierarchyRectangularNode<typeof hierarchyData>;
      const tlId = (c.data as { id?: string }).id || "";

      g.append("rect")
        .attr("x", c.x0)
        .attr("y", c.y0)
        .attr("width", c.x1 - c.x0)
        .attr("height", c.y1 - c.y0)
        .attr("fill", "#f5f5f5")
        .attr("rx", 6)
        .attr("stroke", "#e0e0e0")
        .attr("stroke-width", 1);

      g.append("text")
        .attr("x", c.x0 + (c.x1 - c.x0) / 2)
        .attr("y", c.y0 + 20)
        .attr("text-anchor", "middle")
        .attr("font-size", 14)
        .attr("font-weight", 800)
        .attr("fill", "#333")
        .text(timelineLabels[tlId] || tlId);
    });

    // Threat blocks
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const leaves = root.leaves() as any[];

    leaves.forEach((leaf) => {
      const d = leaf.data;
      const w = leaf.x1 - leaf.x0;
      const h = leaf.y1 - leaf.y0;
      const color = controlColors[d.control] || "#333";

      // Block
      g.append("rect")
        .attr("x", leaf.x0)
        .attr("y", leaf.y0)
        .attr("width", w)
        .attr("height", h)
        .attr("fill", color)
        .attr("opacity", 0.85)
        .attr("rx", 4)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

      if (w < 35 || h < 25) return;

      // Threat name
      const fontSize = w > 130 && h > 65 ? 14 : w > 90 ? 12 : w > 60 ? 10 : 9;
      const name = d.name;
      const maxChars = Math.floor((w - 14) / (fontSize * 0.55));
      const lines: string[] = [];

      if (name.length <= maxChars) {
        lines.push(name);
      } else {
        const words = name.split(/([·\-/])/);
        let current = "";
        words.forEach((word: string) => {
          if ((current + word).length <= maxChars) {
            current += word;
          } else {
            if (current) lines.push(current);
            current = word;
          }
        });
        if (current) lines.push(current);
      }

      const nameStartY = leaf.y0 + (h < 50 ? h / 2 - (lines.length - 1) * (fontSize / 2) : 22);

      lines.forEach((line, i) => {
        g.append("text")
          .attr("x", leaf.x0 + 8)
          .attr("y", nameStartY + i * (fontSize + 2))
          .attr("font-size", fontSize)
          .attr("font-weight", 700)
          .attr("fill", "#fff")
          .attr("dominant-baseline", h < 50 ? "central" : "auto")
          .text(line);
      });

      // Taxonomy tag (category name)
      if (w > 60 && h > 40) {
        const catName = d.categoryName;
        g.append("rect")
          .attr("x", leaf.x0 + 6)
          .attr("y", leaf.y1 - 20)
          .attr("width", catName.length * 7.5 + 8)
          .attr("height", 15)
          .attr("rx", 3)
          .attr("fill", "rgba(0,0,0,0.25)");

        g.append("text")
          .attr("x", leaf.x0 + 10)
          .attr("y", leaf.y1 - 9)
          .attr("font-size", 9)
          .attr("font-weight", 600)
          .attr("fill", "rgba(255,255,255,0.85)")
          .text(catName);
      }

      // Control type badge (top right)
      if (w > 70 && h > 50) {
        const ctrlText = d.control;
        const ctrlW = ctrlText.length * 8 + 8;
        g.append("rect")
          .attr("x", leaf.x1 - ctrlW - 6)
          .attr("y", leaf.y0 + 5)
          .attr("width", ctrlW)
          .attr("height", 15)
          .attr("rx", 3)
          .attr("fill", "rgba(255,255,255,0.25)");

        g.append("text")
          .attr("x", leaf.x1 - ctrlW / 2 - 6)
          .attr("y", leaf.y0 + 16)
          .attr("text-anchor", "middle")
          .attr("font-size", 9)
          .attr("font-weight", 700)
          .attr("fill", "#fff")
          .text(ctrlText);
      }

      // Scenario (large blocks only)
      if (w > 140 && h > 75) {
        const sFontSize = 10;
        const sMaxChars = Math.floor((w - 16) / (sFontSize * 0.5));
        const scenario = d.scenario;
        const sLines: string[] = [];
        let remaining = scenario;
        const maxSLines = Math.floor((h - 55) / (sFontSize + 2));

        for (let i = 0; i < Math.min(maxSLines, 3); i++) {
          if (!remaining) break;
          if (remaining.length <= sMaxChars) {
            sLines.push(remaining);
            remaining = "";
          } else {
            sLines.push(remaining.slice(0, sMaxChars));
            remaining = remaining.slice(sMaxChars).trim();
          }
        }

        sLines.forEach((line, i) => {
          g.append("text")
            .attr("x", leaf.x0 + 8)
            .attr("y", nameStartY + lines.length * (fontSize + 2) + 8 + i * (sFontSize + 2))
            .attr("font-size", sFontSize)
            .attr("fill", "rgba(255,255,255,0.65)")
            .text(line);
        });
      }
    });

    // Legend
    const legend = g.append("g").attr("transform", `translate(0, ${H + 12})`);
    legend.append("text").attr("x", 0).attr("y", 10).attr("font-size", 11).attr("fill", "#999").text("통제 유형:");
    ["금지", "승인", "전환", "구축"].forEach((c, i) => {
      legend.append("rect")
        .attr("x", 65 + i * 68)
        .attr("y", 0)
        .attr("width", 12)
        .attr("height", 12)
        .attr("rx", 2)
        .attr("fill", controlColors[c]);
      legend.append("text")
        .attr("x", 65 + i * 68 + 16)
        .attr("y", 10)
        .attr("font-size", 11)
        .attr("fill", "#666")
        .text(c);
    });

    legend.append("text").attr("x", 370).attr("y", 10).attr("font-size", 11).attr("fill", "#999").text("블록 크기 = 위험도");

  }, []);

  return <svg ref={svgRef} width={W} height={H + 35} style={{ display: "block", margin: "0 auto" }} />;
}
