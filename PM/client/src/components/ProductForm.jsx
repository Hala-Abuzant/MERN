import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
export default (props) => {

    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;// props for both create and update


    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("inside form component to weather creatre or update");
        onSubmitProp({title, price,description}); // here i used the functiom i sent as a prop  weather create or update
    }

    return (
        <form onSubmit={onSubmitHandler}>
              
              <h1>Product Manager</h1>

                <TextField id="outlined-basic" 
                label="First Name" 
                variant="outlined"  
                type="text" 
                name="title" 
                value={title} 
                onChange={(e) => { setTitle(e.target.value) }}/>

            <br/>
            <br/>
            
            <TextField id="outlined-basic" 
            label="price" 
            variant="outlined"  
            type="text" 
            name="price" 
            value={price} 
            onChange={(e) => { setPrice(e.target.value) }} />
            <br/>
            <br/>

            <TextField id="outlined-basic" 
            label="description" 
            variant="outlined"  
            type="text" 
            name="description" 
            value={description} 
            onChange={(e) => {  setDescription(e.target.value) }} />
            <br/>
            <br/>

            <input type="submit" value="create" />
        </form>

    )
}

