import React,{useState,useEffect} from 'react'



const URL= "https://jsonplaceholder.typicode.com/user";
export default function UseEffect() {
   
    const [userData,setUserData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState({
        status:false,
        msg:"",
    })
    const fetchData = async(URL)=>{
      setLoading(true);
      setError({
        status:false,
        msg:"",
      })
       try {      
        const response =await fetch(URL);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
        setError({
            status:false,
            msg:"",
          })
        if(response.status === 404){
            throw new Error("data not found");
        }
       } catch (error) {
        setLoading(false);
        setError({
            status:true,
            msg:error.message || "Something went Wrong pls try again",
          })
       }
    }
    
    useEffect(()=>{
        fetchData(URL);
    },[]);

 if(loading){
    return <div>
        loading..
    </div>
 }
if(error.status){
    return <div style={{color:'red'}}>{error.msg}</div>
}
  return (
    <div>
    <ul>
        {
            userData.map((eachobj)=>{
                const {id,name,username} = eachobj;
                return <li key={id}>
                    <div>{name}</div>
                    <div>{username}</div>
                </li>
            })
        }
    </ul>
    </div>
  )
}
