import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

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
                Sobre nós
            </li>
            <li>
                Trabalhe conosco
            </li>
            <li>
                Contato
            </li>
          </ul>
          <p className={styles.copy_right}>
              <span>ResiliCucina</span> &copy; 2022
          </p>
      </footer>
  );
}