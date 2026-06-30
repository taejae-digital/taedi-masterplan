const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const htmlPath = path.join(ROOT, 'index.html');
const outPath = path.join(ROOT, 'suyeon-performance-brief.pdf');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.pdf({ path: outPath, format: 'A4', printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  console.log('PDF:', outPath);
})();
