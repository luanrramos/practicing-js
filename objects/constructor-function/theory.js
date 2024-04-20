function Carros(marca, preco) {
  this.marca = marca;
  this.preco = preco;
  
}

const fiat = new Carros("fiat", 2000);
const honda = new Carros("honda", 2000);

// function Carros2(marcaAtribuida, precoFinal) {
//   const taxa = 1.2;
//   this.preco = precoFinal * taxa;
//   this.marca = marcaAtribuida;
//   console.log(this);
// }

// const fiat = new Carros2("fiat", 3000);
// const honda = new Carros2("Honda", 5000);
// const hoje = new Date();
// console.log(hoje);

// Basic real-world examplo object

// const dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativo");
//   },
// };

// Basic constructor function real-world example

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };

//   this.ativar = function () {
//     this.element().classList.add("ativar");
//   };
//   console.log(this);
// }

// const list = new Dom("li");

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };

//   this.ativar = function () {
//     this.element().classList.add("ativar");
//     return "Adicionado!";
//   };
// }

// const li = new Dom("li");

// const liLast = new Dom("li:last-child");

// const dom = {
//   seletor: "li",

//   element() {
//     return document.querySelector(this.seletor);
//   },

//   ativar() {
//     this.element().classList.add("ativar");
//     return "Adicionado!!!";
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };

  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const ativarLi = new Dom();
