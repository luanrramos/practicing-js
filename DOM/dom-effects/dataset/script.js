// =========== DATASET ==========================
// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector("div");
div = document.querySelector("[data-cor-azul]");
div = document.querySelector('[data-cor="azul"]');
// // DOMStringMap {cor: "azul", width: "500"}
// div.dataset.cor; // 'azul'
// div.dataset.width; // '500'
// div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}
// =========== DATASET ==========================

// ================= DATA ATRIBUTES ========================
const divs = document.querySelectorAll("[data-anima]");
divs.forEach((div) => {
  console.log(div.dataset);
  div.classList.add(div.dataset.anima);
});
// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data
// ================= DATA ATRIBUTES ========================

// Data vs Class

// Nomenclatura
