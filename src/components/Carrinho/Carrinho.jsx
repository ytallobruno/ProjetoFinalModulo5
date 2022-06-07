import style from './Carrinho.module.css'
import React, { useState } from "react";
import { useProdutos } from '../../../context/Cart';
import ProdutosProvider from "../../../context/Cart"


export default function Carrinho(props) {

    const { produtos, setProdutos } = useProdutos();
    const produtosCopy = [...produtos]
    
    const precos = produtosCopy.map(produto => parseFloat(produto.preco.substring(3,8).replaceAll(',', '.')))
    const total = arredondar(precos.reduce((initial, final) => initial + final, 0)).replaceAll('.',',')
    
    function removeItem(indice) {
        produtosCopy.splice(indice, 1);
        setProdutos([...produtosCopy])
    }

    function arredondar(n) {
        return (Math.round(n * 100) / 100).toFixed(2);
    }


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
                        {produtos.length > 0 ? produtos.map((produto, index) => <div key={index} className={style.listaProdutos}><li>{produto.nome} - {produto.preco} </li> <p onClick={(e) => removeItem(index) } className={style.remove}>&#66338;</p></div>) : <p> Seu carrinho está vazio. <br></br> Adicione um produto. </p>}
                    </ul>
                    <div className={style.total}>
                    <p> Total: R$ {total} </p>
                    </div>
                    
                 </div>
                 </div>
        </ProdutosProvider>

    )
}