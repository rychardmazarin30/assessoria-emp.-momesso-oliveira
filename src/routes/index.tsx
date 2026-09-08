import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Star, Phone, MapPin, ArrowRight, Plus } from "lucide-react";

import officeViewAsset from "../assets/office-view.jpg.asset.json";
import mapLocationAsset from "../assets/map-location.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Momesso & Oliveira | Assessoria Empresarial em SBC" },
      { name: "description", content: "Escritório de contabilidade e assessoria empresarial em São Bernardo do Campo. Avaliação 5.0 no Google. Gestão tributária, contábil, departamento pessoal e consultoria estratégica." },
      { property: "og:title", content: "Momesso & Oliveira | Assessoria Empresarial em SBC" },
      { property: "og:description", content: "Escritório de contabilidade e assessoria empresarial em São Bernardo do Campo. Avaliação 5.0 no Google." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    code: "01 / Fiscal",
    title: "Gestão Tributária",
    description:
      "Planejamento estratégico para otimização de impostos e conformidade rigorosa com a legislação vigente.",
  },
  {
    code: "02 / Societário",
    title: "Abertura & Consultoria",
    description:
      "Estruturação societária, fusões, aquisições e assessoria completa para novos empreendimentos.",
  },
  {
    code: "03 / DP",
    title: "Folha de Pagamento",
    description:
      "Processamento preciso de encargos trabalhistas, eSocial e gestão de benefícios para sua equipe.",
  },
];

const differentials = [
  {
    code: "01",
    title: "Desde 1991",
    description:
      "Mais de três décadas de atuação contábil, acompanhando empresas de todos os portes em cada fase do crescimento.",
  },
  {
    code: "02",
    title: "Atendimento nacional",
    description:
      "Sede em São Bernardo do Campo e atendimento a empresas em todo o território nacional, com rotinas 100% digitais.",
  },
  {
    code: "03",
    title: "Parceira Conta Azul",
    description:
      "Escritório parceiro certificado Conta Azul, com processos integrados e informação contábil em tempo real.",
  },
  {
    code: "04",
    title: "Da abertura ao planejamento",
    description:
      "Abertura de empresas de todas as naturezas, planejamento tributário e consultoria empresarial contínua.",
  },
];


