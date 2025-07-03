const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    goAttack() {
        let attack;

        switch (this.type.toLowerCase()) {
            case 'mago':
                attack = "magia";
                break;
            case 'guerreiro':
                attack = "espada";
                break;
            case 'monge':
                attack = "artes marciais";
                break;
            case 'ninja':
                attack = "shuriken";
                break;
            default:
                attack = "classe não existe!"    
        }
        console.log(`o ${this.type} atacou usando ${attack}`);
        }
}

function askValidType(callback) {
    const validType = ["mago", "guerreiro", "monge", "ninja"];
    rl.question('Escolha seu tipo (Mago, Guerreiro, Monge ou Ninja): ', (type) => {
        if (validType.includes(type.toLowerCase())) {
            callback(type);
        } else {
            console.log("Escolha um tipo válido");
            askValidType(callback);
        }
    });
}

rl.question('Digite o nome do herói: ', (name) => {
    rl.question('Digite a idade: ', (age) => {
        askValidType((type) => {
            let hero1 = new Hero(name, parseInt(age), type);
            hero1.goAttack();
            rl.close();
        });
    });
});