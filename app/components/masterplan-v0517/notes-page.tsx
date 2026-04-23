import { C } from "./constants";
import { Header, Footer } from "./shared";

type Note = { n: string; num: number; term: string; full: string; year: string; desc: string };
type Scholar = { num: number; name: string; work: string; year: string; context: string; quoteEn: string; quoteKo: string };

const notes: Note[] = [
  { n: "¹", num: 1, term: "FIRE", full: "Financial Independence, Retire Early", year: "—", desc: "젊은 시기에 절약·투자로 경제적 독립을 이루고 조기 은퇴를 추구하는 라이프스타일 운동." },
  { n: "²", num: 2, term: "NPT", full: "Treaty on the Non-Proliferation of Nuclear Weapons (핵확산금지조약)", year: "1968", desc: "핵무기 보유국과 비보유국의 의무를 규정한 국제조약. 핵 비확산·핵군축·평화적 이용을 세 기둥으로 한다." },
  { n: "³", num: 3, term: "IAEA", full: "International Atomic Energy Agency (국제원자력기구)", year: "1957", desc: "핵의 평화적 이용을 촉진하고 군사적 전용을 감시하는 UN 산하 기구. NPT 사찰을 수행한다." },
  { n: "⁴", num: 4, term: "CTBT", full: "Comprehensive Nuclear-Test-Ban Treaty (포괄적핵실험금지조약)", year: "1996", desc: "모든 환경에서의 핵실험을 금지하는 조약. 채택되었으나 발효 요건 미충족으로 아직 미발효 상태." },
  { n: "⁵", num: 5, term: "START", full: "Strategic Arms Reduction Treaty (전략무기감축조약)", year: "1991~", desc: "미·러(舊 소련) 간 전략핵탄두 보유 상한을 줄여온 양자 조약 시리즈. 현행은 New START(2011)." },
  { n: "⁶", num: 6, term: "Basel Accords", full: "Basel I·II·III (바젤 은행자본규제 협약)", year: "1988~", desc: "BIS 산하 바젤은행감독위원회가 정한 글로벌 은행 자본·유동성 규제. 금융 위기마다 강화되어 왔다." },
  { n: "⁷", num: 7, term: "G20", full: "Group of Twenty (주요 20개국)", year: "1999 / 정상회의 2008", desc: "선진국·신흥국 20개 경제가 모이는 다자 협의체. 2008 글로벌 금융위기 이후 정상회의로 격상." },
  { n: "⁸", num: 8, term: "파리협정", full: "Paris Agreement (UNFCCC)", year: "2015", desc: "산업화 이전 대비 지구 평균기온 상승을 1.5~2°C 이내로 억제하는 것을 목표로 한 보편적 기후 조약." },
  { n: "⁹", num: 9, term: "오비에도 협약", full: "Convention on Human Rights and Biomedicine (인권·생명의학 협약)", year: "1997", desc: "유럽평의회가 채택한 생명윤리 조약. 유전자 검사·의료 동의·인간 복제 금지 등 생명공학 한계를 규정." },
  { n: "¹⁰", num: 10, term: "FDA", full: "U.S. Food and Drug Administration (미국 식품의약국)", year: "1906", desc: "미국 보건부 산하 규제 기관. 의약품·의료기기·식품 등의 안전성을 사전 승인 방식으로 검증한다." },
  { n: "¹¹", num: 11, term: "WHO", full: "World Health Organization (세계보건기구)", year: "1948", desc: "보건 분야 UN 전문기구. 팬데믹 대응 등 글로벌 보건 위기 조율의 대표 사례로 거론된다." },
  { n: "¹²", num: 12, term: "LAWS", full: "Lethal Autonomous Weapons Systems (자율살상무기체계)", year: "—", desc: "인간의 직접 통제 없이 표적을 선정·공격할 수 있는 무기체계. CCW(특정재래식무기금지협약) 차원에서 국제 규제 논의 중." },
  { n: "¹³", num: 13, term: "WMD", full: "Weapons of Mass Destruction (대량살상무기)", year: "—", desc: "핵·생물·화학·방사능 무기를 통칭. 사이버 영역의 파괴력 확장으로 \"사이버 WMD\" 개념도 등장." },
  { n: "¹⁴", num: 14, term: "Law Zero", full: "Yoshua Bengio가 설립한 비영리 AI 안전 연구소", year: "2024", desc: "튜링상 수상자 Bengio가 \"안전한 AI 과학(Scientist AI)\" 연구를 위해 설립. AI의 정렬·통제 가능성을 형식적으로 보장하는 연구를 지향." },
  { n: "¹⁵", num: 15, term: "ARIA", full: "Advanced Research and Invention Agency (영국)", year: "2023", desc: "영국판 DARPA. 고위험·고보상 R&D를 지원. davidad 주도의 Safeguarded AI 프로그램이 대표적이며 Yoshua Bengio가 과학 자문으로 참여." },
];

