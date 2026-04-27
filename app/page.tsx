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
    {
      title: "24x7 Assistance",
      text: "Always-on guidance whenever questions come up before, during, or after your move.",
    },
  ];

  const workflowItems = [
    {
      title: "Transparency",
      traditional: "Scattered information, unclear next steps, and no single source of truth.",
      settleRight: "A clear relocation roadmap with every milestone visible from day one.",
    },
    {
      title: "Cost clarity",
      traditional: "Unexpected fees appear late, making budgets difficult to trust.",
      settleRight: "Estimated costs are organized early so you know what to prepare for.",
    },
    {
      title: "Legal issues",
      traditional: "Visa, residency, and documentation rules are easy to misunderstand.",
      settleRight: "Guided prompts help you understand requirements before they become blockers.",
    },
    {
      title: "Time consuming",
      traditional: "Hours disappear across tabs, service providers, and repeated research.",
      settleRight: "One structured workflow keeps decisions, documents, and tasks moving together.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fb] font-manrope text-[#071c31] antialiased scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b border-[#071c31]/5 bg-white shadow-[0_10px_32px_rgba(7,28,49,0.06)]">
        <nav className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-7 md:h-[92px] md:px-20">
          <div className="text-[28px] font-extrabold tracking-[-0.02em] text-[#071c31]">
            SettleRight
          </div>
          <div className="hidden items-center gap-4 rounded-full bg-[#f8fafc] px-6 py-4 text-[16px] text-[#53647d] shadow-sm ring-1 ring-[#071c31]/6 md:flex">
            <span className="font-medium text-[#785a00]">UAE Relocation</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8d0db]" aria-hidden="true" />
            <span>AI-guided planning</span>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-[#f6f8fb] px-7 py-14 md:px-20 md:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.35fr_0.9fr]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#071c31] md:text-[64px] lg:text-[70px]">
                  Your AI-powered relocation assistant to the UAE
                </h1>

                <p className="copy-justified max-w-[760px] text-[19px] leading-[1.55] text-[#4f5d72] md:text-[21px]">
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
              <div className="inline-flex items-center gap-3 rounded-full bg-[#fff8ea] px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#785a00] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8a6400]" />
                Coming Soon
              </div>
            </div>

            <aside className="rounded-[28px] bg-white p-8 shadow-[0_28px_90px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/8 md:p-10 lg:p-12">
              <p className="text-[13px] font-extrabold text-[#8a6400]">
                Why SettleRight?
              </p>
              <h2 className="mt-7 max-w-[430px] text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#071c31] md:text-[38px]">
                Relocation planning, distilled.
              </h2>
              <p className="copy-justified mt-6 max-w-[520px] text-[17px] leading-relaxed text-[#6a7280]">
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
                    <p className="copy-justified mt-4 text-[16px] leading-relaxed text-[#6a7280]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white px-7 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="rounded-[28px] bg-[#f6f8fb] p-8 md:p-12 lg:p-16">
              <div className="inline-flex rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#071c31] shadow-sm ring-1 ring-[#071c31]/5">
                What is SettleRight?
              </div>
              <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
                <div>
                  <h2 className="max-w-[620px] text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#071c31] md:text-[44px]">
                    A hassle-free relocation assistant for the UAE
                  </h2>
                  <p className="copy-justified mt-8 max-w-[660px] text-[18px] leading-[1.75] text-[#6a7280]">
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
                      <p className="copy-justified mt-4 text-[18px] leading-relaxed text-[#6a7280]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8fb] px-7 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="max-w-[720px] text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#071c31] md:text-[44px]">
              Built around the relocation moments that matter.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {relocationItems.map((item) => (
                <div
                  className="rounded-[22px] bg-white p-8 shadow-[0_2px_8px_rgba(7,28,49,0.12)] ring-1 ring-[#071c31]/5 md:p-10"
                  key={item.title}
                >
                  <h3 className="text-[24px] font-bold tracking-[-0.01em] text-[#071c31]">
                    {item.title}
                  </h3>
                  <p className="copy-justified mt-5 text-[17px] leading-relaxed text-[#53647d]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-7 py-16 md:px-20 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div>
              <div className="max-w-[980px]">
                <div className="inline-flex rounded-full bg-[#f6f8fb] px-6 py-3 text-[15px] font-bold text-[#071c31] shadow-sm ring-1 ring-[#071c31]/5">
                  Traditional vs SettleRight
                </div>
                <h2 className="mt-9 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-[#071c31] md:text-[46px]">
                  The current process is fragmented. SettleRight makes it navigable.
                </h2>
                <p className="copy-justified mt-7 max-w-[940px] text-[18px] leading-[1.75] text-[#6a7280]">
                  Relocation decisions usually happen through unclear advice, surprise costs, and
                  disconnected providers. SettleRight turns those moving parts into a guided workflow
                  you can understand and act on.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-[#f6f8fb] p-4 shadow-sm ring-1 ring-[#071c31]/6 md:p-6">
                <div className="grid gap-4">
                  <div className="hidden grid-cols-[0.7fr_1fr_1fr] gap-4 px-5 py-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#8a6400] md:grid">
                    <span>Issue</span>
                    <span>Traditional process</span>
                    <span>SettleRight</span>
                  </div>

                  {workflowItems.map((item) => (
                    <div
                      className="grid gap-4 rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-[#071c31]/8 md:grid-cols-[0.7fr_1fr_1fr] md:p-6"
                      key={item.title}
                    >
                      <div>
                        <p className="text-[19px] font-bold text-[#071c31]">{item.title}</p>
                      </div>

                      <div className="rounded-[18px] bg-[#fff7f7] p-4 ring-1 ring-[#eeb8b8]">
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f7dcdc] text-[18px] font-bold text-[#a53d3d]">
                          ×
                        </div>
                        <p className="copy-justified text-[16px] leading-relaxed text-[#7a4b4b]">
                          {item.traditional}
                        </p>
                      </div>

                      <div className="rounded-[18px] bg-[#f3fbf6] p-4 ring-1 ring-[#bfe5ca]">
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dff4e6] text-[18px] font-bold text-[#1b7f42]">
                          ✓
                        </div>
                        <p className="copy-justified text-[16px] leading-relaxed text-[#315f43]">
                          {item.settleRight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071c31] px-7 py-20 text-white md:px-20 md:py-28" id="early-access">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-7">
              <h2 className="max-w-[660px] text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-white md:text-[48px]">
                Be among the first to experience SettleRight.
              </h2>
              <p className="copy-justified max-w-[620px] text-[18px] leading-relaxed text-white/70 md:text-[20px]">
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
