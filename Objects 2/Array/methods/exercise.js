const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const firstFood = comidas.shift(); // Pizza
const lastFood = comidas.pop(); //Macarrão
comidas.push("rice");
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
// estudantes.forEach((estudante) => {
//   if (estudante.includes("Joana")) {
//     console.log(estudante + " existe!");
//   } else if (estudante.includes("Juliana")) {
//     console.log(estudante + "não existe!");
//   } else {
//     console.log(estudante);
//   }
// });

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosBackup = carros.slice();
carros.pop();
