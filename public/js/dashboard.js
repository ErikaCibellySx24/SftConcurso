function renderDashboard() {
  const state = AppState.get();

  document.getElementById("horas").innerText = state.estudo.horas + "h";
  document.getElementById("questoes").innerText = state.estudo.questoes;

  const acertos = state.estudo.questoes
    ? Math.round((state.estudo.acertos / state.estudo.questoes) * 100)
    : 0;

  document.getElementById("acertos").innerText = acertos + "%";

  document.getElementById("xp").innerText = state.xp;
  document.getElementById("nivel").innerText = state.nivel;

  renderMaterias();
  gerarIntensivo();
}

function renderMaterias() {
  const state = AppState.get();
  const container = document.getElementById("materiasResumo");

  container.innerHTML = Object.entries(state.materias)
    .map(([nome, m]) => {
      const acc = m.questoes
        ? Math.round((m.acertos / m.questoes) * 100)
        : 0;

      return `
        <div class="small-card">
          <strong>${nome}</strong>
          <p>⏱ ${m.horas}h</p>
          <p>❓ ${m.questoes} questões</p>
          <p>🎯 ${acc}% acertos</p>
        </div>
      `;
    })
    .join("");
}

function gerarIntensivo() {
  const state = AppState.get();

  const ranking = Object.entries(state.materias).sort((a, b) => {
    const accA = a[1].questoes ? a[1].acertos / a[1].questoes : 0;
    const accB = b[1].questoes ? b[1].acertos / b[1].questoes : 0;
    return accA - accB;
  });

  const foco = ranking.slice(0, 2);

  const container = document.getElementById("intensivoDia");

  container.innerHTML = foco.length
    ? foco.map(f => `<p>🔥 ${f[0]}</p>`).join("")
    : "<p>Registre estudos para gerar intensivo</p>";
}

renderDashboard();