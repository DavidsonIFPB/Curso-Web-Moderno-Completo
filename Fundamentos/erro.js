function tratarErroElancar(error){
    // throw new Error ('...')
    // throw 10
    // throw true
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
    
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ "!!!")
    }
    catch (e){        
        tratarErroElancar(e)
    }
    finally{ //Executa sempre, mesmo depois de um erro ou não
        console.log("Final")
    }
}

const obj = { nome : "Roberto"}
imprimirNomeGritado(obj)