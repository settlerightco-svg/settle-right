import WaitlistForm from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] font-manrope text-[#071c31] antialiased scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b border-[#071c31]/5 bg-white shadow-[0_10px_32px_rgba(7,28,49,0.06)]">
        <nav className="mx-auto flex h-[104px] max-w-[1440px] items-center px-8 md:px-20">
          <div className="text-[28px] font-extrabold tracking-[-0.02em] text-[#071c31]">
            SettleRight
          </div>
        </nav>
      </header>

      <main>
        <section className="flex min-h-[calc(100vh-104px)] items-center bg-[#f6f8fb] px-8 py-24 md:px-20">
          <div className="mx-auto w-full max-w-[900px]">
            <div className="space-y-9">
              <div className="inline-flex rounded-full bg-white px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.03em] text-[#071c31] shadow-[0_2px_8px_rgba(7,28,49,0.14)] ring-1 ring-[#071c31]/5">
                Coming Soon
              </div>

              <h1 className="max-w-[830px] text-[56px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#071c31] md:text-[76px]">
                Your AI-powered relocation assistant for moving to the UAE.
              </h1>

              <p className="max-w-[820px] text-[22px] leading-[1.55] text-[#53647d]">
                Moving to the UAE can feel overwhelming — visas, documents, residency steps, banking, and setup. SettleRight helps you understand what to do, when to do it, and what comes next.
              </p>

              <a
                className="inline-flex min-w-[350px] items-center justify-center rounded-lg bg-[#071c31] px-8 py-5 text-[20px] font-semibold text-white shadow-sm transition hover:bg-[#0b2947] sm:min-w-[420px]"
                href="#early-access"
              >
                Subscribe now to get early access
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-32 md:px-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="max-w-[1040px] text-[46px] font-semibold leading-tight tracking-[-0.02em] text-[#071c31] md:text-[54px]">
              Simplifying the high-stakes journey of relocation
            </h2>
            <p className="mt-8 max-w-[1120px] text-[24px] leading-relaxed text-[#53647d]">
              SettleRight is being built to make relocation to the UAE simpler, clearer, and less stressful.
            </p>
          </div>
        </section>

        <section className="bg-[#f6f8fb] px-8 pb-36 pt-40 md:px-20">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-10 shadow-[0_2px_8px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/5">
              <h3 className="text-[30px] font-semibold tracking-[-0.01em] text-[#071c31]">
                Visa Roadmap
              </h3>
              <p className="mt-5 text-[20px] leading-relaxed text-[#53647d]">
                Step-by-step visa and residency guidance.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 shadow-[0_2px_8px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/5">
              <h3 className="text-[30px] font-semibold tracking-[-0.01em] text-[#071c31]">
                Financial Setup
              </h3>
              <p className="mt-5 text-[20px] leading-relaxed text-[#53647d]">
                Banking and setup support for UAE movers.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 shadow-[0_2px_8px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/5">
              <h3 className="text-[30px] font-semibold tracking-[-0.01em] text-[#071c31]">
                Settling In
              </h3>
              <p className="mt-5 text-[20px] leading-relaxed text-[#53647d]">
                Housing, utilities, and relocation essentials.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#071c31] px-8 py-36 text-white md:px-20" id="early-access">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-9">
              <div className="inline-flex rounded-full bg-white px-6 py-2 text-[13px] font-extrabold uppercase tracking-[0.03em] text-[#071c31]">
                Coming Soon
              </div>
              <h2 className="max-w-[680px] text-[56px] font-extrabold leading-[1.05] tracking-[-0.025em] text-white md:text-[72px]">
                Be among the first to experience SettleRight.
              </h2>
              <p className="max-w-[620px] text-[24px] leading-relaxed text-white/70">
                Subscribe now to get early access and be the first to know when we launch.
              </p>
            </div>

            <div className="min-h-[420px] rounded-2xl bg-white p-10 text-[#071c31] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#f6f8fb] py-20">
        <div className="mx-auto max-w-[1440px] px-8 text-center md:px-20">
          <p className="text-[14px] uppercase text-[#8ea0b9]">
            © 2026 SettleRight. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
