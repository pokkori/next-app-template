import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 55;

// TODO: 無料回数の上限とCookieキーをアプリに合わせて変更
const FREE_LIMIT = 3;
const COOKIE_KEY = "app_generate_count";

function getClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

// IPベースの簡易レートリミット（1分あたり10リクエスト）
const rateLimit = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "リクエストが多すぎます。しばらく待ってから再試行してください。" },
      { status: 429 }
    );
  }

  // TODO: リクエストボディのパラメータをアプリに合わせて変更
  let body: { input?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 });
  }

  const { input } = body;
  if (!input) {
    return NextResponse.json({ error: "入力内容が必要です" }, { status: 400 });
  }

  // プレミアムチェック
  const isPremium = req.cookies.get("premium")?.value === "1";
  const cookieCount = parseInt(req.cookies.get(COOKIE_KEY)?.value || "0");
  if (!isPremium && cookieCount >= FREE_LIMIT) {
    return NextResponse.json({ error: "LIMIT_REACHED" }, { status: 429 });
  }

  // TODO: システムプロンプトをアプリの目的に合わせて書き換える
  const systemPrompt = `あなたは[TODO: AIの役割・専門性を記述]です。
ユーザーの入力に対して、[TODO: 出力の形式・品質基準]で回答してください。
[TODO: 追加の制約・注意事項]`;

  // TODO: ユーザープロンプトをアプリに合わせて構築する
  const userPrompt = `${input}

[TODO: プロンプトの続き・出力フォーマット指定]`;

  try {
    // streaming レスポンス
    const stream = await getClient().messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      },
    });

    const newCount = cookieCount + 1;
    const response = new NextResponse(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Use-Count": String(newCount),
      },
    });

    if (!isPremium) {
      response.cookies.set(COOKIE_KEY, String(newCount), {
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        httpOnly: true,
        secure: true,
      });
    }
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "生成中にエラーが発生しました。しばらく待ってから再試行してください。" },
      { status: 500 }
    );
  }
}
