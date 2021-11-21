import React from "react";
import './MenuItens.css'
import { Link } from "react-router-dom";

const MenuItens = props =>
<nav className="menu">
    <Link to={`${props.value ===undefined ? '' :props.value}`}><i className={`fa fa-${props.icon}`}></i> {props.name}</Link>
</nav>

export default MenuItens