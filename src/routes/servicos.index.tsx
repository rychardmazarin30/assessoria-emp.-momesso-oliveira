import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/servicos/")({
  component: ServicosPage,
  head: () => ({
    meta: [
      { title: "Serviços contábeis | Momesso & Oliveira" },
      {
        name: "description",
        content:
          "Contabilidade empresarial, assessoria fiscal, departamento pessoal, certificado digital, planejamento tributário, abertura e regularização de empresas em São Bernardo do Campo.",
      },
      { property: "og:title", content: "Serviços contábeis | Momesso & Oliveira" },
      {
        property: "og:description",
        content:
          "Soluções contábeis, fiscais e trabalhistas para empresas de todos os portes, com atendimento próximo e mais de 30 anos de experiência.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/servicos` }],
  }),
});

function ServicosPage() {
  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
            [ Serviços ]
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-3xl mb-8">
            Tudo o que sua empresa precisa em{" "}
            <span className="italic text-gold">contabilidade</span> e gestão.
          </h1>
          <p className="text-lg text-navy/70 max-w-xl leading-relaxed">
            Da abertura da empresa ao planejamento tributário, cuidamos das
            rotinas obrigatórias e apoiamos as decisões estratégicas do seu
            negócio.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="bg-paper p-8 group hover:bg-navy hover:text-white transition-colors duration-500"
              >
                <span className="font-mono text-xs text-gold block mb-10">
                  {s.code}
                </span>
                <h2 className="text-xl font-display font-bold mb-3">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-navy/60 group-hover:text-white/60 mb-8">
                  {s.short}
                </p>
                <ArrowRight
                  size={18}
                  className="text-gold group-hover:translate-x-2 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
