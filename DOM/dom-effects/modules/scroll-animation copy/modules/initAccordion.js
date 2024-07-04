export default function initAccordion() {
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
