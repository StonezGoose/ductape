/**
 * Ductape site cloner
 * Crawls every known page on ductape.info, extracts full text content,
 * and saves to /scripts/cloned-content.json
 *
 * Run: node scripts/clone-site.mjs
 */

import { PlaywrightCrawler } from 'crawlee';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const URLS = [
  'https://www.ductape.info/',
  'https://www.ductape.info/store',
  'https://www.ductape.info/copy-of-press-kit',
  'https://www.ductape.info/gallery',
  'https://www.ductape.info/videos',
  'https://www.ductape.info/tickets',
  'https://www.ductape.info/subscribe',
  'https://www.ductape.info/littlemonsterslyrics',
  'https://www.ductape.info/labirentlyrics',
  'https://www.ductape.info/ruhlyrics',
  'https://www.ductape.info/echodramalyrics',
  'https://www.ductape.info/copy-of-echo-drama',
  'https://www.ductape.info/copy-of-echo-drama-deluxe',
  'https://www.ductape.info/copy-of-fine',
  'https://www.ductape.info/copy-of-gölgesiz',
];

const results = {};

const crawler = new PlaywrightCrawler({
  launchContext: {
    launchOptions: {
      executablePath: '/Users/stonez/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
      headless: true,
    },
  },
  maxRequestRetries: 2,
  navigationTimeoutSecs: 60,
  requestHandlerTimeoutSecs: 90,

  async requestHandler({ page, request }) {
    console.log(`Crawling: ${request.url}`);

    // Wait for Wix to fully render
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(4000);

    // Extract full innerText — Wix renders everything into the DOM
    const content = await page.evaluate(() => {
      // Remove nav, footer, script, style elements before extracting
      const toRemove = document.querySelectorAll('nav, footer, script, style, [data-testid="mesh-container-content"] > div:first-child');
      // Don't actually remove — just get body text
      return document.body.innerText;
    });

    // Also extract all images
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => ({ src: img.src, alt: img.alt }))
        .filter(img => img.src.includes('wixstatic.com') && !img.src.includes('social-icons'));
    });

    // Extract YouTube iframes
    const videos = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('iframe'))
        .map(f => f.src)
        .filter(src => src.includes('youtube') || src.includes('youtu.be'));
    });

    results[request.url] = { url: request.url, text: content, images, videos };
    console.log(`  ✓ ${content.length} chars, ${images.length} images, ${videos.length} videos`);
  },

  failedRequestHandler({ request }) {
    console.log(`  ✗ Failed: ${request.url}`);
  },
});

await crawler.run(URLS);

const outPath = join(__dirname, 'cloned-content.json');
writeFileSync(outPath, JSON.stringify(results, null, 2));
console.log(`\n✓ Saved to ${outPath}`);
console.log(`  Pages scraped: ${Object.keys(results).length}`);
