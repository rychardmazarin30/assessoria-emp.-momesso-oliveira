import { Link } from "@tanstack/react-router";

import { site } from "@/data/site";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-8 bg-gold flex items-center justify-center">
                <div className="size-4 border-2 border-navy rotate-45" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Momesso &amp; Oliveira
              </span>
            </div>
            <p className="max-w-xs text-white/40 text-sm leading-relaxed">
              Escritório de contabilidade e assessoria empresarial em São
              Bernardo do Campo. Empresa familiar desde {site.founded}.
            </p>
            <address className="not-italic mt-6 text-white/50 text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.district}, {site.address.city} - {site.address.state}
              <br />
              {site.address.zip}
              <br />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </address>
            <div className="mt-6 space-y-1 text-white/40 text-xs">
              <p className="font-medium text-white/60">Responsabilidade técnica</p>
              <p>Marly Momesso Oliveira</p>
              <p>{site.crc}</p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">
              Serviços
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  A empresa
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/contabilidade-em-sao-bernardo-do-campo"
                  className="hover:text-white transition-colors"
                >
                  Contabilidade em SBC
                </Link>
              </li>
              <li>
                <Link
                  to="/abrir-empresa-em-sao-bernardo-do-campo"
                  className="hover:text-white transition-colors"
                >
                  Abrir empresa em SBC
                </Link>
              </li>
            </ul>

            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mt-8 mb-6">
              Social
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} Momesso &amp; Oliveira. Todos os
            direitos reservados.
          </p>
          <p>Contabilidade e Assessoria Empresarial em SBC</p>
        </div>
      </div>
    </footer>
  );
}
