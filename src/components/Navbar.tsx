import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#modulare", label: "Modulare" },
  { href: "#proces", label: "Proces" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-dark border-b border-white/10 py-3" : "py-5"
      }`}
    >
      <div className="container-x mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="TrainiQ" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-lg font-bold tracking-tight text-white">trainiQ</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:0728232176"
            className="flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-glow transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            0728 232 176
          </a>
        </div>

        <button
          aria-label="Meniu"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass-dark mt-3 border-t border-white/10 lg:hidden">
          <div className="container-x mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0728232176"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" /> 0728 232 176
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
