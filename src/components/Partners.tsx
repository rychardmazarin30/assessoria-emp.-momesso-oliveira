import marly from "../assets/marly.jpg.asset.json";
import nathaly from "../assets/nathaly.jpg.asset.json";
import nayara from "../assets/nayara.jpg.asset.json";
import { site } from "@/data/site";

const partners = [
  {
    name: "Marly Momesso",
    role: "Sócia-fundadora · Contadora responsável",
    text: `Fundou o escritório em ${site.founded} e responde tecnicamente pelos trabalhos contábeis, com atuação em contabilidade empresarial, planejamento tributário e consultoria a empresas de todos os portes.`,
    note: site.crc,
    photo: marly.url,
  },
  {
    name: "Natanael Oliveira",
    role: "Sócio-proprietário",
    text: "Cofundador da Momesso & Oliveira ao lado de Marly. Acompanhou de perto as empresas atendidas ao longo de mais de três décadas e hoje vive o período de transição para a aposentadoria.",
  },
  {
    name: "Nayara Momesso",
    role: "Nova geração · Futura sucessora",
    text: "Filha dos fundadores, integra a nova geração da família à frente das rotinas do escritório, unindo tecnologia e o atendimento próximo que sempre marcou a casa.",
    photo: nayara.url,
  },
  {
    name: "Nathaly Momesso",
    role: "Nova geração · Futura sucessora",
    text: "Filha dos fundadores, atua na continuidade do trabalho da família, dando sequência aos valores e à relação de longo prazo com os clientes.",
    photo: nathaly.url,
  },
];

export function Partners() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
      {partners.map((p) => (
        <div key={p.name} className="bg-paper p-8">
          {p.photo ? (
            <img
              src={p.photo}
              alt={`${p.name}, ${p.role}`}
              className="size-20 object-cover mb-6"
              loading="lazy"
            />
          ) : (
            <div className="size-20 border border-gold/40 mb-6 grid place-items-center font-display text-2xl text-gold">
              {p.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
          <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
          <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
            {p.role}
          </p>
          <p className="text-sm text-navy/60 leading-relaxed">{p.text}</p>
          {p.note && (
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-navy/40">
              {p.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
