import React, {Component} from "react";

export default class Saudacao extends Component {
    state = { nome: this.props.nome,
            tipo: this.props.tipo}

     setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    
    render(){
        const {tipo, nome} = this.state
        
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />

                <input type="text" placeholder="Nome..." value={nome} onChange={(e)=>this.setNome(e) }/>                
                <input type="text" placeholder="Nome..." value={tipo} onChange={(e)=>this.setTipo(e) } />
            </div>
        )

    }
    
}