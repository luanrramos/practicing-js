// // Example 02 - Rocket sum
// const rockets = [
//   { country: "Russia", launches: 32 },
//   { country: "US", launches: 23 },
//   { country: "China", launches: 16 },
//   { country: "Europe", launches: 7 },
//   { country: "India", launches: 4 },
//   { country: "Japan", launches: 3 },
// ];

// // Reduce

// const rocketReduce = rockets.reduce(
//   (cont, proxElem) => cont + proxElem.launches,
//   0
// );

// // Reduce Example 02

// const grades = [75, 50, 90, 80, 65, 95];

// const gradesReduce = grades.reduce((acc, proxElement) => acc + proxElement);
// // ---------------------------------------------------------------------------------------
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

// const nomeAulas = aulas.reduce((anterior, atual, index) => {
//   anterior[index] = atual.min;
//   return anterior;
// }, {});

// //  ------------------------------------------------------------------------------

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// frutasRight; // Uva Pêra Banana
// frutasLeft; // Banana Pêra Uva

let ordens = [
  { nome: "Alberto", quantidade: 14, idade: 33 },
  { nome: "Pedro", quantidade: 32, idade: 33 },
  { nome: "Douglas", quantidade: 24, idade: 33 },
];

let somaOrdens = ordens.reduce(function (acc, ordem) {
  return acc + ordem.quantidade;
}, 0);

// console.log(somaOrdens); // Sima das quantidades

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Huyn Suk", foundedOn: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark zuckberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

//Forma 1
const pib = companies.reduce((acc, company) => {
  return acc + company.marketValue;
}, 0);

// console.log(pib);

//Forma 2


const pib2 = companies.reduce((acc, company) => acc + company.marketValue, 0);
// console.log(pib2)

// Somar 10% do valor de cada marketValue para cada empresa - COM MAP
// Filtrar empresas < 2000 - COM FILTER
// Somar o valor das empresas - COM REDUCE

const add10Percentage = company => {
  company.marketValue += (company.marketValue * 0.1)
  return company
}

const companiesUnder2000 = company => company.foundedOn < 2000;

const sumMarketValue = (acc, company) => acc + company.marketValue

const myBestCompanies = companies.map(add10Percentage).filter(companiesUnder2000).reduce(sumMarketValue, 0)


console.log(myBestCompanies)