//CONTADOR DE FALTAS EM JAVASCRIPT (Finalizado)

//variáveis
let faltas
let materia

//variáveis de Matemática
let matTotal = 120;
let faltasMat = 12;
let porcFMat = 100;

//variáveis de Português
let portTotal = 120;
let faltasPort = 100;
let porcFPort = 100;

let aulasUteis = matTotal+portTotal;
let totalFaltasM = faltasPort+faltasMat;

//função que calcula as faltas com base nos dias faltados (diasF seriam os inputs)
function calculoDasFaltas(diasF, diasTotais){
    console.log("Quantas vezes faltou? ")
    console.log("Então você faltou "+diasF+" dias.")

    let porcFDaMatéria = (diasF/diasTotais)*100;
        console.log("O percentual total de faltas da matéria em questão é "+porcFDaMatéria.toFixed(2)+"%. ("+diasF.toFixed(0)+"/"+diasTotais+ ")");
    
    return porcFDaMatéria;
}

//função para transformar o percentual em dias
function limiteFaltas (diasTotais, faltas, porcFDaMatéria){
    let limite = diasTotais * (25 / 100);
    let dias = faltas-limite;

    if (dias>0) {
        console.log("Você passou do limite em "+(porcFDaMatéria-25).toFixed(2)+"% ("+(dias).toFixed(0)+" dias) ... Sinto muito...");    
    } 
    else if(dias==0){
        console.log("Você está exatamente no limite! Por pouco!");
    }
    else{
        dias *=-1;
        porcFDaMatéria *=-1;
        console.log("Você está abaixo do limite em "+(75-porcFDaMatéria).toFixed(2)+"% ("+(dias).toFixed(0)+" dias) ... Muito bem...");
    }
}

//função caso...seja para a seleção de qual disciplina quer fazer a contagem das faltas 
function selecao (materia){
console.log("Selecione o código da matéria:\n1 - Matemática\n2 - Português\n3 - Global");

switch(materia){
    case 1: 
        porcFMat = calculoDasFaltas(faltasMat, matTotal);
        limiteFaltas (matTotal, faltasMat, porcFMat);
        break;
    case 2:
        porcFPort = calculoDasFaltas(faltasPort, portTotal);
        limiteFaltas (portTotal, faltasPort, porcFPort);
        break;
    case 3:
        let porcFGlobal = ((totalFaltasM)/aulasUteis)*100;
        console.log("A sua porcentagem global de faltas é de "+porcFGlobal.toFixed(2)+"% ("+(totalFaltasM).toFixed(0)+"/"+aulasUteis+ ")");
        limiteFaltas(aulasUteis, totalFaltasM, porcFGlobal)
        break;
    }
}
materia = selecao(2);
materia = selecao(1);
materia = selecao(3);