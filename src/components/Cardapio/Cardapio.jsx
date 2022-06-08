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
  const [adicionado, setAdicionado] = useState()
  let [counter, setCounter] = useState(0)
  const cardapioFiltrado = cardapio.filter(el => el.nome.toLowerCase().includes(filtro.toLowerCase()))
  const { produtos, setProdutos } = useProdutos();



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
                          <div key={index} className={style.card}>
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
                            </div>
                            <div className={style.divButton}>
                            <span className={span ? style.spanOn : style.spanOff}>{counter}</span>
                            <Button
                            width='100%'
                            texto='adicionar ao carrinho'
                            onClick={(e) => setProdutos([...produtos, element])}
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
