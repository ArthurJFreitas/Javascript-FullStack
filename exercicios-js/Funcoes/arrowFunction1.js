let dobro = function (a){
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a  // Return implicito

console.log(dobro(Math.PI))     

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'   // Possui um param

console.log(ola())