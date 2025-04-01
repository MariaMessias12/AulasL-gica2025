const prompt = require('prompt-sync')();

let somaIdadeM = 0;
let qtdM = 0;
let somaIdadeF = 0;
let qtdF = 0;
for (let x = 1; x<= 10;x++){
    idade = Number(prompt('Digite sua idade: '));
    sexo = Number(prompt('Digite seu sexo: (M/F) '));

    if (sexo== 'M'){
        somaIdadeM = somaIdadeM + idade;
    } else if ( sexo == 'F'){
        somaIdadeF = somaIdadeF+ idade;
    }
}
console.log(`A média dos sexo M é de ${somaIdadeM / qtdM}`);
console.log(`A média dos sexo F é de ${somaIdadeF / qtdF}`);
console.log(`A média do grupo é de é de ${(somaIdadeF+ somaIdadeM) / 10}`);
