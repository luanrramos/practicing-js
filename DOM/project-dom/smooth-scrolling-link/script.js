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

function initScroll() {
  const internLinks = document.querySelectorAll(".js-menu li a[href^='#']");

  internLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

initScroll();
