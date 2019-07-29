function getNumero(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 let opcao = 2

 do{

    opcao = getNumero(-1, 5)
    console.log(`A opçao foi ${opcao}`)

 }while(opcao != -1)