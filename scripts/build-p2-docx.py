#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
태재 생애주기-공동체 보고서 DOCX 빌더 (흑백, 표 없음)
논지: 공동체는 개인이 권리를 위임하는 계약으로 구현된 실체이며,
      위임은 회수 가능해야 하는데 산업화 시대에 국가로 집중되며 문제가 생겼다.
python-docx로 직접 서식을 구성한다. 색 일절 사용 안 함.
"""
import os
from docx import Document
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "archive", "docx", "p2-lifecycle-community-report.docx")

BODY_FONT = "Noto Serif KR"
BODY_FONT_FALLBACK = "Batang"
HEAD_FONT = "Noto Sans KR"
BLACK = RGBColor(0x00, 0x00, 0x00)

doc = Document()

# ── 페이지 여백 (A4, 학술 여백) ──
for s in doc.sections:
    s.page_width = Mm(210)
    s.page_height = Mm(297)
    s.top_margin = Mm(28)
    s.bottom_margin = Mm(25)
    s.left_margin = Mm(30)
    s.right_margin = Mm(30)

def add_page_numbers(document):
    """모든 섹션 푸터에 가운데 정렬 페이지 번호(현재/전체) 필드 삽입."""
    for section in document.sections:
        footer = section.footer
        footer.is_linked_to_previous = False
        p = footer.paragraphs[0] if footer.paragraphs else footer.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.text = ""
        def field(instr):
            run = p.add_run()
            b = OxmlElement('w:fldChar'); b.set(qn('w:fldCharType'), 'begin')
            i = OxmlElement('w:instrText'); i.set(qn('xml:space'), 'preserve'); i.text = instr
            e = OxmlElement('w:fldChar'); e.set(qn('w:fldCharType'), 'end')
            run._r.append(b); run._r.append(i); run._r.append(e)
            run.font.size = Pt(9); run.font.name = HEAD_FONT
            run.font.color.rgb = BLACK
            return run
        field("PAGE")
        sep = p.add_run(" / "); sep.font.size = Pt(9); sep.font.name = HEAD_FONT; sep.font.color.rgb = BLACK
        field("NUMPAGES")

def set_run_font(run, name=BODY_FONT, size=10.5, bold=False, italic=False):
    run.font.name = name
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = BLACK
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn('w:rFonts'))
    if rFonts is None:
        rFonts = OxmlElement('w:rFonts'); rPr.append(rFonts)
    rFonts.set(qn('w:eastAsia'), name)
    rFonts.set(qn('w:ascii'), name)
    rFonts.set(qn('w:hAnsi'), name)

def para(text="", size=10.5, bold=False, italic=False, align=None,
         space_before=0, space_after=5, line=1.5, font=BODY_FONT, indent_first="auto"):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line
    pf.line_spacing_rule = WD_LINE_SPACING.MULTIPLE
    if align is not None:
        p.alignment = align
    else:
        p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    # 기본: 본문 문단은 첫 줄 들여쓰기 4mm. indent_first=0 이면 없음(표지/라벨 등).
    if indent_first == "auto":
        if align is None:  # 좌우정렬 본문만 들여쓰기
            pf.first_line_indent = Mm(4)
    elif indent_first:
        pf.first_line_indent = Mm(indent_first)
    if text:
        r = p.add_run(text)
        set_run_font(r, name=font, size=size, bold=bold, italic=italic)
    return p

def rich(segments, size=10.5, align=None, space_before=0, space_after=5, line=1.5, indent_first=4.0):  # noqa: E501
    """segments: list of (text, bold) -> 한 문단에 강조 혼합."""
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line
    pf.line_spacing_rule = WD_LINE_SPACING.MULTIPLE
    p.alignment = align if align is not None else WD_ALIGN_PARAGRAPH.JUSTIFY
    if indent_first:
        pf.first_line_indent = Mm(indent_first)
    for text, bold in segments:
        r = p.add_run(text)
        set_run_font(r, name=BODY_FONT, size=size, bold=bold)
    return p

def h1(num, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(f"{num}  {text}" if num else text)
    set_run_font(r, name=HEAD_FONT, size=13.5, bold=True)
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single'); bottom.set(qn('w:sz'), '8')
    bottom.set(qn('w:space'), '4'); bottom.set(qn('w:color'), '000000')
    pbdr.append(bottom); pPr.append(pbdr)
    return p

def h2(num, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(9)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(f"{num}  {text}" if num else text)
    set_run_font(r, name=HEAD_FONT, size=11.5, bold=True)
    return p

def hr():
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(4); p.paragraph_format.space_after = Pt(4)
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr'); bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'),'single'); bottom.set(qn('w:sz'),'4')
    bottom.set(qn('w:space'),'1'); bottom.set(qn('w:color'),'808080')
    pbdr.append(bottom); pPr.append(pbdr)

# ════════════════════════ 표지 ════════════════════════
for _ in range(3):
    doc.add_paragraph()
para("태재미래전략연구원 · 디지털 시대 마스터플랜 연구",
     size=10, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=24, font=HEAD_FONT, indent_first=0)
para("개인의 필요와 공동체\n— 권리 위임의 계약으로 본 시대별 전환 —",
     size=22, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=10, line=1.3, font=HEAD_FONT, indent_first=0)
para("생애의 흐름, 노동의 원리, 공동체의 형성·기능, 권리 위임과 회수의 구조",
     size=11.5, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=40, font=BODY_FONT, indent_first=0)
para("태재미래전략연구원", size=12, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4, font=HEAD_FONT, indent_first=0)
para("디지털팀", size=10.5, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4, font=HEAD_FONT, indent_first=0)
para("2026년 6월", size=10.5, align=WD_ALIGN_PARAGRAPH.CENTER, font=BODY_FONT, indent_first=0)
doc.add_page_break()

# ════════════════════════ 초록 ════════════════════════
h1("", "초록")
para(
    "공동체는 개인이 필요에 따라 권리의 일부를 위임하는 계약으로 구현되는 실체다. "
    "개인이 먼저 있고, 생애 단계마다 필요가 달라지면 공동체가 구성된다. 위임이 더 이상 필요하지 않을 때 개인은 위임한 권리를 회수할 수 있어야 한다. "
    "이 연구는 위임과 회수의 계약 논리를 토대로 농업·산업화·디지털 세 시대의 노동 원리, 생애주기별 필요, "
    "그 필요에 응답하는 공동체의 형성과 역할을 정합적으로 연결한다. "
    "산업화 시대의 권리 집중은 당대의 필요에는 부합했으나 정체성 발휘를 요구하는 디지털 시대에는 맞지 않는다. "
    "디지털 전환은 집중된 권리를 가정·이웃·마을·도시·국가·세계의 여러 층위로 다시 분산하는 과정으로 해석된다. "
    "이를 위해 공동체는 선행하는 실체가 아니라 위임된 권리와 책임이 제도화된 관계로 다루어진다. "
    "각 이론은 이 관계를 설명하는 데 필요한 범위에서 검토된다.",
    space_after=8)
rich([("주제어  ", True),
      ("권리 위임, 권리 회수, 계약으로서의 공동체, 생애주기, 노동 원리, 디지털 전환, 사회계약론", False)],
     size=10, indent_first=0, space_after=4)

# ════════════════════════ 1. 서론 ════════════════════════
h1("1.", "서론")
para(
    "이 연구는 공동체를 개인이 필요에 따라 권리의 일부를 위임하는 계약으로 구현된 실체로 규정한다. "
    "개인이 먼저 있고, 생애에서 마주치는 필요에 따라 공동체가 구성된다. 위임이 철회되면 공동체는 근거를 잃는다. "
    "부모가 마을 돌봄 조직에 결정권의 일부를 맡기는 것이 위임이며, 그 조직이 역할을 다하지 못하면 위임을 회수할 수 있어야 한다. "
    "이 관점은 공동체를 개인의 선택과 위임으로 구성·유지·해소되는 계약적 실체로 본다는 점에서 기존 공동체론과 구별된다.")
para(
    "토머스 홉스(Thomas Hobbes, 1588-1679)는 『리바이어던』(1651)에서 만인의 만인에 대한 투쟁을 "
    "벗어나기 위해 개인이 권리를 통치자에게 양도하는 계약을 제시했으나, 그 모형에서 위임은 회수 불가능하다. "
    "존 로크(John Locke, 1632-1704)는 『통치론』(1689)에서 통치자에게 권력을 맡기는 것은 신탁(trust)이며 "
    "신탁이 깨지면 권리를 회수할 수 있다고 보았다. 로크의 신탁과 저항권은 이 연구가 전제하는 위임 회수 가능성의 직접적 근거다. "
    "장자크 루소(Jean-Jacques Rousseau, 1712-1778)는 『사회계약론』(1762)에서 일반의지(general will)를 통해 "
    "권리가 한 개인이나 한 기관에 집중되어서는 안 된다고 주장하며 자치와 분산의 원리를 옹호했다. "
    "세 논의를 종합하면, 공동체는 개인의 권리 위임으로 성립하고(홉스), 위임은 회수 가능해야 하며(로크), "
    "권리는 한 곳에 집중되어서는 안 된다(루소).")
# ════════════════════════ 2. 이론적 토대 ════════════════════════
h1("2.", "이론적 토대: 권리 위임의 계약으로 본 공동체")

h2("2.1", "공동체는 권리 위임의 계약적 실체다")
para(
    "공동체를 권리 위임의 계약으로 보면 일상의 행위가 위임으로 해석된다. 가정에 시간과 돌봄을 제공하는 것, "
    "마을 자치 조직에 결정권을 맡기는 것, 국가에 세금을 내고 법을 따르는 것이 모두 권리 위임이다. "
    "공동체의 규모와 권한은 위임된 권리의 양에 따라 결정된다. 개인은 혼자 감당할 수 없는 필요가 생기면 그 필요를 충족할 공동체에 권리를 위임하며, 필요가 변하면 위임의 대상과 규모도 달라진다. 청년기에는 도시와 직장에, 중장년기에는 가정과 이웃에, 노년기에는 돌봄 공동체에 위임의 무게중심이 이동한다.")
para(
    "아마르티아 센(Amartya Sen, 1933- )은 발전을 자유의 확장, 곧 개인이 실제로 할 수 있고 될 수 있는 것의 폭이 넓어지는 것으로 정의했다(『자유로서의 발전』, 1999). "
    "마사 누스바움(Martha Nussbaum, 1947- )은 이를 역량 접근(capability approach), 곧 실제로 실행할 수 있는 능력으로 "
    "정식화했다(『역량의 창조』, 2011). 공동체가 개인에게 역량을 제공하는 한에서 위임은 정당성을 갖는다.")

h2("2.2", "위임은 회수 가능해야 한다")
para(
    "로크의 신탁 이론은 위임이 조건부임을 함의한다. 신탁이 깨지면 권리는 개인에게 회복되어야 한다. "
    "그러나 산업화 시대에는 회수 경로가 제한되었다. 국가가 교육·고용·복지·의료를 중앙에서 관리했고, "
    "개인은 국가 교육을 거쳐 인증된 기업에 취업하고 노년에 국가 연금에 의존하는 단선 경로에 편입되었다. "
    "이 경로 바깥에 서는 것은 사회적 배제를 의미했고, 장애인이나 소수 언어 사용자처럼 표준 경로가 맞지 않는 사람은 제도 안에서 드러나지 않았다.")
para(
    "이 과정에서 이웃과 마을은 공동 돌봄 기능을 상실했고 가정의 역할은 축소되었으며 국가의 기능은 확대되었다. 권리가 집중된 공동체는 다양한 개인의 필요에 개별 대응하기 어렵고, 표준화는 평균 바깥의 개인을 배제한다.")
para(
    "칼 폴라니(Karl Polanyi, 1886-1964)는 『거대한 전환』(1944)에서 산업화 이후 시장이 사회의 한 부분에 머무르지 않고 사회 전체를 조직하는 원리가 되었다고 보았다. "
    "그 과정에서 노동·토지·화폐는 본래 상품으로 생산된 것이 아닌데도 상품처럼 거래되었다. 폴라니는 이를 허구상품(fictitious commodities)이라고 불렀다. "
    "노동이 생활 공동체의 관계에서 분리되어 시장 가격으로 평가되는 과정이 탈배태(disembedding)다. "
    "이 연구에서 탈배태는 개인의 필요를 가까운 공동체가 감당하지 못하고 국가·시장 경로로만 처리하는 상태를 가리킨다. "
    "재배태(re-embedding)는 그 필요를 가정·이웃·마을·도시 등 실제 생활권의 관계와 제도 안에서 다시 처리하는 전환이다.")

h2("2.3", "다중심 자치와 생태체계")
para(
    "엘리너 오스트롬(Elinor Ostrom, 1933-2012)은 공유 자원이 중앙 정부나 시장만으로 관리되어야 한다는 전제를 비판했다. "
    "그는 목초지·어장·관개 시설처럼 함께 쓰는 자원을 사람들이 자치 규칙으로 관리하는 사례를 분석했다(『공유의 비극을 넘어』, 1990). "
    "다중심 거버넌스(polycentric governance)에서 '중심'은 대도시나 행정 중심지를 뜻하지 않는다. "
    "각자 결정권과 책임을 가진 자치 단위를 뜻한다. 이 연구의 용어로는 가정·이웃·마을·도시·국가·세계가 각각 하나의 중심이 될 수 있다. "
    "따라서 다중심 거버넌스는 권리 위임이 여러 공동체로 분산되고, 각 공동체가 자기 범위의 문제를 담당하는 구조를 설명한다.")
para(
    "유리 브론펜브레너(Urie Bronfenbrenner, 1917-2005)는 개인의 발달을 여러 환경의 상호작용으로 설명했다(『인간 발달의 생태학』, 1979). "
    "가정은 미시체계(microsystem), 이웃과 학교의 관계는 중간체계(mesosystem), 부모의 직장과 제도는 외체계(exosystem), 사회의 가치 규범은 거시체계(macrosystem)에 해당한다. "
    "그는 가까운 환경에서 반복되는 직접 상호작용을 근접 과정(proximal process)이라고 보았다. "
    "이 개념은 개인의 필요가 추상적 제도보다 가까운 공동체에서 먼저 확인되고 조정된다는 이 연구의 주장과 연결된다.")

# ════════════════════════ 3. 노동의 원리와 공동체 ════════════════════════
h1("3.", "세 시대의 노동 원리: 협동, 분업, 정체성 발휘")

h2("3.1", "농업 시대: 협동")
para(
    "농업 시대의 노동 원리는 협동이었다. 경작·수확·방어는 공동 노동을 요구했다. 가정은 양육과 출산을, "
    "이웃은 품앗이와 두레를, 마을은 공동 경작지 관리와 자치 의사결정을 분담했다. 국가는 신분 질서와 조세를 관장하는 원거리 존재였다. "
    "한국의 품앗이는 비공식적이지만 정교한 권리 위임과 회수의 사례다. "
    "생애주기도 협동의 논리를 따라 아동기는 공동 노동의 준비기, 청년기는 새 가정 구성기, 중장년은 마을 자치의 중심, 노년은 봉양의 대상이었다.")

h2("3.2", "산업화 시대: 분업")
para(
    "산업화 시대의 노동 원리는 분업이었다. 생산 과정을 분할하여 각자에게 반복 직무를 배정함으로써 공장과 관료제는 생산성을 높였다. "
    "전체를 이해할 필요 없이 정해진 직무를 정확히 수행하는 표준화된 노동력이 요구되었고, 표준 교육과 입시 경쟁, "
    "정규직 고용과 연금으로 이어지는 단선 경로가 삶의 목표가 되었다.")
para(
    "분업의 논리는 공동체에도 적용되었다. 국가는 교육·고용·복지·의료를 일괄 관리하는 분업 기구가 되었고 이웃과 마을은 기능을 상실했다. "
    "개인은 권리를 여러 공동체에 분산하던 상태에서 국가와 도시 두 층위에만 의존하는 상태로 전환되었다. "
    "마이클 영(Michael Young, 1915-2002)은 『능력주의의 부상』(1958)에서 이러한 체계가 탈락자에게 책임을 전가하여 "
    "구조적 배제를 개인의 실패로 치환한다고 경고했다.")

h2("3.3", "디지털 시대: 정체성 발휘")
para(
    "디지털 시대의 노동 원리는 정체성 발휘다. 인공지능과 자동화가 반복 직무를 대체하면서 표준화된 분업 노동의 경제적 가치는 낮아지고 "
    "개인 고유의 역량이 갖는 가치는 높아진다. 세금 계산서 처리는 자동화되지만 복잡한 세무 분쟁을 해석하는 맥락 이해력은 더 희소해진다. "
    "플랫폼과 디지털 도구가 기획·제작·유통 비용을 낮추면서 개인은 대규모 조직에 속해야만 생산자가 되는 제약에서 벗어난다. "
    "노동은 조직이 부여한 직무의 수행이 아니라 개인의 고유한 정체성을 실제 성과로 발휘하는 것으로 재정의된다.")
para(
    "이 전환은 권리 위임 방식도 바꾼다. 국가에 집중되었던 권리가 여러 공동체로 다시 분산될 조건이 형성된다. 가정은 정체성의 단서를 읽는 공간으로 중요성을 회복하고, 이웃과 마을은 정체성을 실험·훈련하는 관계망이 되며, 도시는 성과를 발휘하는 장이, 국가는 여러 공동체가 작동하도록 최소 조건을 보장하는 조율자가 된다. 세계는 처음으로 개인의 발휘 영역으로 열려, 국내 노동시장에서 자리를 얻지 못한 사람도 세계 무대에서 성과를 낼 경로를 갖는다.")

# ════════════════════════ 4. 생애주기별 필요와 공동체의 응답 ════════════════════════
h1("4.", "생애주기별 필요: 어떤 공동체에 무엇을 위임하는가")

h2("4.1", "태아·영아기")
para(
    "태아·영아기는 고유한 가능성의 단서가 처음 드러나는 시기다. 농업 시대의 필요는 건강한 출산이었고 가정·이웃·마을이 공동으로 출산을 도왔다. "
    "산업화 시대에는 표준 발달 기준에 맞는 양육이 필요로 규정되었고 국가가 임신·출산·영유아 건강 관리를 담당했다. "
    "디지털 시대에는 타고난 기질과 강점의 단서를 일찍 발견하고 기록하는 것이 새로운 필요로 등장한다. "
    "생체·행동 데이터를 분석하는 기술이 아이의 반응 양식을 이전보다 일찍 포착할 수 있게 하면서, 가정의 역할은 양육에서 정체성의 단서를 가장 먼저 읽고 기록하는 생활 기반으로 확대된다. "
    "제임스 헥만(James Heckman, 1944- )은 생애 초기 환경에 대한 투자가 이후 어느 시기보다 높은 복리 효과를 낳아 성인기의 범죄 예방·소득 향상·복지 지출 감소로 수 배의 사회적 수익을 낳음을 실증했다. "
    "데이터가 닿지 않는 아이를 먼저 찾아 지원하는 일은 삶에 가장 가까운 도시와 마을이 맡는 것이 효과적이며, "
    "국가는 직접 제공자가 아니라 어느 도시에서 태어나도 기초 돌봄에서 밀려나지 않도록 도시 간 격차를 메우는 최소 보장선을 담당한다.")

h2("4.2", "유아·아동기")
para(
    "유아·아동기는 여러 강점의 단서를 체험으로 확인하는 시기다. 농업 시대에는 집안일과 농사일 습득이, 산업화 시대에는 취학 준비와 기초 학력이 과제였고 "
    "두 시대 모두 아이의 필요는 외부 사회가 정의했다. 디지털 시대에는 다양한 체험으로 관심과 강점을 발견하고 실험하는 것이 과제가 된다. "
    "가정은 관심을 지지하고 이웃은 체험 기회를 제공하며 마을은 공동 발견 프로그램을 운영한다. 가정이나 국가가 교육을 독점하는 구조에서 가정·이웃·마을이 역할을 분담하는 분산형 위임 구조로 이행하는 것이 이 단계의 핵심이며, 브론펜브레너가 중간체계(mesosystem)로 규정한 상호 강화 구조가 작동해야 한다. 체험 격차가 이미 이 단계에서 발생하므로 국가는 기회의 바닥을 보장해 분산 구조를 뒷받침한다.")

h2("4.3", "청소년기")
para(
    "청소년기는 정체성의 위기가 가장 첨예한 시기다. 에릭 에릭슨(Erik H. Erikson, 1902-1994)은 생애 발달을 여덟 단계로 나누어 각 단계의 심리사회적 과제를 제시했고(『아동기와 사회』, 1950), 청소년기의 과제를 정체성 대 역할 혼미(identity vs. role confusion)로 규정했다. "
    "농업 시대에는 가업 기술 습득이, 산업화 시대에는 입시 경쟁과 진학이 이 필요를 충족했고, 성적이 정체성을 규정하면서 도시의 입시 교육과 국가의 대입 제도가 청소년의 권리 위임을 독점했다. 디지털 시대에는 마을이 멘토와 훈련 경로를, 도시가 심화 경로와 재진입 통로를 마련해 각자의 강점이 점수 서열 바깥에서 길러질 조건을 형성한다.")

h2("4.4", "청년기")
para(
    "청년기는 훈련으로 다듬어진 강점을 실제 성과로 발휘하는 시기다. 농업 시대에는 토지와 혼인을 통한 새 가정 구성이, 산업화 시대에는 안정된 직장 취업이 목표였고 필요는 외부가 규정했다. 디지털 시대 청년의 필요는 정체성을 실제 성과로 발휘할 영역이다. "
    "인공지능과 플랫폼이 진입 비용을 낮추면서 개인은 대기업에 고용되지 않고도 가치를 생산할 수 있다. 산업화 시대 청년에게 노동력과 결정권을 기업·국가에 대규모로 위임하는 것이 거의 유일한 선택지였다면, 디지털 시대에는 도시에 발휘의 기반을 위임하고 세계와 선택적으로 협업하며 재편할 수 있는 유연한 위임 구조가 가능하다. "
    "예스타 에스핑안데르센(Gøsta Esping-Andersen, 1947- )은 지식경제에서는 복지를 소득 보전이 아니라 교육·보육·재훈련 같은 사전 투자, 곧 사회투자(social investment)로 전환해야 한다고 강조했다.")

h2("4.5", "중장년기")
para(
    "중장년기는 디지털 전환의 혜택과 위험이 가장 불균등하게 갈리는 시기다. 산업화 시대의 목표는 고용 유지와 가족 부양이었고 권리 위임은 직장과 국가를 향했다. "
    "디지털 전환은 자동화와 인공지능이 기존 직무를 대체하면서 재학습과 강점의 재설계를 요구한다. 마을과 도시가 재학습 경로를 제공하고 가정과 국가가 전환기 보호를 담당하는 것은 축소되었던 선택권을 다시 분산해 회복하는 과정이다. "
    "에릭슨은 중장년기의 과제를 생산성 대 침체(generativity vs. stagnation)로 규정했다. 축적한 것을 새 방향으로 확장하지 못하면 정체와 고립에 빠지며, 이 과제에 응답하는 것은 개인의 의지가 아니라 재학습 기회와 새 역할을 제공하고 전환기 불안을 분담하는 공동체의 구조다.")

h2("4.6", "노년기")
para(
    "농업 시대의 노년은 봉양의 대상, 산업화 시대의 노년은 은퇴와 부양의 대상이었고 두 시대 모두 노인을 수혜자로 규정했다. "
    "디지털 시대는 건강을 예측·예방하며 존엄과 판단의 주도권을 유지하고, 경험을 다음 세대에 전수하며 세대를 연결하는 능동적 전수자로서의 노년을 제시한다. "
    "에릭슨은 노년기의 과제를 자아통합 대 절망(ego integrity vs. despair)으로 규정했다. 삶 전체를 통합적으로 수용하지 못하면 절망에 빠진다. "
    "전수 통로와 역할이 주어지고 관계 안에 머물 수 있는 공동체 구조가 통합을 가능하게 한다. 가정은 돌봄과 존엄의 생활 공간을, 이웃은 관계의 지속을, 마을과 도시는 멘토와 자문을 담당하고 국가는 소득의 최소 기반과 고립 방지를 맡는다. "
    "이 경우 재배태는 노인을 시장 소득이나 국가 연금의 수급자로만 보지 않고, 돌봄·관계·전수 역할을 수행하는 생활권 안에 다시 위치시키는 것을 뜻한다.")

# ════════════════════════ 5. 공동체의 형성과 역할 ════════════════════════
h1("5.", "공동체의 형성·역할·기능: 층위별 권리 위임의 구조")

h2("5.1", "가정")
para(
    "가정은 개인이 태어나는 순간부터 가장 먼저 권리를 위임받는 공동체다. 농업 시대에 가정은 노동·양육·부양·교육을 모두 담당했고 산업화 시대에는 교육과 의료를 학교·병원에 위임하면서 역할이 축소되었다. 디지털 시대 가정의 핵심 역할은 정체성의 단서를 가장 먼저 읽는 생활 기반이며, 중장년의 전환기와 노년의 돌봄·존엄을 지지한다. 브론펜브레너가 미시체계(microsystem)로 규정한, 개인이 직접 속하는 가장 가까운 환경이 가정이며 이 층위가 건강해야 다른 공동체의 위임도 의미를 갖는다.")

h2("5.2", "이웃")
para(
    "이웃은 산업화 시대에 표준 제도가 모든 것을 조직하면서 상호 돌봄과 협동 기능이 소멸해 가장 크게 위축된 공동체다. 정체성 발휘의 시대에 이웃은 아이가 흥미를 실험하고 성인이 새 관계를 맺는 일상망으로서 중요성을 회복한다. "
    "관심 기반 모임과 상호 돌봄이 이웃 단위에서 이루어질 때 개인은 발견의 기회를 얻으며, 단절된 사람이 관계망으로 복귀하는 첫 경로도 이웃이다. "
    "오스트롬이 분석한 스위스 알프스 목초지와 일본 어촌의 어장 자치는 이웃 규모의 자치가 정교하게 작동함을 보여준다.")

h2("5.3", "마을")
para(
    "마을은 생애주기의 여러 단계에서 훈련과 재학습을 담당하는 공동체다. 산업화 시대에 도시에 기능을 넘기고 행정 단위로 축소되었던 마을은 디지털 시대에 발견된 방향을 훈련으로 연결하는 생활권으로 재편된다. 청소년에게는 멘토단과 훈련 경로가, 중장년에게는 재학습 경로가 마을을 통해 제공되며, 구성원이 자치적으로 경로를 만들고 국가가 최소 기준을 보장할 때 가장 잘 작동한다. 센과 누스바움이 강조한 역량은 마을 단위의 훈련 환경이 갖춰질 때 구체적으로 형성된다.")

h2("5.4", "도시")
para(
    "도시는 산업화 시대에 학교와 공장을 집적해 표준 인재를 생산·배치하는 기관이었다. 디지털 시대에 도시는 정체성을 실제 성과로 발휘하는 장이자 생활 기반으로 전환되어, 프로젝트 연결·직무 전환·생활 조정을 담당하고 청년의 첫 성과와 중장년의 재설계가 도시를 통해 이루어진다. 도시에 위임되는 권리의 성격은 표준 경로에 자신을 맞추는 것에서 성과를 발휘할 기반을 만드는 것으로 바뀐다.")
para(
    "그러나 모든 기능이 한 대도시에 집중되면 개인이 위임한 권리도 거대한 행정 단위에 묶여 회수하기 어려워진다. "
    "국가로의 권리 집중과 동일한 문제를 도시 규모에서 반복하는 것이다. "
    "따라서 디지털 시대의 도시는 단일 대도시가 아니라 체감 가능한 규모의 강소도시들이 연합하는 형태로 재편되어야 한다. "
    "강소도시는 한 사람의 강점을 알아보고 성과의 기회를 연결할 만큼 작고 구체적인 생활권으로, 위임한 결정권이 어떻게 쓰이는지 확인하고 조정할 수 있다. "
    "강소도시들은 데이터·인공지능·행정·산업 기반을 연결해 연합 생활권을 구성하며, "
    "규모의 효율은 연합으로 확보하되 권리의 위임과 회수는 개인이 속한 작은 도시 단위에서 이루어지는 것이 강소도시 연합의 근거다.")

h2("5.5", "국가와 세계")
para(
    "국가는 산업화 시대 권리 집중의 핵심 기구였다. 교육·고용·복지·의료를 중앙에서 일괄 관리했고 개인이 권리를 위임할 공동체를 선택할 여지를 거의 남기지 않았다. "
    "디지털 시대의 국가는 모든 것을 관리하는 역할에서 물러나, 가정·이웃·마을·도시가 각자의 역할을 수행하도록 최소 조건을 보장하고 조율하는 메타거버넌스(meta-governance)로 전환되어야 한다. 모든 사람에게 권리 위임의 기회가 열리도록 최소 권리선을 설정하고 어느 공동체도 권리를 과도하게 독점하지 않도록 규칙을 만드는 것이 국가의 역할이며, 에스핑안데르센이 제시한 사회투자 국가, 곧 소득 보전에서 역량 형성으로의 전환이 그 구체적 형태다.")
para(
    "세계는 산업화 시대에 국가 간 협정으로만 작동하던 추상적 층위였다. 디지털 시대에 세계는 처음으로 개인의 권리 위임 상대로 등장한다. "
    "국경을 넘는 협업이 가능해지면서 청년과 중장년이 세계 무대에서 성과를 발휘할 수 있고, "
    "기후변화·인공지능 위험·감염병처럼 국가 단위를 넘는 공동 위험도 커지면서 세계는 모든 생애단계의 안전과 직결된 거버넌스 층위가 된다. "
    "오스트롬이 분석한 기후변화 거버넌스가 보여주듯 거버넌스 층위가 분산될수록 공동 위험에 대한 적응력이 높아진다.")

# ════════════════════════ 6. 함의와 결론 ════════════════════════
h1("6.", "디지털 전환이 공동체에 요구하는 것: 권리의 재분산")

h2("6.1", "권리 분산의 세 원리")
rich([("첫째, 위임의 선택권을 개인에게 돌려주어야 한다. ", True),
      ("국가가 모든 생애단계의 필요를 독점 관리하는 구조에서, 개인이 필요에 따라 가정·이웃·마을·도시에 권리를 분산 위임하고 상황이 바뀌면 회수할 수 있는 구조로 전환해야 한다. "
       "탈상품화(decommodification), 곧 시장에 기대지 않고도 살아갈 수 있게 하는 사회 보장만으로는 부족하며, 위임 대상을 선택하고 변경할 수 있는 구조가 함께 필요하다.", False)])
rich([("둘째, 가까운 공동체의 역량을 회복해야 한다. ", True),
      ("브론펜브레너가 지적했듯 개인에게 가장 큰 영향을 미치는 것은 가까운 환경에서의 직접적 상호작용이다. 산업화 시대에 약화된 이웃과 마을의 역할을 회복하는 것이 권리 재분산의 핵심이다. "
       "이는 중앙 예산을 지방에 이전하는 것이 아니라 이웃과 마을이 스스로 역할을 정의하고 자치적으로 운영할 조건을 만드는 것이다. 오스트롬이 보여주었듯 자치는 구성원이 스스로 규칙을 만들 때 작동한다.", False)])
rich([("셋째, 생애주기 단계별 위임 구조를 제도로 명시해야 한다. ", True),
      ("각 생애단계에서 어떤 공동체가 어떤 역할을 맡고 개인이 어디에 권리를 위임하며 그 위임이 어떤 조건에서 회수되는지를 사회적 합의로 명시해야 한다. "
       "헥만이 실증한 생애 초기 투자의 복리 효과를 고려하면, 영아기에서 청소년기까지의 공동체 지원은 복지 지출이 아니라 사회 전체 역량에 대한 선제적 투자로 재정의되어야 한다.", False)])

h2("6.2", "생애주기는 누적 구조다")
para(
    "디지털 시대의 생애주기는 앞 단계의 결과가 다음 단계의 조건이 되는 누적 구조다. 중장년의 재설계는 청소년기 훈련의 성공을 전제하고, 노년의 전수는 청년·중장년의 성과 축적을 전제한다. "
    "초기 단계의 권리 위임 격차, 곧 어떤 아이는 가정·이웃·마을의 풍부한 지지 속에서 단서를 발견하고 어떤 아이는 그 공동체가 모두 약한 환경에서 자라는 차이는 생애 전체의 단절로 이어진다. "
    "헥만의 연구는 이 불평등이 경제적으로도 비효율적인 손실임을 보여준다. 일찍 보완하지 않은 결핍은 이후에 더 큰 사회적 비용을 요구한다.")

h2("6.3", "결론")
para(
    "이 연구의 핵심 주장은 세 가지다. 첫째, 공동체는 개인이 필요에 따라 권리를 위임하는 계약으로 구현되는 실체이며 위임은 회수 가능해야 한다. "
    "둘째, 산업화 시대에 권리가 국가로 집중된 것은 당대 개인의 필요에 따른 선택이었으나 정체성 발휘를 요구하는 디지털 시대의 필요에는 맞지 않는다. "
    "셋째, 디지털 전환은 기술의 문제가 아니라 집중된 권리를 가정·이웃·마을·도시·국가·세계의 여러 층위로 재분산하고 개인에게 위임의 선택권을 돌려주는 재편의 과제다.")
para(
    "이론적 함의도 여기에 있다. 로크의 신탁은 위임이 조건부라는 점을 제시한다. 오스트롬의 다중심 자치는 권한을 가진 여러 단위가 동시에 존재할 수 있음을 보여준다. "
    "브론펜브레너의 근접 과정은 가까운 공동체가 개인 발달에 직접 영향을 준다는 근거를 제공한다. 폴라니의 재배태는 필요를 시장·국가 경로에만 맡기지 않고 생활권의 관계와 제도 안에서 다시 처리해야 한다는 문제의식을 제공한다. "
    "이 연구는 이 네 논의를 개인의 권리 위임과 회수라는 하나의 제도 원리로 연결한다.")

# ════════════════════════ 참고문헌 (APA 7th) ════════════════════════
h1("", "참고문헌")
# 각 항목: (저자·연도 등 정자, 이탤릭 제목/저널, 나머지 정자)
refs = [
    ("Bronfenbrenner, U. (1979). ", "The ecology of human development: Experiments by nature and design", ". Harvard University Press."),
    ("Erikson, E. H. (1950). ", "Childhood and society", ". W. W. Norton."),
    ("Erikson, E. H. (1968). ", "Identity: Youth and crisis", ". W. W. Norton."),
    ("Esping-Andersen, G. (1999). ", "Social foundations of postindustrial economies", ". Oxford University Press."),
    ("Heckman, J. J. (2006). Skill formation and the economics of investing in disadvantaged children. ", "Science, 312", "(5782), 1900–1902. https://doi.org/10.1126/science.1128898"),
    ("Hobbes, T. (1996). ", "Leviathan", " (R. Tuck, Ed.). Cambridge University Press. (Original work published 1651)"),
    ("Locke, J. (1988). ", "Two treatises of government", " (P. Laslett, Ed.). Cambridge University Press. (Original work published 1689)"),
    ("Nussbaum, M. C. (2011). ", "Creating capabilities: The human development approach", ". Harvard University Press."),
    ("Ostrom, E. (1990). ", "Governing the commons: The evolution of institutions for collective action", ". Cambridge University Press."),
    ("Ostrom, E. (2009). ", "A polycentric approach for coping with climate change", " (Policy Research Working Paper No. 5095). World Bank."),
    ("Polanyi, K. (1944). ", "The great transformation: The political and economic origins of our time", ". Farrar & Rinehart."),
    ("Rousseau, J.-J. (1997). ", "The social contract and other later political writings", " (V. Gourevitch, Ed. & Trans.). Cambridge University Press. (Original work published 1762)"),
    ("Sen, A. (1999). ", "Development as freedom", ". Oxford University Press."),
    ("Young, M. (1958). ", "The rise of the meritocracy, 1870–2033: An essay on education and equality", ". Thames & Hudson."),
]
for pre, ital, post in refs:
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_after = Pt(3); pf.line_spacing = 1.4
    pf.left_indent = Mm(8); pf.first_line_indent = Mm(-8)  # hanging indent
    r1 = p.add_run(pre); set_run_font(r1, name=BODY_FONT, size=9.5)
    if ital:
        r2 = p.add_run(ital); set_run_font(r2, name=BODY_FONT, size=9.5, italic=True)
    if post:
        r3 = p.add_run(post); set_run_font(r3, name=BODY_FONT, size=9.5)

add_page_numbers(doc)
os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc.save(OUT)
print("saved:", OUT)
print("paragraphs:", len(doc.paragraphs), "tables:", len(doc.tables))
