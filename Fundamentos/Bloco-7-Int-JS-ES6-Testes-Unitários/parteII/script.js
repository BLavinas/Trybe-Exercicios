// Exercicio 1
// const fatorial = (number) => {
//   let result = 1;
//   if (number === 0 || number === 1) return 1;
//   for (i = number; i > 1; i -= 1) {
//     number--;
//     result *= number;
//   }
//   return result;
// };
// console.log(fatorial(4));

//Exercicio 2
//Retorna maior palavra

const longestWord = (string) => {
  let stringToArray = string.split(" "); //transforma string em array de string
  let biggestWord = stringToArray[0];
  for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i].length > biggestWord.length) {
      //condição para verificar se palavra que esta sendo iterada é maior que palavra deifinida em biggestWord
      biggestWord = stringToArray[i];
    }
  }
  return biggestWord;
};
console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

//Exercicio 3
//Contando numero de cliques em botão
const btnClick = document.getElementById("btn-countClick"); //captura elemento botão
const textCount = document.getElementById("text"); //captura elemento que vai apresentar cliques contados no html
let clickCount = 0; //definindo contador de cliques como  0
btnClick.addEventListener(
  //escutador de eventos 'click' com arrow function.
  "click",
  () => (textCount.innerHTML = clickCount += 1) //atribui + 1 ao contador cada vez que é clicado e este valor é atribuido ao texto html
);

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
