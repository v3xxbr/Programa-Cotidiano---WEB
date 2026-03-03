//CALCULADORA DE FALTAS EM JAVASCRIPT (caso não possa utilizar funções)

//variáveis
let aulasTotal = 114;
let faltas = 100;
let porcentagem = 100;
let materia = 1
let materia2 = 0
 let porcFGlobal = (100*(faltas + materia2))/aulasTotal;

//função caso...seja para a seleção de qual disciplina quer fazer a contagem das faltas 
console.log("Selecione o código da matéria:\n1 - Disciplina\n2 - Sair");

switch(materia){
    case 1: 
        console.log("Quantas vezes faltou? ")
        console.log("Então você faltou "+faltas+" dias.")

        porcFDaMatéria = (faltas/aulasTotal)*100;
        console.log("O percentual total de faltas da matéria em questão é "+porcFDaMatéria.toFixed(2)+"%. ("+faltas.toFixed(0)+"/"+aulasTotal+ ")");

        limite = aulasTotal * 75 / 100

        if (faltas > limite) {
          dias = faltas - limite
          console.log("Você passou do limite em "+(porcFDaMatéria-75).toFixed(2)+"% ("+dias.toFixed(0)+" dias) ... Sinto muito...");
        
      } else if (faltas < limite) {
          dias = limite - faltas
          console.log("Você está abaixo do limite em "+(75-porcFDaMatéria).toFixed(2)+"% ("+dias.toFixed(0)+" dias) ... Muito bem...");
    }
       
        console.log("A sua porcentagem global de faltas é de "+(porcFGlobal).toFixed(2)+"%.")
        break;
    case 2:
        break;
}
