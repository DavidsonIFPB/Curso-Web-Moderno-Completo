const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: true}
]

console.log(produtos.filter(function (p){
    return false
}))



// function precoMaior500(elemento){
//     if(elemento.preco>500){
//         return true
//     }
// }

// function produtoFragil(elemento){
//     return elemento.fragil
// }

// console.log(produtos.filter(produtoFragil).filter(precoMaior500))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))