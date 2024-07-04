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
  const internLinks = document.querySelectorAll(".js-menu a[href^='#']");

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

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowsScroll = window.innerHeight * 0.6;
  function animaScroll(event) {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowsScroll;
      if (sectionTop < 0) {
        section.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
  animaScroll();
}
initScrollAnimation();

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

function initTab() {
  const tabMenu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".grid-content-desc section");
  tabContent.forEach((section) => {
    section.dataset.anime = "";
  });

  tabContent[0].dataset.anime = "showRight";
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((itemMenu) => {
        delete itemMenu.dataset.anime;
      });
      tabContent[index].dataset.anime = "showRight";
    }

    tabMenu.forEach((image, index) => {
      image.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTab();

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
