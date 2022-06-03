import style from './Carrinho.module.css'
import { Link } from 'react-router-dom'
import AnimatedPage from '../AnimatedPage/AnimatedPage'


export default function Carrinho (props) {

    return (
        <AnimatedPage>
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
        </AnimatedPage>

    )

}