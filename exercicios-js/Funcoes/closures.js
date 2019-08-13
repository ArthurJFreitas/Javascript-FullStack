// Closure é o escopo cirado quando você define sua funçao 
// Esse escopo permite a funçao acessar e manipular variaveis externas à função 


//Contexto lexico em ação 

const x = 'Global'
function fora(){    // função normal criada
    const x = 'Local' // variável(que não varia pq é constante) criada dentro da função
    function dentro(){ // segunda função criada! atrelada a primeira função dentro do escopo dela 
        return x // usando o retorno para RETORNAR x, no caso tem duas const x, uma fora da função outra dentro 
    }
    return dentro // utiliza o retorno dentro, pra quando chamar a função fora, ela irá RETORNAR a função dentro
}
 
const minhaFuncao = fora() // É ATRIBUIDO, À VARIÁVEL RECÉM CRIADA minhaFuncao, O RETORNO DA FUNÇÃO fora, QUE É CHAMADA por meio dos()
console.log( minhaFuncao() ) // pra imprimir no console precisa colocar () pra chamar a função dentro, tanto a função dentro como a const "local" estão dentro da mesma função fora, por isso o console imprimiu "local" e não "global"