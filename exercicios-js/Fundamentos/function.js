function imprimirSoma(a, b ){
    console.log(a+b)
}


imprimirSoma(3, 3, 3, 5, 6)
imprimirSoma(2, 3)
imprimirSoma(2,)
imprimirSoma()


//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,10))
console.log(soma(2))

