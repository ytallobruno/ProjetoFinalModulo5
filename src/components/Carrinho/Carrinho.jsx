import style from './Carrinho.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Carrinho (props) {

    function mostraCarrinho (ev){
        setShowcart(!showCart)
    }



    return (
        <div>
            <div className={props.showCart ? style.carrinho : style.carrinhoClosed}>
                <div className={style.title}>
                    <h2>Seus produtos</h2>
                    <p onClick={props.closeCart}> &#66338; </p>
                </div>
                <div className={style.produtos}></div>
                    <p>Produtos: </p>
                    <p> Total: </p>
                </div>
            </div>

    )

}