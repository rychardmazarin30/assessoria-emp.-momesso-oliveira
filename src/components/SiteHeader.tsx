import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navLinks, whatsappLink } from "@/data/site";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-navy flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="size-6 border-2 border-gold rotate-45" />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <LogoMark />
          <div className="leading-none">
            <span className="block font-mono text-[10px] tracking-tighter uppercase text-gold">
              Contabilidade & Assessoria Empresarial
            </span>
            <span className="block font-display text-lg font-bold tracking-tight">
              Momesso &amp; Oliveira
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: link.to === "/" }}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-navy text-white hover:bg-gold transition-all"
          >
            Falar com um Especialista
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-paper px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block font-mono text-xs uppercase tracking-widest hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit px-5 py-2.5 bg-navy text-white font-mono text-xs uppercase tracking-widest"
          >
            Falar com um Especialista
          </a>
        </div>
      )}
    </nav>
  );
}
