import './App.css'
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <Header/>
        <Main />
        <Outlet />
    </div>
  )
}

export default App
