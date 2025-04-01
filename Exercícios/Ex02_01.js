const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite o 1ª nota:"));
let nota2 = Number(prompt("Digite o 2ª nota:"));
let media = (nota1 + nota2) / 2;
console.log(`A média é ${media}`);
if (media < 7) {
    console.log('Reprovado');
} else {
    console.log('Aprovado');
}



