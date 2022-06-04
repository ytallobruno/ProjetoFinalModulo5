import style from "./Main.module.css"
import { Link, Outlet } from "react-router-dom"
import Header from "../../Header/Header"
import TextoPrincipal from '../../components/Texto-principal/TextoPrincipal'
import NavBar from "../../components/NavBar/NavBar"
import TextoPrincipal from '../../components/Texto-principal/TextoPrincipal'
import Cardapio from "../../components/Cardapio/Cardapio"

export default function Main () {

    return (
        <div className={style.main}>
            <NavBar />
            <TextoPrincipal />
            <Outlet />
        </div>
    )
}