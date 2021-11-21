import React from "react";
import './MenuItens.css'


export default props =>
    <nav className="menu">
        <a href={`#${props.value ===undefined ? '' :'/'+props.value}`}><i className={`fa fa-${props.icon}`}></i> {props.name}</a>
    </nav>
