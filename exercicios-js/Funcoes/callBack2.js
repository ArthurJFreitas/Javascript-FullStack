const nota = [6.0, 9.6, 8.6, 1.0, 4.1]

//Sem callback

const notasBaixas1 = []
for (let i in nota){
    if (nota[i] < 7){
        notasBaixas1.push(nota[i])
    }
}

console.log(nota)
console.log(notasBaixas1)

//Com callback

const notasBaixas2 = nota.filter(function (nota){
   return nota <= 7
})

console.log(notasBaixas2)



const notasBaixas3 = nota.filter(nota => nota < 7)
console.log(notasBaixas3)

