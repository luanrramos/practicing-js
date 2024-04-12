// const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

// linkExterno.addEventListener("click", clickNoLink);

// const img = document.querySelector("img");

function callback(event) {
  // console.log(this); // retorna a imagem
  // console.log(this.getAttribute("src"));
}

// img.addEventListener("click", callback);

const h1 = document.querySelector("h1");

function callback(event) {
  // console.log(event.type, event);
}

// const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(this);
  console.log(this.getAttribute("src"));
  console.log(event.target);
}

// animaisLista.addEventListener("click", callbackLista);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internLinks = document.querySelectorAll("[href^='#']");
function active(event) {
  event.preventDefault();
  console.log(internLinks.length);

  for (let i = 0; i < internLinks.length; i++) {
    if (internLinks[i].classList.contains("active")) {
      console.log(internLinks[i]);
      internLinks[i].classList.remove("active");
    }
  }
  this.classList.toggle("active");
  // for (const i = 0; i < internLinks.length; i++) {}
}

internLinks.forEach((link) => {
  link.addEventListener("click", active);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body *");
function eachElement(event) {
  console.log(event.currentTarget);
}
allElements.forEach((element) => {
  element.addEventListener("click", eachElement);
  element.addEventListener("click", removingElements);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removingElements(event) {
  event.target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function textSize(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", textSize);
