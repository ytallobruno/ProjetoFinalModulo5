import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './components/Pages/Main/Main'
import Carrinho from './components/Carrinho/Carrinho'
import Pagina404 from './components/Pages/Pagina404/Pagina404'


function App() {

  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path='/carrinho' element={<Carrinho />} />


              <Route path='*' element={<Pagina404/>} />
            </Route>
            
          </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
