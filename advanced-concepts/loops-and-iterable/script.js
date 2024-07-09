const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);
// For..of
const frutas1 = ["Banana", "Morango", "Uva"];
const frase2 = "Isso é JavaScript";

for (const fruta of frutas1) {
  console.log(fruta);
}

for (const char of frase2) {
  console.log(char);
}

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
