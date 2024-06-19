function teste(nome = "") {
  if (nome === "") {
    throw new Error("nome é OBRIGATORIO");
  }
  console.log("depois do erro");
}

try {
  teste();
} catch (e) {
  console.log(e);
}
