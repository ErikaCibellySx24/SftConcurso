function renderDashboard() {

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuario) {
    const titulo = document.getElementById("tituloPainel");
    const mensagem = document.getElementById("mensagemBoasVindas");

    if (titulo) {
      titulo.innerText =
        `👮‍♀️ ${usuario.nome} - ${usuario.areaConcurso}`;
    }

    if (mensagem) {
      mensagem.innerText =
        `Olá, ${usuario.nome}! Vamos começar a estudar hoje?`;
    }
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