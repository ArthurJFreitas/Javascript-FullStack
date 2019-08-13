const fabircantes = ["Mercedes", "Audi", "BMW"]

function imprimirNome(nome, indice){
    console.log(`${indice + 1}. ${nome}`)

}


fabircantes.forEach(imprimirNome)
fabircantes.forEach(function(a){
    console.log(a)
})