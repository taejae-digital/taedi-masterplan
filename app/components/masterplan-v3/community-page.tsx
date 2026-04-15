/* p.3 — 개인과 공동체의 관계 변화 (narrative v0.3.10 3장) */
import { C } from "./constants";
import { Header, Footer, Banner, SectionTitle, body } from "./shared";

export function CommunityPage() {
  return (
    <div style={{ pageBreakAfter: "always", minHeight: "280mm" }}>
      <Header subtitle="3. 개인과 공동체의 관계 변화" />

      <Banner>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>
          공동체는 고정된 실체가 아니라 가치와 이익을 공유하는 관계의 체계다.
        </div>
        <div style={{ fontSize: 12.5, color: "#444", marginTop: 3 }}>
          공동체에 대한 권한 위임의 범위와 방식이 바뀐다. 의존 기반 → 선택 기반, 포괄적 위임 → 영역별 위임.
        </div>
      </Banner>

      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* 왼쪽 */}
        <div>
          <SectionTitle>공동체의 존재 이유와 위임 구조</SectionTitle>
          <div style={{ ...body, marginBottom: 12 }}>
            개인은 안전과 건강을 최우선으로 추구한다. 혼자 확보할 수 없을 때 공동체에 권한을 위임한다. 이 위임은 무한하지 않다. 공공 질서 유지라는 제한된 목적을 위한 것이며, 목적이 달성되면 돌아와야 한다.
          </div>

          <div style={{ fontSize: 12, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `1px solid ${C.line}` }}>산업화 시대 — 왜 위임이 확대되었는가</div>
          <div style={{ ...body, marginBottom: 12, padding: "8px 12px", background: "#fff8e1", borderLeft: `4px solid ${C.amber}` }}>
            산업 경제는 대규모 노동력의 조직적 투입을 필요로 했다. 국가가 노동력을 교육·동원·통제하는 역할을 맡았다. 징병제, 표준화된 교육, 노동법, 사회보험 — 모두 산업 경제의 필요에 의해 설계되었다. <strong>개인의 자율성보다 집단의 효율성이 우선시되는 구조.</strong>
          </div>

          <div style={{ fontSize: 12, fontWeight: 800, color: C.dark, marginBottom: 6, paddingBottom: 3, borderBottom: `1px solid ${C.line}` }}>AI 시대 — 위임 구조의 하향 이동</div>
          <div style={{ ...body, marginBottom: 10 }}>
            소규모 고역량 단위가 생산의 중심이 되면, 국가가 노동력을 조직·통제해야 할 필요가 줄어든다. 표준화된 커리큘럼의 필요도 사라진다.
          </div>

          {/* 위임 하향 다이어그램 */}
          <div style={{ display: "grid", gridTemplateRows: "repeat(7, auto)", gap: 3, marginBottom: 14 }}>
            {[
              { level: "생태계", role: "AI 거버넌스, 기후 위기", scope: "최소", color: "#94a3b8" },
              { level: "글로벌 (세계)", role: "국가가 혼자 풀 수 없는 문제만", scope: "축소", color: "#64748b" },
              { level: "국가", role: "국방, 외교, 재난 대응에 집중", scope: "축소", color: C.accent },
              { level: "도시", role: "새로운 실험 단위", scope: "확대", color: C.green },
              { level: "이웃·마을", role: "자치가 다시 의미를 가짐", scope: "확대", color: "#16a34a" },
              { level: "가정", role: "직접 처리 영역 확대", scope: "확대", color: C.navy },
              { level: "개인", role: "법률·재무·건강의 자율적 판단", scope: "확대", color: C.navy },
            ].map(({ level, role, scope, color }, i) => (
              <div key={level} style={{
                display: "grid", gridTemplateColumns: "80px 1fr 50px",
                border: `1px solid ${C.line}`,
                background: i >= 4 ? "#f0f4ff" : "#fff",
              }}>
                <div style={{ padding: "5px 6px", background: color, color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{level}</div>
                <div style={{ padding: "5px 8px", fontSize: 11.5, color: "#333" }}>{role}</div>
                <div style={{ padding: "5px 4px", fontSize: 10.5, fontWeight: 700, color: scope === "확대" ? C.green : C.light, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>{scope}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 */}
        <div>
          <SectionTitle>오픈소스가 보여주는 새로운 질서의 원형</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 5 }}>Linux</div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                수천 명이 위계 없이 기여. 기여의 질이 자연스럽게 권위를 만든다. <strong>직책이 아니라 기여가 권위의 근거.</strong>
              </div>
            </div>
            <div style={{ padding: "10px 12px", borderTop: `3px solid ${C.green}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.green, marginBottom: 5 }}>Wikipedia</div>
              <div style={{ fontSize: 12, lineHeight: 1.65, color: "#333" }}>
                중앙 편집 위원회가 아니라 참여자들의 반복적 검증이 품질을 담보. <strong>판단 비대칭이 해소된 환경의 자연발생적 질서.</strong>
              </div>
            </div>
          </div>

          <SectionTitle>AI가 대체할 수 없는 영역 — 공동체의 본질</SectionTitle>
          <div style={{ ...body, marginBottom: 10 }}>
            AI가 효율의 영역을 가져갈수록, 인간 고유의 관계적 역할이 오히려 명확해진다.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[
              { ai: "활력 징후 모니터링", human: "손을 잡아주는 것", context: "노인 돌봄" },
              { ai: "맞춤형 학습 자료", human: "좌절한 아이를 격려하는 것", context: "아동 교육" },
              { ai: "법률 정보 검색", human: "불안을 듣고 신뢰를 쌓는 것", context: "전문 상담" },
              { ai: "재무 분석·설계", human: "가치관에 기반한 삶의 선택", context: "인생 설계" },
            ].map(({ ai, human, context }) => (
              <div key={context} style={{ padding: "8px 10px", border: `1px solid ${C.line}`, background: "#fff" }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: C.light, marginBottom: 4 }}>{context}</div>
                <div style={{ fontSize: 11.5, color: C.light, marginBottom: 2 }}>AI: {ai}</div>
                <div style={{ fontSize: 12, color: C.navy, fontWeight: 700 }}>사람: {human}</div>
              </div>
            ))}
          </div>

          <SectionTitle>위임 전환의 구조</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 0, alignItems: "center", marginBottom: 14 }}>
            <div style={{ padding: "12px", borderTop: `3px solid ${C.red}`, background: "#fff5f5" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.red, marginBottom: 5 }}>산업화 시대 위임</div>
              {["의존 기반 위임", "포괄적 위임", "조직에 종속된 생계", "표준화된 경로"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: "#555", marginBottom: 2 }}>— {t}</div>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 20, color: C.navy, fontWeight: 800 }}>&rarr;</div>
            <div style={{ padding: "12px", borderTop: `3px solid ${C.navy}`, background: "#f0f4ff" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 5 }}>정보화 시대 위임</div>
              {["선택 기반 위임", "영역별 위임", "자율적 경제 참여", "개인화된 경로"].map((t, i) => (
                <div key={i} style={{ fontSize: 11.5, color: C.navy, marginBottom: 2, fontWeight: 600 }}>— {t}</div>
              ))}
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#f0f4ff", borderLeft: `4px solid ${C.navy}` }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>다음 질문</div>
            <div style={{ fontSize: 12, lineHeight: 1.65, color: "#111" }}>
              개인이 생계를 위해 조직에 종속될 필요가 줄어들 때, 공동체에 대한 위임의 성격도 달라진다. <strong>경제 질서의 질문에 먼저 답해야 한다.</strong>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
