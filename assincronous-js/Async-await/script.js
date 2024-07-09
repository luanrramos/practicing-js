const url = "./dados.json";

// Forma 1
async function puxarDados() {
  const dadosResponse = await fetch(url);

  const dadosJson = await dadosResponse.json();
  console.log(dadosJson);
}

puxarDados();

//Forma 2
async function puxarDados2() {
  const dadosResponse = await (await fetch(url)).json();

  console.log(dadosResponse);
}
puxarDados2();
