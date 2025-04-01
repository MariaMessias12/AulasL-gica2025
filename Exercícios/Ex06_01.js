filmes = ['Harry Potter', 'Gente Grande','A era do gelo','Gente Grande 2','Sherek','Frozen', 'Hereditário'];
console.log(filmes[0]);

console.log(filmes[4]);

filmes[6] = 'O segredo dos animais'
console.log(filmes);

filmes = [...filmes,'Duro de matar']
console.log(filmes);

//Inserindo na posição 5
filmes.splice(5,0,'Sherek 2');
console.log(filmes);

//excluindo primeiro item da lista
filmes.shift();
console.log(filmes);

//Excluindo o último item da lista
filmes.pop();
console.log(filmes);

//Exibindo os 3 primeiros itens
console.log(filmes.slice(0,3));


console.log(filmes.slice(-4));

//Exibindo o tamanho da lista
console.log(filmes.length);

//invertendo a ordem
filmes.reverse();
