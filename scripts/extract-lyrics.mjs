import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('/Users/stonez/Documents/ductape/scripts/cloned-content.json'));

const keys = [
  'https://www.ductape.info/littlemonsterslyrics',
  'https://www.ductape.info/labirentlyrics',
  'https://www.ductape.info/ruhlyrics',
  'https://www.ductape.info/echodramalyrics',
  'https://www.ductape.info/copy-of-echo-drama',
  'https://www.ductape.info/copy-of-echo-drama-deluxe',
  'https://www.ductape.info/copy-of-fine',
  'https://www.ductape.info/copy-of-gölgesiz',
];

for (const k of keys) {
  console.log('\n========== ' + k + ' ==========');
  console.log(data[k]?.text || 'NOT FOUND');
}
