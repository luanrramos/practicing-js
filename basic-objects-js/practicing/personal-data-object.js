var myData = {
  firstName: "Luan",
  lastName: "Ricardo Nunes Ramos",
  age: 19,
  
}

myData.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(myData.firstName, myData.age);
console.log(myData.fullName());
