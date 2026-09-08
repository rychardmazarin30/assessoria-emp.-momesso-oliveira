import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";

import { site, whatsappLink } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import mapLocationAsset from "../assets/map-location.jpg.asset.json";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato | Momesso & Oliveira Assessoria Empresarial" },
      {
        name: "description",
        content:
          "Fale com a Momesso & Oliveira em São Bernardo do Campo: telefone, WhatsApp, endereço no bairro Anchieta e formulário para solicitar diagnóstico contábil.",
      },
      { property: "og:title", content: "Contato | Momesso & Oliveira" },
      {
        property: "og:description",
        content:
          "Telefone, WhatsApp e endereço do escritório em São Bernardo do Campo. Solicite um diagnóstico contábil sem compromisso.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/contato` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contato` }],
  }),
});

function ContatoPage() {
  return (
    <div>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
            [ Contato ]
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-3xl">
            Vamos conversar sobre a sua{" "}
            <span className="italic text-gold">empresa</span>.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-px bg-navy/10 border border-navy/10">
          <div className="bg-paper p-10 lg:p-12">
            <h2 className="font-display text-2xl font-bold mb-8">
              Solicitar diagnóstico
            </h2>
            <ContactForm />
          </div>
          <div className="bg-navy text-white p-10 lg:p-12">
            <h2 className="font-display text-2xl font-bold mb-8">
              Onde estamos
            </h2>
            <address className="not-italic space-y-6 text-white/70">
              <p className="flex gap-4">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.city} -{" "}
                  {site.address.state}
                  <br />
                  {site.address.zip}
                </span>
              </p>
              <p className="flex gap-4">
                <Clock size={18} className="text-gold shrink-0 mt-1" />
                {site.hours}
              </p>
              <p className="flex gap-4">
                <Phone size={18} className="text-gold shrink-0 mt-1" />
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p className="flex gap-4">
                <span className="font-mono text-xs text-gold mt-1">WAP</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {site.whatsapp}
                </a>
              </p>
            </address>
            <img
              src={mapLocationAsset.url}
              alt="Mapa de São Bernardo do Campo com destaque no bairro Anchieta"
              className="mt-10 w-full aspect-[16/9] object-cover grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
