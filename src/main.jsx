import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Carrinho from './components/Carrinho/Carrinho'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="carrinho" element={<Carrinho />} />      
      </Route>
    </Routes>
  </BrowserRouter>
)
