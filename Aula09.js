//Estruturas condicionais aninhadas
//Switch case

const prompt = require('prompt-sync')();
let valorCompra = 120;
let clienteVip = true;

if (valorCompra >= 100) {
    if (clienteVip == true) {
        console.log(`Você ganhou R$${valorCompra * 0.1}`);

    } else {
        let desconto = valorCompra * 5 / 100;
        console.log(`Você ganhouR$${desconto} de desconto`);

    }
} else {
    let retante = 100 - valorCompra;
    console.log(`Compre mais R$${retante} e ganhe desconto`);

}

let idade = Number(prompt("Digite sua idade:"));
if (idade < 16) {
    console.log('Não pode votar');
} if (idade >= 16 && idade < 18) {
    console.log('O voto é facutativo');
} if (idade > 70) {
    console.log('O voto é facutativo');
}
else if (idade >= 18 && idade <= 70) {
    console.log('O voto é obrigatório');
}


//Switch case é uma alternativa ao if else
let n1 = Number(prompt("Digite um nº"));
let n2 = Number(prompt("Digite outro nº"));
let op = prompt('Digite o operador (+ - / * **):')
switch (op) {
    case '+':                         //if op == '+'
        console.log(n1 + n2);
        break;
    case '-':                         //if op == '-'
        console.log(n1 - n2);
        break;
    case '/':                         //if op == '/'
        console.log(n1 / n2);
        break;
    case '*':                         //if op == '*'
        console.log(n1 * n2);
        break;
    case '**':                      //if op == '**'
        console.log(n1 ** n1);
        break;
    default:                         //else
        console.log('Operador inválido');
}

