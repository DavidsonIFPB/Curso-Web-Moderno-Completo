function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            }
            else {
                resolve(valor)
            }
        }
        catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(console.log)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.? ${err}`)
    )
    .catch(err => console.log(`Erro Geral ${err}`))
    .then(console.log('Final'))