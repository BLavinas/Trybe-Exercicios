// imposto 20%
const custoProduto = 1;
const valorProduto = 3;

if (custoProduto >= 0 && valorProduto >= 0){
    const custoTotal = custoProduto * 1.2
    let lucro = (valorProduto - custoTotal) * 1000
    console.log(lucro);
} else {
    console.log("ERRO!!! PROGRAMA ENCERRADO!!!");
}

