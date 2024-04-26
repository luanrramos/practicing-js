const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
//   // Return = undefined
// });

// console.log(carros);

// Example 02 - Rocket sum
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

// ForEach
let cont = 0;
// rockets.forEach((country) => {
//   cont += country.launches;
// });

// Map()

const rocketMap = rockets.map((country) => {
  // cont += country.launches;
  return null;
});

// Reduce

const rocketReduce = rockets.reduce((cont, proxElem) => cont + proxElem.launches, 0);


// Reduce Example 02

const grades = [75, 50, 90, 80, 65, 95];

const gradesReduce = grades.reduce((acc, proxElement) => acc + proxElement)
