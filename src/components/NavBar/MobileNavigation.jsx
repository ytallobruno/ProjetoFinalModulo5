import Resili from "../../assets/images/ResFoodIcon.png";
import style from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRound, CgClose } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburguerIcon = (
    <CgMenuRound className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={style.MobileNavigation}>
      <Link to="/carrinho" style={{ display: "flex", alignItems: "center" }}>
        <BsHandbag className={style.carrinho} />
      </Link>
      <img className={style.logotipo} src={Resili} alt="Logo ResFood" />
      {open ? closeIcon : hamburguerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
