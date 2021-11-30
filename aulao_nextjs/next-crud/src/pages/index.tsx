import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ... ${cliente.nome}`)

  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)

  }
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor='green' 
                onClick={()=>setVisivel('form')}
              >Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>

        ) : (
          <Formulario cliente={clientes[0]} 
          clienteMudou={salvarCliente}
          cancelado={()=> setVisivel('tabela')
          
        }></Formulario>
        )}
      </Layout>
    </div>
  )
}
