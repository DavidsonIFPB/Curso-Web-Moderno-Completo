function gerarNumeroEntre (min, max, numerosProibidos) {
    if (min> max) [min, max] = [max, min]
    return new Promise((resolve,reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject("Número Proibido")            
        }
        else {
            resolve(aleatorio)
        }
    })
}

async function gerarNumerosDaMegaSena (qtd_numeros, tentativas = 1){
    try{
        const numeros = []
        for (let _ of Array(qtd_numeros).fill()){
            numeros.push(await gerarNumeroEntre(1,60,numeros))
        }
        return numeros
    }
    catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo"
        } else {
            return gerarNumerosDaMegaSena(qtd_numeros, tentativas + 1)
        }
        
    }

}

gerarNumerosDaMegaSena(15)
    .then(console.log)
    .catch(console.log)