import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('/Users/stonez/Documents/ductape/scripts/cloned-content.json'));
const gallery = data['https://www.ductape.info/gallery'];

console.log('Total images found on gallery page:', gallery.images.length);
console.log('\nAll c82d5f images (actual photos, not icons):');
const photos = gallery.images.filter(img =>
  img.src.includes('c82d5f') &&
  !img.src.includes('logo') &&
  !img.src.includes('61331bbb') // footer element
);
photos.forEach((img, i) => {
  // Extract just the hash
  const match = img.src.match(/media\/(c82d5f_[a-z0-9]+~mv2\.(jpg|png|webp))/);
  console.log(`${i+1}. ${match?.[1] || img.src.substring(0, 80)}`);
});
console.log('\nTotal photo count:', photos.length);
