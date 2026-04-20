const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1600, height: 1131 });

  console.log('Navigating to /mp/v0.5.5 ...');
  await page.goto('http://localhost:3099/mp/v0.5.5', {
    waitUntil: 'networkidle0',
    timeout: 90000
  });

  await page.addStyleTag({
    content: '@page { margin: 0 !important; }'
  });

  await new Promise(r => setTimeout(r, 3000));

  const outputPath = '/Users/will_ryu/workspace/consulting/taejae/taedi-masterplan/narrative/masterplan-v0.5.5.pdf';

  console.log('Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('PDF generated: ' + outputPath);
})();
