//Object.defineProperties()
// Com esse método, consigo criar novas propriedades para um objeto (alvo).
// Existe também o Object.defineProperty, para uma propriedade única.
const moto = {};
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
    writable: true, // impede mudança de valor
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

moto.rodas = 4;
delete moto.capacete;

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
