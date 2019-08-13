//usando Notação literal

const obj1 =  {}

console.log(typeof obj1);
console.log(obj1);

//Obj em JS
const obj2 = new Object;

console.log(typeof obj2);
console.log(obj2);

// Funçoes construtoras


function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funçao factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome: 'Arthur',
        salarioBase: '1500',
        faltas: 2,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4);
const f2 = criarFuncionario('maria', 11400, 1);

console.log(f1.getSalario(), f2.getSalario());


//Object.Create

const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);



const fromJSON = JSON.parse('{"info": "Sou um JSON"}');

console.log(fromJSON.info);

