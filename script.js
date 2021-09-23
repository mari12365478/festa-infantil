// Doces - 400 gr por pessoas + de 6 horas - 650
// Salgadinhos - 300 gr por pessoa + 6 horas - 550
//Refrigerante/ - 1200ml por pessoa + 6 horas - 2000ml

// adultos valem por 0,5

let inputCriancas = document.getElementById("criancas");
let inputAdultos = document.getElementById("adultos");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    
    let criancas = inputCriancas.value;
    let adultos = inputAdultos.value;
    let duracao = inputDuracao.value;

    let qdtTotalDoces = docesPP(duracao) * criancas + (docesPP(duracao)/2 * adultos);
    let qdtTotalSalgadinhos = salgadinhosPP(duracao) * criancas + (salgadinhosPP(duracao)/2 * adultos);
    let qdtTotalRefrigerante = refrigerantePP(duracao) * criancas + (refrigerantePP(duracao)/2 * adultos);
  
    resultado.innerHTML  = `<p>${qdtTotalDoces}g de Doces</p>`
    resultado.innerHTML += `<p>${qdtTotalSalgadinhos}g de Salgadinhos</p>`
    resultado.innerHTML += `<p>${qdtTotalRefrigerante}ml de Refrigerante</p>`

}

function docesPP(duracao){
     if (duracao >= 6) {
         return 650;
     }else{
         return 400;
     }
}

function salgadinhosPP(duracao){
    if (duracao >= 6) {
        return 550;
    }else{
        return 300;
    }
}
function refrigerantePP(duracao){
    if (duracao >= 6) {
        return 2000;
    }else {
        return 1200;
    }
}
