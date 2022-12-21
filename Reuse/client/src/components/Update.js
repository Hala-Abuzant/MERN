import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';


const Update = (props) => {

    const { id } = props;//we insert it through path as a prop
    const [person, setPerson] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {

                console.log("inside get of edit");

                setPerson(res.data);

                console.log(res);

                setLoaded(true);
            })
            .catch(err=>console.log(err));
    }, [])

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => {console.log(res)
                console.log("inside update component")
            }
            
            );
    }// why i didnt put it inside form
    // because each time in update or create i need to send the function as prop with same name 

    
    return (
        <div>
            {loaded && (
    <PersonForm
        onSubmitProp={updatePerson}
        //  {/* lift the function  as a prop to use it in form */}
        initialFirstName={person.firstName}//initial value is not "" 
        initialLastName={person.lastName}
    />
    
)}

        <DeleteButton  personId={person._id} successCallback={() =>navigate("/")}/>
        </div>
    )
}
    
export default Update;

