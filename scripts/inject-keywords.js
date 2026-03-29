#!/usr/bin/env node
/**
 * Inject generated keywords into lib/expanded-keywords.ts
 * Run: node scripts/inject-keywords.js
 */

const fs = require('fs');
const path = require('path');

// Run generator and capture JSON output
const { execSync } = require('child_process');
const generatorOutput = execSync('node scripts/generate-keywords.js 2>/dev/null', {
  cwd: path.join(__dirname, '..'),
  encoding: 'utf-8'
});
const categoryData = JSON.parse(generatorOutput);

// Read the existing file
const filePath = path.join(__dirname, '../lib/expanded-keywords.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Mapping from category key to array variable name and closing bracket pattern
const categoryMap = {
  birthday: 'birthdayKeywords',
  candlelight: 'candlelightKeywords',
  proposal: 'proposalKeywords',
  anniversary: 'anniversaryKeywords',
  dateNight: 'dateNightKeywords',
  valentines: 'valentinesKeywords',
  photography: 'photographyKeywords',
  baby: 'babyKeywords',
  venue: 'venueKeywords',
  seasonal: 'seasonalKeywords',
  theme: 'themeKeywords',
  nearMe: 'nearMeKeywords',
  budget: 'budgetKeywords',
  misc: 'miscKeywords',
};

let totalAdded = 0;

for (const [catKey, varName] of Object.entries(categoryMap)) {
  const newKeywords = categoryData[catKey];
  if (!newKeywords || newKeywords.length === 0) continue;

  // Find the array declaration and its closing ];
  const arrayStartRegex = new RegExp(`const ${varName}: ExpandedKeyword\\[\\] = \\[`);
  const startMatch = content.match(arrayStartRegex);
  if (!startMatch) {
    console.error(`Could not find ${varName} array`);
    continue;
  }

  const startIndex = content.indexOf(startMatch[0]);
  // Find the closing ]; for this array
  let bracketCount = 0;
  let closingIndex = -1;
  for (let i = startIndex + startMatch[0].length; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') {
      if (bracketCount === 0) {
        closingIndex = i;
        break;
      }
      bracketCount--;
    }
  }

  if (closingIndex === -1) {
    console.error(`Could not find closing bracket for ${varName}`);
    continue;
  }

  // Insert new keywords before the closing ]
  const insertion = '\n  // --- Generated keywords ---\n' + newKeywords.join('\n') + '\n';
  content = content.slice(0, closingIndex) + insertion + content.slice(closingIndex);

  console.log(`${varName}: +${newKeywords.length} keywords`);
  totalAdded += newKeywords.length;
}

fs.writeFileSync(filePath, content);
console.log(`\nTotal keywords added: ${totalAdded}`);
console.log('File updated: lib/expanded-keywords.ts');
