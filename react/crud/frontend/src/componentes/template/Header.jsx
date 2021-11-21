import React from "react";

import './Header.css'

const Header = props =>
<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
        <p className="lead text-muted">{props.subtitle}</p>
    </h1>
</header>

export default Header