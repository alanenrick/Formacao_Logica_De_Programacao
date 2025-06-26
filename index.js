
let heroi = "Mago";

var quantidadeXP = 1000;


if (quantidadeXP <= 1000) {
    var nivelHeroi = "Ferro";
} else if (1000 < quantidadeXP & quantidadeXP <= 2000) {
    var nivelHeroi = "Bronze";

} else if (2000 < quantidadeXP & quantidadeXP <= 5000) {
    var nivelHeroi = "Prata";

} else if (5000 < quantidadeXP & quantidadeXP <= 7000) {
    var nivelHeroi= "Ouro";

} else if (7000 < quantidadeXP & quantidadeXP <= 8000) {
    var nivelHeroi = "Platina";

} else if (8000 < quantidadeXP & quantidadeXP <= 9000) {
    var nivelHeroi = "Ascendente";

} else if (9000 < quantidadeXP & quantidadeXP <= 10000) {
    var nivelHeroi = "Imortal";

} else if (10000 < quantidadeXP) {
    var nivelHeroi = "Radiante";

} else {
    console.log("Nível de Herói inválido!");
}

console.log("O Herói de nome " + heroi + " está no nível de " + nivelHeroi);
