const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const root = '/Users/taejae-agent/workspace/taedi-masterplan';
  const htmlPath = path.join(root, 'drafts/3-1-economic-order.html');
  const outPath = path.join(root, 'pdf/3-1-economic-order-draft.pdf');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1131, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.pdf({
    path: outPath,
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    preferCSSPageSize: true
  });
  await browser.close();
  console.log(outPath);
})();
