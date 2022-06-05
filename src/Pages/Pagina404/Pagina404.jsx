import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pagina404.module.css";
import ResiliCucina from "../../assets/images/ResiliCucina.png";

export default function Pagina404() {
     return (

<body className={styles.container}>  
        <div className={styles.box}>
            <p className={styles.txt}><i>Dispiace.</i><br/>
            Desculpe, Página Não Encontrada!</p>
        </div>

        <Link to="/" >
            <img className={styles.img} src={ResiliCucina}/>
        </Link>

        <div className={styles.txt}>
            <p className={styles.txt}>Clique em nosso logo e retorne ao Home</p>
        </div>
</body>
    )
}

