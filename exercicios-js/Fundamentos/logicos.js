function compras (trabalho1, trabalho2) {

    const compraSorverte = trabalho1 || trabalho2
    const compratTv50 = trabalho1 && trabalho2
    //const compratTv32xor = !!(trabalho1 ^ trabalho2) //bitwise xor
    const compratTv32 =  trabalho1 != trabalho2 
    const manterSaudavel = !compraSorverte

    return { compraSorverte, compratTv50, compratTv32, manterSaudavel}
}

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(true, true))

console.log(compras(false, false))