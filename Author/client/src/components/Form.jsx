
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { navigate } from '@reach/router';
import Cancel from './Cancel';

const Form = (props) => {
const { initialName,  onSubmitProp } = props;
const [name, setName] = useState(initialName); 


const onSubmitHandler = e => {
    e.preventDefault();
    console.log("inside form component to weather creatre or update");
    onSubmitProp({name});//create object using name
     
}
  return (
    <div>

<form onSubmit={onSubmitHandler}>
          
  
    <br/>
    <br/>
    <TextField id="outlined-basic" 
    label="Name" 
    variant="outlined"  
    type="text" 
    name="Name" 
    value={name} 
    onChange={(e) => { setName(e.target.value) }}/>

    <br/>
    <br/>

    <input type="submit" value="create" /> 
    <Cancel/>
</form>
      
    </div>
  )
}

export default Form
