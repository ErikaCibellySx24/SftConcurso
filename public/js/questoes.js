document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector("button");

  if(btn){
    btn.addEventListener("click", () => {

      const materia = document.querySelectorAll("input")[0].value;
      const resolvidas = document.querySelectorAll("input")[1].value;
      const acertos = document.querySelectorAll("input")[2].value;

      if(!materia) return alert("Digite a matéria");

      const dados = {
        materia,
        resolvidas: Number(resolvidas),
        acertos: Number(acertos)
      };

      let lista = JSON.parse(localStorage.getItem("questoes") || "[]");
      lista.push(dados);

      localStorage.setItem("questoes", JSON.stringify(lista));

      alert("Salvo com sucesso!");
    });
  }

});