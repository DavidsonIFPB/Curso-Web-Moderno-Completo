const instanciaA = require('./instanciaUnica')
const instanciaB = require('./instanciaUnica')

// InstanciaA e instanciaB está apontando para a mesma instância.
// Está casheado

instanciaA.inc()
instanciaA.inc()
console.log(instanciaA.valor, instanciaB.valor)

const instanciaC = require('./instanciaNova')()
const instanciaD = require('./instanciaNova')()
// instancia C e D São instâncias novas de uma instância factory
//  A função factory retorna um objeto

instanciaC.inc()
instanciaC.inc()

console.log(instanciaC.valor, instanciaD.valor)
