// Example 01
// const carros = ["Fiat", "Honda", "Ferrari"];

// const carrosMap = carros.map((item, index, array) => {
//   return item, index, array;
// });

// // Example 02

// const numbers = [7, 4, 5, 12, 1, 53];

// const numbersX2 = numbers.map((item) => {
//   return item * 2;
// });

// // Example 03

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const titulo = function (aula) {
//   return aula.nome;
// };

// const aulasNome = aulas.map((nomeAula) => titulo);

// const aulasMin = aulas.map((aula, index) => {
//   return aula.min;
// });

// // const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   const novoValor = "Carro " + item;
//   return novoValor;
// });
// const novoValor = "Teste";
// newCarros; // [undefined, undefined, undefined];

// // Example 02 - Rocket sum
// const rockets = [
//   { country: "Russia", launches: 32 },
//   { country: "US", launches: 23 },
//   { country: "China", launches: 16 },
//   { country: "Europe", launches: 7 },
//   { country: "India", launches: 4 },
//   { country: "Japan", launches: 3 },
// ];

// // Map()

// const rocketMap = rockets.map((country) => {
//   // cont += country.launches;
//   return null;
// });

let pessoas = [
  { nome: "Alberto", idade: 33 },
  { nome: "Pedro", idade: 33 },
  { nome: "Ana", idade: 12 },
];

let pessoasComIdade33 = pessoas.map((pessoa) => {
  return pessoa.nome;
});

// console.log(pessoasComIdade33);

const numbers = [2, 3, 1, 5];

//Forma 1
const double0 = numbers.map(function (number) {
  return number * 2;
});

//Forma 2
const double1 = numbers.map((number) => {
  return number * 2;
});

//Forma 3
// Aninhando maps
const double = number => number * 2;
const sum = function (number){
 return number + 10
}

const double2 = numbers.map(double).map((number) => number + 10);


console.log(double2);
