export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Screenshot-Verified Time Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Prove every billable hour with{" "}
          <span className="text-[#58a6ff]">automatic screenshots</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ProofTrack captures periodic screenshots during your work sessions and stores them securely in the cloud. Share a transparent proof report with clients and eliminate billing disputes forever.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📸", title: "Auto Screenshots", desc: "Desktop client captures proof images every few minutes silently in the background." },
            { icon: "☁️", title: "Secure Cloud Storage", desc: "All screenshots encrypted and stored. Access your proof archive anytime." },
            { icon: "🔗", title: "Client Sharing", desc: "Generate a shareable link so clients can verify your work hours with visual proof." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$8</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited work sessions",
              "Screenshot capture every 5 min",
              "Secure cloud storage (10 GB)",
              "Shareable client proof reports",
              "Lemon Squeezy billing portal",
              "Mac, Windows & Linux desktop app"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does screenshot verification work?",
              a: "Our lightweight desktop app runs in the background and captures a screenshot every 5 minutes while a timer session is active. Screenshots are uploaded to your encrypted cloud storage and attached to your time entries."
            },
            {
              q: "Can clients see all my screenshots?",
              a: "You control what clients see. You can share a curated proof report with selected screenshots, or share the full session log. Clients get a read-only link — they never have access to your account."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "You can cancel anytime from the Lemon Squeezy billing portal. Your data and screenshots remain accessible for 30 days after cancellation so you can export everything before it's removed."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ProofTrack. All rights reserved.
      </footer>
    </main>
  );
}
