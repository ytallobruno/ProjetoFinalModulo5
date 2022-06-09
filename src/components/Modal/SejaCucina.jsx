import React from "react";
import styles from './Modal.module.css';


export default function SejaCucina ({ onClose = ()=>{}}) {
    return (
        <div className={styles.modal}>
            
        <div className={styles.container}>
            <button className={styles.close} onClick ={onClose}/>
                <span className={styles.box}>  
               <p className={styles.txt1}><strong>Venha fazer parte da Família Resili Cucina!</strong></p>
               <br/>
               <form className={styles.form}>
                    <label className={styles.txt1}>Selecione o setor que deseja se candidatar:</label>
               <br/>
               <select>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Atendimento">Atendimento</option>
                    <option value="Cozinha">Cozinha</option>
                </select>
                <br/>
               <label className={styles.txt}>Envie seu currículo em PDF:</label>
               <input  className={styles.input} type="file" name="pdf" /> 
               <br/>
               <br/>
               <button type='submit'>Salvar</button>
               </form>
         </span>
    </div>


        </div>

      )}
