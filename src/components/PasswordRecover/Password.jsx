import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import style from './Pasword.module.css'
import { useState, useEffect } from "react";



export default function Password () {

    const [usuarios, setUsuarios] = useState([])
    const [email, setEmail] = useState('')
    const [sucess, setSucess] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userObj, setUserObj] = useState([])


    function verificaEmail () {
        const user = usuarios.filter(usuario => usuario.email_cliente === email)
        setUserObj(...user)
        if(user.length > 0){
            setDisplay(true)
        } else {
            setSucess('email não encontrado')
            setTimeout(() => {
                setSucess('')
            }, 1500);
        }
    }

    function trocaSenha () {
        if(password === confirmPassword && password.length > 3){
        fetch(`${import.meta.env.VITE_POST_CLIENT}/${userObj.id_cliente}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              senha: password
            })
          })
            .then(response => response.json())
            .then(data => {
              setDisplay('flex')
              setSucess('senha alterada com sucesso')
              setTimeout(() => {
                  setSucess('')
              }, 1500);
          })
            .catch((error) => {
            console.log(error)
          });
          } else {
            setSucess('senhas inválidas. tente novamente.')
            setTimeout(() => {
                setSucess('')
            }, 1500);
        }
        } 
    

    useEffect(() => {
        try {
        fetch(import.meta.env.VITE_POST_CLIENT)
        .then((res) => res.json())
        .then((res) => setUsuarios([...res.clientes]))
            
        } catch (error) {
            console.log(error)
        }
        
    }, [])

    return (
        <div>
        <div className={style.formDiv}>
            <NavBar />
            <form>
                <h1>Esqueceu a senha?</h1>

                <div className={style.inputDiv}>
                    <label> E-mail </label>
                    <input placeholder="usuario@email.com" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <div className={display ? style.showInput : style.hideInput}>
                    <label> Nova senha </label>
                    <input type="password" name="pass" id="pass"  value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label> Confirmar senha </label>
                    <input type="password" name="confirm" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Button onClick={function(e){
                        e.preventDefault()
                        trocaSenha()
                    }}texto='Confirmar'/>
                    </div>
                </div>
                <p className={style.sucess}>{sucess}</p>
                <Button display={display?'none':'flex'} 
                onClick={function (e) {
                    e.preventDefault()
                    verificaEmail()
                }}
                texto='Verificar e-mail'/>
            </form>
        </div>
        <Footer />
        </div>
    )
}