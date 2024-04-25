const eachImg = document.querySelectorAll("img");
console.log(eachImg);
const eachImgArray = Array.from(eachImg);
eachImg.forEach(function (item, index, array) {
  console.log(item);
});
