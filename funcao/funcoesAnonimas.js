const soma = function (x, y) {
    return x + y
}

const imprimiResultado = function (x, y, operacao = soma){
    console.log(operacao(x, y))
}

imprimiResultado(3, 4)
imprimiResultado(3, 4, soma)
imprimiResultado(3, 4, function (x, y) {
    return x - y
})
imprimiResultado(3, 4, (x, y)=> x * y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()