
//Estrategia 1 para valor padrao
function soma(a, b, c){

    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(1), soma(1,4), soma(1, 5, 3))


//Estrategia 2 para valor padrao

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}
console.log(soma2(), soma2(1), soma2(1,4), soma2(1, 5, 3))

//Estrategia 3 para valor padrao ES2015

function soma3(a = 1 , b = 1, c = 1){

    return a + b + c
}

console.log(soma3(), soma3(1), soma3(1,4), soma3(1, 5, 3))

