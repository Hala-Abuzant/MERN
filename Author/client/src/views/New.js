
import {Link} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
const New = () => {
  const [errors, setErrors] = useState([]); 

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/author', author)
        .then(res=>{
          console.log("added author");
          navigate("/")
        
        })

        .catch(err=>
          {
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          
          // Set Errors
          setErrors(errorArr);
          console.log("hi from errors")

        }
      );  
}
  return (
    <div>
      <h1>Favourite Authors</h1>
      <Link to="/">Home</Link>
      <p>Add a new author:</p>

      {errors.map((err, index) => <p key={index}>{err}</p>)}

      <Form   onSubmitProp={createAuthor} initialName="" />
    </div>
  )
}

export default New
