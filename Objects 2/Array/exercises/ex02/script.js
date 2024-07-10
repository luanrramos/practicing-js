const precos = [
  "Crédito:",
  "R$ 200",
  "R$ 200",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((item) => item.includes("R$"));
const precosMap = precos.map((item) => {
  return item.replace("R$ ", "");
});
// console.log(precosFiltro);
console.log(precosMap);
