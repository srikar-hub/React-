import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContextExample'
import { MainContext } from './MainUseContext';
export default function Subchild() {
    const data = useContext(UserContext);
    console.log(data);
    const data1 = useContext(MainContext);
    console.log(data1)
  return (
    <div>
       <h3>firstName:{data.firstname}</h3>
       <h3>lastname {data.lastname}</h3>
       <h3>email {data.email}</h3>
    </div>
  )
}
