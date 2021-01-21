function getInteiroAleatorioEntre (min, max) {
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do { //a expressão vem depois do bloco. Pelo menos 1 repetição é realizada no do/While
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log("Até a próxima")