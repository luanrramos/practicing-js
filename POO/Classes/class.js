class Person {

  constructor(name, age){
    console.log(`I am ${name} and i'm ${age}`)

    this.name = name;
    this.age = age;
  }
  
  talk() {
    console.log(`Hello! I'm ${this.name}, and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Luan", 21);
const person2 = new Person("Rafael", 33);


console.log(person1.talk());
console.log(person2.talk());
