import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    },[]);//for getting list of people

    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                setPeople([...people, res.data]);
                console.log("lifted ");
            })
    }
    
    return (
        <div>

           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
           {/* lift the function as a prop */}

           <hr/>
           
           {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Main;

