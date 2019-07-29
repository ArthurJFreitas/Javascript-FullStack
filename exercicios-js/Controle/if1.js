function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Arovado com ' + nota)
    }
}

soBoaNoticia(7.1)
soBoaNoticia(5.1)


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(undefined)

seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,3])
seForVerdadeEuFalo({})