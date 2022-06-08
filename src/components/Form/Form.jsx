import style from "./Form.module.css";
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useLogin } from "../../../context/Login";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import NavBar from "../NavBar/NavBar";




export default function Form() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [usuario, setUsuario] = useState([])
  const {logged, setLogged} = useLogin()
  const [sucesso, setSucesso] = useState('')
   

  const handleClick = (e) =>{
   e.preventDefault()
   setShow(!show);
  }


  useEffect(() => {
    fetch(import.meta.env.VITE_POST_CLIENT)
    .then((res) => res.json())
    .then((res) => setUsuario([...res.clientes]) )
  }, [])


  function fazerLogin(){
    usuario.forEach(function(user){
      if(user.email_cliente === email && user.senha === password) {
        setLogged(true)
        setSucesso('login realizado com sucesso')
        setTimeout(() => {
          setSucesso('')
        }, 1500);
      } else {
        setLogged(false)
        setSucesso('e-mail e senha não coincidem')
        setTimeout(() => {
          setSucesso('')
        }, 1500);
      }
    })
  }





  return (
    <div>
    <div className="Form">
      <div className={style.navBar}>
      <NavBar className={style.nav}/>
        <form className={style.Form}>
          <h2>Login</h2><br></br><br></br>
          <h3>E-mail:</h3>
          <input className={style.input}
            type="email" placeholder="Digite seu e-mail..."
            value={email} onChange={e => setEmail(e.target.value)}/><br></br><br></br>
          <h3>Senha:</h3>
          <div className={style.divEye}>
            <input className={style.input}
              type={show ? "text" : "password"}
              placeholder="Digite sua senha..."
              value={password}
              onChange={e => setPassword(e.target.value)}/>
             <div className={style.loginEye}>
              {show ? (
                < BsFillEyeFill size="20px" className={style.Openeye} onClick={handleClick} />
              ) : (
                <BsFillEyeSlashFill size="20px" className={style.Openeye} onClick={handleClick} />
              )}
            </div>
          </div><br></br>

          <Button texto='Entrar' type='submit' className="button" onClick={function(e){
            e.preventDefault()
            fazerLogin()
          }} /><br></br><br></br>
          <p id={style.sucesso}>{sucesso}</p>
          <Link style={{textDecoration: 'none'}} to="/recover"><h6>Esqueceu a senha?</h6></Link>
          <Link style={{textDecoration: 'none'}} to="/Cadastro"><h6>Ainda não é cadastrado? Cadastre-se Aqui!</h6></Link>
        </form>
        <Footer/>
      </div>
    </div>
    </div>
  )
}









