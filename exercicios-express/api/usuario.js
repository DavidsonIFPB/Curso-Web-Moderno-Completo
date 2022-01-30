function salvar(req, res) {
    res.send('Salvar > Produto')
}

function obter(req, res) {
    res.send('Obter > produto')
}

module.exports = { salvar, obter }