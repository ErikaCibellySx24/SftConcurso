document.addEventListener("DOMContentLoaded", () => {

  const cards = [
    {title:"Horas Estudadas", value:120},
    {title:"Questões", value:540},
    {title:"Acertos %", value:78},
    {title:"Dias Seguidos", value:6},
  ];

  const container = document.getElementById("cards");

  cards.forEach(c=>{
    const div = document.createElement("div");
    div.className="small-card";
    div.innerHTML=`
      <h3>${c.title}</h3>
      <h2>${c.value}</h2>
    `;
    container.appendChild(div);
  });

});