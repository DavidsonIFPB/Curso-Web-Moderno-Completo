import {useState} from 'react'

import Layout from '../components/Layout'

export default function Integracao(){
    // const [codigo, setCodigo] = useState(1)
    const [cliente, setClient] = useState({
        id:1,
        nome:"Default",
        email:"default@default@email.com"
    })


    async function obterCliente() {
        const url = `http://127.0.0.1:3000/api/clientes/${obterValorInput()}`
        const resposta = await fetch(url)
        const dados = await resposta.json()
        setClient(dados)
        
    }

    function obterValorInput(){
        const valorInput = document.querySelector('#input').value
        if(valorInput=="")
            return 1
        return parseInt(valorInput)
    }

    return(
        <Layout titulo="Integração">
            <div>
                <input id="input" type="number"/>
                <button onClick={obterCliente}>Buscar Cliente</button>
            </div>
            <ul>
                <li>ID: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email:{cliente.email} </li>
            </ul>
        </Layout>
    )
}