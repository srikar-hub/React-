import React,{useState} from 'react'

export default function UseState5() {
    const [list,setList] = useState([]);
    const [message,setMessage] = useState({
        text:"",
        id:"",
    });
    const handleAdd = (e) =>{
       e.preventDefault();
       let newMessages={
        text : message.text,
        id : new Date().getTime().toString(),
       }
       setList([...list,newMessages]);
    setMessage({
        text:"",
        id :"",
    })
    }
    const handleChange = (e) =>{
        setMessage({
            ...message,
             text:e.target.value,
        });
    }

    const handleDelete = (comingid)=>{
      let newToDo = list.filter((eachitem)=>{
          return eachitem.id !== comingid ;
      })
      setList(newToDo);
    }
   const [editing,setEditing] = useState({
    id : "",
    isEditing :false,
   })
   const handleSubmit = (e) =>{
    e.preventDefault();
   
    
    let obj = list.map((eachitem)=> {
       if(eachitem.id === editing.id){
        return {
          text:message.text,
          id :editing.id,
        }
       }
       else{
        return eachitem;
       }
    })
    setList(obj);
    setMessage({
        id:"",
        text:"",
    })
    setEditing({
        id:"",
        isEditing: false,
       })
  }

  const handleEdit = (comingid) =>{
       setEditing({
        ...editing,
        id:comingid,
        isEditing: true,
       })
       let editableItem = list.find((eachobj)=>{
        return eachobj.id === comingid;
       })
       setMessage({
        ...message,
        text: editableItem.text,
        id: editableItem.id,
       })
    
  }
  return (
    <div>
        <form>
            <input type="text" name="something" id="something" value={message.text} onChange={handleChange}/>
            {
                  editing.isEditing ? (<button onClick={handleSubmit}>submit</button>) : (<button onClick={handleAdd}>add</button>)
            }
        </form>
        {
               list.length === 0  && <h3>There are no items in the List</h3>
            }

        <ul>
               
                {
                 list.map((eachobj) =>{
                       const {text,id} = eachobj;
                       return <li key={id}>   
                        <span>{text}</span><button onClick={()=>handleEdit(id)}>Edit</button><button onClick={() =>handleDelete(id)}>Delete</button>
                       </li>
                 })
                }      
        </ul>
    </div>
  )
}
