function Senhasecreta(qtdeCaracteres){
    let listaCaracteres = 'AMNKe284nvsot*/-+lkdhiuyre67889zxnneiqpqh1893yjsdbsgjgiissocorrroquerominhacasaminha\|@#$%¨&*';
    let senha = '';

        for(let x =1; x <= qtdeCaracteres; x++){
    let posSorteada = Math.floor(Math.random()* listaCaracteres.length);
    senha = senha + listaCaracteres[posSorteada];
        }
    return senha;
}
let senhaGerada = Senhasecreta(10);
console.log(senhaGerada);
