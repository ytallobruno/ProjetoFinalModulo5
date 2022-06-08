import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import style from './Pasword.module.css'

export default function Password () {
    return (
        <div>
            <NavBar />
            <form>
                <h1>Esqueceu a senha?</h1>

                <div className={style.inputDiv}>
                    <label> E-mail </label>
                    <input type="text" name="email" id="email" />

                    <label> Nova senha </label>
                    <input type="text" name="email" id="email" />

                    <label> Confirmar senha </label>
                    <input type="text" name="email" id="email" />
                </div>
                <p className={style.sucess}>Senha alterada com sucesso!</p>
                <Button texto='Confirmar'/>
            </form>
        </div>
    )
}