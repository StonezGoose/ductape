import { readFileSync } from 'fs';
const data = JSON.parse(readFileSync('/Users/stonez/Documents/ductape/scripts/cloned-content.json'));
const t = data['https://www.ductape.info/tickets'];
console.log('TEXT:\n', t?.text);
console.log('\nIMAGES:', t?.images?.length);
