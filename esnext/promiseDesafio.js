const fs = require('fs')

function imprimiArquivo(caminho){
    caminho = __dirname + '/'+caminho
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8',(err, conteudo) =>{
            resolve(conteudo)
        })
    })    
}

imprimiArquivo('dados.txt').then(console.log)

