import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Ko-fi Webhook handler
// Ko-fi → Settings → Webhooks → POST to this endpoint
// Verification token: set KO_FI_WEBHOOK_TOKEN in Vercel env

const DOWNLOAD_LINKS: Record<string, string> = {
  "Art Pack Vol.1": process.env.KOFI_DOWNLOAD_PACK1_URL || "https://hanamori-ai.vercel.app/downloads/pack1",
  "Art Pack Vol.2": process.env.KOFI_DOWNLOAD_PACK2_URL || "https://hanamori-ai.vercel.app/downloads/pack2",
};

const DEFAULT_DOWNLOAD = process.env.KOFI_DOWNLOAD_PACK1_URL || "https://hanamori-ai.vercel.app/downloads/pack1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    // Ko-fi sends data as form-encoded: data=JSON
    const params = new URLSearchParams(body);
    const dataStr = params.get("data");
    if (!dataStr) {
      return NextResponse.json({ error: "no data" }, { status: 400 });
    }

    const data = JSON.parse(decodeURIComponent(dataStr));

    // Verify Ko-fi token
    const token = process.env.KO_FI_WEBHOOK_TOKEN;
    if (token && data.verification_token !== token) {
      return NextResponse.json({ error: "invalid token" }, { status: 401 });
    }

    const { type, email, from_name, amount, shop_items } = data;

    // Only process Shop Order and Donation types
    if (!["Shop Order", "Donation"].includes(type)) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Determine download link
    let downloadUrl = DEFAULT_DOWNLOAD;
    if (shop_items && shop_items.length > 0) {
      const itemName = shop_items[0]?.direct_link_code || shop_items[0]?.product_name || "";
      downloadUrl = DOWNLOAD_LINKS[itemName] || DEFAULT_DOWNLOAD;
    }

    // Send thank-you email with download link
    if (email && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "HanaMori AI <noreply@hanamori-ai.vercel.app>",
        to: email,
        subject: "Your HanaMori Art Pack — Download Link",
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px">
            <h1 style="color:#7c3aed;font-size:24px;margin-bottom:8px">🌸 Thank you, ${from_name}!</h1>
            <p style="color:#444">Your Ko-fi purchase of <strong>$${amount}</strong> has been received.</p>
            <p style="color:#444">Here&apos;s your download link:</p>
            <a href="${downloadUrl}"
               style="display:inline-block;background:#7c3aed;color:white;padding:12px 24px;border-radius:24px;text-decoration:none;font-weight:bold;margin:16px 0">
              Download Your Art Pack
            </a>
            <p style="color:#888;font-size:13px">Link valid for 7 days. If you have any issues, reply to this email.</p>
            <hr style="border:none;border-top:1px solid #e8d5c4;margin:20px 0">
            <p style="color:#aaa;font-size:12px">HanaMori AI — Daily AI anime art. Follow on X: @hanamori_ai</p>
          </div>
        `,
      });
    }

    console.log(`[Ko-fi webhook] ${type} from ${from_name} (${email}) — $${amount}`);
    return NextResponse.json({ ok: true, type, email });

  } catch (err) {
    console.error("[Ko-fi webhook error]", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
