import React from 'react'
import { Children } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const[user, setUser] = useState(null);

    const login = (userData) =>{
        setIsAuthenticated(true);
        setUser(userData);
    }

    const logout = () =>{
        setIsAuthenticated(false);
        setUser(null);
    }

  return (
    <div>
      <AuthContext.Provider value={{isAuthenticated, login, logout, user}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
