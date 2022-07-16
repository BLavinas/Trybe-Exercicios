// Exercicio 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArray = (array) => {
  const numbersOrdered = array.sort((a, b) => a - b);
  return numbersOrdered;
};

const arrayOrdered = sortArray(oddsAndEvens);
console.log(arrayOrdered);
