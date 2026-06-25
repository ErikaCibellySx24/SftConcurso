document.addEventListener("DOMContentLoaded", () => {

  let timer;
  let time = 25 * 60;
  let running = false;

  const display = document.createElement("h2");
  document.body.appendChild(display);

  function update(){
    let m = Math.floor(time / 60);
    let s = time % 60;
    display.innerText = `${m}:${s < 10 ? "0"+s : s}`;
  }

  function start(){
    if(running) return;
    running = true;

    timer = setInterval(()=>{
      time--;
      update();

      if(time <= 0){
        clearInterval(timer);
        alert("Pomodoro finalizado!");
        running = false;
      }

    },1000);
  }

  function reset(){
    clearInterval(timer);
    time = 25 * 60;
    running = false;
    update();
  }

  const btn1 = document.createElement("button");
  btn1.innerText = "Iniciar";
  btn1.onclick = start;

  const btn2 = document.createElement("button");
  btn2.innerText = "Reset";
  btn2.onclick = reset;

  document.body.appendChild(btn1);
  document.body.appendChild(btn2);

  update();

});