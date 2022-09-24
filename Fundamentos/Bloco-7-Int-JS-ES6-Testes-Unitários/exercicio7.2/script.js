//Cria função para somar 2 parametros
const sum = (value1, value2) => value1 + value2;
console.log(sum(10, 20));
//************************************************************************ */

//Função que retorna erro quando valor inserido não for número
const sum = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return "Os valores devem ser numéricos";
  }
  return value1 + value2;
};

console.log(sum(2, "3"));
//************************************************************************* */
//Utilizando throw para lançar(throw em ingles) exceção!!
const sum = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos"); //sintaxe : throw new Error('Mensagem de Erro')
  }
  return value1 + value2;
};

console.log(sum(2, "3"));
//**************************************************************************** */
//Utilizando --throw-- para lançar erro, --try-- para testar condição, --catch-- para pegar erro caso condição seja falsa.
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores devem ser numéricos"); //Lança exceção com mensagem definida ('')
  }
};

const sum = (value1, value2) => {
  //Nova função para testar condição com --try--, pegar erro com --catch-- caso condição falsa.
  try {
    //iniciando condição. Sintaxe: try {condição}
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    //pegando erro se condição for falsa. Sintaxe catch (variavelObjetoErroPadraoJS) {condição;}
    return error.message; //.message é a mensagem definida que vai estar contida do error.
  }
};

// console.log(sum(2, "3"));
//Cria objeto dinamicamente.
const createObject = (objeto, chave, valor) => (objeto = { [chave]: valor });
console.log(createObject("Pessoa", "Nome", "Bernardo"));
//************************************************************************** */

//Objetos: Parte II - Object.keys
//Object.Keys retorna as chaves de um objeto.
//Sintaxe: Object.keys(objeto))

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
console.log(Object.keys(coolestTvShow));
//******************************************************************************************** */
//Objetos: Parte III - Object.values
//Object.values retorna os valores das chaves de um objeto
//Sintaxe Object.value(objeto)
console.log(Object.values(coolestTvShow));
//********************************************************************************************* */
//Objetos: Parte IV - Object.entries
//Object.entries retorna as chaves e valores de um objeto
//Sintaxe Object.entries(objeto)
const países = {
  França: "Paris",
  Brasil: "Brasília",
  Espanha: "Madrid",
  Portugal: "Lisboa",
};
console.log(Object.assign(países, coolestTvShow));
console.log(Object.entries(países));
console.log(países["França"]);
//Para pegar cada chave com seu valor separadamente, podemos iterar entre o objeto. Onde posição [0] será chave e posição [1] será valor;
const pairKeyValue = Object.entries(países);
for (index in pairKeyValue) {
  console.log("--------");
  console.log("País:", pairKeyValue[index][0]);
  console.log("Capital:", pairKeyValue[index][1]);
}
console.log(pairKeyValue);
//********************************************************************************************* */
//Exercícios parte I
