// const promessa = new Promise((resolve, reject) => {
//   let condicao = false
//   if (condicao) {
//     resolve("Promise resolvida");
//   }
//   else {
//     reject(Error("Promise não-resolvida"));
//   }
// });

// const retornoTrue = promessa.then(resolucao => console.log(resolucao), (resolucao => console.log(resolucao)))

const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const tudoCarregado = Promise.race([login, dados]);
tudoCarregado.then((respostas) => {
  console.log(respostas); // Array com ambas respostas
});
