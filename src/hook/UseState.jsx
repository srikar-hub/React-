import React,{useState} from 'react'

export default function UseState() {

    const [count,setCount] = useState(0);
    
    const handleIncrement = () => {
       
        setCount((prevCount)=>{
        return prevCount+1;
       })
       setCount((prevCount)=>{
        return prevCount+1;
       })
    }
    const handleDecrement = () => {
        setCount((prevCount)=>{
            return prevCount - 1;
        })
        setCount((prevCount)=>{
            return prevCount - 1;
        })
    }
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <h3 >{count}</h3>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}
