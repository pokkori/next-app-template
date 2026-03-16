# Next.js App Template — セットアップガイド

ポッコリラボ製アプリの共通テンプレートです。
PAY.JP決済 + Anthropic AI streaming + Vercel デプロイ構成。

---

## 1. このリポジトリをclone / コピー

```bash
git clone https://github.com/pokkori/next-app-template.git my-new-app
cd my-new-app
```

または GitHub の "Use this template" ボタンから新リポジトリを作成する。

---

## 2. APP_NAME 等のプレースホルダーを置換

以下のファイルの `TODO:` コメント箇所を書き換える：

| ファイル | 変更箇所 |
|---|---|
| `app/layout.tsx` | `APP_NAME`, `APP_DESCRIPTION`, `APP_URL`, `APP_EMOJI` |
| `app/page.tsx` | `APP_NAME`, `APP_TAGLINE`, `APP_SUBTEXT`, `PLAN_LABEL`, フォームUI, 特徴カード, 料金特典 |
| `app/api/generate/route.ts` | `COOKIE_KEY`, `systemPrompt`, `userPrompt`, `max_tokens` |
| `app/success/page.tsx` | `APP_NAME`, `TOOL_PATH`, `TOOL_LABEL`, 特典リスト |
| `app/legal/page.tsx` | `APP_NAME`, `PLAN_PRICE` |
| `app/privacy/page.tsx` | `APP_NAME` |

---

## 3. 環境変数を設定

`.env.local` を作成（Vercelには環境変数として設定）：

```env
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# PAY.JP
PAYJP_SECRET_KEY=sk_live_...        # 本番: sk_live_ / テスト: sk_test_
NEXT_PUBLIC_PAYJP_PUBLIC_KEY=pk_live_...  # 本番: pk_live_ / テスト: pk_test_
PAYJP_PLAN_STD=pln_...              # PAY.JPダッシュボードで作成したプランID

# 複数プランの場合（必要なら追加）
# PAYJP_PLAN_BIZ=pln_...
```

---

## 4. npm install

```bash
npm install
npm run dev
```

http://localhost:3000 で確認。

---

## 5. OGP画像を用意

`/public/og.png`（1200×630px）を作成してVercelに配置。
`app/layout.tsx` の `openGraph` に `images` を追加：

```ts
openGraph: {
  // ...
  images: [{ url: `${APP_URL}/og.png`, width: 1200, height: 630 }],
},
```

---

## 6. Git init → GitHub → Vercel デプロイ

```bash
# 既存の .git を削除してリセット
rm -rf .git
git init
git add -A
git commit -m "feat: initial commit"

# GitHub リポジトリ作成 & push
gh repo create pokkori/YOUR-REPO-NAME --public --source=. --remote=origin --push

# Vercel デプロイ（ダッシュボードから import 推奨）
# https://vercel.com/new でリポジトリをimport
# 環境変数を設定してDeploy
```

> **注意**: Vercel CLI デプロイは100回/日制限あり。本番アプリはダッシュボードから手動インポートが確実。

---

## アーキテクチャ概要

```
app/
  layout.tsx          # metadata / JSON-LD / Vercel Analytics
  page.tsx            # LP（ヒーロー・特徴・ツール・料金・フッター）
  globals.css         # Tailwind v4 import
  api/
    payjp/
      checkout/       # PAY.JP 顧客作成 + サブスク作成 + Cookie発行
      verify/         # Cookie確認（軽量版）
    auth/
      status/         # PAY.JP APIでサブスク状態をリアルタイム検証
    generate/         # Anthropic streaming API
  success/            # 決済成功ページ（confetti付き）
  legal/              # 特定商取引法
  privacy/            # プライバシーポリシー
components/
  PayjpModal.tsx      # PAY.JS v2 カード入力モーダル
```

## チェックリスト（新アプリ作成時）

- [ ] `APP_NAME` 等の `TODO:` を全箇所置換
- [ ] `app/layout.tsx` の絵文字アイコン (`APP_EMOJI`) を変更
- [ ] PAY.JP ダッシュボードでプランを作成して `PAYJP_PLAN_STD` に設定
- [ ] `/public/og.png` (1200×630px) を作成
- [ ] `app/api/generate/route.ts` のシステムプロンプトを書く
- [ ] `COOKIE_KEY` をアプリ固有名に変更（他アプリとCookieが干渉しないように）
- [ ] Cookie: `httpOnly: true, secure: true, sameSite: "lax"` ✅（テンプレート済み）
- [ ] Vercel 環境変数: `ANTHROPIC_API_KEY` / `PAYJP_SECRET_KEY` / `NEXT_PUBLIC_PAYJP_PUBLIC_KEY` / `PAYJP_PLAN_STD`
- [ ] MEMORY.md のアプリ一覧に追記
