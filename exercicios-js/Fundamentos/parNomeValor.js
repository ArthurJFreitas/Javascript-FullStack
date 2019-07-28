const saudacao = 'Opa' // Contexo léxico 1


function exec() {
    const saudacao = 'Alo' // Contexo léxico 2
    console.log(saudacao)
    return saudacao 
}

//Objeto são aninhados de nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua 29e',
        numero: 123
    }
}

console.log(saudacao)
exec()
console.log(cliente)
