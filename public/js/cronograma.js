document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("cronogramaContainer");

  /* 🔥 IMPORTAR EXCEL */
  window.importarExcel = async function () {

    const file = document.getElementById("fileInput").files[0];
    const status = document.getElementById("status");

    if (!file) {
      alert("Selecione um arquivo Excel");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/cronograma/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    status.innerText = data.message;

    // 🔥 atualiza dashboard automaticamente
    window.dispatchEvent(new Event("cronogramaAtualizado"));

    carregarCronograma();
  };

  /* 🔥 CARREGAR DO BANCO */
  async function carregarCronograma() {

    const res = await fetch("/api/cronograma");
    const data = await res.json();

    if (!data.length) {
      container.innerHTML = "<p>Nenhum cronograma encontrado</p>";
      return;
    }

    const agrupado = {};

    data.forEach(item => {
      if (!agrupado[item.dia]) {
        agrupado[item.dia] = [];
      }
      agrupado[item.dia].push(item.materia);
    });

    let html = "<div class='card'><h2>📅 Meu Cronograma</h2>";

    for (let dia in agrupado) {
      html += `
        <div class="cronograma-dia">
          <strong>${dia}</strong>
          ${agrupado[dia].map(m => `<span class="tag">${m}</span>`).join("")}
        </div>
      `;
    }

    html += "</div>";

    container.innerHTML = html;
  }

  carregarCronograma();

  /* 🔥 escuta atualização do dashboard */
  window.addEventListener("cronogramaAtualizado", carregarCronograma);

});