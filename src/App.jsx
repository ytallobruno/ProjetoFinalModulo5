<<<<<<< HEAD
import './App.css'
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import { Link, Outlet } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
=======
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import Carrinho from "./components/Carrinho/Carrinho";
import Loader from "./components/Loader/Loader";
>>>>>>> dc1cc2cbb19938355ebba88630871102859d2e35

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  return (
    <div className="App">
<<<<<<< HEAD
        <Header/>
        <Main />
        <Outlet />
        <Footer />
=======
      {isLoading == true ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/carrinho" element={<Carrinho />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
>>>>>>> dc1cc2cbb19938355ebba88630871102859d2e35
    </div>
  );
}

export default App;
