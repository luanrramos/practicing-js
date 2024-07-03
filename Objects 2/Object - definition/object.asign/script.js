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

const funcaoAutomovel = {
  acelerar() {
    return "Acelerou";
  },
  buzinar() {
    return "Buzinou";
  },
};

const carro = {
  portas: 4,
  rodas: 4,
  malas: true,
};
const moto = {
  rodas: 2,
  capacete: true,
};
const wa = "aa";
function a() {}
Object.assign(carro, funcaoAutomovel);
console.log(carro);
