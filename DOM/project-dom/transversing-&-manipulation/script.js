// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".navigation");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode("true");
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const ul = document.querySelector(".ask");
const ulFC = ul.querySelector(":first-child");

ul.children[0];

// Selecione o DD referente ao primeiro DT

const liFC = ulFC.querySelector(":last-child");

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".ask");
const animais = document.querySelector(".grid-content-desc");
const temp = animais;

faq.innerHTML = temp.outerHTML;
