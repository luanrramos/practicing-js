// Dom manipulation with constructor functions
function activeBg(item) {
  const element = document.querySelectorAll(item);
  this.activeFunc = function () {
    element.classList.add("activeBg");
  };
}
