import React from 'react'
import  ReactDOM  from 'react-dom'

// import Primeiro from'./componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, {BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

// ReactDOM.render(<BomDia nome="Davidson" />, document.getElementById('root'))

ReactDOM.render(
   <div>
       <Saudacao nome="Davidson" tipo ="Boa Noite" />
   </div>
,document.getElementById('root'))