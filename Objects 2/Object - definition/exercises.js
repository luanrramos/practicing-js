// Crie uma função que verifique
// corretamente o tipo de dado

const carro = {
  marca: "Ferrari",
  ano: 2019,
};

const frutas = ["Banana", "Abacaxi", "Pera"];

const tropa = "Tropa de elite";
function verifyDataType(data) {
  return Object.prototype.toString.call(data);
}
// console.log(verifyDataType(tropa));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});

quadrado.lados = 5;
console.log(quadrado); // Resposta: lados: 4

// Previna qualquer mudança
// no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.preventExtensions(configuracao);
Object.seal(configuracao);
Object.freeze(configuracao);

configuracao.background = "#993";
configuracao.sens = "1.7";
// console.log(configuracao); // O próprio objeto sem eventuais mudanças por conta dos métodos acima que previvem qualquer alteração no objeto original.

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
