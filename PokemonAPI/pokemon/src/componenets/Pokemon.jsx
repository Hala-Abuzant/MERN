import React,{useState,useEffect} from 'react'

const Pokemon = () => {
 const [pokemon, setPokemon] = useState([]);
 const [click,setClick]= useState(false);
 useEffect(() => {
   fetch(" https://pokeapi.co/api/v2/pokemon?limit=807%22")
     .then((response) => response.json())
     .then((response) => setPokemon(response.results));
 },[]);
 const fetching=()=>{
    click?setClick(false): setClick(true)
 }

 return (
   <div>
     <button onClick={fetching}>get pokemons</button>

     {click
       ? pokemon.map((pokemon, index) => {
           return <div key={index}>{pokemon.name}</div>;
         })
       : ""}
   </div>
 );
}

export default Pokemon