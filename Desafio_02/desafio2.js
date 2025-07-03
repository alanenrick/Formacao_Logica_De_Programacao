let balance = getValues(1000, 100);
let level = getPlayerLevel(balance);

console.log(`O Herói tem de saldo ${balance} está no nível de ${level}`);

function getValues(numVictories, numDefeats) {
    let rankedBalance = numVictories - numDefeats;
    return rankedBalance;
}

function getPlayerLevel(rankedBalance) {
    if (rankedBalance <= 10) {
        return playerLevel = "Ferro";
    } else if (10 < rankedBalance & rankedBalance <= 20) {
        return playerLevel = "Bronze";
    } else if (20 < rankedBalance & rankedBalance <= 50) {
        return playerLevel = "Prata";
    } else if (50 < rankedBalance & rankedBalance <= 80) {
        return playerLevel= "Ouro";
    } else if (80 < rankedBalance & rankedBalance <= 90) {
        return playerLevel = "Diamante";
    } else if (90 < rankedBalance & rankedBalance <= 100) {
        return playerLevel = "Lendário";
    } else if (100 < rankedBalance) {
        return playerLevel = "Imortal";
}
}