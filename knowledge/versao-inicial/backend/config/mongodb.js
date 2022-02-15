const mongoose = require('mongoose')
const { mongo } = require('../.env')

mongoose.connect(mongo.url, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB'

        app.mongoose = mongoose
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

