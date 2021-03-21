function Carro(VelocidadeMaxima = 200, delta = 5){
    
    //metodo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = () => {
        if (velocidadeAtual + delta <= VelocidadeMaxima){
            velocidadeAtual += delta            
        }else{
            velocidadeAtual = VelocidadeMaxima            
        }
    }

    this.getVelocidadeAtual = () => velocidadeAtual

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)



