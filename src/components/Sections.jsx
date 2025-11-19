import { Hospital, Video, Pill, MapPin, BrainCircuit, ClipboardPulse, BellRing, BarChart3, FileLock2, GraduationCap, ShieldCheck, ShieldAlert } from "lucide-react";

export default function Sections() {
  return (
    <section className="bg-slate-950" id="detail">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-16">
        {/* Booking */}
        <div id="consultation" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <Hospital className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Consultation booking</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Book online or in‑person appointments, pick preferred time, and receive confirmations. Designed for speed and clarity.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <button className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">Book online</button>
              <button className="rounded-lg px-4 py-2 bg-slate-800 text-white hover:bg-slate-700">Book in‑person</button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6">
            <div className="text-slate-300 text-sm">Next available</div>
            <div className="mt-2 text-white text-2xl font-semibold">Today · 4:30 PM</div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {['09:00','10:30','12:00','13:30','15:00','16:30','18:00','19:30'].map(t => (
                <button key={t} className="rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 py-2 text-sm">{t}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Pharmacy */}
        <div id="pharmacy" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <Pill className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Pharmacy locator</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Search nearby pharmacies and check if medicines are in stock before you go.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <input placeholder="Medicine name" className="rounded-lg bg-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="City or ZIP" className="rounded-lg bg-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">Check</button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 order-1 lg:order-2">
            <div className="text-slate-300 text-sm">Sample results</div>
            <ul className="mt-3 space-y-2">
              {[
                { name: 'CityCare Pharmacy', stock: 'In stock', dist: '0.8 km' },
                { name: 'HealthPlus Rx', stock: 'Limited', dist: '1.2 km' },
                { name: 'Wellness Chemist', stock: 'Out of stock', dist: '2.1 km' },
              ].map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-md bg-slate-800/70 px-3 py-2">
                  <span className="text-slate-200">{p.name}</span>
                  <span className="text-slate-400 text-sm">{p.dist}</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-200">{p.stock}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <GraduationCap className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Health education portal</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Explore multimedia content: short videos, articles, and infographics that make complex topics simple.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Videos</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Articles</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Infographics</button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6">
            <div className="text-slate-300 text-sm">Featured topics</div>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {['Heart Health','Diabetes','Mental Wellbeing','Nutrition','Respiratory','Maternal Care'].map(t => (
                <div key={t} className="rounded-md bg-slate-800/70 px-3 py-2 text-slate-200 text-sm">{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Risk */}
        <div id="ai-risk" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <BrainCircuit className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Health risk assessment (AI)</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">A short, adaptive questionnaire estimates risk scores with transparent factors. Not a diagnosis — guidance to help you decide next steps.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <label className="grid gap-1">
                <span className="text-slate-400">Age</span>
                <input className="rounded-lg bg-slate-800 text-slate-200 px-3 py-2" placeholder="e.g. 32" />
              </label>
              <label className="grid gap-1">
                <span className="text-slate-400">Smoker</span>
                <select className="rounded-lg bg-slate-800 text-slate-200 px-3 py-2"><option>No</option><option>Yes</option></select>
              </label>
            </div>
            <button className="mt-4 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">Estimate risk</button>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 order-1 lg:order-2">
            <div className="text-slate-300 text-sm">Example output</div>
            <div className="mt-2 text-white text-xl font-semibold">Low to moderate risk</div>
            <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
              <li>Most influential factors: age, activity level</li>
              <li>Recommended actions: annual check‑up, routine labs</li>
              <li>Learn more: heart health basics</li>
            </ul>
          </div>
        </div>

        {/* Records */}
        <div id="records" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <FileLock2 className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Personal health records</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Store lab results, prescriptions, and reports. Basic encryption with passphrase protection and controlled sharing links.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Upload PDF</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Add note</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Share</button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6">
            <div className="text-slate-300 text-sm">Quick view</div>
            <ul className="mt-3 space-y-2">
              {[
                { name: 'CBC - Jan 2025', status: 'Encrypted' },
                { name: 'Prescription - Feb 2025', status: 'Encrypted' },
                { name: 'X‑Ray - Mar 2025', status: 'Shared (read‑only)' },
              ].map((d) => (
                <li key={d.name} className="flex items-center justify-between rounded-md bg-slate-800/70 px-3 py-2">
                  <span className="text-slate-200">{d.name}</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-200">{d.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reminders */}
        <div id="reminders" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <BellRing className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Preventive reminders</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Automatic reminders tailored to age and risk for vaccinations, screenings, and check‑ups.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Vaccines</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Screenings</button>
              <button className="rounded-lg px-3 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700">Check‑ups</button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 order-1 lg:order-2">
            <div className="text-slate-300 text-sm">Upcoming</div>
            <ul className="mt-3 space-y-2">
              {[
                { name: 'Influenza vaccine', when: 'Next week' },
                { name: 'Dental check‑up', when: 'In 2 months' },
                { name: 'Blood pressure check', when: 'Tomorrow' },
              ].map((r) => (
                <li key={r.name} className="flex items-center justify-between rounded-md bg-slate-800/70 px-3 py-2">
                  <span className="text-slate-200">{r.name}</span>
                  <span className="text-slate-400 text-sm">{r.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div id="statistics" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <BarChart3 className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Regional health statistics</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">High‑level trends from aggregated, anonymized datasets — designed for public insight and policy awareness.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Vaccination rate', value: '82%' },
                { label: 'Obesity prevalence', value: '27%' },
                { label: 'Air quality index', value: 'AQI 63' },
              ].map((k) => (
                <div key={k.label} className="rounded-lg bg-slate-800/70 p-4">
                  <div className="text-white text-xl font-semibold">{k.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{k.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6">
            <div className="text-slate-300 text-sm">Mini chart</div>
            <div className="mt-3 h-36 w-full rounded-md bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,.25),transparent_60%)] border border-slate-800" />
          </div>
        </div>

        {/* AI Symptom Checker */}
        <div id="ai-symptoms" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 grid place-items-center">
                <ShieldAlert className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">Smart Symptom Checker (AI)</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">Describe symptoms in your own words. The AI suggests likely categories and next steps. Not a diagnosis.</p>
            <textarea className="mt-4 w-full rounded-lg bg-slate-800 text-slate-200 px-3 py-2 h-24" placeholder="e.g., fever for two days, sore throat, mild cough" />
            <button className="mt-3 rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">Check</button>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 order-1 lg:order-2">
            <div className="text-slate-300 text-sm">Illustrative response</div>
            <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
              <li>Likely: Viral upper respiratory infection</li>
              <li>Consider: Hydration, rest, OTC analgesics</li>
              <li>Seek care if: Fever > 3 days, shortness of breath, severe pain</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
