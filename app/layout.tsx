import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const APP_NAME = "HanaMori | AI Character";
const APP_DESCRIPTION = "HanaMori (花森ハナ) — 21-year-old AI-generated anime character from Tokyo, living in LA. Daily exclusive AI art on dFans for $4.99/month. Transparent AI creator.";
const APP_URL = "https://hanamori-ai.vercel.app";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  metadataBase: new URL(APP_URL),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is HanaMori a real person?",
          acceptedAnswer: { "@type": "Answer", text: "No. HanaMori is a fully AI-generated character. Her appearance and story are created using AI image generation tools managed by a creative team. She is not a real human being." },
        },
        {
          "@type": "Question",
          name: "Is HanaMori's content safe for work (SFW)?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. All HanaMori content is SFW. Her art focuses on lifestyle, fashion, and Japanese culture. No explicit or adult content is posted anywhere." },
        },
        {
          "@type": "Question",
          name: "How do I subscribe to HanaMori on dFans?",
          acceptedAnswer: { "@type": "Answer", text: "Visit dfans.co/hanamori to subscribe for $4.99/month (Early Supporter price). You get access to 109+ exclusive AI anime art posts with new content added every morning." },
        },
        {
          "@type": "Question",
          name: "How much does a HanaMori dFans subscription cost?",
          acceptedAnswer: { "@type": "Answer", text: "The current Early Supporter price is $4.99/month. This introductory rate gives access to 109+ exclusive posts and daily new art. The price will increase after the launch phase." },
        },
        {
          "@type": "Question",
          name: "Where can I buy HanaMori art packs?",
          acceptedAnswer: { "@type": "Answer", text: "HanaMori art packs are available on itch.io at hanamori-ai.itch.io. High-resolution PNG collections start from $4.99 with instant download." },
        },
        {
          "@type": "Question",
          name: "What is an AI-generated character?",
          acceptedAnswer: { "@type": "Answer", text: "An AI-generated character like HanaMori is created using AI image generation tools instead of traditional illustration. Think of her like a virtual idol or illustrated persona built with modern AI technology. Her content is managed by a creative team." },
        },
      ],
    },
    {
      "@type": "Person",
      name: "HanaMori",
      alternateName: ["花森ハナ", "Hana", "HanaMori AI"],
      description: "21-year-old AI-generated anime character originally from Tokyo, now based in Los Angeles. Freelance graphic designer who shares daily AI anime art exclusively on dFans.",
      url: "https://hanamori-ai.vercel.app",
      sameAs: [
        "https://dfans.co/hanamori",
        "https://hanamori-ai.itch.io",
        "https://twitter.com/hanamori_ai",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
