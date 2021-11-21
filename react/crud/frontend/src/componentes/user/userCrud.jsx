import React, {Component} from "react";

import Main from '../template/Main'

const headerProps = {
    icon ='users',
    title ='Usuários',
    subtitle = 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir usuário'
}

export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}