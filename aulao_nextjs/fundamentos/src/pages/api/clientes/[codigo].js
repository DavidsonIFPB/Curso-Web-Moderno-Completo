const clientes =[
    {
        id: 0,
        nome:'Davidson',
        email: 'davidson@email.com'
    },

    {
        id: 1,
        nome:'Douglas',
        email: 'douglas@email.com'

    }
]
export default function handler (req, res) {
    const codigo = req.query.codigo
    // console.log(cliente[codigo].id)
    res.status(200).json(getClientes(codigo))
}

function getClientes (id){
    if(clientes[id]===undefined)
        return {
            id,
            nome:"",
            email:""
        }
    else return clientes[id]    

}