const scholars: Scholar[] = [
  {
    num: 16,
    name: "Max Weber",
    work: "Politics as a Vocation",
    year: "1919",
    context: "국가의 본질을 '합법적 물리적 폭력의 독점'으로 정의. 이 정의는 P2 '위임 구조'와 P3 '폭력 독점의 균열' 논지의 출발점이다. AI 시대에 이 독점이 더는 유지되기 어려워진다는 것이 본 마스터플랜의 핵심 문제의식.",
    quoteEn: "The state is that human community which (successfully) lays claim to the monopoly of legitimate physical violence within a certain territory.",
    quoteKo: "국가는 일정 영토 안에서 합법적 물리적 폭력 사용의 독점을 성공적으로 주장하는 인간 공동체다.",
  },
  {
    num: 17,
    name: "Martin van Creveld",
    work: "The Transformation of War",
    year: "1991",
    context: "국가 간 대규모 재래식 전쟁의 시대가 끝나가고, 비국가 행위자(테러·범죄 조직·개인)가 수행하는 '비삼위일체 전쟁(non-trinitarian war)'이 대두하고 있다는 진단. AI가 이 경향을 가속시킨다.",
    quoteEn: "As far as large-scale, conventional interstate war is concerned, we may be living through its last days.",
    quoteKo: "대규모 국가 간 재래식 전쟁이라는 측면에서, 우리는 그 마지막 시대를 살고 있는지 모른다.",
  },
  {
    num: 18,
    name: "Shoshana Zuboff",
    work: "The Age of Surveillance Capitalism",
    year: "2019",
    context: "'감시 자본주의'를 처음 체계적으로 이론화. 인간 경험이 본인 동의 없이 행동 데이터로 추출되어 예측 상품으로 거래되는 구조를 분석. P3 '허위정보·플랫폼 과두·감시 자본주의' 위험의 학술적 근거.",
    quoteEn: "Surveillance capitalism unilaterally claims human experience as free raw material for translation into behavioral data.",
    quoteKo: "감시 자본주의는 인간의 경험을 행동 데이터로 변환하기 위한 무료 원자재로 일방적으로 주장한다.",
  },
  {
    num: 19,
    name: "Erik Brynjolfsson & Andrew McAfee",
    work: "The Second Machine Age",
    year: "2014",
    context: "디지털 기술이 경제적 풍요를 만들어도 그 이익의 분배는 별개 문제라는 진단. P2 '4가지 축 — AI 확장이 제도 설계에 달렸다'의 논리를 뒷받침한다. 기술이 자동으로 공정한 확장을 가져오지 않는다.",
    quoteEn: "Technology brings abundance, but it does not guarantee that the gains will be widely shared.",
    quoteKo: "기술은 풍요를 가져오지만, 그 이익이 광범위하게 공유된다는 것을 보장하지 않는다.",
  },
  {
    num: 20,
    name: "Stuart Russell",
    work: "Human Compatible: AI and the Problem of Control",
    year: "2019",
    context: "AI 정렬(alignment) 문제의 대표 제기자. 인간이 목표를 명시적으로 지정하는 표준 설계 방식이 본질적으로 위험하다고 경고. P3 'AI 정렬 문제' 위험의 근거이자, P4 '개발자 입증 책임 레짐(FDA 모델)' 설계의 지적 배경.",
    quoteEn: "The standard model of AI—in which machines pursue objectives specified by humans—is inherently unsafe.",
    quoteKo: "AI가 인간이 지정한 목표를 추구하도록 설계하는 표준 모델은 본질적으로 위험하다.",
  },
  {
    num: 21,
    name: "Émile Durkheim",
    work: "The Division of Labour in Society",
    year: "1893",
    context: "분업이 경제적 효율을 넘어 개인의 정체성·사회 결속 구조 자체를 재편한다는 고전적 진단. P2 도입부 '직업·직급·소속이 정체성을 대체했다'의 이론적 뿌리. 자동화가 분업을 해체할 때 정체성 공백이 발생한다는 본 보고서의 논리로 이어진다.",
    quoteEn: "The division of labour is not peculiar to the economic world; we can observe its growing influence in the most varied fields of society.",
    quoteKo: "분업은 경제 세계에만 고유한 것이 아니다; 사회의 가장 다양한 영역에서 그 영향력이 커지는 것을 볼 수 있다.",
  },
];

