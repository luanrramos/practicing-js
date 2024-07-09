// Remova o erro
const priceNumber = (n) => n.replace("R$ ", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

var marca = "Ferarri";

(function () {
  var marca = "Honda";
  console.log(marca);
})();

console.log(marca);

// Como podemos utilizar
// a função abaixo.
var callback = (callback) => {
  return callback;
};
var active = (callback) => callback(callback);

console.log(active("Olá"));
