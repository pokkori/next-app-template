export default function HanaMoriAbout() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] text-[#1a1a1a]">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="text-6xl mb-4">🌸</div>
        <h1 className="text-3xl font-bold mb-2">花森 Hana</h1>
        <p className="text-lg text-[#555] mb-6">
          21 y/o · Tokyo born · LA based · AI Character
        </p>
        <div className="flex flex-col items-center gap-1 mb-2">
          <a
            href="https://dfans.co/hanamori"
            className="bg-[#7c3aed] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#6d28d9] transition shadow-md"
          >
            See Full Gallery →
          </a>
          <p className="text-xs text-[#888] mt-1">$4.99/month · Cancel anytime</p>
          <a
            href="https://hanamori-ai.itch.io"
            className="bg-[#fa5c5c] text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition shadow-md"
          >
            Art Packs (itch.io)
          </a>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://hanamori-ai.itch.io"
            className="bg-[#fa5c5c] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            itch.io Downloads
          </a>
          <a
            href="https://twitter.com/hanamori_ai"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#222] transition"
          >
            X / Twitter
          </a>
          <a
            href="https://bsky.app/profile/hanamori.bsky.social"
            className="bg-[#0085ff] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#0070dd] transition"
          >
            Bluesky
          </a>
        </div>
      </section>

      {/* Video Teaser - DR確定: +34〜80% CVR */}
      <section className="max-w-2xl mx-auto px-6 pb-6">
        <div className="relative rounded-2xl overflow-hidden bg-[#1a0a2e] aspect-[9/16] max-h-[520px]">
          {/* Fallback gradient if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d1a4e] to-[#1a0a2e]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <div className="text-5xl mb-3">🌸</div>
            <p className="text-xl font-bold mb-1">HanaMori</p>
            <p className="text-sm text-[#ccc] mb-4">Daily AI anime art · 109+ exclusive posts</p>
            <a
              href="https://dfans.co/hanamori"
              className="bg-[#7c3aed] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#6d28d9] transition"
            >
              See Full Gallery →
            </a>
            <p className="text-xs text-[#aaa] mt-2">$4.99/month · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-[#e8d5c4]" />
      </div>

      {/* Shop cards */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Get HanaMori&apos;s Art</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://dfans.co/hanamori"
            className="block bg-white border border-[#e8d5c4] rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-bold mb-1">dFans Subscription</h3>
            <p className="text-sm text-[#666] mb-2">Exclusive daily AI anime art. New content every day.</p>
            <span className="text-[#7c3aed] text-sm font-semibold">$4.99/month Early Supporter →</span>
          </a>
          <a
            href="https://ko-fi.com/hanamori_ai/shop"
            className="block bg-white border border-[#e8d5c4] rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">🖼️</div>
            <h3 className="font-bold mb-1">AI Art Packs</h3>
            <p className="text-sm text-[#666] mb-2">High-res PNG collections. Instant download.</p>
            <span className="text-[#ff5e5b] text-sm font-semibold">From $4.99 →</span>
          </a>
          <a
            href="https://hanamori-ai.itch.io"
            className="block bg-white border border-[#e8d5c4] rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">📦</div>
            <h3 className="font-bold mb-1">itch.io Art Downloads</h3>
            <p className="text-sm text-[#666] mb-2">23+ HanaMori images in high resolution ZIP packs.</p>
            <span className="text-[#fa5c5c] text-sm font-semibold">From $4.99 →</span>
          </a>
          <a
            href="https://ko-fi.com/hanamori_ai"
            className="block bg-white border border-[#e8d5c4] rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">☕</div>
            <h3 className="font-bold mb-1">Support on Ko-fi</h3>
            <p className="text-sm text-[#666] mb-2">Buy Hana a coffee and get exclusive thank-you art.</p>
            <span className="text-[#ff5e5b] text-sm font-semibold">One-time from $3 →</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-[#e8d5c4]" />
      </div>

      {/* Preview Gallery with blur unlock */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Preview Gallery</h2>
          <span className="text-xs text-[#888] bg-[#f3e8ff] px-2 py-1 rounded-full">109+ exclusive posts inside</span>
        </div>
        <div className="grid grid-cols-3 gap-2 relative">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-[3/4] bg-gradient-to-br from-[#e0c8f0] to-[#c4a8e8] rounded-xl overflow-hidden relative">
              {i <= 2 ? (
                <div className="w-full h-full flex items-center justify-center text-[#7c3aed] text-4xl font-bold opacity-30">H</div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a0a2e]/80 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Subscribers only</span>
                </div>
              )}
            </div>
          ))}
          <div className="col-span-3 mt-2">
            <a
              href="https://dfans.co/hanamori"
              className="block w-full text-center bg-[#7c3aed] text-white py-3 rounded-xl font-bold hover:bg-[#6d28d9] transition"
            >
              Unlock 109+ Photos →
            </a>
            <p className="text-center text-xs text-[#888] mt-1">$4.99/month · New art added every morning</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-[#e8d5c4]" />
      </div>

      {/* Who is HanaMori */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-3">Who is HanaMori?</h2>
        <p className="text-[#444] leading-relaxed">
          HanaMori — or just Hana — is a 21-year-old freelance graphic designer originally from Tokyo,
          now living in Los Angeles. She shares her life through fashion, design, Japanese culture,
          and the everyday chaos of being far from home.
        </p>
        <p className="text-[#444] leading-relaxed mt-3">
          She loves matcha lattes (always comparing them to Japan), rewatching anime on rainy nights,
          and finding tiny Japanese grocery stores hidden in LA neighborhoods.
        </p>
      </section>

      {/* AI Disclosure */}
      <section className="max-w-2xl mx-auto px-6 py-6">
        <div className="bg-[#fef9c3] border border-[#fde047] rounded-xl p-5">
          <h2 className="text-lg font-bold mb-2">Is this AI?</h2>
          <p className="text-[#555] text-sm leading-relaxed">
            <strong>Yes — and we&apos;re upfront about it.</strong> HanaMori is an AI-generated character.
            Her images are created using AI image generation tools, and her content is written and managed
            by a creative team. She is not a real human being.
          </p>
          <p className="text-[#555] text-sm leading-relaxed mt-2">
            Think of HanaMori like a comic character, a virtual idol, or an illustrated persona —
            just built with modern AI tools instead of pen and ink.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-2xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-3">What kind of content?</h2>
        <p className="text-[#444] leading-relaxed mb-3">
          HanaMori&apos;s content is <strong>SFW (Safe for Work)</strong> — fashion, lifestyle,
          Japanese culture, design inspiration, and everyday slice-of-life moments.
        </p>
        <ul className="space-y-2 text-[#555] text-sm">
          {[
            "Daily exclusive AI anime art (dFans subscribers only)",
            "High-res art packs for download (Ko-fi / itch.io)",
            "Japanese culture and design inspiration content",
            "Personal diary-style posts about LA life and homesickness",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#7c3aed] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is HanaMori a real person?",
              a: "No. HanaMori is a fully AI-generated character. Her appearance and story are created using AI image generation tools managed by a creative team. She is not a real human being.",
            },
            {
              q: "How much does a dFans subscription cost?",
              a: "The Early Supporter price is $4.99/month. This gives you access to 109+ exclusive posts with new AI anime art added every morning. The price will increase after the launch phase.",
            },
            {
              q: "Where can I subscribe to HanaMori's exclusive content?",
              a: "Subscribe on dFans at dfans.co/hanamori for daily exclusive AI anime art. Over 109 posts already in the archive, with new images added every morning.",
            },
            {
              q: "Where can I buy HanaMori art packs?",
              a: "Art packs are available on itch.io at hanamori-ai.itch.io. High-resolution PNG collections from $4.99 with instant download.",
            },
            {
              q: "Is the content safe for work (SFW)?",
              a: "Yes. All HanaMori content is SFW. She focuses on lifestyle, fashion, Japanese culture, and AI art. No explicit content is published anywhere.",
            },
            {
              q: "Can I use the art packs commercially?",
              a: "Art packs are licensed for personal use and non-commercial fan projects. Commercial use requires a separate license — contact the creative team.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#e8d5c4] rounded-lg p-4 bg-white">
              <p className="font-medium text-sm mb-1">{q}</p>
              <p className="text-[#666] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-2xl mx-auto px-6 py-8 text-center">
        <h2 className="text-xl font-bold mb-2">Join Hana&apos;s world</h2>
        <p className="text-[#555] mb-6 text-sm">New art every day. Subscribe to see it all.</p>
        <a
          href="https://dfans.co/hanamori"
          className="inline-block bg-[#7c3aed] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#6d28d9] transition shadow-md"
        >
          Subscribe on dFans
        </a>
      </section>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 py-10 text-center text-xs text-[#aaa]">
        <p>HanaMori is an AI-generated fictional character. All content is created for entertainment purposes.</p>
        <p className="mt-1">No real personal data is collected beyond standard platform analytics.</p>
      </footer>
    </main>
  );
}
