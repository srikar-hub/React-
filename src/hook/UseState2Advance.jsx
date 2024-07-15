import React,{useState} from 'react'

export default function UseState2Advance() {

    let obj = {
        name : "sai",
        age : 18,
    }
    const [state,setState] = useState(obj)
    
    const handleChange = ()=>{
      if(state.name === "sai" && state.age === 18){
        setState({
           name : "srikar",
           age : 19,
        })
      }
      else{
        setState({
            name : "sai",
            age : 18,
         })

      }
    }
    
  return (
    <div>
      <h3>My name is {state.name}</h3>
    
        <h3>i am {state.age}</h3>
        <button onClick={handleChange}>CHange</button>
    </div>
  )
}
