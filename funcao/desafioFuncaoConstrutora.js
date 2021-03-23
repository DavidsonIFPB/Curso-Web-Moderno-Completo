function criaPessoa (nome){
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new criaPessoa('Joao')
p1.falar()