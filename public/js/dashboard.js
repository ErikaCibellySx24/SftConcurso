function renderDashboard() {

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuario) {
    document.getElementById("tituloPainel").innerText =
      `👮‍♀️ Painel de Estudos - ${usuario.nome}`;
  }

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