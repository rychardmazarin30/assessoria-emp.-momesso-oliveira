import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { site, yearsInBusiness } from "@/data/site";
import { services } from "@/data/services";
import { ContactForm } from "@/components/ContactForm";

const url = `${site.url}/contabilidade-em-sao-bernardo-do-campo`;

export const Route = createFileRoute("/contabilidade-em-sao-bernardo-do-campo")({
  component: LocalPage,
  head: () => ({
    meta: [
      {
        title: "Contabilidade em São Bernardo do Campo | Momesso & Oliveira",
      },
      {
        name: "description",
        content:
          "Escritório contábil em São Bernardo do Campo desde 1991. Contabilidade empresarial, assessoria fiscal, departamento pessoal e planejamento tributário no ABC Paulista.",
      },
      {
        property: "og:title",
        content: "Contabilidade em São Bernardo do Campo | Momesso & Oliveira",
      },
      {
        property: "og:description",
        content:
          "Contador em São Bernardo do Campo e ABC Paulista. Empresa familiar com mais de 30 anos de experiência e atendimento próximo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: site.legalName,
          url,
          telephone: site.phone,
          areaServed: ["São Bernardo do Campo", "ABC Paulista", "Brasil"],
          foundingDate: String(site.founded),
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
});

const bairros = [
  "Anchieta",
  "Centro",
  "Rudge Ramos",
  "Jardim do Mar",
  "Nova Petrópolis",
  "Assunção",
  "Demarchi",
  "Santo André",
  "São Caetano do Sul",
  "Diadema",
];

function LocalPage() {
  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block animate-reveal">
            [ São Bernardo do Campo · ABC Paulista ]
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-4xl mb-8 animate-reveal-1">
            Contabilidade em São Bernardo do Campo há mais de{" "}
            <span className="italic text-gold">{yearsInBusiness} anos</span>.
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl leading-relaxed animate-reveal-2">
            A Momesso &amp; Oliveira é um escritório contábil familiar sediado no
            bairro Anchieta, em São Bernardo do Campo. Atendemos empresas do ABC
            Paulista e de todo o Brasil com contabilidade empresarial,
            assessoria fiscal, departamento pessoal e planejamento tributário.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">
              Por que empresas do ABC nos escolhem
            </h2>
            <ul className="space-y-5">
              {[
                `Escritório local, com sede física em ${site.address.district}, ${site.address.city}`,
                "Contato direto com o contador responsável, sem central de atendimento",
                "Rotinas 100% digitais para quem prefere resolver à distância",
                "Responsabilidade técnica registrada no CRC-SP",
                "Empresa familiar com continuidade geracional desde 1991",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <Check size={18} className="text-gold shrink-0 mt-1" />
                  <span className="text-white/80 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">
              Serviços contábeis em SBC
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="border border-white/15 p-4 hover:border-gold hover:text-gold transition-colors font-display"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-display font-bold mb-6">
              Regiões atendidas
            </h2>
            <p className="text-navy/70 leading-relaxed mb-8">
              Estamos a poucos minutos das principais regiões de São Bernardo do
              Campo e atendemos também empresas nas cidades vizinhas do ABC.
            </p>
            <div className="flex flex-wrap gap-3">
              {bairros.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[10px] uppercase tracking-widest border border-navy/15 px-3 py-2 text-navy/60"
                >
                  {b}
                </span>
              ))}
            </div>
            <address className="not-italic mt-10 text-navy/70 leading-relaxed">
              {site.address.street} — {site.address.district}
              <br />
              {site.address.city} - {site.address.state}, {site.address.zip}
              <br />
              {site.hours}
              <br />
              <a href={site.phoneHref} className="text-navy hover:text-gold">
                {site.phone}
              </a>
            </address>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-display font-bold mb-6">
              Fale com um contador
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
