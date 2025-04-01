//Crie um programa que leia quanto dinheiro a pessoa tem na carteira e mostre quantos dólares ela pode contar
const prompt = require('prompt-sync')();
let dinheiro = Number(prompt('Qual é a quantidade de dinheiro em R$?'));
let dolares = dinheiro / 5.79;
console.log(`Essa quantidade de dinheiro convertida em dólares é ${dolares.toFixed(2)}`);
// .toFixed(2) usado pra formatação de casa decimais