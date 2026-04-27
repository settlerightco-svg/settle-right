import WaitlistForm from "@/app/components/WaitlistForm";

export default function Home() {
  const whyItems = [
    {
      title: "Visa clarity",
      text: "Step-by-step guidance for the documents and timelines you need.",
    },
    {
      title: "Premium support",
      text: "A concierge-like experience for modern expats and founders.",
    },
    {
      title: "Housing & banking",
      text: "Understand your setup needs in each emirate with confidence.",
    },
    {
      title: "AI-powered guidance",
      text: "Receive clear direction from one place, not dozens of websites.",
    },
  ];

  const whatItems = [
    {
      title: "Clear cost breakdowns",
      text: "Know what to budget before you relocate.",
    },
    {
      title: "Step-by-step guidance",
      text: "Follow a structured path for visas, residency, and setup.",
    },
    {
      title: "Verified resources",
      text: "Access trusted providers for housing, banking, and more.",
    },
    {
      title: "Real-time support",
      text: "Get the right answer when you need it most.",
    },
  ];

  const relocationItems = [
    {
      title: "Visa Roadmap",
      text: "Step-by-step visa and residency guidance.",
    },
    {
      title: "Financial Setup",
      text: "Banking and setup support for UAE movers.",
    },
    {
      title: "Settling In",
      text: "Housing, utilities, and relocation essentials.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fb] font-manrope text-[#071c31] antialiased scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b border-[#071c31]/5 bg-white shadow-[0_10px_32px_rgba(7,28,49,0.06)]">
        <nav className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-7 md:h-[104px] md:px-20">
          <div className="text-[28px] font-extrabold tracking-[-0.02em] text-[#071c31]">
            SettleRight
          </div>
          <div className="hidden items-center gap-5 text-[16px] text-[#53647d] md:flex">
            <span className="rounded-full bg-[#fff8ea] px-5 py-3 text-[#785a00]">
              UAE Relocation
            </span>
            <span>AI-guided planning</span>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-[#f6f8fb] px-7 py-16 md:px-20 md:py-28">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.35fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#fff8ea] px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#785a00] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8a6400]" />
                Coming Soon
              </div>

              <div className="space-y-6">
                <h1 className="max-w-[850px] text-[48px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#071c31] md:text-[76px] lg:text-[82px]">
                  Your AI-powered relocation assistant to the UAE
                </h1>

                <p className="max-w-[820px] text-[22px] leading-[1.55] text-[#4f5d72] md:text-[24px]">
                  SettleRight simplifies visas, banking, housing, and compliance so you can move
                  with confidence. Start your UAE relocation with one elegant, guided experience.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex min-h-[64px] items-center justify-center rounded-[22px] bg-[#071c31] px-8 text-[17px] font-semibold text-white shadow-[0_18px_40px_rgba(7,28,49,0.18)] transition hover:bg-[#0b2947] sm:min-w-[300px]"
                  href="#early-access"
                >
                  Subscribe for early access
                </a>
              </div>
            </div>

            <aside className="rounded-[28px] bg-white p-8 shadow-[0_28px_90px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/8 md:p-10 lg:p-12">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.34em] text-[#8a6400]">
                Why SettleRight
              </p>
              <h2 className="mt-7 max-w-[430px] text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-[#071c31] md:text-[42px]">
                Relocation planning, distilled.
              </h2>
              <p className="mt-6 max-w-[520px] text-[19px] leading-relaxed text-[#6a7280]">
                The easiest way to understand what comes next for UAE relocation, whether you are
                moving for work, entrepreneurship, or lifestyle.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {whyItems.map((item) => (
                  <div
                    className="rounded-[22px] bg-[#f8fafc] p-6 ring-1 ring-[#071c31]/10"
                    key={item.title}
                  >
                    <h3 className="text-[17px] font-bold text-[#071c31]">{item.title}</h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-[#6a7280]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white px-7 py-20 md:px-20 md:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="rounded-[28px] bg-[#f6f8fb] p-8 md:p-12 lg:p-16">
              <div className="inline-flex rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#071c31] shadow-sm ring-1 ring-[#071c31]/5">
                What is SettleRight?
              </div>
              <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
                <div>
                  <h2 className="max-w-[620px] text-[38px] font-bold leading-[1.12] tracking-[-0.025em] text-[#071c31] md:text-[52px]">
                    A premium relocation assistant for the UAE
                  </h2>
                  <p className="mt-8 max-w-[660px] text-[20px] leading-[1.75] text-[#6a7280]">
                    SettleRight is building an AI-powered platform to simplify relocation to the UAE.
                    From visas and medical tests to banking and housing, we bring every step of your
                    move into one seamless experience.
                  </p>
                </div>

                <div className="grid gap-5">
                  {whatItems.map((item) => (
                    <div
                      className="rounded-[22px] bg-white p-7 shadow-sm ring-1 ring-[#071c31]/8"
                      key={item.title}
                    >
                      <h3 className="text-[20px] font-bold text-[#071c31]">{item.title}</h3>
                      <p className="mt-4 text-[18px] leading-relaxed text-[#6a7280]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8fb] px-7 py-20 md:px-20 md:py-28">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="max-w-[760px] text-[38px] font-bold leading-[1.12] tracking-[-0.025em] text-[#071c31] md:text-[52px]">
              Built around the relocation moments that matter.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relocationItems.map((item) => (
                <div
                  className="rounded-[22px] bg-white p-8 shadow-[0_2px_8px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/5 md:p-10"
                  key={item.title}
                >
                  <h3 className="text-[27px] font-bold tracking-[-0.01em] text-[#071c31]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[19px] leading-relaxed text-[#53647d]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071c31] px-7 py-24 text-white md:px-20 md:py-32" id="early-access">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-7">
              <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.12] tracking-[-0.025em] text-white md:text-[58px]">
                Be among the first to experience SettleRight.
              </h2>
              <p className="max-w-[620px] text-[20px] leading-relaxed text-white/70 md:text-[22px]">
                Join thousands of expats and founders planning their move to the UAE. Get early
                access to our platform, exclusive insights, and step-by-step guidance.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-7 text-[#071c31] shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-10">
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
