import React, {useState} from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import SobreNos from "../Modal/SobreNos";
import SejaCucina from "../Modal/SejaCucina";
import Contato from "../Modal/Contato";

export default function Footer () {
    const [isSobreVisible, setIsSobreVisible] = useState (false);
    const [isSejaVisible, setIsSejaVisible] = useState (false);
    const [isContatoVisible, setIsContatoVisible] = useState (false);
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
            <li onClick={()=>{setIsSobreVisible(true)}}> Sobre Nós </li>
            {isSobreVisible ? (
                <SobreNos onClose={()=> setIsSobreVisible(false)}/>
                  ) : null}
            <li onClick={()=>{setIsSejaVisible(true)}}> Seja Cucina </li>
            {isSejaVisible ? (
                <SejaCucina onClose={()=> setIsSejaVisible(false)}>
                    <SejaCucina/>
                </SejaCucina>
                ) : null}
            <li onClick={()=>{setIsContatoVisible(true)}}> Contato </li>
            {isContatoVisible ? (
                <Contato onClose={()=> setIsContatoVisible(false)}>
                    <Contato/>
                </Contato>
                ) : null}
        </ul>
          <p className={styles.copy_right}>
              <span>ResiliCucina</span> &copy; 2022
          </p>
      </footer>
  );
}
