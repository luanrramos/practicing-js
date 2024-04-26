// Example 02 - Rocket sum
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

// Reduce

const rocketReduce = rockets.reduce(
  (cont, proxElem) => cont + proxElem.launches,
  0
);

// Reduce Example 02

const grades = [75, 50, 90, 80, 65, 95];

const gradesReduce = grades.reduce((acc, proxElement) => acc + proxElement);
// ---------------------------------------------------------------------------------------
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

const nomeAulas = aulas.reduce((anterior, atual, index) => {
  anterior[index] = atual.min;
  return anterior;
}, {});

//  ------------------------------------------------------------------------------

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva
