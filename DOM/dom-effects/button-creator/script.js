const form = document.querySelector(".controles");
const btn = document.querySelector(".btn");
const cssText = document.querySelector(".css");

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  text(value) {
    this.element.textContent = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join("</span> <span>");
}

function saveValues(name, value) {
  localStorage[name] = value;
}
function setValue(name, value) {
  const properties = Object.keys(localStorage);
  properties.forEach((property) => {
    handleStyle[property](localStorage[property]);
    form.elements[property].value = localStorage[property];
  });
  showCss();
}
setValue();
form.addEventListener("change", handleChange);
