// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function People(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

People.prototype.fullName = function (name, lastName) {
  return this.name + " " + this.lastName;
};

const Luan = new People("Luan", "Ricardo Nunes Ramos", 19);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
// console.log(NodeList);

// console.log(HTMLCollection.prototype);
// console.log(document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