function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-navy flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="size-6 border-2 border-gold rotate-45" />
    </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-paper text-navy font-body selection:bg-gold/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <LogoMark />
            <div className="leading-none">
              <span className="block font-mono text-[10px] tracking-tighter uppercase text-gold">
                Assessoria Empresarial
              </span>
              <span className="block font-display text-lg font-bold tracking-tight">
                Momesso & Oliveira
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-5 py-2.5 bg-navy text-white hover:bg-gold transition-all"
            >
              Falar Agora
            </a>
          </div>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-navy/5 bg-paper px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-mono text-xs uppercase tracking-widest hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="block w-fit px-5 py-2.5 bg-navy text-white font-mono text-xs uppercase tracking-widest"
            >
              Falar Agora
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block animate-reveal">
                [ S. Bernardo do Campo ]
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-balance mb-8 animate-reveal-1">
                A clareza que seu{" "}
                <span className="italic text-gold">patrimônio</span> exige.
              </h1>
              <p className="max-w-md text-lg text-navy/70 leading-relaxed mb-10 animate-reveal-2">
                Transformamos a complexidade contábil em alavanca estratégica
                para o seu negócio. Segurança jurídica e precisão fiscal de alto
                padrão.
              </p>
              <div className="flex flex-wrap gap-4 animate-reveal-3">
                <a
                  href="#contato"
                  className="px-8 py-4 bg-navy text-white font-mono text-xs uppercase tracking-widest flex items-center gap-3 group hover:pr-10 transition-all"
                >
                  Solicitar Proposta
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
                <div className="flex items-center gap-3 px-6 py-4 border border-navy/10">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-xs tracking-tighter">
                    5.0 GOOGLE RATING
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 animate-reveal-4">
              <div className="w-full aspect-[4/5] bg-navy/5 overflow-hidden">
                <img
                  src={officeViewAsset.url}
                  alt="Escritório executivo moderno da Momesso & Oliveira"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background Grid lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-navy/5 -z-10 hidden lg:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-navy/5 -z-10 hidden lg:block" />
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
                01 — Especialidades
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Soluções modulares para cada estágio do seu negócio
              </h2>
            </div>
            <div className="h-px flex-1 bg-gold/20 mx-10 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {services.map((service) => (
              <div
                key={service.code}
                className="bg-navy p-10 group hover:bg-gold transition-colors duration-500"
              >
                <span className="font-mono text-xs text-gold group-hover:text-navy mb-12 block">
                  {service.code}
                </span>
                <h3 className="text-2xl font-display mb-4">{service.title}</h3>
                <p className="text-white/60 group-hover:text-navy/80 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="h-8 w-8 border border-gold group-hover:border-navy grid place-items-center text-gold group-hover:text-navy">
                  <Plus size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
                02 — Por que nos escolher
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                Três décadas cuidando da contabilidade de quem cresce
              </h2>
              <p className="text-navy/70 leading-relaxed mb-10 max-w-md">
                Fundada em 1991 por Marly Momesso, a Momesso &amp; Oliveira
                atende empresas de todas as naturezas — da abertura ao
                planejamento tributário — com processos digitais e contato
                direto com quem entende do seu negócio.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-navy text-white">
                <div className="text-4xl font-display font-bold">5.0</div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-[10px] font-mono leading-tight tracking-widest uppercase">
                  Avaliação
                  <br />
                  Google
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-navy/10 border border-navy/10">
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
        </div>
      </section>


      {/* Contact/Location Section */}
      <section id="contato" className="py-24 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-px bg-navy/10">
            <div className="bg-paper p-12 lg:pr-24">
              <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-8 block">
                03 — Localização
              </span>
              <h2 className="text-3xl font-display font-bold mb-8">
                Estamos no coração de SBC
              </h2>
              <address className="not-italic space-y-4 mb-12">
                <p className="text-lg font-medium">
                  R. Olegário Herculano, 545
                </p>
                <p className="text-navy/60">
                  Anchieta, São Bernardo do Campo - SP
                  <br />
                  09732-570
                </p>
                <p className="text-navy/60">
                  Segunda a sexta, 08:00 – 18:00
                </p>
              </address>

              <div className="space-y-4">
                <a
                  href="tel:+551127584425"
                  className="flex items-center gap-4 text-navy hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  (11) 2758-4425
                </a>
                <a
                  href="https://wa.me/5511993266660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-navy hover:text-gold transition-colors"
                >
                  <span className="font-mono text-xs text-gold">WAP</span>
                  (11) 99326-6660
                </a>
              </div>
            </div>

            <div className="bg-navy/5 min-h-[400px] relative overflow-hidden group">
              <img
                src={mapLocationAsset.url}
                alt="Mapa de São Bernardo do Campo com destaque no bairro Anchieta"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-paper px-4 py-3 border border-navy/10 flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  Anchieta, SBC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-8 bg-gold flex items-center justify-center">
                  <div className="size-4 border-2 border-navy rotate-45" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight">
                  Momesso & Oliveira
                </span>
              </div>
              <p className="max-w-xs text-white/40 text-sm leading-relaxed">
                Excelência contábil e consultoria empresarial estratégica.
              </p>
              <div className="mt-6 space-y-1 text-white/40 text-xs">
                <p className="font-medium text-white/60">Responsabilidade técnica</p>
                <p>Marly Momesso Oliveira</p>
                <p>CRC-SP 1SP 163438/O-1</p>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">
                Navegação
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-white transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-6">
                Social
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="https://br.linkedin.com/company/momesso-oliveira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/momessoeoliveira.contabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?q=Momesso+%26+Oliveira+Assessoria+Empresarial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Google Business
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Momesso & Oliveira. Todos os direitos reservados.</p>
            <p>Assessoria Empresarial em SBC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
