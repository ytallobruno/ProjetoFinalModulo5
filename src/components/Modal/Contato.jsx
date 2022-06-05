import React, {useState}from "react";
import cliente from "../../assets/images/cliente.jpeg";
import styles from './Modal.module.css';

export default function Contato ({ onClose = ()=>{}}) {
     return (
        <div className={styles.modal}>
                  
        <div className={styles.container}>
            <button className={styles.close} onClick={onClose}/> 
            <span className={styles.box}>
                <p  className={styles.txt}>Olá, prazer em conhecer.
                    <br/>
                <i> Ciao, piacere di conoscerti.</i>
                <br/>
                Estou a disposição para te ouvir, através do meu email:
                <br/>
                vicenzoricci@resilicucina.com</p>
            
                <p  className={styles.txt}>Ou se preferir venha conhecer a NOSTRA CASA.<br/>
                End: Rua Itália, 400
                <br/>
                Bairro do Bixiga, SP
                <br/>
                Telefone: (11) 4458-6091 
                </p>
            </span> 
            
            <img className={styles.img} title="Vicenzo Ricci" src={cliente}/>
        </div>

        </div>

      )}

