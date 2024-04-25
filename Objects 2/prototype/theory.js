// Example 01
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(andre.prototype); // undefined

// Example 02 - Prototype Herance

// function classRoom(students){
//   this.students = students
// }

// classRoom.prototype = {
//   addStudent: function(student){
//     this.students.push(student);
//   }
// }

// const myClass = new classRoom(["João", "Maria"]);

// myClass.addStudent("Pedro");
// console.log(myClass)

// Example 03 -

function ClassRoom(student) {
  this.students = student || [];
}

ClassRoom.prototype = {
  addStudent: function (student) {
    this.students.push(student);
  },
  showStudents: function () {
    return this.students;
  },
};

// 3 Ways to make herance

// const newClass = new ClassRoom(); WAY 01

// WAY 02
// function newClass() {
//   ClassRoom.call(this);
// }

// newClass.prototype = Object.create(ClassRoom.prototype);

// const newClasss = new newClass();
// newClass.addStudent("João");

class NewClass extends ClassRoom {}
