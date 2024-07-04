export default function initTab() {
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
