const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 1280, height: 1024 });
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot saved');
  await browser.close();
})();
