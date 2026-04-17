const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport for A3 Landscape
  await page.setViewport({ width: 1587, height: 1122 });

  console.log('Navigating to Nano Banana page...');
  await page.goto('http://localhost:3099/mp/nano-banana', { 
    waitUntil: 'networkidle0', 
    timeout: 60000 
  });

  await page.addStyleTag({
    content: '@page { margin: 0 !important; }'
  });

  await new Promise(r => setTimeout(r, 4000));

  const outputPath = path.join('/Users/taejaefci/.openclaw/workspace-taedi', 'masterplan-v0.5.2-nano-banana.pdf');
  
  console.log('Generating Nano Banana PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('PDF generation complete: ' + outputPath);
})();
