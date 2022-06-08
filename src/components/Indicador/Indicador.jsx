import React, { useState } from "react";
import { useProdutos } from '../../../context/Cart';
import style from './Indicador.module.css'



export default function Indicador(props) {
const { produtos, setProdutos } = useProdutos();
const indicador = produtos.length
console.log(indicador)
  return (
    <div style={props.style}className={indicador > 0 ? style.indicador : style.indicadorOff}>
        <span style={{color: 'white'}}>{indicador}</span>
        </div>
  )
}

