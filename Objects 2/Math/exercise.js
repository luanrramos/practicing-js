// Retorne um número aleatório
// entre 1050 e 2000
const max = 2000;
const min = 1050;
// console.log(Math.round(Math.random() * (max - min + 1) + min));

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(",");
// console.log(numerosArray);

let maior = 0;
numerosArray.forEach((numero) => {
  let intNumero = +numero;
  if (intNumero > maior) {
    maior = numero;
  }
});
// console.log(maior);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
let cont = 0;
listaPrecos.forEach((item) => {
  let cleanItem = item
    .toLowerCase()
    .replace("r$ ", "")
    .trim()
    .replace(",", ".");

  let itemToNumber = +cleanItem;
  cont += itemToNumber;
});
console.log(cont.toFixed(2));
