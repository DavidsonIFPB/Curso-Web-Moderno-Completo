function gerarNumetrosEntre(min, max ){
    if (min> max) [min, max] = [max, min]
    return new Promise(resolve => {
        resolve(parseInt(Math.random() * (max - min +1) + min))
    })
}

gerarNumetrosEntre(1, 60)
    .then(num => num*10)
    .then(numX10 => `Número gerado ${numX10}`)
    .then(console.log)