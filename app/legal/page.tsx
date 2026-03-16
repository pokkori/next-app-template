import Link from "next/link";

// TODO: アプリごとにここを変更する
const APP_NAME = "TODO: アプリ名";
// TODO: 料金プランをアプリに合わせて変更
const PLAN_PRICE = "スタンダードプラン ¥980/月（税込）";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">特定商取引法に基づく表記</h1>
      <p className="text-gray-500 text-sm mb-8">{APP_NAME}</p>
      <table className="w-full border-collapse text-sm">
        <tbody>
          {[
            ["販売業者", "ポッコリラボ"],
            ["運営責任者", "新美"],
            ["所在地", "非公開（請求があれば遅滞なく開示します）"],
            ["お問い合わせ", "X(Twitter) @levona_design へのDM"],
            ["販売価格", PLAN_PRICE],
            ["支払い方法", "クレジットカード（PAY.JP）"],
            ["提供時期", "決済完了後即時"],
            ["解約方法", "X @levona_design へのDMにて受付。解約後は次回更新日まで利用可能。"],
            ["返金ポリシー", "デジタルコンテンツの性質上、原則として返金には応じられません。"],
          ].map(([k, v]) => (
            <tr key={k} className="border-b">
              <td className="py-3 pr-4 font-bold text-gray-600 w-40 align-top">{k}</td>
              <td className="py-3 text-gray-800">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" className="inline-block mt-6 text-blue-600 hover:underline">
        ← ホームに戻る
      </Link>
    </div>
  );
}
