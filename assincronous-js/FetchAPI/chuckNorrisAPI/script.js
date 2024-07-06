const btn = document.querySelector(".btn");

const content = document.querySelector(".content");

function joke() {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      content.innerText = body.value;
    });
}

btn.addEventListener("click", joke);
