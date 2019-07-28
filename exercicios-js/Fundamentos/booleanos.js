let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log(!!isAtivo) // True
console.log(!isAtivo) // Falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!'text')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isAtivo = false))


console.log('Finalizar')

console.log(!!('' || null || 0 || ' '))
console.log('' || null || 0 || 'Passou')

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'lucas'
console.log(nome || 'Desconhecido')