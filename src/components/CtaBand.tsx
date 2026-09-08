import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { whatsappLink } from "@/data/site";

export function CtaBand({
  title = "Vamos conversar sobre a sua empresa?",
  text = "Uma conversa inicial sem compromisso já mostra onde há risco fiscal e onde há oportunidade de economia.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title}
          </h2>
          <p className="text-white/60 max-w-lg leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-navy font-mono text-xs uppercase tracking-widest flex items-center gap-3 group hover:bg-white transition-all"
          >
            Falar com um Especialista
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
          <Link
            to="/contato"
            className="px-8 py-4 border border-white/20 font-mono text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
          >
            Solicitar Diagnóstico
          </Link>
        </div>
      </div>
    </section>
  );
}
