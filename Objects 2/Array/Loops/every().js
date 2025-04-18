// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas = ["Banana", "Pêra", "Uva"];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy

const frutasVerify = frutas.every((fruta) => {
  return fruta;
});

const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];

const numeroMaiorQue3 = numeros.every((numero) => {
  return numero >= 3;
});
console.log(numeroMaiorQue3);

