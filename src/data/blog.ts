export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const categories = [
  "Simples Nacional",
  "Lucro Presumido",
  "Reforma Tributária",
  "Certificado Digital",
  "Abertura de Empresas",
  "Departamento Pessoal",
  "Planejamento Tributário",
];

export const posts: Post[] = [
  {
    slug: "simples-nacional-ou-lucro-presumido",
    category: "Planejamento Tributário",
    title: "Simples Nacional ou Lucro Presumido: como decidir?",
    excerpt:
      "Faturamento, margem, folha de pagamento e perfil do cliente mudam completamente a conta. Veja o que analisar antes da opção anual.",
    date: "2026-09-08",
    readingTime: "5 min",
    body: [
      {
        paragraphs: [
          "A escolha do regime tributário é uma das decisões que mais impactam o resultado de uma empresa — e quase nunca deve ser tomada apenas pelo tamanho do faturamento. Dois negócios com a mesma receita podem ter cargas tributárias muito diferentes conforme a atividade, a margem de lucro e o peso da folha de pagamento.",
        ],
      },
      {
        heading: "O que pesa na comparação",
        paragraphs: [
          "Antes de optar, é preciso colocar na mesa alguns elementos que mudam o resultado da conta:",
        ],
        bullets: [
          "Atividade exercida e o anexo do Simples Nacional aplicável",
          "Proporção entre folha de pagamento e receita bruta",
          "Margem de lucro efetiva do negócio",
          "Perfil dos clientes: pessoa física ou empresas que aproveitam créditos",
          "Projeção de crescimento para os próximos doze meses",
        ],
      },
      {
        heading: "Quando revisar",
        paragraphs: [
          "A opção pelo Simples Nacional é feita no início do ano-calendário, o que torna o último trimestre o momento natural para a análise. Fora dessa janela, vale revisar sempre que a empresa muda de porte, inclui novas atividades, contrata equipe ou altera sua estrutura de custos.",
          "Na Momesso & Oliveira, essa análise é feita com projeção por cenário: mostramos quanto a empresa pagaria em cada regime, para que a decisão seja tomada com número na mesa e não por intuição.",
        ],
      },
    ],
  },
  {
    slug: "abrir-empresa-passo-a-passo",
    category: "Abertura de Empresas",
    title: "Abrir empresa em São Bernardo do Campo: o passo a passo",
    excerpt:
      "Da definição da natureza jurídica ao alvará municipal: as etapas do processo e os pontos que costumam atrasar a abertura.",
    date: "2026-09-08",
    readingTime: "4 min",
    body: [
      {
        paragraphs: [
          "Abrir uma empresa envolve decisões que acompanham o negócio por anos. Erros na definição do CNAE ou da natureza jurídica costumam aparecer meses depois, na forma de imposto pago a mais ou de impedimento para emitir nota fiscal.",
        ],
      },
      {
        heading: "As etapas do processo",
        paragraphs: ["De forma geral, o caminho é este:"],
        bullets: [
          "Definição da natureza jurídica e da composição societária",
          "Escolha das atividades (CNAE) e consulta de viabilidade no município",
          "Elaboração e registro do contrato social na Junta Comercial",
          "Obtenção do CNPJ e das inscrições estadual e municipal",
          "Alvará de funcionamento e licenças específicas da atividade",
          "Definição do regime tributário e emissão do certificado digital",
        ],
      },
      {
        heading: "O que costuma atrasar",
        paragraphs: [
          "Consulta de viabilidade negada pelo endereço, atividade sujeita a licenciamento sanitário ou ambiental e documentação societária incompleta são as causas mais frequentes de atraso. Antecipar esses pontos encurta bastante o processo.",
          "Acompanhamos a abertura do início até a primeira nota fiscal emitida, incluindo a orientação tributária dos primeiros meses.",
        ],
      },
    ],
  },
  {
    slug: "certificado-digital-a1-ou-a3",
    category: "Certificado Digital",
    title: "Certificado digital A1 ou A3: qual escolher?",
    excerpt:
      "As diferenças práticas entre os dois formatos e como isso afeta a rotina de quem emite nota e assina documentos.",
    date: "2026-09-08",
    readingTime: "3 min",
    body: [
      {
        paragraphs: [
          "O certificado digital é o que permite à empresa emitir notas fiscais, assinar documentos e cumprir obrigações junto aos órgãos públicos. A dúvida mais comum é entre os formatos A1 e A3.",
        ],
      },
      {
        heading: "A1",
        paragraphs: [
          "É um arquivo instalado no computador ou no servidor, com validade de um ano. Permite uso simultâneo por sistemas e por mais de uma pessoa da equipe, o que costuma ser prático para empresas que emitem nota em volume.",
        ],
      },
      {
        heading: "A3",
        paragraphs: [
          "Fica armazenado em cartão ou token, com validade maior. Exige a mídia física conectada no momento do uso, o que aumenta o controle sobre quem assina, mas limita o uso simultâneo.",
        ],
      },
      {
        heading: "Como decidir",
        paragraphs: [
          "Na prática, a escolha depende de quantas pessoas precisam usar o certificado, de quais sistemas ele será integrado e do nível de controle desejado. Orientamos essa definição e acompanhamos a emissão e a validação por videoconferência.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
