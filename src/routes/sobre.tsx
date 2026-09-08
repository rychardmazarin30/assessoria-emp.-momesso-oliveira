import { createFileRoute } from "@tanstack/react-router";

import { site, yearsInBusiness } from "@/data/site";
import { CtaBand } from "@/components/CtaBand";
import familia1 from "../assets/familia-1.jpg.asset.json";
import familia2 from "../assets/familia-2.jpg.asset.json";
import marly from "../assets/marly.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "A empresa | Momesso & Oliveira Assessoria Empresarial" },
      {
        name: "description",
        content:
          "Uma história construída em família: fundada em 1991 por Marly Momesso e Natanael Oliveira, a Momesso & Oliveira une tradição contábil e a nova geração da família.",
      },
      {
        property: "og:title",
        content: "Uma história construída em família | Momesso & Oliveira",
      },
      {
        property: "og:description",
        content:
          "Mais de 30 anos de contabilidade em São Bernardo do Campo, com a continuidade da nova geração da família.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${site.url}/sobre` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/sobre` }],
  }),
});

const timeline = [
  {
    year: "1991",
    title: "O começo",
    text: "Marly Momesso e Natanael Oliveira fundam o escritório em São Bernardo do Campo, atendendo pequenas empresas da região com contato direto e pessoal.",
  },
  {
    year: "Anos 2000",
    title: "Consolidação no ABC",
    text: "A carteira cresce com indústrias, comércios e prestadores de serviço do ABC Paulista, e o escritório amplia as áreas fiscal e de departamento pessoal.",
  },
  {
    year: "Anos 2010",
    title: "Digitalização das rotinas",
    text: "Adoção de escrituração digital, certificado digital e integrações com sistemas de gestão — incluindo a parceria certificada com a Conta Azul.",
  },
  {
    year: "Hoje",
    title: "A nova geração",
    text: "Os filhos assumem áreas do escritório ao lado dos fundadores, unindo tecnologia e consultoria estratégica à relação de confiança construída ao longo de décadas.",
  },
];

const values = [
  {
    title: "Relação de longo prazo",
    text: "Clientes que estão conosco há décadas. Não trabalhamos por volume, e sim por continuidade.",
  },
  {
    title: "Atendimento próximo",
    text: "Você fala com quem cuida da sua empresa, não com uma central de atendimento.",
  },
  {
    title: "Rigor técnico",
    text: "Responsabilidade técnica registrada no CRC-SP e atualização constante frente às mudanças da legislação.",
  },
  {
    title: "Tecnologia com gente",
    text: "Processos digitais para ganhar tempo — e tempo humano para discutir o que importa.",
  },
];

function SobrePage() {
  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
              [ Desde {site.founded} ]
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] text-balance mb-8">
              Uma história construída em{" "}
              <span className="italic text-gold">família</span>.
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed max-w-lg">
              A Momesso &amp; Oliveira nasceu em {site.founded}, em São Bernardo
              do Campo, do trabalho de Marly Momesso e Natanael Oliveira. Mais de{" "}
              {yearsInBusiness} anos depois, a nova geração da família segue à
              frente do escritório, cuidando das mesmas empresas — e de muitas
              outras que chegaram pelo caminho.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={familia2.url}
              alt="Família fundadora e equipe da Momesso & Oliveira em São Bernardo do Campo"
              className="w-full aspect-[4/3] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
            Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 max-w-2xl">
            Três décadas acompanhando o crescimento de empresas
          </h2>
          <ol className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {timeline.map((item) => (
              <li key={item.year} className="bg-navy p-8">
                <span className="font-mono text-xs text-gold block mb-10">
                  {item.year}
                </span>
                <h3 className="text-xl font-display font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={familia1.url}
            alt="Sócios e equipe da Momesso & Oliveira Assessoria Empresarial"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
              Nossos valores
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
              O que se mantém desde o primeiro cliente
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-navy/60 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4 block">
            Quem conduz
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
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
                  Fundou o escritório em {site.founded} e responde tecnicamente
                  pelos trabalhos contábeis. Atua com contabilidade empresarial,
                  planejamento tributário e consultoria a empresas de todos os
                  portes.
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
                escritório e no relacionamento com os clientes, acompanhando de
                perto as empresas atendidas ao longo de mais de três décadas.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-navy/40 font-mono uppercase tracking-widest">
            Nova geração da família integrada às áreas contábil, fiscal e de
            departamento pessoal.
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
