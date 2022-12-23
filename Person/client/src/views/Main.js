import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);///here
                setLoaded(true);
                console.log("hi");
              
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>

           <PersonForm/>

           <hr/>
           
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;

