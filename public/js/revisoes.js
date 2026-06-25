document.addEventListener("DOMContentLoaded", () => {

  const revisoes = [
    {materia:"Constitucional", dias:1},
    {materia:"Penal", dias:3},
    {materia:"Processo Penal", dias:7},
  ];

  const container = document.querySelector(".main");

  if(container){
    const card = document.createElement("div");
    card.className="card";

    let html = "<h2>Revisões Programadas</h2>";

    revisoes.forEach(r=>{
      html += `<p>📌 ${r.materia} - em ${r.dias} dias</p>`;
    });

    card.innerHTML = html;
    container.appendChild(card);
  }

});