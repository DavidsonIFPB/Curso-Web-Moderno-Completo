import Navegador from '../components/Navegador'

export default function Inicio(){
    return (
        <div style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="estiloso"/>
            <Navegador texto="Exemplo" destino="exemplo" cor="#9400D3"/>
            <Navegador texto="JSX" destino="jsx" cor ="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor ="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor ="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor ="darkturquoise"/>
            <Navegador texto="Integração API #01" destino="/integracao_1" cor ="tomato"/>
            
        </div>
    )
}