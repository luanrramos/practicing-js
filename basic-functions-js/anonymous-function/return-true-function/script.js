
function verificarSexoM(sexo) {
  if (typeof sexo !== "string") {
    return "Informe um sexo válido";
  } else if (sexo == "M" || sexo == "m") {
    return true;
  } else {
    return false;
  }
}

console.log(verificarSexoM("m"));
