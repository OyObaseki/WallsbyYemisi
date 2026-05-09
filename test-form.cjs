const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  page.on('request', req => console.log('REQUEST:', req.method(), req.url()));

  await page.goto('http://localhost:4321/catalogue/spring-collection-2024');

  await page.fill('#fullName', 'Test User');
  await page.fill('#phoneNumber', '1234567890');
  await page.fill('#emailAddress', 'test@example.com');
  await page.fill('#location', 'Test City');
  await page.selectOption('#spaceType', 'Restaurant & Food Design');
  await page.fill('#wallWidth', '10');
  await page.fill('#wallHeight', '10');
  await page.fill('#projectDescription', 'Test Description');

  await page.click('#quoteSubmitBtn');

  await page.waitForTimeout(2000);

  await browser.close();
})();
