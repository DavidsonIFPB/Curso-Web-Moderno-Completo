function Pessoa () {
    this.idade = 0

    const self = this
    //executa de acordo com a quantidade de milisegundos passado
    /*setInterval(()=>{this.idade++
    console.log(this.idade)},1000)*/

    /*setInterval(function() {
        self.idade++
        console.log(self.idade)
    }
    ,1000)*/
    
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }.bind(this),1000)


}

new Pessoa