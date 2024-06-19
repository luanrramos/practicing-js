// EXERCISE 01
function contador(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

// contador(10) -> 1,2,3,4,5,6,7,8,9,10

// EXERCISE 02
function tabuada(numero) {
  if (numero < 1 || numero > 10) {
    console.log("Apenas valores de 1 à 10!");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i} `);
    }
  }
}
// tabuada(6) // -> 6x1 = 6 ... 6x10 = 60

// EXERCISE 03
const hora = new Date();
// console.log(`Agora são ${hora.getHours()}:${hora.getMinutes()} da manhã`)

// EXERCISE 04
const ano = new Date();
// console.log(`Estamos em ${ano.getFullYear()}`)

//EXERCISE 05
function qualOMaior(n1, n2) {
  if (n1 > n2) {
    return console.log(n1, "é maior");
  } else {
    return console.log(n2, "é maior");
  }
}

// qualOMaior(6, 2)

//EXERCISE 06
// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const data = [
  {
    nome: "José",
    salario: 2000,
    qntFilhos: 3,
  },
  {
    nome: "Lucas",
    salario: 6000,
    qntFilhos: 2,
  },
  {
    nome: "Maria",
    salario: 10000,
    qntFilhos: 6,
  },
  {
    nome: "Paulo",
    salario: 20200,
    qntFilhos: 7,
  },
  {
    nome: "André",
    salario: -2000,
    qntFilhos: 1,
  },
];

// Com o laço FOR
function mediaComFor(media) {
  let acc = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].salario > 0) {
      acc += data[i].salario;
    }
  }
  return acc / (data.length - 1);
}

function mediaFilhos() {
  let acc = 0;
  for (familia of data) {
    acc += familia.qntFilhos;
  }
  let mediaFilhos = acc / (data.length - 1);
  return mediaFilhos;
}

function maiorSalario() {
  let acc = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].salario > acc) {
      acc = data[i].salario;
    }
  }
  return acc;
}

// console.log(`A média salarial da população é de: ${mediaComFor()} R$`);
// console.log(`A média de filhos da população é de: ${mediaFilhos()}`);
// console.log(`O maior salário da população é de: ${maiorSalario()} R$`);

// Com forEach
function mediaComFE() {
  let acc = 0;
  data.forEach((item) => {
    if (item.salario > 0) {
      acc += item.salario;
    }
  });
  let media = acc / (data.length - 1);
  return media;
}
// console.log(`A média salarial da população é de: ${mediaComFE()} R$`);

//Com o map()
function mediaComMap() {
  let acc = 0;
  data.map((familia) => {
    if (familia.salario > 0) {
      acc += familia.salario;
    }
  });
  let media = acc / (data.length - 1);
  return media;
}
//  console.log(`A média salarial da população é de: ${mediaComMap()} R$`);

function taxaMensalJ(vi, va, t) {
  let calculoTaxa = ((va - vi) / vi) * t;
  return `${calculoTaxa}%`;
}

// console.log(taxaMensalJ(1000, 1500, 13))

// [ ] Escreva um programa onde, você cria uma função geradora de desconto.
// A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
// Os descontos funcionam da seguinte forma:
// Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
// Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
// Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
// Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto -
// Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
// Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
// Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
// Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
// Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
// Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
// Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
// Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
// Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.

function geradorDesc(nomeCliente, valorTot, primeiroCompra, aVista) {
  let desconto = 0;

  //Condição para caso for a primeira compra da cliente e o pagamento for a vista
  if (primeiroCompra && aVista) {
    if (valorTot > 1000) {
      desconto = valorTot * 0.3;
      valorTot -= desconto;
    } else if (valorTot > 500) {
      desconto = valorTot * 0.25;
      valorTot -= desconto;
    } else if (valorTot < 500) {
      desconto = valorTot * 0.2;
      valorTot -= desconto;
    }
  }
  //Condição para caso for a primeira compra da cliente e o pagamento NÃO for a vista
  else if (primeiroCompra && !aVista) {
    if (valorTot > 1000) {
      desconto = valorTot * 0.2;
      valorTot -= desconto;
    } else if (valorTot > 500) {
      desconto = valorTot * 0.15;
      valorTot -= desconto;
    } else if (valorTot < 500) {
      desconto = valorTot * 0.1;
      valorTot -= desconto;
    }
  }

  //Condição para caso NÃO for a primeira compra da cliente e o pagamento for a vista
  else if (!primeiroCompra && aVista) {
    if (valorTot > 1000) {
      desconto = valorTot * 0.2;
      valorTot -= desconto;
    } else if (valorTot > 500) {
      desconto = valorTot * 0.15;
      valorTot -= desconto;
    } else if (valorTot < 500) {
      desconto = valorTot * 0.1;
      valorTot -= desconto;
    }
  }

  //Condição para caso NÃO for a primeira compra da cliente e o pagamento NÃO for a vista
  else if (!primeiroCompra && !aVista) {
    if (valorTot > 1000) {
      desconto = valorTot * 0.1;
      valorTot -= desconto;
    } else if (valorTot > 500) {
      desconto = valorTot * 0.05;
      valorTot -= desconto;
    } else if (valorTot < 500) {
      valorTot = valorTot;
    }
  }
  if (desconto != 0) {
    console.log(`Muito obrigado por comprar com a gente,${nomeCliente}!
      Valor total sem desconto: ${valorTot + desconto} R$
      Valor total com desconto: ${valorTot}`);
  } else {
    console.log(`Muito obrigado por comprar com a gente,${nomeCliente}!
      Valor total da compra: ${valorTot} R$
      Parabéns! Você ganhou um cupom de ${valorSorteado()}% de desconto no sorteio! `);

  }
}
function valorSorteado(){
  const numeroSorteado = Math.floor(Math.random() * 11) + 10

  return numeroSorteado;
}
geradorDesc("Luana", 200, false, false);
