import Resili from "../../assets/images/ResFoodIcon.png";
import style from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRound, CgClose } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carrinho from "../Carrinho/Carrinho";
import Indicador from "../Indicador/Indicador";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const[showCart, setShowcart] = useState(false);
  const hamburguerIcon = (
    <CgMenuRound className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <div>
      <nav className={style.MobileNavigation}>
        <BsHandbag
          className={style.carrinho}
          onClick={(e) => setShowcart(true)}
        />
        <Link to="/">
          <img className={style.logotipo} src={Resili} alt="Logo ResFood" />
        </Link>
        {open ? closeIcon : hamburguerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        <Indicador />
      </nav>
      <div className={style.carrinhoIndicador}>
        <Carrinho showCart={showCart} closeCart={(e) => setShowcart(false)} />
        
      </div>
      
    </div>
  );
}
