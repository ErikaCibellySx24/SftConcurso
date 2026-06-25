const materias = {
  "Língua Portuguesa": {
    peso: 12,
    assuntos: [
      {
        nome: "Compreensão e Interpretação de Texto",
        prioridade: "Alta",
        topicos: [
          "Ideia principal e secundária",
          "Inferência textual",
          "Interpretação literal e crítica",
          "Tipos de discurso",
          "Funções da linguagem",
          "Gêneros textuais",
          "Coesão e coerência"
        ]
      },
      {
        nome: "Ortografia e Acentuação",
        prioridade: "Alta",
        topicos: [
          "Emprego das letras",
          "Regras de acentuação",
          "Novo acordo ortográfico",
          "Hífen"
        ]
      },
      {
        nome: "Morfologia",
        prioridade: "Alta",
        topicos: [
          "Classes de palavras",
          "Substantivo",
          "Adjetivo",
          "Verbo",
          "Advérbio",
          "Pronome",
          "Preposição",
          "Conjunção",
          "Interjeição"
        ]
      },
      {
        nome: "Sintaxe",
        prioridade: "Alta",
        topicos: [
          "Termos essenciais da oração",
          "Termos integrantes",
          "Termos acessórios",
          "Período simples e composto",
          "Coordenação e subordinação",
          "Orações reduzidas"
        ]
      },
      {
        nome: "Concordância e Regência",
        prioridade: "Alta",
        topicos: [
          "Concordância verbal",
          "Concordância nominal",
          "Regência verbal",
          "Regência nominal",
          "Crase"
        ]
      },
      {
        nome: "Pontuação e Semântica",
        prioridade: "Média",
        topicos: [
          "Uso da vírgula",
          "Ponto e vírgula",
          "Dois pontos",
          "Ambiguidade",
          "Sinonímia e antonímia",
          "Sentido denotativo e conotativo"
        ]
      }
    ]
  },

  "Raciocínio Lógico": {
    peso: 10,
    assuntos: [
      {
        nome: "Lógica Proposicional",
        prioridade: "Alta",
        topicos: [
          "Proposições simples e compostas",
          "Conectivos lógicos",
          "Negação de proposições",
          "Tabela verdade",
          "Tautologia e contradição"
        ]
      },
      {
        nome: "Argumentação Lógica",
        prioridade: "Alta",
        topicos: [
          "Validade de argumentos",
          "Inferência lógica",
          "Silogismos"
        ]
      },
      {
        nome: "Matemática Básica",
        prioridade: "Alta",
        topicos: [
          "Porcentagem",
          "Regra de três",
          "Razão e proporção",
          "Média aritmética",
          "Juros simples"
        ]
      },
      {
        nome: "Sequências e Problemas",
        prioridade: "Alta",
        topicos: [
          "Sequências numéricas",
          "Sequências lógicas",
          "Problemas de contagem",
          "Análise combinatória básica",
          "Probabilidade básica"
        ]
      }
    ]
  },

  "Informática": {
    peso: 8,
    assuntos: [
      {
        nome: "Conceitos Básicos",
        prioridade: "Alta",
        topicos: [
          "Hardware e software",
          "Sistemas operacionais",
          "Arquitetura de computadores"
        ]
      },
      {
        nome: "Windows",
        prioridade: "Alta",
        topicos: [
          "Área de trabalho",
          "Gerenciamento de arquivos",
          "Painel de controle",
          "Configurações do sistema"
        ]
      },
      {
        nome: "Pacote Office",
        prioridade: "Alta",
        topicos: [
          "Word: formatação de texto",
          "Excel: fórmulas básicas",
          "PowerPoint: apresentações"
        ]
      },
      {
        nome: "Internet e Redes",
        prioridade: "Alta",
        topicos: [
          "Navegadores",
          "E-mail",
          "Protocolos básicos",
          "Redes locais e internet"
        ]
      },
      {
        nome: "Segurança da Informação",
        prioridade: "Alta",
        topicos: [
          "Malwares",
          "Phishing",
          "Backup",
          "Antivírus",
          "Criptografia básica"
        ]
      }
    ]
  },

  "Direito Constitucional": {
    peso: 15,
    assuntos: [
      {
        nome: "Princípios Fundamentais",
        prioridade: "Alta",
        topicos: [
          "Soberania",
          "Cidadania",
          "Dignidade da pessoa humana",
          "Valores sociais do trabalho e da livre iniciativa",
          "Pluralismo político"
        ]
      },
      {
        nome: "Direitos e Garantias Fundamentais",
        prioridade: "Alta",
        topicos: [
          "Direitos individuais e coletivos",
          "Direitos sociais",
          "Direitos de nacionalidade",
          "Direitos políticos",
          "Remédios constitucionais",
          "Habeas corpus",
          "Habeas data",
          "Mandado de segurança",
          "Mandado de injunção",
          "Ação popular"
        ]
      },
      {
        nome: "Organização do Estado",
        prioridade: "Alta",
        topicos: [
          "União, estados e municípios",
          "Competências administrativas",
          "Competências legislativas",
          "Intervenção federal e estadual"
        ]
      },
      {
        nome: "Administração Pública (CF/88)",
        prioridade: "Alta",
        topicos: [
          "Princípios do art. 37",
          "Concurso público",
          "Cargos, empregos e funções",
          "Acumulação de cargos",
          "Responsabilidade do servidor"
        ]
      },
      {
        nome: "Segurança Pública",
        prioridade: "Altíssima",
        topicos: [
          "Artigo 144 da CF",
          "Polícia Federal",
          "Polícia Rodoviária Federal",
          "Polícias Civis",
          "Polícias Militares",
          "Corpos de Bombeiros",
          "Função da Polícia Judiciária"
        ]
      },
      {
        nome: "Poderes da República",
        prioridade: "Média",
        topicos: [
          "Poder Legislativo",
          "Poder Executivo",
          "Poder Judiciário",
          "Funções essenciais à justiça"
        ]
      },
      {
        nome: "Controle de Constitucionalidade",
        prioridade: "Média",
        topicos: [
          "Controle difuso",
          "Controle concentrado",
          "ADI",
          "ADC",
          "ADPF",
          "Efeitos das decisões"
        ]
      }
    ]
  },

  "Direito Administrativo": {
    peso: 14,
    assuntos: [
      {
        nome: "Princípios da Administração Pública",
        prioridade: "Alta",
        topicos: [
          "Legalidade",
          "Impessoalidade",
          "Moralidade",
          "Publicidade",
          "Eficiência",
          "Supremacia do interesse público",
          "Indisponibilidade do interesse público"
        ]
      },
      {
        nome: "Poderes Administrativos",
        prioridade: "Alta",
        topicos: [
          "Poder hierárquico",
          "Poder disciplinar",
          "Poder regulamentar",
          "Poder de polícia",
          "Abuso de poder"
        ]
      },
      {
        nome: "Atos Administrativos",
        prioridade: "Alta",
        topicos: [
          "Conceito e requisitos",
          "Competência",
          "Finalidade",
          "Forma",
          "Motivo",
          "Objeto",
          "Atributos",
          "Anulação e revogação"
        ]
      },
      {
        nome: "Agentes Públicos",
        prioridade: "Alta",
        topicos: [
          "Servidores públicos",
          "Estatutários",
          "Celetistas",
          "Temporários",
          "Estágio probatório",
          "Estabilidade",
          "Responsabilidade do servidor"
        ]
      },
      {
        nome: "Responsabilidade Civil do Estado",
        prioridade: "Alta",
        topicos: [
          "Teoria do risco administrativo",
          "Responsabilidade objetiva",
          "Responsabilidade subjetiva",
          "Excludentes de responsabilidade"
        ]
      },
      {
        nome: "Licitações e Contratos",
        prioridade: "Altíssima",
        topicos: [
          "Lei 14.133/21",
          "Modalidades de licitação",
          "Dispensa e inexigibilidade",
          "Fases da licitação",
          "Contratos administrativos",
          "Fiscalização contratual"
        ]
      },
      {
        nome: "Improbidade Administrativa",
        prioridade: "Alta",
        topicos: [
          "Lei 8.429/92",
          "Atos de improbidade",
          "Enriquecimento ilícito",
          "Dano ao erário",
          "Sanções"
        ]
      }
    ]
  },

  "Direito Penal": {
    peso: 18,
    assuntos: [
      {
        nome: "Aplicação da Lei Penal",
        prioridade: "Alta",
        topicos: [
          "Princípio da legalidade",
          "Anterioridade da lei penal",
          "Lei penal no tempo",
          "Lei penal no espaço",
          "Tempo do crime",
          "Lugar do crime",
          "Extraterritorialidade",
          "Contagem de prazos penais"
        ]
      },
      {
        nome: "Teoria do Crime",
        prioridade: "Altíssima",
        topicos: [
          "Conceito de crime",
          "Fato típico",
          "Conduta (ação e omissão)",
          "Resultado",
          "Nexo causal",
          "Tipicidade",
          "Tipicidade formal e material"
        ]
      },
      {
        nome: "Dolo e Culpa",
        prioridade: "Altíssima",
        topicos: [
          "Dolo direto",
          "Dolo eventual",
          "Culpa consciente",
          "Culpa inconsciente",
          "Imprudência, negligência e imperícia"
        ]
      },
      {
        nome: "Ilicitude",
        prioridade: "Altíssima",
        topicos: [
          "Estado de necessidade",
          "Legítima defesa",
          "Estrito cumprimento do dever legal",
          "Exercício regular de direito"
        ]
      },
      {
        nome: "Culpabilidade",
        prioridade: "Alta",
        topicos: [
          "Imputabilidade penal",
          "Inimputabilidade",
          "Potencial consciência da ilicitude",
          "Exigibilidade de conduta diversa",
          "Erro de proibição",
          "Coação moral irresistível"
        ]
      },
      {
        nome: "Concurso de Pessoas",
        prioridade: "Alta",
        topicos: [
          "Autor e partícipe",
          "Teoria monista",
          "Participação de menor importância",
          "Circunstâncias incomunicáveis"
        ]
      },
      {
        nome: "Penas",
        prioridade: "Alta",
        topicos: [
          "Espécies de penas",
          "Pena privativa de liberdade",
          "Pena restritiva de direitos",
          "Multa",
          "Regimes de cumprimento",
          "Fixação da pena",
          "Circunstâncias judiciais",
          "Agravantes e atenuantes"
        ]
      },
      {
        nome: "Extinção da Punibilidade",
        prioridade: "Alta",
        topicos: [
          "Prescrição",
          "Decadência",
          "Perempção",
          "Anistia",
          "Grauça",
          "Indulto",
          "Morte do agente"
        ]
      },
      {
        nome: "Crimes em Espécie",
        prioridade: "Altíssima",
        topicos: [
          "Homicídio",
          "Lesão corporal",
          "Aborto",
          "Furto",
          "Roubo",
          "Extorsão",
          "Estelionato",
          "Receptação",
          "Dano",
          "Ameaça",
          "Falsidade documental",
          "Crimes contra a administração pública",
          "Peculato",
          "Concussão",
          "Corrupção passiva",
          "Prevaricação"
        ]
      }
    ]
  },

  "Direito Processual Penal": {
    peso: 18,
    assuntos: [
      {
        nome: "Inquérito Policial",
        prioridade: "Altíssima",
        topicos: [
          "Conceito e natureza",
          "Características do inquérito",
          "Autoridade policial",
          "Indiciamento",
          "Prazos",
          "Arquivamento",
          "Peças do inquérito"
        ]
      },
      {
        nome: "Ação Penal",
        prioridade: "Alta",
        topicos: [
          "Ação penal pública incondicionada",
          "Ação penal pública condicionada",
          "Ação penal privada",
          "Representação",
          "Queixa-crime",
          "Princípio da obrigatoriedade"
        ]
      },
      {
        nome: "Provas",
        prioridade: "Altíssima",
        topicos: [
          "Teoria geral da prova",
          "Provas lícitas e ilícitas",
          "Prova testemunhal",
          "Confissão",
          "Perícia",
          "Interceptação telefônica",
          "Cadeia de custódia"
        ]
      },
      {
        nome: "Prisão e Liberdade Provisória",
        prioridade: "Altíssima",
        topicos: [
          "Prisão em flagrante",
          "Prisão preventiva",
          "Prisão temporária",
          "Relaxamento da prisão",
          "Liberdade provisória",
          "Fiança",
          "Medidas cautelares diversas da prisão"
        ]
      },
      {
        nome: "Competência",
        prioridade: "Alta",
        topicos: [
          "Competência territorial",
          "Competência por matéria",
          "Competência funcional",
          "Conexão e continência"
        ]
      },
      {
        nome: "Procedimentos",
        prioridade: "Alta",
        topicos: [
          "Procedimento comum ordinário",
          "Procedimento sumário",
          "Procedimento sumaríssimo",
          "Procedimentos especiais"
        ]
      },
      {
        nome: "Sujeitos Processuais",
        prioridade: "Média",
        topicos: [
          "Juiz",
          "Ministério Público",
          "Defesa",
          "Assistente de acusação",
          "Ofendido"
        ]
      },
      {
        nome: "Recursos",
        prioridade: "Média",
        topicos: [
          "Apelação",
          "Recurso em sentido estrito",
          "Embargos",
          "Revisão criminal"
        ]
      }
    ]
  },

  "Legislação Especial": {
    peso: 16,
    assuntos: [
      {
        nome: "Lei de Drogas (11.343/06)",
        prioridade: "Altíssima",
        topicos: [
          "Usuário x traficante",
          "Tráfico de drogas",
          "Associação para o tráfico",
          "Condução do procedimento",
          "Apreensão e perícia",
          "Ações policiais",
          "Penas e causas de aumento",
          "Colaboração com a investigação"
        ]
      },
      {
        nome: "Lei Maria da Penha (11.340/06)",
        prioridade: "Altíssima",
        topicos: [
          "Violência doméstica e familiar",
          "Tipos de violência",
          "Medidas protetivas de urgência",
          "Atuação policial",
          "Juizados de violência doméstica",
          "Descumprimento de medida protetiva"
        ]
      },
      {
        nome: "Estatuto do Desarmamento (10.826/03)",
        prioridade: "Altíssima",
        topicos: [
          "Posse de arma",
          "Porte de arma",
          "Registro de arma de fogo",
          "Crimes relacionados a armas",
          "Comércio ilegal de armas",
          "Disparo de arma de fogo"
        ]
      },
      {
        nome: "Lei de Abuso de Autoridade (13.869/19)",
        prioridade: "Alta",
        topicos: [
          "Sujeitos ativos",
          "Excesso de autoridade",
          "Condutas típicas",
          "Finalidade da lei",
          "Sanções penais e administrativas"
        ]
      },
      {
        nome: "Crimes Hediondos (8.072/90)",
        prioridade: "Alta",
        topicos: [
          "Rol de crimes hediondos",
          "Regime de cumprimento",
          "Progressão de regime",
          "Fiança e liberdade provisória",
          "Efeitos da hediondez"
        ]
      },
      {
        nome: "Organização Criminosa (12.850/13)",
        prioridade: "Alta",
        topicos: [
          "Conceito de organização criminosa",
          "Estrutura da organização",
          "Colaboração premiada",
          "Infiltração de agentes",
          "Ação controlada",
          "Provas e investigação"
        ]
      },
      {
        nome: "Lavagem de Dinheiro (9.613/98)",
        prioridade: "Alta",
        topicos: [
          "Conceito de lavagem",
          "Etapas da lavagem",
          "Ocultação e dissimulação",
          "Investigação financeira",
          "Consequências penais"
        ]
      },
      {
        nome: "Estatuto da Criança e do Adolescente",
        prioridade: "Média",
        topicos: [
          "Ato infracional",
          "Medidas socioeducativas",
          "Direitos fundamentais",
          "Proteção integral",
          "Procedimentos"
        ]
      }
    ]
  },

  "Criminologia": {
    peso: 8,
    assuntos: [
      {
        nome: "Conceito de Criminologia",
        prioridade: "Alta",
        topicos: [
          "Objeto da criminologia",
          "Método científico",
          "Função da criminologia"
        ]
      },
      {
        nome: "Escolas Criminológicas",
        prioridade: "Alta",
        topicos: [
          "Escola clássica",
          "Escola positiva",
          "Escola sociológica",
          "Criminologia moderna"
        ]
      },
      {
        nome: "Teorias Criminais",
        prioridade: "Alta",
        topicos: [
          "Teoria da anomia",
          "Teoria da associação diferencial",
          "Teoria do controle social",
          "Teoria do labeling approach"
        ]
      },
      {
        nome: "Vitimologia",
        prioridade: "Média",
        topicos: [
          "Conceito de vítima",
          "Tipos de vítima",
          "Culpabilização da vítima",
          "Papel da vítima no crime"
        ]
      },
      {
        nome: "Controle Social",
        prioridade: "Alta",
        topicos: [
          "Controle formal",
          "Controle informal",
          "Prevenção criminal",
          "Políticas públicas de segurança"
        ]
      }
    ]
  },

  "Direitos Humanos": {
    peso: 7,
    assuntos: [
      {
        nome: "Teoria Geral",
        prioridade: "Alta",
        topicos: [
          "Conceito de direitos humanos",
          "Características",
          "Universalidade",
          "Indivisibilidade",
          "Historicidade"
        ]
      },
      {
        nome: "Declaração Universal dos Direitos Humanos",
        prioridade: "Alta",
        topicos: [
          "Direito à vida",
          "Liberdade",
          "Igualdade",
          "Proibição de tortura",
          "Direito à segurança"
        ]
      },
      {
        nome: "Sistema Interamericano",
        prioridade: "Média",
        topicos: [
          "Convenção Americana",
          "Corte Interamericana",
          "Comissão Interamericana",
          "Direitos protegidos"
        ]
      },
      {
        nome: "Direitos Humanos e Segurança Pública",
        prioridade: "Alta",
        topicos: [
          "Uso da força",
          "Proporcionalidade",
          "Legalidade",
          "Controle da atividade policial"
        ]
      }
    ]
  },

  "Medicina Legal": {
    peso: 8,
    assuntos: [
      {
        nome: "Introdução à Medicina Legal",
        prioridade: "Alta",
        topicos: [
          "Conceito",
          "Perícia médico-legal",
          "Prova pericial",
          "Corpo de delito"
        ]
      },
      {
        nome: "Tanatologia",
        prioridade: "Alta",
        topicos: [
          "Morte clínica e biológica",
          "Fenômenos cadavéricos",
          "Tempo de morte",
          "Necropsia"
        ]
      },
      {
        nome: "Traumatologia Forense",
        prioridade: "Alta",
        topicos: [
          "Lesões corporais",
          "Instrumentos vulnerantes",
          "Classificação das lesões",
          "Energia mecânica"
        ]
      },
      {
        nome: "Asfixiologia",
        prioridade: "Média",
        topicos: [
          "Enforcamento",
          "Estrangulamento",
          "Sufocação",
          "Afogamento"
        ]
      },
      {
        nome: "Sexologia Forense",
        prioridade: "Média",
        topicos: [
          "Crimes sexuais",
          "Estupro",
          "Exame de corpo de delito",
          "Perícia sexual"
        ]
      }
    ]
  }
};
const container = document.getElementById("container");

