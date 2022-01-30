const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require ('./saudacao')
const usuario = require('./api/usuario')

app.post('/usuario', usuario.salvar)
app.get('/usuario', usuario.obter)

require('./api/produto')(app, 'Com Params')


app.use(saudacao('João'))

app.use(bodyParser.json())
app.use(bodyParser.text())

app.use((req,res, next)=> {
    console.log('Antes...')
    next()
})

const json = [
    { name: 'Davidson', idade: 25 },
    { name: 'Douglas', idade: 30 }
]


app.post('/cliente',(req,res) => {
    res.send(req.body)
})

app.listen(3000, () => { console.log('Backend Executando...') })

app.get('/opa', (req, res) => {
    res.json(json)
})

app.get('/text', (req,res) => {
    res.send('Olá')
})

