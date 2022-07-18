const verifyIsNumber = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error("Você deve preencher este espaço");
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error("Você deve usar apenas números");
  }
};

function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    verifyIsNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById(
      "result"
    ).innerHTML = `Resultado: ERRO: ${error.message}`;
  } finally {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  }
}
window.onload = () => {
  try {
    const button = document.getElementById("button");
    button.addEventListener("click", sum);
  } catch (erro) {
    console.log(erro.message);
  }
};
