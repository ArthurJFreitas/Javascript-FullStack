//Pessoa

const pessoa = { nome : 'João'}

pessoa.nome = 'pedro';
console.log(pessoa);

//Pessoa <- 456 -> {...}
//pessoa = { nome = 'Ana' }

Object.freeze(pessoa); // Congela o OBJETO // IMUTAVÉL
pessoa.end = 'Ana'; // Não tem efeito / Causa Freeze
pessoa.nome = 'Ana'; // Não tem efeito / Causa Freeze
delete pessoa.nome; // Não tem efeito / Causa Freeze

console.log(pessoa);
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome : 'Jõao'});

pessoaConstante.nome = 'Maria'; // Não tem efeito / Causa Freeze

console.log(pessoaConstante);

