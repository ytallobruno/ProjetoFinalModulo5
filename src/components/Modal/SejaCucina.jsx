import React from "react";
import styles from './Modal.module.css';
import Chris from '../../assets/images/Chris.jpg';
import Emy from '../../assets/images/Emy.jpg';
import Felipe from '../../assets/images/Felipe.jpg';
import Su from '../../assets/images/Su.jpg';
import Yta from '../../assets/images/Yta.jpg';

export default function SejaCucina ({ onClose = ()=>{}}) {
    return (
        <div className={styles.modal}>
            
        <div className={styles.container}>
            <button className={styles.close} onClick ={onClose}/>
            <div className={styles.box}>
               <p className={styles.txt}><strong>Venha fazer parte da Família Resili Cucina</strong> </p>
               <label className={styles.txt}>Arquivo em PDF:</label>
               <input  className={styles.txt} type="file" name="pdf" /> 
               <br/>
               <br/>
               <button type='submit'>Salvar</button>
            </div>
        <span className={styles.box}>

            <h4>Contacte nossa Equipe de desenvolvedores.</h4>
           
            <img className={styles.link} src={Chris} title='Linkedin Dev: Christopher Mamed' onClick={() => window.open("https://www.linkedin.com/in/christopher-mamed-407485139/")}/>
                       
            <img className={styles.link} src={Emy} title='Linkedin Dev: Emilly Finco'onClick={() => window.open("https://www.linkedin.com/in/emilly-finco/")}/>
            
            <img className={styles.link} src={Felipe} title='Linkedin Dev: Felipe Carvalho' onClick={() => window.open("https://www.linkedin.com/in/carvalho-felipe28/")}/>
           
            <img className={styles.link} src={Su} title='Linkedin Dev: Suelen Reche' onClick={() => window.open("https://www.linkedin.com/in/suelen-reche-55a43a79/")}/>
           
            <img className={styles.link} src={Yta} title='Linekdin Dev: Ytallo Bruno' onClick={() => window.open("https://www.linkedin.com/in/ytallobruno/")}/>
            
        </span>
        </div>

        </div>

      )}
