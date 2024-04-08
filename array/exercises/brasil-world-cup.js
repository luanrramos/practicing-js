// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let brasilWCs = [1959, 1962, 1970, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < brasilWCs.length; i++) {
  // console.log(`O Brasil foi campeão da copa de ${brasilWCs[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
//ForEach (item, index, array)

// frutas.forEach(function (item) {
//   console.log(item);

//   if (item != "Pera") {
//     frutas.pop(item);
//   }
// });


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

frutas.forEach(function(fruta){
  var ultimaFruta = frutas[frutas.length - 1];
  console.log(frutas);
})
