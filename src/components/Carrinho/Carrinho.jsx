import style from './Carrinho.module.css'
import React, { useState } from "react";
import { useProdutos } from '../../../context/Cart';
import Button from '../Button/Button';
import { useLogin } from "../../../context/Login";


export default function Carrinho(props) {

    const { produtos, setProdutos } = useProdutos();
    const produtosCopy = [...produtos]
    const [pedidoRealizado, setPedido] = useState('é necessário estar logado para realizar um pedido')
    const {logged, setLogged} = useLogin()


    const precos = produtosCopy.map(produto => parseFloat(produto.preco.substring(3,8).replaceAll(',', '.')))
    const total = arredondar(precos.reduce((initial, final) => initial + final, 0)).replaceAll('.',',')
    
    function removeItem(indice) {
        produtosCopy.splice(indice, 1);
        setProdutos([...produtosCopy])
    }

    function arredondar(n) {
        return (Math.round(n * 100) / 100).toFixed(2);
    }

    function timeOut () {
        setTimeout(() => {
            setPedido('')
        }, 1500);
    }

    function fazerPedido() {
        console.log(logged)
        if(logged) {
            setPedido('pedido realizado com sucesso')
            timeOut()
        } else {
            setPedido('é necessário estar logado para realizar um pedido')
            timeOut()
        }
    }
    return (
                <div>
                <div className={props.showCart ? style.carrinho : style.carrinhoClosed}>
                    <div className={style.title}>
                        <h2>Seus produtos</h2>
                        <p onClick={props.closeCart}> &#66338; </p>
                    </div>
                    <div className={style.produtos}></div>
                    <ul>
                        {produtos.length > 0 ? produtos.map((produto, index) => <div key={index} className={style.listaProdutos}><li>{produto.nome} - {produto.preco} </li> <p onClick={(e) => removeItem(index) } className={style.remove}>&#66338;</p></div>) : <div style={{textAlign: 'center'}}> <p>Seu carrinho está vazio <br></br>=(</p><p>Adicione um produto</p></div>}
                    </ul>
                    <div className={style.total}>
                    <p> Total: R$ {total} </p>
                    <Button onClick={function (e){
                        e.preventDefault();
                        fazerPedido()
                    }} display={produtos.length > 0 ? 'inline-block' : 'none'} texto='FINALIZAR PEDIDO' /> 
                    <p id={style.pedidoRealizado}>{pedidoRealizado}</p>
                    </div>
                    
                 </div>
                 </div>



    )
}