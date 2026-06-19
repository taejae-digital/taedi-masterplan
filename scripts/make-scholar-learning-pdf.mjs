import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const input = path.join(root, 'drafts/scholar-profiles-learning-materials-v0.11.5.md');
const outHtml = path.join(root, 'drafts/scholar-profiles-learning-materials-v0.11.5.html');
const outPdf = path.join(root, 'archive/pdf/scholar-profiles-learning-materials-v0.11.5.pdf');
const md = fs.readFileSync(input, 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  return esc(s)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

const scholarNames = ['에릭 브린욜프슨', '다니엘 서스킨드', '마리아나 마추카토', '대런 아세모글루', '요슈아 벤지오', '리처드 플로리다', '쇼샤나 주보프', '루치아노 플로리디'];
let htmlParts = [];
let list = [];
function flushList() {
  if (list.length) {
    htmlParts.push(`<ul>${list.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`);
    list = [];
  }
}

for (const raw of md.split(/\r?\n/)) {
  const line = raw.trimEnd();
  if (!line.trim()) { flushList(); continue; }
  if (/^---+$/.test(line.trim())) { flushList(); htmlParts.push('<div class="rule"></div>'); continue; }
  let m;
  if ((m = line.match(/^# (.+)/))) { flushList(); htmlParts.push(`<section class="chapter"><div class="chapterNo">${htmlParts.filter(x=>x.includes('class="chapter"')).length+1}</div><h1>${inline(m[1])}</h1>`); continue; }
  if ((m = line.match(/^## (.+)/))) { flushList(); const t=m[1]; const cls = scholarNames.some(n=>t.includes(n)) ? ' scholar-title' : ''; htmlParts.push(`<h2 class="${cls}">${inline(t)}</h2>`); continue; }
  if ((m = line.match(/^### (.+)/))) { flushList(); htmlParts.push(`<h3>${inline(m[1])}</h3>`); continue; }
  if ((m = line.match(/^- (.+)/))) { list.push(m[1]); continue; }
  flushList();
  htmlParts.push(`<p>${inline(line)}</p>`);
}
flushList();
let content = htmlParts.join('\n').replace(/<section class="chapter">/g, '</section><section class="chapter">').replace(/^<\/section>/,'');
content += '</section>';

const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8" />
<title>마스터플랜 5.3 자문 학자 프로필·학습 자료</title>
<style>
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin:0; font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Apple SD Gothic Neo", sans-serif; color:#151515; background:#fff; word-break:keep-all; }
.cover { min-height: 245mm; padding: 22mm 15mm; position: relative; overflow:hidden; background: linear-gradient(135deg,#fff 0%,#fff 58%,#f1f5f4 58%,#f1f5f4 100%); page-break-after: always; }
.cover::before { content:"05.3"; position:absolute; right:-8mm; top:5mm; font-size:118pt; line-height:1; font-weight:950; letter-spacing:-9px; color:#e5e7eb; }
.cover .kicker { font-size:11pt; font-weight:850; letter-spacing:.18em; color:#0d7d72; border-top:5px solid #111; padding-top:7mm; width:55mm; }
.cover h1 { margin:18mm 0 0; font-size:32pt; line-height:1.08; letter-spacing:-1.8px; max-width:135mm; }
.cover .sub { margin-top:9mm; font-size:13pt; line-height:1.65; color:#4b5563; font-weight:600; max-width:130mm; }
.cover .grid { position:absolute; left:15mm; right:15mm; bottom:22mm; display:grid; grid-template-columns: repeat(3,1fr); gap:5mm; }
.cover .tile { border:1.3px solid #151515; border-top:5px solid #0d7d72; background:#fff; padding:5mm; min-height:34mm; }
.tile b { display:block; font-size:13pt; margin-bottom:2mm; }
.tile span { color:#4b5563; font-size:10.5pt; line-height:1.45; font-weight:600; }
.meta { position:absolute; right:15mm; top:18mm; text-align:right; font-size:9pt; color:#6b7280; font-weight:700; letter-spacing:.04em; }
.toc { page-break-after: always; padding-top:4mm; }
.toc h2 { font-size:22pt; margin:0 0 8mm; border-bottom:3px solid #111; padding-bottom:4mm; }
.toc-grid { display:grid; grid-template-columns:1fr 1fr; gap:5mm; }
.toc-card { border:1px solid #d1d5db; padding:5mm; border-left:5px solid #111; min-height:34mm; }
.toc-card .no { color:#0d7d72; font-size:9pt; font-weight:900; letter-spacing:.12em; }
.toc-card .title { font-size:15pt; font-weight:900; margin:2mm 0; }
.toc-card .desc { color:#4b5563; font-size:10.5pt; line-height:1.45; font-weight:600; }
.chapter { position:relative; page-break-before: always; padding-top:2mm; }
.chapter:first-of-type { page-break-before: auto; }
.chapterNo { position:absolute; right:0; top:-12mm; font-size:54pt; font-weight:950; color:#e5e7eb; letter-spacing:-4px; z-index:-1; }
h1 { font-size:21pt; line-height:1.15; margin:0 0 6mm; padding-bottom:4mm; border-bottom:3px solid #111; letter-spacing:-.9px; }
h2 { font-size:16pt; line-height:1.25; margin:8mm 0 3mm; letter-spacing:-.5px; }
h2.scholar-title { page-break-before: always; margin-top:0; padding:5mm 6mm; border:1.2px solid #111; border-top:6px solid #0d7d72; background:#fff; }
h3 { font-size:10.5pt; margin:5mm 0 2mm; color:#0d7d72; font-weight:900; letter-spacing:.05em; }
p { margin:0 0 3.1mm; font-size:10.2pt; line-height:1.62; color:#2b2b2b; }
ul { margin:0 0 3.5mm; padding:0; list-style:none; }
li { position:relative; margin:0 0 1.8mm; padding-left:5mm; font-size:9.8pt; line-height:1.48; color:#30343a; }
li::before { content:""; position:absolute; left:0; top:.62em; width:2.1mm; height:2.1mm; background:#0d7d72; }
strong { color:#111; font-weight:900; }
em { font-style:normal; color:#6b7280; font-weight:700; }
code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background:#f3f4f6; padding:.5mm 1mm; border-radius:1mm; }
.rule { height:1px; background:#d1d5db; margin:5mm 0; }
.headerline { position: fixed; top: 0; left:0; right:0; height:3mm; background:#111; }
.footer { position: fixed; bottom: 7mm; left:15mm; right:15mm; display:flex; justify-content:space-between; border-top:1px solid #d1d5db; padding-top:2.5mm; color:#6b7280; font-size:8.3pt; font-weight:650; }
@media print { .no-print { display:none; } }
</style></head><body>
<div class="headerline"></div><div class="footer"><span>태재미래전략연구원 · 디지털팀 학습 자료</span><span>v0.11.5 · 2026.06</span></div>
<section class="cover">
  <div class="meta">MASTERPLAN 5.3<br/>SCHOLAR LEARNING PACK<br/>v0.11.5</div>
  <div class="kicker">ADVISORY SCHOLARS</div>
  <h1>마스터플랜 5.3<br/>자문 학자 프로필·학습 자료</h1>
  <div class="sub">경제질서, 정치질서, 새로운 사회계약을 검증하기 위한 8명 학자 프로필과 팀 학습 운영안.</div>
  <div class="grid">
    <div class="tile"><b>O1 경제질서</b><span>브린욜프슨 · 서스킨드 · 마추카토<br/>AI 생산성, 노동 전환, 공공가치</span></div>
    <div class="tile"><b>O2 정치질서</b><span>아세모글루 · 벤지오 · 플로리다<br/>권력 재배치, AI 안전, 도시 다양성</span></div>
    <div class="tile"><b>O3 사회계약</b><span>주보프 · 플로리디<br/>플랫폼 권력, 정보윤리, 디지털 권리</span></div>
  </div>
</section>
<section class="toc">
  <h2>읽는 순서</h2>
  <div class="toc-grid">
    <div class="toc-card"><div class="no">01</div><div class="title">경제질서</div><div class="desc">AI가 표준 노동과 생산비 구조를 바꿀 때, 개인 생산자 경제가 성립하는 조건.</div></div>
    <div class="toc-card"><div class="no">02</div><div class="title">정치질서</div><div class="desc">기술과 도시가 국가 독점 권력을 흔들 때, 제도와 권력이 재배치되는 방식.</div></div>
    <div class="toc-card"><div class="no">03</div><div class="title">사회계약</div><div class="desc">플랫폼·AI·데이터 권력이 선택지와 인정 구조를 좌우할 때 필요한 공적 조정.</div></div>
    <div class="toc-card"><div class="no">04</div><div class="title">팀 학습 운영</div><div class="desc">4주 학습 순서, 산출물, 학자별 자문 질문 초안.</div></div>
  </div>
</section>
${content}
</body></html>`;

fs.writeFileSync(outHtml, html);
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto('file://' + outHtml, { waitUntil: 'networkidle0' });
await page.pdf({ path: outPdf, format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false });
await browser.close();
console.log('HTML written:', outHtml);
console.log('PDF written:', outPdf);
