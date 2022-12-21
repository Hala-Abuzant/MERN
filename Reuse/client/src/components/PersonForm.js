import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
export default (props) => {

    const { initialFirstName, initialLastName, onSubmitProp } = props;// props for both create and update


    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("inside form component to weather creatre or update");
        onSubmitProp({firstName, lastName}); // here i used the functiom i sent as a prop  weather create or update
    }

    return (
        <form onSubmit={onSubmitHandler}>


                <TextField id="outlined-basic" 
                label="First Name" 
                variant="outlined"  
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={(e) => { setFirstName(e.target.value) }}/>

               <br/>
               <br/>
            
            <TextField id="outlined-basic" 
            label="Last Name" 
            variant="outlined"  
            type="text" 
            name="lastName" 
            value={lastName} 
            onChange={(e) => { setLastName(e.target.value) }} />
             <br/>
             <br/>

            <input type="submit" />
        </form>

    )
}

