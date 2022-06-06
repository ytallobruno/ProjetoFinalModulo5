import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Carrinho from "./components/Carrinho/Carrinho";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Cardapio from "./components/Cardapio/Cardapio";
import Pagina404 from './Pages/Pagina404/Pagina404';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  return (
    <div className="App">
      {isLoading == true ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path="/cardapio" element={<Cardapio />}/>
            <Route path='*' element={<Pagina404/>} />
          </Routes>
        </BrowserRouter>
        
      )}
    </div>
  );
}

export default App;
