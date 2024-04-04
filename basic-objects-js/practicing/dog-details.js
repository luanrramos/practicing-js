// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  race: "Labrador",
  age: 10,
  color: "Black",

  bark(human){
    if (human === "man"){
      return("Dog Barks!");
    }
    else{
      return("Sweet dog");
    }
  },
}

console.log(dog.bark("man"));