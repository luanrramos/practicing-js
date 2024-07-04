const animaisLista = document.querySelector(".animais-lista");

animaisLista.classList.toggle("ativo");
function clicou() {
  // console.log(animaisLista);
}
animaisLista.addEventListener("click", function clicou() {
  // console.log(animaisLista);
  animaisLista.classList.toggle("ativo");
});

//Changing all img's alternatives text of the page
// if (item.hasAttribute("alt" === false)) {};
// imgsArray.removeAttribute("alt"); // remove o alt
// imgsArray.hasAttributes(); // true / false se tem algum atributo

// Adicione a classe ativo a todos os itens do menu
// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// const menu = document.querySelectorAll(".navigation a");
// const menuArray = Array.from(menu);
// const i = 0;

// menuArray.forEach((item) => {
//   console.log(item);
//   if (i === 0) {
//     item.classList.add("ativo");
//     i++;
//   } else {
//     item.classList.remove("ativo");
//   }

// });
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index, array) => {
  // console.log(item.hasAttribute("alt"));
  // item.setAttribute("alt", `Texto ${i++}`); // muda o alt
  // console.log(item);
});
// const imgs = document.querySelectorAll("img");
// const imgsArray = Array.from(imgs);

// imgs.hasAttribute("alt");

// Modifique o href do link externo no menu

const menu = document.querySelectorAll(".navigation a");
menu[menu.length - 1].setAttribute("alt", "Troquei :)");
// item.setAttribute("alt", `Texto ${i++}`); // muda o alt
