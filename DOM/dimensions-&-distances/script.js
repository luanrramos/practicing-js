// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector("footer");
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");
let soma = 0;
imgs.forEach((item) => {
  soma += item.offsetWidth;
});
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menuMobile = window.matchMedia("(max-width: 720px)").matches;

if (menuMobile) {
  const menu = document.querySelector(".navigation ul");
  menu.classList.add("menu-mobile");
}