export function NotesPage() {
  return (
    <div style={{ pageBreakBefore: "always", minHeight: "280mm" }}>
      <Header subtitle="5. 용어 · 기관 · 참고 학자 미주 (Notes & References)" />

      <div style={{ margin: "12px 32px 14px", padding: "10px 18px", background: "#f0f4ff", borderLeft: `5px solid ${C.navy}` }}>
        <div style={{ fontSize: 13, color: "#222", lineHeight: 1.7 }}>
          본문에 등장한 약어·기관·협정의 풀네임과 설립연도, 그리고 논지를 뒷받침하는 학자들의 원문·번역·맥락을 등장 순서대로 정리한 참고 색인.
          본문 위첨자(¹·²·³…)와 일치합니다.
        </div>
      </div>

      <div style={{ padding: "0 32px 14px" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 8, paddingBottom: 4, borderBottom: `1.5px solid ${C.navy}` }}>
          약어 · 기관 · 협정 (1–15)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {notes.map((it) => (
            <div key={it.num} style={{ padding: "8px 11px", borderLeft: `3px solid ${C.navy}`, background: C.bg }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>
                <span style={{ color: C.red, marginRight: 6 }}>{it.num}.</span>
                {it.term}
                <span style={{ fontSize: 11, fontWeight: 500, color: "#555", marginLeft: 6 }}>
                  — {it.full} · {it.year}
                </span>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222" }}>{it.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, fontWeight: 800, color: C.navy, marginBottom: 8, paddingBottom: 4, borderBottom: `1.5px solid ${C.navy}` }}>
          참고 학자 · 원문 인용 (16–21)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {scholars.map((s) => (
            <div key={s.num} style={{ padding: "10px 13px", borderLeft: `3px solid ${C.accent}`, background: "#fff", border: `1px solid ${C.line}` }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: C.navy, marginBottom: 3 }}>
                <span style={{ color: C.red, marginRight: 6 }}>{s.num}.</span>
                {s.name}
                <span style={{ fontSize: 11, fontWeight: 500, color: "#555", marginLeft: 6 }}>
                  — <em>{s.work}</em> · {s.year}
                </span>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.6, color: "#222", marginBottom: 5 }}>
                <strong style={{ color: C.dark }}>문맥:</strong> {s.context}
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.55, color: "#333", fontStyle: "italic", paddingLeft: 10, borderLeft: `2px solid ${C.line}`, marginBottom: 3 }}>
                &ldquo;{s.quoteEn}&rdquo;
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.55, color: "#555", paddingLeft: 10 }}>
                {s.quoteKo}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
