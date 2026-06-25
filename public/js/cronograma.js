document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("cronogramaContainer");
  const status = document.getElementById("status");

  /* 🔥 IMPORTAR EXCEL */
  window.importarExcel = async function () {

    const file = document.getElementById("fileInput").files[0];

    if (!file) {
      alert("Selecione um arquivo Excel");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/cronograma/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      status.innerText = data.message || "Importado com sucesso";

      // 🔥 atualiza cronograma
      carregarCronograma();

    } catch (err) {
      console.error(err);
      status.innerText = "Erro ao importar arquivo";
    }
  };

  /* 🔥 CARREGAR DO BANCO */
  async function carregarCronograma() {

    try {
      const res = await fetch("/api/cronograma");
      const data = await res.json();

      if (!data.length) {
        container.innerHTML = "<p>Nenhum cronograma encontrado</p>";
        return;
      }

      // ordem correta dos dias
      const diasOrdem = [
        "Segunda", "Terça", "Quarta",
        "Quinta", "Sexta", "Sábado", "Domingo"
      ];

      const agrupado = Object.fromEntries(
        diasOrdem.map(d => [d, []])
      );

      data.forEach(item => {
        if (agrupado[item.dia]) {
          agrupado[item.dia].push(item.materia);
        }
      });

      let html = "<div class='card'><h2>📅 Meu Cronograma</h2>";

      diasOrdem.forEach(dia => {
        if (agrupado[dia].length > 0) {
          html += `
            <div class="cronograma-dia">
              <strong>${dia}</strong>
              ${agrupado[dia]
                .map(m => `<span class="tag">${m}</span>`)
                .join("")}
            </div>
          `;
        }
      });

      html += "</div>";

      container.innerHTML = html;

    } catch (err) {
      console.error(err);
      container.innerHTML = "<p>Erro ao carregar cronograma</p>";
    }
  }

  /* 🔥 primeira carga */
  carregarCronograma();

});