import React from "react";
import { Link } from "react-router-dom";

const MenuItens = props =>
    <Link to={`${props.value ===undefined ? '' :props.value}`}><i className={`fa fa-${props.icon}`}></i> {props.name}</Link>

export default MenuItens