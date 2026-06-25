const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const input = document.getElementById("taskInput");

let selectedDay = null;

// cria calendário simples (30 dias)
for(let i=1;i<=30;i++){

  const day = document.createElement("div");
  day.className = "day";
  day.innerHTML = `<strong>Dia ${i}</strong><br><small id="d${i}"></small>`;

  day.onclick = () => {
    selectedDay = i;
    openModal();
  };

  calendar.appendChild(day);
}

// abrir modal
function openModal(){
  modal.style.display = "flex";
}

// fechar modal
function closeModal(){
  modal.style.display = "none";
  input.value = "";
}

// salvar tarefa
function saveTask(){

  const text = input.value;

  if(!text) return;

  // salva no localStorage
  localStorage.setItem("day_"+selectedDay, text);

  document.getElementById("d"+selectedDay).innerText = text;

  closeModal();
}

// carregar tarefas salvas
for(let i=1;i<=30;i++){
  const saved = localStorage.getItem("day_"+i);
  if(saved){
    const el = document.getElementById("d"+i);
    if(el) el.innerText = saved;
  }
}

// fechar clicando fora
window.onclick = (e) => {
  if(e.target == modal){
    closeModal();
  }
}