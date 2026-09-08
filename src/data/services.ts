export type Service = {
  slug: string;
  code: string;
  title: string;
  short: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  benefits: string[];
  problems: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "contabilidade-empresarial",
    code: "01",
    title: "Contabilidade Empresarial",
    short:
      "Escrituração completa, balanços e relatórios gerenciais que mostram a real saúde do seu negócio.",
    intro:
      "Cuidamos da contabilidade da sua empresa do lançamento ao balanço, entregando números confiáveis e no prazo — e, mais importante, explicando o que eles significam para as suas decisões.",
    metaTitle: "Contabilidade Empresarial em São Bernardo do Campo",
    metaDescription:
      "Contabilidade empresarial completa em São Bernardo do Campo: escrituração, balanços, relatórios gerenciais e apoio na tomada de decisão. Fale com a Momesso & Oliveira.",
    benefits: [
      "Escrituração contábil e fiscal em dia, com rotinas digitais",
      "Balancetes e demonstrações contábeis com leitura gerencial",
      "Apoio para crédito bancário, licitações e captação",
      "Contato direto com o contador responsável pela sua conta",
    ],
    problems: [
      "Empresário sem visibilidade real de lucro, custo e margem",
      "Balanços atrasados que travam financiamento e negociações",
      "Informações contábeis desconectadas da gestão do dia a dia",
    ],
    faq: [
      {
        q: "Vocês atendem empresas de qualquer estado?",
        a: "Sim. Nossa sede fica em São Bernardo do Campo e atendemos empresas em todo o território nacional com processos 100% digitais.",
      },
      {
        q: "Como funciona a troca de contador?",
        a: "Solicitamos a documentação ao escritório anterior, conferimos as informações e assumimos as rotinas sem interromper as obrigações da empresa.",
      },
      {
        q: "Recebo relatórios com que frequência?",
        a: "Mensalmente, além de acesso às informações contábeis ao longo do mês e reuniões sempre que houver decisão importante a tomar.",
      },
    ],
  },
  {
    slug: "assessoria-fiscal",
    code: "02",
    title: "Assessoria Fiscal",
    short:
      "Apuração de impostos, obrigações acessórias e conformidade com a legislação federal, estadual e municipal.",
    intro:
      "Sua empresa em conformidade, sem sustos com o Fisco. Apuramos tributos, entregamos as obrigações acessórias e monitoramos mudanças na legislação que afetam o seu segmento.",
    metaTitle: "Assessoria Fiscal e Tributária em São Bernardo do Campo",
    metaDescription:
      "Assessoria fiscal para empresas em São Bernardo do Campo e ABC Paulista: apuração de impostos, obrigações acessórias e segurança fiscal. Fale com um especialista.",
    benefits: [
      "Apuração correta de impostos em todos os regimes",
      "Entrega de obrigações acessórias dentro do prazo",
      "Revisão de créditos e enquadramentos tributários",
      "Acompanhamento das mudanças da legislação e da Reforma Tributária",
    ],
    problems: [
      "Multas e notificações por atraso ou erro em declarações",
      "Impostos pagos a maior por enquadramento inadequado",
      "Insegurança sobre o que muda na legislação a cada ano",
    ],
    faq: [
      {
        q: "Vocês fazem revisão de impostos já pagos?",
        a: "Sim. Analisamos períodos anteriores para identificar recolhimentos indevidos e oportunidades legais de recuperação.",
      },
      {
        q: "Como fico sabendo dos vencimentos?",
        a: "Você recebe as guias e um calendário de obrigações com antecedência, sempre pelo mesmo canal de atendimento.",
      },
    ],
  },
  {
    slug: "departamento-pessoal",
    code: "03",
    title: "Departamento Pessoal",
    short:
      "Folha de pagamento, eSocial, admissões, férias e rescisões com precisão e segurança trabalhista.",
    intro:
      "Rotinas trabalhistas conduzidas com rigor técnico: folha, encargos, eSocial e todo o ciclo de vida do colaborador, reduzindo riscos trabalhistas para a sua empresa.",
    metaTitle: "Departamento Pessoal e Folha de Pagamento | Momesso & Oliveira",
    metaDescription:
      "Gestão de departamento pessoal em São Bernardo do Campo: folha de pagamento, eSocial, admissões, férias e rescisões com segurança trabalhista.",
    benefits: [
      "Folha de pagamento e encargos calculados com precisão",
      "eSocial, FGTS Digital e demais eventos em conformidade",
      "Admissões, férias, afastamentos e rescisões conduzidos ponta a ponta",
      "Orientação sobre convenções coletivas e benefícios",
    ],
    problems: [
      "Passivo trabalhista gerado por erros de cálculo ou prazo",
      "Dúvidas sobre convenção coletiva e enquadramento sindical",
      "Processos manuais e retrabalho na gestão de pessoas",
    ],
    faq: [
      {
        q: "Vocês orientam sobre contratação de CLT, PJ ou estágio?",
        a: "Sim. Avaliamos a atividade, o custo e o risco de cada formato antes da contratação.",
      },
      {
        q: "Quem responde as dúvidas do dia a dia?",
        a: "Você fala diretamente com a analista responsável pela sua empresa, sem central de atendimento.",
      },
    ],
  },
  {
    slug: "certificado-digital",
    code: "04",
    title: "Certificado Digital",
    short:
      "Emissão e renovação de certificado digital e-CNPJ e e-CPF com acompanhamento do começo ao fim.",
    intro:
      "Cuidamos da emissão e da renovação do certificado digital da sua empresa e dos sócios, orientando sobre o tipo mais adequado e acompanhando a validação.",
    metaTitle: "Certificado Digital e-CNPJ e e-CPF em São Bernardo do Campo",
    metaDescription:
      "Emissão e renovação de certificado digital e-CNPJ e e-CPF com apoio da Momesso & Oliveira em São Bernardo do Campo. Processo simples e acompanhado.",
    benefits: [
      "Orientação sobre o certificado adequado (A1 ou A3, e-CNPJ ou e-CPF)",
      "Agendamento e acompanhamento da videoconferência de validação",
      "Instalação e uso orientados junto ao seu time",
      "Aviso de vencimento antes que o certificado expire",
    ],
    problems: [
      "Certificado vencido travando emissão de nota e entrega de obrigações",
      "Dúvida sobre qual tipo de certificado contratar",
      "Processo de validação interrompido por documentação incorreta",
    ],
    faq: [
      {
        q: "Qual a diferença entre A1 e A3?",
        a: "O A1 é um arquivo instalado no computador com validade de um ano; o A3 fica em cartão ou token, com validade maior. A escolha depende de como sua equipe usa o certificado.",
      },
      {
        q: "Preciso ir presencialmente?",
        a: "Na maioria dos casos a validação é feita por videoconferência, sem deslocamento.",
      },
    ],
  },
  {
    slug: "planejamento-tributario",
    code: "05",
    title: "Planejamento Tributário",
    short:
      "Análise de regimes e cenários para pagar exatamente o imposto devido — nem mais, nem menos.",
    intro:
      "Estudamos o seu faturamento, a sua margem e a sua folha para definir o enquadramento mais eficiente dentro da lei, com projeções claras de economia e de risco.",
    metaTitle: "Planejamento Tributário para Empresas | Momesso & Oliveira",
    metaDescription:
      "Planejamento tributário em São Bernardo do Campo: comparação entre Simples Nacional, Lucro Presumido e Lucro Real com projeção de economia legal.",
    benefits: [
      "Comparativo entre Simples Nacional, Lucro Presumido e Lucro Real",
      "Projeção de carga tributária por cenário de faturamento",
      "Revisão de enquadramento e de atividades no CNAE",
      "Preparação da empresa para a Reforma Tributária",
    ],
    problems: [
      "Empresa no regime errado pagando imposto acima do necessário",
      "Crescimento do faturamento sem revisão do enquadramento",
      "Decisões tributárias tomadas sem número na mesa",
    ],
    faq: [
      {
        q: "Quando vale a pena revisar o regime tributário?",
        a: "Sempre no fim do ano, antes da opção anual, e também quando a empresa muda de porte, de atividade ou de estrutura de custos.",
      },
      {
        q: "Planejamento tributário é legal?",
        a: "Sim. Trata-se de escolher, dentro das opções previstas na legislação, aquela que resulta em menor carga tributária — diferente de sonegação.",
      },
    ],
  },
  {
    slug: "abertura-de-empresas",
    code: "06",
    title: "Abertura de Empresas",
    short:
      "Da escolha do CNAE ao alvará: abrimos empresas de todas as naturezas jurídicas.",
    intro:
      "Conduzimos todo o processo de abertura: definição de natureza jurídica, CNAE, regime tributário, contrato social, registros e licenças, com acompanhamento até a primeira nota fiscal.",
    metaTitle: "Abrir Empresa em São Bernardo do Campo | Momesso & Oliveira",
    metaDescription:
      "Abertura de empresas em São Bernardo do Campo e ABC Paulista: CNAE, contrato social, registros, alvará e regime tributário com acompanhamento completo.",
    benefits: [
      "Escolha correta da natureza jurídica e do CNAE",
      "Contrato social, registro na Junta Comercial e CNPJ",
      "Inscrições estadual e municipal, alvará e licenças",
      "Definição do regime tributário desde o primeiro dia",
    ],
    problems: [
      "Empresa aberta com CNAE errado, gerando imposto indevido",
      "Processo travado por exigência de documentação ou de licenciamento",
      "Início de operação sem estrutura fiscal e contábil definida",
    ],
    faq: [
      {
        q: "Quanto tempo leva para abrir uma empresa?",
        a: "O prazo varia conforme a atividade e o município. Atividades sem licenciamento específico costumam ser mais rápidas; informamos o prazo estimado logo na primeira conversa.",
      },
      {
        q: "Vocês abrem empresa fora de São Bernardo do Campo?",
        a: "Sim, atendemos empresas em todo o Brasil.",
      },
    ],
  },
  {
    slug: "regularizacao-de-empresas",
    code: "07",
    title: "Regularização de Empresas",
    short:
      "Colocamos em dia empresas com pendências fiscais, contábeis, trabalhistas ou cadastrais.",
    intro:
      "Diagnosticamos as pendências da sua empresa junto aos órgãos, elaboramos o plano de regularização e executamos as entregas necessárias para devolver a certidão negativa.",
    metaTitle: "Regularização de Empresas e Certidões | Momesso & Oliveira",
    metaDescription:
      "Regularização de empresas com pendências fiscais, contábeis e cadastrais em São Bernardo do Campo. Diagnóstico, plano de ação e certidões em dia.",
    benefits: [
      "Diagnóstico completo de pendências em cada órgão",
      "Entrega de declarações e escriturações atrasadas",
      "Parcelamentos e negociação de débitos",
      "Retomada das certidões negativas",
    ],
    problems: [
      "CNPJ inapto ou baixado por falta de entregas",
      "Certidão positiva impedindo contratos e licitações",
      "Débitos acumulados sem plano de regularização",
    ],
    faq: [
      {
        q: "Minha empresa está parada há anos. Ainda dá para regularizar?",
        a: "Na maioria dos casos, sim. Levantamos as obrigações pendentes e apresentamos o custo e o prazo antes de iniciar.",
      },
      {
        q: "Vocês também fazem baixa de empresa?",
        a: "Sim, conduzimos o encerramento regular, incluindo as entregas finais exigidas.",
      },
    ],
  },
  {
    slug: "consultoria-empresarial",
    code: "08",
    title: "Consultoria Empresarial",
    short:
      "Apoio estratégico na gestão: custos, precificação, societário e decisões de crescimento.",
    intro:
      "Mais do que entregar números, discutimos com você o que fazer com eles: estrutura societária, custos, precificação, distribuição de lucros e preparação para novos ciclos.",
    metaTitle: "Consultoria Empresarial e Contábil | Momesso & Oliveira",
    metaDescription:
      "Consultoria empresarial em São Bernardo do Campo: estrutura societária, custos, precificação e decisões de crescimento com base contábil sólida.",
    benefits: [
      "Análise de custos, margem e precificação",
      "Estruturação societária, entrada e saída de sócios",
      "Planejamento de distribuição de lucros e pró-labore",
      "Reuniões periódicas de acompanhamento com os sócios",
    ],
    problems: [
      "Crescimento de faturamento sem crescimento de lucro",
      "Sociedade sem regras claras para decisões e retiradas",
      "Falta de um parceiro para discutir os números do negócio",
    ],
    faq: [
      {
        q: "A consultoria é separada da contabilidade?",
        a: "Ela pode ser contratada junto com a contabilidade ou de forma pontual, para um projeto específico.",
      },
      {
        q: "Como começa o trabalho?",
        a: "Com um diagnóstico inicial gratuito, em que entendemos o momento da empresa e apontamos as prioridades.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
