// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const cursosArray = Array.from(cursos);

const objetoCursos = cursosArray.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  };
});
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaior100 = numeros.filter((numero) => {
  return numero > 100;
});
console.log(numerosMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const instrumentoBaixo = instrumentos.some(
  (instrumento) => instrumento === "Baixo"
);
console.log(instrumentoBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

let cont = 0;
const total = compras.reduce((acc, produto, index) => {
  const x = produto.preco.replace("R$ ", "");
  const y = parseFloat(x);

  cont = parseFloat(cont + y);
  return cont.toFixed(2);
}, 0);
console.log(total);
