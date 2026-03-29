#!/usr/bin/env node
/**
 * HIVY Batch Indexing Script
 * Submits all URLs to Google Indexing API
 * Google limit: 200 URLs per day per property
 * 
 * Usage:
 *   node scripts/batch-index.js                # Submit next batch (200 URLs)
 *   node scripts/batch-index.js --count        # Show total URL count
 *   node scripts/batch-index.js --resume       # Resume from last position
 *   node scripts/batch-index.js --dry-run      # Show what would be submitted
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '../.env.local');
const envFile = fs.readFileSync(envPath, 'utf-8');
envFile.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const eqIndex = trimmed.indexOf('=');
  if (eqIndex === -1) return;
  const key = trimmed.slice(0, eqIndex);
  let value = trimmed.slice(eqIndex + 1);
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1).replace(/\\n/g, '\n');
  }
  process.env[key] = value;
});

const SITE_URL = 'https://hivy.co.in';
const BATCH_SIZE = 10; // URLs per batch (Google API limit per request)
const DAILY_LIMIT = 200; // Google's daily limit
const DELAY_BETWEEN_BATCHES_MS = 1500;
const STATE_FILE = path.join(__dirname, '../.indexing-state.json');

// ============================================================================
// Collect ALL URLs
// ============================================================================
function getAllUrls() {
  const urls = [];
  
  // 1. Homepage
  urls.push(`${SITE_URL}/`);
  
  // 2. Static pages
  const staticPages = [
    '/about', '/contact', '/book-now', '/blog', '/packages',
    '/virtual-tour', '/menu', '/services', '/sitemap'
  ];
  staticPages.forEach(p => urls.push(`${SITE_URL}${p}`));
  
  // 3. Area pages
  try {
    const configPath = path.join(__dirname, '../lib/ffc-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const areaRegex = /slug:\s*["']([^"']+)["']/g;
    // Find suratAreas array
    const areasStart = configContent.indexOf('suratAreas');
    if (areasStart > -1) {
      const areasSection = configContent.slice(areasStart, configContent.indexOf('];', areasStart) + 2);
      let m;
      while ((m = areaRegex.exec(areasSection)) !== null) {
        urls.push(`${SITE_URL}/${m[1]}`);
      }
    }
  } catch (e) {
    console.error('Warning: Could not read area slugs');
  }
  
  // 4. Original keyword pages (from service categories)
  try {
    const configPath = path.join(__dirname, '../lib/ffc-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    // Extract keyword slugs
    const kwSlugRegex = /slug:\s*["']([^"']+[-]surat)["']/g;
    let m;
    while ((m = kwSlugRegex.exec(configContent)) !== null) {
      urls.push(`${SITE_URL}/${m[1]}`);
    }
  } catch (e) {
    console.error('Warning: Could not read keyword slugs from config');
  }
  
  // 5. Expanded keyword pages
  try {
    const kwPath = path.join(__dirname, '../lib/expanded-keywords.ts');
    const kwContent = fs.readFileSync(kwPath, 'utf-8');
    const slugRegex = /createKeyword\("([^"]+)"/g;
    let m;
    while ((m = slugRegex.exec(kwContent)) !== null) {
      urls.push(`${SITE_URL}/${m[1]}`);
    }
  } catch (e) {
    console.error('Warning: Could not read expanded keyword slugs');
  }
  
  // 6. Package pages
  try {
    const configPath = path.join(__dirname, '../lib/ffc-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const pkgRegex = /slug:\s*["'](swing-of-love|boho-chic|fairy-tale-proposals|tent-of-romance|[a-z-]+)["']/g;
    const pkgsStart = configContent.indexOf('packages');
    if (pkgsStart > -1) {
      const pkgSection = configContent.slice(pkgsStart, pkgsStart + 3000);
      let m;
      while ((m = pkgRegex.exec(pkgSection)) !== null) {
        urls.push(`${SITE_URL}/packages/${m[1]}`);
      }
    }
  } catch (e) {}
  
  // 7. Blog pages
  try {
    const blogDir = path.join(__dirname, '../app/blog');
    if (fs.existsSync(blogDir)) {
      const entries = fs.readdirSync(blogDir);
      entries.forEach(entry => {
        const fullPath = path.join(blogDir, entry);
        if (fs.statSync(fullPath).isDirectory() && entry !== '[slug]') {
          urls.push(`${SITE_URL}/blog/${entry}`);
        }
      });
    }
  } catch (e) {}
  
  // Deduplicate
  return [...new Set(urls)];
}

// ============================================================================
// Google Indexing API
// ============================================================================
async function createJWT() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  
  if (!email || !key) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY');
  }
  
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };
  
  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${b64(header)}.${b64(payload)}`;
  
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  const signature = sign.sign(key, 'base64url');
  
  return `${unsigned}.${signature}`;
}

async function getAccessToken() {
  const jwt = await createJWT();
  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await resp.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitUrl(url, accessToken) {
  const resp = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url: url,
      type: 'URL_UPDATED',
    }),
  });
  return resp;
}

// ============================================================================
// State management (track progress across runs)
// ============================================================================
function loadState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    }
  } catch (e) {}
  return { lastIndex: 0, submitted: [], lastRun: null };
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// ============================================================================
// Main
// ============================================================================
async function main() {
  const args = process.argv.slice(2);
  const allUrls = getAllUrls();
  
  if (args.includes('--count')) {
    console.log(`Total URLs: ${allUrls.length}`);
    console.log(`Days needed (at 200/day): ${Math.ceil(allUrls.length / DAILY_LIMIT)}`);
    return;
  }
  
  const state = loadState();
  const startIndex = args.includes('--resume') ? state.lastIndex : 0;
  
  if (args.includes('--dry-run')) {
    const batch = allUrls.slice(startIndex, startIndex + DAILY_LIMIT);
    console.log(`Would submit ${batch.length} URLs (index ${startIndex} to ${startIndex + batch.length - 1}):`);
    batch.forEach((url, i) => console.log(`  ${startIndex + i + 1}. ${url}`));
    return;
  }
  
  console.log(`\n🔗 HIVY Batch Indexing`);
  console.log(`Total URLs: ${allUrls.length}`);
  console.log(`Starting from index: ${startIndex}`);
  console.log(`Daily limit: ${DAILY_LIMIT}`);
  
  const batch = allUrls.slice(startIndex, startIndex + DAILY_LIMIT);
  if (batch.length === 0) {
    console.log('\n✅ All URLs have been submitted!');
    return;
  }
  
  console.log(`\nSubmitting ${batch.length} URLs...\n`);
  
  let accessToken;
  try {
    accessToken = await getAccessToken();
    console.log('✅ Access token obtained\n');
  } catch (e) {
    console.error('❌ Failed to get access token:', e.message);
    process.exit(1);
  }
  
  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < batch.length; i += BATCH_SIZE) {
    const chunk = batch.slice(i, i + BATCH_SIZE);
    
    for (const url of chunk) {
      try {
        const resp = await submitUrl(url, accessToken);
        if (resp.ok) {
          success++;
          process.stdout.write(`✅ ${startIndex + i + success + failed}: ${url}\n`);
        } else {
          const errData = await resp.json().catch(() => ({}));
          failed++;
          process.stdout.write(`❌ ${url} - ${resp.status} ${errData.error?.message || ''}\n`);
        }
      } catch (e) {
        failed++;
        process.stdout.write(`❌ ${url} - ${e.message}\n`);
      }
    }
    
    // Delay between batches
    if (i + BATCH_SIZE < batch.length) {
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES_MS));
    }
  }
  
  // Update state
  state.lastIndex = startIndex + batch.length;
  state.lastRun = new Date().toISOString();
  state.submitted = [...(state.submitted || []), ...batch.filter((_, i) => true)]; // Track all attempted
  saveState(state);
  
  console.log(`\n📊 Results:`);
  console.log(`  Submitted: ${success}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Remaining: ${allUrls.length - state.lastIndex}`);
  console.log(`  Next run: node scripts/batch-index.js --resume`);
  if (allUrls.length - state.lastIndex > 0) {
    console.log(`  Days remaining: ${Math.ceil((allUrls.length - state.lastIndex) / DAILY_LIMIT)}`);
  }
}

main().catch(console.error);
