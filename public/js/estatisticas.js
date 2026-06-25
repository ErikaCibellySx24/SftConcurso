document.addEventListener("DOMContentLoaded", () => {

  const dados = JSON.parse(localStorage.getItem("questoes") || "[]");

  let materias = {};
  let total = 0;
  let acertos = 0;

  dados.forEach(d => {
    materias[d.materia] = (materias[d.materia] || 0) + d.resolvidas;
    total += d.resolvidas;
    acertos += d.acertos;
  });

  const labels = Object.keys(materias);
  const values = Object.values(materias);

  new Chart(document.getElementById("graf1"), {
    type:"bar",
    data:{
      labels,
      datasets:[{
        label:"Questões por Matéria",
        data:values,
        backgroundColor:"#8B7CF6"
      }]
    }
  });

});