import React,{useState} from 'react'

export default function UseStateExample1() {
  const [data,setData] = useState("sus");

  const handleChange = () =>{
   if(data === "sus"){
    setData("Srikar");
   }
   else{
    setData("sus");
   }
  }

  return (
    <div>
        <div>
            <h3>I am {data}</h3>
            <button onClick={handleChange}>change name</button>
        </div>
    </div>
    
  )
}
