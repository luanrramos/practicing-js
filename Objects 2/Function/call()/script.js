// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro() {
//   console.log(this);
// }

// descricaoCarro(); // undefined undefined
// descricaoCarro.call({ marca: "Ferrari" }); // undefined undefined
// descricaoCarro.call(carro); // Ford 2018

// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// }); // Log de cada Fruta

// EXEMPLO REAL
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
//   this.ativo = function (classe) {
//     this.element.classList.add(classe);
//   };
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const lista = new Dom("ul");
// lista.ativo("ativar");
// console.log(lista);

// Example 01 - call

// const jogo = {
//   nome: "GTA",
//   ano: 2024,
// };

// const carro = {
//   nome: "Toyota",
//   ano: 2000,

//   trocarNome: function (nome) {
//     return (this.nome = nome);
//   },
// };

// const trocarNomeJogo = carro.trocarNome.bind(jogo, "Teste");

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativar = function (classe) {
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");
// ul.ativar("ativar");

// const hondaObj = {
//   marca: "Honda",
//   ano: 1920,
// };

// function descricaoCarro(marca, ano) {
//   console.log(this + " " + this.ano);
// }
window.marca = "Audi"
window.ano = 2000
function descricaoCarro() {
  console.log(this);
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // Audio 2000

descricaoCarro.call({marca: "Ferrari", ano: 2024}); // Ferrari 2024

// Com o call, referenciamos outro objetivo para atuar como THIS da função
