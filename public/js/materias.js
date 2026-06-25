const materias = {
  "Língua Portuguesa": [
    "Interpretação de texto",
    "Ortografia oficial",
    "Acentuação gráfica",
    "Pontuação",
    "Concordância verbal e nominal",
    "Regência verbal e nominal",
    "Crase",
    "Classes de palavras"
  ],

  "Direito Penal": [
    "Princípios do Direito Penal",
    "Crime (conceito e elementos)",
    "Tipicidade",
    "Ilicitude",
    "Culpabilidade",
    "Penas",
    "Extinção da punibilidade"
  ],

  "Direito Processual Penal": [
    "Inquérito policial",
    "Ação penal",
    "Competência",
    "Provas",
    "Prisão e liberdade provisória",
    "Procedimentos"
  ],

  "Direito Constitucional": [
    "Direitos e garantias fundamentais",
    "Organização do Estado",
    "Poderes da República",
    "Segurança pública (art. 144)",
    "Controle de constitucionalidade"
  ],

  "Criminologia": [
    "Conceito de criminologia",
    "Escolas criminológicas",
    "Fatores criminais",
    "Criminalidade e controle social"
  ],

  "Legislação Penal Especial": [
    "Lei de Drogas (11.343/06)",
    "Lei Maria da Penha (11.340/06)",
    "Estatuto do Desarmamento",
    "Crimes hediondos",
    "Abuso de autoridade"
  ],

  "Informática": [
    "Noções de Windows",
    "Pacote Office",
    "Internet e redes",
    "Segurança da informação",
    "Noções de sistemas"
  ],

  "Raciocínio Lógico": [
    "Proposições",
    "Conectivos lógicos",
    "Tabelas verdade",
    "Sequências lógicas",
    "Problemas lógicos"
  ],
  "Lei Seca (Legislação)": [
  "Constituição Federal - Art. 5º (Direitos e Garantias Fundamentais)",
  "Constituição Federal - Art. 144 (Segurança Pública)",
  "Código Penal - Parte Geral (conceitos iniciais)",
  "Código Penal - Art. 1º ao 12 (Aplicação da Lei Penal)",
  "Código Penal - Crimes contra a pessoa (noções gerais)",
  "Código de Processo Penal - Inquérito Policial (arts. 4º ao 23)",
  "Código de Processo Penal - Prisões (arts. 282 ao 318)",
  "Lei de Drogas 11.343/06 (principais artigos)",
  "Lei Maria da Penha 11.340/06 (estrutura e medidas protetivas)",
  "Estatuto do Desarmamento 10.826/03 (posse e porte)",
  "Lei de Abuso de Autoridade 13.869/19 (principais condutas)",
  "Crimes Hediondos 8.072/90 (rol de crimes)",
  "Lei 12.850/13 (Organização Criminosa)"
]
};

const container = document.getElementById("container");

function loadProgress() {
  return JSON.parse(localStorage.getItem("progress") || "{}");
}

function saveProgress(data) {
  localStorage.setItem("progress", JSON.stringify(data));
}

function render() {
  const progressData = loadProgress();
  container.innerHTML = "";

  Object.keys(materias).forEach(materia => {
    const topics = materias[materia];

    const doneCount = topics.filter(t => progressData[materia]?.includes(t)).length;
    const percent = Math.round((doneCount / topics.length) * 100);

    const div = document.createElement("div");
    div.className = "materia";

    div.innerHTML = `
      <h2>${materia} - ${percent}%</h2>
      <div class="progress-bar">
        <div class="progress" style="width:${percent}%"></div>
      </div>
    `;

    topics.forEach(topic => {
      const el = document.createElement("div");
      el.className = "topic";

      if (progressData[materia]?.includes(topic)) {
        el.classList.add("done");
      }

      el.textContent = topic;

      el.onclick = () => {
        if (!progressData[materia]) progressData[materia] = [];

        if (progressData[materia].includes(topic)) {
          progressData[materia] = progressData[materia].filter(t => t !== topic);
        } else {
          progressData[materia].push(topic);
        }

        saveProgress(progressData);
        render();
      };

      div.appendChild(el);
    });

    container.appendChild(div);
  });
}

render();