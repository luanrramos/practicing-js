const btns = document.querySelectorAll("button");
const btnsArray = [...btns];

const frase = "Isso é JavaScript";
const fraseArray = [...frase];

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(...frutas);
console.log(comidas);
