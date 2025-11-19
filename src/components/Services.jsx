import { Hospital, Video, UserRound, Pill, MapPin, ScanFace, ShieldAlert, CalendarClock } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Book Consultation",
    desc: "Schedule in-person or video appointments with verified clinicians.",
    icon: Hospital,
    href: "#consultation"
  },
  {
    id: 2,
    title: "Pharmacy Finder",
    desc: "Locate nearby pharmacies and check real-time medicine availability.",
    icon: Pill,
    href: "#pharmacy"
  },
  {
    id: 3,
    title: "Health Education",
    desc: "Watch videos, read articles, and follow interactive guides.",
    icon: Video,
    href: "#education"
  },
  {
    id: 4,
    title: "Risk Assessment (AI)",
    desc: "Answer a few questions to estimate your health risk profile.",
    icon: ScanFace,
    href: "#ai-risk"
  },
  {
    id: 5,
    title: "Health Records",
    desc: "Manage your medical records with basic encryption and sharing control.",
    icon: UserRound,
    href: "#records"
  },
  {
    id: 6,
    title: "Preventive Reminders",
    desc: "Get reminders for vaccines, screenings, and check‑ups.",
    icon: CalendarClock,
    href: "#reminders"
  },
  {
    id: 7,
    title: "Regional Statistics",
    desc: "Explore public health trends with aggregated, anonymized data.",
    icon: MapPin,
    href: "#statistics"
  },
  {
    id: 8,
    title: "Symptom Checker (AI)",
    desc: "Get a preliminary read on symptoms before seeking care.",
    icon: ShieldAlert,
    href: "#ai-symptoms"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Eight essential services</h2>
          <p className="mt-3 text-slate-300">Everything you need to manage health, from booking care to AI‑powered guidance. Clear, secure, and fast.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ id, title, desc, icon: Icon, href }) => (
            <a key={id} href={href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 grid place-items-center">
                <Icon className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="mt-4 text-white font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 text-sm text-blue-300 group-hover:text-blue-200">Explore →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
