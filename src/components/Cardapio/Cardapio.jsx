import NavBar from "../NavBar/NavBar"
import style from './Cardapio.module.css'
import Logo from '../../assets/images/ResiliCucina.png'
import Footer from "../Footer/Footer"
import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { useProdutos } from "../../../context/Cart"


export default function Cardapio() {


  const [cardapio, setCardapio] = useState([])
  const [filtro, setFiltro] = useState('')
  const [span, setSpan] = useState(false)
  let [counter, setCounter] = useState(0)
  const cardapioFiltrado = cardapio.filter(el => el.nome.toLowerCase().includes(filtro.toLowerCase()))
  const { produtos, setProdutos } = useProdutos();

  function adicionaItem (){
    span === false ? setSpan(true) : ''
    setCounter(counter+=1)
  }

 

  useEffect(() => {
    fetch(import.meta.env.VITE_API_LINK)
    .then((res) => res.json())
    .then((res) => setCardapio(res.cardapio))
  }, [])



  return (
      <div>
        <div className={style.cardapioPrincipal}>
          <NavBar />
            <div className={style.logo}>
              <img src={Logo} alt='logo do restaurante' />
            </div>
            <div className={style.cardapio}>
              <h1>Nosso Cardápio</h1>

            <label className={style.search}>
              <input value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Procurar por prato" type='text' />
            </label>

              <div className={style.cardapioDiv}>
              {cardapioFiltrado.map((element, index)=> 
                          <div key={element.id} className={style.card}>
                          <div className={style.cardImage}>
                            <img src={element.img} alt='foto do prato' />
                          </div>
                          <div className={style.cardText}>
                            <h3>{element.nome}</h3>
                            <div className={style.descricao}>
                            <p>{element.descricao}</p>
                            </div>
                            <div className={style.preco}>
                              <p>{element.preco}</p>
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
                            onClick={(e) => produtos.push(element)}
                            />
                            </div>
                          </div>
                          </div>
              
              )}
            </div>
            </div>
            </div>
            <Footer />
            </div>
)  
}
