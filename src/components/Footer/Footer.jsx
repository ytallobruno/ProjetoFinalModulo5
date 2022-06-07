import React, {useState} from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import SejaCucina from "../Modal/SejaCucina";

export default function Footer () {
    const [isSejaVisible, setIsSejaVisible] = useState (false);

return (
    <footer className={styles.footer}>
        <div className={styles.container}>   
            <div className={styles.row}>   
                <div className={styles.column}>   
                    <ul className={styles.list_unstyled}>
                        <li onClick={()=>{setIsSejaVisible(true)}} className={`${styles.item_list} ${styles.us_list}`}> Fale conosco </li>
                    {isSejaVisible ? (
                        <SejaCucina onClose={()=> setIsSejaVisible(false)}>
                            <SejaCucina/>
                        </SejaCucina>
                        ) : null}
                        <li className={`${styles.item_list} ${styles.us_list}`}>Conheça nossa equipe</li>
                        <li className={`${styles.item_list} ${styles.us_list}`}>Sobre nós</li>                       
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contato</h4><br/>
                        <ul>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Telefone: (11) 4458-6091</li>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>E-mail: resili.cucina@rc.com</li>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Endereço: Rua Itália, 400<br/>Bairro do Bixiga, SP</li>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Whatsapp: <span className={styles.social_whats}>
                                <a href="https://api.whatsapp.com/send?phone=+5548999999999"><FaWhatsapp /></a></span></li>
                        </ul>                              
                </div>
                <div className={styles.column}>
                    <h4>Redes sociais</h4><br/>
                        <ul>
                            <li className={`${styles.item_list} ${styles.social_list}`}><FaFacebook /></li>
                            <li className={`${styles.item_list} ${styles.social_list}`}><FaInstagram /></li>
                            <li className={`${styles.item_list} ${styles.social_list}`}><FaLinkedin /></li>
                        </ul>
                </div>   
            </div>
            <div className={styles.row}>
                <p className={styles.copy_right}>
                <span> &copy; {new Date().getFullYear()} ResiliCucina | All rights reserved</span>
                </p>
            </div>
        </div>

      </footer>
  );
}
