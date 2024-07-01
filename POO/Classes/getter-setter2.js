const person = {
  firstName: "Luan",
  lastName: "Ramos",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const parts = (value.split(" "));
    this.firstName = parts[0]
    this.lastName = parts[1]
  },
};
person.fullName = "Maria Nunes";

console.log(person.fullName);
