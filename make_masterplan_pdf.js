const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const versionSource = fs.readFileSync(path.join(ROOT, 'masterplan-version.ts'), 'utf8');
const versionMatch = versionSource.match(/MASTERPLAN_VERSION\s*=\s*["']([^"']+)["']/);
const routeMatch = versionSource.match(/MASTERPLAN_ROUTE\s*=\s*["']([^"']+)["']/);
const pdfDirMatch = versionSource.match(/MASTERPLAN_PDF_DIR\s*=\s*["']([^"']+)["']/);
if (!versionMatch || !routeMatch || !pdfDirMatch) throw new Error('Cannot read masterplan shared constants');

const VERSION = versionMatch[1];
const ROUTE = routeMatch[1];
const PDF_DIR = pdfDirMatch[1];
const outPath = path.join(ROOT, PDF_DIR, `masterplan-${VERSION}.pdf`);

(async () => {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1131 });
  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.includes('webpack-hmr') || url.includes('__nextjs') || url.includes('_next/static/webpack')) req.abort();
    else req.continue();
  });
  const targetUrl = process.env.MP_URL || `http://localhost:3099${ROUTE}`;
  await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise(r => setTimeout(r, 12000));
  await page.pdf({ path: outPath, format: 'A3', landscape: true, printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  console.log('PDF generated:', outPath);
})();
