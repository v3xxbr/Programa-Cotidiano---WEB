//CONTADOR DE FALTAS EM JAVASCRIPT (AINDA NÃO FINALIZADO)

//variáveis de Matemática
let matTotal = 114;
let faltasMat = 12;
let porcFMat = 100;

//variáveis de Português
let portTotal = 114;
let faltasPort = 100;
let porcFPort = 100;

let aulasUteis = matTotal+portTotal;

//função que calcula as faltas com base nos dias faltados (diasF seriam os inputs)
function calculoDasFaltas(diasF, diasTotais){
    console.log("Quantas vezes faltou? ")
    console.log("Então você faltou "+diasF+" dias.")

    porcFDaMatéria = (diasF/diasTotais)*100;
    console.log("O percentual total de faltas da matéria em questão é "+porcFDaMatéria.toFixed(2)+"%.");

    if(porcFDaMatéria>25){
        console.log("Você passou do limite em "+Math.abs(porcFDaMatéria-75).toFixed(2)+"% ("+("")+"de dias) ... Sinto muito...");
    }

     else{
        console.log("Você está abaixo do limite em "+Math.abs(25-porcFDaMatéria).toFixed(2)+"% ("+("")+"de dias) ... Muito bem...");
    }

    return porcFDaMatéria;
}

// caso...seja para a seleção de qual disciplina quer fazer a contagem das faltas 
console.log("Selecione o código da matéria:\n1 - Matemática\n2 - Português\n3 - Global");
let materia = 2;

switch(materia){
    case 1: 
        porcFMat = calculoDasFaltas(faltasMat, matTotal);
        break;
    case 2:
        porcFPort = calculoDasFaltas(faltasPort, portTotal);
        break;
    case 3:
        let porcFGlobal = (100*(faltasMat+faltasPort))/aulasUteis;
        console.log("A sua porcentagem global de faltas é de "+porcFGlobal.toFixed(2)+"%.")
        break;
}


console.log("Selecione o código da matéria:\n1 - Matemática\n2 - Português\n3 - Global");
materia = 1;

switch(materia){
    case 1: 
        porcFMat = calculoDasFaltas(faltasMat, matTotal);
        break;
    case 2:
        porcFPort = calculoDasFaltas(faltasPort, portTotal);
        break;
    case 3:
        let porcFGlobal = (100*(faltasMat+faltasPort))/aulasUteis;
        console.log("A sua porcentagem global de faltas é de "+porcFGlobal.toFixed(2)+"%.")
        break;
}

console.log("Selecione o código da matéria:\n1 - Matemática\n2 - Português\n3 - Global");
materia = 3;

switch(materia){
    case 1: 
        porcFMat = calculoDasFaltas(faltasMat, matTotal);
        break;
    case 2:
        porcFPort = calculoDasFaltas(faltasPort, portTotal);
        break;
    case 3:
        let porcFGlobal = (100*(faltasMat+faltasPort))/aulasUteis;
        console.log("A sua porcentagem global de faltas é de "+porcFGlobal.toFixed(2)+"%.")
        break;
}
