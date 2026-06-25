document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".main");

  const card = document.createElement("div");
  card.className="card";

  card.innerHTML = `
    <h2>Calendário</h2>
    <p>Futuramente integrado com FullCalendar.js</p>
  `;

  container.appendChild(card);

});