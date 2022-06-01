import style from './Carrinho.module.css'
import { Link } from 'react-router-dom'

export default function Carrinho () {

    return (
        <div>
            <div className={style.carrinho}>
                <div className={style.title}>
                    <h2>Seus produtos:</h2>
                    <Link to="/" style={{color: 'white'}}><p> &#66338; </p></Link>
                </div>
                <p>Produtos: </p>
                <p>Preço: </p>
                <p> Total: </p>
            </div>
        </div>

    )

}