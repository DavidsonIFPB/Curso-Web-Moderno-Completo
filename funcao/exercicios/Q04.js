function divisao (dividendo, divisor){
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo - (resultado* divisor)
    console.log(`Resultado: ${resultado}\n Resto da divisão ${resto}`)
}

divisao(21,7)
