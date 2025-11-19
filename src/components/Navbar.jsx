import { Menu, Stethoscope, Hospital, Pill, ShieldCheck, ClipboardList, BellRing, BarChart3, BrainCircuit, GraduationCap, FileLock2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Education", href: "#education" },
    { label: "Records", href: "#records" },
    { label: "Reminders", href: "#reminders" },
    { label: "Statistics", href: "#statistics" },
    { label: "AI Tools", href: "#ai" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center shadow-lg">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div className="font-semibold tracking-tight">MedLink</div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors">
            <Hospital className="w-4 h-4" />
            Book Consultation
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
          <div className="px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-slate-300 hover:text-white py-1">{l.label}</a>
            ))}
            <a href="#services" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2">
              <Hospital className="w-4 h-4" />
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
