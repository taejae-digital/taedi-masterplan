import { C } from "../masterplan-v705/constants";
import { Header, Footer, h3s } from "../masterplan-v705/shared";
import { VERSION } from "./version";

const objectives = [
  {
    o: "O1. 마스터플랜 v1.0 확정",
    krs: ["v1.0 PDF 최종본 확정", "디지털 시대 정치질서·경제질서 정립", "새로운 권리·새 거버넌스·국제 규율 정립", "외부 독자 자족성 확보"],
  },
  {
    o: "O2. 정치질서·경제질서",
    krs: ["정치질서 — 국가 의사결정·집행·대표성이 개인·도시·빅테크·플랫폼으로 분산되는 구조 정립", "경제질서 — 임금노동·소득·조세·복지·시장 체계 무력화와 4계층 재편 대응"],
  },
  {
    o: "O3. 새로운 권리",
    krs: ["정체성 실현권", "AI 인프라 평등 접근권", "AI 개인화권"],
  },
  {
    o: "O4. 새 거버넌스와 국제 규율",
    krs: ["사전승인 거버넌스", "글로벌 협력 네트워크", "다자 협력 체계 사례 연구", "디지털 시대 권력 구조 변동 분석"],
  },
];

const fields = [
  {
    letter: "A",
    t: "v1.0 최종본 — 자족적 마스터플랜",
    d: "외부 독자가 앞선 논의 없이도 읽을 수 있도록 핵심 명제, 인과 구조, 권리, 거버넌스, 국제 규율을 한 문서 안에서 완결한다. 내부 약어와 섹션 의존 표현을 제거하고 디지털 시대 전환의 논리를 단독 문서로 세운다.",
  },
  {
    letter: "B",
    t: "정치·경제 질서 — 디지털 시대의 작동 원리",
    d: "정치질서는 국가 중심 의사결정·집행·대표성이 개인·도시·빅테크·플랫폼으로 분산되는 흐름으로 정리한다. 경제질서는 임금노동·소득·조세·복지·시장 체계가 약해지고 리더·프로·아마추어·소외의 4계층으로 재편되는 구조로 정립한다.",
  },
  {
    letter: "C",
    t: "새로운 권리 — 세 권리의 제도화",
    d: "정체성 실현권은 직업·소속에 묶이지 않고 발견·훈련·실현할 권리다. AI 인프라 평등 접근권은 연산·데이터·모델을 공공 기반으로 보장하는 권리다. AI 개인화권은 개인에게 맞는 에이전트와 설명 가능한 의사결정을 요구할 권리다.",
  },
  {
    letter: "D",
    t: "새 거버넌스와 국제 규율 — 승인·협력·권력 분석",
    d: "사전승인 거버넌스는 위험한 AI와 플랫폼 권력의 사후 처벌 한계를 넘어, 배포 전 검증과 책임 구조를 제도화한다. 글로벌 협력 네트워크와 다자 협력 사례 연구를 통해 국제 규율의 실행 경로를 만들고, 디지털 권력 구조 변동을 분석한다.",
  },
];

const owners = [
  { name: "유호현", role: "총괄 · 사전승인 거버넌스", detail: "v1.0 전체 구조, 정치·경제 질서 통합, 사전승인 거버넌스의 원리와 제도 설계를 총괄한다." },
  { name: "김수연", role: "정체성 실현권", detail: "정체성 발견·훈련·실현의 권리 구조와 실증 근거를 정리한다. 개인 변화가 새 사회계약으로 이어지는 인과를 담당한다." },
  { name: "이규환", role: "AI 인프라 평등 접근권 · AI 개인화권", detail: "공공 에이전트 접근, 연산·데이터 기반, 개인화된 AI 활용 권리와 설명·거부 가능성의 제도화를 담당한다." },
  { name: "윤준영", role: "사전승인 · 국제 협력 · 권력 구조", detail: "글로벌 협력 네트워크, 다자 협력 사례, 디지털 시대 권력 구조 변동 분석을 담당한다." },
];

const schedule = [
  ["1단계", "v1.0 문서 구조 확정 · 외부 독자 자족성 점검 · 정치·경제 질서 문장 통일", "v1.0 구조안"],
  ["2단계", "세 권리 초안 완성 · 4계층 재편 대응 · 사전승인 거버넌스 원리 정립", "권리·거버넌스 초안"],
  ["3단계", "국제 협력 네트워크와 다자 협력 사례 반영 · 권력 구조 변동 분석 보강", "국제 규율 장"],
  ["4단계", "PDF 최종본 확정 · 문장·어휘·인과 일관성 검수 · 발표용 요약본 제작", "v1.0 최종본"],
];

