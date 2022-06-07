import style from './Carrinho.module.css'
import React from "react";
import { useProdutos } from '../../../context/Cart';
import ProdutosProvider from "../../../context/Cart"


export default function Carrinho(props) {

    const { produtos, setProdutos } = useProdutos();
    const precos = produtos.map(produto => parseFloat(produto.preco.substring(3,8).replaceAll(',', '.')))
    const total = precos.reduce((initial, final) => initial + final, 0) 
    console.log(precos, total)

    return (
        <ProdutosProvider>
                <div>
                <div className={props.showCart ? style.carrinho : style.carrinhoClosed}>
                    <div className={style.title}>
                        <h2>Seus produtos</h2>
                        <p onClick={props.closeCart}> &#66338; </p>
                    </div>
                    <div className={style.produtos}></div>
                    <ul>
                        {produtos.map((produto, index) => <div className={style.listaProdutos}><li>{produto.nome} - {produto.preco} </li> <p className={style.remove}>&#66338;</p></div>)}
                    </ul>
                    <div className={style.total}>
                    <p> Total: R${total} </p>
                    </div>
                    
                 </div>
                 </div>
        </ProdutosProvider>

    )
}