function evenOrOdd(number){
  if (typeof number !== "number"){
    return ("ERROR")
  }
  else if (number % 2 == 0){
    return ("Even")
  }
  else{
    return ("Odd")

  }
}

console.log(evenOrOdd(2))