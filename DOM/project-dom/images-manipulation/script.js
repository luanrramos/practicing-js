function initTab() {
  const tabMenu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".grid-content-desc section");
  tabContent[0].classList.add("active");

  function activeTab(index) {
    console.log(tabContent[index]);
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
initTab();

function initAccordion() {
  const allAsk = document.querySelectorAll(".js-accordion li span");
  const activeClass = "active";
  if (allAsk.length) {
    allAsk[0].classList.add(activeClass);
    allAsk[0].nextElementSibling.classList.add(activeClass);
    function activeAsk(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    allAsk.forEach((ask) => {
      ask.addEventListener("click", activeAsk);
    });
  }
}
initAccordion();
