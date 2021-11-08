import React from "react"

// A ideia de props vem de Propriedade. É uma convenção
export default props => [  
        <h1 key="h1">Bom Dia {props.nome}!</h1>,
        <h2 key="h2"> Até Breve</h2>
    
]




// export default props =>
//     <Fragment>
//         <h1>Bom Dia {props.nome}</h1>
            // <h2>Até Breve</h2>
//     </Fragment>
