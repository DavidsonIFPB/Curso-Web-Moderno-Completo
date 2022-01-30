function saudacao (nome){
    return function (req,res, next){
        console.log(`Bem Vindo ${nome} .`)
        next()
    }
}

module.exports = saudacao
