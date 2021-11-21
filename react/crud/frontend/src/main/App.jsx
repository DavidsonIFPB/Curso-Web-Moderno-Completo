import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from "react"
import {BrowserRouter} from 'react-router-dom'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Routes from './Routes'
import Footer from '../componentes/template/Footer'


const App = props =>
<BrowserRouter>
<div className="app">
    <Logo/>
    <Nav/>
    <Routes />        
    <Footer/>
</div>
</BrowserRouter>

export default App
