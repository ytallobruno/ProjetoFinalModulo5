import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import SobreNos from "./components/Modal/SobreNos";
import SejaCucina from "./components/Modal/SejaCucina";
import Contato from "./components/Modal/Contato";

export default function Footer () {
  return (
      <footer className={styles.footer}>
          <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <li>
                <span onClick={<SobreNos/>}>
                    Sobre nós
                </span>               
            </li>
            <li>
                <span onClick={<SejaCucina/>}>
                    Seja Cucina
                </span>
            </li>
            <li>
                <span onClick={<Contato/>}>
                    Contato
                </span>                
            </li>
          </ul>
          <p className={styles.copy_right}>
              <span>ResiliCucina</span> &copy; 2022
          </p>
      </footer>
  );
}
