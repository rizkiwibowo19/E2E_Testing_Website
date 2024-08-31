const fs = require('fs');
const path = require('path');

// Update path to your directory containing JSON files
const inputDir = path.join('C:', 'Users', 'User', 'Documents', 'E2E_TESTING', 'reports', 'mochawesome', '.jsons');
const outputFile = path.join('C:', 'Users', 'User', 'Documents', 'E2E_TESTING', 'reports', 'combined-report.json');

const mergeJsonFiles = (dir) => {
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
  let combined = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    combined = combined.concat(data);
  });

  fs.writeFileSync(outputFile, JSON.stringify(combined, null, 2), 'utf8');
  console.log('JSON files have been merged into', outputFile);
};

mergeJsonFiles(inputDir);
