document.addEventListener("DOMContentLoaded", () => {

  const plano = [
    {dia:"Segunda", materias:["Português","RLM"]},
    {dia:"Terça", materias:["Penal","Informática"]},
    {dia:"Quarta", materias:["Processo Penal","DH"]},
    {dia:"Quinta", materias:["Constitucional","Legislação"]},
    {dia:"Sexta", materias:["Administrativo","Criminologia"]},
    {dia:"Sábado", materias:["Revisão","Simulado"]},
  ];

  const container = document.querySelector(".main");

  if(container){
    const box = document.createElement("div");
    box.className="card";

    let html = "<h2>Cronograma Dinâmico</h2><ul>";

    plano.forEach(p=>{
      html += `<li><strong>${p.dia}:</strong> ${p.materias.join(" + ")}</li>`;
    });

    html += "</ul>";

    box.innerHTML = html;
    container.appendChild(box);
  }

});