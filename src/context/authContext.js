import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const initialState = {}
    
    const [authState, setAuthState] = useState(initialState);

    const userLogin = data => {
        localStorage.setItem("user", JSON.stringify(data));
        setAuthState(data);
    }
    
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.clear();
        setAuthState(initialState);
    }

    const isAuthenticated = () => {
        if (localStorage.getItem("user") != null) {
            let token = JSON.parse(localStorage.getItem("user")).token;
            if (token != null && token !== "")
              return true;
            else
              return false;
        }
        return false;
    }

    return (
        <AuthContext.Provider
          value={{
            ...authState,
            isAuthenticated,
            userLogin,
            logout
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}