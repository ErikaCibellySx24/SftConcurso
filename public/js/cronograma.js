document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("cronogramaContainer");

  window.importarCronograma = async function () {

    const file = document.getElementById("fileInput").files[0];

    if (!file) {
      alert("Selecione um arquivo");
      return;
    }

    const text = await file.text(); // funciona para CSV

    const linhas = text.trim().split("\n");

    const plano = [];

    linhas.forEach((linha, index) => {

      const [dia, materias] = linha.split(",");

      if (index === 0 && dia.toLowerCase().includes("dia")) return;

      plano.push({
        dia: dia.trim(),
        materias: materias.split(",").map(m => m.trim())
      });

    });

    renderizar(plano);
  };

  function renderizar(plano){

    container.innerHTML = "";

    const box = document.createElement("div");
    box.className = "card";

    let html = "<h2>📅 Cronograma Importado</h2><ul>";

    plano.forEach(p => {
      html += `<li><strong>${p.dia}:</strong> ${p.materias.join(" + ")}</li>`;
    });

    html += "</ul>";

    box.innerHTML = html;
    container.appendChild(box);
  }

});