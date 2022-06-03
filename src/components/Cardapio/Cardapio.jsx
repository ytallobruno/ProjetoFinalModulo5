import Header from '../Header/Header'
import style from './Cardapio.module.css'
import Logo from '../../assets/images/ResiliCucina.png'
import Nhoque from '../../assets/images/nhoque.jpg'
import people from '../../assets/images/people-group-solid.svg'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'



export default function Cardapio() {

  const [cardapio, setCardapio] = useState([])
  const [span, setSpan] = useState(false)
  let [counter, setCounter] = useState(0)
  const link = 'https://api-resilicucina.herokuapp.com/api/cardapio'

  function adicionaItem (){
    span === false ? setSpan(true) : ''
    setCounter(counter+=1)
  }

/*   useEffect(() => {
    fetch(link)
    .then((res) => res.json())
    .then((res) => setCardapio(res))
  }, []) */

  return (
    <div className={style.cardapio}>
        <Header />
        <div>
          <div className={style.logo}>
            <img src={Logo} alt='logo do restaurante' />
          </div>
          <div className={style.cardapio}>
            <h1>Nosso Cardápio</h1>
            <div className={style.card}>
            <div className={style.cardImage}>
              <img src={Nhoque} alt='foto do prato' />
            </div>
            <div className={style.cardText}>
              <h3>Nhoque ao sugo</h3>
              <p className={style.descricao}>Massa a base de batata com molho caseiro de tomates e manjericão</p>
              <div className={style.preco}>
                <p>R$ 50,00</p>
               <div className={style.adicionar}>
                  <p onClick={(e) => adicionaItem()}>+</p>
               </div>
              </div>
              <div className={style.divButton}>
              <span className={span ? style.spanOn : style.spanOff}>{counter}</span>
              <Button
              width='100%'
              texto='adicionar ao carrinho'
              bgColor='#FFFF'
              textColor='black'
              />
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}
