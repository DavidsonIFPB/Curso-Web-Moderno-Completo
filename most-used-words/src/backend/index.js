const {ipcMain} = require('electron')
const groupWords = require('./groupWords')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitles', (event, paths) => {
    
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then( words => groupWords(words))
        .then((groupedWords) => {
            event.reply('process-subtitles', groupedWords)
        })
})