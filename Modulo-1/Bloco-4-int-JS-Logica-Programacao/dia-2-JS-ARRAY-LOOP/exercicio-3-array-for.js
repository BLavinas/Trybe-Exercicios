let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumeros = 0;
let mediaNumeros = 0;
for (i = 0; i < numbers.length; i += 1) {
  somaNumeros += numbers[i];
  mediaNumeros = somaNumeros / numbers.length;
}

console.log("Total soma dos números:", somaNumeros);
console.log("A média aritmética é:", mediaNumeros);
