import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [user, setUser] =useState(null)

    const login = () => {
    
    }

    const logout = () => {
    
    }

    const signup = () => {
    
    }
    return (
        <UserContext.Provider value={(user,login,logout,signup)}>
            {children}
        </UserContext.Provider>
    )
}