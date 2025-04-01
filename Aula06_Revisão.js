//Importando biblioteca para receber informação do usuário
const prompt = require('prompt-sync')();

//Declarando variável sem dados (undefined)
let nota;
//Declarando variável com informação
let nome = "Carlos";

//Reatribuindo um valor à variável nome 
nome = "Roberto";
nota = 8.5;

//Entrada de dados em nosso programa
let sobrenome = prompt('Digite seu sobrenome:');
let nota1 = Number(prompt("Digite a nota da 1ª prova:"));
let nota2 = Number(prompt("Digite a nota da 1ª prova:"));

//Processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + '' + sobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('Digite sua idade:');
let idadeNumero = parseint(idade);

//Saída dos dados
console.log('---Relatório Final---');
console.log(`O seu nome é: ${nomeCompleto} \n sua idade` + idade);
console.log(`Sua média é: ${media}`);

//Operadotr de incremento
let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1; //4
n++;//5
n += 3; //8

//Operador de decremento
n-- //7
n = n - 1; //6
n -= 2; //4

//Resolução do exercício da última aula
let horasPordia = 8;
let diasTrabalhados = 15;
let valorHora = 100;
let totalHoras = diasTrabalhados * horasPordia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);

