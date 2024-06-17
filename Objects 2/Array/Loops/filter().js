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

console.log(pessoasComIdade33);
