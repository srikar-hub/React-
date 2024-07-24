import React from 'react'


 const data =[
    {
        firstname:'srikar',
        age:19,
    },
    {
        firstname:'sri',
        age:21,
    },

]
export const MainContext = React.createContext();

export const MainContextProvider = ({children})=>{
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}