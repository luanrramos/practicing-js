// URL do endpoint
const url = "https://aczgdesafio.rj.r.appspot.com/passo1";

// Função para realizar a requisição GET
async function obterTokenEPergunta() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Token:", data.token);
      console.log("Pergunta:", data.pergunta);
    } else {
      console.error("Falha na requisição. Status code:", response.status);
    }
  } catch (error) {
    console.error("Erro ao realizar a requisição:", error);
  }
}

// Chamar a função
obterTokenEPergunta();
