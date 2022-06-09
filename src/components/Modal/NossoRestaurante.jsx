import React from "react";
import styles from './Modal1.module.css';


export default function NossoRestaurante ({onClose = () =>{}}) {
     return ( 
<div  className={styles.modal}>
       <div className={styles.container}>  
       <button className={styles.close} onClick ={onClose}/>
                <span className={styles.box}>      
                  <p className={styles.txt}>
                  Bem no estilo das tradicionais <i>Cantinas Italianas</i> nosso restaurante conta com 156 lugares dispostos entre o salão interno e externo; na parte externa hospedamos lindas e antigas parreiras de uvas, que dão um charme e remetem a bela Toscana, além da parreira é neste espaço que o cliente pode desfrutar dos sentidos que são aguçados durante a preparação das nossas pizzas; no lado interno o acolhimento típico italiano ocorre com música ambiente, um sinuoso poço dos desejos e nos dias frios uma aconchegante lareira. Venha nos conhecer!</p>
                </span>
                </div>
          </div>
               
)  
}


