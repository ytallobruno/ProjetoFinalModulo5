import React from "react";
import styles from './Modal1.module.css';


export default function NossaFamilia ({onClose = () =>{}}) {
     return ( 
<div  className={styles.modal1}>
       <div className={styles.container}>  
       <button className={styles.close} onClick ={onClose}/>
                <span className={styles.box}>      
                  <p className={styles.txt}>
                  Nossa Família veio da Itália em 1977, se estabelecendo no italianíssimo bairro do Bixiga em São Paulo, o patrono da nossa família o Sr. <strong>Vicenzo Ricci</strong>, deu início ao sonho de trazer ao Brasil mais que que um serviço de alimentação em 1980, a verdadeira motivação era mostrar aos brasileiros outra forma de amar, pois na Itália acreditamos que cozinhar para outra pessoa é demonstrar de maneira palpável o quanto se ama. <br/>
                  Com este pensamento e impulsionados pelo desejo brasileiro de comer bem estamos a mais de 40 anos atendendo em nosso estabelecimento em São Paulo.</p>
                </span>
        </div>
          </div>
               
)  
}


