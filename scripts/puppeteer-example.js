import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
  console.log('✅ Screenshot saved as example.png');
})();
