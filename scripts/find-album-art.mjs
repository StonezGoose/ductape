import { chromium } from '/Users/stonez/Documents/ductape/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/stonez/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});

const page = await browser.newPage();

// Scrape the store pages for each missing release - they have full product images
const urls = [
  'https://www.ductape.info/product-page/ductape-obscure',
  'https://www.ductape.info/product-page/ductape-fine',
  'https://www.ductape.info/product-page/ductape-little-monsters-maxi-single-2020',
  'https://www.ductape.info/product-page/labirent-cd',
  'https://www.ductape.info/product-page/ruh-cd',
  'https://www.ductape.info/product-page/echo-drama-deluxe-cd',
];

for (const url of urls) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  const imgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => img.src)
      .filter(src => src.includes('c82d5f') && !src.includes('logo'));
  });

  console.log(`\n--- ${url.split('/').pop()} ---`);
  imgs.forEach(src => {
    const m = src.match(/(c82d5f_[a-z0-9]+~mv2\.(jpg|png))/);
    if (m) console.log(m[1]);
  });
}

await browser.close();
