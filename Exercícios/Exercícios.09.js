const prompt = require('prompt-sync')();

//Ex03_01.js
let n1 = prompt("Digite um nº de 1 a 7:");
switch (n1) {
    case '1':
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda-Feira');
        break;
    case '3':
        console.log('Terça-Feira');
        break;
    case '4':
        console.log('Quarta-Feira');
        break;
    case '5':
        console.log('Quinta-Feira');
        break;
    case '6':
        console.log('Sexta-Feira');
        break;
    case '7':
        console.log('Sábado');
    default:
        console.log('Número inválido');
}

//Ex03_02.js
let anoAtual = Number(prompt('Digite o ano atual:'));
let nascimento = Number(prompt('Digite o ano de seu nascimeto:'));
let idade = anoAtual - nascimento
if (idade < 10) {
    console.log('Você é criança');

} if (idade >= 11 && idade <= 17) {
    console.log('Você é adolescente');
} else if (idade >= 18 && idade <= 59) {
    console.log('Você é adulto');
} else {
    (idade > 60)
    console.log('Sua faixa etária é: Idoso');
}

//Ex03_03.js
let mes = (prompt('Digite o nº de um mês:'));
switch (mes) {
    case '1':
        console.log('O mês é Janeiro');
        break;
    case '2':
        console.log('O mês é Fevereiro');
        break;
    case '3':
        console.log('O mês é Março');
        break;
    case '4':
        console.log('O mês é Abril');
        break;
    case '5':
        console.log('O mês é Maio');
        break;
    case '6':
        console.log('O mês é Junho');
        break;
    case '7':
        console.log('O mês é Julho');
        break;
    case '8':
        console.log('O mês é Agosto');
        break;
    case '9':
        console.log('O mês é Setembro');
        break;
    case '10':
        console.log('O mês é Outubro');
        break;
    case '11':
        console.log('O mês é Novembro');
        break;
    case '12':
        console.log('O mês é Dezembro');
        break;    
}

//Ex03_04.js
let nomeMes = (prompt('Digite o nome de um mês:'));
if(nomeMes== 'Janeiro'&& nomeMes == 'Março'|| nomeMes== 'Maio'|| nomeMes=='Julho'|| nomeMes=='Agosto'|| nomeMes=='Outubro'||'Dezembro'){
    console.log(`O mês de ${nomeMes} tem 31 dias`); 
}else if(nomeMes=='Fevereiro'){
    console.log('O mês tem 28 dias');
    
}else if (nomeMes=='Abril'&& nomeMes=='Junho'||nomeMes=='Setembro'||nomeMes=='Novenbro') 
{
    console.log(`O mês de ${nomeMes} tem 30 dias`);  
}else{
    console.log('Esse mês não existe☹');
    
}

//Ex03_05.js
let nota1 = Number(prompt("Digite o 1ª nota:"));
let nota2 = Number(prompt("Digite o 2ª nota:"));
let media = (nota1 + nota2) / 2;
console.log(`A média é ${media}`);
if (media < 5) {
    console.log('Reprovado');
} else if(media>7) {
    console.log('Aprovado');
} else if(media == 5 || media<=7){
console.log('Em recuperação');
}

//Ex03_06.js 
let salario = Number(prompt("Digite o seu salário:"));
if (salario<= 2000){
    console.log(`O reajuste do seu salário é de R$${salario*12/100}`);    
}else if(salario<=4000){
    console.log(`O reajuste do seu salário é de R$${salario*10/100} `);
} else if(salario>4000){
    console.log(`O reajuste do seu salário é de R$${salario*8/100}`);   
} 
