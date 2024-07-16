import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContextExample'


export default function Subchild() {
    const data = useContext(UserContext);
    console.log(data);
  return (
    <div>
       <h3>firstName:{data.firstname}</h3>
       <h3>lastname {data.lastname}</h3>
       <h3>email {data.email}</h3>
    </div>
  )
}
