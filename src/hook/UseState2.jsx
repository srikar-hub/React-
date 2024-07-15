import React, { useState } from 'react'

export default function UseState2() {

    let info ={
        name:"Sai",
        age:18,
    }
    const [state,setState] = useState(info);

  const handleNameChange = () =>{
    setState({
        ...state,
        name:"Srikar",
      })
    
    
  }
  const handleAgeChange = ()=>{
    setState({
        ...state,
        age:19,
      })
      
      
     
  }
  return (
    <div>
        <h3>My name is {state.name}</h3>
        <button onClick={handleNameChange}>CHange name</button>
        <h3>i am {state.age}</h3>
        <button onClick={handleAgeChange}>change age</button>
    </div>
  )
}
