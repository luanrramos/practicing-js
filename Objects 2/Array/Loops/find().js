// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const numeros = [6, 43, 22, 88, 101, 29];
const numeroMaiorQue80 = numeros.find((numero) => {
  return numero > 80;
});
console.log(numeroMaiorQue80);

const frutas = ["Banana", "Pêra", "Uva", "Maçã"];

const searchUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});
console.log(searchUva);
