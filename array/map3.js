Array.prototype.map2 = function (callback){
    const NewArray = []
    for (let i = 0; i< this.length ; i++){
        NewArray.push(callback(this[i], i, this))
    }
    return NewArray
}

const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
