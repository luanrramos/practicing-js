export default function initScrollAnimation() {
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
