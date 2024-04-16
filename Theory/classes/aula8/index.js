/*
    Luan Ricardo Nunes Ramos tem 19 anos, pesa 70 KG
    tem 1.8 de altura e seu iMC é de 25.54542525534
    Luan Ricardo Nunes nasceu em 1980
*/

const nome = 'Luan Ricardo';
const sobrenome = 'Nunes Ramos';
const idade = 19;
const peso = 70;
const altura = 1.84;
let imc = peso / (altura ** 2); 
let anoNascimento = 2023 - idade;

console.log(nome,sobrenome,"tem",idade,"anos, pesa",peso," KG")
console.log("Tem",altura,"m de altura e seu IMC é");
console.log(`${imc}`); 


console.log(nome,sobrenome,"nasceu em",anoNascimento);