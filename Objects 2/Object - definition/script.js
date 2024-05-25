//COM OBJECT.CREATE()
// Object.create() é um método que basicamente irá criar um novo objeto com as características do outro objeto que você passou como argumento na hora de criar.

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro);
// // honda.init("Honda").acelerar();

// COM OBJECT.ASSIGN(alvo, obj1)
// Com o object.assign(), basicamente, você já tem um objeto criado e quer "herdar" métodos ou propriedades de OUTRO OBJETO, passando como argumentos o alvo (onde você quer colocar os métodos herdados) e o obj1 (Objeto onde irá conter os métodos e props que você quer herdar). Dessa forma, modificando o objeto alvo.

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// const carro = {
//   rodas: 4,
//   mala: true,
// };

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

//Object.defineProperties()
// Com esse método, consigo criar novas propriedades para um objeto (alvo).
// Existe também o Object.defineProperty, para uma propriedade única.
// const moto = {};
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//     writable: true, // impede mudança de valor

//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// });

// moto.rodas = 4;
// delete moto.capacete;

// Crie uma função que verifique
// corretamente o tipo de dado

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

// const quadrado = {
//   lados: 4 ,
// };
// Object.defineProperties(quadrado, {
//   lados: {
//     configurable: true,
//   },
// });

// // Previna qualquer mudança
// // no objeto abaixo

// const configuracao = {
//   width: 800,
//   height: 600,
//   background: "#333",
// };
// Object.defineProperties(configuracao, {
//   background: { enumerable: false, writable: false },
// });

// // Liste o nome de todas
// // as propriedades do
// // protótipo de String e Array
// console.log(String.prototype);
// console.log(Array.prototype);

let cars = [
  { brand: "Fiat", year: 2022 },
  { brand: "Bmw", year: 2018 },
  { brand: "Ferrari", year: 2020 },
];
cars.sort();

console.log(cars);

let test;
