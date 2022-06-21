let examStatus = "aprovada"
switch(examStatus) {
    case "aprovada":
        console.log("Parabéns, voce foi aprovado");
        break;
    case "reprovada":
        console.log("Tente outra vez");
        break;
    case "lista":
        console.log("Aguarde a lista de espera");
        break;
        default:
            console.log("Não se aplica");
 }