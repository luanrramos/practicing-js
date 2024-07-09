const content = document.querySelector(".content");
const blockchainApi = fetch("https://blockchain.info/ticker");

async function showValue() {
  const value = await (await blockchainApi).json();
  content.innerText = `1 BTC equivale a ${value.BRL.last} R$`;
  console.log(value);
}

showValue();

// setInterval(() => {
//   content.innerText = `1 BTC equivale a ${body.BRL.last} R$`;
// }, 30000);
