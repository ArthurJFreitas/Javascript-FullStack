const prod1 = {}
prod1.nome = 'Celuar Ultra Mega'
prod1.preco = 4449.90

prod1['Desconto Legal'] = 0.45 // Evitar Espaçamentos em atributos

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        blabla : 1,
        nome : 'teste',
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
