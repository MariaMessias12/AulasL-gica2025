//Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milímetros e km
const prompt = require('prompt-sync')();

//Lendo o valor em metros
let metros = Number(prompt('Digite a medida em metros:'));
//Convertendo em centímetros
let centimetro = metros * 100;
//Convertendo em milímetro
let milimetro = metros * 1000;
//Convertendo em km
let km = metros / 1000;
//Exibindo resultado
console.log(`O valor convertido em centímetros é ${centimetro}`);
console.log(`O valor convertido em milímetros é ${milimetro}`);
console.log(`O valor convertido em km é ${km}`);


