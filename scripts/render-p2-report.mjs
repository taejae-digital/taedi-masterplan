/**
 * render-p2-report.mjs
 * 태재미래전략연구원 P2 학술 보고서 → A4 PDF 렌더러
 * Self-contained: 마크다운을 내장 변환기로 HTML 변환 후 puppeteer로 PDF 출력
 */

import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const mdPath  = path.join(root, 'drafts/p2-lifecycle-community-report.md');
const outPdf  = path.join(root, 'archive/pdf/p2-lifecycle-community-report.pdf');

// ── 자체 마크다운 → HTML 변환기 ───────────────────────────────────────────
function mdToHtml(md) {
  let html = md
    // 특수문자 이스케이프 (단순 치환)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const lines = html.split('\n');
  const out = [];
  let inTable = false;
  let tableHead = true;
  let inBlockquote = false;
  let inList = false;
  let listType = '';
  let inParagraph = false;
  let i = 0;

  const flushParagraph = () => {
    if (inParagraph) { out.push('</p>'); inParagraph = false; }
  };
  const flushList = () => {
    if (inList) { out.push(listType === 'ol' ? '</ol>' : '</ul>'); inList = false; listType = ''; }
  };
  const flushTable = () => {
    if (inTable) { out.push('</tbody></table>'); inTable = false; tableHead = true; }
  };
  const flushBq = () => {
    if (inBlockquote) { out.push('</blockquote>'); inBlockquote = false; }
  };

  const inline = (s) => s
    // bold+italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // inline code
    .replace(/`(.+?)`/g, '<code>$1</code>')
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    // --- HR
    if (/^---+$/.test(line) || /^\*\*\*+$/.test(line)) {
      flushParagraph(); flushList(); flushTable(); flushBq();
      out.push('<hr/>');
      i++; continue;
    }

    // --- Heading
    const hm = line.match(/^(#{1,6})\s+(.*)/);
    if (hm) {
      flushParagraph(); flushList(); flushTable(); flushBq();
      const level = hm[1].length;
      const text  = inline(hm[2]);
      // 앵커 id 생성
      const id = hm[2].replace(/[^가-힣a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '-').toLowerCase();
      out.push(`<h${level} id="${id}">${text}</h${level}>`);
      i++; continue;
    }

    // --- Table row
    if (line.startsWith('|')) {
      flushParagraph(); flushList(); flushBq();
      const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      if (/^\|[\s|:-]+\|$/.test(line)) {
        // separator row
        if (!inTable) { /* shouldn't happen */ }
        else { out.push('</thead><tbody>'); tableHead = false; }
        i++; continue;
      }
      if (!inTable) {
        out.push('<table><thead><tr>');
        cells.forEach(c => out.push(`<th>${inline(c.trim())}</th>`));
        out.push('</tr>');
        inTable = true;
        tableHead = true;
      } else if (!tableHead) {
        out.push('<tr>');
        cells.forEach(c => out.push(`<td>${inline(c.trim())}</td>`));
        out.push('</tr>');
      }
      i++; continue;
    } else if (inTable) {
      flushTable();
    }

    // --- Unordered list
    const ulm = line.match(/^[-*+]\s+(.*)/);
    if (ulm) {
      flushParagraph(); flushBq();
      if (!inList || listType !== 'ul') { flushList(); out.push('<ul>'); inList = true; listType = 'ul'; }
      out.push(`<li>${inline(ulm[1])}</li>`);
      i++; continue;
    }

    // --- Ordered list
    const olm = line.match(/^\d+\.\s+(.*)/);
    if (olm) {
      flushParagraph(); flushBq();
      if (!inList || listType !== 'ol') { flushList(); out.push('<ol>'); inList = true; listType = 'ol'; }
      out.push(`<li>${inline(olm[1])}</li>`);
      i++; continue;
    } else if (inList && line !== '') {
      // continuation might be indented — just close list
      if (!/^\s{2,}/.test(raw)) { flushList(); }
    }

    // --- Blank line
    if (line === '') {
      flushParagraph(); flushList(); flushTable(); flushBq();
      out.push('');
      i++; continue;
    }

    // --- Paragraph
    flushTable(); flushBq();
    if (!inList) {
      if (!inParagraph) { out.push('<p>'); inParagraph = true; }
      else { out.push('<br/>'); }
      out.push(inline(line));
    }
    i++;
  }
  flushParagraph(); flushList(); flushTable(); flushBq();
  return out.join('\n');
}

// ── CSS 스타일 (학술 논문체, 한글 폰트) ─────────────────────────────────
const CSS = `
@page {
  size: A4;
  margin: 22mm 23mm 22mm 25mm;
}
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
html, body {
  font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
               'Nanum Gothic', 'Helvetica Neue', sans-serif;
  font-size: 10.5pt;
  line-height: 1.72;
  color: #1a1a2e;
  background: #ffffff;
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* ── 표지 블록 ── */
.cover-block {
  text-align: center;
  padding: 18mm 0 14mm;
  border-bottom: 2.5pt solid #1a1a2e;
  margin-bottom: 10mm;
}
.cover-series {
  font-size: 8.5pt;
  letter-spacing: 0.18em;
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 6mm;
}
.cover-title {
  font-size: 18pt;
  font-weight: 900;
  line-height: 1.28;
  letter-spacing: -0.5px;
  color: #0f172a;
  margin-bottom: 5mm;
}
.cover-subtitle {
  font-size: 11.5pt;
  color: #334155;
  font-weight: 600;
  margin-bottom: 7mm;
}
.cover-meta {
  font-size: 9.5pt;
  color: #64748b;
  line-height: 1.7;
}

/* ── 섹션 제목 ── */
h1 {
  font-size: 15pt;
  font-weight: 900;
  letter-spacing: -0.4px;
  color: #0f172a;
  margin: 9mm 0 4mm;
  border-bottom: 1.5pt solid #1a1a2e;
  padding-bottom: 2mm;
  page-break-after: avoid;
}
h2 {
  font-size: 12pt;
  font-weight: 800;
  color: #1e3a5f;
  margin: 7mm 0 3mm;
  border-left: 3.5pt solid #2563eb;
  padding-left: 4mm;
  page-break-after: avoid;
}
h3 {
  font-size: 10.8pt;
  font-weight: 750;
  color: #1e3a5f;
  margin: 5mm 0 2.5mm;
  page-break-after: avoid;
}
h4, h5, h6 {
  font-size: 10.5pt;
  font-weight: 700;
  color: #334155;
  margin: 4mm 0 2mm;
  page-break-after: avoid;
}

/* ── 본문 ── */
p {
  margin: 0 0 3.5mm;
  text-align: justify;
  hyphens: auto;
}
p + p {
  text-indent: 0;
}

/* ── 인용·강조 ── */
strong { font-weight: 800; color: #0f172a; }
em     { font-style: italic; color: #334155; }
code   {
  font-family: 'D2Coding', 'Courier New', monospace;
  font-size: 9pt;
  background: #f1f5f9;
  border: 0.5pt solid #cbd5e1;
  border-radius: 2pt;
  padding: 0.5pt 2.5pt;
}
blockquote {
  margin: 4mm 0 4mm 6mm;
  padding: 3mm 5mm;
  border-left: 3pt solid #94a3b8;
  background: #f8fafc;
  font-size: 10pt;
  color: #475569;
}

/* ── 표 ── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 5mm 0 6mm;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
thead {
  background: #1e3a5f;
  color: #ffffff;
}
th {
  padding: 2.5mm 3mm;
  text-align: center;
  font-weight: 700;
  border: 0.5pt solid #94a3b8;
}
td {
  padding: 2mm 3mm;
  border: 0.5pt solid #cbd5e1;
  vertical-align: top;
  line-height: 1.55;
}
tbody tr:nth-child(even) { background: #f8fafc; }

/* ── 목록 ── */
ul, ol {
  margin: 2mm 0 3.5mm 7mm;
  padding: 0;
}
li { margin-bottom: 1.5mm; }

/* ── HR ── */
hr {
  border: none;
  border-top: 1pt solid #cbd5e1;
  margin: 6mm 0;
}

/* ── 초록 블록 ── */
.abstract-box {
  border: 1pt solid #475569;
  border-radius: 2pt;
  padding: 5mm 7mm;
  margin: 6mm 0 8mm;
  background: #f8fafc;
}
.abstract-box .abstract-label {
  font-size: 8.5pt;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: #1e3a5f;
  margin-bottom: 2.5mm;
}
.abstract-box p {
  font-size: 9.8pt;
  line-height: 1.7;
  color: #334155;
  margin: 0 0 2.5mm;
}
.keyword-line {
  font-size: 9pt;
  color: #475569;
  margin-top: 2mm;
}
.keyword-line strong { color: #1e3a5f; }

/* ── 참고문헌 ── */
.references h1 {
  font-size: 12pt;
  margin-top: 8mm;
}
.references p {
  font-size: 9.2pt;
  line-height: 1.65;
  margin-bottom: 2.5mm;
  padding-left: 8mm;
  text-indent: -8mm;
  text-align: left;
}

/* ── 페이지 번호 (CSS counter) ── */
@page {
  @bottom-center {
    content: counter(page);
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    font-size: 8.5pt;
    color: #94a3b8;
  }
  @bottom-right {
    content: "태재미래전략연구원 · P2 보고서";
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    font-size: 7.5pt;
    color: #cbd5e1;
  }
}

/* 페이지 나누기 제어 */
h1 { page-break-before: auto; }
h2, h3 { page-break-before: auto; }
table, figure { page-break-inside: avoid; }
`;

// ── 마크다운 로드 및 특수 처리 ────────────────────────────────────────────
let md = fs.readFileSync(mdPath, 'utf8');

// 표지 블록 추출 (앞 3줄: 제목, 부제목, 기관+날짜)
const firstLines = md.split('\n').slice(0, 6);
const titleMatch  = firstLines[0].match(/^#\s+(.*)/);
const seriesMatch = firstLines[2];
const orgLine     = firstLines[4];
const dateLine    = firstLines[5];

const coverTitle  = titleMatch ? titleMatch[1] : '태재미래전략연구원 마스터플랜 P2';
const coverSeries = seriesMatch.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
const coverOrg    = orgLine.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
const coverDate   = dateLine.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();

// 표지 블록 제거 후 본문 처리
let bodyMd = md.split('\n').slice(7).join('\n');

// 초록 섹션을 특수 박스로 변환
bodyMd = bodyMd.replace(
  /## 초록 \(Abstract\)\n\n([\s\S]*?)(?=\n\*\*키워드:\*\*.*?\n)/,
  (_, content) => `<div class="abstract-box"><div class="abstract-label">ABSTRACT</div><p>${content.trim().replace(/\n\n/g, '</p><p>')}</p>`
);
bodyMd = bodyMd.replace(
  /\*\*키워드:\*\*(.*?)(?=\n---)/s,
  (_, keywords) => `<p class="keyword-line"><strong>키워드:</strong>${keywords.trim()}</p></div>`
);

// 참고문헌 섹션에 클래스 부여
bodyMd = bodyMd.replace(
  /## 참고문헌 \(References\)/,
  '<div class="references">\n\n## 참고문헌 (References)'
);
bodyMd += '\n\n</div>';

// 마지막 이탤릭 한 줄 각주 처리
bodyMd = bodyMd.replace(
  /^\*본 보고서는(.*)\*$/m,
  '<p style="font-size:8.5pt;color:#64748b;border-top:0.5pt solid #cbd5e1;margin-top:8mm;padding-top:2mm;">* 본 보고서는$1</p>'
);

const bodyHtml = mdToHtml(bodyMd);

// ── 최종 HTML 조합 ────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>태재미래전략연구원 P2 학술 보고서</title>
  <style>${CSS}</style>
</head>
<body>

<!-- 표지 블록 -->
<div class="cover-block">
  <div class="cover-series">${coverSeries}</div>
  <div class="cover-title">${coverTitle.replace(':', ':<br/>')}</div>
  <div class="cover-subtitle">태재미래전략연구원 마스터플랜 P2 학술 분석 보고서</div>
  <div class="cover-meta">
    ${coverOrg}<br/>
    ${coverDate}
  </div>
</div>

<!-- 본문 -->
${bodyHtml}

</body>
</html>`;

// ── 출력 디렉토리 확인 ────────────────────────────────────────────────────
const pdfDir = path.dirname(outPdf);
if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir, { recursive: true });

// 디버그용 HTML 저장
const debugHtml = path.join(root, 'drafts/p2-lifecycle-community-report.html');
fs.writeFileSync(debugHtml, html, 'utf8');
console.log('HTML written:', debugHtml);

// ── Puppeteer PDF 렌더 ────────────────────────────────────────────────────
console.log('Launching puppeteer...');
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();

// HTML 직접 setContent (file:// 경로 없이)
await page.setContent(html, { waitUntil: 'networkidle0' });

// 폰트 렌더링 안정화 대기
await new Promise(r => setTimeout(r, 800));

await page.pdf({
  path: outPdf,
  format: 'A4',
  printBackground: true,
  margin: {
    top:    '22mm',
    bottom: '22mm',
    left:   '25mm',
    right:  '23mm',
  },
  displayHeaderFooter: true,
  headerTemplate: `<div style="font-size:7.5pt;color:#94a3b8;width:100%;text-align:right;padding-right:25mm;font-family:'Apple SD Gothic Neo','Noto Sans KR',sans-serif;">태재미래전략연구원 마스터플랜 연구시리즈 제2호</div>`,
  footerTemplate: `<div style="font-size:8pt;color:#94a3b8;width:100%;display:flex;justify-content:space-between;padding:0 25mm 0 25mm;font-family:'Apple SD Gothic Neo','Noto Sans KR',sans-serif;"><span>개인의 생애주기별 필요가 공동체의 형성을 규정한다</span><span class="pageNumber"></span></div>`,
});

await browser.close();

console.log('✅ PDF written:', outPdf);
console.log('   Path:', path.resolve(outPdf));

// 페이지 수 추정 출력
const stats = fs.statSync(outPdf);
console.log('   File size:', (stats.size / 1024).toFixed(1), 'KB');
