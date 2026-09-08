import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

import { getService, services } from "@/data/services";
import { site, whatsappLink } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Serviço não encontrado | Momesso & Oliveira" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    const url = `${site.url}/servicos/${params.slug}`;
    return {
      meta: [
        { title: `${s.metaTitle} | Momesso & Oliveira` },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: `${s.metaTitle} | Momesso & Oliveira` },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            areaServed: "São Bernardo do Campo, SP",
            provider: {
              "@type": "AccountingService",
              name: site.legalName,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.city,
                addressRegion: site.address.state,
                postalCode: site.address.zip,
                addressCountry: "BR",
              },
            },
          }),
        },
      ],
    };
  },
  component: ServicoPage,
});

function ServicoPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/servicos"
            className="font-mono text-[10px] uppercase tracking-widest text-navy/40 hover:text-gold"
          >
            Serviços
          </Link>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-3xl">
            {service.title}
          </h1>
          <p className="mt-8 text-lg text-navy/70 max-w-2xl leading-relaxed">
            {service.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink(
                `Olá! Gostaria de falar sobre ${service.title}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-navy text-white font-mono text-xs uppercase tracking-widest flex items-center gap-3 group hover:bg-gold transition-all"
            >
              Falar com um Especialista
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
            <Link
              to="/contato"
              className="px-8 py-4 border border-navy/15 font-mono text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
            >
              Solicitar Diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
              Benefícios
            </span>
            <ul className="space-y-5">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-4">
                  <Check size={18} className="text-gold shrink-0 mt-1" />
                  <span className="text-white/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
              Problemas que resolvemos
            </span>
            <ul className="space-y-5">
              {service.problems.map((p) => (
                <li
                  key={p}
                  className="border-l border-gold/40 pl-5 text-white/70 leading-relaxed"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
              Perguntas frequentes
            </span>
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {service.faq.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="cursor-pointer font-display text-lg font-bold list-none flex justify-between gap-6">
                    {item.q}
                    <span className="text-gold group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-navy/60 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
              Fale conosco
            </span>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-8">
            Outros serviços
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="bg-paper p-6 hover:bg-navy hover:text-white transition-colors"
              >
                <span className="font-mono text-xs text-gold block mb-6">
                  {s.code}
                </span>
                <span className="font-display text-lg font-bold">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
