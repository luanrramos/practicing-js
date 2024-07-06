const content = document.querySelector(".content");
const blockchainApi = fetch("https://blockchain.info/ticker")
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    content.innerText = `1 BTC equivale a ${body.BRL.last} R$`;
    setInterval(() => {
      content.innerText = `1 BTC equivale a ${body.BRL.last} R$`;
    }, 30000);
  });
