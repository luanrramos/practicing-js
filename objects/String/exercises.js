// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];
// const itemsArray = transacoes;
// let contTax = 0;
// let contRecieve = 0;
// itemsArray.forEach((item) => {
//   if (item.descricao.startsWith("Taxa")) {
//     const taxa = parseInt(item.valor.replace("R$ ", ""));
//     contTax += taxa;
//   }
//   if (item.descricao.startsWith("Recebimento")) {
//     const recieve = parseInt(item.valor.replace("R$ ", ""));
//     contRecieve += recieve;
//   }
// });

// console.log("Total Taxs: ", contTax + "$");
// console.log("Total recieves: ", contRecieve + "$");

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
transportes.split(";"); // ['Carro', 'Avião', 'Trem', 'Ônibus', 'Bicicleta']

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
// Retorne o último caracter da frase
html = html.split("span").join("a");
console.log(html);

const frase = "Melhor do ano!";

// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
