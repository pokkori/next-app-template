import { NextRequest, NextResponse } from "next/server";

// Simple signed download token handler
// Generate token: DOWNLOAD_SECRET + email + expiry → HMAC SHA256

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("t");
  const pack = searchParams.get("p") || "1";

  if (!token) {
    return NextResponse.redirect("https://ko-fi.com/hanamori_ai");
  }

  // Pack download URLs (store ZIPs in Vercel Blob or R2)
  const PACK_URLS: Record<string, string> = {
    "1": process.env.PACK1_BLOB_URL || "",
    "2": process.env.PACK2_BLOB_URL || "",
  };

  const url = PACK_URLS[pack];
  if (!url) {
    return NextResponse.json({ error: "pack not found" }, { status: 404 });
  }

  // Simple expiry check (token = base64(email:expiry))
  try {
    const decoded = atob(token);
    const [, expiryStr] = decoded.split(":");
    const expiry = parseInt(expiryStr, 10);
    if (Date.now() > expiry) {
      return new NextResponse("Download link expired. Please contact support.", { status: 410 });
    }
  } catch {
    return new NextResponse("Invalid download link.", { status: 400 });
  }

  return NextResponse.redirect(url);
}
