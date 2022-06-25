let maiorNumeroPrimo = 0;

for (numeros = 2; numeros < 51; numeros += 1) {
    let ehPrimo = true;
   for (divisorAtual = 2; divisorAtual < numeros; divisorAtual += 1)
    if (numeros % divisorAtual === 0){
        ehPrimo = false;
    }
    if (ehPrimo) {
        maiorNumeroPrimo = numeros;
    }
    
}
console.log(maiorNumeroPrimo);