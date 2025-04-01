const prompt = require('prompt-sync')();

let QtdePares = 0;
let QtdeImpares = 0;
let Somapares = 0;
let SomaImpares = 0;

while (true){
    let num = Number(prompt('Digite um número: '));
    if (num==0){
        break;
    }
    if (num % 2 ==0){//Par
        QtdePares++;//QtdePares = QtdePares + 1
        Somapares = SomaImpares+num; //SomaPares
    } else{
        QtdeImpares++
        SomaImpares = SomaImpares + num;
    }
}
console.log(`Você digitou ${QtdePares} nº pares, somadas resultou em ${Somapares}`);
console.log(`Você digitou ${QtdeImpares} nº ímpares, somadas resultou em ${SomaImpares}`);
