import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Planets = (props) => {
    const[planet,setPlanet]=useState([]);
    
    useEffect(() => {
     axios.get ('https://swapi.dev/api/planets/'+props.idp)
          
            .then(response => setPlanet(response.data))
            console.log(planet);
    }, [props.idp]);

  return (
    <div>
        <h3>Name: {planet.name}</h3>
    <p>Climate :{planet.climate}</p> 
    <p>Terrain :{planet.terrain} </p>
    <p>Surface water :{planet.surface_water} </p>
    <p>Population :{planet.population}</p>
    
    </div>
  )
  }
export default Planets
