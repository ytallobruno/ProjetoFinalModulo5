import { loadPlugin } from "@babel/core/lib/config/files";
import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export default function LoginProvider({ children }) {

  const [logged, setLogged] = useState(false)


  return (
    <LoginContext.Provider
      value={{
        logged,
        setLogged
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}



export function useLogin() {
  const context = useContext(LoginContext);
  const { logged, setLogged } = context;
  return { logged, setLogged};
}