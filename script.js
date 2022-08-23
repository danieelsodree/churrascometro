//carne - 400gr por pessoa
//cerveja - 1200ml por pessoa + 6 horas - 2000ml
//refrigerante/agua - 1000ml por pessoa + 6 horas 150ml
//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = (0.5 * adultos + (0.3 * criancas));
    let qtdCerveja = (1.5 * adultos)
    let qtdAgua = (1 * adultos + (0.5 * criancas));
    
    let carne = document.getElementById("carne")
    let cerveja = document.getElementById("cerveja")
    let agua = document.getElementById("agua")

    if (duracao >= 6) {
        qtdTotalCarne = qtdCarne + (0.5 * adultos);
        qtdTotalCerveja = qtdCerveja + (1 * adultos);
        qtdTotalAgua = qtdAgua + (1 * adultos + (0.5 * criancas));

        carne.innerHTML = qtdTotalCerveja + "Kg de Carne";
        cerveja.innerHTML = qtdTotalCerveja + "L de Cerveja";
        agua.innerHTML = qtdTotalAgua + "L de Água";

    } else {
        carne.innerHTML = qtdCarne + "Kg de Carne";
        cerveja.innerHTML = qtdCerveja + "L de Cerveja";
        agua.innerHTML = qtdAgua + "L de Água";
    }
}