import WaitlistForm from "@/app/components/WaitlistForm";

export default function Home() {
  return (
    <div className="bg-[#F7F8FA] font-manrope text-on-surface antialiased scroll-smooth">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#071A2F]/5 shadow-[0_4px_20px_rgba(7,26,47,0.08)]">
        <nav className="flex justify-between items-center h-20 px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="text-2xl font-extrabold text-[#071A2F]">SettleRight</div>
          <div className="flex items-center gap-6">
            <a className="text-slate-500 hover:text-secondary transition-colors duration-300 active:scale-95 transition-transform" href="#" title="LinkedIn">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-slate-500 hover:text-secondary transition-colors duration-300 active:scale-95 transition-transform" href="#" title="Instagram">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20"
              alt="Modern minimalist aerial view of Dubai skyline at sunrise with soft golden light and hazy skyscrapers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZxRpZVQCbbupLDRmpSI7524VEtwSL_3Ps-1hiM3GiSmBNfCiScHezvA2BnKqNNXJRD1w2m8xznoXzzo6ESIuB7PvFBxz4GRYxlQVFgfCQlXgsHci2CeYvH3siKFCkeCkfJvtMBegWOkwzmkCJmnTDPexGVaPv9sdWodla08r71U4SwMYuqs_mIYZoOv_83rucaYGnOIAkx16mQAk52XVRc9KlQ_0zhn0TFBBhm41V7Y8VNJa8GzJ7X4tGRJPPtFJ_7Eu-jkDquc"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8FA]/50 via-transparent to-[#F7F8FA]"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Coming Soon
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#071A2F] max-w-2xl leading-tight">
                Your AI-powered relocation assistant for moving to the UAE.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Moving to the UAE can feel overwhelming — visas, documents, residency steps, banking, and setup. SettleRight helps you understand what to do, when to do it, and what comes next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  className="px-8 py-4 bg-[#071A2F] text-white font-semibold rounded-lg hover:ring-2 hover:ring-secondary-fixed-dim transition-all duration-300 flex items-center justify-center gap-2 group"
                  href="#early-access"
                >
                  Subscribe now to get early access
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img
                    className="w-full h-full object-cover"
                    alt="Elegant close up of high-end architectural details in the UAE featuring clean lines and premium materials"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKCrjUQDXok9tN3rMJfptgmwLsDeMmYkyeI2rbY4CWrp-Pq064Dw2PFnco_scXwxoo3RcnHEiAwmmSHEGSQ9V4v60kARh_9fnfzxcrrBjjobxQX68iiMgVzXtHzi7vTkO7RqMScCt5-bVZKbO7r5-KfCvx0YVOdiqMNfXi34-kEiqTOJ6nrkvtCwZIhx9OHuqYYABe0w6lcm0lVHSr1AjCECtjTs53TZdDEwmObkvlNcsOkGHlap2VnZ6mupqeG_Marlig-nNId6k"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8 lg:pl-16">
                <h2 className="text-4xl font-semibold text-[#071A2F]">Simplifying the high-stakes journey of relocation</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    SettleRight is being built to make relocation to the UAE simpler, clearer, and less stressful.
                    Instead of searching across scattered websites, unclear checklists, and different service providers, SettleRight gives people a guided way to understand their next steps.
                  </p>
                  <p>
                    From visas and documents to residency, banking, and lifestyle setup, we provide a unified path designed with the hospitality of the UAE in mind.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="space-y-2">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <h3 className="text-2xl font-semibold text-[#071A2F]">Trusted</h3>
                    <p className="text-slate-600">Accurate, up-to-date guidance you can rely on.</p>
                  </div>
                  <div className="space-y-2">
                    <span className="material-symbols-outlined text-secondary">concierge</span>
                    <h3 className="text-2xl font-semibold text-[#071A2F]">Premium</h3>
                    <p className="text-slate-600">A concierge experience for every user.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Features Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between min-h-80">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">description</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#071A2F]">Visa Roadmap</h3>
                <p className="text-slate-600 max-w-md">Detailed step-by-step documentation required for Golden Visas, remote work permits, and employment sponsorship.</p>
              </div>
              <div className="mt-8 flex gap-2 overflow-hidden opacity-50">
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold uppercase">Identity Card</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold uppercase">Medical Test</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold uppercase">Insurance</span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">account_balance</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#071A2F]">Financial Setup</h3>
                <p className="text-slate-600">Guidance on opening personal and business bank accounts with premier UAE institutions.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">home_work</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#071A2F]">Settling In</h3>
                <p className="text-slate-600">Finding your home, setting up utilities (DEWA), and navigating the Ejari process.</p>
              </div>
            </div>
            <div className="md:col-span-2 glass-card p-8 rounded-2xl relative overflow-hidden flex items-center">
              <div className="space-y-4 z-10">
                <h3 className="text-2xl font-semibold text-[#071A2F]">AI-Powered Tracking</h3>
                <p className="text-slate-600 max-w-xs">Smart progress monitoring that learns from your relocation journey to predict and prepare your next steps.</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                <div className="h-full flex items-center justify-end pr-8">
                  <img
                    className="h-2/3 rounded-xl object-cover opacity-80 border border-[#071A2F]/10 shadow-lg"
                    alt="Sleek abstract data visualization with glowing soft navy and gold nodes on a white background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhrOULM4sfdVmVImecWVnL921VdzRc6K62gqVpm5HaUUemtQfE6G7ZK9jaX1xgtJVJwIgVmxY6q9rlpPR-whJgfi0VNKHHhGpcasvys0AMiPjThYPx_rT5dGPBTE2DdfYCRwBcrMqc69dIKLKoDiK79P0gouBB6RxZ1KxKeAkwMIUzf8opzGEgR9qNOungFg_Bb00gNAxvrCiCLcYbbozytGBU3fpSmLxIRomzXZoR3EACSa1E4ZkG76aYR2vn_kZ9DjxMggtia5o"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Section */}
        <section className="py-32 bg-[#071A2F] text-white" id="early-access">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold uppercase mb-4">Coming Soon</div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white">Be among the first to experience SettleRight.</h2>
              <p className="text-lg text-slate-300">
                We&apos;re building SettleRight for people planning their move to the UAE. Subscribe now to get early access and be the first to know when we launch.
              </p>
              <div className="pt-8 flex items-center gap-4 text-slate-400">
                <span className="material-symbols-outlined">verified</span>
                <p className="text-sm uppercase font-semibold">No spam. Just early updates and relocation guidance.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-[#071A2F] shadow-2xl">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F8FA] w-full py-16 border-t border-[#071A2F]/5 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 md:px-20 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-[#071A2F]">SettleRight</div>
            <p className="font-manrope text-sm uppercase text-slate-500">Guided Premium Relocation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-manrope text-sm uppercase text-slate-500 hover:text-secondary underline-offset-8 hover:underline transition-all duration-500 ease-out" href="#">Privacy Policy</a>
            <a className="font-manrope text-sm uppercase text-slate-500 hover:text-secondary underline-offset-8 hover:underline transition-all duration-500 ease-out" href="#">Terms of Service</a>
            <a className="font-manrope text-sm uppercase text-slate-500 hover:text-secondary underline-offset-8 hover:underline transition-all duration-500 ease-out" href="#">Contact Support</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a className="text-slate-500 hover:text-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-slate-500 hover:text-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
            <p className="font-manrope text-xs text-slate-400 uppercase">© 2026 SettleRight. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Concierge FAB */}
      <button className="fixed bottom-8 right-8 px-6 py-3 bg-[#071A2F] text-white rounded-full shadow-2xl flex items-center gap-3 group hover:scale-105 active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined text-secondary">support_agent</span>
        <span className="text-xs font-bold uppercase">Concierge Support</span>
      </button>
    </div>
  );
}
