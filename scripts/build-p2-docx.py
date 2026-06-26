#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
태재 생애주기-공동체 보고서 DOCX 빌더 (흑백, 표 없음, 태재 논리 전면)
python-docx로 직접 서식을 구성한다. 색 일절 사용 안 함.
"""
import os
from docx import Document
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.section import WD_SECTION
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "archive", "docx", "p2-lifecycle-community-report.docx")

BODY_FONT = "Noto Serif KR"      # 본문 세리프(없으면 시스템 폴백)
BODY_FONT_FALLBACK = "Batang"     # 추가 폴백
HEAD_FONT = "Noto Sans KR"        # 제목 산세리프
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
         space_before=0, space_after=6, line=1.6, font=BODY_FONT, indent_first=None):
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
    if indent_first is not None:
        pf.first_line_indent = Mm(indent_first)
    if text:
        r = p.add_run(text)
        set_run_font(r, name=font, size=size, bold=bold, italic=italic)
    return p

def rich(segments, size=10.5, align=None, space_before=0, space_after=6, line=1.6, indent_first=4.0):
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
    p.paragraph_format.space_before = Pt(18)
    p.paragraph_format.space_after = Pt(8)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(f"{num}  {text}" if num else text)
    set_run_font(r, name=HEAD_FONT, size=13.5, bold=True)
    # 하단 경계선
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single'); bottom.set(qn('w:sz'), '8')
    bottom.set(qn('w:space'), '4'); bottom.set(qn('w:color'), '000000')
    pbdr.append(bottom); pPr.append(pbdr)
    return p

def h2(num, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(4)
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
para("태재미래전략연구원 마스터플랜 연구시리즈 · 제2호",
     size=10, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=24, font=HEAD_FONT, indent_first=None)
para("개인의 생애주기적 필요와\n공동체의 구조적 전환",
     size=22, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=10, line=1.3, font=HEAD_FONT, indent_first=None)
para("— 생애의 흐름과 공동체의 변화로 본 사회 재편의 원리 —",
     size=11.5, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=40, font=BODY_FONT, indent_first=None)
para("태재미래전략연구원", size=12, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4, font=HEAD_FONT, indent_first=None)
para("디지털팀", size=10.5, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4, font=HEAD_FONT, indent_first=None)
para("2026년 6월", size=10.5, align=WD_ALIGN_PARAGRAPH.CENTER, font=BODY_FONT, indent_first=None)
doc.add_page_break()

# ════════════════════════ 초록 ════════════════════════
h1("", "초록")
para("공동체가 개인을 빚는 것이 아니라, 개인의 생애주기적 필요가 공동체의 모양을 빚는다. 사람은 시대마다 다른 것을 필요로 했고, "
     "그 필요가 가정에서 세계에 이르는 공동체의 형태와 역할을 바꿔 왔다. 이 글은 그 명제를 개인의 생애 흐름과 공동체의 변화라는 두 축으로 풀어내고, "
     "농업·산업화·디지털 세 시대에 걸쳐 공동체의 무게 중심이 어떻게 이동했는지를 따라간다. 농업 시대의 생존, 산업화 시대의 표준, "
     "디지털 시대의 정체성 실현이라는 세 목표가 각각 다른 공동체를 빚어냈으며, 디지털 전환은 기술의 문제가 아니라 사람의 문제, 곧 생애주기의 문제임을 "
     "보인다. 브론펜브레너의 생태체계, 에릭슨의 발달단계, 센과 누스바움의 역량, 부르디외의 자본, 오스트롬의 다층 거버넌스, 퍼트넘의 사회자본, "
     "기든스의 성찰적 자아, 에스핑안데르센의 복지국가, 폴라니의 대전환, 마이클 영의 능력주의 비판은 이 논의 곳곳에서 근거로 동원된다.",
     space_after=8, indent_first=None)
rich([("키워드  ", True),
      ("생애주기, 공동체 전환, 정체성 실현, 디지털 전환, 역량과 자본", False)],
     size=10, indent_first=None, space_after=4)

# ════════════════════════ 1. 서론 ════════════════════════
h1("1.", "서론 — 왜 ‘개인의 생애주기적 필요’가 출발점인가")
para("출발점은 통념을 뒤집는 데 있다. 사회과학은 오랫동안 공동체를 원인으로, 개인의 삶을 결과로 다루어 왔다. "
     "국가가 제도를 설계하고, 시장이 인센티브를 부여하며, 가족이 규범을 전수한다는 하향식 그림이다. 이 글은 인과의 방향을 거꾸로 세운다. "
     "먼저 개인이 있고, 그 개인이 생애 단계마다 다른 것을 필요로 하며, 그 필요의 총합이 공동체의 형태를 결정한다.", indent_first=None)
para("농업 공동체의 씨족과 촌락은 대를 잇고 땅을 지켜야 하는 생존의 필요에서 생겨났다. 산업화 시대의 학교·공장·복지국가는 표준 노동력을 "
     "원하는 경제와 좋은 일자리를 원하는 개인이 맞물려 만들어졌다. 디지털 시대의 플랫폼과 프로젝트 공동체는 저마다의 정체성을 발휘하려는 개인의 필요가 "
     "밀어 올리고 있다. 세 전환 모두에서 공동체를 움직인 최초의 힘은 개인의 생애주기적 필요였다. 칼 폴라니가 『거대한 전환』에서 말한 재착근—시장과 "
     "제도가 결국 사회적 관계 속에 다시 뿌리내려야 한다는 통찰—은 이 시대 전환을 읽는 한 틀이 된다.")
para("이 글의 논리는 하나의 인과 사슬을 따른다. 디지털 기술이 개인이 할 수 있는 일과 맡는 역할을 바꾸고, 그 변화가 생애 단계마다 새로운 "
     "필요를 만들며, 그 필요에 응답하기 위해 공동체의 형태와 역할이 다시 짜인다. 기술이 개인을 바꾸고, 개인이 필요를 낳고, 필요가 공동체를 빚는다. "
     "농업 시대에는 땅과 노동의 기술이 생존의 필요를 낳아 자급 공동체를 빚었고, 산업화 시대에는 대량생산과 표준화 기술이 좋은 일자리의 필요를 낳아 "
     "학교와 공장과 복지국가를 빚었다. 디지털 시대에는 AI·데이터·연결의 기술이 정체성을 발휘하려는 필요를 낳아 공동체를 다시 빚는다. "
     "이 글은 그 마지막 전환을 농업·산업화 시대와 나란히 놓고 추적한다.")
para("이 글은 먼저 두 축, 곧 개인의 생애 흐름과 공동체의 층위를 세우고, 세 시대에 걸친 공동체 역할의 이동을 비교한 뒤, 각 생애단계에서 기술이 만든 "
     "필요와 그에 대한 공동체의 응답을 들여다보고, 디지털 전환이 공동체에 요구하는 재배치의 원리를 도출한다.")

# ════════════════════════ 2. 두 축 ════════════════════════
h1("2.", "두 축 — 개인의 생애 흐름과 공동체의 층위")

h2("2.1", "개인의 생애 — 필요는 단계마다 달라진다")
para("이 글은 인간의 생애를 여섯 단계로 나눈다. 태아·영아기는 가능성의 단서가 처음 드러나는 시기다. 유아·아동기는 그 단서를 체험으로 "
     "발견하고 실험하는 시기다. 청소년기는 강점을 골라 훈련하며 방향을 정하는 시기다. 청년기는 그 강점을 실제 기여로 발휘하는 시기다. "
     "중장년기는 쌓은 역량을 재설계하고 새 영역으로 확장하는 시기다. 노년기는 경험을 다음 세대로 전수하고 세대를 연결하는 시기다.", indent_first=None)
para("산업화 시대에 이 여섯 단계를 부르던 말은 달랐다. 취학 준비, 입시 경쟁, 취업과 정착, 고용 유지, 은퇴와 부양. "
     "모두 외부 제도에 자신을 맞추는 적응의 언어다. 반면 디지털 시대의 단계어—발견, 훈련, 발휘, 재설계, 전수—는 내적 역량이 펼쳐지는 "
     "전개의 언어다. 같은 생애가 ‘제도에 맞추는 일’에서 ‘자기를 펼치는 일’로 의미가 바뀐다.")
para("이 단계 구분은 에릭 에릭슨의 심리사회적 발달론과 공명한다. 에릭슨이 청소년기에 배치한 ‘정체성 대 역할 혼미’의 위기는 "
     "이 글의 ‘훈련·방향 정함’ 단계와 정확히 겹치고, 중장년기의 ‘생산성 대 침체’ 위기는 ‘재설계·확장’ 단계와 맞물린다. "
     "우리는 이 발달 위기를 개인의 심리 문제가 아니라 공동체가 응답해야 할 사회적 과제로 재정의한다.", italic=False)

h2("2.2", "공동체의 층위 — 필요를 나누어 맡는 중첩 구조")
para("개인의 필요는 한 공동체가 다 떠맡을 수 없다. 이 글은 그 필요를 가정·이웃·마을·도시·국가·세계 여섯 층위가 나누어 맡는다고 본다. "
     "가정은 개인이 매일 부대끼는 가장 가까운 자리다. 이웃과 마을은 그 가정들이 서로 연결되는 생활권이다. 도시는 일과 배움과 기회가 모이는 무대다. "
     "국가는 규칙과 안전망을 세우는 층위이며, 세계는 국경을 넘는 위험을 함께 다루는 층위다.", indent_first=None)
para("핵심 원리는 두 가지다. 첫째, 공동체의 권한은 영구적이지 않다. 개인이 생애 단계와 위험에 따라 필요한 만큼 맡겼다가, "
     "스스로 감당할 수 있게 되면 거둔다. 둘째, 공동체의 무게 중심은 시대에 따라 이동한다. 농업 시대에는 가족과 마을의 자급에, "
     "산업화 시대에는 학교와 국가의 표준 관리에, 디지털 시대에는 도시의 발휘 무대와 국가의 조율로 무게가 옮겨간다.")
para("이 여섯 층위는 우리 브론펜브레너의 생태체계이론과 거의 그대로 포개진다. 그가 말한 미시체계는 가정에, 중간체계는 이웃과 마을에, "
     "외체계는 도시에, 거시체계는 국가에, 시간체계는 시대를 가로지르는 세계의 변화에 대응한다. 브론펜브레너의 통찰—개인의 발달을 가장 크게 좌우하는 것은 "
     "가까운 환경과의 지속적 상호작용(근위 과정)이라는 점—은 디지털 시대에 가정·이웃·마을의 역할을 다시 키워야 한다는 처방으로 이어진다.")

para("두 축은 따로 놀지 않는다. 생애의 각 단계에서 생겨난 필요는 곧바로 ‘어느 공동체가 그 필요를 맡을 것인가’라는 물음으로 이어진다. "
     "필요가 깊어지고 종류가 달라질수록, 그 필요를 받아내는 공동체의 무게 중심도 가정에서 마을로, 마을에서 도시로, 도시에서 국가와 세계로 이동한다. "
     "이 글의 분석은 바로 이 두 축이 맞물리는 지점—생애 단계의 필요가 공동체의 형태를 호출하는 순간—을 따라간다.", indent_first=None)

# ════════════════════════ 3. 시대 전환 ════════════════════════
h1("3.", "세 시대의 전환 — 생존에서 표준으로, 표준에서 정체성으로")

h2("3.1", "세 시대의 목표가 공동체를 다르게 빚었다")
rich([("농업 시대의 목표는 생존이었다. ", True),
      ("대를 잇고 땅을 지키기 위해 가정은 노동과 양육을, 이웃은 품앗이를, 마을은 자치를, 국가는 신분 질서를 맡는 자급 공동체가 만들어졌다.", False)], indent_first=None)
rich([("산업화 시대의 목표는 표준이었다. ", True),
      ("좋은 일자리를 얻기 위해 가정은 양육을, 도시는 학교와 일자리를, 국가는 교육·고용·복지를 맡아 사람을 획일적으로 관리했다. 표준은 곧 줄세우기였다.", False)])
rich([("디지털 시대의 목표는 정체성 실현이다. ", True),
      ("저마다 다른 정체성을 발휘하기 위해 가정은 단서를 발견하고, 이웃은 실험을 돕고, 마을은 훈련으로 잇고, 도시는 발휘 무대를 만들며, "
       "국가는 도시 간 조율과 최소 권리선·위험 규칙을, 세계는 공동 위험 관리를 맡는다.", False)])
para("칼 폴라니의 ‘거대한 전환’으로 보면, 농업 시대는 노동과 토지가 사회 관계에 단단히 묶여 있던 상태다. 산업화 시대는 노동이 상품으로 떨어져 나와 "
     "사회에서 탈각된 상태다. 디지털 시대는 개인의 정체성과 역량이 새로운 방식으로 다시 사회에 뿌리내려야 하는 ‘제2의 대전환’의 국면이다. "
     "이 글이 그리는 공동체 재편은 바로 이 재착근의 설계도다.")

h2("3.2", "공동체별로 무엇이 바뀌었나")
para("여섯 공동체는 시대에 따라 역할이 크게 달라진다. 가정은 산업화 시대에 양육과 부양을 맡되 교육을 학교에 위임했지만, 디지털 시대에는 "
     "정체성의 단서를 가장 먼저 읽는 생활 기반이 된다. 이웃은 산업화 시대에 표준 제도에 가려 공동 돌봄이 소멸한 약한 관계망이었지만, "
     "디지털 시대에는 정체성을 실험할 관계를 여는 일상망으로 되살아난다. 마을은 도시에 기능을 빼앗겨 해체되었다가, 발견된 방향을 훈련으로 잇는 "
     "생활권으로 복원된다.", indent_first=None)
para("도시는 산업화 시대에 학교·회사·노동을 집적해 입시 경쟁과 정규 고용을 조직했지만, 디지털 시대에는 정체성을 실제 기여로 발휘하는 무대가 된다. "
     "국가는 표준 제도를 중앙에서 관리하던 자리에서 물러나, 발휘의 조건을 보장하고 위험을 조정하는 안전망으로 전환된다. 세계는 산업화 시대에 "
     "개인에게 닿지 않던 제한적 국제질서였으나, 디지털 시대에는 기후·AI·감염병처럼 국경을 넘는 위험을 함께 관리하는 능동적 층위가 된다.")
para("이 전환에서 세 가지 구조 변화가 두드러진다. 첫째, 산업화 시대에 약화되었던 이웃과 마을이 ‘실험 공간’과 ‘훈련 공간’으로 부활한다. "
     "이는 로버트 퍼트넘이 진단한 사회자본의 붕괴—특히 이질적 사람들을 잇는 가교형 자본의 약화—에 대한 구조적 응답이다. 둘째, 국가가 "
     "‘관리자’에서 ‘조율자·안전망’으로 바뀐다. 이는 엘리너 오스트롬의 다층 거버넌스 원리, 곧 어느 한 층위가 모든 것을 독점하지 않고 "
     "여러 자치 층위가 중첩적으로 문제를 나누어 맡는 방식과 일치한다. 셋째, 세계가 추상적 질서에서 생존에 직결된 거버넌스 층위로 능동화된다.")

# ════════════════════════ 4. 생애단계 심화 ════════════════════════
h1("4.", "생애단계별로 본 필요와 격차")

h2("4.1", "태아·영아 — 단서가 드러나는 시기")
para("디지털 기술은 이 단계에서 개인의 출발선을 바꾼다. 생체·행동 데이터를 읽는 기술이 등장하면서, 아이가 타고난 기질과 강점의 단서를 "
     "예전보다 훨씬 일찍 포착할 수 있게 되었다. 이 기술 변화가 새로운 필요를 만든다. 농업 시대에는 무사한 출산과 건강한 몸이면 충분했고, "
     "산업화 시대에는 표준 발달표에 맞는 안정된 양육이 목표였다. 디지털 시대에는 타고난 단서를 일찍 읽어 기록하는 일이 필요가 된다. "
     "그래서 공동체도 달라진다. 가정은 단순 양육의 자리에서 ‘단서를 가장 먼저 읽고 기록하는 생활 기반’으로 역할이 바뀐다. "
     "다만 이 기술은 누구에게나 똑같이 닿지 않는다. 데이터와 관찰이 풍부한 가정의 아이는 단서가 일찍 읽히지만, 그런 환경이 없는 아이는 출발선 바깥에 남는다. "
     "제임스 헥만이 보였듯 생애 초기 투자는 이후 어느 시기보다 높은 수익을 낳으므로, 국가가 먼저 찾아가 기초 돌봄을 보장하는 역할을 새로 맡는다.", indent_first=None)

h2("4.2", "유아·아동 — 발견하고 실험하는 시기")
para("농업 시대의 아이는 집안일과 농사일을 익히며 자랐고, 산업화 시대의 아이는 취학 준비와 또래에 뒤지지 않는 기초 학력에 매였다. "
     "디지털 시대의 목표는 다양한 체험으로 관심과 강점을 발견하고 실험하는 것이다. 산업화 시대에는 가정과 학교, 국가의 의무 교육만이 관여했지만, "
     "디지털 시대에는 가정·이웃·마을·도시·국가가 함께 역할을 나눈다. 체험 자원이 풍부한 아이는 폭넓은 경험으로 강점을 또렷이 하지만, "
     "그렇지 못한 아이를 위해 마을의 공동 프로그램과 국가의 돌봄이 발견의 기회를 먼저 채운다. 이 분산 구조는 브론펜브레너가 말한 중간체계—가정·이웃·마을이 "
     "서로 맞물려 시너지를 내는 구조—를 제도로 구현한 것이다.", indent_first=None)

h2("4.3", "청소년 — 훈련하고 방향을 정하는 시기")
para("이 단계는 정체성의 위기가 가장 첨예한 시기다. 산업화 시대의 청소년은 입시 경쟁에서 좋은 성적과 상급 학교 진학에 모든 것을 걸었다. "
     "성적이 좋은 소수는 원하는 진로를 골랐지만, 대다수는 점수에 진로를 빼앗기고 다른 재능을 묻어야 했으며, 진학에서 탈락한 이는 길 자체가 막혔다. "
     "마이클 영이 경고한 능력주의의 함정이 바로 이 장면이다. 시험이 삶을 재단하고, 실패는 구조가 아니라 개인의 능력 부족으로 귀속되어 "
     "탈락한 이에게 이중의 고통을 안긴다. 디지털 시대는 연결 공동체를 도시의 입시 기관에서 마을의 멘토와 훈련 경로로 옮긴다. "
     "강점이 점수 서열 바깥에서 길러질 수 있는 공간을 마을이 연다.", indent_first=None)

h2("4.4", "청년 — 발휘하는 시기")
para("디지털 기술은 이 단계에서 개인이 일하는 방식을 가장 크게 바꾼다. AI·데이터·플랫폼이 기획·제작·유통의 비용을 낮추면서, 개인은 큰 조직에 "
     "들어가야만 생산자가 되던 제약에서 풀려난다. 이 변화가 새로운 필요를 만든다. 농업 시대에는 물려받을 토지와 혼인으로 가정을 이루는 것이, "
     "산업화 시대에는 좋은 직장 취업과 정규직 정착이 청년의 목표였다. 디지털 시대에는 자기 정체성을 실제 기여로 발휘할 무대 자체가 필요가 된다. "
     "그래서 공동체도 달라진다. 도시는 일자리를 배분하던 자리에서 정체성을 기여로 발휘하는 무대가 되고, 세계가 처음으로 연결 공동체로 등장한다. "
     "국경을 넘는 협업 시장이 열리면서 국내 노동시장의 협소함을 우회할 길이 생기기 때문이다. 다만 발휘의 무대에 먼저 올라서는 사람과 무대 바깥에 머무는 사람의 간격은 크다. "
     "무대가 없던 이에게 진입 장벽을 낮춰 첫 기여를 잇는 지원이 필요한 까닭이다. 이는 에스핑안데르센이 지식경제 복지국가에서 강조한 ‘사회적 투자’—역량이 기여로 "
     "발현되도록 미리 조건을 까는 일—와 맞닿는다.", indent_first=None)

h2("4.5", "중장년 — 재설계하고 확장하는 시기")
para("이 단계는 디지털 전환의 혜택과 위험이 가장 불균등하게 갈리는 시기다. 산업화 시대의 목표는 고용 유지와 가족 부양, 사회적 지위였다. "
     "디지털 시대의 목표는 강점을 재설계하고 새 영역에 도전하는 것이다. 그러나 재학습의 기회를 얻은 사람은 변화의 물결에 올라타지만, 그렇지 못한 사람은 "
     "기술 변화 앞에서 버티다 고용 불안과 경력 중단의 위험을 안고, 한번 실직하면 회복이 어렵다. 부르디외의 자본이론이 보여주듯, 중장년기의 전환 실패는 "
     "생애에 걸쳐 쌓인 자본의 격차가 임계점을 넘어 회복하기 어려운 지점으로 치닫는 국면이다. 마을의 재학습 접근과 국가·가정의 전환기 "
     "보호가 필요한 까닭이다.", indent_first=None)

h2("4.6", "노년 — 전수하고 연결하는 시기")
para("농업 시대의 노인은 권위와 봉양을 누렸고, 산업화 시대의 노인은 은퇴와 함께 부양의 대상으로 남았다. 디지털 시대의 노년기 재정의는 과감하다. "
     "건강을 미리 예측하고 예방하며, 존엄과 판단의 주도권을 지키는 시기로 본다. 경험을 쌓은 이는 멘토와 자문으로 후속 세대와 경험을 잇는 현역 전수자가 된다. "
     "이 단계에는 가정의 예방·돌봄·존엄, 이웃의 관계 유지, 도시의 건강 예측·생활 의료, 국가의 소득·최소 권리선이 역할을 나눈다. "
     "에스핑안데르센의 탈상품화 원리—노인이 시장에 의존하지 않고도 인간다운 삶을 유지해야 한다는—는 고립 위기의 노인을 돌봄과 역할로 다시 잇는 "
     "설계로 구현된다. 이는 에릭슨이 노년의 과업으로 본 ‘자아통합 대 절망’의 위기에 대한 사회적 응답이기도 하다.", indent_first=None)

# ════════════════════════ 5. 함의 ════════════════════════
h1("5.", "디지털 전환이 공동체에 요구하는 것")

h2("5.1", "생애는 단선이 아니라 누적의 사이클이다")
para("디지털 시대의 생애주기는 한 방향으로 자라는 직선이 아니라, 앞 단계의 결과가 다음 단계의 조건이 되는 나선형 누적 구조다. "
     "중장년의 재설계는 청소년기의 훈련이 성공했을 때 가능하고, 노년의 전수는 청년·중장년의 발휘가 쌓였을 때 의미를 갖는다. "
     "그래서 초기 단계의 격차는 단순한 기회 불평등이 아니라 생애 전체 사이클의 단절을 뜻한다. 초기에 역량이 기능으로 전환되지 못하면 "
     "이후 단계의 확장 자체가 막힌다. 헥만이 실증한 초기 투자의 복리 효과는 이 사이클 논리의 경제학적 표현이다.", indent_first=None)

h2("5.2", "공동체 재배치의 세 원리")
rich([("첫째, 가까운 공동체를 다시 키워야 한다. ", True),
      ("개인의 정체성 발현에 가장 큰 영향을 미치는 것은 가정·이웃·마을에서 일어나는 직접적이고 지속적인 상호작용이다. "
       "산업화 시대에 약해진 이 층위를 회복하는 것이 디지털 전환의 핵심 과제다.", False)], indent_first=None)
rich([("둘째, 제도의 손길이 닿지 않는 사람에게는 표준이 아니라 맞춤이 필요하다. ", True),
      ("기다리는 제도가 아니라 ‘먼저 찾아가는’ 공동체의 능동성이 배제를 줄인다.", False)])
rich([("셋째, 공동체 사이의 연결을 제도화해야 한다. ", True),
      ("이웃에서 발견한 흥미가 마을의 훈련으로, 마을의 훈련이 도시의 발휘로 이어지는 경로가 제도로 깔리지 않으면, "
       "개별 공동체의 역할 강화는 단편에 그친다.", False)])

h2("5.3", "세계라는 층위의 의미가 달라진다")
para("디지털 시대에 세계가 청년·중장년의 연결 공동체로 등장한다는 사실은 가볍지 않다. 국경을 넘는 협업이 가능해지면서 개인의 발휘 무대가 "
     "국내에 갇히지 않는다. 동시에 기후변화·AI 위험·감염병처럼 국가 단위를 넘어서는 공동 위험이 커지면서, 세계는 ‘개인에게 닿지 않던’ 추상적 질서에서 "
     "생활과 생존에 직결된 능동적 거버넌스 층위로 바뀐다. 앤서니 기든스가 말한 시간·공간의 압축이 제도의 차원에서 현실이 되는 셈이다.", indent_first=None)

# ════════════════════════ 6. 정책·결론 ════════════════════════
h1("6.", "정책적 함의와 결론")

h2("6.1", "다섯 가지 정책 방향")
rich([("첫째, 생애주기 단계별 공동체 역할을 제도로 명시한다. ", True),
      ("현행 복지는 생애주기의 질적 차이를 충분히 담지 못한다. 위에서 본 여섯 단계와 단계별 역할 분담을 제도 설계의 단위로 삼아야 한다.", False)], indent_first=None)
rich([("둘째, 이웃·마을 공동체의 역량 회복에 장기 투자한다. ", True),
      ("사회자본은 한번 무너지면 쉽게 돌아오지 않는다. 인프라뿐 아니라 관계 형성을 돕는 꾸준한 커뮤니티 빌딩이 필요하다.", False)])
rich([("셋째, 배제된 사람에게 선제적·능동적으로 다가간다. ", True),
      ("찾아가는 발달 지원, 방문형 돌봄, 중장년 경력 재설계 지원처럼 ‘먼저 찾아가는’ 공공 서비스를 제도화한다.", False)])
rich([("넷째, 마을 단위 훈련·멘토 생태계를 구축한다. ", True),
      ("청소년과 중장년의 격차를 줄이는 핵심은 마을 단위의 훈련 경로와 멘토단이다. 중앙이 직접 운영하기보다 지역이 자율 설계하고 국가가 최소 기준을 보장한다.", False)])
rich([("다섯째, 국가의 역할을 ‘관리’에서 ‘조율’로 바꾼다. ", True),
      ("중앙 관리형 국가는 다양한 정체성 실현 요구에 응답할 수 없다. 국가는 도시·마을의 실험을 조율하고 최소 권리선을 세우는 메타 거버넌스로 전환해야 한다.", False)])

h2("6.2", "한계")
para("이 분석에는 한계가 있다. 생애단계 구분은 이상형이어서 현실의 경계는 훨씬 유동적이며, 특히 청년기와 중장년기의 구분이 점점 흐려지고 있다. "
     "여섯 공동체의 역할도 상호 배타적이지 않아 실제로는 여러 공동체가 같은 기능을 겹쳐 수행한다. 동원한 이론들은 주로 서구의 경험에서 나온 것이어서 "
     "한국 사회의 빠른 산업화와 교육열, 가족 구조의 급변을 온전히 담지 못할 수 있다. 무엇보다 디지털 시대의 공동체 모델은 아직 진행 중인 과정이며, "
     "여기서 그린 그림은 실증이 아니라 규범적 지향에 가깝다.", indent_first=None)

h2("6.3", "결론")
para("이 글의 핵심 주장은 셋으로 요약된다. 첫째, 공동체의 변화는 기술이 바깥에서 결정하는 것이 아니라 개인의 생애주기적 필요가 안에서 밀어 올리는 과정이다. "
     "둘째, 산업화 시대의 표준화 공동체는 정체성을 발휘하려는 개인의 필요에 응답하지 못하는 구조적 한계를 안고 있다. 셋째, 디지털 시대의 공동체 재편은 "
     "이웃·마을의 부활, 도시의 무대화, 국가의 조율자 전환, 세계의 능동화를 통해 각 생애단계의 필요에 맞춰 응답하는 분산형 구조를 지향한다.", indent_first=None)
para("디지털 전환은 기술의 문제가 아니라 사람의 문제다. 그리고 사람의 문제는 언제나 생애주기의 문제다. 우리가 내놓는 것은 기술 로드맵이 아니라 "
     "인간 발달의 생태학이며, 그 생태학 안에서 공동체는 개인의 필요에 응답함으로써만 존재의 이유를 증명한다.")

# ════════════════════════ 참고문헌 ════════════════════════
h1("", "참고문헌")
refs = [
 "Bourdieu, P. (1986). The forms of capital. In J. G. Richardson (Ed.), Handbook of Theory and Research for the Sociology of Education (pp. 241–258). Greenwood Press.",
 "Bronfenbrenner, U. (1979). The Ecology of Human Development. Harvard University Press.",
 "Chetty, R., Hendren, N., Kline, P., & Saez, E. (2014). Where is the land of opportunity? Quarterly Journal of Economics, 129(4), 1553–1623.",
 "Erikson, E. H. (1950). Childhood and Society. W. W. Norton.",
 "Erikson, E. H. (1968). Identity: Youth and Crisis. W. W. Norton.",
 "Esping-Andersen, G. (1990). The Three Worlds of Welfare Capitalism. Princeton University Press.",
 "Esping-Andersen, G. (1999). Social Foundations of Postindustrial Economies. Oxford University Press.",
 "Giddens, A. (1991). Modernity and Self-Identity. Stanford University Press.",
 "Heckman, J. J. (2006). Skill formation and the economics of investing in disadvantaged children. Science, 312(5782), 1900–1902.",
 "Nussbaum, M. C. (2011). Creating Capabilities: The Human Development Approach. Harvard University Press.",
 "Ostrom, E. (1990). Governing the Commons. Cambridge University Press.",
 "Ostrom, E. (2009). A polycentric approach for coping with climate change. World Bank Policy Research Working Paper, No. 5095.",
 "Polanyi, K. (1944). The Great Transformation. Farrar & Rinehart.",
 "Putnam, R. D. (2000). Bowling Alone. Simon & Schuster.",
 "Sen, A. (1999). Development as Freedom. Anchor Books.",
 "Young, M. (1958). The Rise of the Meritocracy: 1870–2033. Thames and Hudson.",
]
for r in refs:
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_after = Pt(3); pf.line_spacing = 1.35
    pf.left_indent = Mm(8); pf.first_line_indent = Mm(-8)  # hanging indent
    run = p.add_run(r)
    set_run_font(run, name=BODY_FONT, size=9.5)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc.save(OUT)
print("saved:", OUT)
print("paragraphs:", len(doc.paragraphs), "tables:", len(doc.tables))
