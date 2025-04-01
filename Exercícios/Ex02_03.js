const prompt = require('prompt-sync')();
let num = Number(prompt("Digite um número inteiro:"));
if (num % 2 == 0) {
    console.log('O número é par');

}
else {
    console.log('O número é ímpar');

}