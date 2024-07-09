function perimetroForma(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}

perimetroForma(10);
perimetroForma(10, 4, 20);
