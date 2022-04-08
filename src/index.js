import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import imgJose from'./images/jose.jpg'
import imgMaria from './images/maria.jpg'
import imgJaqueline from './images/jaqueline.jpg'

const AppExercicio = () => {
    const estiloFundo = { marginTop: 12, paddingTop: '5%', paddingBottom: '2%' ,backgroundColor: 'lightGray', width: '100%', borderRadius: 8 }
    const imageTextSize = { fontSize: 12, textAlign: 'center' }
    const myCardStyle = { display: 'inline-block', marginTop: 12, paddingTop: '1%', padding: 5 , backgroundColor: 'thistle', height: 150, width: 120, borderRadius: 8 }
    const imageStyle = { height: 100, width: 120, borderRadius: 8 }
    const meuCard = (image, text) => (
        <div className='card' style={myCardStyle}>
            <img src={image} style={imageStyle}></img>
            <p style={imageTextSize}>{text}</p>
        </div>
        )
        
    const estiloTitulo = { verticalAlign : 'center', textAlign : 'center' }
    return (
        <div style={estiloFundo}>
            <p style={estiloTitulo}>Profissionais da saúde</p>
            <div style={{display: 'flex', justifyContent:'space-around', margin : 10, padding: 10, paddingBottom: '2%' , borderColor : 'gray', borderStyle : 'solid', borderRadius : 5 }}>
                {meuCard(imgJose, 'José da Silva')}
                {meuCard(imgMaria, 'Maria da Silva')}
                {meuCard(imgJaqueline, 'Jaqueline Mendes')}
            </div>
        </div>
    )
}

ReactDOM.render(
    <AppExercicio />,
    document.querySelector("#root")
)