function initTab() {
  const tabMenu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".grid-content-desc section");
  tabContent[0].classList.add("active");
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((itemMenu) => {
        itemMenu.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    tabMenu.forEach((image, index) => {
      image.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const allAsk = document.querySelectorAll(".js-accordion li span");
  const activeClass = "";

  allAsk[0].classList.add("active");
  // allAsk[0].nextElementSibling.classList.add(activeClass);
  function activeAsk() {
    console.log(this);
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }
  allAsk.forEach((ask) => {
    ask.addEventListener("click", activeAsk);
  });
}
initAccordion();
