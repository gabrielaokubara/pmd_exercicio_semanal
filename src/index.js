import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import imgJose from'./images/jose.jpg'
import imgMaria from './images/maria.jpg'
import imgJaqueline from './images/jaqueline.jpg'

const AppExercicio = () => {
    const backgroundStyle = { marginTop: 12, paddingTop: '5%', paddingBottom: '2%' ,backgroundColor: 'lightGray', width: '100%', borderRadius: 8 }
    const imageTextSize = { fontSize: 12, textAlign: 'center' }
    const myCardStyle = { display: 'inline-block', marginTop: 12, paddingTop: '1%', padding: 5 , backgroundColor: 'thistle', height: 150, width: 120, borderRadius: 8 }
    const imageStyle = { height: 100, width: 120, borderRadius: 8 }
    const myCard = (image, text) => (
        <div className='card' style={myCardStyle}>
            <img src={image} style={imageStyle}></img>
            <p style={imageTextSize}>{text}</p>
        </div>
        )
        
    const titleStyle = { verticalAlign : 'center', textAlign : 'center' }
    return (
        <div style={backgroundStyle}>
            <p style={titleStyle}>Profissionais da saúde</p>
            <div style={{display: 'flex', justifyContent:'space-around', margin : 10, padding: 10, paddingBottom: '2%' , borderColor : 'gray', borderStyle : 'solid', borderRadius : 5 }}>
                {myCard(imgJose, 'José da Silva')}
                {myCard(imgMaria, 'Maria da Silva')}
                {myCard(imgJaqueline, 'Jaqueline Mendes')}
            </div>
        </div>
    )
}

ReactDOM.render(
    <AppExercicio />,
    document.querySelector("#root")
)
