Array.prototype.forEach2 = function(funcao1){
    for ( let i = 0; i < this.length; i++){
        funcao1(this[i], i, this)
    }
    
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
