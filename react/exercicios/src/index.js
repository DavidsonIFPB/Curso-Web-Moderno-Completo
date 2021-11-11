import React from 'react'
import  ReactDOM  from 'react-dom'

// import Primeiro from'./componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, {BoaNoite} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<BomDia nome="Davidson" />, document.getElementById('root'))

ReactDOM.render(
   <div>
       {/* <Saudacao nome="Davidson" tipo ="Boa Noite" />
        */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"></Filho>
            <Filho nome="Paulo"></Filho>
            <Filho nome="Carla"></Filho>
        </Pai>
   </div>
,document.getElementById('root'))