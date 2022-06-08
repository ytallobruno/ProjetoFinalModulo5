
import style from "./Login.module.css"
import { BrowserRouter} from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import Form from "../../components/Form/Form"
import Footer from "../../components/Footer/Footer"



export default function Login () {

    return (
        <div className={style.login}>
            <NavBar />
            <Form/>
            <Footer/>
           
        </div>
    )
}