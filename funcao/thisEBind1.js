const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
//O bind faz com que o this aponte para o objeto passado
falarDePessoa()