//Crie um programa que leia um número inteiro e mostre na tela seu sucessor e antecessor
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o 1ª número:"));
let antecessor = numero1 - 1;
let sucessor = numero1 + 1;
console.log(`Seu antecessor é ${antecessor} e seu sucessor é ${sucessor}`);
