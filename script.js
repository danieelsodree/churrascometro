//carne - 400gr por pessoa
//cerveja - 1200ml por pessoa + 6 horas - 2000ml
//refrigerante/agua - 1000ml por pessoa + 6 horas 150ml
//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = (400 * adultos + (400/2 * criancas));
    let qtdCerveja = (1200 * adultos)
    let qtdAgua = (1000 * adultos + (500 * criancas));
    
    let carne = document.getElementById("carne");
    let cerveja = document.getElementById("cerveja");
    let agua = document.getElementById("agua");

    if (duracao >= 6) {
        qtdTotalCarne = qtdCarne + (400 * adultos + (400/2 * criancas));
        qtdTotalCerveja = qtdCerveja + (1000 * adultos);
        qtdTotalAgua = qtdAgua + (1000 * adultos + (400 * criancas));

        carne.innerHTML = qtdTotalCarne + "gr de Carne";
        cerveja.innerHTML = qtdTotalCerveja + "ml de Cerveja";
        agua.innerHTML = qtdTotalAgua + "ml de Água";

    } else {
        carne.innerHTML = qtdCarne + "gr de Carne";
        cerveja.innerHTML = qtdCerveja + "ml de Cerveja";
        agua.innerHTML = qtdAgua + "ml de Água";
    }
}