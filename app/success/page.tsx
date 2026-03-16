"use client";

import Link from "next/link";
import { useEffect } from "react";

// TODO: アプリごとに変更
const APP_NAME = "TODO: アプリ名";
const TOOL_PATH = "/"; // TODO: ツールページのパス（例: "/predict", "/generate"）
const TOOL_LABEL = "さっそく使う →"; // TODO: CTAテキスト

// シンプルなconfetti実装（canvas-confetti不要）
function launchConfetti() {
  const colors = ["#3b82f6", "#fbbf24", "#10b981", "#f472b6", "#a78bfa"];
  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 6;
    el.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      background:${color};
      border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
      left:${Math.random() * 100}%;
      top:-20px;
      opacity:1;
      animation: fall ${Math.random() * 2 + 2}s linear ${Math.random() * 1}s forwards;
    `;
    container.appendChild(el);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      to { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    document.body.removeChild(container);
    document.head.removeChild(style);
  }, 5000);
}

export default function SuccessPage() {
  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-3xl font-black mb-4">ご登録ありがとうございます！</h1>
        <p className="text-blue-200 mb-2">スタンダードプランが有効になりました。</p>
        <p className="text-blue-300 text-sm mb-8">
          {/* TODO: プレミアム特典の説明文 */}
          すべての機能を無制限でご利用いただけます。
        </p>

        {/* 特典リスト */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 text-left space-y-3">
          {/* TODO: プレミアム特典を3〜4個書く */}
          {[
            "TODO: 特典1",
            "TODO: 特典2",
            "TODO: 特典3",
          ].map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 text-sm">
              <span className="text-yellow-400 text-lg">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <Link
          href={TOOL_PATH}
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors text-lg"
        >
          {TOOL_LABEL}
        </Link>

        <p className="text-blue-400 text-xs mt-6">
          解約は X(Twitter) @levona_design へのDMで受付しています
        </p>
      </div>
    </div>
  );
}
