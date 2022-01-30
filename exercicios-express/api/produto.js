module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send(`Salvar > Produto > ${texto}`)
    }

    function obter(req, res) {
        res.send(`Obter > Produto > ${texto}`)
    }

    app.post('/produtos', salvar)
    app.get('/produtos', obter)

    return { salvar, obter }
}