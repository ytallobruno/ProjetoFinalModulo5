import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Button from "../Button/Button";
import Resili from "../../assets/images/ResiliCucina.png";
import Perfil from "../../assets/images/perfil.png";

export default function Header(props) {
  return (
    <div>
      <nav className={style.navbar}>
        <img className={style.logotipo} src={Resili} alt="Logo ResFood" />
        <p>Aberto de 18h - 00h</p>
        <ul className={style.listaItens}>
          <li>
            <a>Pizzas</a>
          </li>
          <li>
            <a>Massas</a>
          </li>
          <li>
            <a>Bebidas</a>
          </li>
          <li>
            <Link to="/cardapio" style={{textDecoration: 'none'}}><Button texto="PEDIR" /></Link>
          </li>
          <li>
            <Link to="/carrinho" style={{textDecoration: 'none'}}><Button texto="CARRINHO" /></Link>
          </li>
          <li>
            <a>
              <img src={Perfil} />
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
