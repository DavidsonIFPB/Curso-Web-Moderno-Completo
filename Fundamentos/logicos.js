const compras = (trabalho1, trabalho2) => {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1^trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    
    return {comprarSorvete,comprarTv50, comprarTV32, manterSaudavel}
    //Novo recurso ES 2015. chave:valor
}

console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(true,false))
console.log(compras(false,false))

