const prompt = require('prompt-sync')();
// Operadores lógicos
// ! Negação (Não)
// && Conjunção (E)
// || Disjunção (Ou)

//Estrutura  condicional composta encadeada

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // False porque 2 condição é falsa
console.log(a > 1 && b < 2); // False porque apenas 1 condição é falsa
console.log(a > 1 && b < 4); // True porque 2 condição é verdadeira
console.log(a > 1 && b < 4 && c < 4); // True porque todas condição é verdadeira
console.log(a > 1 && b < 4 && c < 5); //False


console.log(a > 2 || b < 2); //False nenhuma condição é verdadeira
console.log(a > 1 && b < 2); //True pelo menos uma condição verdadeira 
console.log(a > 1 && b < 4); //True pq as 2 condições são verdadires
console.log(a > 1 && b < 4 && c < 4); //True pelo menos 1 V

//Ordem de precedência
//Aritiméticos (), **, */,+-, 

let altura = Number(prompt('Digite sua altura'));
let peso = Number(prompt('Digite seu peso'));
let imc = peso / (altura ** 2);
if (imc < 18.5) {
    console.log('Você está abaixo do peso');
} else if (imc > 18.5 && imc < 24.5) {
    console.log('você está no peso ideal');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Você está sobrepeso');

} else if (imc > 30) {
    console.log('Obesidade');
}

let lado1 = Number(prompt('Digite o lado1:'));
let lado2 = Number(prompt('Digite o lado2:'));
let lado3 = Number(prompt('Digite o lado3:'));
if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    console.log('O triângulo é um equilátero');
} else if (lado1 != lado2 && lado3 != lado1 && lado2 != lado3){
    console.log('O triângulo é um escaleno')
} else {
    console.log('O triângulo é isósceles')    
}

//Exercício utilizando o ||

let vendas = Number(prompt('Digite o valor das vendas:'));
let horas = Number(prompt('Digite a quantidade de horas semananais trabalhadas:'));
if(vendas>5000 || horas>40){
    console.log('Tem direito ao bônus');
 
}else{
    console.log('Não tem direito ao bônus');
}    

let letras = String(prompt('Digite uma letra:'));
if(letras == 'a' || letras== 'e' ||letras=='i'||letras=='o'||letras=='u'){
    console.log('Esse caractere é uma vogal');
    
}else{
    console.log('Esse caractere é uma consoante');
    
}