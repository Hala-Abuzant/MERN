import axios from 'axios';
import React from 'react'
import { useState ,useEffect} from 'react'

const Pok = () => {

const[pok,setPok]=useState([]);


useEffect(() => {
    axios.get(" https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => setPok(response.data.results))
      .catch((err) => console.log(err))
  },[]);


// const handlePok=()=>{
//     axios.get(" https://pokeapi.co/api/v2/pokemon?limit=807")
//     .then((amin)=>setPok(amin.data.results))
//     console.log(pok);
// }


  return (
    
    <div>
    {/* <button onClick={handlePok}>hala</button> */}
    {pok.map((hala,id)=>{

        return<div key={id}>{hala.name}</div>
    })}
    </div>
  )
}

export default Pok
