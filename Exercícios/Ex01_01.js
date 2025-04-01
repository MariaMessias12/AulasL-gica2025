//Crie um programa que leia dois números e mostre a soma entre eles
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o 1ª número:"));
let numero2 = Number(prompt("Digite o 2ª número:"));
let soma = numero1 + numero2;
console.log(`A soma entre ${numero1} e ${numero2} é ${soma}`);
