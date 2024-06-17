//Manipulating Strings and Numbers

// To count how many characters has a word and how many digitos has a number

const myName = "Luan";
console.log(myName.length);
const number = 123;
console.log(String(number).length);

//Transform Uppercase words to lowercase words and the reversed

const palavraMai = "LUAN RICARDO";
console.log(palavraMai.toLowerCase());

const palavraMin = "foi mal";
console.log(palavraMin.toUpperCase());

// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

const text = "Um dia fui ao parque da criança e comi uma maçã";
console.log(text);

const newText = text.split(" ");
console.log(newText);
const newNewText = newText.join("_");
console.log(newNewText);

// To verify if the tet contains the "Amor" word in it.

const loveText = "Eu quero viver o amor!";
console.log(loveText.includes("Amor".toLowerCase()));

//To creater an Array with Constructor funcion

const myConstructor = function () {};
console.log(Array());
console.log(myArray);

// To transform a chain characters in a array composition

let word = "Manipulação";

console.log(word.String());
