
import Form from '../components/Form';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';

const Update = (props) => {
  const { id } = props;
  const [author, setAuthor] = useState({});//
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
      axios.get('http://localhost:8000/api/author/' + id)
          .then(res => {

              console.log("inside get of edit");

              setAuthor(res.data);

              console.log(res.data);

              setLoaded(true);
          })
          .catch(err=>console.log(err));
  }, [])

  const updateAuthor = author => {
      axios.put('http://localhost:8000/api/author/' + id, author)

          .then(res => {console.log(res)
              console.log("inside update component")
              navigate("/")
          }
          )

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
      <p>Edit this author:</p> 
      
      {errors.map((err, index) => <p key={index}>{err}</p>)}

{loaded && (<Form  onSubmitProp={updateAuthor}  initialName={author.name}/>)}
      
    </div>
  )
}

export default Update
