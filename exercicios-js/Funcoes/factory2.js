

function factoryProduto(a = 'Vazio', b = 0){

    const prod = {
        nome: a,
        valor: 100,
        desconto: 0.1
    }

    return prod
}

console.log(factoryProduto('Chinelo', 100))
console.log(factoryProduto('Ipad', 4000))