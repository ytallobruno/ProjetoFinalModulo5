import Resili from "../../assets/images/ResiliCucina.png";
import style from "./NavBar.module.css";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <div className={style.brand}>
        <img className={style.logotipo} src={Resili} alt="Logo ResFood" />
        <p>Aberto de 18h - 00h</p>
      </div>
      <NavLinks />
    </nav>
  );
}
