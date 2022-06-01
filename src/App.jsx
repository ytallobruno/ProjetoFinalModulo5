import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Carrinho from './components/Carrinho/Carrinho'


function App() {

  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path='/carrinho' element={<Carrinho />} />
            </Route>
            
          </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
