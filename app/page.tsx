export default function Home() {
  return (
    <div className="bg-[#F7F8FA] font-sans antialiased">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-xl font-bold">SettleRight 🚀</h1>
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center pt-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Your AI-powered relocation assistant for Dubai
            </h1>
            <p className="text-lg text-gray-600">
              Visas, banking, housing — we guide you step by step.
            </p>
            <a href="#early-access" className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-lg">
              Get Early Access
            </a>
          </div>
        </section>

        <section id="early-access" className="py-20 bg-black text-white px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Be the first to try SettleRight</h2>
            <div className="bg-white text-black p-6 rounded-xl">
              <p className="font-semibold">Join the waitlist</p>
              <p className="text-gray-600 mt-2">Form coming soon.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © 2026 SettleRight
      </footer>
    </div>
  );
}
