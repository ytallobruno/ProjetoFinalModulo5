import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Carrinho from "./components/Carrinho/Carrinho";
import Loader from "./components/Loader/Loader";
import Cardapio from "./components/Cardapio/Cardapio";
import SobreNos from "./components/SobreNos/SobreNos";
import Devs from "./components/Devs/Devs";
import Cadastro from "./components/Cadastro/Cadastro";
import Pagina404 from './Pages/Pagina404/Pagina404';
import ProdutosProvider from "../context/Cart";
import Form from './components/Form/Form'
import LoginProvider from "../context/Login";

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
        <ProdutosProvider>
        <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path="/cardapio" element={<Cardapio />}/>
            <Route path="/devs" element={<Devs/>}/>
            <Route path="/sobrenos" element={<SobreNos/>}/>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Form />} />
            <Route path='*' element={<Pagina404/>} />
          </Routes>
        </BrowserRouter>
        </LoginProvider>
        </ProdutosProvider>
      )}
    </div>

  );
}

export default App;
