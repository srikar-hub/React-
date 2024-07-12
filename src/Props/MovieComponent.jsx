import React from 'react'

export const data= [
    {
      title : "French Bull Dog" ,
      link :"https://www.dogbreedslist.info/uploads/dog-pictures/french-bulldog-1.jpg"
    },
    {
      title : "Golden Retriever",
      link :"https://www.dogbreedslist.info/uploads/dog-pictures/golden-retriever-1.jpg"
    }
  ]
  const MovieComponent= (props)=>{
      return (
        <article> 
        <h3>{props.title}</h3>
        <img src={props.link} alt="Netflix Show"/>
        </article>
      );
  }
  
export default MovieComponent

