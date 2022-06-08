import React from "react";
import familiaitaliana from "../../assets/images/familiaitaliana.jpg";
import restaurantefoto from "../../assets/images/restaurantefoto.jpg";
import styles from './SobreNos.module.css';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function SobreNos () {
     return ( 
<div  className={styles.container}>
  <NavBar />
       <div className={styles.containergeral}>      
         <div className={styles.flipcontainer}>
            <div className={styles.flipper}>
                <article className={styles.front}>
                  <img className={styles.img} src={familiaitaliana}/>
                  <p className={styles.txt}>
                  Nossa Família
                  </p>
                </article> 
                <article className={styles.back}>
                  <p className={styles.txt}>
                  Nossa Família veio da Itália em 1977, se estabelecendo no italianíssimo bairro do Bixiga em São Paulo, o patrono da nossa família o Sr. <strong>Vicenzo Ricci</strong>, deu início ao sonho de trazer ao Brasil mais que que um serviço de alimentação em 1980, a verdadeira motivação era mostrar aos brasileiros outra forma de amar, pois na Itália acreditamos que cozinhar para outra pessoa é demonstrar de maneira palpável o quanto se ama. <br/>
                  Com este pensamento e impulsionados pelo desejo brasileiro de comer bem estamos a mais de 40 anos atendendo em nosso estabelecimento em São Paulo.</p>
                </article> 
          </div>
          </div>
      <div className={styles.flipcontainer}>
          <div className={styles.flipper}>
              <article className={styles.front}>
               <img className={styles.img} src={restaurantefoto}/>
               <p className={styles.txt}>
                Nosso Restaurante
              </p>
              </article> 
              <article className={styles.back}>
              <p className={styles.txt}>
                Bem no estilo das tradicionais <i>Cantinas Italianas</i> nosso restaurante conta com 156 lugares dispostos entre o salão interno e externo; na parte externa hospedamos lindas e antigas parreiras de uvas, que dão um charme e remetem a bela Toscana, além da parreira é neste espaço que o cliente pode desfrutar dos sentidos que são aguçados durante a preparação das nossas pizzas; no lado interno o acolhimento típico italiano ocorre com música ambiente, um sinuoso poço dos desejos e nos dias frios uma aconchegante lareira. Venha nos conhecer!
              </p>  
              
              </article> 
              </div>  
             </div> 
             </div>     
         
          
    <Footer/>

</div>
          
)  
}


