import React from "react";
import styles from './Modal.module.css';

export default function FaleConosco ({ onClose = ()=>{}}) {
     return (
        <div className={styles.modal}>
                  
        <div className={styles.container}>
            <button className={styles.close} onClick={onClose}/> 
          
            <span className={styles.box}>
                <p  className={styles.txt1}>Olá, prazer em conhecer.
                    <br/>
                    <i> Ciao, piacere di conoscerti.</i>
                    <br/>
                    Estou a disposição para te ouvir.
                </p>
                <form>
                    <label className={styles.txt}>Nome Completo:</label>
                    <br/>
                    <input  className={styles.input} type="name" />
                    <br/> 
                    <label className={styles.txt}>Telefone:</label>
                    <br/>
                    <input  className={styles.input} type="phone" /> 
                    <br/>
                    <label className={styles.txt}>E-mail:</label>
                    <br/>
                    <input  className={styles.input} type="email" /> 
                    <br/>
                    <label className={styles.txt}>Mensagem:</label>
                    <br/>
                    <textarea className={styles.input} id="msg" name="msg" rows="4" cols="50"></textarea>
                    <br/>
                    <br/>
                    <button type='submit'>Enviar Mensagem</button>
                              
                 </form>
            </span> 
            
        </div>

        </div>

      )}

