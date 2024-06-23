// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta;
// }); // ['Banana', 'Uva', 'Maçã']

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

let pessoas = [
  { nome: "Alberto", idade: 33 },
  { nome: "Pedro", idade: 33 },
  { nome: "Ana", idade: 12 },
];

let pessoasComIdade33 = pessoas.filter((pessoa) => {
  if (pessoa.idade === 33) {
    return pessoa.idade;
  }
});

// console.log(pessoasComIdade33);

const list = [20, 3, 234, 12, 17, 541, 6, 78, 131, 1, 25, 1000];

const filterList = list.filter((number) => {
  if (number % 2 === 0 && number % 5 === 0) return true;
});

console.log(list);
console.log(filterList);

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

const companiesFilter = companies.filter((company) => {
  if (company.foundedOn > 1975 && company.marketValue > 200) return true;
  else return false
});

console.log(companiesFilter);
