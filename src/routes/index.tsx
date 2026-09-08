import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Phone, MapPin, ArrowRight, Check } from "lucide-react";

import { site, whatsappLink, yearsInBusiness } from "@/data/site";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { ContactForm } from "@/components/ContactForm";
import familia1 from "../assets/familia-1.jpg.asset.json";
import familia2 from "../assets/familia-2.jpg.asset.json";
import marly from "../assets/marly.jpg.asset.json";
import mapLocationAsset from "../assets/map-location.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Contabilidade em São Bernardo do Campo | Momesso & Oliveira",
      },
      {
        name: "description",
        content:
          "Escritório de contabilidade familiar em São Bernardo do Campo desde 1991. Contabilidade empresarial, assessoria fiscal, departamento pessoal e planejamento tributário. Avaliação 5.0 no Google.",
      },
      {
        property: "og:title",
        content: "Contabilidade em São Bernardo do Campo | Momesso & Oliveira",
      },
      {
        property: "og:description",
        content:
          "Há mais de 30 anos ajudando empresas a crescer com segurança. Contabilidade estratégica, tradição familiar e atendimento próximo no ABC Paulista.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: site.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: site.legalName,
          url: site.url,
          telephone: site.phone,
          foundingDate: String(site.founded),
          areaServed: ["São Bernardo do Campo", "ABC Paulista", "Brasil"],
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 08:00-18:00",
          sameAs: [
            site.social.linkedin,
            site.social.instagram,
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            bestRating: "5",
            ratingCount: "1",
          },
        }),
      },
    ],
  }),
});

const stats = [
  { value: `${yearsInBusiness}`, label: "Anos de mercado" },
  { value: "1991", label: "Ano de fundação" },
  { value: "2", label: "Gerações da família" },
  { value: "5.0", label: "Avaliação no Google" },
];

const differentials = [
  {
    code: "01",
    title: "Empresa familiar",
    description:
      "Fundada por Marly Momesso e Natanael Oliveira, hoje com a nova geração da família à frente das áreas técnicas.",
  },
  {
    code: "02",
    title: "Mais de 30 anos de experiência",
    description:
      "Décadas acompanhando empresas de todos os portes, em ciclos bons e difíceis da economia.",
  },
  {
    code: "03",
    title: "Atendimento próximo",
    description:
      "Você fala com quem cuida da sua empresa. Sem robô, sem fila, sem trocar de responsável a cada mês.",
  },
  {
    code: "04",
    title: "Equipe especializada",
    description:
      "Times dedicados às áreas contábil, fiscal e de departamento pessoal, com responsabilidade técnica no CRC-SP.",
  },
  {
    code: "05",
    title: "Soluções personalizadas",
    description:
      "Nada de pacote pronto: o serviço é desenhado a partir do porte, do setor e do momento da sua empresa.",
  },
  {
    code: "06",
    title: "Tecnologia com relacionamento",
    description:
      "Rotinas digitais e parceria certificada Conta Azul, sem abrir mão da conversa olho no olho.",
  },
];

