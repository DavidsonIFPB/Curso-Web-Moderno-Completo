import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Home from '../componentes/home/Home'
import Footer from '../componentes/template/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Home/>        
        <Footer/>
    </div>
