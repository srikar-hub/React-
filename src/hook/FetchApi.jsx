import React,{useState,useEffect} from 'react'


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export default function FetchApi() {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState('');

    const fetchData = async(url) =>{
      const response = await fetch(url);
      const {drinks} = await response.json();
      setData(drinks);
    }

    useEffect(()=>{
        const correctedUrl = `${URL}${search}`
        fetchData(correctedUrl);
    },[search])
  return (
    <div>
        <form>
      <input type="text" name="search" id="search" placeholder='Enter to search' onChange={(e) => setSearch(e.target.value)} value={search}/>
      </form>
      <ul>
        {
            data.map((eachdrink)=>{
                const {idDrink,strDrinkThumb,strDrink} = eachdrink;
                return  <li key={idDrink}>
                <div><img src={strDrinkThumb} alt="strDrink" /></div> 
                 <div>
                  <h3>{strDrink}</h3>
                 </div>
              </li>  
                     
            })
        }
      </ul>
    </div>
  )
}
