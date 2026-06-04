import { chromium } from '/Users/stonez/Documents/ductape/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/stonez/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});

const page = await browser.newPage();

const urls = [
  'https://www.ductape.info/copy-of-fine',       // Gölgesiz lyrics page
  'https://www.ductape.info/copy-of-echo-drama-deluxe', // Fine lyrics page
];

for (const url of urls) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  const imgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img'))
      .map(img => img.src)
      .filter(src => src.includes('c82d5f') && !src.includes('logo') && !src.includes('61331bbb'))
  );
  console.log(`\n--- ${url} ---`);
  imgs.forEach(src => {
    const m = src.match(/(c82d5f_[a-z0-9]+~mv2\.(jpg|png))/);
    if (m) console.log(m[1], '|', src.substring(0, 120));
  });
}

await browser.close();
