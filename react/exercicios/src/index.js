import React from 'react'
import  ReactDOM  from 'react-dom'

// import Primeiro from'./componentes/Primeiro'
// import BomDia from './componentes/BomDia'
import Multi, {BoaNoite} from './componentes/Multiplos'

// ReactDOM.render(<BomDia nome="Davidson" />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome ="Bia"/>
    </div>
,document.getElementById('root'))