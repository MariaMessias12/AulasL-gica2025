//Variáveis compostas (Listas/vetores/arryas)
//Em uma variável simples, é possível armazenar apenas uma informação por vez

//Variável Simples
let fruta = 'maçã';
//Alterou o conteúdo da variável
fruta = 'banana';

//Variáveis Compostas
//Em uma variável composta é possivel armazenar mais de um dado em uma única variável
let frutas = ['Maçã','banana','Abacaxi','Uva'];
console.log(frutas);
console.log(frutas[1]);

//Declarando uma lista vazia
let listaVazia = [];

//Declaração de uma lista de números 
let numeros = [1,2,8,5,9];

//Declaração de uma lista de strings
let nomes = ['Ana', 'João','Duda Feijão']

//Declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];// vetores/Array

//Declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'],[5.00,10.00]];
console.log(listaDeVetores[0][1]); //Matriz

console.log(frutas);
//Alterando o conteúdo de um item da lista
frutas[3] = 'Melancia';
console.log(frutas);

//Inserindo um outro item na lista
frutas.push('Laranja');
console.log(frutas); //Utilizando o método push
frutas = [...frutas,'Laranja']; //utilizando o operador spread

//Incluindo novo item na lista em posição específica, utilizamos o método .splice
frutas.splice(2,0,['Morango', 'Abacate']);
console.log(frutas);
// 2 - posição 
// 0 - Quantidade de itens a serem removidos

frutas.splice(3,1)//Escluindo item pelo índice
frutas.shift();//Excluindo o 1º item da lista
frutas.pop();//Remove o último item da lista
console.log(frutas);

frutas = ['Maçã','Banana','Morango','Abacaxi','Melancia','Laranja','Uva'];
console.log(frutas[4]);//Posição específica
console.log(frutas.slice(0,4));//Da posição 0 pegar 4 itens
console.log(frutas.slice(1));//Da posição 1 até o último
console.log(frutas.slice(-1));//Número de itens do fim pro início
console.log(frutas.length);//Total de itens da lista 

frutas.sort()//Ordenando lista em ordem crescente
console.log(fruta);
frutas.reverse()//Ordenando lista em ordem decresente
console.log(frutas);




                                                                                                                                          
