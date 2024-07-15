import React,{useState} from 'react'

export default function UseState3() {
 
  const [firstName,setFirstName] = useState("");
  const [age,SetAge] = useState(0);
  const handleSubmit = (e) =>{
     e.preventDefault() ;
     let obj = {
        firstName:firstName,
        age :age,
     }
     console.log(obj);
  }
  const handleName = (e) =>{
   setFirstName(e.target.value)
  }
  const handleAge=(e)=>{
    SetAge(e.target.value);
  }
  return (
    <div>
        <form>
        <input type="text" name="name" id="name"placeholder='Enter your Name' value={firstName} onChange={handleName}/>
        <input type="number" name="age" id="age"placeholder='Enter your Age'  value={age} onChange={handleAge}/>
        <button onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}
