const imprimirResultado = function(nota){
    if(nota > 7){
        console.log('Aprovado', nota)
    }else{
        console.log('Reprovado', nota)
    }
}


imprimirResultado(5)
imprimirResultado(7.1)