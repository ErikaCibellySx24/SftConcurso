const btn = document.getElementById("toggleTheme");

// carregar preferência salva
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  btn.innerText = "☀️ Modo Claro";
}

// alternar tema
btn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    btn.innerText = "☀️ Modo Claro";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙 Modo Noturno";
    localStorage.setItem("theme", "light");
  }

});