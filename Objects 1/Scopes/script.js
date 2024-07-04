// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(cor, marca, portas);
// Erro 1: Var não é o valor de uma variável e sim sua atribuição
// Erro 2: as variáveis marca e portas só existem dentro do seu respectivo bloco criado, caso queiramos acessar elas, temos que declarar as mesmas fora do bloco (scopo) ou dar console log dentro do bloco.

// Como corrigir o erro abaixo?
// dois estava dentro do scopo da função somarDois(), portanto, para usarmos a variável dois em outras funções teriamos que retirá-la do escopo local (dentro da função somardois()) para o escopo global (fora de tudo).
const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
