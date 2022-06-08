import { Outlet } from "react-router-dom"
import TextoPrincipal from '../../components/Texto-principal/TextoPrincipal'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"


export default function Main () {

    return (

            <div>
                <NavBar />
                <TextoPrincipal />
                <Outlet />
                <Footer />
            </div>
    )
}