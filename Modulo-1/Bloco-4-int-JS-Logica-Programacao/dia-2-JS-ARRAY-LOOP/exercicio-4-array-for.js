let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumeros = 0;
let mediaNumeros = 0;
for (i = 0; i < numbers.length; i += 1) {
  somaNumeros += numbers[i];
  mediaNumeros = somaNumeros / numbers.length;
}

console.log("Total soma dos números:", somaNumeros);
console.log("A média aritmética é:", mediaNumeros);

if (mediaNumeros > 20) {
  console.log("A média é maior que 20");
} else {
  console.log("A média é menor ou igual a 20");
}
