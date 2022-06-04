import React from "react";
import { Link } from "react-router-dom";
import "./Pagina404.module.css";
import ResiliCucina from "../assets/images/ResiliCucina.png";

export default function Pagina404() {
     return (

<body className="container">  
        <div className="txt">
            <p>Dispiace. Página Não Encontrada!</p>
        </div>

        <Link to="/" >
            <img className="img" src={ResiliCucina}/>
        </Link>

        <div className="txt">
            <h1>Clique em nosso logo e retorne ao Home</h1>
        </div>
</body>
    )
}

