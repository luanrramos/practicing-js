// Retorne no console todas as imagens do site
const images = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="img/imagem"]');
// Selecione todos os links internos (onde o href começa com #)
const internLinks = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".grid-content-desc span");

// Selecione o último p do site

const p = document.getElementsByTagName("p");
const lastP= p[p.length - 1];
