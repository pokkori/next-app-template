"use client";

import { useState } from "react";
import PayjpModal from "@/components/PayjpModal";

// TODO: アプリごとにここを変更する
const APP_NAME = "TODO: アプリ名";
const APP_TAGLINE = "TODO: キャッチコピー（20〜30文字）";
const APP_SUBTEXT = "TODO: サブテキスト（50〜80文字・ベネフィットを具体的に）";
const PLAN_LABEL = "スタンダードプラン ¥980/月（税込）· いつでも解約可能";
const FREE_LIMIT = 3;

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  // TODO: フォーム入力値を管理するstateを追加
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const handleGenerate = async () => {
    if (!isPremium && count >= FREE_LIMIT) {
      setShowModal(true);
      return;
    }
    setLoading(true);
    setResult("");
    try {
      // TODO: リクエストボディをアプリに合わせて変更
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      if (!res.ok || !res.body) throw new Error("APIエラー");
      // streaming読み取り
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
      }
      setCount((c) => c + 1);
    } catch {
      setResult("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ===== ヒーローセクション ===== */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black mb-4">{APP_TAGLINE}</h1>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">{APP_SUBTEXT}</p>
        <div className="inline-block bg-yellow-400 text-blue-900 font-bold text-sm px-4 py-2 rounded-full mb-6">
          無料{FREE_LIMIT}回試せる · 登録不要
        </div>
      </section>

      {/* ===== 特徴セクション ===== */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          {/* TODO: セクションタイトル */}
          このAIでできること
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* TODO: 特徴カードを3〜4個書く */}
          {[
            { icon: "⚡", title: "TODO: 特徴1", desc: "TODO: 説明" },
            { icon: "🎯", title: "TODO: 特徴2", desc: "TODO: 説明" },
            { icon: "💎", title: "TODO: 特徴3", desc: "TODO: 説明" },
          ].map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== メインツールセクション ===== */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {/* TODO: ツールセクションタイトル */}
            さっそく試してみる
          </h2>

          {/* TODO: フォームUI をアプリに合わせて作成 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              TODO: 入力ラベル
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="TODO: プレースホルダーテキスト"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="w-full mt-4 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? "生成中..." : "TODO: ボタンテキスト"}
            </button>
            {!isPremium && (
              <p className="text-xs text-gray-400 mt-2 text-center">
                無料残り {Math.max(0, FREE_LIMIT - count)} 回
              </p>
            )}
          </div>

          {/* 結果表示 */}
          {result && (
            <div className="bg-white rounded-2xl shadow-lg p-6 whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
              {result}
            </div>
          )}
        </div>
      </section>

      {/* ===== 料金セクション ===== */}
      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">料金プラン</h2>
        <div className="border-2 border-blue-600 rounded-2xl p-8 mb-6">
          <div className="text-blue-600 font-bold text-sm mb-2">スタンダードプラン</div>
          <div className="text-4xl font-black text-gray-900 mb-1">
            ¥980<span className="text-lg font-normal text-gray-500">/月</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">税込 · いつでも解約可能</p>
          {/* TODO: プラン特典リストを書く */}
          <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
            <li>✅ TODO: 特典1</li>
            <li>✅ TODO: 特典2</li>
            <li>✅ TODO: 特典3</li>
          </ul>
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            今すぐ登録する
          </button>
        </div>
        <p className="text-xs text-gray-400">
          解約は X(Twitter) @levona_design へのDMで受付しています
        </p>
      </section>

      {/* ===== フッター ===== */}
      <footer className="bg-gray-900 text-gray-400 text-xs py-6 px-4 text-center">
        <div className="flex justify-center gap-4 mb-3">
          <a href="/legal" className="hover:text-white">特定商取引法</a>
          <a href="/privacy" className="hover:text-white">プライバシーポリシー</a>
        </div>
        <p>© {new Date().getFullYear()} ポッコリラボ · {APP_NAME}</p>
      </footer>

      {/* PAY.JP モーダル */}
      {showModal && (
        <PayjpModal
          publicKey={process.env.NEXT_PUBLIC_PAYJP_PUBLIC_KEY!}
          planLabel={PLAN_LABEL}
          onSuccess={() => {
            setShowModal(false);
            setIsPremium(true);
            window.location.href = "/success";
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
