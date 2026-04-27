export default function Home() {
  return (
    <div className="bg-[#F7F8FA] font-manrope text-on-surface antialiased scroll-smooth">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#071A2F]/5 shadow-[0_4px_20px_rgba(7,26,47,0.08)]">
        <nav className="flex justify-between items-center h-20 px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="text-2xl font-extrabold text-[#071A2F]">SettleRight</div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#071A2F] text-xs font-bold uppercase w-fit shadow">
                Coming Soon
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#071A2F] leading-tight">
                Your AI-powered relocation assistant for moving to the UAE.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Moving to the UAE can feel overwhelming — visas, documents, residency steps, banking, and setup. SettleRight helps you understand what to do, when to do it, and what comes next.
              </p>

              <a
                className="inline-flex px-8 py-4 bg-[#071A2F] text-white font-semibold rounded-lg"
                href="#early-access"
              >
                Subscribe now to get early access
              </a>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-[#071A2F]">
              Simplifying the high-stakes journey of relocation
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl">
              SettleRight is being built to make relocation to the UAE simpler, clearer, and less stressful.
            </p>
          </div>
        </section>

        <section className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#071A2F]">Visa Roadmap</h3>
              <p className="mt-3 text-slate-600">Step-by-step visa and residency guidance.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#071A2F]">Financial Setup</h3>
              <p className="mt-3 text-slate-600">Banking and setup support for UAE movers.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#071A2F]">Settling In</h3>
              <p className="mt-3 text-slate-600">Housing, utilities, and relocation essentials.</p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#071A2F] text-white" id="early-access">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-[#071A2F] text-xs font-bold uppercase">
                Coming Soon
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold">
                Be among the first to experience SettleRight.
              </h2>
              <p className="text-lg text-slate-300">
                Subscribe now to get early access and be the first to know when we launch.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-[#071A2F] shadow-2xl">
              <p className="text-lg font-semibold">Join the waitlist</p>
              <p className="mt-2 text-slate-600">Form coming soon.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F7F8FA] w-full py-16 border-t border-[#071A2F]/5">
        <div className="px-8 md:px-20 max-w-[1440px] mx-auto text-center">
          <p className="font-manrope text-xs text-slate-400 uppercase">
            © 2026 SettleRight. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}