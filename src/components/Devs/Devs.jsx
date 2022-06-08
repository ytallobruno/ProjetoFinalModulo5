import React from "react";
import styles from "./Devs.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Chris from '../../assets/images/Chris.jpg';
import Emy from '../../assets/images/Emy.jpg';
import Felipe from '../../assets/images/Felipe.jpg';
import Su from '../../assets/images/Su.jpg';
import Yta from '../../assets/images/Yta.jpg';

export default function Devs() {
     return (
<div>
  <NavBar />

    <div className={styles.container}>  

    <span className={styles.box}>
            Conheça nossa Equipe de Desenvolvedores!

            <br/>   
    </span> 
 
 <div className={styles.containergeral}>
 <div className={styles.flipcontainer}>
    <div className={styles.flipper}>
    <article className={styles.front}>
           <img className={styles.img} src={Chris}/>
           <p className={styles.box}>Christopher Mamed</p>
    </article>

    <article className={styles.back}>
        <p className={styles.txt}>Christopher, adora um friozinho, clássico morador de Curitiba e desenvolvedor nas horas vagas junto da sua playlist lo-fi. Ama um jogo de estratégia e é crítico amador de filme barato. 
        <br/>
         <FaLinkedin className={styles.icons} onClick={() => window.open("https://www.linkedin.com/in/christopher-mamed-407485139/")}/>
        <FaGithub className={styles.icons} onClick={() => window.open("https://github.com/chrismamed")}/></p>
    </article>
    </div>  
    </div>
    
    <div className={styles.flipcontainer}>
    <div className={styles.flipper}>
    <article className={styles.front}>      
           <img className={styles.img} src={Emy}/> <br/>
           <p className={styles.box}>Emilly Finco</p>
    </article>

    <article className={styles.back}>
        <p className={styles.txt}>Emilly , moradora do interior de São Paulo, estudante de ADS e nas horas vagas adora de tocar violão e assistir séries e filmes. Ama animais e é fã de Harry Potter .
        <br/>
        <FaLinkedin className={styles.icons} onClick={() => window.open("https://www.linkedin.com/in/emilly-finco/")}/>
           <FaGithub className={styles.icons} onClick={() => window.open("https://github.com/Emillycristina")}/></p>
    </article>
    </div>  
    </div>

    <div class={styles.flipcontainer}> 
    <div class={styles.flipper}>
     <article class={styles.front}>
               <img className={styles.img} src={Felipe}/> <br/>
               <p className={styles.box}>Felipe Carvalho</p>
     </article>

     <article className={styles.back}>
       <p className={styles.txt}>Felipe Oliveira, desenvolvedor Full Stack do Rio de Janeiro e apaixonado por tecnologia.
Courage to rise!
       <br/>
       <FaLinkedin className={styles.icons} onClick={() => window.open("https://www.linkedin.com/in/carvalho-felipe28/")}/>
      <FaGithub className={styles.icons} onClick={() => window.open("https://github.com/felipecro28")}/> </p>
    </article>
    </div>
    </div>

    <div class={styles.flipcontainer}> 
      <div class={styles.flipper}>
      <article class={styles.front}>
           <img className={styles.img} src={Su}/> <br/>
           <p className={styles.box}>Suelen Reche</p>
      </article>

      <article class={styles.back}>
              <p className={styles.txt}>Suelen, nutricionista e mãe, agora uma desenvolvedora, gosto de passar tempo com a minha família; assistindo filmes e séries. E passar um tempo comigo; lendo livros.
              <br/>
              <FaLinkedin className={styles.icons} onClick={() => window.open("https://www.linkedin.com/in/suelen-reche-55a43a79/")}/>
              <FaGithub className={styles.icons} onClick={() => window.open("https://github.com/suelenrechebrito")}/></p>
      </article>
            </div>
           </div>

        <div class={styles.flipcontainer}> 
            <div class={styles.flipper}>
            <article class={styles.front}>
                <img className={styles.img} src={Yta}/> <br/>
                <p className={styles.box}>Ytallo Bruno</p>
           </article>

           <article class={styles.back}>
              <p className={styles.txt}>Ytallo Bruno, morador do Rio de Janeiro, desenvolvedor Full Stack e é movido por música e cafézinho.
Apaixonado por animais, filmes, séries e games, além de um relacionamento sério com a tecnologia.
<br/>
              <FaLinkedin className={styles.icons} onClick={() => window.open("https://www.linkedin.com/in/ytallobruno/")}/>
              <FaGithub className={styles.icons} onClick={() => window.open("https://github.com/ytallobruno")}/></p>
            </article>
           </div>
           </div>
   
 </div>

    
       </div> 
<Footer />
</div>
)}

        
       