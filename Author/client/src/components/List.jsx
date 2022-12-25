import React from 'react'
import DeleteButton from './DeleteButton';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';
const List = (props) => {

    const { removeFromDom } = props;

return (
    <div>



  <table style={{margin:"0 auto"}}>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                { props.authors.map((author, i) => <tr key={i}>
                    <td>{author.name}</td>
                    <td>
                        <button onClick={()=>navigate("/edit/" + author._id)}>Edit</button>
                        <DeleteButton id={author._id} successCallback={()=>removeFromDom(author._id)} />
                    </td>
                </tr>)}
            </tbody>
        </table>


    </div>
)
}

export default List
