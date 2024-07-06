const btn = document.querySelector(".btn");

const cep = document.querySelector("input");

const content = document.querySelector(".content");

function buscarCep() {
  fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((res) => {
      return res.text();
    })
    .then((body) => {
      content.innerText = body;
    });
}

btn.addEventListener("click", buscarCep);
