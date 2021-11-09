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

                <select name="tipo" onChange={(e)=>this.setTipo(e) } >
                    <option value="">Selecione</option>
                    <option value="Bom dia">Bom dia</option>
                    <option value="Boa Tarde">Boa Tarde</option>
                    <option value="Boa Noite">Boa Noite</option>
                </select>
                
                <input type="text" placeholder="Nome..." value={nome} onChange={(e)=>this.setNome(e) }/>                
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={(e)=>this.setTipo(e) } /> */}


            </div>
        )

    }
    
}