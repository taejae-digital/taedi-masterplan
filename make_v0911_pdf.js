const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1131 });

  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.includes('webpack-hmr') || url.includes('__nextjs') || url.includes('_next/static/webpack')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto('http://localhost:3000/mp/v0.9.11', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 12000));

  const outPath = '/Users/taejae-agent/.openclaw/workspace-taedi/taedi-masterplan/narrative/masterplan-v0.9.11.pdf';
  await page.pdf({ path: outPath, format: 'A3', landscape: true, printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  console.log('PDF generated:', outPath);
})();
