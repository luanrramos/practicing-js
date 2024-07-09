// Desestruturação em Objetos
const carro = {
  marca: "Fiat",
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;
// console.log(marca); // Fiat
// console.log(ano); // 2018

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// Desestruturação em Arrays

const frutas = ["banana", "maça", "pera"];

const [fruta1, fruta2, fruta3] = frutas;

// console.log(fruta1, fruta2, fruta3);

// NESTING
// const cliente = {
//   nome: "Andre",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Video JS", "Video HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// const {
//   fisicas,
//   digitais,
//   digitais: { livros, videos },
// } = cliente.compras;

// console.log(fisicas);
// console.log(livros);
// console.log(videos);
// console.log(digitais);

//Nome de variáveis

// const cliente = {
//   nome: "Andre",
//   compras: 10,
// };

// const { nome, compras } = cliente;
// // ou
// const { nome: nomeCliente, compras: comprasCliente } = cliente;

const cliente = {
  nome: "Andre",
  compras: 10,
};

const { nome, compras, email = "email@gmail.com", cpf } = cliente;
// console.log(email); // email@gmail.com
// console.log(cpf); // undefined

function handleKeyboard({ key }) {
  console.log(key);
}
// Com Destructuring
function handleKeyboard({ key }) {
  console.log(key);
}

// document.addEventListener("keyup", handleKeyboard);

// EXERCÍCIOS

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;
// console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

// Forma 1 - Padrao
function trocarValor(novoNomeAtivo, novoNomeInativo) {
  cursoAtivo = novoNomeAtivo;
  cursoInativo = novoNomeInativo;
  console.log(cursoAtivo, cursoInativo);
}

// trocarValor("Golang", "CSS");
// console.log(cursoAtivo, cursoInativo);

// [cursoAtivo, cursoInativo] = ["Golang", "CSS"]; // Forma 2 - destruturando uma Array

// // Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { nome: bobNome, raca: racaBob, cor: corBob } = cachorro;

console.log(bobNome, racaBob, corBob);
