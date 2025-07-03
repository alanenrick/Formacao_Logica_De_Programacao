
let heroi = "Mago";

var rankedBalance = 1000;


if (rankedBalance <= 1000) {
    var nivelHeroi = "Ferro";
} else if (1000 < rankedBalance & rankedBalance <= 2000) {
    var nivelHeroi = "Bronze";

} else if (2000 < rankedBalance & rankedBalance <= 5000) {
    var nivelHeroi = "Prata";

} else if (5000 < rankedBalance & rankedBalance <= 7000) {
    var nivelHeroi= "Ouro";

} else if (7000 < rankedBalance & rankedBalance <= 8000) {
    var nivelHeroi = "Platina";

} else if (8000 < rankedBalance & rankedBalance <= 9000) {
    var nivelHeroi = "Ascendente";

} else if (9000 < rankedBalance & rankedBalance <= 10000) {
    var nivelHeroi = "Imortal";

} else if (10000 < rankedBalance) {
    var nivelHeroi = "Radiante";

} else {
    console.log("Nível de Herói inválido!");
}

console.log("O Herói de nome " + heroi + " está no nível de " + nivelHeroi);
