import React from "react";
import familiaitaliana from "../../assets/images/familiaitaliana.jpg";
import styles from './Modal.module.css';

export default function SobreNos ({ onClose = ()=>{}}) {
     return ( 
       <div className={styles.modal}>
        <div className={styles.container}>
            <button className={styles.close} onClick={onClose}/> 
            <span className={styles.txt}>
                Somos um restaurante típico italiano, nosso patrono e meu pai <strong>Luigi Ricci</strong> chegou no Brasil com 10 anos de idade e logo encantou-se com o setor de alimentação trabalhando em mercearias da região que morava. <br/>
                Na década de 60 meu pai com apoio de toda a nossa família abriu seu primero estabelecimento um sonho de trazer ao Brasil mais que um serviço de alimentação, a verdadeira motivação era mostrar aos brasileiros outra forma de amar, pois na Itália acreditamos que cozinhar para outra pessoa é demonstrar de maneira palpável o quanto se ama. <br/>
                Com este pensamento e impulsionados pelo desejo brasileiro de comer bem, eu <strong>Vicenzo Ricci</strong> e minha família permanecemos com a original culinária italiana em honra ao meu pai e sua história.<br/>
                Aqui você encontrara deliciosas receitas da 'nostra famiglia' para a sua família.
            </span>
            <img className={styles.img} src={familiaitaliana}/>
        </div>

        </div>

      )}

