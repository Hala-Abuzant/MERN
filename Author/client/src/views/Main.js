
import {Link} from '@reach/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List';
import { navigate } from '@reach/router';
const Main = () => {

    const [Authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = authorId => {
        setAuthors(Authors.filter(author => author._id != authorId));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
             
        
            })
            .catch(err => console.error(err));
    },[]);

  return (
    <div>
      <h1>Favourite Authors</h1>
      <Link to="/new">Add new Author</Link>
      <p>We have quots by:</p>
     
      {loaded && <List authors={Authors} removeFromDom={removeFromDom} />}
      
    </div>
  )
}

export default Main
