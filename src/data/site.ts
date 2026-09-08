export const site = {
  name: "Momesso & Oliveira",
  legalName: "Momesso & Oliveira Assessoria Empresarial",
  url: "https://momesso-oliveira-contabil.lovable.app",
  phone: "(11) 2758-4425",
  phoneHref: "tel:+551127584425",
  whatsapp: "(11) 99326-6660",
  whatsappNumber: "5511993266660",
  address: {
    street: "R. Olegário Herculano, 545",
    district: "Anchieta",
    city: "São Bernardo do Campo",
    state: "SP",
    zip: "09732-570",
  },
  hours: "Segunda a sexta, 08:00 – 18:00",
  founded: 1991,
  social: {
    linkedin: "https://br.linkedin.com/company/momesso-oliveira",
    instagram: "https://www.instagram.com/momessoeoliveira.contabilidade/",
    google:
      "https://www.google.com/search?q=Momesso+%26+Oliveira+Assessoria+Empresarial",
  },
  crc: "CRC-SP 1SP 163438/O-1",
};

export const yearsInBusiness = new Date().getFullYear() - site.founded;

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Olá! Vim pelo site da Momesso & Oliveira e gostaria de falar com um especialista.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "A empresa", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
] as const;
