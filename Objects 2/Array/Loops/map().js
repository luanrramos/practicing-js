// Example 01
const carros = ["Fiat", "Honda", "Ferrari"];

const carrosMap = carros.map((item, index, array) => {
  return item, index, array;
});

// Example 02

const numbers = [7, 4, 5, 12, 1, 53];

const numbersX2 = numbers.map((item) => {
  return item * 2;
});

// Example 03

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const titulo = function(aula){
  return aula.nome
}

const aulasNome = aulas.map((nomeAula) => titulo);

const aulasMin = aulas.map((aula, index) => {
  return aula.min;
});
