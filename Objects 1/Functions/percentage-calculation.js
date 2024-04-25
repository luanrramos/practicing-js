function calcPct(x, y){
  return ((y*x) / 100);
}
let x = 80;
let y = 100;

let pct = calcPct(x, y);
console.log(`${y}% de ${x} é ${pct}`);