// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector("body");

// setInterval(() => {
//   body.classList.toggle("red");
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".pause");
const timer = document.querySelector("h1");

let i = 0;
let contador;
function iniciar() {
  contador = setInterval(() => {
    timer.innerText = i;
    i++;
  }, 1000);
  play.setAttribute("disabled", "");
}
function pausar() {
  clearInterval(contador);
}
function resetar() {
  timer.innerText = "0";
  i = 0;
  play.removeAttribute("disabled");
}

play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("dblclick", resetar);
