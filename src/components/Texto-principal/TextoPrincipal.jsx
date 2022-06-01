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
        <div className={style.main}>
            <div className={style.mainText}>
                <p className={style.comidaItaliana}> Comida Italiana </p>
                <p> (de verdade) </p>
                <p> na porta da sua casa </p>
                <div className={style.buttonDiv}>
                    <Button 
                    width='150px'
                    texto='Cardápio'/>

                    <Button
                    changeBg = {alteraBg}
                    textColor = {txtColor}
                    texto='Peça aqui' bgColor={bgColor}
                    width='150px'
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
    )
}