//CONTADOR DE FALTAS EM JAVASCRIPT

//variáveis de Matemática
let matTotal = 114;
let faltasMat = 100;
let porcFMat = 100;

//variáveis de Português
let portTotal = 114;
let faltasPort = 100;
let porcFPort = 100;

let aulasUteis = matTotal+portTotal;

//função que calcula as faltas com base nos dias faltantes (diasF seriam os inputs)
function calculoDasFaltas(diasF, diasTotais){
    console.log("Quantas vezes faltou? ")
    console.log("Então você faltou "+diasF+" dias.")

    porcFDaMatéria = (diasF/diasTotais)*100;
    console.log("O total de faltas da matéria em questão é "+porcFDaMatéria.toFixed(2)+"%.");

    if(porcFDaMatéria>15){
        console.log("Você passou do limite em "+Math.abs(porcFDaMatéria-15).toFixed(2)+"% ("+("")+" dias) ... sinto muito...");
    }

    return porcFDaMatéria;
}

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