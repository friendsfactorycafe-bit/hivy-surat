// Quick test script for Google Indexing API
// Run: npx tsx scripts/test-indexing.ts

import crypto from "crypto";
import fs from "fs";
import path from "path";

// Load .env.local manually
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    if (line.startsWith("#") || !line.trim()) continue;
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) continue;
    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();
    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

console.log("=== Google Indexing API Test ===\n");
console.log(`1. Service Account Email: ${email ? "✅ Set" : "❌ MISSING"}`);
console.log(`2. Private Key: ${privateKey ? "✅ Set (" + privateKey.length + " chars)" : "❌ MISSING"}`);

if (!email || !privateKey) {
  console.error("\n❌ Missing environment variables. Make sure .env.local is loaded.");
  console.log("   Run with: npx dotenv -e .env.local -- tsx scripts/test-indexing.ts");
  process.exit(1);
}

async function testConnection() {
  try {
    // Step 1: Create JWT
    console.log("\n3. Creating JWT token...");
    const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
    const now = Math.floor(Date.now() / 1000);
    const payload = Buffer.from(JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })).toString("base64url");

    const sign = crypto.createSign("RSA-SHA256");
    sign.update(`${header}.${payload}`);
    const signature = sign.sign(privateKey, "base64url");
    const jwt = `${header}.${payload}.${signature}`;
    console.log("   ✅ JWT created successfully");

    // Step 2: Get Access Token
    console.log("\n4. Requesting access token from Google...");
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.access_token) {
      console.log("   ✅ Access token received!");
    } else {
      console.log("   ❌ Failed to get access token:");
      console.log("   ", JSON.stringify(tokenData, null, 2));
      process.exit(1);
    }

    // Step 3: Test indexing API with hivy.co.in homepage
    console.log("\n5. Testing indexing API with https://hivy.co.in/ ...");
    const indexResponse = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        body: JSON.stringify({
          url: "https://hivy.co.in/",
          type: "URL_UPDATED",
        }),
      }
    );

    const indexData = await indexResponse.json();

    if (indexResponse.ok) {
      console.log("   ✅ SUCCESS! URL submitted to Google Indexing API");
      console.log("   Response:", JSON.stringify(indexData, null, 2));
    } else {
      console.log("   ❌ FAILED:");
      console.log("   Status:", indexResponse.status);
      console.log("   Response:", JSON.stringify(indexData, null, 2));
      
      if (indexData.error?.message?.includes("permission")) {
        console.log("\n   👉 FIX: Add the service account as OWNER in Google Search Console");
        console.log("   Email to add: " + email);
      }
      if (indexData.error?.message?.includes("API has not been used")) {
        console.log("\n   👉 FIX: Enable 'Web Search Indexing API' in Google Cloud Console");
      }
    }

    console.log("\n=== Test Complete ===");
  } catch (err) {
    console.error("\n❌ Error:", err);
  }
}

testConnection();
