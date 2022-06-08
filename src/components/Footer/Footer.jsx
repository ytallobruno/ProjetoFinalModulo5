import React, {useState} from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";
import SejaCucina from "../Modal/SejaCucina";
import FaleConosco from "../Modal/FaleConosco";

export default function Footer () {
    const [isSejaVisible, setIsSejaVisible] = useState (false);
    const [isFaleVisible, setIsFaleVisible] = useState (false);
return (
    <footer className={styles.footer}> 
        <div className={styles.container}> 
            <div className={styles.row}>   
                <div className={styles.column}>   
                    <ul className={styles.list_unstyled}>
                        <li onClick={()=>{setIsSejaVisible(true)}} className={`${styles.item_list} ${styles.us_list}`}> Seja Cucina </li>
                    {isSejaVisible ? (
                        <SejaCucina onClose={()=> setIsSejaVisible(false)}>
                            <SejaCucina/>
                        </SejaCucina>
                        ) : null}
                        <li onClick={()=>{setIsFaleVisible(true)}} className={`${styles.item_list} ${styles.us_list}`}> Fale Conosco </li>
                    {isFaleVisible ? (
                        <FaleConosco onClose={()=> setIsFaleVisible(false)}>
                            <FaleConosco/>
                        </FaleConosco>
                        ) : null}
                        <Link style={{textDecoration:"none", color:" #F7CC32"}} to='/devs'>
                        <li className={`${styles.item_list} ${styles.us_list}`}>Conheça a nossa Equipe</li> 
                        </Link> 
                        <Link style={{textDecoration:"none", color:" #F7CC32"}} to='/sobrenos' className={`${styles.item_list} ${styles.us_list}`}>
                        <li className={`${styles.item_list} ${styles.us_list}`}>Sobre nós</li> 
                        </Link>                      
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contatos</h4><br/>
                        <ul>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Telefone: (11) 4458-6091</li>                            
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Whatsapp: <span className={styles.social_whats} style={{textDecoration:"none", color:" #F7CC32"}}>
                                <a href="https://api.whatsapp.com/send?phone=+5548999999999"><FaWhatsapp /></a></span></li>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>E-mail: resili.cucina@rc.com</li>
                            <li className={`${styles.item_list} ${styles.contact_list}`}>Endereço: Rua Itália, 400 Bairro do Bixiga, SP</li>
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