const timeline = [
  { year: "1991", text: "Fundação do escritório em São Bernardo do Campo." },
  { year: "Anos 2000", text: "Consolidação da carteira no ABC Paulista." },
  { year: "Anos 2010", text: "Digitalização das rotinas e parceria Conta Azul." },
  { year: "Hoje", text: "Nova geração da família à frente das áreas técnicas." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block animate-reveal">
                [ Escritório contábil em São Bernardo do Campo · desde 1991 ]
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] text-balance mb-8 animate-reveal-1">
                Há mais de {yearsInBusiness} anos ajudando empresas a crescer com{" "}
                <span className="italic text-gold">segurança</span>.
              </h1>
              <p className="max-w-xl text-lg text-navy/70 leading-relaxed mb-10 animate-reveal-2">
                Transformamos a complexidade contábil, fiscal e trabalhista em
                decisões seguras para o crescimento da sua empresa.
              </p>
              <div className="flex flex-wrap gap-4 animate-reveal-3">
                <a
                  href={whatsappLink()}
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
                <div className="flex items-center gap-3 px-6 py-4 border border-navy/10">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-xs tracking-tighter">
                    5.0 GOOGLE
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 animate-reveal-4">
              <div className="w-full aspect-[4/5] bg-navy/5 overflow-hidden">
                <img
                  src={familia1.url}
                  alt="Sócios e equipe da Momesso & Oliveira Assessoria Empresarial em São Bernardo do Campo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-navy/40">
                A família Momesso &amp; Oliveira
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-navy/5 -z-10 hidden lg:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-navy/5 -z-10 hidden lg:block" />
      </section>

      {/* Autoridade */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-10 block">
            Confiança construída ao longo de décadas
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy p-8">
                <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-3">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/40 text-sm">
            Responsabilidade técnica: Marly Momesso Oliveira — {site.crc}.
            Escritório parceiro certificado Conta Azul, com atendimento a
            empresas em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
                01 — Serviços
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Contabilidade estratégica em todas as frentes
              </h2>
            </div>
            <Link
              to="/servicos"
              className="font-mono text-[11px] uppercase tracking-widest text-gold hover:text-navy shrink-0"
            >
              Ver todos os serviços →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/servicos/$slug"
                params={{ slug: service.slug }}
                className="bg-paper p-8 group hover:bg-navy hover:text-white transition-colors duration-500"
              >
                <span className="font-mono text-xs text-gold mb-10 block">
                  {service.code}
                </span>
                <h3 className="text-xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy/60 group-hover:text-white/60 mb-6">
                  {service.short}
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

      {/* História */}
      <section id="historia" className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
              02 — Nossa história
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Uma história construída em família
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 max-w-lg">
              Marly Momesso e Natanael Oliveira abriram o escritório em 1991
              atendendo pequenas empresas de São Bernardo do Campo. Hoje, a nova
              geração da família conduz as áreas técnicas ao lado dos
              fundadores, com a mesma proximidade de sempre e a tecnologia que o
              negócio moderno exige.
            </p>
            <ol className="space-y-6 mb-10">
              {timeline.map((t) => (
                <li key={t.year} className="flex gap-6 items-start">
                  <span className="font-mono text-xs text-gold w-24 shrink-0 pt-1">
                    {t.year}
                  </span>
                  <span className="text-white/70 border-l border-gold/30 pl-6">
                    {t.text}
                  </span>
                </li>
              ))}
            </ol>
            <Link
              to="/sobre"
              className="font-mono text-[11px] uppercase tracking-widest text-gold hover:text-white"
            >
              Conhecer a história completa →
            </Link>
          </div>
          <img
            src={familia2.url}
            alt="Família fundadora da Momesso & Oliveira em frente ao escritório"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Sócios */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
            03 — Quem conduz
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
            Os sócios
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-navy/10 border border-navy/10">
            <div className="bg-paper p-10 flex gap-8">
              <img
                src={marly.url}
                alt="Marly Momesso Oliveira, contadora responsável"
                className="size-24 object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-2xl font-bold mb-1">
                  Marly Momesso Oliveira
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
                  Sócia-fundadora · Contadora responsável
                </p>
                <p className="text-sm text-navy/60 leading-relaxed mb-4">
                  Fundou o escritório em 1991 e responde tecnicamente pelos
                  trabalhos contábeis, com atuação em contabilidade empresarial,
                  planejamento tributário e consultoria.
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40">
                  {site.crc}
                </p>
              </div>
            </div>
            <div className="bg-paper p-10">
              <h3 className="font-display text-2xl font-bold mb-1">
                Natanael Oliveira
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
                Sócio-fundador
              </p>
              <p className="text-sm text-navy/60 leading-relaxed">
                Cofundador da Momesso &amp; Oliveira, atua na gestão do
                escritório e no relacionamento com os clientes atendidos ao
                longo de mais de três décadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
            04 — Diferenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-14 max-w-2xl">
            Por que escolher a Momesso &amp; Oliveira?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
            {differentials.map((item) => (
              <div
                key={item.code}
                className="bg-paper p-8 hover:bg-navy hover:text-white transition-colors duration-500 group"
              >
                <span className="font-mono text-xs text-gold block mb-10">
                  {item.code}
                </span>
                <h3 className="text-xl font-display font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy/60 group-hover:text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
              05 — Reputação
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Avaliação 5.0 no Google
            </h2>
            <p className="text-white/60 leading-relaxed max-w-lg mb-8">
              Empresas que estão conosco há décadas e novos clientes que chegam
              por indicação. A melhor prova do nosso trabalho é a permanência de
              quem nos contrata.
            </p>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-gold hover:text-white"
            >
              Ver avaliações no Google →
            </a>
          </div>
          <ul className="space-y-5">
            {[
              "Clientes atendidos desde a fundação, em 1991",
              "Atendimento a empresas em todo o território nacional",
              "Escritório parceiro certificado Conta Azul",
              "Responsabilidade técnica registrada no CRC-SP",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <Check size={18} className="text-gold shrink-0 mt-1" />
                <span className="text-white/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
                06 — Conteúdo
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Do nosso blog
              </h2>
            </div>
            <Link
              to="/blog"
              className="font-mono text-[11px] uppercase tracking-widest text-gold hover:text-navy shrink-0"
            >
              Ver todos os artigos →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="bg-paper p-8 group hover:bg-navy hover:text-white transition-colors duration-500"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-10">
                  {p.category}
                </span>
                <h3 className="text-xl font-display font-bold mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-navy/60 group-hover:text-white/60 leading-relaxed">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-px bg-navy/10 border border-navy/10">
            <div className="bg-paper p-10 lg:p-12">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
                07 — Contato
              </span>
              <h2 className="text-3xl font-display font-bold mb-8">
                Solicite seu diagnóstico
              </h2>
              <ContactForm />
            </div>

            <div className="bg-paper p-10 lg:p-12">
              <h2 className="text-3xl font-display font-bold mb-8">
                Estamos no coração de SBC
              </h2>
              <address className="not-italic space-y-4 mb-8">
                <p className="text-lg font-medium">{site.address.street}</p>
                <p className="text-navy/60">
                  {site.address.district}, {site.address.city} -{" "}
                  {site.address.state}
                  <br />
                  {site.address.zip}
                </p>
                <p className="text-navy/60">{site.hours}</p>
              </address>
              <div className="space-y-4 mb-8">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 text-navy hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  {site.phone}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-navy hover:text-gold transition-colors"
                >
                  <span className="font-mono text-xs text-gold">WAP</span>
                  {site.whatsapp}
                </a>
              </div>
              <div className="relative">
                <img
                  src={mapLocationAsset.url}
                  alt="Mapa de São Bernardo do Campo com destaque no bairro Anchieta"
                  className="w-full aspect-[16/10] object-cover grayscale"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-paper px-4 py-3 border border-navy/10 flex items-center gap-3">
                  <MapPin size={18} className="text-gold" />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Anchieta, SBC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
