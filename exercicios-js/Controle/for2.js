const notas = [6.7, 8.1, 9.7, 7.7]


for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    idade: '12',
    peso: 98
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}