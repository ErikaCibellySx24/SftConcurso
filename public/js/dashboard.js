function renderDashboard() {
<<<<<<< HEAD

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuario) {
    document.getElementById("tituloPainel").innerText =
      `👮‍♀️ Painel de Estudos - ${usuario.nome}`;
  }

=======

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

>>>>>>> 4296f0fcf9d51a66db314ab166a8a67d41c1943e
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