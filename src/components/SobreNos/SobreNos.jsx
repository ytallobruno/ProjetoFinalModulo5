import React, {useState} from "react";
import familiaitaliana from "../../assets/images/familiaitaliana.jpg";
import restaurantefoto from "../../assets/images/restaurantefoto.jpg";
import styles from './SobreNos.module.css';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NossaFamilia from "../Modal/NossaFamilia";
import NossoRestaurante from "../Modal/NossoRestaurante";

export default function SobreNos () {
  const [isFamilyVisible, setIsFamilyVisible] = useState (false);
  const [isRestVisible, setIsRestVisible] = useState (false);
     return ( 
<div >
  <NavBar />
                <div className={styles.containergeral}>
                  <article className={styles.box}>
                  <img className={styles.img} src={familiaitaliana}/>
                  <p className={styles.txt} onClick={()=>{setIsFamilyVisible(true)}}> Nossa Família </p>
                    {isFamilyVisible ? (
                        <NossaFamilia onClose={()=> setIsFamilyVisible(false)}>
                            <NossaFamilia/>
                        </NossaFamilia>
                        ) : null}
                  </article>
               
              <article className={styles.box}>
               <img className={styles.img} src={restaurantefoto}/>
               <p className={styles.txt  } onClick={()=>{setIsRestVisible(true)}}> Nosso Restaurante </p>
                    {isRestVisible ? (
                        <NossoRestaurante onClose={()=> setIsRestVisible(false)}>
                            <NossoRestaurante/>
                        </NossoRestaurante>
                        ) : null}
              </article> 

              </div>
        
            
          
    <Footer/>

</div>
          
)  
}


