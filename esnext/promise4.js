function gerarNumeroAleatorio (min, max, tempo) {
    if(min> max) [min, max] = max, min
    return new Promise(resolve => {
        setTimeout( () =>{
            const numero = parseInt(Math.random() * (max - min +1) + min)
            resolve(numero)
        }, tempo)
    })
}

function gerarArraycomValoresAleatorios (){
    return Promise.all([
        gerarNumeroAleatorio(1,60, 4000),
        gerarNumeroAleatorio(1,60, 1000),
        gerarNumeroAleatorio(1,60, 200),
        gerarNumeroAleatorio(1,60, 100),
        gerarNumeroAleatorio(1,60, 500),
        gerarNumeroAleatorio(1,60, 200)
    ])
}

console.time('promise')
gerarArraycomValoresAleatorios()
    .then(console.log)
    .then(() => console.timeEnd('promise'))