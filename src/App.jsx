import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <section id="ai" className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold tracking-tight">Digital health risk (AI)</h3>
              <p className="mt-2 text-sm text-slate-300">Adaptive questionnaire for transparent risk estimation.</p>
              <a href="#ai-risk" className="mt-4 inline-block text-blue-300 hover:text-blue-200">Open →</a>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold tracking-tight">Smart Symptom Checker (AI)</h3>
              <p className="mt-2 text-sm text-slate-300">Plain‑language inputs to triage likely categories.</p>
              <a href="#ai-symptoms" className="mt-4 inline-block text-blue-300 hover:text-blue-200">Open →</a>
            </div>
          </div>
        </section>
        <Services />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default App
