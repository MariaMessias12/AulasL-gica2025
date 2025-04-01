const prompt = require('prompt-sync')();
let numero1 = Number(prompt("Digite o 1ª número:"));
let numero2 = Number(prompt("Digite o 2ª número:"));
if (numero1 > numero2) {
    console.log(`${numero1} é maior que ${numero2}`);

}
else {
    console.log(`${numero2} é maior que ${numero1}`);

}