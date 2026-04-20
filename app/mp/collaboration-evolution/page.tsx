import { C } from "../components/masterplan/constants";

export default function CollaborationEvolutionPage() {
  const pageStyle: React.CSSProperties = { 
    width: "420mm",
    height: "297mm", 
    padding: "40px", 
    background: "#fff", 
    pageBreakAfter: "always",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Pretendard, -apple-system, sans-serif"
  };
  
  const h1: React.CSSProperties = { fontSize: "36px", fontWeight: 900, color: C.navy, marginBottom: "15px" };
  const h2: React.CSSProperties = { fontSize: "26px", fontWeight: 800, color: C.navy, borderBottom: `3px solid ${C.navy}`, paddingBottom: "8px", marginBottom: "25px" };
  const desc: React.CSSProperties = { fontSize: "18px", color: "#444", marginBottom: "30px", lineHeight: "1.6" };

  return (
    <div style={{ background: "#eee" }}>
      <style>{`
        @media print { @page { size: A3 landscape; margin: 0; } body { margin: 0; } }
        .diagram-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px; padding: 40px; flex: 1; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden; }
        .node { padding: 15px 25px; border-radius: 12px; font-weight: 700; font-size: 20px; position: absolute; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .leader { background: #fecaca; color: #991b1b; border: 2px solid #f87171; }
        .member { background: #e2e8f0; color: #1e293b; border: 2px solid #cbd5e1; }
        .ai { background: #dbeafe; color: #1e40af; border: 2px solid #93c5fd; border-style: dashed; }
        .orchestrator { background: #1a2744; color: #fff; border: 2px solid #0f172a; width: 180px; height: 180px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; }
        .arrow { position: absolute; color: #94a3b8; font-size: 24px; font-weight: 900; }
      `}</style>
      
      {/* 1P: Stage 1A - Hero Model */}
      <div style={pageStyle}>
        <h1 style={h1}>협업 모델 진화 (1/5)</h1>
        <h2 style={h2}>1단계-A: 팀장 독주 모델 (Solo-Driving Hero)</h2>
        <p style={desc}>리더가 모든 정보를 독점하고 최종 결과물을 직접 집필. 팀원은 단순 보조 역할에 머무르며 리더의 개인 역량이 곧 팀의 한계가 됨.</p>
        <div className="diagram-box">
           <div className="node leader" style={{ top: "30%", left: "45%" }}>팀장 (The One)</div>
           <div className="node member" style={{ bottom: "25%", left: "20%" }}>팀원 1</div>
           <div className="node member" style={{ bottom: "25%", left: "45%" }}>팀원 2</div>
           <div className="node member" style={{ bottom: "25%", left: "70%" }}>팀원 3</div>
           <div className="arrow" style={{ top: "45%", left: "35%", transform: "rotate(130deg)" }}>⬇</div>
           <div className="arrow" style={{ top: "45%", left: "50%" }}>⬇</div>
           <div className="arrow" style={{ top: "45%", left: "65%", transform: "rotate(-130deg)" }}>⬇</div>
           <div style={{ position: "absolute", right: "50px", bottom: "50px", fontSize: "24px", fontWeight: 800, color: "#f87171" }}>Bottleneck: 리더의 과부하</div>
        </div>
      </div>

      {/* 2P: Stage 1B - Effective Delegation */}
      <div style={pageStyle}>
        <h1 style={h1}>협업 모델 진화 (2/5)</h1>
        <h2 style={h2}>1단계-B: 위임형 집단지성 (Peer-to-Peer Collaboration)</h2>
        <p style={desc}>리더는 방향을 제시하고 팀원에게 지적 소유권을 위임. 팀원 간 수평적 합의와 조율이 이루어지는 인간 기반의 고효율 모델.</p>
        <div className="diagram-box">
           <div className="node leader" style={{ top: "15%", left: "45%", background: "#bbf7d0", color: "#166534", border: "2px solid #4ade80" }}>팀장 (Facilitator)</div>
           <div className="node member" style={{ top: "50%", left: "20%" }}>전문가 A</div>
           <div className="node member" style={{ top: "50%", left: "45%" }}>전문가 B</div>
           <div className="node member" style={{ top: "50%", left: "70%" }}>전문가 C</div>
           <div className="arrow" style={{ top: "53%", left: "33%" }}>⬅➡</div>
           <div className="arrow" style={{ top: "53%", left: "59%" }}>⬅➡</div>
           <div className="arrow" style={{ top: "30%", left: "40%", transform: "rotate(45deg)" }}>↕</div>
           <div className="arrow" style={{ top: "30%", left: "50%" }}>↕</div>
           <div className="arrow" style={{ top: "30%", left: "60%", transform: "rotate(-45deg)" }}>↕</div>
        </div>
      </div>

      {/* 3P: Stage 2 - Fragmented AI */}
      <div style={pageStyle}>
        <h1 style={h1}>협업 모델 진화 (3/5)</h1>
        <h2 style={h2}>2단계: 개별 AI 도입과 파편화 (Fragmented Silos)</h2>
        <p style={desc}>팀원 각자가 AI 인턴을 활용하여 생산성은 높였으나, 팀 내 소통보다 AI와의 대화가 중심이 되면서 논리 통합 비용이 폭증함.</p>
        <div className="diagram-box">
           <div style={{ display: "flex", gap: "100px" }}>
             <div style={{ textAlign: "center" }}><div className="node member" style={{ position: "relative" }}>팀원 A</div><div className="arrow" style={{ position: "relative", margin: "10px 0" }}>↕</div><div className="node ai" style={{ position: "relative" }}>Claude A</div></div>
             <div style={{ textAlign: "center" }}><div className="node member" style={{ position: "relative" }}>팀원 B</div><div className="arrow" style={{ position: "relative", margin: "10px 0" }}>↕</div><div className="node ai" style={{ position: "relative" }}>Claude B</div></div>
             <div style={{ textAlign: "center" }}><div className="node member" style={{ position: "relative" }}>팀원 C</div><div className="arrow" style={{ position: "relative", margin: "10px 0" }}>↕</div><div className="node ai" style={{ position: "relative" }}>Claude C</div></div>
           </div>
           <div style={{ position: "absolute", bottom: "10%", color: "#ef4444", fontWeight: 800, fontSize: "22px" }}>Isolation: "우리는 서로 무엇을 하는지 모른다"</div>
        </div>
      </div>

      {/* 4P: Stage 3 - Systematic Tool */}
      <div style={pageStyle}>
        <h1 style={h1}>협업 모델 진화 (4/5)</h1>
        <h2 style={h2}>3단계: 중앙 저장소 기반 결합 (Systematic Integration)</h2>
        <p style={desc}>GitHub과 같은 도구를 통해 결과물을 한곳에 모으기 시작. 기술적 동기화는 가능해졌으나 여전히 도구 조작 자체가 업무의 병목.</p>
        <div className="diagram-box">
           <div className="node leader" style={{ top: "20%", left: "20%" }}>L (Merge)</div>
           <div className="node member" style={{ top: "20%", left: "45%" }}>M1</div>
           <div className="node member" style={{ top: "20%", left: "70%" }}>M2</div>
           <div className="arrow" style={{ top: "35%", left: "30%", transform: "rotate(45deg)" }}>↘</div>
           <div className="arrow" style={{ top: "35%", left: "50%" }}>⬇</div>
           <div className="arrow" style={{ top: "35%", left: "68%", transform: "rotate(-45deg)" }}>↙</div>
           <div style={{ background: "#475569", color: "#fff", padding: "30px", borderRadius: "15px", position: "absolute", bottom: "20%", fontSize: "28px", fontWeight: 900 }}>GitHub Repository</div>
        </div>
      </div>

      {/* 5P: Stage 4 - Agent Orchestration */}
      <div style={pageStyle}>
        <h1 style={h1}>협업 모델 진화 (5/5)</h1>
        <h2 style={h2}>4단계: 에이전트 오케스트레이션 (The Future of Work)</h2>
        <p style={desc}>태디(에이전트)가 맥락과 기억을 관리. 팀장은 고도의 판단을, 팀원은 창의적 탐색을 전문화하는 유기적 에이전트 네트워크.</p>
        <div className="diagram-box">
           <div className="node orchestrator" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}><strong>TAEDI</strong><br/>Orchestrator</div>
           <div className="node leader" style={{ top: "15%", left: "50%", transform: "translateX(-50%)", background: "#f97316", color: "#fff", border: "none" }}>팀장: 가치 판단</div>
           <div className="node member" style={{ bottom: "15%", left: "25%", background: "#fff", border: "2px solid #1a2744" }}>팀원: 전문 탐색</div>
           <div className="node member" style={{ bottom: "15%", left: "75%", background: "#fff", border: "2px solid #1a2744" }}>팀원: 창의 제안</div>
           <div className="node ai" style={{ top: "50%", right: "10%", transform: "translateY(-50%)" }}>Syndi (PS 전문)</div>
           
           {/* Connection lines (conceptually) */}
           <div className="arrow" style={{ top: "30%", left: "50%", transform: "translateX(-50%)" }}>↕</div>
           <div className="arrow" style={{ bottom: "35%", left: "35%", transform: "rotate(45deg)" }}>↕</div>
           <div className="arrow" style={{ bottom: "35%", right: "35%", transform: "rotate(-45deg)" }}>↕</div>
           <div className="arrow" style={{ top: "50%", right: "25%" }}>↔</div>
           
           <div style={{ position: "absolute", bottom: "30px", background: "#fff4dd", padding: "10px 20px", borderRadius: "20px", border: "1px solid #fbbf24", fontWeight: 800 }}>Shared Working Memory (Telegram Group)</div>
        </div>
      </div>
    </div>
  );
}
