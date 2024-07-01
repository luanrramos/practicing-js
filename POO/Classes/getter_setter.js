class Person {
  _age = 21;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get age(){
    return this._age;
  }
  set age(x) {
    if (typeof x == "number"){

      this._age = x;
    }
  }
}

const rafael = new Person("Rafael", "Cunha");
const ana = new Person("Ana", "Silva");

rafael.age = 29;

// console.log(rafael.fullName, "tem ", rafael.age, "anos");
// console.log(ana.fullName, "tem", ana.age, "anos.");
