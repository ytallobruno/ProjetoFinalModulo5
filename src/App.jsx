import './App.css'
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import { Link, Outlet } from 'react-router-dom'
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="App">
        <Header/>
        <Main />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