export function ResearchPlanPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "281mm", display: "flex", flexDirection: "column" }}>
      <Header subtitle="4. 연구 계획" version={VERSION} />

      <div style={{ padding: "14px 32px 10px", borderBottom: `2px solid ${C.navy}`, marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: "#222", lineHeight: 1.6, fontWeight: 600 }}>
          <strong style={{ color: C.navy }}>목표는 v1.0 확정</strong>이다. 정치질서·경제질서, 세 권리, 사전승인 거버넌스, 국제 규율을 하나의 완결된 마스터플랜으로 묶고 외부 독자가 바로 이해할 수 있는 최종본을 만든다.
        </div>
      </div>

      <div style={{ padding: "0 32px 10px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, borderBottom: `2px solid ${C.navy}`, paddingBottom: 2 }}>OKR 구조</div>
          <div style={{ fontSize: 12, color: "#666" }}>v1.0 최종본을 만들기 위한 네 개의 목표와 핵심 결과.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 7 }}>
          {objectives.map(({ o, krs }) => (
            <div key={o} style={{ padding: "8px 9px", border: `1px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 900, color: C.navy, marginBottom: 5 }}>{o}</div>
              {krs.map((kr, i) => (
                <div key={i} style={{ display: "flex", gap: 4, fontSize: 10.5, lineHeight: 1.42, color: "#333", marginBottom: 3 }}>
                  <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>KR</span>
                  <span>{kr}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 32px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.1 연구 목표</div>
            <div style={{ padding: "7px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
              <div style={{ fontSize: 12, color: "#222", lineHeight: 1.55 }}>
                <strong>디지털 시대 새 질서의 운영 원리</strong>를 확정한다. 개인의 정체성 실현, AI 인프라 접근, AI 개인화, 사전승인 거버넌스, 국제 협력 규율을 하나의 사회계약으로 정리한다.
              </div>
            </div>
          </div>

          <div>
            <div style={h3s}>4.2 연구 전략 — 확정해야 할 네 축</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { t: "질서", d: "정치질서와 경제질서를 디지털 권력 분산, 노동가치설 약화, 4계층 재편의 관점에서 확정한다." },
                { t: "권리", d: "정체성 실현권, AI 인프라 평등 접근권, AI 개인화권을 새 사회계약의 권리 언어로 정립한다." },
                { t: "거버넌스", d: "위험한 AI와 플랫폼 권력에 대해 사후 처벌보다 사전승인과 책임 구조를 우선한다." },
                { t: "국제 규율", d: "글로벌 협력 네트워크, 다자 협력 사례, 디지털 권력 구조 변동 분석을 국제 의제로 연결한다." },
              ].map(({ t, d }) => (
                <div key={t} style={{ padding: "7px 9px", background: C.bg, borderTop: `2px solid ${C.navy}` }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: "#333" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.3 연구 분야</div>
            {fields.map(({ letter, t, d }) => (
              <div key={letter} style={{ display: "flex", gap: 9, marginBottom: 6, padding: "7px 9px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: C.navy, lineHeight: 1, flexShrink: 0 }}>{letter}</div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.55, color: "#333" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={h3s}>4.4 업무 분장</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {owners.map(({ name, role, detail }) => (
                <div key={name} style={{ padding: "7px 10px", background: C.bg, borderLeft: `3px solid ${C.navy}` }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 2 }}>{name}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 600, color: "#444", marginBottom: 3, lineHeight: 1.45 }}>{role}</div>
                  <div style={{ fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>{detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={h3s}>4.5 실행 일정</div>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 4, fontSize: 11.5 }}>
              <thead>
                <tr style={{ background: C.navy, color: "#fff" }}>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "14%" }}>단계</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5 }}>실행 내용</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontSize: 11.5, width: "24%" }}>산출물</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map(([period, content, output], i) => (
                  <tr key={period} style={{ background: i % 2 ? C.bg : "#fff" }}>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 700, color: C.navy, lineHeight: 1.45 }}>{period}</td>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", color: "#333", lineHeight: 1.45 }}>{content}</td>
                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee", fontWeight: 600, color: "#222", lineHeight: 1.45 }}>{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={h3s}>4.6 완료 기준</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                { t: "논리", items: ["정체성 → 권리 → 질서 → 거버넌스 인과 일관", "정치·경제 질서의 균열과 처방 명확", "4계층 재편 대응 포함"] },
                { t: "문장", items: ["외부 독자 자족성 확보", "내부 약어·섹션 의존 표현 제거", "권리·거버넌스 용어 통일"] },
                { t: "산출", items: ["v1.0 PDF 최종본", "팀원별 담당 장 완성", "발표용 요약본과 후속 연구 과제 정리"] },
              ].map(({ t, items }) => (
                <div key={t} style={{ padding: "9px 11px", borderTop: `2px solid ${C.navy}`, background: C.bg }}>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 6 }}>{t}</div>
                  {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 5, marginBottom: 4, fontSize: 11.5, lineHeight: 1.5, color: "#333" }}>
                      <span style={{ color: C.navy, fontWeight: 700, flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer version={VERSION} />
    </div>
  );
}
