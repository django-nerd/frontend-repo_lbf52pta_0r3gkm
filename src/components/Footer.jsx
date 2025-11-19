export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-slate-300">
        <div>
          <div className="text-white font-semibold tracking-tight">MedLink</div>
          <p className="mt-2 text-sm text-slate-400">A trusted, user‑friendly platform connecting people to healthcare, learning, and AI‑powered guidance.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="grid gap-2">
            <div className="text-slate-200 font-medium">Platform</div>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#records" className="hover:text-white">Records</a>
          </div>
          <div className="grid gap-2">
            <div className="text-slate-200 font-medium">Support</div>
            <a href="#reminders" className="hover:text-white">Reminders</a>
            <a href="#statistics" className="hover:text-white">Statistics</a>
            <a href="#ai" className="hover:text-white">AI tools</a>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-slate-200 font-medium">Contact</div>
          <p className="mt-2 text-slate-400">support@medlink.health</p>
          <p className="mt-1 text-slate-400">© {new Date().getFullYear()} MedLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