function loadProgress() {
  return JSON.parse(localStorage.getItem("progress") || "{}");
}

function saveProgress(data) {
  localStorage.setItem("progress", JSON.stringify(data));
}

function getAllTopics(materiaObj) {
  return materiaObj.assuntos.flatMap(a => a.topicos);
}

function render() {
  const progressData = loadProgress();
  container.innerHTML = "";

  Object.keys(materias).forEach(materia => {

    const materiaObj = materias[materia];
    const topics = getAllTopics(materiaObj);

    const doneCount = topics.filter(t =>
      progressData[materia]?.includes(t)
    ).length;

    const percent = topics.length
      ? Math.round((doneCount / topics.length) * 100)
      : 0;

    // ===== MATERIA CARD =====
    const div = document.createElement("div");
    div.className = "materia";

    // ===== HEADER =====
    const header = document.createElement("div");
    header.className = "materia-header";

    header.innerHTML = `
      <h2>${materia} - ${percent}%</h2>
      <div class="progress-bar">
        <div class="progress" style="width:${percent}%"></div>
      </div>
    `;

    // ===== CONTENT (COLLAPSE) =====
    const content = document.createElement("div");
    content.className = "materia-content";
    content.style.display = "none";

    header.onclick = () => {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    };

    // ===== ASSUNTOS + TOPICOS =====
    materiaObj.assuntos.forEach(area => {

      const areaTitle = document.createElement("h3");
      areaTitle.textContent = area.nome;
      content.appendChild(areaTitle);

      area.topicos.forEach(topic => {

        const el = document.createElement("div");
        el.className = "topic";

        if (progressData[materia]?.includes(topic)) {
          el.classList.add("done");
        }

        el.textContent = topic;

        el.onclick = () => {
          if (!progressData[materia]) progressData[materia] = [];

          if (progressData[materia].includes(topic)) {
            progressData[materia] =
              progressData[materia].filter(t => t !== topic);
          } else {
            progressData[materia].push(topic);
          }

          saveProgress(progressData);
          render();
        };

        content.appendChild(el);
      });
    });

    div.appendChild(header);
    div.appendChild(content);
    container.appendChild(div);
  });
}

render();