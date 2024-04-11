//Arrow function is a simplified way to write the basic ForEach function.
// Instead of (x.forEach(function(item){}), use (x.forEach(item) => {})

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item);
// });

// sem parâmetro precisa dos parênteses, mesmo vazio
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// Mostre no console cada paráfrado do site

// const eachP = document.querySelectorAll("p");

// eachP.forEach((item) => {
//   console.log(item);
// });

// // Mostre o texto dos parágrafos no console

// eachP.forEach((item) => {
//   console.log(item.innerText);
// });

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));
