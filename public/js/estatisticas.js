const materiasBase = {
  "Língua Portuguesa": 8,
  "Direito Penal": 7,
  "Direito Processual Penal": 6,
  "Direito Constitucional": 5,
  "Criminologia": 4,
  "Legislação Penal Especial": 13,
  "Informática": 5,
  "Raciocínio Lógico": 5,
  "Lei Seca (Legislação)": 13
};

function loadProgress() {
  return JSON.parse(localStorage.getItem("progress") || "{}");
}

/* ---------------- GERAL ---------------- */

function calcularGeral(progress) {
  let total = 0;
  let feitos = 0;

  Object.keys(materiasBase).forEach(m => {
    total += materiasBase[m];
    feitos += (progress[m] || []).length;
  });

  const percent = total ? Math.round((feitos / total) * 100) : 0;

  return { total, feitos, percent };
}

/* ---------------- RESUMO POR MATÉRIA ---------------- */

function renderResumoMaterias(progress) {
  const container = document.getElementById("resumoMaterias");
  container.innerHTML = "";

  Object.keys(materiasBase).forEach(m => {
    const total = materiasBase[m];
    const feitos = (progress[m] || []).length;
    const percent = Math.round((feitos / total) * 100);

    const card = document.createElement("div");

    card.style.background = "#151515";
    card.style.padding = "12px";
    card.style.borderRadius = "10px";
    card.style.marginBottom = "10px";
    card.style.border = "1px solid rgba(255,255,255,0.05)";

    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <strong style="font-size:14px;">${m}</strong>
        <span style="font-size:12px;color:#aaa;">${percent}%</span>
      </div>

      <div style="font-size:12px;color:#777;margin-bottom:8px;">
        ${feitos} / ${total} assuntos
      </div>

      <div style="background:#333;height:8px;border-radius:5px;overflow:hidden;">
        <div style="
          width:${percent}%;
          height:100%;
          background:rgba(139,124,246,0.8);
          border-radius:5px;
        "></div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ---------------- RESUMO GERAL ---------------- */

function renderResumoGeral(progress) {
  const { total, feitos, percent } = calcularGeral(progress);

  document.getElementById("resumoGeral").innerHTML = `
    <h2>🔥 Progresso geral</h2>
    <p><strong>${percent}% concluído</strong></p>
    <p>${feitos} de ${total} assuntos estudados</p>

    <div style="background:#333;height:12px;border-radius:6px;">
      <div style="width:${percent}%;height:100%;background:#00ff88;border-radius:6px;"></div>
    </div>
  `;
}

/* ---------------- GRÁFICO ---------------- */

const modo = document.getElementById("modo");
const selectMateria = document.getElementById("materiaSelect");
const ctx = document.getElementById("graf1").getContext("2d");

let chart;

function gerarGeral(progress) {
  const labels = Object.keys(materiasBase);

  const data = labels.map(m => {
    const total = materiasBase[m];
    const feitos = (progress[m] || []).length;
    return Math.round((feitos / total) * 100);
  });

  return { labels, data };
}

function gerarMateria(progress, materia) {
  const total = materiasBase[materia];
  const feitos = (progress[materia] || []).length;

  return {
    labels: ["Início", "Atual"],
    data: [0, Math.round((feitos / total) * 100)]
  };
}

function renderGrafico(progress) {
  if (chart) chart.destroy();

  if (modo.value === "geral") {
    selectMateria.style.display = "none";

    const { labels, data } = gerarGeral(progress);

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Progresso (%)",
          data,
          backgroundColor: "#8B7CF6"
        }]
      }
    });

  } else {
    selectMateria.style.display = "block";

    if (selectMateria.children.length === 0) {
      Object.keys(materiasBase).forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        selectMateria.appendChild(opt);
      });
    }

    const materia = selectMateria.value || Object.keys(materiasBase)[0];

    const { labels, data } = gerarMateria(progress, materia);

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: materia,
          data,
          borderColor: "#00ff88",
          tension: 0.3
        }]
      }
    });
  }
}

/* ---------------- INIT ---------------- */

function render() {
  const progress = loadProgress();

  renderResumoGeral(progress);
  renderResumoMaterias(progress);
  renderGrafico(progress);
}

modo.onchange = render;
selectMateria.onchange = render;

render();