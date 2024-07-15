import React, { useState } from 'react'

export default function UseState4() {
  const [state,setState] = useState(false)
  const handleEventChange =() =>{
    setState(!state);
  }
  return (
    <div>
        <button style={{textAlign:"center"}} onClick={handleEventChange}>{ state ? "hide" :"show"}</button>
    {
        // state && (<h3>
        //     Hi i am Srikar from Mahabubnagar

        // </h3>)
 
        state ? <div>Hi i am srikar</div> : <div>Data is Hidden</div>
    }
    </div>
  )
}
