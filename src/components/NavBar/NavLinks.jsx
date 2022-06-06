import { Link } from "react-router-dom";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import style from "./NavBar.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import Carrinho from "../Carrinho/Carrinho";

export default function NavLinks(props) {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };

  const [showCart, setShowcart] = useState(false);

  return (
    <ul className={style.listaItens}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/cardapio">Pizzas</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/cardapio">Massas</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/cardapio">Bebidas</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Button texto="PEDIR" />
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Button onClick={(e) => setShowcart(true)} texto="CARRINHO" />
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.45 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a>
          <BsPersonCircle className={style.loginIcone} />
          Login
        </a>
      </motion.li>
      <Carrinho showCart={showCart} closeCart={(e) => setShowcart(false)} />
    </ul>
  );
}
