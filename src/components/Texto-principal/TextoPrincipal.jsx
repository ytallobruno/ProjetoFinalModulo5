import motoboy from '../../assets/images/motoboy.png'
import style from "./TextoPrincipal.module.css"
import Button from '../Button/Button'
import { useState } from "react"

export default function Main () {

    const [bgColor, setBgColor] = useState('black')
    const [txtColor, setTxtColor] = useState('white')

    function alteraBg () {
        bgColor == 'black' ? setBgColor('white') : setBgColor('black')
        txtColor =='white' ? setTxtColor('black') : setTxtColor('white')
    }

    return (
        <div className='texto-principal'>
            <div className={style.main}>

                <div className={style.mainText}>
                    <p className={style.comidaItaliana}> Comida Italiana </p>
                    <p> (de verdade) </p>
                    <p> na porta da sua casa </p>
                    <div className={style.buttonDiv}>
                        <Button
                        texto='Cardápio'/>
                        <Button
                        changeBg = {alteraBg}
                        textColor = {txtColor}
                        texto='Peça aqui' bgColor={bgColor}
                        />
                    </div>
                </div>

            <div className="style.videoDiv">
                <video className={style.videoContainer}  autoPlay="autoplay" loop='loop' muted="muted">
                <source type="video/mp4" autoPlay src="../../../public/Videos/main-video.mp4"/>
            Video não compatível no seu navegador
                </video>
                </div>
    </div>
    <div className={style.motoboy}>
        <div className={style.motoboyImagem}>
            <img src={motoboy} alt="imagem-motoboy" />
        </div>
        <div className={style.motoboyTexto}>
            <h1>Você nunca se surpreendeu tanto!</h1>
            <h2>Seu pedido quentinho em tempo recorde</h2>
            <ul>
                <li>Pizzas</li>
                <li>Massas</li>
                <li>Bebidas</li>
            </ul>
        </div>
    </div>
</div>
    )
}