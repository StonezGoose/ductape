import { chromium } from '/Users/stonez/Documents/ductape/node_modules/playwright/index.mjs';
import { writeFileSync } from 'fs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/stonez/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});

const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://www.ductape.info/gallery', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

const pageHeight = await page.evaluate(() => document.body.scrollHeight);
console.log('Page height:', pageHeight);

// Scroll through entire page in steps to trigger lazy loading
for (let y = 0; y <= pageHeight; y += 400) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(300);
}
await page.waitForTimeout(3000);

// Get all image sources including srcset and data attributes
const allSrcs = await page.evaluate(() => {
  const srcs = new Set();
  document.querySelectorAll('img').forEach(img => {
    if (img.src) srcs.add(img.src);
    if (img.getAttribute('data-src')) srcs.add(img.getAttribute('data-src'));
    if (img.srcset) img.srcset.split(',').forEach(s => srcs.add(s.trim().split(' ')[0]));
  });
  // Also check inline styles with background-image
  document.querySelectorAll('*').forEach(el => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg.includes('wixstatic')) {
      const m = bg.match(/url\("(.+?)"\)/);
      if (m) srcs.add(m[1]);
    }
  });
  return [...srcs];
});

const photoSrcs = allSrcs.filter(src =>
  src.includes('c82d5f') &&
  !src.includes('logo%202') &&
  !src.includes('61331bbb')
);

const hashes = [...new Set(photoSrcs.map(src => {
  const m = src.match(/(c82d5f_[a-z0-9]+~mv2\.(jpg|png|webp))/);
  return m ? m[1] : null;
}).filter(Boolean))];

// Also take a screenshot
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);

console.log(`\nFound ${hashes.length} unique photo hashes:`);
hashes.forEach((h, i) => console.log(`${i+1}. ${h}`));

writeFileSync('/Users/stonez/Documents/ductape/scripts/gallery-hashes.json', JSON.stringify(hashes, null, 2));
console.log('\nSaved to gallery-hashes.json');

await browser.close();
