import { chromium } from '/Users/stonez/Documents/ductape/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/stonez/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});

const page = await browser.newPage();
await page.goto('https://www.ductape.info/tickets', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(5000);

// Scroll through page
const h = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= h; y += 400) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await page.waitForTimeout(300);
}
await page.waitForTimeout(2000);

// Get all links
const links = await page.evaluate(() =>
  Array.from(document.querySelectorAll('a[href]'))
    .map(a => ({ text: a.textContent?.trim(), href: a.getAttribute('href') }))
    .filter(l => l.href && !l.href.startsWith('#') && l.text && l.text.length > 1)
);

// Get all text
const text = await page.evaluate(() => document.body.innerText);

console.log('=== ALL LINKS ===');
links.forEach(l => console.log(`"${l.text}" => ${l.href}`));

console.log('\n=== BODY TEXT (first 3000 chars) ===');
console.log(text.substring(0, 3000));

await page.screenshot({ path: '/tmp/tickets-orig.png', fullPage: true });
console.log('\nScreenshot saved to /tmp/tickets-orig.png');

await browser.close();
