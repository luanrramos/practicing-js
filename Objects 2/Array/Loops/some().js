// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.const frutas = ['Banana', 'Pêra', 'Uva'];

const frutas = ["Banana", "Pêra", "Uva"];
const temUva = frutas.some((fruta) => fruta === "Uva");

function maiorQue100(numero) {
  return numero > 100;
}

const numeros = [0, 43, 22, 88, 101, 2];

const temMaior = numeros.some(maiorQue100);
