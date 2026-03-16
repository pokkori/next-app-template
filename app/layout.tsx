import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// TODO: アプリごとにここを変更する
const APP_NAME = "TODO: アプリ名";
const APP_DESCRIPTION = "TODO: アプリの説明文（120〜160文字・検索キーワードを含める）";
const APP_URL = "https://TODO-your-app.vercel.app";
const APP_EMOJI = "🤖"; // favicon用絵文字

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${APP_EMOJI}</text></svg>`,
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  metadataBase: new URL(APP_URL),
};

// TODO: FAQをアプリに合わせて書き換える
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: APP_NAME,
      url: APP_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        description: "無料3回",
      },
      description: APP_DESCRIPTION,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "無料で何回使えますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "登録不要・クレジットカード不要で3回まで無料でご利用いただけます。",
          },
        },
        {
          "@type": "Question",
          name: "解約はいつでもできますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、X @levona_design へのDMからいつでも解約できます。解約後は次回更新日まで引き続きご利用いただけます。",
          },
        },
        // TODO: アプリ固有のFAQを追加
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
