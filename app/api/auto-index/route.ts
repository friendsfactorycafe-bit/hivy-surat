import { NextRequest, NextResponse } from "next/server";
import { batchNotifyGoogleIndexing } from "@/lib/google-indexing";
import fs from "fs";
import path from "path";

const SITE_URL = "https://hivy.co.in";

function getAllRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) return ["/"];

  const routes: string[] = ["/"];
  const ignoreDirs = new Set(["api", "_components", "_lib", "admin", "node_modules"]);

  function scanDir(dir: string, basePath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
      if (entry.isDirectory()) {
        if (ignoreDirs.has(entry.name) || entry.name.startsWith("[")) continue;
        const dirPath = path.join(dir, entry.name);
        const routePath = `${basePath}/${entry.name}`;
        const hasPage =
          fs.existsSync(path.join(dirPath, "page.tsx")) ||
          fs.existsSync(path.join(dirPath, "page.js"));
        if (hasPage) routes.push(routePath);
        scanDir(dirPath, routePath);
      }
    }
  }

  scanDir(appDir, "");
  return [...new Set(routes)].sort();
}

// POST: Auto-discover all URLs and submit to Google Indexing API
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.REINDEX_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const { limit } = body as { limit?: number };

    const allRoutes = getAllRoutes();
    const urls = allRoutes
      .slice(0, limit || allRoutes.length)
      .map((r) => `${SITE_URL}${r}`);

    const results = await batchNotifyGoogleIndexing(urls);

    return NextResponse.json({
      total: results.length,
      successful: results.filter((r) => r.success).length,
      failed: results.filter((r) => !r.success).length,
      urls: urls.length,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: List all discoverable URLs (no indexing, just discovery)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const apiKey = process.env.REINDEX_API_KEY;

  if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const allRoutes = getAllRoutes();
  const urls = allRoutes.map((r) => `${SITE_URL}${r}`);

  return NextResponse.json({
    total: urls.length,
    urls,
  });
}
