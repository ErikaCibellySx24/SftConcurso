async function carregarGrafico() {

  const res = await fetch("/api/estudos");
  const dados = await res.json();

  // organiza por data
  const dias = {};
  
  dados.forEach(item => {
    const dia = item.data_estudo || "sem data";
    
    if(!dias[dia]) dias[dia] = 0;
    dias[dia] += item.horas;
  });

  const labels = Object.keys(dias);
  const valores = Object.values(dias);

  const ctx = document.getElementById('grafico');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Horas estudadas',
        data: valores,
        backgroundColor:'#2563EB'
      }]
    }
  });
}


carregarGrafico();
async function importarEstudos() {

  const texto = document.getElementById("importText").value;
  const status = document.getElementById("statusImport");

  if (!texto) {
    status.innerText = "❌ Nenhum dado informado";
    return;
  }

  const linhas = texto.split("\n");

  const estudos = linhas.map(linha => {
    const [materia, horas, data] = linha.split(",");

    return {
      materia: materia.trim(),
      horas: parseFloat(horas),
      data_estudo: data.trim()
    };
  });

  const res = await fetch("/api/estudos/import", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(estudos)
  });

  if (res.ok) {
    status.innerText = "✅ Estudos importados com sucesso!";
  } else {
    status.innerText = "❌ Erro ao importar";
  }
}
async function carregarCronograma() {

  const res = await fetch("/api/cronograma");
  const data = await res.json();

  const container = document.getElementById("cronogramaCard");

  if (!data.length) {
    container.innerHTML = "<p>Nenhum cronograma importado ainda.</p>";
    return;
  }

  // agrupar por dia
  const agrupado = {};

  data.forEach(item => {
    if (!agrupado[item.dia]) {
      agrupado[item.dia] = [];
    }
    agrupado[item.dia].push(item.materia);
  });

  let html = "";

  for (let dia in agrupado) {
    html += `
      <div class="cronograma-dia">
        <strong>${dia}</strong>
        ${agrupado[dia].map(m => `<span class="tag">${m}</span>`).join("")}
      </div>
    `;
  }

  container.innerHTML = html;
}

carregarCronograma();