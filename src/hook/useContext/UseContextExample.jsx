import React from 'react'

const initialState = {
    firstname:"emma",
    lastname : "watson",
    email:"seuriejkd@gmail.com"
}
export const UserContext = React.createContext()

export const UserContextProvider = ({children}) =>{
    return <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
}
