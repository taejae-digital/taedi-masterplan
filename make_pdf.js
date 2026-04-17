const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport to A3 landscape aspect ratio approx
  await page.setViewport({ width: 1600, height: 1131 });

  console.log('Navigating to masterplan page...');
  await page.goto('http://localhost:3099/mp/v0.5.2', { 
    waitUntil: 'networkidle0', 
    timeout: 60000 
  });

  // Inject CSS to remove margins for PDF print
  await page.addStyleTag({
    content: '@page { margin: 0 !important; }'
  });

  // Wait a bit more for any final renders/animations
  await new Promise(r => setTimeout(r, 3000));

  const outputPath = path.join('/Users/taejaefci/.openclaw/workspace-taedi', 'masterplan-v1.0-draft.pdf');
  
  console.log('Generating PDF...');
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
