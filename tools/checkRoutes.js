const fs = require('fs');
const path = require('path');
const sms = fs.readFileSync(path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'smsData.js'), 'utf8');
const app = fs.readFileSync(path.resolve(__dirname, '..', 'frontend', 'src', 'App.jsx'), 'utf8');

const routeRegex = /to:\s*'([^']+)'/g;
let m;
const routes = new Set();
while ((m = routeRegex.exec(sms))) {
  routes.add(m[1]);
}

const registered = new Set();
for (const r of routes) {
  if (app.indexOf(r) !== -1) registered.add(r);
}

const missing = [...routes].filter((r) => !registered.has(r));
console.log('Total menu routes:', routes.size);
console.log('Registered routes in App.jsx:', registered.size);
console.log('Missing dedicated registrations (will use MenuSectionPage):', missing.length);
missing.forEach(r => console.log(r));

fs.writeFileSync(path.resolve(__dirname, '..', 'tools', 'route-check-result.txt'), `Total menu routes: ${routes.size}\nRegistered: ${registered.size}\nMissing: ${missing.length}\n\n${missing.join('\n')}`);

console.log('\nWrote tools/route-check-result.txt');
