const prompt = require('prompt-sync')();
//Criando nossa primeira variável
//Uma variável serve para armazenar uma informação/valor
//O memória crie um espaço como o nome curso e receba o valor 'Desenvolvimento de sistemas'
// O receba é o sinal de igual =
var curso = 'Desenvolvimento de sistemas';

//Exibindo o conteúdo da variável
console.log('curso');//para imprimir o valor de uma variável, não se colaca entre ' '
console.log(curso); //Jeito certo de usar uma variável
console.log('curso', curso);
var idade = 16; // Tipo integer (Número inteiro)]
var temperatura = 24.5 // real// float
var nome = 'Messias'; //string

console.log('olá' + nome + "você tem" + idade + 'anos' );
console.log('está cursando' + curso + 'hoje faz' + temperatura + '°C');

//Templete String
//Utilize a crase `` para cria uma sring
//Para colocar variáveis dentro da string, utilozo ${variável}
console.log(`Olá, ${nome} você tem ${idade} anos
    está cursando ${curso} hoje faz ${temperatura}  /C`);

//Declarando uma variável lógica/boolean/boleano (true/false)
var podedirigir = true;
var estachovendo = false;

//declarando uma variável nula 
var escola;  

//Exercício

//Nota1 válido
//nomecompleto válido
//Nome Completo inválido
//Média inválido
//console inválido
//_salario válido
//9dade válido
//Minha_variavel válido
//var inválido
//valor$ inválido
//nome-completo inválido 
//escola_ válido
//TELEFONE válido 
//true inválido 

let cidade = 'Andradina'
var turma = '2°B'
const ano = 2025

console.log(turma);
turma = '3°B';//Reatribuindo o valor de uma variável
console.log(turma); 
//ano = 2026; //não podemos reatribuir valor a uma constante




let _nome = 'Maria';
let _idade = 16; 
let _peso = 57;
console.log(_nome,_idade,_peso);
console.log(typeof _nome, typeof _idade, typeof _peso );
_nome = prompt('Qual é o nome?');
_idade = prompt('Qual é a idade?');
_peso = prompt('Qual é o peso?');
console.log(_nome,_idade,_peso);

console.log(typeof _nome, typeof _idade, typeof _peso );

//Criem duas variáveis num1 e num2 e recebam as informações pelo prompt
let num1 = prompt('Digite o primeiro n°')
let num2 = prompt('Digite o segundo n°')
console.log(num1 + num2);

console.log(typeof num1);
num1 = Number(num1);
console.log(typeof num1);

//Receber uma informação já convertendo seu tipo de dados
let nr1 = Number(prompt('Digitr o primeiro n°')); //Number
let nr2 = Number(prompt('Digite o segundo n°')); //Number
console.log(nr1 + nr2);

//Convertendo os dados de uma variável
nr1 = '100.4'; //string
nr1 = Number('100.4'); //convertendo String para Number
nr1 = parseInt('100.14'); //convertendo String para Integer
nr1 = parseFloat('100') //convertendo String para float 100.00
nr1 = String(100.14) //convertendo um Number para String

_nome = prompt('Qual é o nome?'); //string
_idade = parseInt(prompt('Qual é a idade?')); //int
_peso = parseFloat(prompt('Qual é o peso?')); //foat
console.log(_nome,_idade,_peso);

//Exercíos variáveis 
let nomeAluno = 'Maria Eduarda';
let Altura = 1.57;
let Escola = 'Sesi';
let anoAtual = 2025;

