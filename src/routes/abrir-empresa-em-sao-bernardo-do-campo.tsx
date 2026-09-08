import { createFileRoute, Link } from "@tanstack/react-router";

import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

const url = `${site.url}/abrir-empresa-em-sao-bernardo-do-campo`;

const faq = [
  {
    q: "Quanto tempo leva para abrir uma empresa em São Bernardo do Campo?",
    a: "Depende da atividade e das licenças exigidas. Atividades sem licenciamento específico costumam ser concluídas em poucos dias após a aprovação da viabilidade; atividades com exigência sanitária ou ambiental levam mais tempo.",
  },
  {
    q: "Quais documentos preciso separar?",
    a: "Documento de identidade e CPF dos sócios, comprovante de residência, comprovante do endereço da empresa (IPTU ou contrato de locação) e a definição das atividades que serão exercidas.",
  },
  {
    q: "Posso abrir a empresa no meu endereço residencial?",
    a: "Em muitos casos sim, dependendo da atividade e das regras de zoneamento do município. Verificamos a viabilidade antes de iniciar o processo.",
  },
  {
    q: "Já saio do processo com o regime tributário definido?",
    a: "Sim. A definição do regime faz parte da abertura, com comparação entre Simples Nacional, Lucro Presumido e Lucro Real conforme a projeção do seu negócio.",
  },
];

export const Route = createFileRoute("/abrir-empresa-em-sao-bernardo-do-campo")({
  component: AbrirEmpresaPage,
  head: () => ({
    meta: [
      { title: "Abrir Empresa em São Bernardo do Campo | Momesso & Oliveira" },
      {
        name: "description",
        content:
          "Abertura de empresas em São Bernardo do Campo e ABC Paulista: CNAE, contrato social, CNPJ, inscrições, alvará e regime tributário com acompanhamento completo.",
      },
      {
        property: "og:title",
        content: "Abrir Empresa em São Bernardo do Campo | Momesso & Oliveira",
      },
      {
        property: "og:description",
        content:
          "Abra sua empresa com quem faz isso desde 1991 em São Bernardo do Campo. Processo acompanhado do CNAE à primeira nota fiscal.",
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
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const steps = [
  "Consulta de viabilidade do endereço e da atividade no município",
  "Definição da natureza jurídica, do CNAE e do contrato social",
  "Registro na Junta Comercial e obtenção do CNPJ",
  "Inscrições estadual e municipal, alvará e licenças",
  "Escolha do regime tributário e emissão do certificado digital",
  "Orientação para a primeira nota fiscal e rotinas iniciais",
];

function AbrirEmpresaPage() {
  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
            [ Abertura de empresas · SBC ]
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-4xl mb-8">
            Abrir empresa em São Bernardo do Campo, do{" "}
            <span className="italic text-gold">CNAE ao alvará</span>.
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl leading-relaxed">
            Conduzimos todo o processo de abertura para empresários de São
            Bernardo do Campo e região, com as decisões tributárias definidas
            desde o primeiro dia — para que sua empresa não comece pagando
            imposto a mais.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-12">
            Como funciona
          </h2>
          <ol className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {steps.map((s, i) => (
              <li key={s} className="bg-navy p-8">
                <span className="font-mono text-xs text-gold block mb-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/80 leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-display font-bold mb-8">
              Perguntas frequentes
            </h2>
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {faq.map((item) => (
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
            <Link
              to="/servicos/$slug"
              params={{ slug: "abertura-de-empresas" }}
              className="inline-block mt-8 font-mono text-[10px] uppercase tracking-widest text-gold hover:text-navy"
            >
              Ver o serviço de abertura de empresas →
            </Link>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-display font-bold mb-8">
              Comece por aqui
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
