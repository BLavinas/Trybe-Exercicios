//Exercicio 1
// const fatorial = (number) => {
//   let result = 1;
//   if (number === 0 || number === 1) return 1;
//   for (i = number; i > 1; i -= 1) {
//     number--;
//     result = result * number;
//   }
//   return result;
// };
// console.log(fatorial(4));

//Exercicio 2

// const longestWord = (string) => {
//   let stringToArray = string.split(" ");
//   let biggestWord = stringToArray[0];
//   for (let i = 0; i < stringToArray.length; i += 1) {
//     if (stringToArray[i].length > biggestWord.length) {
//       biggestWord = stringToArray[i];
//     }
//   }
//   return biggestWord;
// };
// console.log(
//   longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
// );

// "Antônio foi no banheiro e não sabemos o que aconteceu";retorna 'aconteceu'

//Exercicio 3
// const btnClick = document.getElementById("btn-countClick");
// const textCount = document.getElementById("text");
// let clickCount = 0;
// btnClick.addEventListener(
//   "click",
//   () => (textCount.innerHTML = clickCount += 1)
// );

//Exercicio 4
//Função para mudar letra para nome:
//Criando Função
const changeXtoName = (name) => {
  const frase = "Tryber x aqui!";
  let stringArray = frase.split(" "); //transformando string em array
  for (i = 0; i < stringArray.length; i += 1) {
    //iterando pelo array de strings
    if (stringArray[i] === "x") {
      //condição para capturar elemento do array
      stringArray[i] = name; //atribuindo name ao elemento do array capturado
    }
  }
  return stringArray.join(" "); //retorno da função transformando array em string novamente
};
console.log(changeXtoName("paulo"));

const skillsFunction = (completeSkill) => {
  //função para concatenar texto
  const skills = ["JS", "CSS", "HTML"];
  let resultado = `${completeSkill}
  Minhas três principais habilidades são:
  `; //concatenação do parametro da função com texto pre definido
  skills.forEach((skill) => {
    //iterando pelo array pré definido 'skills' com função forEach
    resultado = `${resultado}
    * ${skill}`; //atribui a resultado a concatenação da variável resultado definida acima com cada iteração do forEach
  });
  return resultado;
};
console.log(skillsFunction(changeXtoName("Paulo")));
