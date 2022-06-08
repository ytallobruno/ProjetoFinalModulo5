import style from "./Form.module.css";
import Button from '../Button/Button'
import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";



export default function Form() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
   
  const handleClick = (e) =>{
   e.preventDefault()
   setShow(!show);
  }

  return (
    <div className="Form">
      <div>
        <form className={style.Form}>
          <h2>Login</h2><br></br><br></br>
          <h3>E-mail:</h3>
          <input className={style.input}
            type="email" placeholder="Digite seu e-mail..."
            value={email} onChange={e => setEmail(e.target.value)}/><br></br><br></br>
          <h3>Senha:</h3>
          <div>
            <input className={style.input}
              type={show ? "text" : "password"}
              placeholder="Digite sua senha..."
              value={password}
              onChange={e => setPassword(e.target.value)}/>
             <div className="login-eye">
              {show ? (
                < BsFillEyeFill size="20px" className={style.Openeye} onClick={handleClick} />
              ) : (
                <BsFillEyeSlashFill size="20px" className={style.Openeye} onClick={handleClick} />
              )}
            </div>
          </div><br></br>

          <Button texto='Logar' className="button"></Button><br></br><br></br>
          <Link to="/Cadastro"><h6>Ainda não é cadastrado? Cadastre-se Aqui!</h6></Link>
        </form>
      </div>
    </div>

  )
}









