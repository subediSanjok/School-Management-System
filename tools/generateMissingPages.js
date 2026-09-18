const fs = require('fs');
const path = require('path');
const smsPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'smsData.js');
const appPath = path.resolve(__dirname, '..', 'frontend', 'src', 'App.jsx');
const missingPath = path.resolve(__dirname, 'route-check-result.txt');

const sms = fs.readFileSync(smsPath, 'utf8');
const app = fs.readFileSync(appPath, 'utf8');
const missingTxt = fs.readFileSync(missingPath, 'utf8');

const missing = missingTxt.split('\n').slice(3).filter(Boolean); // lines after header

function toComponentName(seg) {
  return seg.split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';
}

const created = [];
let newImports = '';
let newMapEntries = '';

missing.forEach(route => {
  const seg = route.split('/').filter(Boolean).pop();
  const key = seg.replace(/-/g, '').toLowerCase();
  const apiKeyRegex = new RegExp("\\b" + key + "\\s*:", 'm');
  const hasApi = apiKeyRegex.test(sms);

  const compName = toComponentName(seg);
  const filePath = path.resolve(__dirname, '..', 'frontend', 'src', 'pages', compName + '.jsx');
  if (!fs.existsSync(filePath)) {
    let content;
    if (hasApi) {
      content = `import { ModulePage } from './ModulePage'\nimport { apiViews, crudSchemas, fallbackData } from '../data/smsData'\n\nexport function ${compName}() {\n  return (\n    <ModulePage\n      title="${compName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim()}"\n      columns={apiViews.${key}?.columns || []}\n      endpoint={apiViews.${key}?.endpoint}\n      fallbackItems={fallbackData.${key}}\n      mapRows={apiViews.${key}?.map}\n      fields={crudSchemas.${key}?.fields || []}\n      idField={crudSchemas.${key}?.idField}\n    />\n  )\n}\n`;
    } else {
      content = `import React from 'react'\n\nexport function ${compName}() {\n  return (\n    <div style={{padding:20}}>\n      <h2>${compName.replace('Page', '').replace(/([A-Z])/g, ' $1').trim()}</h2>\n      <p>This is a placeholder page for the route '${route}'. No CRUD schema is defined yet.</p>\n    </div>\n  )\n}\n`;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    created.push(filePath);
  }

  // prepare import + map entry if not already present in App.jsx
  if (app.indexOf(`${compName}`) === -1) {
    newImports += `import { ${compName} } from './pages/${compName}'\n`;
    newMapEntries += `  '${route}': ${compName},\n`;
  }
});

if (newImports) {
  // insert imports after the existing imports block: find the line that imports apiViews, menuRoutes
  const insertAfter = "import { apiViews, menuRoutes } from './data/smsData'";
  const idx = app.indexOf(insertAfter);
  if (idx !== -1) {
    const insertPos = app.indexOf('\n', idx) + 1;
    const newApp = app.slice(0, insertPos) + newImports + app.slice(insertPos);
    // now insert map entries into extraMenuMap block if exists
    const mapMarker = 'const extraMenuMap = {';
    const mapIdx = newApp.indexOf(mapMarker);
    if (mapIdx !== -1) {
      const mapInsertPos = newApp.indexOf('\n', newApp.indexOf(mapMarker)) + 1;
      // find closing brace of extraMenuMap (we'll insert entries before the closing brace)
      const closing = newApp.indexOf('}\n', mapIdx);
      if (closing !== -1) {
        const finalApp = newApp.slice(0, closing) + newMapEntries + newApp.slice(closing);
        fs.writeFileSync(appPath, finalApp, 'utf8');
        console.log('Patched App.jsx with new imports and map entries');
      } else {
        fs.writeFileSync(appPath, newApp, 'utf8');
        console.log('Patched App.jsx with new imports (no extraMenuMap found)');
      }
    } else {
      fs.writeFileSync(appPath, newApp, 'utf8');
      console.log('Patched App.jsx with new imports (no extraMenuMap found)');
    }
  }
}

if (created.length) console.log('Created files:\n' + created.join('\n'));
else console.log('No new page files needed');

// write a summary file
fs.writeFileSync(path.resolve(__dirname, 'generate-summary.txt'), `created=${created.length}\nimportsAdded=${newImports ? 1 : 0}\nmapEntriesAdded=${newMapEntries ? 1 : 0}\n`, 'utf8');

console.log('\nDone. Summary in tools/generate-summary.txt');
