const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 120000,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200 });

  console.log('Capturing screenshots for v0.5.2...');
  await page.goto('http://localhost:3099/mp/v0.5.2', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  await page.screenshot({ path: '/Users/taejaefci/.openclaw/workspace-taedi/masterplan-v0.5.2-full.png', fullPage: true });

  console.log('Capturing screenshots for Nano Banana...');
  await page.goto('http://localhost:3099/mp/nano-banana', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  await page.screenshot({ path: '/Users/taejaefci/.openclaw/workspace-taedi/masterplan-v0.5.2-nano.png', fullPage: true });

  await browser.close();
  console.log('Screenshots complete.');
})();
