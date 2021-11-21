import React from "react";
import MenuItens from './MenuItens'
import './Nav.css'

const Nav = props=>
<aside className="menu-area">
    <nav className="menu">
        <MenuItens icon={'home'} name={'Início'}/>
        <MenuItens icon ={'user'} name={'Usuário'}value="users"/>
    </nav>
</aside>

export default Nav