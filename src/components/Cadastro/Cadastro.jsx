import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import style from './Cadastro.module.css'
import { useState } from 'react'

export default function Cadastro() {

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [confirmar, setConfirmar] = useState('')
const [tipo, setTipo] = useState('password')
const [display, setDisplay] = useState('none')
const [aviso, setAviso] = useState('')

function confirmaSenha(e){
 if(senha.includes(e.target.value)){
   setConfirmar(e.target.value)
   setDisplay('none')
 } else{
   setConfirmar(e.target.value)
   setDisplay('flex')
   setAviso('As senhas não estão dando match!')
   confirmaSenha(e)
 }
}

function timeOut(){
  setTimeout(() => {
    setDisplay('none')
    setAviso('')
  }, 2000)
}

function cadastraUsuario(){
  if(!email.includes('@') || !email.includes('.com')){
    setDisplay('flex')
    setAviso('insira um e-mail válido')
    timeOut()
  } else if (nome.length <= 3) {
    setDisplay('flex')
    setAviso('nome deve conter mais que 3 caracteres')
    timeOut()
  
  } else if(senha.length < 5){
    setDisplay('flex')
    setAviso('senha deve possuir no mínimo 5 caracteres e uma letra maiúscula')
   
  }else {
    post()
  }
}

function post(){
  fetch(import.meta.env.VITE_POST_CLIENT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id_cliente: Math.round(Math.random()*100),
    nome_cliente: nome,
    email_cliente: email,
    senha: senha
  })
})
  .then(response => response.json())
  .then(data => {
    setDisplay('flex')
    setAviso('usuário cadastrado com sucesso')
    timeOut()
})
  .catch((error) => {
  console.log(error)
});
}


  return (
    <div>
      <NavBar />
      <div className={style.cadastro}>

        <form action="">
        <h2> Cadastro </h2>
          <div className={style.inputDiv}>
            <label for='nome'> Nome </label>
            <input type='text' name='nome' id='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
            <label for='email'> Email </label>
            <input placeholder="usuario@email.com" type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label for='senha'> Senha </label>
            <input type='password' name='senha' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
           
            <div className={style.confirmarDiv}>
            <label for='confirmar-senha'> Confirmar Senha </label>
            <input type='password' name='confirmar-senha' id='confirmar-senha' value={confirmar} onChange={(e) => confirmaSenha(e) } />
            <p style={{display: display}}> {aviso} </p>
            </div>

            <Button type='submit' texto='CADASTRAR' onClick={function(e) { 
              e.preventDefault()
              cadastraUsuario()
            }}/>
          </div>


        </form>
      </div>
      <Footer />
    </div>
  )
}
