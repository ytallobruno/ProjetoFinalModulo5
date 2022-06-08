import React, { createContext, useState, useContext } from "react";

const ProdutosContext = createContext();

export default function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([]);



  return (
    <ProdutosContext.Provider
      value={{
        produtos,
        setProdutos,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  const context = useContext(ProdutosContext);
  const { produtos, setProdutos } = context;
  return { produtos, setProdutos };
}
