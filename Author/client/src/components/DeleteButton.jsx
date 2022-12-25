import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const {id, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res=>{
                console.log("inside delete");
                console.log(res);
                console.log(id);
                successCallback();
            })
    }

    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}





