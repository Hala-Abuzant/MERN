import React from 'react'
import { useState } from 'react';
import { navigate } from '@reach/router';

const Form = () => {

const Options =['people','planets'];

const[id,setId]=useState('');
const[option,setOption]=useState(Options[0]);

const handleOption=(e)=>{
    e.preventDefault();
    console.log(option);
    console.log(id);
    navigate('/'+option+'/'+id);

}


  return (
    <div>
      <form onSubmit={handleOption} >
        <label>Search for:</label>
        <select onChange={(e)=>setOption(e.target.value)}>
            {Options.map((option,id)=>{
                return (<option key={id}>{option}</option>)
            }
            
            )}
            
        </select>
        <input type="number" onChange={e=>setId(e.target.value)}/>

        <input type="submit" value="set"/>
      </form>
    </div>
  )
}

export default Form
