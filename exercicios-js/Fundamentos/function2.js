const imprmirSoma = function(a, b){
    console.log(a + b)
}

imprmirSoma(2, 3)

//Armazenando uma funçao arrow em uma variavel

const soma = (a, b) => {
    return a+b
}

console.log(soma(2,2))

//Retorno implicito
const subtacao = (a, b) => a - b
console.log(subtacao(3, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal !!!')
